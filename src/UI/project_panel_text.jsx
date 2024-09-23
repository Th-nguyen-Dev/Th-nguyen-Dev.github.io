import React, { useState, useRef, useCallback, useEffect } from "react";
import { useIsVisible } from "@/Hook/useIsVisible";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
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
                duration: 0.5,
                ease: "sine.inOut",
            });
        }
    };
    return (
    <>
        <br />
        <br />
        <br />
        <div className="break-inside-avoid" ref={panelRef}>
            <div style={{ width: "100%" }}>
                <h1 className="font-semibold">{title}</h1>
                <br />
                <div className="flex flex-row text-xl items-center flex-nowrap">
                    <div className="flex flex-row space-x-8 flex-nowrap">
                        <h2>{projectType}</h2>
                        <h2>{date}</h2>
                        <h2>{progress}</h2>
                    </div>
                    <div className="flex-grow"></div>
                    <Button variant={"outline"} className="h-8 text-lg z-50" onClick={onClick}>
                        {show ? "Hide" : "Show"}
                    </Button>
                </div>
                <br />
                <Progress value={progressValue} className="w-full h-4" />
                <br />
                <div style={{display:"none", opacity:"0%"}} ref={descriptionRef}>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    </>
    );
}

export default ProjectPanelText;
