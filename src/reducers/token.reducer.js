export default function tokenStore(state = [], action = {}){
    if (action.type === 'NEW_TOKEN'){
        sessionStorage.setItem('userid', action.payload.userid);
        sessionStorage.setItem('token', action.payload.token);
        return [
            action.payload
        ]
    }
    if (action.type === 'LOAD_TOKEN'){
        const userid = sessionStorage.getItem('userid', action.payload.userid);
        const token = sessionStorage.getItem('token', action.payload.token);
        let auth = true;
        if (!token || token === '') auth = false;
        if (!userid || userid !== undefined && token !== undefined)
        return [
                {userid: userid, token: token}, 
                {isAuthenticated: auth}
        
        ]
    }
    if (action.type === 'LOGINED'){
        return [
            ...state,
            {isAuthenticated: true }
        ]
        
    }
    if (action.type === 'LOGOUT'){
        sessionStorage.setItem('userid', '');
        sessionStorage.setItem('token', '');
        return[ 
            {                 
                userid: '', 
                token: '' ,
                isAuthenticated: false 
            }
        ]
    }
    return state;   
}