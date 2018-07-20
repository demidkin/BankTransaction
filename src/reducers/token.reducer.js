// action types

export const TOKEN_NEW = 'TOKEN_NEW';
export const TOKEN_LOAD = 'TOKEN_LOAD';
export const LOGOUT = 'LOGOUT';

// action creators

export function tokenNew(token) {
    return { type: TOKEN_NEW, payload: token }
}

export function tokenLoad() {
    return { type: TOKEN_LOAD }
}

export function logoutToken() {
    return { type: LOGOUT }
}




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