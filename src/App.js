import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import { browserHistory } from 'react-router'

import { loadToken } from './actions/loadToken.action'

import Login from './components/login.component';
import Navigation from './components/navigation.component';
import Transactions from './components/transactions.component';
import TransactionAdd from './components/transaction-add.component'
import Signup from './components/signup.component';
import Home from './components/home.component';
import PrivateRoute from './components/PrivateRoute.componet';

import './main.scss';

class App extends React.Component {

    constructor(prop) {
        super(prop)
        this.state = {
        
        }
        this.props.loadToken();
    }

    render() {
        let isAuthenticated = true;
        if (this.props.store.tokenStore.isAuthenticated !== undefined) isAuthenticated = this.props.store.tokenStore.isAuthenticated;
        return (
                <Router history={browserHistory}>
                    <div>
                        <Navigation />
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={Login} isAuthenticated={!isAuthenticated} />
                        <PrivateRoute path='/transactions' component={Transactions} isAuthenticated={isAuthenticated} />
                        <PrivateRoute path="/add-transaction" component={TransactionAdd} isAuthenticated={isAuthenticated} />
                        <Route path="/signup" component={Signup} isAuthenticated={!isAuthenticated} />
                    </div>
                </Router>    
        )
    }
}

export default connect( state => ({ store: state }), { loadToken })(App);
