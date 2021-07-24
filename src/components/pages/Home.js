import React, { ReactDOM} from 'react';
import { Blurb } from '../Blurb';
import { Carousel } from '../carousel/Carousel';
import { ContentBlock } from '../carousel/ContentBlock';
import { GeneralError } from '../ErrorHandler';

import pinkIcon from '../../assets/kidd-clock-xxsm-pnk.png';
import pinkDiv from '../../assets/kidd-clock-sm-pnk.png';
import orangeIcon from '../../assets/kidd-clock-xxsm-orange.png';
import orangeDiv from '../../assets/kidd-clock-sm-orange.png';
import blueIcon from '../../assets/kidd-clock-xxsm-blu.png';
import blueDiv from '../../assets/kidd-clock-sm-blu.png';
import limeIcon from '../../assets/kidd-clock-xxsm-lime.png';
import limeDiv from '../../assets/kidd-clock-sm-lime.png';

const blurbText = (
    <div>
        <p>Howdy! I'm Kidd.</p>
        <p>Welcome to my cute lil corner of the web.</p>
        <p>🤠</p>
    </div>
)
const carouselName = 'colors';
const contentGroup = {
    0: {
        name: 'pinkBlock',
        vrbs: 'Pink Block',
        text: 'Pink block for da cuties!',
        imgList: [pinkIcon, pinkDiv],
        url: 'www.google.com',
    },
    1: {
        name: 'orangeBlock',
        vrbs: 'Orange Block',
        text: 'Orange block for da hotties!',
        imgList: [orangeIcon, orangeDiv],
    },
    2: {
        name: 'blueBlock',
        vrbs: 'Blue Block',
        text: 'Blue block for da baddies!',
        imgList: [blueIcon, blueDiv],
    },
    3: {
        name: 'limeBlock',
        vrbs: 'Lime Block',
        text: 'Lime block for da lil ones!',
        imgList: [limeIcon, limeDiv],
    },
}

const handleContentBlocks = (contentDict) => {
    try {
        console.log('tryn create content blocks...');
        const contentBlockGroup = {};
        for (let k = 0; k < Object.keys(contentGroup).length; k++) {
            const content = contentGroup[k];
            console.log('content: ', content);
            const block = ContentBlock(
                content['name'], 
                content['vrbs'],
                content['text'],
                content['imgList'],
                content['url'] ? content['url'] : null,
            );

            if (block) contentBlockGroup[k] = block;
        }
        return(contentBlockGroup);
    } catch (error) {
        GeneralError(error)
    }
}

export const Home = () => {
    const group = handleContentBlocks(contentGroup);
    return(
        <div className="page home">
            <Blurb name="intro" text={blurbText} />
            <div className="content">
                <Carousel name={carouselName} contentBlockGroup={group ? group : null} />
            </div>
        </div>
    )
}