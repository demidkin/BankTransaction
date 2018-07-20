import express from 'express';
import { transactions, validatorInput } from '../data';

let router = express.Router();

router.post('/', (req, res) => {
    const validator = {
        token: true,
    }
    const { errors, isValid } = validatorInput(req.body, validator);
    if (isValid) {
        console.log('Transactions: ',transactions);
        res.json(transactions);        
    } else {
        console.log(errors);
        res.status(400).json(errors);
    }
});

export default router;