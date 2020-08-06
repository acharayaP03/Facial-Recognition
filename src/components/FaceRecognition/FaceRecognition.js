import React from 'react';

const FaceRecognition = ({ imageUrl, box }) =>{

    return(
        <div className="link-container">
            <div className="image__container">
                <img id="image" src={imageUrl} alt=""/>
                <div className="bounding-box"  style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
        </div>
    )
}

export default FaceRecognition;