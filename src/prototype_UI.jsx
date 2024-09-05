import React, { useRef, useState } from 'react';
import './index.css';

function PrototypeUI({toogleView}) {
    const textRef = useRef();   
    const buttonRef = useRef();
    const [showOfficial, setShowOfficial] = useState(true);
    const onHandleToggle = () => {
        setShowOfficial(!showOfficial);
        toogleView();
        if (textRef.current.style.display === "none") {
            textRef.current.style.display = "block";
        } else {
            textRef.current.style.display = "none";
        }
    };
  return (
        <div style={{ 
            position: "absolute", 
            left: "30%", 
            top: "100%", 
            transform: "translate(-50%, -150%)",
            width: "40%", 
            height: "30%", 
            zIndex: 10, 
            color: "white",
            textAlign: "left",
            display: "flex",
            flexDirection: "column", // Add this line
            alignItems: "left",
            justifyContent: "flex-start",
            fontFamily: "Source Code Pro",
            fontSize: "1.25em"
        }}>
            <div ref = {textRef}>
                Hi there.
                <br />
                This is my personal website. I'm currently working on it!
            </div>
        
        <button ref={buttonRef} onClick={onHandleToggle} style={{ 
          width: "250px", 
          height: "50px", 
          whiteSpace: "nowrap", 
          overflow: "hidden", 
          textOverflow: "ellipsis",
          alignItems: "center",
          justifyContent: "flex-start",
          zIndex: 99999,
         }}>
          {showOfficial ? 'Switch to Editor' : 'Switch to Official'}
        </button>
      </div>
  );
};

export default PrototypeUI;
