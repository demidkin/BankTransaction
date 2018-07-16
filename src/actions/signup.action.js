import { post } from 'src/actions/ajax';
import { errorsClear, errorsAdd } from 'src/actions/actions';

export function userSignupRequest (userData, callback) {
    return dispatch => {
        return post('http://localhost:3000/api/users', userData).then(response => {
            if (response.status === 200){
                dispatch(errorsClear());
                callback(true);
            }
            else {
                response.json().then(
                (err) => { 
                    dispatch(errorsAdd(err));
                    callback(false);
                })                  
            }
        })
    }
}