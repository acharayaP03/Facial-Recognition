import React, { Component } from 'react'

class Signin extends Component{
    constructor(props){
        super(props)
        this.state = {
            signInEmail : '',
            signInPassword: ''
        }
    }

    onEmailChange = (event) =>{
        this.setState({ signInEmail : event.target.value});
    }

    onPasswordChange = (event) =>{
        this.setState({ signInPassword : event.target.value});
    }

    onSubmitSignin = () =>{
        //console.log(this.state);
        fetch('http://localhost:8000/signin', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
        .then( response => response.json())
        .then(user =>{
            if(user.id){
                this.props.loadUser(user)
                this.props.onRouteChange('home')
            }
        })
    }
    render(){
        const { onRouteChange } = this.props;
        return(
            <div className="link-container">
                <form className="form form__signin">
                    <h2 className="heading heading-2">Sign in</h2>
                    <div className="form__row">
                        <input id="email" type="email" className="form__input" placeholder="Username" onChange={this.onEmailChange}/>
                        <label className="form__label" htmlFor="imageInput">Username</label>
                    </div>
                    <div className="form__row">
                        <input id="password" type="password" className="form__input" placeholder="Password" onChange={this.onPasswordChange}/>
                        <label className="form__label" htmlFor="imageInput">Password</label>
                    </div>
                    {/* donot use call onRouteChange on onClick, it will run no matter what, instead only run it when it is clicked. */}
                    <button  type="button" className="btn" onClick={this.onSubmitSignin}>Sign In</button>
                    <a href="/#" className="btn-text" style={{float: 'right'}} onClick={() => onRouteChange('register')}>Register</a>
                </form>
            </div>
        );
    }
}

export default Signin;