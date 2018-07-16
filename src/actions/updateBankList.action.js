
import { post } from 'src/actions/ajax';
import { errorsClear, errorsAdd, banksLoaded} from 'src/actions/actions';

export function updateBankList (userData) {
    return dispatch => {
        return post('http://localhost:3000/api/getBanks', userData)
        .then(response => {
            if (response.status === 200){
                response.json().then((res) => { 
                    dispatch(banksLoaded(res));
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