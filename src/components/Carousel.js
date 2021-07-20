import React, { useCallback, useEffect, useState, useRef } from 'react';
import { IconList } from './IconList';
import { Highlighter } from './Highlighter';
import { GeneralError } from './ErrorHandler';

export const Carousel = (props) => {
    const carouselStyle = {
        border: '1.5px solid silver',
        position: 'relative',
        display: 'block',
        height: '403px',
        width: '403px',
        margin: '12px 0 0',
        color: 'yellowgreen',
    }
    
    let iconRef = useRef();
    let highlightRef = useRef();
    let genName = 'test-carousel-xl';
    const carouselName = (!props.name) ? genName : props.name;
    const contentGroup = props.contentBlockGroup;

    const [iconClicked, setIconClicked] = useState(false);
    const [highlighted, setHighlighted] = useState('');
    const [selected, setSelected] = useState('');   console.log('selected (caro): ', selected);

    const handleHighlight = useCallback((data) => {
        try {
            if (data && iconClicked) {
                setHighlighted(data['name']);
                if (data['name'] !== selected) {
                    console.log('clicked n highlighted diff');
                } else {
                    console.log('same same');
                }
            }
        } catch (error) {
            GeneralError(error);
        }
    }, [iconClicked]);

    const handleClickedIcon = useCallback((data) => {
        try {
            if (data['clicked']) {
                setIconClicked(true);
                console.log('click on: ', data['name']);
                setSelected(data['name']);
            }
        } catch (error) {
            GeneralError(error);
        }
    });
    
    useEffect(() => {
        try {
            console.log('clicked: ', iconClicked);
            if (iconClicked) {
                setIconClicked(false);
            }
        } catch (error) {
            GeneralError(error)
        }
    }, [iconClicked]);

    useEffect(() => {
        try {
            if (selected && selected === highlighted) {
                setSelected(false);
            }
        } catch (error) {
            GeneralError(error);
        }
    }, [selected]);

    return(
        <div style={carouselStyle} className="carousel" id={carouselName}>
            <IconList 
                ref={iconRef} 
                carouselCallback={handleClickedIcon} 
                contentBlockGroup={contentGroup} 
            />
            <Highlighter 
                ref={highlightRef} 
                carouselCallback={handleHighlight} 
                selection={selected ? selected : null} 
                contentBlockGroup={contentGroup} 
            />
        </div>
    )
}