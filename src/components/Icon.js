import React from 'react';

export const Icon = (props) => {
    const handleIconClick = (event) => {
        event.preventDefault();
        clicked = event.currentTarget.className;
        console.log('icon clicked: ', clicked);

    }

    const handleIconHover = (event) => {
        event.preventDefault();
        hovered = event.currentTarget.className;
        console.log('icon hover: ', hovered);

    }

    const iconStyle = {
        backgroundImage: 'url('+ props.imageList[0] +')',
        display: 'block',
        height: '100px',
        width: '100px',
        color: 'rgb(17, 12, 22)',
    }

    return(
            <div 
                onClick={() => handleIconClick()} 
                onMouseOver={() => handleIconHover()} 
                style={iconStyle} 
                className="content-block icon" 
                id={props.shortname}
            >
                <h4>{props.verbosename}</h4>
            </div>
    )
}