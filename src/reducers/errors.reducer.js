export default function errorsStore(state = [], action = {}){
    if (action.type === 'ERRORS'){
        return { errors: action.payload }
    }
    return state;   
}