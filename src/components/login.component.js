import React from 'react';
import { connect } from 'react-redux'
import { auth } from 'src/actions/auth.action'
import 'src/sass/login.component.scss'

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            isLoading: false
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e){
        this.setState({ isLoading: true});
        e.preventDefault();
        this.props.auth(this.state, (isOk) => {
            if (isOk) {
                this.props.history.push('/');
            }
            else this.setState({ isLoading: false });
        });
    }

    render(){
        const errors = this.props.errors;

        return (
            <form className="login" onSubmit={this.onSubmit}>
                <fieldset>
                    <legend>Login</legend>
                    <label htmlFor="login-input">Email: </label>
                    <input type="email" id="login-input" name="email" onChange={this.onChange}/>
                    <label htmlFor="pasword-input">Password: </label>
                    <input type="password" id="pasword-input" name="password" onChange={this.onChange} /> 
                    <input type="submit" value="Login" name="" disabled={this.state.isLoading}/>
                </fieldset>
                <div>
                    {errors && errors.email && <span>{errors.email}</span>}
                    {errors && errors.password && <span>{errors.password}</span>}
                </div>
            </form>
        );
    } 
}

export default connect( store => ({ errors: store.errorsStore.errors }), { auth })(Login);