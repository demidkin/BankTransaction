import express from 'express';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';
import bcrypt from 'bcryptjs';
import { users, emails, tokens, logoutUser } from '../data';

let router = express.Router();

function validatorInput(data) {
    let errors = {};

    if (data.email === undefined || Validator.isEmpty(data.email + '')){
        errors.email = 'Email is required';
    }
    else if (!Validator.isEmail(data.email)){
        errors.email = 'Email is invalid';
    }
    if (data.password === undefined || Validator.isEmpty(data.password + '')){
        errors.password = 'Password is required';
    }
    return { errors, isValid: isEmpty(errors)};
}


router.post('/', (req, res) => {
    const { errors, isValid } = validatorInput(req.body);
    if (isValid) {
        const { email, password } = req.body;
        const userId = emails.indexOf(email);
        if (userId !== -1 && users[userId].password === password){
            logoutUser(email);
            const secret = bcrypt.hashSync(email + password, 10);
            tokens.push({ userid: users[userId].email, token: secret });
            console.log('Login: ', {token: secret});
            
            res.json({token: secret});
        }
        else {
            res.status(400).json({ email: 'Invalid credentials' });
        }            
    } else {
        console.log(errors);
        res.status(400).json(errors);
    }
});

export default router;