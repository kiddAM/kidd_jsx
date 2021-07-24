import React from 'react';
import { Blurb } from '../Blurb';

export const Shop = () => {
    const blurbText = (
        <div>
            <p>Howdy! ...once more.</p>
            <p>There will be stuff to buy...</p>
            <p>🤠</p>
        </div>
    )

    return(
        <div className="page shop">
            <Blurb name="intro" text={blurbText} />
        </div>
    );
}