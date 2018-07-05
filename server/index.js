import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import users from './routes/users';

let app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(bodyParser.json());

app.use('/api/users', users);

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../dist/index.html'));
// });

app.listen(3000, () => console.log('Rining on localhost:3000'));