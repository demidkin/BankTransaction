// action types

export const ERRORS_ADD = 'ERRORS';
export const ERRORS_CLEAR = 'ERRORS_CLEAR';

// action creators

export function errorsAdd(err) {
    return { type: ERRORS_ADD, payload: err }
  }
  
  export function errorsClear() {
      return { type: ERRORS_CLEAR }
  }


export default function errorsStore(state = [], action = {}){
    if (action.type === ERRORS_ADD) {
        return { errors: action.payload }
    }
    if (action.type === ERRORS_CLEAR) {
        return {}
    }

    return state;   
}