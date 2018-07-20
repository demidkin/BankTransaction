import express from 'express';
import { removeTransaction, validatorInput } from '../data';

let router = express.Router();

router.post('/', (req, res) => {
    const validator = {
        token: true,
        transactionId: true,
    }
    const { errors, isValid } = validatorInput(req.body, validator);
    if (isValid) {
        const { transactionId } = req.body;
        removeTransaction(transactionId);
        res.json({succsess : true});
    } else {
        console.log(errors);
        res.status(400).json(errors);
    }
});

export default router;