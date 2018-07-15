import express from 'express';
import { tokens, transactions, validatorInput, ValidatorType } from '../data';

let router = express.Router();

router.post('/', (req, res) => {
    const { errors, isValid } = validatorInput(req.body, ValidatorType.TOKEN);
    if (isValid) {
        console.log('Transactions: ',transactions);
        res.json(transactions);        
    } else {
        console.log(errors);
        res.status(400).json(errors);
    }
});

export default router;