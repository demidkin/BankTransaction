
import { post } from 'src/actions/ajax'
import { errorsAdd, errorsClear } from 'src/reducers/errors.reducer';
import { transactionsLoaded } from 'src/reducers/transactions.reducer';



export function updateTransactionsList (userData) {
    return dispatch => {
        return post('http://localhost:3000/api/getTransactions', userData)
        .then(response => {
            if (response.status === 200){
                response.json().then((res) => { 
                    dispatch(transactionsLoaded(res));
                    dispatch(errorsClear());
                })
            }
            else{
                response.json().then(
                (err) => { 
                    dispatch(errorsAdd(err)) 
                })                  
            }
        })
    }
}