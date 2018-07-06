import { combineReducers } from 'redux';
import tokenStore from './token.reducer';
import transactionStore from './transactions.reducer'
import banksStore from './banks.reducer';


export default combineReducers({
    tokenStore,
    transactionStore,
    banksStore
})