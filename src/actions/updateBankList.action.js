
import { post } from 'src/actions/ajax';
import { errorsAdd, errorsClear } from 'src/reducers/errors.reducer';
import { banksLoaded } from 'src/reducers/banks.reducer';

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