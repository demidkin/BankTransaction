
import axios from 'axios'

export function loadTransactions (userData) {
    return dispatch => {
        return axios.post('http://localhost:3000/api/getTransactions', userData);
    }
}