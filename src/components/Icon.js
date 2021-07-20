import React, { useEffect, useImperativeHandle, useState, useRef, forwardRef, useCallback  } from 'react';

export const Icon = forwardRef((props, ref) => {
    const iconRef = useRef();
    const [clicked, setClicked] = useState(false);
    const [hover, setHover] = useState(false);

    // useImperativeHandle(ref, () => {
    //     focus: () => {
    //         ref.current.focus();
    //         console.log('focus on me :', ref.current);
    //     }
    // });

    const iconStyle = {
        backgroundImage: props.imageList ? 'url('+ props.imageList[0] +')' : 'lightblue',
        opacity: hover ? '35%' : '100%',
        display: 'block',
        height: '100px',
        width: '100px',
        color: 'rgb(17, 12, 22)',
    }

    const sendData = () => {
        if (clicked) {
            const data = { 'clicked': clicked, 'name': props.shortname };
            console.log('data: ', data);
            props.listCallback(data);
        }
    }

    useEffect(() => {
        const handleMouseEnter = () => {
            setHover(true);
        }
    
        const handleMouseLeave = () => {
            setHover(false);
        }
    
        const handleMouseDown = () => {
            setClicked(true);
        }
    
        const handleMouseUp = () => {
            setClicked(false);
        }
        // console.log('adding listeners to icon...');
        try {
            if (iconRef) {
                // console.log('icon ref current: ', iconRef.current);
                iconRef.current.addEventListener('mouseenter', handleMouseEnter);
                iconRef.current.addEventListener('mouseleave', handleMouseLeave);
                iconRef.current.addEventListener('mousedown', handleMouseDown);
                iconRef.current.addEventListener('mouseup', handleMouseUp);

                return () => {
                    console.log('removing listeners...');
                    iconRef.current.removeEventListener('mouseenter', handleMouseEnter);
                    iconRef.current.removeEventListener('mouseleave', handleMouseLeave);
                    iconRef.current.removeEventListener('mousedown', handleMouseDown);
                    iconRef.current.removeEventListener('mouseup', handleMouseUp);
                }
            }
        } catch (error) {
            console.log('Error: ', error);
        }
    }, [iconRef])

    useEffect(() => {
        try {
            console.log('handler effect...');
            sendData();
        } catch (error) {
            console.log('Error: ', error);
        }
    }, [clicked]);

    return(
            <div 
                ref={iconRef}
                style={iconStyle} 
                className={`content-block icon ${clicked ? "clicked" : ""}`} 
                id={props.shortname}
            >
                <h4>{props.verbosename}</h4>
            </div>
    )
})