import Bank from '../src/classes/bank.class'
import Transaction from '../src/classes/transaction.class'

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
export function logoutUser(userId){
    const index = tokens.map(t => t.userid).indexOf(userId);
    console.log('Logout user: ', userId, ' index: ', index);
    if (index !== -1) tokens.splice(index, 1);  
}











