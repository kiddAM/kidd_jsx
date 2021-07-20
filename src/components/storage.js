import React, { useEffect, useRef, useState } from 'react';
import { Button } from './Button';
import { ContentBlock } from './ContentBlock';
import { Icon } from './Icon';

const setGenericBlock = () => {
    // const cb = <ContentBlock name='test' vrbs='Test Content Block' text='This is a test.' />;
    const testBlock = {
        name: 'testBlock',
        vrbs: 'Test Block',
        text: 'This is a test. Dis block for da analysts!',
    }
    const cb = ContentBlock(testBlock['name'], testBlock['vrbs'], testBlock['text']);
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
    const carouselRef = useRef(null);
    const carouselName = (!props.name) ? genName : props.name;       console.log('carousel name: ', carouselName);
    const contentGroup = (!props.contentBlockGroup) ? setGenericGroup() : props.contentBlockGroup;

    const [iconClicked, setIconClicked] = useState(false);      console.log('icon clicked bool: ', iconClicked);
    const [highlight, setHighlight] = useState(0);  console.log('highlight idx: ', (highlight >= 0 ? highlight : 'none'));
    const [iconList, setIconList] = useState([]);

    const iconStyle = {
        display: 'inline-block',
        verticalAlign: 'top',
    }
   
    // console.log('content group: ', contentGroup);

    // const handleUpdateIconList = (contentBlock, listIndex) => {
    //     const cb =  {
    //         name: contentBlock['name'],
    //         vrbs: contentBlock['vrbs'],
    //         text:contentBlock['text'],
    //         imgList: contentBlock['imgList'],
    //         url: contentBlock['url'],            
    //     }
        
    //     const cBlock = ContentBlock(cb['name'], cb['vrbs'], cb['text'], cb['imgList'], cb['url']);
    //     const iconList = document.getElementsByClassName('icon-strip-list');
    //     if (iconList) {
    //         iconList[listIndex] = cBlock.icon;
    //     } else {
    //         console.log('icon list not found :(');
    //     }
    // }
    
    const handleHighlightUpdate = (i) => {
        // checks index, returns highlight div element
        console.log('handling highlight view update...');
        try {
            if (i >= 0) {
                const highlightElement = contentGroup[i].highlight;
                return highlightElement;
            } else {
                console.log('no index available')
            }
        } catch (error) {
            console.log('Error: ', error);
        }
    }

    const handleClickedIconIndex = () => {
        console.log('sniffin for clicks...');
        const clickedEl = document.getElementsByClassName('content-block icon clicked')[0];
        console.log(clickedEl);
        for (let i = 0; i < Object.keys(contentGroup).length; i++) {
            const comp = contentGroup[i].icon;
            console.log('comp to: ', comp);
            if (clickedEl == comp) {
                console.log('issa match!')
                return i;
            }
        }
    }

    const handleClickedIcon = () => {
        setIconClicked(true);
        console.log('icon clicked!');
    }



    console.log('should enter highlight effect...');
    useEffect(() => {
        try {
            let count = 0;
            const timer = setInterval(() => {
                if (count === Object.keys(contentGroup).length - 1) {
                    count = 0;
                } else {
                    count++;
                }
                setHighlight(count);
            }, 6000);
            
            return () => clearInterval(timer);
        } catch (error) {
            console.log('Error: ', error);
        }
    }, []);

    useEffect(() => {
        const handleIconList = (contentGroup) => {
            console.log('handling icon list...');
            try {
                const newList = [];
                for (let k in Object.keys(contentGroup)) {
                    const listElement = <li style={iconStyle} key={k} className="icon-list-item">{contentGroup[k].icon}</li>;
                    newList.push(listElement);
                }
                return newList;
            } catch (error) {
                console.log('Error: ', error);
            }
        }

        try {
            console.log('icon list: ', iconList);
            const newList = handleIconList(contentGroup);
            console.log('new lsit: ', newList);
            if (!iconList || iconList !== newList) {
                setIconList(newList);
                console.log('list now: ', iconList);
            }
        } catch (error) {
            console.log('Error: ', error);
        }
    }, []);

    useEffect(() => {
        const handleMouseDown = () => {
            setIconClicked(true);
            console.log('icon clicked!');
        }
    
        const handleMouseUp = () => {
            setIconClicked(false);
            console.log('icon unclicked!');
        }
        
        try {
            console.log('adding listeners to li items...');
            if (carouselRef?.current) {
                const node = carouselRef?.current.childNodes[0].childNodes[0];
                node.childNodes.forEach(child => {
                    console.log('child: ', child);
                    // child.addEventListener('click', handleClickedIcon);
                    child.addEventListener('mousedown', handleMouseDown);
                    child.addEventListener('mouseup', handleMouseUp);
                });
                console.log('node up: ', node.childNodes);

                return () => {
                    node.childNodes.forEach(child => {
                        // child.removeEventListener('click', handleClickedIcon);
                        child.removeEventListener('mousedown', handleMouseDown);
                        child.removeEventListener('mouseup', handleMouseUp);
                    });
        
                    console.log('node down');
                }
            }
        } catch (error) {
            console.log('Error: ', error);
        }
    }, [carouselRef?.current])

    useEffect(() => {
        try {
            console.log('in clicked icon handler...');
        } catch (error) {
            console.log('Error: ', error);
        }
    }, [iconClicked])

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

    const buttonStyle = {
        border: '.5px solid grey',
        backgroundColor: 'yellowgreen',
        position: 'relative',
        display: 'block',
        height: '20px',
        width: 'auto',
        margin: '20px auto 4px',
    }

    const buttonProps = {
        type: 'button',
        name: 'updateBtn',
        value: 'update carousel content',
        className: 'carousel-btn update',
        key: 'update-btn',
    }
    

    return(
        <div style={carouselStyle} ref={carouselRef} className="carousel" id={carouselName}>
            <div style={iconStripStyle} className="icon-strip">
                <ul style={iconStripListStyle} className="icon-strip-list">{iconList}</ul>
            </div>
            <div style={highlightStyle} className="highlight-area">
                {handleHighlightUpdate(highlight)}
                <p>{highlight}</p>
            </div>
            <div className="carousel-editor">
                <Button type={buttonProps['type']} name={buttonProps['name']} className={buttonProps['className']} value={buttonProps['value']} key={buttonProps['key']} />
            </div>
        </div>
    );
}

