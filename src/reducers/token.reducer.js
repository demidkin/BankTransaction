export default function tokenStore(state = [], action = {}) {
    if (action.type === 'NEW_TOKEN') {
        sessionStorage.setItem('token', action.payload);
        return { token: action.payload }
    }
    if (action.type === 'LOAD_TOKEN') {
        const _token = sessionStorage.getItem('token');
        return { token: _token }
    }
    if (action.type === 'LOGOUT') {
        sessionStorage.removeItem('token');
        return {};
    }
    return state;   
}