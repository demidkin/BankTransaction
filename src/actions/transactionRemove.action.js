
import { post } from 'src/actions/ajax'

export function transactionRemove (userData, callback) {
    return dispatch => {
        return post('http://localhost:3000/api/removeTransaction', userData)
        .then(response => {
            if (response.status === 200){
                response.json().then((res) => { 
                    dispatch({ type: 'ERRORS', payload: {} });
                    callback(true);
                })
            }
            else{
                response.json().then(
                (err) => { 
                    dispatch({type: 'ERRORS', payload: err });
                    callback(false);
                })                  
            }
        })
    }
}