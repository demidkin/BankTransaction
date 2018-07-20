import express from 'express';
import { addTransaction, validatorInput } from '../data';

let router = express.Router();

router.post('/', (req, res) => {
    const validator = {
        token: true,
        ammount: true,
        bankId: true
    }
    const { errors, isValid } = validatorInput(req.body, validator);
    if (isValid) {
        const { ammount, bankId } = req.body;
        addTransaction( parseInt(ammount), parseInt(bankId) );
        res.json( {succsess : true} );        
    } else {
        console.log(errors);
        res.status(400).json(errors);
    }
});

export default router;