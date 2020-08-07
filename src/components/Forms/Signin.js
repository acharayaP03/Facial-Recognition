import React from 'react'

const Signin = ({ onButtonSubmit }) =>{

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
                <button  type="button" className="btn btn-singin" style={{margin : '0 auto'}}>Sign In</button>
            </form>
        </div>
    );
}

export default Signin;