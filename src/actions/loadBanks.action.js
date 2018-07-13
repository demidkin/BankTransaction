
import { post } from 'src/actions/ajax';

export function loadBanks (userData) {
    return dispatch => {
        return post('http://localhost:3000/api/getBanks', userData);
    }
}