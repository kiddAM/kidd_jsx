import React, { useEffect, useRef, useState } from 'react';
import { ContentBlock } from './ContentBlock';

const setGenericBlock = () => {
    const cb = <ContentBlock name='test' vrbs='Test Content Block' text='This is a test.' />;
    return cb;
}

const setGenericGroup = (contentBlockNumber) => {
    console.log('building generic content group...');
    const number = contentBlockNumber ? contentBlockNumber : 4;
    console.log('blocks in group: ', number);
    const genericBlockGroup = {};
    for (let i = 0; i < number; i++) {
        let newBlock = setGenericBlock();
        genericBlockGroup[i] = newBlock;
        console.log('generic block made: ', i, newBlock);
    }

    return genericBlockGroup;
}

// object: Carousel
// descript: 
// related: Content Block
export const Carousel = (props) => {
    console.log('building new carousel...', props.name);

    let genName = 'test-carousel';
    const carouselName = (!props.name) ? genName : props.name;       console.log('carousel name: ', carouselName);
    const contentGroup = (!props.contentBlockGroup) ? setGenericGroup() : props.contentBlockGroup;       console.log('content block group: ', contentGroup);

    const [highlight, setHighlight] = useState(0);  console.log('highlight idx: ', (highlight >= 0 ? highlight : 'none'));
    const [iconList, setIconList] = useState([]);     console.log('icon list len: ', (iconList ? iconList.length : 'none'));

    const iconStyle = {
        display: 'inline-block',
        verticalAlign: 'top',
    }
   
    console.log('content group: ', contentGroup);

    const handleIconClick = (e) => {
        e.preventDefault();
        const elem = e.currentTarget.className;
        alert('look', 'icon clicked');
    }

    const handleIconList = (contentGroup) => {
        console.log('handling icon list...');
        try {
            const newList = [];
            for (let i = 0; i < Object.keys(contentGroup).length; i++) {
                console.log('i: ', i);
                const listElement = <li onClick={handleIconClick} style={iconStyle} key={i} className="icon-list-item">{contentGroup[i].icon}</li>;
                console.log('list element: ', listElement);      console.log('key: ', listElement.key);
                newList.push(listElement);
            }
            return newList;
        } catch (error) {
            console.log('Error: ', error);
        }
    }

    const handleHighlightIdx = () => {
        console.log('handling highlight index...')
        try {
            let next = 0;   console.log('default next: ', next);
            if (highlight >= 0) {
                console.log('something to highlight: ', true);
                let current = highlight;    console.log('current hlt: ', current);
                next = (current + 1 < Object.keys(contentGroup).length) ? current + 1 : 0;     
            } else {
                console.log('something to highlight: ', false);
            }
            console.log('next hlt: ', next);
            return next;
        } catch (error) {
            console.log('Error: ', error);
        }
    }
    
    const handleHighlightUpdate = (idx) => {
        console.log('handling highlight view update...');
        try {
            if (idx >= 0) {
                console.log('retrieving highlight div...');
                const highlightElement = contentGroup[idx].highlight;
                console.log('highlight element: ', highlightElement);
                return highlightElement;
            } else {
                console.log('no index available')
            }
        } catch (error) {
            console.log('Error: ', error);
        }
    }

    console.log('should enter highlight effect...');
    useEffect(() => {
        try {
            let count = 0;

            const timer = setInterval(() => {
                count++;
                if (count === Object.keys(contentGroup).length - 1) {
                    count = 0;
                }
                setHighlight(count);
            }, 5000);
            
            console.log('new highlight: ', highlight);
            return () => clearInterval(timer);
        } catch (error) {
            console.log('Error: ', error);
        }
    }, []);

    console.log('...end carousel build')

    const carouselStyle = {
        border: '1.5px solid silver',
        position: 'relative',
        display: 'block',
        height: '403px',
        width: '403px',
        margin: '12px 0 0',
        color: 'yellowgreen',
     }
     
     const iconStripStyle = {
         border: '1px solid blue',
         position: 'relative',
         display: 'block',
         height: '100px',
         width: '400px',
         padding: 0,
     }
     
     const iconStripListStyle = {
         listStyleType: 'none',
         padding: 0,
     }

     const highlightStyle = {
        border: '1px solid gold',
        position: 'relative',
        display: 'block',
        height: '300px',
        width: '300px',
        margin: '0 auto',
    }
    

    return(
        <div style={carouselStyle} className="carousel" id={carouselName}>
            <div style={iconStripStyle} className="icon-strip">
                <ul style={iconStripListStyle} className="icon-strip-list">{handleIconList(contentGroup)}</ul>
            </div>
            <div style={highlightStyle} className="highlight-area">
                {handleHighlightUpdate(highlight)}
                <p>{highlight}</p>
            </div>
        </div>
    );
}