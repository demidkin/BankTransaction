import express from 'express';
import { users, emails, validatorInput, ValidatorType } from '../data';

let router = express.Router();

router.post('/', (req, res) => {
    setTimeout(()=> {
        const { errors, isValid } = validatorInput(req.body, ValidatorType.SIGNUP);
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
    },1e1)
});

export default router;