import axios from 'axios'

export function auth (userData) {
    return dispatch => {
        return axios.post('http://localhost:3000/api/auth', userData);
    }
}