import { useRef, useEffect } from 'react';
import { GeneralError } from './ErrorHandler';

export const useIsMounted = () => {
    try {
        const isMounted = useRef(false);

        useEffect(() => {
            isMounted.current = true;
            return () => isMounted.current = false;
        }, []);

        return isMounted;
    } catch (error) {
        GeneralError(error);
    }
}