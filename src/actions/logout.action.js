import { logoutToken, errorsClear, transactionsClear, errorsAdd } from 'src/actions/actions';


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