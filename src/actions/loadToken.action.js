import { tokenLoad } from 'src/actions/actions';

export const loadToken = () => dispatch => {
    dispatch(tokenLoad());
}