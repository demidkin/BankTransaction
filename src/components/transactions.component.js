import React from 'react';
import { connect } from 'react-redux';
import { updateBankList } from 'src/actions/updateBankList.action'
import { updateTransactionsList } from 'src/actions/updateTransactionsList.action';
import TransactionList from 'src/components/transactionList.component';
import 'src/sass/transactions.component.scss';

class Transactions extends React.Component {
    
 
        // .then(response => {
        //         if (response.status === 200){
        //             response.json().then((res) => { 
        //                 this.props.saveBanksToStor(res);
        //                 this.props.loadTransactions({ userId: userid, token: token, banks: res })
        //             })
        //         }
        //         else{
        //             response.json().then(
        //             (res) => {
        //                 this.setState({ errors : res })
        //             })                  
        //         }
        //     })

    // updateBankName(){
    //     const trarr = this.state.transactions;
    //     const userid = this.props.store.tokenStore.userid;
    //     const token = this.props.store.tokenStore.token;
    //     trarr.forEach(transaction => {
    //         this.props.getBankById({ userId: userid, token: token, bankId: transaction.bankId });
    //     });
    // }
    render(){
        return (
            <div className="transactions">
                <button>Add transaction</button><br />
                <TransactionList />
            </div>
        );
    } 
}

export default connect( state => ({ 
        token: state.tokenStore.token, 
    }), { 
        updateBankList, 
        updateTransactionsList
    })(Transactions);