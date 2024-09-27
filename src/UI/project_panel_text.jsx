import React, { useState, useRef, useCallback, useEffect } from "react";
import { useIsVisible } from "@/Hook/useIsVisible";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
import gsap from "gsap";

function ProjectPanelText({ title, projectType, date, progress, description, progressValue }, props) {
    const panelRef = useRef();
    const descriptionRef = useRef();
    const isVisible = useIsVisible(panelRef);
    const [show, setShow] = useState(false);

    useEffect(() => {
        gsap.to(panelRef.current, {
            y: isVisible ? 0 : 100,
            opacity: isVisible ? 1 : 0,
            duration: 1,
        });
    }, [isVisible]);

    const onClick = () => {
        setShow(!show);
        if (descriptionRef.current) {
            gsap.to(descriptionRef.current, {
                display: show ? "none" : "block",
                opacity: show ? 0 : 1,
                duration: 0.4,
                ease: "sine",
            });
        }
    };
    return (
    <>
            <div className="break-inside-avoid" ref={panelRef}>
                <div className= "w-full h-fit">
                <h1 className="font-bold h-40 max-xl:h-56 max-lg:h-32 max-md:h-44 max-sm:h-56 max-xs:h-80 transition-resize">{title}</h1>
                    <br />
                    <div className="flex flex-row text-xl max-xl:text-base items-center flex-nowrap">
                        <div className="flex flex-row space-x-8 flex-nowrap overflow-hidden">
                            <h2 className="whitespace-nowrap">{projectType}</h2>
                            <h2 className="whitespace-nowrap">{date}</h2>
                            <h2 className="whitespace-nowrap">{progress}</h2>
                        </div>
                        <div className="flex-grow"></div>
                        {/* <Button variant={"outline"} className="h-8 text-lg z-50" onClick={onClick}>
                            {show ? "Hide" : "Show"}
                        </Button> */}
                    </div>
                    <br />
                    <Progress value={progressValue} className="w-full h-4" />
                    <br />
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className = "items-center justify-center h-14 bg-transparent"></AccordionTrigger>
                            <AccordionContent className="text-xl font-extralight mt-6">
                            {description}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    {/* <div style={{display:"none", opacity:"0%"}} ref={descriptionRef}>

                        <p className="text-2xl">{description}</p>
                    </div> */}
                </div>
            </div>
    </>
    );
}

export default ProjectPanelText;
