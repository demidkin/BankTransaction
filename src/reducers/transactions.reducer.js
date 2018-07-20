// action types

export const TRANSACTION_CLEAR = 'TRANSACTION_CLEAR';
export const TRANSACTION_LOADED = 'TRANSACTION_LOADED';

// action creators

export function transactionsClear() {
    return { type: TRANSACTION_CLEAR }
}

export function transactionsLoaded(transactions) {
    return { type: TRANSACTION_LOADED, payload: transactions }
}

export default function transactionStore(state = [], action = {}){
    if (action.type === TRANSACTION_LOADED){
        return { transactions: action.payload }
    }
    if (action.type === TRANSACTION_CLEAR){
        return {}
    }  
    return state;   
}