import isEmpty from 'lodash/isEmpty';
import Validator from 'validator';
import Bank from '../src/classes/bank.class'
import Transaction from '../src/classes/transaction.class'

export const ValidatorType = {
    TOKEN : 0,
    GET_BANK : 1,
    LOGIN : 2,
    ADD_TRANSACTION : 3,
    REMOVE_TRANCATION : 4,
    SIGNUP : 5
}

//easy databases
export const users = [];
export const emails = [];
export const banks = [];
export var transactions = [];
export const tokens = [];
export var transactionIndex = 1000;



//demo data banks
banks.push(new Bank(100,'Сбербанк России'));
banks.push(new Bank(101,'ВТБ'));
banks.push(new Bank(102,'Альфа-Банк'));
banks.push(new Bank(103,'Газпромбанк'));
banks.push(new Bank(104,'Россельхозбанк'));

//demo data transactions
transactions.push(new Transaction(transactionIndex++, 200, 104));
transactions.push(new Transaction(transactionIndex++, 250, 103));
transactions.push(new Transaction(transactionIndex++, 100, 102));
transactions.push(new Transaction(transactionIndex++, 150, 101));
transactions.push(new Transaction(transactionIndex++, 1000, 100));


export function addTransaction(ammount, bankId){
    transactions.push(new Transaction(transactionIndex++, ammount, bankId));
}


export function removeTransaction(Id){
    const index = transactions.map(tr => tr.id).indexOf(parseInt(Id));
    if (index !== undefined) transactions.splice(index, 1);
}
export function logoutUser(_token){
    const index = tokens.map(t => t.token).indexOf(_token);
    console.log('Logout user: ', _token, ' index: ', index);
    if ( index !== -1 ) tokens.splice(index, 1);  
}

export function logoutUserByEmail(_userid){
    const index = tokens.map(t => t.userid).indexOf(_userid);
    console.log('Logout user: ', _userid, ' index: ', index);
    if ( index !== -1 ) tokens.splice(index, 1);  
}

export function isValidToken(_token) {
    const index = tokens.map(t => t.token).indexOf(_token);
    if ( index !== -1 ) return true;
    else return false;
}


export function validatorInput(data, validate) {
    let errors = {};
    if (validate.token){
        if(!isValidToken(data.token)) {
            errors.token = 'Invalid token'
        }
        if (!data.token || Validator.isEmpty(data.token + '')) {
            errors.token = 'Token is required';
        }
    }
    if (validate.bankId){
        if (!data.bankId || Validator.isEmpty(data.bankId + '')) {
            errors.bankId = 'BankId is required';
        }
        let bank = banks.find(b => b.id == data.bankId);
        if (!bank) {
            errors.bankId = 'Unknown bank';
        }
    }
    if (validate.email){
        if (!data.email || Validator.isEmpty(data.email + '')){
            errors.email = 'Email is required';
        }
        else if (!Validator.isEmail(data.email)){
            errors.email = 'Email is invalid';
        }
    }
    if (validate.password){
        if (!data.password || Validator.isEmpty(data.password + '')){
            errors.password = 'Password is required';
        }
    }
    if (validate.ammount){
        if (!data.ammount || Validator.isEmpty(data.ammount + '')){
            errors.ammount = 'Ammount is required';
        }
        else if (!Validator.isNumeric(data.ammount)){
            errors.ammount = 'Ammount is numeric';
        }
    }
    if (validate.transactionId){
        if (!data.transactionId || Validator.isEmpty(data.transactionId + '')){
            errors.transactionId = 'TransactionsId is required';
        }
        let transaction = transactions.find(t => t.id === parseInt(data.transactionId));
        if (!transaction){
            errors.bankId = 'Unknown transaction';
        }
    }
    return { errors, isValid: isEmpty(errors)};
}










