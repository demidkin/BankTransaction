import React from 'react';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import { transactionAdd } from 'src/actions/transactionAdd.action';

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

class AddTransaction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ammount : '',
            bankId : '',
            isLoading: false
        };

        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        ReactModal.setAppElement('#root');
    }

    
    afterOpenModal() {
        this.subtitle.style.color = '#f00';
        this.setState({ bankId: this.props.banks[0].id });
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }


    onSubmit(e) {
        this.setState({ isLoading: true });
        this.props.transactionAdd({ token: this.props.token, ammount: this.state.ammount, bankId: this.state.bankId }, (isOk) => {
            if (isOk){
                this.props.onRequestClose(true);
            }
            this.setState({ isLoading: false });
        });
    }

    render(){
        let Banks;
        if (this.props.modalIsOpen && this.props.banks) {
            Banks = this.props.banks.map((bank) => <option key={'bankid' + bank.id} value={bank.id}>{bank.name}</option>);
        }
        const errors = this.props.errors;
        return (
                <ReactModal
                    isOpen={this.props.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.props.onRequestClose}
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
        );
    } 
}

export default connect( store => ({ 
        token: store.tokenStore.token,
        banks : store.banksStore.banks,
        errors: store.errorsStore.errors
    }), {
        transactionAdd
    })(AddTransaction);