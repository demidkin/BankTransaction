import React from 'react';
import { connect } from 'react-redux';
import { loadBanks } from '../actions/loadBanks.action'
import { saveBanksToStor } from '../actions/saveBanksToStor.action';
import { loadTransactions } from '../actions/loadTransactions.action';
import { removeTransaction } from '../actions/removeTransaction.action';
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
        const userid = this.props.store.tokenStore.userid;
        const token = this.props.store.tokenStore.token;

        this.props.removeTransaction({ userId: userid, token: token, transactionId: e.target.value }).then(response => {
            if (response.status === 200) response.json().then(() => this.getTransactions())
            else{ response.json().then( (res) => this.setState({ errors :res }) )}
        })   
    }
    componentWillMount(){
        this.getTransactions();
    }   

    componentDidMount() {
        
    }

    getTransactions(){
        const userid = this.props.store.tokenStore.userid;
        const token = this.props.store.tokenStore.token;
        if ( token !== null &&  userid !== null )
            this.props.loadBanks({ userId: userid, token: token}).then(response => {
                if (response.status === 200){
                    response.json().then((res) => { 
                        this.props.saveBanksToStor(res);
                        this.props.loadTransactions({ userId: userid, token: token, banks: res })
                    })
                }
                else{
                    response.json().then(
                    (res) => {
                        this.setState({ errors : res })
                    })                  
                }
            })
    }

    updateBankName(){
        const trarr = this.state.transactions;
        const userid = this.props.store.tokenStore.userid;
        const token = this.props.store.tokenStore.token;
        trarr.forEach(transaction => {
            this.props.getBankById({ userId: userid, token: token, bankId: transaction.bankId });
        });
    }



    render(){
        let { transactions } = this.props.store.transactionStore;
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
        let Transactions;
        if (this.props.transactions) Transactions = this.props.transactions.map((tr) =>
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

export default connect( state => ({ store: state }), { loadBanks, saveBanksToStor, loadTransactions, removeTransaction })(Transactions);