import { ERRORS_ADD, ERRORS_CLEAR } from 'src/actions/actions';

export default function errorsStore(state = [], action = {}){
    if (action.type === ERRORS_ADD) {
        return { errors: action.payload }
    }
    if (action.type === ERRORS_CLEAR) {
        return {}
    }

    return state;   
}