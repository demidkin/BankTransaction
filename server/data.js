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


export function removeTransaction(id){
    const index = transactions.indexOf(t => t.id === id);
    if (index !== undefined) transactions = transactions.splice(index, 1);
}