export const IconList = (props) => {
    let iconRef = null; // reference to the last clicked icon
    const contentGroup = (props.contentBlockGroup ? props.contentBlockGroup : []);

    const [activeIcon, setActiveIcon] = useState(0);
    const [iconClicked, setIconClicked] = useState(false);
    const [list, setList] = ([]);

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

    const iconStyle = {
        display: 'inline-block',
        verticalAlign: 'top',
    }

    // const handleArchivedIcon = () => {
    //     if (iconRef) {
    //         iconRef;
    //     }
    // }

    const handleMouseDown = () => {
        setIconClicked(true);
        console.log('icon clicked!');
    }

    const handleMouseUp = () => {
        setIconClicked(false);
        console.log('icon unclicked!');
    }

    useEffect(() => {
        const handleIconList = (contentGroup) => {
            console.log('handling icon list...');
            try {
                const newList = [];
                for (let k in Object.keys(contentGroup)) {
                    const listElement = (
                        <li style={iconStyle} key={k} className="icon-list-item">
                            <Icon ref={iconRef} props={contentGroup[k]} />
                        </li>);
                    newList.push(listElement);
                }
                return newList;
            } catch (error) {
                console.log('Error: ', error);
            }
        }
        try {
            if (contentGroup) {
                setList(handleIconList(contentGroup));
            }
        } catch (error) {
            console.log('Error: ', error);
        }
    }, []);

    return(
        <div style={iconStripStyle} className="icon-strip">
            <ul style={iconStripListStyle} ref={listCallback} className="icon-strip-list">{list}</ul>
        </div>
    )
}

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
    const [activeIndex, setActiveIndex] = useState(0);

    console.log('should enter highlight effect...');
    useEffect(() => {
        try {
            let count = 0;
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
            console.log('Error: ', error);
        }
    }, []);

    const handleHighlightUpdate = (i) => {
        // checks index, returns highlight div element
        console.log('handling highlight view update...');
        try {
            if (i >= 0) {
                const highlightElement = contentGroup[i].highlight;
                return highlightElement;
            } else {
                console.log('no index available')
            }
        } catch (error) {
            console.log('Error: ', error);
        }
    }

    return(
        <div style={highlightStyle} className="highlight-area">
            {handleHighlightUpdate(activeIndex)}
            <p>{activeIndex}</p>
        </div>
    )
}

export const Icon = (props) => {
    let iconRef = null;
    const iconCallback = useCallback(node => {
        if (node !== 'undefined') {
            iconRef = node;
        }
    })
    let archive = null;
    const [clicked, setClicked] = useState(false);
    const [hover, setHover] = useState(false);

    useEffect(() => {
        const handleMouseEnter = () => {
            setHover(true);
        }
    
        const handleMouseLeave = () => {
            setHover(false);
        }
    
        const handleMouseDown = () => {
            setClicked(true);
        }
    
        const handleMouseUp = () => {
            setClicked(false);
        }
        console.log('adding listeners to icon...');
        try {
            if (iconRef) {
                console.log('icon ref current: ', iconRef);
                iconRef.addEventListener('mouseenter', handleMouseEnter);
                iconRef.addEventListener('mouseleave', handleMouseLeave);
                iconRef.addEventListener('mousedown', handleMouseDown);
                iconRef.addEventListener('mouseup', handleMouseUp);

                return () => {
                    iconRef.removeEventListener('mouseenter', handleMouseEnter);
                    iconRef.removeEventListener('mouseleave', handleMouseLeave);
                    iconRef.removeEventListener('mousedown', handleMouseDown);
                    iconRef.removeEventListener('mouseup', handleMouseUp);
                }
            }
        } catch (error) {
            console.log('Error: ', error);
        }
    }, [iconRef])

    useEffect(() => {
        if (iconRef) {
            const archived = iconRef.id;
            if (clicked) {
                archive = archived;
                console.log('archive: ', archive);
            }
        }
    }, [clicked]);

    const iconStyle = {
        backgroundImage: 'url('+ props.imageList[0] +')',
        opacity: hover ? '35%' : '100%',
        display: 'block',
        height: '100px',
        width: '100px',
        color: 'rgb(17, 12, 22)',
    }

    return(
            <div 
                ref={iconCallback}
                style={iconStyle} 
                className={`content-block icon ${clicked ? "clicked" : ""}`} 
                id={props.shortname}
            >
                <h4>{props.verbosename}</h4>
            </div>
    )
}

    // const clickedIconCallback = useCallback(node => {
    //     try {
    //         if (node) {
    //             const iconList = node.childNodes[0].childNodes[0];
    //             for (let child in iconList) {
    //                 if (child.childNodes[0].contains('clicked')) {
    //                     clickedIconRef = child.childNodes[0];
    //                 } else {
    //                     console.log('Error: issue with icon ref');
    //                 }
    //             }
    //         }
    //     } catch (error) {
    //         console.log('Error: ', error);
    //     }
    // }, []);