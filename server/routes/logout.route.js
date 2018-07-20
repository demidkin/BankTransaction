import express from 'express';
import { logoutUser, validatorInput } from '../data';

let router = express.Router();

router.post('/', (req, res) => {
    const validator = {
        token: true
    }
    const { errors, isValid } = validatorInput(req.body, validator);
    if (isValid) {
        const { token } = req.body;
        logoutUser(token);
        console.log('Logout: ', token);
        res.json( {succsess: true} );
    } else {
        console.log(errors);
        res.status(400).json(errors);
    }
});

export default router;