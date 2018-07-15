import express from 'express';
import { tokens, logoutUser, isValidToken, validatorInput, ValidatorType } from '../data';

let router = express.Router();

router.post('/', (req, res) => {
    const { errors, isValid } = validatorInput(req.body, ValidatorType.TOKEN);
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