import { combineReducers } from 'redux';
import tokenStore from 'src/reducers/token.reducer';
import transactionStore from 'src/reducers/transactions.reducer'
import banksStore from 'src/reducers/banks.reducer';


export default combineReducers({
    tokenStore,
    transactionStore,
    banksStore
})