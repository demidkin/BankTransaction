import { post } from 'src/actions/ajax';

export function userSignupRequest (userData, callback) {
    return dispatch => {
        return post('http://localhost:3000/api/users', userData).then(response => {
            if (response.status === 200){
                callback(true);
            }
            else {
                response.json().then(
                (err) => { 
                    dispatch({ type : 'ERRORS', payload : err });
                    callback(false);
                })                  
            }
        })
    }
}