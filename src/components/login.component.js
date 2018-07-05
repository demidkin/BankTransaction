import React from 'react';
import '../sass/login.component.scss'


class Login extends React.Component {

    render(){
        return (
            <form className="login">
                <fieldset>
                    <legend>Login </legend>
                    <label htmlFor="login-input">Email: </label>
                    <input type="email" id="login-input"/>
                    <label htmlFor="pasword-input">Password: </label>
                    <input type="password" id="pasword-input"/> 
                    <input type="button" value="Login"/>
                </fieldset>
            </form>
        );
    } 
}

export default Login