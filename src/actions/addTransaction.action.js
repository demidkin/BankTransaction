
import { post } from 'src/actions/ajax'

export function addTransaction (userData) {
    return dispatch => {
        return post('http://localhost:3000/api/addTransaction', userData);
    }
}