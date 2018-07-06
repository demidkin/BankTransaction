import React from 'react';
import { connect } from 'react-redux'
import { auth } from '../actions/auth.action'
import { saveToken } from '../actions/saveToken.action'
import '../sass/login.component.scss'



class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            token: '',
            errors: []
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }
    onSubmit(e){
        this.setState({ errors: {}, isLoading: true});
        e.preventDefault();
        this.props.auth(this.state)
        .then(
            (res) => {
                this.setState({token : res.data.token})
                this.props.saveToken({ userid: this.state.email, token: this.state.token });
                this.props.history.push('/');
            },
            (erorr) => this.setState({errors: erorr.response.data, isLoading: false})
        );
    }

    render(){
        const { errors } = this.state;

        return (
            <form className="login" onSubmit={this.onSubmit}>
                <fieldset>
                    <legend>Login</legend>
                    <label htmlFor="login-input">Email: </label>
                    <input type="email" id="login-input" name="email" onChange={this.onChange}/>
                    <label htmlFor="pasword-input">Password: </label>
                    <input type="password" id="pasword-input" name="password" onChange={this.onChange} /> 
                    <input type="submit" value="Sign up" name="" disabled={this.state.isLoading}/>
                </fieldset>
                <div>
                    {errors.email && <span>{errors.email}</span>}
                    {errors.password && <span>{errors.password}</span>}
                </div>
            </form>
        );
    } 
}



export default connect( null, { auth, saveToken })(Login);