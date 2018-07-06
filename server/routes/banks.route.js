import express from 'express';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';
import { tokens, banks } from '../data';

let router = express.Router();

function validatorInput(data) {
    let errors = {};

    if (data.userId === undefined || Validator.isEmpty(data.userId + '')){
        errors.userId = 'UserId is required';
    }
    if (data.token === undefined || Validator.isEmpty(data.token + '')){
        errors.token = 'Token is required';
    }
    return { errors, isValid: isEmpty(errors)};
}


router.post('/', (req, res) => {
    const { errors, isValid } = validatorInput(req.body);
    if (isValid) {
        const { userId, token } = req.body;
        const user = tokens.find(u => u.userid === userId);
        if (user !== undefined && user.token === token ){
            console.log('Banks: ', banks);
            res.json(banks);
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