import React from 'react';

import { Blurb } from './components/Blurb';
import { Carousel } from './components/Carousel';
import { ContentBlock } from './components/ContentBlock';
import { GeneralError } from './components/ErrorHandler';

import pinkIcon from './assets/kidd-clock-xxsm-pnk.png';
import pinkDiv from './assets/kidd-clock-sm-pnk.png';
import orangeIcon from './assets/kidd-clock-xxsm-orange.png';
import orangeDiv from './assets/kidd-clock-sm-orange.png';
import blueIcon from './assets/kidd-clock-xxsm-blu.png';
import blueDiv from './assets/kidd-clock-sm-blu.png';
import limeIcon from './assets/kidd-clock-xxsm-lime.png';
import limeDiv from './assets/kidd-clock-sm-lime.png';

const pinkBlock = {
    name: 'pinkBlock',
    vrbs: 'Pink Block',
    text: 'Pink block for da cuties!',
    imgList: [pinkIcon, pinkDiv],
    url: 'www.google.com',
}
const orangeBlock = {
    name: 'orangeBlock',
    vrbs: 'Orange Block',
    text: 'Orange block for da hotties!',
    imgList: [orangeIcon, orangeDiv],
}
const blueBlock = {
    name: 'blueBlock',
    vrbs: 'Blue Block',
    text: 'Blue block for da baddies!',
    imgList: [blueIcon, blueDiv],
}
const limeBlock = {
    name: 'limeBlock',
    vrbs: 'Lime Block',
    text: 'Lime block for da lil ones!',
    imgList: [limeIcon, limeDiv],
}

const pb = ContentBlock(pinkBlock['name'], pinkBlock['vrbs'], pinkBlock['text'], pinkBlock['imgList'], pinkBlock['url']);
const ob = ContentBlock(orangeBlock['name'], orangeBlock['vrbs'], orangeBlock['text'], orangeBlock['imgList']);
const bb = ContentBlock(blueBlock['name'], blueBlock['vrbs'], blueBlock['text'], blueBlock['imgList']);
const lb = ContentBlock(limeBlock['name'], limeBlock['vrbs'], limeBlock['text'], limeBlock['imgList']);

const contentGroup = {  0: pb, 
                        1: ob, 
                        2: bb,
                        3: lb
                    };
const carouselName = 'colors';

const buttonStyle = {
    position: 'relative',
    display: 'block',
    margin: '12px auto',
}

// console.log('cg: ', contentGroup);

export const App = () => {
    const handleBtnClick = (e) => {
        e.preventDefault();
        console.log('button clicked: ', e.target);
    }

    console.log('🎇rendering - here we go...');
    try {
        return(
            <div className="app">
                <Blurb />
                <Carousel name={carouselName} contentBlockGroup={contentGroup} />
                {/* <button style={buttonStyle} draggable="true" onClick={handleBtnClick}>click here</button> */}
            </div>
        );
    } catch (error) {
        GeneralError(error);
    }
}
