import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { browserHistory } from 'react-router'

import { loadToken } from './actions/loadToken.action'

import Login from './components/login.component';
import Navigation from './components/navigation.component';
import Transactions from './components/transactions.component';
import TransactionAdd from './components/transaction-add.component'
import Signup from './components/signup.component';

import './main.scss';



class App extends React.Component {

    constructor(prop) {
        super(prop)
        this.state = {
        
        }
        this.props.loadToken();
    }



    componentDidMount() {
        this.updateState()
        this.setupListeners()
        setInterval(this.updateState.bind(this), 10e3)
    }

    updateState() {
       
    }

    setupListeners() {

    }

    redirect(){
        this.props.history.push('/');
    }

    render() {
        return (
                <Router history={browserHistory}>
                    <div>
                        <Navigation />
                        {/* <Route exac path="/" component={}/> */}
                        <Route path="/login" component={Login} />
                        <Route path='/transactions' component={Transactions} />
                        <Route path="/add-transaction" component={TransactionAdd} />
                        <Route path="/signup" component={Signup} />
                    </div>
                </Router>    
        )
    }
}

export default connect( state => ({ tokenStore: state }), { loadToken })(App);
