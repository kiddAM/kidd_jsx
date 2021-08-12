import React, { forwardRef, useEffect, useRef } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Link } from 'react-router-dom';
import { GeneralError } from '../ErrorHandler';
import { useIsMounted } from '../useIsMounted';

export const Highlight = (props) => {
    const highlightStyle = {
        backgroundImage: 'url(' + props.imageList[1] + ')',
        display: 'block',
        height: '300px',
        width: '300px',
        color: 'rgb(17, 12, 22)',
        border: '0.0125em solid peru',
        borderRadius: '0.175em',
    }

    const isMounted = useIsMounted();

    const sendData = () => {
        const data = { 'name': props.shortname };
        props.highlighterCallback(data);
    }

    useEffect(() => {
        try {
            if (isMounted.current) {
                sendData();
            }
        } catch (error) {
            GeneralError(error);
        }
        // console.log('data sending..');
    });

    return(
        <ErrorBoundary>
            <Link to={{ pathname: props.link}} target="_blank">
                <div style={highlightStyle} className="content-block highlight" id={props.shortname}>
                    <h3>{props.verbosename}</h3>
                    <p>{props.text}</p>
                </div>
            </Link>
        </ErrorBoundary>
    )
}