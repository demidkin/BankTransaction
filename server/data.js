import Bank from '../src/classes/bank.class'
import Transaction from '../src/classes/transaction.class'

//easy databases
export const users = [];
export const emails = [];
export const banks = [];
export var transactions = [];
export const tokens = [];
export var transactionIndex = 0;



//demo data banks
banks.push(new Bank(0,'Сбербанк России'));
banks.push(new Bank(1,'ВТБ'));
banks.push(new Bank(2,'Альфа-Банк'));
banks.push(new Bank(3,'Газпромбанк'));
banks.push(new Bank(4,'Россельхозбанк'));

//demo data transactions
transactions.push(new Transaction(transactionIndex++, 200, 4));
transactions.push(new Transaction(transactionIndex++, 250, 3));
transactions.push(new Transaction(transactionIndex++, 100, 2));
transactions.push(new Transaction(transactionIndex++, 150, 1));
transactions.push(new Transaction(transactionIndex++, 1000, 0));


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











