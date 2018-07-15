import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { logout } from 'src/actions/logout.action';
import 'src/sass/navigation.component.scss'

class Navigation extends React.Component {
    constructor(props){
        super(props);
        this.onClickLogout = this.onClickLogout.bind(this);
    }

    onClickLogout(e){
        this.props.logout({ token: this.props.token });
    }

    render(){
        let isAuthenticated = Boolean(this.props.token);

        return (
            <nav className="navigation">
                <ul>
                    <li className="menu"><Link to="/" visibility="hidden"><button>Home</button></Link></li>
                    <li className="menu"><Link to="/transactions"><button disabled={!isAuthenticated}>Transactions</button></Link></li>
                    <li className="menuRight"><Link to="/"><button onClick={this.onClickLogout} disabled={!isAuthenticated}>Logout...</button></Link></li>
                    <li className="menuRight"><Link to="/login"><button disabled={isAuthenticated}>Login</button></Link></li>
                    <li className="menuRight"><Link to="/Signup"><button disabled={isAuthenticated}>Sign up</button></Link></li>
                </ul>
            </nav>
        );
    } 
}

export default connect( state => ({ token: state.tokenStore.token }), { logout })(Navigation);