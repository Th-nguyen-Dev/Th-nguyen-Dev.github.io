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
    const backgroundToggle = useSelector((state) => state.backgroundToggle.value);
    const {size} = useThree();
 
    useEffect(() => {
        let trueValue = 0.8;
        let falseValue = 0;
        if ( size.width < 720){
            if (playmodeToggle){
                falseValue = 0;
            } else {
            falseValue = 0.8;
            }
        }
        gsap.to(backgroundRef.current, {
            opacity: backgroundToggle ? trueValue : falseValue,
            ease: "sine.inOut",
            duration: 1.5
        });
    }, [backgroundToggle]);

    return (
        <div
            className="absolute w-full bg-background -translate-y-2/3 opacity-0 -z-50"
            ref={backgroundRef}
            style={{ height: "90000rem" }}
        ></div>
    );
}

export default Background;