import React, { forwardRef, useState, useEffect, useCallback, useRef } from 'react';
import { Highlight } from './Highlight';
import { GeneralError } from '../ErrorHandler';
import { useIsMounted } from '../useIsMounted';
import { ErrorBoundary } from 'react-error-boundary';

export const Highlighter = (props) => {
    const highlightStyle = {
        border: '0.025 solid peru',
        position: 'relative',
        display: 'block',
        height: '300px',
        width: '300px',
        margin: '0.025em auto',
    }

    const isMounted = useIsMounted();
    const contentGroup = props.contentBlockGroup;   // console.log('🎲 ', contentGroup);
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

    // useEffect(() => {
    //     try {
    //         if (isMounted.current == true) {
    //             return () => isMounted.current == false;
    //         }
    //         // return isMounted;
    //     } catch (error) {
    //         GeneralError(error)
    //     }
    // });

    useEffect(() => {
        try {
            if (isMounted.current) {
                if (selection) {
                    setSelectionMade(true);
                    let i = getSelectedIndex();
                    if (i !== activeIndex) {
                        setActiveIndex(i);
                    }
                }
            }
        } catch (error) {
            GeneralError(error);
        }
        // console.log('in selection effect...');
    });

    useEffect(() => {
        try {
            if (isMounted.current) {
                setSelectionMade(false);
            }
        } catch (error) {
            GeneralError(error)
        }
    }, [selectionMade, isMounted])

    // console.log('should enter highlight effect...');
    useEffect(() => {
        try {
            if (isMounted.current) {
                let count = null;
                let start = 0;
                if (selectionMade) {
                    count = activeIndex;
                } else {
                    count = start;
                }
                // console.log('💻 idx to start: ', count);
                // console.log('💻 len: ', Object.keys(contentGroup).length);
                const timer = setInterval(() => {
                    if (activeIndex < Object.keys(contentGroup).length - 1) {
                        // console.log('💻 active idx before interval change: ', activeIndex ? activeIndex : 'none');
                        // console.log('🧰 action: ++');
                        count = activeIndex + 1;    
                        // console.log('📀 new idx should be: ', count);
                        setActiveIndex(count);
                    } else {
                        // console.log('💻 active idx before interval change: ', activeIndex ? activeIndex : 'none');
                        // console.log('🧰 action: restart @ ', start);
                        count = start;      
                        // console.log('📀 new idx should be: ', count);
                        setActiveIndex(count);
                    }
                }, 5000);
                return () => clearInterval(timer);
            }
        } catch (error) {
            GeneralError(error);
        }
    }, [activeIndex, isMounted]);

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
        <ErrorBoundary>
            <div style={highlightStyle} className="highlight-area">
                {handleHighlightUpdate(activeIndex ? activeIndex : 0)}
                <p>{activeIndex}</p>
            </div>
        </ErrorBoundary>
    )
}