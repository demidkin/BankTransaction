import React from 'react';
import { connect } from 'react-redux';
import { loadTransactions } from '../actions/loadTransactions.action'
import { getBankById } from '../actions/getBankById.action'
import '../sass/transactions.component.scss'


class Transactions extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
            token: '',
            userid: '',
            transactions: [],
            transactionsNamedBank: []
        }
    }

    componentWillMount(){
        this.loadTokenInTheStor();
        this.getTransactions();
    }   

    componentDidMount() {
        
        this.updateState();
       
        setInterval(this.updateState.bind(this), 10e3)
    }

    updateState() {
        
    }

    getTransactions(){
        const userid = this.props.tokenStore.tokenStore[0].userid;
        const token = this.props.tokenStore.tokenStore[0].token;

        if ( token !== undefined &&  userid !== undefined){
            this.props.loadTransactions({ userId: userid, token: token })
            .then(
                (res) => {
                    this.setState({transactions : res.data})
                    this.updateBankName();
                    console.log(this.state.transactions)
                },
                (erorr) => this.setState({ errors: erorr.response.data }))
        }
    }

    updateBankName(){
        const trarr = this.state.transactions;
        const userid = this.props.tokenStore.tokenStore[0].userid;
        const token = this.props.tokenStore.tokenStore[0].token;

        trarr.forEach(transaction => {
            this.props.getBankById({ userId: userid, token: token, bankId: transaction.bankId });

            
        });
    }


    
    loadTokenInTheStor(){
        this.setState({ token: this.props.tokenStore.tokenStore[0].token });
        this.setState({ userid: this.props.tokenStore.tokenStore[0].userid});
    }


    render(){
        return (
            <div className="transactions">
                <h2>Transactions</h2>
            </div>
        );
    } 
}

export default connect( state => ({ transactionStore: state }, {tokenStore: state}), { loadTransactions, getBankById })(Transactions);