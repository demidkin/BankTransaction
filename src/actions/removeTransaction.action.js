
import { post } from './ajax'

export function removeTransaction (userData) {
    return dispatch => {
        return post('http://localhost:3000/api/removeTransaction', userData);
    }
}