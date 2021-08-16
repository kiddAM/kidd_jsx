import React from 'react';
import { useState, setState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { GeneralError } from '../ErrorHandler';
import { useIsMounted } from '../useIsMounted';

export const Bill = (props) => {
    const isMounted = useIsMounted();
    const id = props.id ? props.id : null; // alphnum string
    const type = props.type ? props.type : null; // string
    const value = props.value ? props.value : null; // int
    const dispensed = useState(false);

    const sendData = () => {
        const data = { 'dispensed' : dispensed };
        props.dispenserCallback(data);
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

    return(type, value);

}