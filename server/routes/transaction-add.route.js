import express from 'express';
import { tokens, transactions, addTransaction, banks, isValidToken, validatorInput, ValidatorType } from '../data';

let router = express.Router();

router.post('/', (req, res) => {
    const { errors, isValid } = validatorInput(req.body, ValidatorType.ADD_TRANSACTION);
    if (isValid) {
        const { token, ammount, bankId } = req.body;
        if ( isValidToken(token) ) {
            addTransaction( parseInt(ammount), parseInt(bankId) );
            console.log('Transaction add: ', transactions);
            res.json( {succsess : true} );
        }
        else {
            res.status(400).json({ ammount: 'Invalid token' });
        }            
    } else {
        console.log(errors);
        res.status(400).json(errors);
    }
});

export default router;