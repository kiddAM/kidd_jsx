import React, { useCallback, useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { IconList } from './IconList';
import { Highlighter } from './Highlighter';
import { GeneralError } from '../ErrorHandler';
import { useIsMounted } from '../useIsMounted';

export const Carousel = (props) => {
    const carouselStyle = {
        border: '0.075em solid peru',
        borderRadius: '.175em',
        position: 'relative',
        display: 'block',
        height: '403px',
        width: '403px',
        margin: '12px 0 0',
        color: 'yellowgreen',
    }
    
    const isMounted = useIsMounted();
    let genName = 'test-carousel-xl';
    const carouselName = (!props.name) ? genName : props.name;
    const contentGroup = props.contentBlockGroup;

    const [iconClicked, setIconClicked] = useState(false);
    const [highlighted, setHighlighted] = useState('');
    const [selected, setSelected] = useState('');
    const handleHighlight = useCallback((data) => {
        try {
            if (data && iconClicked) {
                setHighlighted(data['name']);
            }
        } catch (error) {
            GeneralError(error);
        }
    }, [iconClicked]);

    const handleClickedIcon = useCallback((data) => {
        try {
            if (data['clicked']) {
                setIconClicked(true);
                // console.log('click on: ', data['name']);
                setSelected(data['name']);
            }
        } catch (error) {
            GeneralError(error);
        }
    });
    
    useEffect(() => {
        try {
            if (isMounted.current) {
                if (iconClicked) {
                    setIconClicked(false);
                }
            }
            // console.log('clicked: ', iconClicked);
        } catch (error) {
            GeneralError(error)
        }
    }, [iconClicked, isMounted]);

    useEffect(() => {
        try {
            if (isMounted.current) {
                if (selected) {
                    setSelected('');
                }
            }
        } catch (error) {
            GeneralError(error);
        }
    }, [selected, isMounted]);

    return(
        <ErrorBoundary>
            <div style={carouselStyle} className="carousel" id={carouselName}>
                <IconList 
                    carouselCallback={handleClickedIcon} 
                    contentBlockGroup={contentGroup} 
                />
                <Highlighter 
                    carouselCallback={handleHighlight} 
                    selection={selected ? selected : ''} 
                    contentBlockGroup={contentGroup} 
                />
            </div>
        </ErrorBoundary>
    )
}