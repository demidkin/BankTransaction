import React from 'react';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import { updateBankList } from 'src/actions/updateBankList.action'
import { updateTransactionsList } from 'src/actions/updateTransactionsList.action';
import { transactionAdd } from 'src/actions/transactionAdd.action';
import TransactionList from 'src/components/transactionList.component';
import 'src/sass/transactions.component.scss';
import 'src/sass/transactions-add.component.scss'

const customStylesModal = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
};

class Transactions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            ammount : '',
            bankId : '',
            isLoading: false
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        ReactModal.setAppElement('#root');
    }

    openModal() {
        this.setState({ modalIsOpen: true, ammount : '',  bankId : this.props.banks[0].id });
    }
    
    afterOpenModal() {
        this.subtitle.style.color = '#f00';
    }
    
    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    componentWillMount() {
        this.props.updateBankList({ token: this.props.token });
        this.props.updateTransactionsList({ token: this.props.token });
    }

    onSubmit(e) {
        this.setState({ isLoading: true });
        this.props.transactionAdd({ token: this.props.token, ammount: this.state.ammount, bankId: this.state.bankId }, (isOk) => {
            if (isOk){
                this.setState({ modalIsOpen: false });
                this.props.updateTransactionsList({ token: this.props.token });    
            }
            this.setState({ isLoading: false });
        });
    }

    render(){
        let Banks;
        if (this.state.modalIsOpen && this.props.banks) {
            Banks = this.props.banks.map((bank) => <option key={'bankid' + bank.id} value={bank.id}>{bank.name}</option>);
        }
        const errors = this.props.errors;
        return (
            <div className="transactions">
                <button onClick={this.openModal}>Add transaction</button><br />
                <TransactionList />
                <ReactModal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStylesModal}>
                        <div className="transaction-add">
                            <h2 ref={subtitle => this.subtitle = subtitle}>New transacion</h2>
                            <label htmlFor="ammount-input">Ammount: </label>
                            <input type="number" id="ammount-input" name="ammount" onChange={this.onChange}/>
                            <label htmlFor="bank-input">Bank: </label>
                            <select name="bankId" size="1" onChange={this.onChange}>
                                {Banks}
                            </select>
                            <button onClick={this.onSubmit} disabled={this.state.isLoading}>Add transaction</button>
                            <div>
                                {errors && errors.ammount && <span>{errors.ammount}</span>}
                                {errors && errors.bankId && <span>{errors.bankId}</span>}
                            </div>
                        </div>
                </ReactModal>

            </div>
        );
    } 
}

export default connect( state => ({ 
        token: state.tokenStore.token,
        banks : state.banksStore.banks,
        errors: state.errorsStore.errors
    }), { 
        updateBankList, 
        updateTransactionsList,
        transactionAdd
    })(Transactions);