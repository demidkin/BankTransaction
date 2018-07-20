import express from 'express';
import { banks, validatorInput } from '../data';

let router = express.Router();

router.post('/', (req, res) => {
    const validator = {
        token: true,
        bankId : true
    }
    const { errors, isValid } = validatorInput(req.body, validator);
    if (isValid) {
        const { bankId } = req.body;
        const index = banks.indexOf(b => b.id === parseInt(bankId));
        console.log(banks);
        console.log('index = ', index);
        console.log('bankId = ', bankId);
        console.log('Bank: ', banks[index]);
        res.json(banks[index]);
    } else {
        console.log(errors);
        res.status(400).json(errors);
    }
});

export default router;