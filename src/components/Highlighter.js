import React, { forwardRef, useState, useEffect, useCallback } from 'react';
import { Highlight } from './Highlight';
import { GeneralError } from './ErrorHandler';

export const Highlighter = (props) => {
    const highlightStyle = {
        border: '1px solid gold',
        position: 'relative',
        display: 'block',
        height: '300px',
        width: '300px',
        margin: '0 auto',
    }

    const contentGroup = props.contentBlockGroup;
    const selection = props.selection;
    const [activeIndex, setActiveIndex] = useState(0);
    const [selectionMade, setSelectionMade] = useState(false);
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

    }, []);

    useEffect(() => {
        // console.log('in selection effect...');
        if (selection) {
            setSelectionMade(true);
            let i = getSelectedIndex();
            if (i !== activeIndex) {
                setActiveIndex(i);
            }
        }
    });

    useEffect(() => {
        setSelectionMade(false);
    }, [selectionMade])

    // console.log('should enter highlight effect...');
    useEffect(() => {
        try {
            let isMounted = true;
            if (isMounted) {
                let count = null;
                if (selectionMade) {
                    count = activeIndex;
                } else {
                    count = 0;
                }
                // console.log('active rn: ', activeIndex);
                const timer = setInterval(() => {
                    if (count === Object.keys(contentGroup).length - 1) {
                        count = 0;
                    } else {
                        count++;
                    }
                    setActiveIndex(count);
                }, 6000);
                
                return () => {
                    clearInterval(timer);
                    isMounted = false;
                }
            }
        } catch (error) {
            GeneralError(error);
        }
    }, []);

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
}