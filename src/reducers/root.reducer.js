import { combineReducers } from 'redux';
import tokenStore from './token.reducer';
import transactionStore from './transactions.reducer'


export default combineReducers({
    tokenStore,
    transactionStore
})