import React from 'react'

const Register = () =>{

    return(
        <div className="link-container">
            <form className="form form__register">
                <h2 className="heading heading-2">Register</h2>
                <div className="form__row">
                    <input id="email" type="email" className="form__input" placeholder="Email" />
                    <label className="form__label" htmlFor="imageInput">Email</label>
                </div>
                <div className="form__text">
                    <span>Your email will be used as a username</span>
                </div>
                <div className="form__row">
                    <input id="password" type="password" className="form__input" placeholder="Password" />
                    <label className="form__label" htmlFor="imageInput">Password</label>
                </div>
                <div className="form__row">
                    <input id="ConfirmPassword" type="password" className="form__input" placeholder="Password" />
                    <label className="form__label" htmlFor="imageInput">Confirm Password</label>
                </div>
                <button  type="button" className="btn btn-singin" style={{margin : '0 auto'}}>Register</button>
            </form>
        </div>
    );
}

export default Register;