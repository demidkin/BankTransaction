import express from 'express';
import { tokens, transactions, removeTransaction, isValidToken, validatorInput, ValidatorType } from '../data';
//import Transaction from '../src/classes/transaction.class';

let router = express.Router();

router.post('/', (req, res) => {
    const { errors, isValid } = validatorInput(req.body, ValidatorType.REMOVE_TRANCATION);
    if (isValid) {
        const { transactionId } = req.body;
        removeTransaction(transactionId);
        console.log('Transaction remove: ', transactions);
        res.json({succsess : true});
    } else {
        console.log(errors);
        res.status(400).json(errors);
    }
});

export default router;