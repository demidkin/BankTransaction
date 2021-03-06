
import { post } from 'src/actions/ajax'
import { errorsAdd, errorsClear } from 'src/reducers/errors.reducer';

export function transactionAdd (userData, callback) {
    return dispatch => {
        return post('http://localhost:3000/api/addTransaction', userData)
        .then(response => {
            if (response.status === 200){
                response.json().then((res) => { 
                    dispatch(errorsClear());
                    callback(true);
                })
            }
            else{
                response.json().then(
                (err) => { 
                    dispatch(errorsAdd(err));
                    callback(false);
                })                  
            }
        })
    }
}