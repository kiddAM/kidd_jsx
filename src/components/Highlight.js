import React, { forwardRef, useEffect, useRef } from 'react';

export const Highlight = forwardRef((props, ref) => {
    const highlightStyle = {
        backgroundImage: 'url(' + props.imageList[1] + ')',
        display: 'block',
        height: '300px',
        width: '300px',
        color: 'rgb(17, 12, 22)',
    }

    const highlightRef = useRef();

    const sendData = () => {
        const data = { 'name': props.shortname };
        props.highlighterCallback(data);
    }

    useEffect(() => {
        sendData();
        console.log('data sending..');
    })

    return(
        <a href={props.link} className="highlight-url">
            <div style={highlightStyle} ref={highlightRef} className="content-block highlight" id={props.shortname}>
                <h3>{props.verbosename}</h3>
                <p>{props.text}</p>
            </div>
        </a>
    )
})