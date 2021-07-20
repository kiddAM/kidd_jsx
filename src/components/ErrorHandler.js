import React from 'react';

export const GeneralError = (err) => {
    try {
        console.log('😢🌴 Trouble in paradise: ', err);
    } catch (error) {
        console.log('big trouble...', error);
    }
}