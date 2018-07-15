
import { post } from 'src/actions/ajax'

export function updateTransactionsList (userData) {
    return dispatch => {
        const response = post('http://localhost:3000/api/getTransactions', userData)
        .then(response => {
            if (response.status === 200){
                response.json().then((res) => { 
                    dispatch({ type: 'TRANSACTION_LOADED', payload: res });
                    dispatch({ type: 'ERRORS', payload: {} });
                })
            }
            else{
                response.json().then(
                (err) => { 
                    dispatch({type: 'ERRORS', payload: err }) 
                })                  
            }
        })
    }
}