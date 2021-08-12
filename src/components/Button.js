import React, { useEffect, useState, useRef } from 'react';
import { GeneralError } from './ErrorHandler';

export const Button = (props) => {
    const btnRef = useRef();
    const [clicked, setClicked] = useState(false);

    const buttonStyle = {
      border: '.5px solid grey',
      position: 'relative',
      display: 'block',
      height: '20px',
      width: '70px',
      margin: '60px auto 4px',
  }

  // useEffect(() => {
  //   try {
      
  //   } catch (error) {
  //     GeneralError(error);
  //   }
  // })

    // useEffect(() => {

    //     console.log('in focus effect...has focus', document.hasFocus());
    //     if (document.hasFocus() && ref.current.contains(document.activeElement)) {
    //         setFocus(true);
    //     } else {
    //         console.log('focus: ', document.hasFocus());
    //         console.log('reference: ', ref.current);
    //     }
    // }, []);


  return (
    <button
      {...props}
      style={buttonStyle}
      ref={btnRef}
      onClick={() => {console.log('clicked')}}
      aria-autocomplete="off"
    >
      press me
    </button>
  );
}