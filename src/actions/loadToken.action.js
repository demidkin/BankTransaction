import { tokenLoad } from 'src/reducers/token.reducer';

export const loadToken = () => dispatch => {
    dispatch(tokenLoad());
}