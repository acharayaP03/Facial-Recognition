import React from 'react';

const Navigation = () =>{
    return (
        <nav className="navbar">
            <ul className="navbar__list">
                <li className="navbar__item">
                    {/** /# will remove the warning from console  */}
                    <a href="/#" className="navbar__link">Sign Out</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;