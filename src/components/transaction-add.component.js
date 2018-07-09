import React from 'react';
import { connect } from 'react-redux';
import { loadBanks } from '../actions/loadBanks.action';
import { saveBanksToStor } from '../actions/saveBanksToStor.action';
import { addTransaction } from '../actions/addTransaction.action';
import '../sass/transactions-add.component.scss'


class TransactionAdd extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            ammount: '',
            bankId: '',
            isLoading: false,
            errors: {}
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    componentWillMount(){
        const userid = this.props.store.tokenStore.userid;
        const token = this.props.store.tokenStore.token;
        this.props.store.banksStore[0] = undefined;

        if ( token !== null &&  userid !== null )
            this.props.loadBanks({ userId: userid, token: token}).then(response => {
                if (response.status === 200){
                    response.json().then((res) => { 
                        this.props.saveBanksToStor(res);
                        this.setState({bankId: this.props.store.banksStore.banks[0].id});
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

    onSubmit(e){
        const userid = this.props.store.tokenStore.userid;
        const token = this.props.store.tokenStore.token;

        this.setState({ errors: {}, isLoading: true});
        e.preventDefault();
        this.props.addTransaction({ userId: userid, token: token, ammount: this.state.ammount, bankId: this.state.bankId }).then(response => {
            if (response.status === 200){
                response.json().then((res) => { 
                    this.props.history.push('/transactions');
                })
            }
            else{
                response.json().then(
                (res) => { 
                    this.setState({errors: res, isLoading: false})
                })                  
            }
        })
    }

    render(){
        const { errors } = this.state;
        const banks = this.props.store.banksStore.banks;
        return (
            <form className="transaction-add" onSubmit={this.onSubmit}>
                <fieldset>
                    <legend>New transaction</legend>
                    <label htmlFor="ammount-input">Ammount: </label>
                    <input type="number" id="ammount-input" name="ammount" onChange={this.onChange}/>
                    <label htmlFor="bank-input">Bank: </label>
                    <BankSelect banks={banks} onChange={this.onChange}/>

                    <input type="submit" value="Add transaction" name="" disabled={this.state.isLoading}/>
                </fieldset>
                <div>
                    {errors.ammount && <span>{errors.ammount}</span>}
                    {errors.bankId && <span>{errors.bankId}</span>}
                </div>
            </form>
        );
    } 
}

class BankSelect extends React.Component {

    render(){
        let Banks;
        if (this.props.banks) Banks = this.props.banks.map((bank) =>
            <option key={'bankid' + bank.id} value={bank.id}>{bank.name}</option>
        );
        return (
            <select name="bankId" size="1" onChange={this.props.onChange}>
                {Banks}
            </select>
        );
    } 
}

export default connect( state => ({ store: state }), { loadBanks, saveBanksToStor, addTransaction })(TransactionAdd);