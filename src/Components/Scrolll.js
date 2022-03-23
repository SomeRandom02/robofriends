import React from "react";

const Scrolll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '5px solid black', height: '600px'}}>
            {props.children}
        </div>
    )
}

export default Scrolll