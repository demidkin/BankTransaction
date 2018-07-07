import express from 'express';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';
import { tokens, transactions, removeTransaction } from '../data';
import Transaction from '../../src/classes/transaction.class';

let router = express.Router();

function validatorInput(data) {
    let errors = {};

    if (data.userId === undefined || Validator.isEmpty(data.userId + '')){
        errors.userId = 'UserId is required';
    }
    if (data.token === undefined || Validator.isEmpty(data.token + '')){
        errors.token = 'Token is required';
    }
    if (data.transactionId === undefined || Validator.isEmpty(data.transactionId + '')){
        errors.transactionId = 'TransactionsId is required';
    }
    const transaction = transactions.find(t => t.id === parseInt(data.transactionId));
    console.log('transactionId: ',data.transactionId)
    if (transaction === undefined){
        errors.bankId = 'Unknown transaction';
    }

    return { errors, isValid: isEmpty(errors)};
}


router.post('/', (req, res) => {
    const { errors, isValid } = validatorInput(req.body);
    if (isValid) {
        const { userId, token, transactionId } = req.body;
        const user = tokens.find(u => u.userid === userId);
        if (user !== undefined && user.token === token ){
            removeTransaction(transactionId);
            console.log('Transaction remove: ', transactions);
            res.json({succsess : true});
        }
        else {
            res.status(400).json({ email: 'Invalid token' });
        }            
    } else {
        console.log(errors);
        res.status(400).json(errors);
    }
});

export default router;