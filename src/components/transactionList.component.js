import React from 'react';
import { connect } from 'react-redux';
import { updateBankList } from 'src/actions/updateBankList.action'
import { updateTransactionsList } from 'src/actions/updateTransactionsList.action';
import { removeTransaction } from 'src/actions/removeTransaction.action';

class TransactionList extends React.Component {
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    bankName(id) {
        let bankName = 'Loding...'
        let index = this.props.banks.indexOf(id);
        if (index !== -1) bankName = banks[index];
        return bankName;
    }
    onClick(e) {
        // this.props.removeTransaction({ token: token, transactionId: e.target.value }).then(response => {
        //     if (response.status === 200) response.json().then(() => this.getTransactions())
        //     else{ response.json().then( (res) => this.setState({ errors :res }) )}
        // })
        
        this.updateTransactionList();
    }
    componentWillMount(){
        this.props.updateTransactionsList({ token: this.props.token });
        this.props.updateBankList({ token: this.props.token });
    }  
    render(){
        let Transactions;
        if (this.props.transactions) 
            Transactions = this.props.transactions.map((tr) =>
                <tr key={'rowTransactionId' + tr.id}>
                    <td>{ tr.id }</td>
                    <td>{ tr.ammount }</td>
                    <td>{ bankName(tr.bankId) }</td>
                    <td>
                        <button name={'button' + tr.id} value={tr.id} onClick={this.props.onClick}>Remove</button>
                    </td>
                </tr>
        );
        return (
            <table>
                <caption>Transactions</caption>
                <thead>
                    <tr><td>ID</td><td>Ammount</td><td>Bank</td><td>Action</td></tr>
                </thead>
                <tbody>
                    {Transactions}
                </tbody>
            </table>
        );
    } 
}

export default connect( state => ({ 
        token: state.tokenStore.token,
        banks : state.banksStore.banks, 
        transactions : state.transactionStore.transactions 
    }), { 
        removeTransaction,
        updateBankList,
        updateTransactionsList
    })(TransactionList);