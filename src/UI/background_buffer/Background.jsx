import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";

function Background() {
    const backgroundRef = useRef();
    const backgroundToggle = useSelector((state) => state.backgroundToggle.value);
    const playModeToggle = useSelector((state) => state.playmodeToggle.value);
    const size = {
        width: window.innerWidth,
        height: window.innerHeight
    };
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
    }, [backgroundToggle]);

    return (
        <div
            className="fixed inset-0 bg-background opacity-0 -z-1 pointer-events-none"
            ref={backgroundRef}
            style={{height: "10000vh"}}
        ></div>
    );
}

export default Background;
