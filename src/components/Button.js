import React, { useEffect, useState, useRef } from 'react';

export const Button = (props) => {
    const btnRef = useRef();
    const [hasFocus, setFocus] = useState(false);

    const handleFocus = (e) => {
      e.preventDefault();
      if (document.hasFocus() && document.activeElement.contains(btnRef.current)) {
          setFocus(true);
      } else {
        console.log('focus: ', document.hasFocus());
        console.log('active: ', document.activeElement);
        console.log('reference: ', btnRef.current);
      }
    }

    // useEffect(() => {

    //     console.log('in focus effect...has focus', document.hasFocus());
    //     if (document.hasFocus() && ref.current.contains(document.activeElement)) {
    //         setFocus(true);
    //     } else {
    //         console.log('focus: ', document.hasFocus());
    //         console.log('reference: ', ref.current);
    //     }
    // }, []);

    const buttonStyle = {
        border: '.5px solid grey',
        // backgroundColor: hasFocus ? 'orange' : 'yellowgreen',
        position: 'relative',
        display: 'block',
        height: '20px',
        width: '70px',
        margin: '60px auto 4px',
    }

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