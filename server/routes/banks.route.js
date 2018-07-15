import express from 'express';
import { tokens, banks, isValidToken, validatorInput, ValidatorType } from '../data';

let router = express.Router();

router.post('/', (req, res) => {
    const { errors, isValid } = validatorInput(req.body, ValidatorType.TOKEN );
    if (isValid) {
        res.json(banks);
    } else {
        console.log(errors);
        res.status(400).json(errors);
    }
});

export default router;