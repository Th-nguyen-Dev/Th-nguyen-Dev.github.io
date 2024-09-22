import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setIntroToggle } from '@/context/reducer/introduction_toggle';
import { useIsVisible } from '@/Hook/useIsVisible';

function Introduction() {
    const introRef = useRef();
    const changeTextColor =(color) => (event) => {
        event.target.style.color = color;
    }  
    const dispatch = useDispatch();
    const isVisibile = useIsVisible(introRef);

    useEffect(() => {
        if(isVisibile){
            dispatch(setIntroToggle(true));
        }else{
            dispatch(setIntroToggle(false));
        }
    }, [isVisibile]);
    
return (
    <>
            <div className='w-1/2 h-auto' ref={introRef}>
                <div className="relative w-fit text-white right-10 mr-20 ml-20 " style={{marginTop:'18rem'}}>
                <h1>
                    <p className = "text-7xl mb-1">
                        <strong
                            onPointerOver={changeTextColor("#00ff00")} 
                            onPointerLeave={changeTextColor('white')}
                        >
                            Hello World!
                        </strong>
                    </p>
                    <p className= "text-3xl">
                        My name is Ryan Nguyen
                    </p> 
                </h1>
                <br></br>
                <h2 className = "text-xl">
                    I am a full stack developer with a passion for designs and all things interactive. 
                    <br/>
                    <br/>
                    Currently, I am working toward a degree in Computer Sciene at Bellevue College in Washington.
                    I have a background in graphic design, graphic programming, game development, algorithm, and UI design. 
                    I grew up with computers and technology, and have always been fascinated with the use of technology to create interactive experiences.
                    From video games to tools that allows for these creative experiences, I have always wanted to be at every step of the process.
                </h2>
                <br></br>
                <br></br>
                </div>
            </div>
    </> 
    
    );
}

export default Introduction;
