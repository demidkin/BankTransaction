
import { post } from 'src/actions/ajax'
import { errorsClear, errorsAdd, transactionsLoaded } from 'src/actions/actions';


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