import React, { useRef, useState, useContext, useEffect } from 'react';
import { WebContext } from '../context/web_context';
import '@/index.css';

function UIPage2() {
    const {toggleDes,setToggleDes} = useState(null);
    console.log(toggleDes);
    const changeTextColor =(color) => (event) => {
        event.target.style.color = color;
    } 
    const onPointerEnter = (name) => () =>{
        setToggleDes(name);
    }
    const onPointerLeave = () => {
        setToggleDes(null);
    }
    
return (
<div>
    <div className="absolute text-white  top-1/4 right-10  mr-20 ml-20">

    </div>
</div>

    
);
};

export default UIPage2;
