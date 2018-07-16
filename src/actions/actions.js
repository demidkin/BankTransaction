// action types

export const ERRORS_ADD = 'ERRORS';
export const ERRORS_CLEAR = 'ERRORS_CLEAR';
export const TOKEN_NEW = 'TOKEN_NEW';
export const TOKEN_LOAD = 'TOKEN_LOAD';
export const LOGOUT = 'LOGOUT';
export const TRANSACTION_CLEAR = 'TRANSACTION_CLEAR';
export const TRANSACTION_LOADED = 'TRANSACTION_LOADED';
export const BANKS_CLEAR = 'BANKS_CLEAR';
export const BANKS_LOADED = 'BANKS_LOADED';




// action creators

export function errorsAdd(err) {
  return { type: ERRORS_ADD, payload: err }
}

export function errorsClear() {
    return { type: ERRORS_CLEAR }
}

export function tokenNew(token) {
    return { type: TOKEN_NEW, payload: token }
}

export function tokenLoad() {
    return { type: TOKEN_LOAD }
}

export function logoutToken() {
    return { type: LOGOUT }
}

export function banksClear() {
    return { type: BANKS_CLEAR }
}

export function banksLoaded(banks) {
    return { type: BANKS_LOADED, payload: banks }
}

export function transactionsClear() {
    return { type: TRANSACTION_CLEAR }
}

export function transactionsLoaded(transactions) {
    return { type: TRANSACTION_LOADED, payload: transactions }
}