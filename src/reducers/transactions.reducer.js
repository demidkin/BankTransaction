import { TRANSACTION_CLEAR, TRANSACTION_LOADED } from 'src/actions/actions';

export default function transactionStore(state = [], action = {}){
    if (action.type === TRANSACTION_LOADED){
        return { transactions: action.payload }
    }
    if (action.type === TRANSACTION_CLEAR){
        return {}
    }  
    return state;   
}