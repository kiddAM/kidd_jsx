import React from 'react';
import { useState, setState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { GeneralError } from '../ErrorHandler';
import { useIsMounted } from '../useIsMounted';
import { Coin } from './Coin';
import { Bill } from './Bill';

export const CirculationCenter = (props) => {
    const isMounted = useIsMounted();
    const id = props.id ? props.id : null;
    const registrty =   { 
                        'coinCount' : {
                            'total' : 0,
                            'pennies' : 0,
                            'nickels' : 0,
                            'dimes' : 0,
                            'quarters' : 0,
                            },
                        'billCount' : {
                            'total' : 0,
                            'ones' : 0,
                            'fives' : 0,
                            'tens' : 0,
                            'twenties' : 0,
                            },
                        }

    const createIdentifier = (form, type) => {
        try {
            let id = null;
            let idTemp = null;
            let regIndex = retrieveRegistryIndex(form, type);
            const incrIndexStr = (regIndex + 1).toString();
            if (form && type && regIndex) {
                if (form == 0) {
                    idTemp += 'c';
                    switch (type) {
                        case 'penny' || 'p': idTemp += 'p';
                            break;
                        case 'nickel' || 'n': idTemp += 'n';
                            break;
                        case 'dime' || 'd': idTemp += 'd'; 
                            break;
                        case 'quarter' || 'q': idTemp += 'q';
                            break;
                        default: 
                            idTemp = null;
                            throw GeneralError('unidentified currency type');
                    }
                } else if (form == 1) {
                    idTemp += 'b';
                    switch (type) {
                        case 'one' || 'o': idTemp += 'o';
                            break;
                        case 'five' || 'f': idTemp += 'f';
                            break;
                        case 'ten' || 't': idTemp += 't';
                            break;
                        case 'twenty' || 'w': idTemp += 'w';
                            break;
                        default: 
                            idTemp = null;
                            throw GeneralError('unidentified currency type');
                    }
                } else { 
                    throw GeneralError('unidentified currency form'); 
                }

                idTemp += incrIndexStr;
                updateRegistry(form, type);

                if (idTemp) {
                    if (idTemp[0] == ('c' || 'b')) {
                        if (idTemp[1].match(/[a-z]/i)) {
                            if (Number.isInteger(idTemp[2])) {
                                id = idTemp;
                                return id;
                            } else { throw GeneralError('id error at [2]'); }
                        } else { throw GeneralError('id error at [1]'); }
                    } else { throw GeneralError('id error at [0]'); }
                } else { throw GeneralError('id error at idTemp creation'); }
            }
        } catch (error) {
            GeneralError(error);
        }
    }

    const assignValue = (form, type) => {
        try {
            if (form && type) {
                if (form == 0) {
                    switch (type) {
                        case 'penny' || 'p':
                            value = 0.01;
                            break;
                        case 'nickel' || 'n':
                            value = 0.05;
                            break;
                        case 'dime' || 'd':
                            value = 0.10;
                            break;
                        case 'quarter' || 'q':
                            value = 0.25;
                            break;
                        default: 
                            idTemp = null;
                            throw GeneralError('issue with coin value assignment');
                    }
                } else if (form == 1) {
                    idTemp += 'b';
                    switch (type) {
                        case 'one' || 'o':
                            value = 1.00;
                            break;
                        case 'five' || 'f':
                            value = 5.00;
                            break;
                        case 'ten' || 't':
                            value = 10.00;
                            break;
                        case 'twenty' || 'w':
                            value = 20.00;
                            break;
                        default: 
                            value = null;
                            throw GeneralError('issue with bill value assignment');
                    }
                }
                return value;
            }
        } catch (error) {
            GeneralError(error);
        }
    }

    const createCurrency = (form, type) => {
        try {
            if (form && type) {
                let id = createIdentifier(form, type);
                let value = assignValue(form, type);

                if (form == 0) {
                    return Coin(id=id, type=type, value=value);
                } else if (form = 1) {
                    return Bill(id=id, type=type, value=value);
                }
            }
        } catch (error) {
            GeneralError(error);
        }
    }

    const retrieveRegistryIndex = (form, type) => {
        try {
            let regIndex = null;
            if (form && type) {
                if (form = 0) {
                    if (form == 0) {
                        switch (type) {
                            case 'penny' || 'p':
                                regIndex = registry['coinCount']['pennies'];
                                break;
                            case 'nickel' || 'n':
                                regIndex = registry['coinCount']['nickels'];
                                break;
                            case 'dime' || 'd':
                                regIndex = registry['coinCount']['dimes'];
                                break;
                            case 'quarter' || 'q':
                                regIndex = registry['coinCount']['quarters'];
                                break;
                            default: 
                                regIndex = null;
                                throw GeneralError('issue retrieving registry index');
                        }
                    } else if (form == 1) {
                        idTemp += 'b';
                        switch (type) {
                            case 'one' || 'o':
                                regIndex = registry['coinCount']['ones'];
                                break;
                            case 'five' || 'f':
                                regIndex = registry['coinCount']['fives'];
                                break;
                            case 'ten' || 't':
                                regIndex = registry['coinCount']['tens'];
                                break;
                            case 'twenty' || 'w':
                                regIndex = registry['coinCount']['twenties'];
                                break;
                            default: 
                                value = null;
                                throw GeneralError('issue retrieving registry index');
                        }
                    }
                    return regIndex;
                }
            }
        } catch (error) {
            GeneralError(error);
        }
    }

    const updateRegistry = (form, type) => {
        const regIndex = retrieveRegistryIndex(form, type);
        regIndex = regIndex + 1;
        console.log('registry updated');
    }
}