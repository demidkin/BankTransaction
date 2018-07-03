import React from 'react';
import { connect } from 'react-redux';
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
       return (<h1>Welcome to React</h1>)
    }
}

export default connect(
        state => ({
        }),
        dispatch => ({
        })
    )(App);
