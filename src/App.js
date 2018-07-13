import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import { browserHistory } from 'react-router'

import { loadToken } from 'src/actions/loadToken.action'

import Login from 'src/components/login.component';
import Navigation from 'src/components/navigation.component';
import Transactions from 'src/components/transactions.component';
import TransactionAdd from 'src/components/transaction-add.component'
import Signup from 'src/components/signup.component';
import Home from 'src/components/home.component';
import PrivateRoute from 'src/components/PrivateRoute.componet';

import 'src/main.scss';

class App extends React.Component {

    constructor(prop) {
        super(prop)
        this.state = {
        
        }
        this.props.loadToken();

    }

    render() {
        let isAuthenticated = this.props.store.tokenStore.isAuthenticated;

        return (
                <Router history={browserHistory}>
                    <div>
                        <Navigation />
                        <Route exact path="/" component={Home} />
                        <PrivateRoute path="/login" redirectpath='/' component={Login} isAuthenticated={!isAuthenticated} />
                        <PrivateRoute path='/transactions' redirectpath='/login' component={Transactions} isAuthenticated={isAuthenticated} />
                        <PrivateRoute path="/add-transaction" redirectpath='/login' component={TransactionAdd} isAuthenticated={isAuthenticated} />
                        <PrivateRoute path="/signup" redirectpath='/' component={Signup} isAuthenticated={!isAuthenticated} />
                    </div>
                </Router>    
        )
    }
}

export default connect( state => ({ store: state }), { loadToken })(App);
