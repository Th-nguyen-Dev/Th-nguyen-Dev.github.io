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
    const changeTextColor =(color) => (event) => {
        event.target.style.color = color;
    }  
return (
    <div>
        <div className="absolute text-white  top-1/4  mr-20 ml-14">
        <h1>
            <p className = "text-7xl mb-1">
                <strong
                     onPointerOver={changeTextColor("#00ff00")} 
                     onPointerLeave={changeTextColor('white')}
                >
                    Hello World!
                </strong>
            </p>
            <p className= "text-4xl">
                My name is Ryan Nguyen
            </p> 
        </h1>
        <br/><br/>
        <h2>
            I am a full stack developer with a passion for designs and all things interactive. 
            <br/>
            <br/>
            Currently, I am working toward a degree in Computer Sciene at Bellevue College in Washington.
            I have a background in graphic design, graphic programming, game development, algorithm, and UI design. 
            I grew up with computers and technology, and have always been fascinated with the use of technology to create interactive experiences.
            From video games to tools that allows for these creative experiences, I have always wanted to be at every step of the process.

        </h2>
        </div>
    </div>
    
);
};

export default PrototypeUI;
