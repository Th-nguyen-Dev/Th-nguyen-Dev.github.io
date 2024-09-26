import React, { useState, useRef, useCallback, useEffect } from "react";
import ProjectPanel from "./project_panel";
import ProjectPanelText from "./project_panel_text";
import { useDispatch } from "react-redux";
import { setProjectToggle } from "@/context/reducer/project_toggle";
import { useSelector } from "react-redux";
import { useIsVisible } from "@/Hook/useIsVisible";
import { Progress } from "@/components/ui/progress";
import gsap from "gsap";


function Background() {
    const backgroundRef = useRef();
    const projectToggle = useSelector((state) => state.projectToggle.value);
    const projectGraphicToggle = useSelector((state) => state.projectGraphicToggle.value);
 

    useEffect(() => {
        const lowerHalf = projectToggle || projectGraphicToggle;
        console.log(projectToggle, "and", projectGraphicToggle);  
        console.log(lowerHalf);
        gsap.to(backgroundRef.current, {
            opacity: lowerHalf ? 0.6 : 0,
            ease: "sine.inOut",
            duration: 1.5
        });
    }, [projectToggle, projectGraphicToggle]);

    return (
        <div
            className="absolute w-full bg-background -translate-y-2/3 opacity-0 mt-36 -z-50"
            ref={backgroundRef}
            style={{ height: "90000rem" }}
        ></div>
    );
}

export default Background;