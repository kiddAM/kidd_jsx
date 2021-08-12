import React, { useEffect, useImperativeHandle, useState, useRef, forwardRef, useCallback  } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { GeneralError } from '../ErrorHandler';
import { useIsMounted } from '../useIsMounted';

export const Icon = (props) => {
    const isMounted = useIsMounted();
    const iconRef = useRef();
    const [clicked, setClicked] = useState(false);
    const [hover, setHover] = useState(false);

    const iconStyle = {
        backgroundImage: props.imageList ? 'url('+ props.imageList[0] +')' : 'lightblue',
        opacity: hover ? '35%' : '100%',
        display: 'block',
        height: '100px',
        width: '100px',
        color: 'rgb(17, 12, 22)',
        borderRadius: '.175em',
    }

    const sendData = () => {
        try {
            if (clicked) {
                const data = { 'clicked': clicked, 'name': props.shortname };
                console.log('💻 data: ', data);
                props.listCallback(data);
            }    
        } catch (error) {
            GeneralError(error);
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
            if (isMounted.current) {
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
            }
        } catch (error) {
            GeneralError(error);
        }
    }, [iconRef, isMounted])

    useEffect(() => {
        try {
            if (isMounted.current) {
                sendData();
            }
            // console.log('handler effect...');
        } catch (error) {
            GeneralError(error);
        }
    }, [clicked]);

    return(
        <ErrorBoundary>
            <div 
                ref={iconRef}
                style={iconStyle} 
                className={`content-block icon ${clicked ? "clicked" : ""}`} 
                id={props.shortname}
            >
                <h4>{props.verbosename}</h4>
            </div>
        </ErrorBoundary>
    )
}