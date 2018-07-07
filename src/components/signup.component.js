import React from 'react';
import { connect } from 'react-redux'
import { userSignupRequest } from '../actions/signup.action'
import '../sass/signup.component.scss'



class Signup extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
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
        this.props.userSignupRequest(this.state).then(response => {
            if (response.status === 200){
                response.json().then((res) => { 
                    this.props.history.push('/login');
                })
            }
            else{
                response.json().then(
                (res) => { 
                    this.setState({errors: res, isLoading: false})
                })                  
            }
        })
    }

    render(){
        const { errors } = this.state;
 
        return (
            <form className="signup" onSubmit={this.onSubmit}>
                <fieldset>
                    <legend>Sign up</legend>
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



export default connect( null, { userSignupRequest })(Signup);