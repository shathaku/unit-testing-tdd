import React from 'react';

function Congrats(props) {
    if(props.success) {
        return (
            <div className="congrats-main">
                <div className="congrats-msg">
                    Congrats
                </div>
            </div>
        )
    } else {
        return (
            <div className="congrats-main">
                
            </div>
        )
    }
}

export default Congrats;