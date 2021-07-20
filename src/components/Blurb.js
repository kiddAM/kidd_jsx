import React from "react";

const blurbStyle = {
    color: 'yellowgreen',
}

export const Blurb = () => {
    // console.log('getting intro...')
    return(
        <div style={blurbStyle} className="test-introduction">
            <p>howdy, i'm kidd AM.</p>
            <p>i'm a writer, rapper, n producer.</p>
            <p>fwm.</p>
        </div>
   );
}