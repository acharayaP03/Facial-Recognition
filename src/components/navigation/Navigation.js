import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) =>{
   
    if(isSignedIn){

        return (
            <nav className="navbar">
                <ul className="navbar__list">
                    <li className="navbar__item">
                        {/** /# will remove the warning from console  */}
                        <a href="/#" className="navbar__link" onClick={() => onRouteChange('signin')}>Sign out</a>
                    </li> 
                </ul>
            </nav>
        )
    }else{
        return (
            <nav className="navbar">
                <ul className="navbar__list">
                    <li className="navbar__item">
                        {/** /# will remove the warning from console  */}
                        <a href="/#" className="navbar__link" onClick={() => onRouteChange('home')}>Sign In</a>
                    </li>
                    <li className="navbar__item">
                        {/** /# will remove the warning from console  */}
                        <a href="/#" className="navbar__link" onClick={() => onRouteChange('register')}>Register</a>
                    </li>
                </ul>
            </nav>
        )
    }
    
}

export default Navigation;