export default function signupReducer(state = [], action){
    if (action.type === 'SIGNUP'){
        return [...state,
            action.payload];
    }
    if (action.type === 'SIGNUPERR'){
        return [...state,
            action.payload];
    } 
    return state;
     
}