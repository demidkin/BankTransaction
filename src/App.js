import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withRouter } from 'react-router-dom';

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

    render() {
        return (
                <Router>
                    <div>
                        <Navigation />
                        <Route path="/login" component={Login}/>
                        <Route path="/transactions" component={Transactions}/>
                        <Route path="/add-transaction" component={TransactionAdd}/>
                        <Route path="/signup" component={Signup}/>
                    </div>
                </Router>    
        )
    }
}

export default connect(
        state => ({
        }),
        dispatch => ({
        })
    )(App);
