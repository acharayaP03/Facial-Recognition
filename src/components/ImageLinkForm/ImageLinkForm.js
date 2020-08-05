import React from 'react';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) =>{
    return(
        <div className="link-container">
            <p className='paragraph'>
                {'This Magic Brain will detect faces in your pictures. Give it a try.'}
            </p>
            <form className="form">
                <div className="form__group">
                    <input onChange={onInputChange} id="imageInput" type="text" className="form__input" placeholder="Insert Image" />
                    <label className="form__label" htmlFor="imageInput">Insert Image</label>
                </div>
                <button type='button' className="btn" onClick={onButtonSubmit}>Detect</button>
            </form>
        </div>
    );
}

export default ImageLinkForm;