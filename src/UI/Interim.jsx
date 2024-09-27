import React, {useRef, useEffect} from "react";
import { useIsVisible } from "@/Hook/useIsVisible";
import gsap from "gsap";
function Interim({text, helpText},props){
    const interimRef = useRef();
    const isVisible = useIsVisible(interimRef);
    useEffect(() => {
            gsap.to(interimRef.current, {
                y: isVisible ? 0 : 120,
                opacity: isVisible ? 1 : 0,
                ease: "sine.inOut",
                duration: 0.75
            });
    }, [isVisible]);
    return(
    <div className='h-screen flex items-center justify-center select-none' {...props} >
        <div className="h-2/3 items-center justify-center flex flex-col" ref={interimRef}>
            <div className='text-center font-thin text-5xl mb-4'>{text}</div>
            <div className='text-center font-normal text-2xl'>{helpText}</div>
        </div>
    </div>
    )
}
export default Interim;