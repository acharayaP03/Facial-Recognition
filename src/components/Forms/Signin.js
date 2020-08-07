import React from 'react'

const Signin = ({ onRouteChange }) =>{

    return(
        <div className="link-container">
            <form className="form form__signin">
                <h2 className="heading heading-2">Sign in</h2>
                <div className="form__row">
                    <input id="email" type="email" className="form__input" placeholder="Username" />
                    <label className="form__label" htmlFor="imageInput">Username</label>
                </div>
                <div className="form__row">
                    <input id="password" type="password" className="form__input" placeholder="Password" />
                    <label className="form__label" htmlFor="imageInput">Password</label>
                </div>
                {/* donot use call onRouteChange on onClick, it will run no matter what, instead only run it when it is clicked. */}
                <button  type="button" className="btn" onClick={() => onRouteChange('home')}>Sign In</button>
                <a href="/#" className="btn-text" style={{float: 'right'}} onClick={() => onRouteChange('register')}>Register</a>
            </form>
        </div>
    );
}

export default Signin;