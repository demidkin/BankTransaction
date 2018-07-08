export function saveData (data) {
    return dispatch => {
        dispatch({type: data.type, payload: data.payload });
    }
}