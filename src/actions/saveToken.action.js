export const saveToken = (token) => dispatch => {
    dispatch({type: 'NEW_TOKEN', payload: token});
}