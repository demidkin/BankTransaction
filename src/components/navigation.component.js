import React from 'react';

import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { logout } from 'src/actions/logout.action';
import { saveData } from 'src/actions/saveData.action';
import 'src/sass/navigation.component.scss'


class Navigation extends React.Component {
    constructor(props){
        super(props);
        this.onClickLogout = this.onClickLogout.bind(this);
    }


    onClickLogout(e){
        const userid = this.props.store.tokenStore.userid;
        const token = this.props.store.tokenStore.token;
        if (this.props.logout({ userId: userid, token: token })){
            this.props.saveData({ type: 'LOGOUT', payload: false });
            this.props.store.banksStore[0] = undefined;
            this.props.store.transactionStore[0] = undefined;
        }
    }

    render(){
        let { isAuthenticated } = this.props.store.tokenStore;

        return (
            <nav className="navigation">
                <ul>
                    <li className="menu"><Link to="/" visibility="hidden"><button>Home</button></Link></li>
                    <li className="menu"><Link to="/transactions"><button disabled={!isAuthenticated}>Transactions</button></Link></li>
                    <li className="menu"><Link to="/add-transaction"><button disabled={!isAuthenticated}>Add transaction</button></Link></li>
                    <li className="menuRight"><Link to="/"><button onClick={this.onClickLogout} disabled={!isAuthenticated}>Logout...</button></Link></li>
                    <li className="menuRight"><Link to="/login"><button disabled={isAuthenticated}>Login</button></Link></li>
                    <li className="menuRight"><Link to="/Signup"><button disabled={isAuthenticated}>Sign up</button></Link></li>
                </ul>
            </nav>
        );
    } 
}

export default connect( state => ({ store: state }), { logout, saveData })(Navigation);