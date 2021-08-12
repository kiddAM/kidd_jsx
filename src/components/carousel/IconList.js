import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { Icon } from './Icon';
import { GeneralError } from '../ErrorHandler';
import { useIsMounted } from '../useIsMounted';
import { ErrorBoundary } from 'react-error-boundary';

export const IconList = (props) => {
    const iconStripStyle = {
        borderBottom: '.05em solid peru',
        position: 'relative',
        display: 'block',
        height: '100px',
        width: '400px',
        padding: 0,
        margin: '0 auto',
    }
    
    const iconStripListStyle = {
        listStyleType: 'none',
        padding: 0,
    }

    const iconStyle = {
        display: 'inline-block',
        verticalAlign: 'top',
    }
    
    const isMounted = useIsMounted();
    const contentGroup = (props.contentBlockGroup ? props.contentBlockGroup : []);
    const [list, setList] = useState([]);

    const handleClickedIcon = useCallback((data) => {
        if (data) {
            props.carouselCallback(data);
        }
    })

    useEffect(() => {
        const handleIconList = (contentGroup) => {
            // console.log('handling icon list...');
            try {
                const newList = [];
                // console.log('making list elements...');
                for (let k in Object.keys(contentGroup)) { 
                    const listElement = (
                        <li style={iconStyle} key={k} className="icon-list-item">
                            <Icon
                            listCallback={handleClickedIcon}
                            shortname={contentGroup[k]['shortname']} 
                            verbosename={contentGroup[k]['verbosename']} 
                            imageList={contentGroup[k]['imageList']} 
                            />
                        </li>);
                    // console.log('new el: ', listElement);
                    newList.push(listElement);
                }
                return newList;
            } catch (error) {
                GeneralError(error);
            }
        }

        try {
            if (isMounted.current) {
                if (contentGroup) {
                    setList(handleIconList(contentGroup));
                }
            }
        } catch (error) {
            GeneralError(error);
        }
    }, [isMounted]);

    return(
        <ErrorBoundary>
            <div style={iconStripStyle} className="icon-strip">
                <ul style={iconStripListStyle} className="icon-strip-list">{list}</ul>
            </div>
        </ErrorBoundary>
    )
}

