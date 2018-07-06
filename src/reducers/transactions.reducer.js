export default function transactionStore(state = [], action = {}){
    if (action.type === 'TRANSACTION_LOADED'){
        return [
            action.payload
        ]
    }
    if (action.type === 'TRANSACTION_LOADED_ERROR'){
        return [
            { erorrs: action.payload }
        ]
    }
    return state;   
}