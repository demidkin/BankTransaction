export function saveBanksToStor (banks) {
    return dispatch => {
        dispatch({type: 'BANKS_LOADED', payload: banks });
    }
}