import express from 'express';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';
import { tokens, transactions } from '../data';

let router = express.Router();

function validatorInput(data) {
    let errors = {};

    if (data.userId === undefined || Validator.isEmpty(data.userId)){
        errors.userId = 'UserId is required';
    }
    if (data.token === undefined || Validator.isEmpty(data.token)){
        errors.token = 'Token is required';
    }
    return { errors, isValid: isEmpty(errors)};
}


router.post('/', (req, res) => {
    const { errors, isValid } = validatorInput(req.body);
    if (isValid) {
        const { userId, token } = req.body;
        console.log(req.body);
        const tok = tokens.find(t => t.userid === userId);
        console.log(tok);
        if (tok !== undefined && tok.token === token ){
            console.log('Transactions: ',transactions);
            res.json(transactions);
        }
        else {
            res.status(400).json({ token: 'Invalid token' });
        }            
    } else {
        console.log(errors);
        res.status(400).json(errors);
    }
});

export default router;