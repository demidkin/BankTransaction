import express from 'express';
import { banks, validatorInput } from '../data';

let router = express.Router();

router.post('/', (req, res) => {
    const validator = {
        token: true
    }
    const { errors, isValid } = validatorInput( req.body, validator );
    if (isValid) {
        res.json(banks);
    } else {
        console.log(errors);
        res.status(400).json(errors);
    }
});

export default router;