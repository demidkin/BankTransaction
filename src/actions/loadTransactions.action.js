
import { post } from 'src/actions/ajax'

export function loadTransactions (userData) {
    return dispatch => {
        const response = post('http://localhost:3000/api/getTransactions', userData)
        .then(response => {
            if (response.status === 200){
                response.json().then((res) => { 
                let namedTransaction = res.map((transaction) => {
                    return { id: transaction.id, ammount: transaction.ammount, bankId: transaction.bankId, bank: userData.banks[transaction.bankId].name };
                });
                dispatch({type: 'TRANSACTION_LOADED', payload: namedTransaction });
                })
            }
            else{
                response.json().then(
                (res) => { 
                    dispatch({type: 'TRANSACTION_LOADED_ERROR', payload: res }) 
                })                  
            }
        })
    }
}