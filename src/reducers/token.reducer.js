import { TOKEN_NEW, TOKEN_LOAD, LOGOUT } from 'src/actions/actions';

export default function tokenStore(state = [], action = {}) {
    if (action.type === TOKEN_NEW) {
        sessionStorage.setItem('token', action.payload);
        return { token: action.payload }
    }
    if (action.type === TOKEN_LOAD) {
        const _token = sessionStorage.getItem('token');
        return { token: _token }
    }
    if (action.type === LOGOUT) {
        sessionStorage.removeItem('token');
        return {};
    }
    return state;   
}