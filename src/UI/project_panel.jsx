import React,{useState, useRef, useEffect} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsVisible } from "@/Hook/useIsVisible";
import { Carousel } from "@/components/ui/carousel";
function ProjectPanel({text, images, link},props){
    const panelRef = useRef();
    const isVisible = useIsVisible(panelRef);
    useEffect(() => {
        gsap.to(panelRef.current,{
            y: isVisible ? 0 : 100,
            opacity: isVisible ? 1 : 0,
            duration: 1,
        })
    }, [isVisible]);
    return(
        <div ref={panelRef} {...props}>
            <Carousel images={images}/>
            <h1>{text}</h1>
        </div>
    );
}
export default ProjectPanel;