import { errorsAdd, errorsClear } from 'src/reducers/errors.reducer';
import { logoutToken } from 'src/reducers/token.reducer';
import { transactionsClear } from 'src/reducers/transactions.reducer';
import { banksClear } from 'src/reducers/banks.reducer';
import { post } from 'src/actions/ajax'

export function logout (userData) {
    return dispatch => {
        return post('http://localhost:3000/api/logout', userData).then(response => {
            if (response.status === 200){
                response.json().then((res) => {
                    dispatch(logoutToken());
                    dispatch(transactionsClear());
                    dispatch(banksClear());
                    dispatch(errorsClear());
                })
            }
            else{
                response.json().then(
                (err) => { 
                    dispatch(errorsAdd(err));
                })                  
            }
        })
    }
}