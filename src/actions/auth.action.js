import { post } from 'src/actions/ajax'
import { errorsAdd, errorsClear } from 'src/reducers/errors.reducer';
import { tokenNew } from 'src/reducers/token.reducer';

export function auth (userData, callback) {
    return dispatch => {
        return post('http://localhost:3000/api/auth', userData).then(response => {
            if (response.status === 200){
                response.json().then((res) => { 
                    dispatch(tokenNew(res.token));
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