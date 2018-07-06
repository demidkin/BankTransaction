
import axios from 'axios'

export function loadTransactions (userData) {
    return dispatch => {
        axios.post('http://localhost:3000/api/getTransactions', userData).then(
            (res) => { 
                let namedTransaction = res.data.map((transaction) => {
                    return { id: transaction.id, ammount: transaction.ammount, bankId: transaction.bankId, bank: userData.banks[transaction.bankId].name };
                });
                dispatch({type: 'TRANSACTION_LOADED', payload: namedTransaction });
            },
            (erorr) => { 
                dispatch({type: 'TRANSACTION_LOADED_ERROR', payload: erorr.response.data }) 
            }
        );
    }
}