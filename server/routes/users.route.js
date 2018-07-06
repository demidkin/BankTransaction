import express from 'express';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';
import { users, emails } from '../data';

let router = express.Router();

function validatorInput(data) {
    let errors = {};

    if (data.email === undefined || Validator.isEmpty(data.email + '')){
        errors.email = 'Email is required';
    }
    else if (!Validator.isEmail(data.email + '')){
        errors.email = 'Email is invalid';
    }
    if (data.password === undefined || Validator.isEmpty(data.password + '')){
        errors.password = 'Password is required';
    }
    return { errors, isValid: isEmpty(errors)};
}

// const emails = [];
// const users = [];

router.post('/', (req, res) => {
    setTimeout(()=> {
        const { errors, isValid } = validatorInput(req.body);
        if (isValid) {
            const { email, password } = req.body;
            if (emails.indexOf(email) === -1){
                emails.push(email);
                users.push({email, password});
                console.log('Users: ', users);
                res.json({success: true});
            }
            else {
                res.status(400).json({ email: 'User already registered' });
            }            
        } else {
            console.log(errors);
            res.status(400).json(errors);
        }
    },1e2)
});

export default router;