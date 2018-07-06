
import axios from 'axios'

export function getBankById (userData) {
    return dispatch => {
        return axios.post('http://localhost:3000/api/getBankByID', userData);
    }
}