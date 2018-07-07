
import { post } from './ajax';

export function loadBanks (userData) {
    return dispatch => {
        return post('http://localhost:3000/api/getBanks', userData);
    }
}