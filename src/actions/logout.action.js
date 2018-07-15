
import { post } from 'src/actions/ajax'

export function logout (userData) {
    return dispatch => {
        return post('http://localhost:3000/api/logout', userData).then(response => {
            if (response.status === 200){
                response.json().then((res) => {
                    dispatch({ type: 'LOGOUT', payload: {} });
                    dispatch({ type: 'TRANSACTION_CLEAR', payload: {} });
                    dispatch({ type: 'BANKS_CLEAR', payload: {} });
                    dispatch({ type: 'ERRORS', payload: {} });
                })
            }
            else{
                response.json().then(
                (err) => { 
                    dispatch({ type : 'ERRORS', payload : err });
                })                  
            }
        })
    }
}