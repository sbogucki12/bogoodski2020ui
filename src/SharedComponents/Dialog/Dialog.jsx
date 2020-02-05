import React from 'react';
import './dialog.css';
import * as constants from '../../Utils/consts';

const Dialog = props => {   
    
    return (
        <div className="dialog-container">
            <div className="dialog-box">
                <p>{props.dialogContent}</p>
                <div className="home-btn" onClick={() => props.onClose()}>
                    {constants.CLOSE}
                </div>
            </div>     
        </div>
  );
};

export default Dialog;