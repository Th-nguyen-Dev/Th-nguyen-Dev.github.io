import React,{useState, useRef, useEffect, useCallback} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsVisible } from "@/Hook/useIsVisible";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

function ProjectPanel({text, images, link},props){
    const [api, setApi] = useState();
    const panelRef = useRef();
    const isVisible = useIsVisible(panelRef);
    useEffect(() => {
        gsap.to(panelRef.current,{
            y: isVisible ? 0 : 100,
            opacity: isVisible ? 1 : 0,
            duration: 1,
        })
    }, [isVisible]);

    const intervalRef = useRef(null);
    const firstScrollRef = useRef(null);

    const onPointerEnter = useCallback(() => {
        if (intervalRef.current) return;

        if (firstScrollRef.current == null) {
            api.scrollNext();
        }
            intervalRef.current = setInterval(() => {
                if (api) {
                    api.scrollNext();
                }
            }, 2000);



    }, [api]);

    const onPointerLeave = useCallback(() => {
        if (firstScrollRef.current == null) {
            firstScrollRef.current = setTimeout(() => {
                firstScrollRef.current = null;
            }, 2000);
        }
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }, [api]);

    return(
        <div ref={panelRef} {...props} className="relative w-1/2">
            <Carousel className="max-w-full w-full flex-grow flex"
            setApi={setApi}
                opts={{
                    align: "start",
                    loop: true,
                }}
            onPointerEnter={onPointerEnter}
            onPointerLeave={onPointerLeave}
            >
                  
                <CarouselContent>
                    {images.map((image, index) => (
                        <CarouselItem key={index}>
                            <img src={image} alt="Project" />
                        </CarouselItem>
                    ))}
                 </CarouselContent>  
                 <CarouselNext/> 
                 <CarouselPrevious/>

            </Carousel>
        </div>
    );
}
export default ProjectPanel;