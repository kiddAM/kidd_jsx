import React from 'react'

import { Icon } from './Icon';
import { Highlight } from './Highlight';
import divImg from '../../assets/kidd-clock-sm.png';
import iconImg from '../../assets/kidd-clock-xxsm.png';

// object: Content Block.
// descript: Data block for creating carousel items
// returns: state manager object (when called as a function)
// related: Icon, Highlight, Carousel
export const ContentBlock = (name, vrbs, text, imgList, url) => {
    // console.log('building content block:', name);

    const short = name ? name : 'test-cb'; // short name
    const verbose = vrbs ? vrbs : 'test content block'; // verbose name
    const imageList = imgList ? imgList : [iconImg, divImg]; // background image src location
    const blockText = text ? text : 'this is sample text in a sample content block.'; // text data
    const link = url ? url : 'http://www.chloe-am.com'; // redirect url

    const stateManager = {
        'shortname': short,
        'verbosename': verbose,
        'imageList': imageList,
        'text': blockText,
        'link': link,
        'icon': <Icon shortname={short} verbosename={verbose} imageList={imageList} />,
        'highlight': <Highlight shortname={short} verbosename={verbose} text={blockText} imageList={imageList} link={link} />,
    }

    return(stateManager);
}