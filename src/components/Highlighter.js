import React, { forwardRef, useState, useEffect, useCallback } from 'react';
import { Highlight } from './Highlight';
import { GeneralError } from './ErrorHandler';

export const Highlighter = forwardRef((props, ref) => {
    const highlightStyle = {
        border: '1px solid gold',
        position: 'relative',
        display: 'block',
        height: '300px',
        width: '300px',
        margin: '0 auto',
    }

    const contentGroup = props.contentBlockGroup;
    const [activeIndex, setActiveIndex] = useState(0);
    const selection = props.selection;  console.log('selected (hlighter): ', selection);
    const [selectionMade, setSelectionMade] = useState(false);  console.log('selection made: ', selectionMade);
    const handleHighlightData = useCallback((data) => {
        try {
            if (data) {
                props.carouselCallback(data);
            }
        } catch (error) {
            GeneralError(error);
        }
    });

    const getSelectedIndex = () => {
        try {
            if (selection) {
                for (let k = 0; k < Object.keys(contentGroup).length; k++) {
                    const comp = contentGroup[k];
                    if (comp['shortname'] === selection) {
                        return k;
                    }
                }
            }
        } catch (error) {
            GeneralError(error);
        }
    }

    useEffect(() => {
        if (selection) {
            setSelectionMade(true);
        }

        return () => setSelectionMade(false);
    });

    useEffect(() => {
        try {
            console.log('changing selected...')
            let i = getSelectedIndex();
            setActiveIndex(i);
        } catch (error) {
            GeneralError(error);
        }
    }, [selectionMade])

    // console.log('should enter highlight effect...');
    useEffect(() => {
        try {
            let count = activeIndex ? activeIndex : 0;
            const timer = setInterval(() => {
                if (count === Object.keys(contentGroup).length - 1) {
                    count = 0;
                } else {
                    count++;
                }
                setActiveIndex(count);
            }, 6000);
            
            return () => clearInterval(timer);
        } catch (error) {
            GeneralError(error);
        }
    }, []);

    useEffect(() => {
        if (activeIndex >= 0) {
            console.log('active: ', activeIndex);
        }
    }, [activeIndex]);

    const handleHighlightUpdate = (k) => {
        // checks index, returns highlight div element
        // console.log('handling highlight view update...');
        try {
            if (k >= 0) {
                const highlightElement = (
                    <Highlight 
                    highlighterCallback={handleHighlightData}
                    shortname={contentGroup[k]['shortname']} 
                    verbosename={contentGroup[k]['verbosename']} 
                    text={contentGroup[k]['text']} 
                    imageList={contentGroup[k]['imageList']} 
                    link={contentGroup[k]['link']} 
                    />);
                return highlightElement;
            } else {
                console.log('no index available')
            }
        } catch (error) {
            GeneralError(error);
        }
    }

    return(
        <div style={highlightStyle} className="highlight-area">
            {handleHighlightUpdate(activeIndex ? activeIndex : 0)}
            <p>{activeIndex}</p>
        </div>
    )
})