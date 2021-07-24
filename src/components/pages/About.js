import React from 'react';
import { Blurb } from '../Blurb';

export const About = () => {
    const blurbText = (
        <div>
            <p>Howdy! ...again.</p>
            <p>I like a lot of things...</p>
            <p>🤠</p>
        </div>
    )

    return(
        <div className="page about">
            <Blurb name="intro" text={blurbText} />
        </div>
    );
}