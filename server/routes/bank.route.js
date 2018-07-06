import express from 'express';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';
import { tokens, banks } from '../data';

let router = express.Router();

function validatorInput(data) {
    let errors = {};
    console.log(data.userId);
    console.log(data.token);
    console.log(data.bankId);
    if (data.userId === undefined || Validator.isEmpty(data.userId + '')){
        errors.userId = 'UserId is required';
    }
    if (data.token === undefined || Validator.isEmpty(data.token + '')){
        errors.token = 'Token is required';
    }
    if (data.bankId === undefined || Validator.isEmpty(data.bankId + '')){
        errors.bankId = 'BankId is required';
    }
    const bank = banks.find(b => b.id === data.bankId);
    if (bank === undefined){
        errors.bankId = 'Unknown bank';
    }

    
    return { errors, isValid: isEmpty(errors)};
}


router.post('/', (req, res) => {
    const { errors, isValid } = validatorInput(req.body);
    console.log('req: ', req.body);
    if (isValid) {
        const { userId, token, bankId } = req.body;
        const user = tokens.find(u => u.userid === userId);
        if (user !== undefined && user.token === token ){
            
            const index = banks.indexOf(b => b.id === parseInt(bankId));
            console.log(banks);
            console.log('index = ', index);
            console.log('bankId = ', bankId);

            console.log('Bank: ', banks[index]);

            res.json(banks[index]);
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