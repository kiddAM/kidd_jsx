import React from 'react';

export const Highlight = (props) => {
    const highlightStyle = {
        backgroundImage: 'url(' + props.imageList[1] + ')',
        display: 'block',
        height: '300px',
        width: '300px',
        color: 'rgb(17, 12, 22)',
    }

    return(
        <a href={props.link} className="highlight-url">
            <div style={highlightStyle} className="content-block highlight" id={props.shortname}>
                <h3>{props.verbosename}</h3>
                <p>{props.text}</p>
            </div>
        </a>
    )
}