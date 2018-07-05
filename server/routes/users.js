import express from 'express';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty'

let router = express.Router();

function validatorInput(data) {
    let errors = {};

    if (Validator.isEmpty(data.email)){
        errors.email = 'Email is required';
    }
    else if (!Validator.isEmail(data.email)){
        errors.email = 'Email is invalid';
    }
    if (Validator.isEmpty(data.password)){
        errors.password = 'Password is required';
    }
    return { errors, isValid: isEmpty(errors)};
}


router.post('/', (req, res) => {
    setTimeout(()=> {
        const { errors, isValid } = validatorInput(req.body);
   
        if (!isValid) {
            console.log(errors);
            res.status(400).json(errors);
        }
    },2e3)
});

export default router;