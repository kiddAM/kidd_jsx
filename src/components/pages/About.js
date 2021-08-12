import React from 'react';
import { Blurb } from '../Blurb';

export const About = () => {
    const blurbText = (
        <div>
            <p>Howdy! ...again.</p>
            <p>My name is Chloé A. Matthews, but all the homies call me Kidd...</p>
            <p>🤠</p>
        </div>
    )

    return(
        <div className="page about">
            <Blurb name="intro" text={blurbText} />
        </div>
    );
}