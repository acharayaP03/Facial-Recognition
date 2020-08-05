import React from 'react';
import Tilt from 'react-tilt'
import brain from "./../../assets/Images/brain.png";

const Logo = () =>{
    return (
        <div className="logo-box">
            <Tilt className="Tilt" options={{ max : 55 }} style={{ height: 110, width: 110 }}>
                <img src={brain} alt="Smart Brain" />
            </Tilt>
        </div>
    )
}

export default Logo