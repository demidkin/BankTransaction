export default function tokenStore(state = [], action = {}){
    if (action.type === 'NEW_TOKEN'){
        sessionStorage.setItem('userid', action.payload.userid);
        sessionStorage.setItem('token', action.payload.token);
        return action.payload
    }
    if (action.type === 'LOAD_TOKEN'){
        const userid = sessionStorage.getItem('userid');
        const token = sessionStorage.getItem('token');
        let auth = true;
        if (!token || token === '' || !userid || userid === '') auth = false;
        return { userid: userid, token: token, isAuthenticated: auth }
    }
    if (action.type === 'LOGINED'){
        return { 
            token: state.token,
            userid: state.userid, 
            isAuthenticated: true 
        }
    }
    if (action.type === 'LOGOUT'){
        sessionStorage.setItem('userid', '');
        sessionStorage.setItem('token', '');
        return {
            userid: undefined, 
            token: undefined,
            isAuthenticated: false
        }
        
    }
    return state;   
}