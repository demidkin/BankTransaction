
import { post } from './ajax'

export function logout (userData) {
    return dispatch => {
        return post('http://localhost:3000/api/logout', userData).then(response => {
            if (response.status === 200){
                response.json().then((res) => {
                    return true;
                })
            }
            else{
                response.json().then(
                (err) => { 
                    return err;
                })                  
            }
        })
    }
}