import { post } from 'src/actions/ajax'

export function auth (userData) {
    return dispatch => {
        return post('http://localhost:3000/api/auth', userData);
    }
}