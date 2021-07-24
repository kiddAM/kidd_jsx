import React from "react";

const blurbStyle = {
    color: 'yellowgreen',
}

export const Blurb = (props) => {
    // console.log('getting intro...')
    const name = props.name ? `short-blurb ${props.name}` : "short-blurb";
    return(
        <div style={blurbStyle} className={name}>
            {props.text}
        </div>
   );
}