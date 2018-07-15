import express from 'express';
import bodyParser from 'body-parser';
import usersRoute from './routes/users.route';
import loginRoute from './routes/login.route';
import logoutRoute from './routes/logout.route';
import transactionsRoute from './routes/transactions.route';
import banksRoute from './routes/banks.route';
import bankRoute from './routes/bank.route';
import transactionsAddRoute from './routes/transaction-add.route';
import transactionsRemoveRoute from './routes/transaction-remove.route';
import { banks, transactions} from './data'

let app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(bodyParser.json());

app.use('/api/users', usersRoute);
app.use('/api/auth', loginRoute);
app.use('/api/logout', logoutRoute);
app.use('/api/getTransactions', transactionsRoute);
app.use('/api/getBanks', banksRoute);
app.use('/api/getBankByID', bankRoute);
app.use('/api/addTransaction', transactionsAddRoute);
app.use('/api/removeTransaction', transactionsRemoveRoute);

app.get('/*', (req, res) =>{
  res.send('API IS WORK!');
});

console.log('======Demo data banks ================');
console.log(banks);
console.log('======Demo data transactions==========');
console.log(transactions);


app.listen(3000, () => console.log('Running  on http://localhost:3000'));