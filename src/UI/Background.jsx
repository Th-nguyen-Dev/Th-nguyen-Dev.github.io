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
    const playModeToggle = useSelector((state) => state.playmodeToggle.value);
    const {size} = useThree();

    const updateBackgroundOpacity = () => {
        let opacityValue = 0;
        if (backgroundToggle) {
            opacityValue = 0.8;
        }
        if (size.width < 768) {
            opacityValue = 0.8;
        }
        if (playModeToggle) {
            opacityValue = 0;
        }

        gsap.to(backgroundRef.current, {
            duration: 0.5,
            opacity: opacityValue,
        });
    };

    useEffect(() => {
        updateBackgroundOpacity();
    }, [backgroundToggle, size.width]);

    return (
        <div
            className="absolute w-full bg-background -translate-y-2/3 opacity-0 -z-50"
            ref={backgroundRef}
            style={{ height: "90000rem" }}
        ></div>
    );
}

export default Background;