import React from 'react';
import { connect } from 'react-redux';
import { updateBankList } from 'src/actions/updateBankList.action'
import { updateTransactionsList } from 'src/actions/updateTransactionsList.action';
import { transactionRemove } from 'src/actions/transactionRemove.action';

class TransactionList extends React.Component {
    constructor(props){
        super(props);
        this.removeTransactionHandler = this.removeTransactionHandler.bind(this);
    }

    getBankName(_id) {
        let bankName = 'Loding...'
        if (this.props.banks){
            bankName = this.props.banks.find(b => b.id === _id).name;
        }
        return bankName;
    }

    removeTransactionHandler(e) {
        this.props.transactionRemove({ token: this.props.token, transactionId: e.target.value }, (isOk) =>{
            if (isOk) {
                this.props.updateTransactionsList({ token: this.props.token });            
            }
        });
    }
    
    render(){
        let Transactions;
        if (this.props.transactions && this.props.banks)
            Transactions = this.props.transactions.map((tr) =>
                <tr key={'rowTransactionId' + tr.id}>
                    <td>{ tr.id }</td>
                    <td>{ tr.ammount }</td>
                    <td>{ this.getBankName(tr.bankId) }</td>
                    <td>
                        <button name={'button' + tr.id} value={tr.id} onClick={this.removeTransactionHandler}>Remove</button>
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

export default connect( store => ({ 
        token: store.tokenStore.token,
        banks : store.banksStore.banks, 
        transactions : store.transactionStore.transactions 
    }), { 
        transactionRemove,
        updateBankList,
        updateTransactionsList
    })(TransactionList);