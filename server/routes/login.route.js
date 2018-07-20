import express from 'express';
import bcrypt from 'bcryptjs';
import { users, emails, tokens, logoutUserByEmail, validatorInput } from '../data';

let router = express.Router();

router.post('/', (req, res) => {
    const validator = {
        email: true,
        password : true
    }
    const { errors, isValid } = validatorInput(req.body, validator);
    if (isValid) {
        const { email, password } = req.body;
        const userId = emails.indexOf(email);
        if (userId !== -1 && users[userId].password === password){
            logoutUserByEmail(email);
            const secret = bcrypt.hashSync(email + password, 10);
            tokens.push({ userid: users[userId].email, token: secret });
            console.log('Login: ', {token: secret});
            res.json({ token: secret });
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