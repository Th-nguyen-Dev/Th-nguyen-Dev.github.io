import React, { useState, useRef, useCallback, useEffect } from "react";
import ProjectPanel from "./project_panel";
import ProjectPanelText from "./project_panel_text";
import { useDispatch } from "react-redux";
import { setProjectToggle } from "@/context/reducer/project_toggle";
import { useSelector } from "react-redux";
import { useIsVisible } from "@/Hook/useIsVisible";
import { Progress } from "@/components/ui/progress";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";


function Background() {
    const backgroundRef = useRef();
    const projectToggle = useSelector((state) => state.projectToggle.value);
    const projectGraphicToggle = useSelector((state) => state.projectGraphicToggle.value);
    const playmodeToggle = useSelector((state) => state.playmodeToggle.value);
    const {size} = useThree();
 

    useEffect(() => {
        const lowerHalf = projectToggle || projectGraphicToggle;
        let trueValue = 0.8;
        let falseValue = 0;
        if (!playmodeToggle && size.width < 720){
            falseValue = 0.8;
        }
        if (playmodeToggle){
            falseValue = 0;
        }
        gsap.to(backgroundRef.current, {
            opacity: lowerHalf ? trueValue : falseValue,
            ease: "sine.inOut",
            duration: 1.5
        });
    }, [projectToggle, projectGraphicToggle, ]);

    return (
        <div
            className="absolute w-full bg-background -translate-y-2/3 opacity-0 -z-50"
            ref={backgroundRef}
            style={{ height: "90000rem" }}
        ></div>
    );
}

export default Background;