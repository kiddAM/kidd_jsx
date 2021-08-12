import React from "react";
import { ErrorBoundary } from "react-error-boundary";

const blurbStyle = {
    color: 'yellowgreen',
}

export const Blurb = (props) => {
    // console.log('getting intro...')
    const name = props.name ? `short-blurb ${props.name}` : "short-blurb";
    return(
        <ErrorBoundary>
            <div style={blurbStyle} className={name}>
                {props.text}
            </div>
        </ErrorBoundary>
   );
}