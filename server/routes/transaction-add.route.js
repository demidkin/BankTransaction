import express from 'express';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';
import { tokens, transactions, addTransaction, banks } from '../data';

let router = express.Router();

function validatorInput(data) {
    let errors = {};

    if (data.userId === undefined || Validator.isEmpty(data.userId + '')){
        errors.userId = 'UserId is required';
    }
    if (data.token === undefined || Validator.isEmpty(data.token + '')){
        errors.token = 'Token is required';
    }
    if (data.ammount === undefined || Validator.isEmpty(data.ammount + '')){
        errors.ammount = 'Ammount is required';
    }
    else if (!Validator.isNumeric(data.ammount)){
        errors.ammount = 'Ammount is numeric';
    }
    console.log('data bankId ==============', data.bankId)
    if (data.bankId === undefined || Validator.isEmpty(data.bankId + '')){
        errors.bankId = 'Bank is required';
    }
    
    const bank = banks.find(b => b.id === parseInt(data.bankId));
    if (bank === undefined){
        errors.bankId = 'Unknown bank';
    }

    return { errors, isValid: isEmpty(errors)};
}


router.post('/', (req, res) => {
    const { errors, isValid } = validatorInput(req.body);
    if (isValid) {
        const { userId, token, ammount, bankId } = req.body;
        const user = tokens.find(u => u.userid === userId);
        if (user !== undefined && user.token === token ){
            addTransaction( parseInt(ammount), parseInt(bankId) );
            console.log('Transaction add: ', transactions);
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