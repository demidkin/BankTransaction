import { post } from './ajax';

export function userSignupRequest (userData) {
    return dispatch => {
        return post('http://localhost:3000/api/users', userData);
    }
}