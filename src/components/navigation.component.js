import React from 'react';
import '../sass/navigation.component.scss'
import { Link } from 'react-router-dom'


class Navigation extends React.Component {

    render(){
        return (
            <nav className="navigation">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/transactions">Transactions</Link></li>
                    <li><Link to="/add-transaction">Add transaction</Link></li>
                    <li><Link to="/Signup">Sign up</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/logout">Logout...</Link></li>
                    
                </ul>
            </nav>
        );
    } 
}

export default Navigation