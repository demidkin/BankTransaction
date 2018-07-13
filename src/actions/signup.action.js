import { post } from 'src/actions/ajax';

export function userSignupRequest (userData) {
    return dispatch => {
        return post('http://localhost:3000/api/users', userData);
    }
}