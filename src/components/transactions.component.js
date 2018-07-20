import React from 'react';
import { connect } from 'react-redux';
import { updateBankList } from 'src/actions/updateBankList.action'
import { updateTransactionsList } from 'src/actions/updateTransactionsList.action';
import { transactionAdd } from 'src/actions/transactionAdd.action';
import TransactionList from 'src/components/transactionList.component';
import AddTransaction from 'src/components/addTranscation.popup.component'
import 'src/sass/transactions.component.scss';
import 'src/sass/transactions-add.component.scss'

class Transactions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
        };
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
    }
   
    closeModal(isOk) {
        if (isOk) {
            this.props.updateTransactionsList({ token: this.props.token });
        }
        this.setState({ modalIsOpen: false });
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    componentWillMount() {
        this.props.updateBankList({ token: this.props.token });
        this.props.updateTransactionsList({ token: this.props.token });
    }


    render(){
        return (
            <div className="transactions">
                <button onClick={this.openModal}>Add transaction</button><br />
                <TransactionList />
                <AddTransaction modalIsOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} />
            </div>
        );
    } 
}

export default connect( store => ({ 
        token: store.tokenStore.token,
        banks : store.banksStore.banks,
        errors: store.errorsStore.errors
    }), { 
        updateBankList, 
        updateTransactionsList,
        transactionAdd
    })(Transactions);