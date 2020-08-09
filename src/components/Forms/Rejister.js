import React, { Component } from 'react'

class Register extends Component {
    constructor(props){
        super(props)
        this.state ={
            name: '',
            email: '',
            password: ''
        }
    }
    onNameChange = (event) =>{
        this.setState({ name : event.target.value});
    }
    onEmailChange = (event) =>{
        this.setState({ email : event.target.value});
    }

    onPasswordChange = (event) =>{
        this.setState({ password : event.target.value});
    }
    onSubmitRgister = () =>{
        //console.log(this.state);
        fetch('http://localhost:8000/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            })
        })
        .then( response => response.json())
        .then(user =>{
            if(user){
                this.props.loadUser(user);
                this.props.onRouteChange('home')
            }
        })
    }
    render(){
        //const { onRouteChange } = this.props;
        return(
            <div className="link-container">
                <form className="form form__register">
                    <h2 className="heading heading-2">Register</h2>
                    <div className="form__row">
                        <input id="name" type="text" className="form__input" placeholder="Full Name"  onChange={this.onNameChange}/>
                        <label className="form__label" htmlFor="imageInput">Full Name</label>
                    </div>
                    <div className="form__row">
                        <input id="email" type="email" className="form__input" placeholder="Email"  onChange={this.onEmailChange}/>
                        <label className="form__label" htmlFor="imageInput">Email</label>
                    </div>
                    <div className="form__text">
                        <span>Your email will be used as a username</span>
                    </div>
                    <div className="form__row">
                        <input id="password" type="password" className="form__input" placeholder="Password"  onChange={this.onPasswordChange}/>
                        <label className="form__label" htmlFor="imageInput">Password</label>
                    </div>
                    <div className="form__row">
                        <input id="ConfirmPassword" type="password" className="form__input" placeholder="Password" />
                        <label className="form__label" htmlFor="imageInput">Confirm Password</label>
                    </div>
                    <button  type="button" className="btn btn-singin" style={{margin : '0 auto'}} onClick={this.onSubmitRgister}>Register</button>
                </form>
            </div>
        );
    }
}

export default Register;