import React from 'react';

const FaceRecognition = ({ imageUrl }) =>{

    return(
        <div className="link-container">
            <img src={imageUrl} alt="" />
        </div>
    )
}

export default FaceRecognition;