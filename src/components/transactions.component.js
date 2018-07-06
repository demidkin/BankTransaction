import React from 'react';
import { connect } from 'react-redux';
import { loadBanks } from '../actions/loadBanks.action'
import { saveBanksToStor } from '../actions/saveBanksToStor.action';
import { loadTransactions } from '../actions/loadTransactions.action';
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
        this.onClick = this.onClick.bind(this);
    }

    onClick(e){
        console.log(e.target.name, e.target.value);
    }
    componentWillMount(){
        this.getTransactions();
    }   

    componentDidMount() {
        
        this.updateState();
       
        setInterval(this.updateState.bind(this), 10e3)
    }

    updateState() {
        
    }

    getTransactions(){
        const userid = this.props.store.tokenStore[0].userid;
        const token = this.props.store.tokenStore[0].token;

        if ( token !== null &&  userid !== null )
            this.props.loadBanks({ userId: userid, token: token })
            .then(
                (res) => { 
                    this.props.saveBanksToStor(res.data);
                    this.props.loadTransactions({ userId: userid, token: token, banks: res.data })
                },
                (erorr) => { 
                    this.setState({ errors : erorr.response.data })
                }
            );

    }

    updateBankName(){
        const trarr = this.state.transactions;
        const userid = this.props.store.tokenStore[0].userid;
        const token = this.props.store.tokenStore[0].token;

        trarr.forEach(transaction => {
            this.props.getBankById({ userId: userid, token: token, bankId: transaction.bankId });

            
        });
    }



    render(){

        var transactions = [];
        if (this.props.store.transactionStore[0] !== undefined){
            transactions = Array.from(this.props.store.transactionStore[0]);
        }
        console.log(transactions);
        return (
            <div className="transactions">
                <table>
                    <caption>Transactions</caption>
                    <thead>
                        <tr><td>ID</td><td>Ammount</td><td>Bank</td><td>Action</td></tr>
                    </thead>
                    <TransactionList transactions={transactions} onClick={this.onClick}/>
                </table>
            </div>
        );
    } 
}

class TransactionList extends React.Component {

    render(){
        const Transactions = this.props.transactions.map((tr) =>
            <tr key={'rowTransactionId' + tr.id}>
                <td>{tr.id}</td>
                <td>{tr.ammount}</td>
                <td>{tr.bank}</td>
                <td>
                    <button name={'button' + tr.id} value={tr.id} onClick={this.props.onClick}>Remove</button>
                </td>
            </tr>
        );
        return (
            <tbody>
                {Transactions}
            </tbody>
        );
    } 
}

export default connect( state => ({ store: state }), { loadBanks, saveBanksToStor, loadTransactions })(Transactions);