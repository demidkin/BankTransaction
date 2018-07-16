import { BANKS_CLEAR, BANKS_LOADED } from 'src/actions/actions';

export default function banksStore(state = [], action = {}){
    if (action.type === BANKS_LOADED){
        return { banks: action.payload }
    }
    if (action.type === BANKS_CLEAR){
        return {}
    }
    return state;   
}