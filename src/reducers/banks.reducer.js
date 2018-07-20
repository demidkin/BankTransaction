// action types

export const BANKS_CLEAR = 'BANKS_CLEAR';
export const BANKS_LOADED = 'BANKS_LOADED';

// action creators

export function banksClear() {
    return { type: BANKS_CLEAR }
}

export function banksLoaded(banks) {
    return { type: BANKS_LOADED, payload: banks }
}

export default function banksStore(state = [], action = {}){
    if (action.type === BANKS_LOADED){
        return { banks: action.payload }
    }
    if (action.type === BANKS_CLEAR){
        return {}
    }
    return state;   
}