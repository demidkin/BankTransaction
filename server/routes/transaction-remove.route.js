import express from 'express';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';
import { tokens, transactions, transactionIndex } from '../data';
import Transaction from '../../src/classes/transaction.class';

let router = express.Router();

function validatorInput(data) {
    let errors = {};

    if (Validator.isEmpty(data.userId)){
        errors.userId = 'UserId is required';
    }
    if (Validator.isEmpty(data.token)){
        errors.token = 'Token is required';
    }
    if (Validator.isEmpty(data.transactionsId)){
        errors.transactionsId = 'TransactionsId is required';
    }
    const transaction = transactions.find(t => t.id === data.transactionsId);
    if (transaction === undefined){
        errors.bankId = 'Unknown transaction';
    }

    return { errors, isValid: isEmpty(errors)};
}


router.post('/', (req, res) => {
    const { errors, isValid } = validatorInput(req.body);
    if (isValid) {
        const { userId, token, transactionsId } = req.body;
        const user = tokens.find(u => u.userid === userId);
        if (user !== undefined && user.token === token ){
            removeTransaction(transactionsId);
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