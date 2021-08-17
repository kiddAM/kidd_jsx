import React, { useState, setState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { GeneralError } from '../ErrorHandler';
import { useIsMounted } from '../useIsMounted';

export const Dispenser = (props) => {
    const isMounted = useIsMounted()
    const id = props.id ? props.id : null;
    const inventory = useState(props.inventory ? props.inventory : null);
    const totalValue = useState(0);

    const addMoney = (depositDict) => {
        // something here
    }
}