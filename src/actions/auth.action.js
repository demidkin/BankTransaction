import { post } from 'src/actions/ajax'

export function auth (userData, callback) {
    return dispatch => {
        return post('http://localhost:3000/api/auth', userData).then(response => {
            if (response.status === 200){
                response.json().then((res) => { 
                    dispatch({ type: 'NEW_TOKEN', payload: res.token });
                    callback(true);
                })
            }
            else{
                response.json().then(
                (err) => { 
                    dispatch({ type : 'ERRORS', payload : err });
                    callback(false);
                })                  
            }
        })
    }
}