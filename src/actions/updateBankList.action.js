
import { post } from 'src/actions/ajax';

export function updateBankList (userData) {
    return dispatch => {
        return post('http://localhost:3000/api/getBanks', userData)
        .then(response => {
            if (response.status === 200){
                response.json().then((res) => { 
                    dispatch({ type: 'BANKS_LOADED', payload: res });
                    dispatch({ type: 'ERRORS', payload: {} });
                })
            }
            else{
                response.json().then(
                (err) => { 
                    dispatch({type: 'ERRORS', payload: err }) 
                })                  
            }
        })
    }
}