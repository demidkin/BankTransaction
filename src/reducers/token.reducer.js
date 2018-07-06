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
        if (userid !== undefined && token !== undefined)
        return [
            { userid: userid, token: token }
        ]
    }
    return state;   
}