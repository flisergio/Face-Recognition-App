import React, { Fragment } from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return(
        <Fragment>
            <div className="div_imageformlink-container">
                <p className="f3">
                    {"This Magic Brain will detect faces in your pictures. Give it a try!"}
                </p>

                <div className="form_image-data center">
                    <div className="form center pa4 br3 shadow-5">
                        <input className="f4 pa2 w-70 center" type="text" onChange={onInputChange} />
                        <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
                        onClick={onButtonSubmit}>Detect</button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default ImageLinkForm;