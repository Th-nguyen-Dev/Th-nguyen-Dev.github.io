import React, { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import gsap from "gsap";

function Background() {
  const backgroundRef = useRef();
  const backgroundToggle = useSelector((state) => state.backgroundToggle);
  const playModeToggle = useSelector((state) => state.playmodeToggle);
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      setSize({
        width: newWidth,
        height: newHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call to set initial size
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const updateBackgroundOpacity = () => {
      let opacityValue = 0;
      if (backgroundToggle.value) {
        opacityValue = 0.8;
      }
      if (size.width < 768) {
        opacityValue = 0.8;
      }
      if (playModeToggle.value) {
        opacityValue = 0;
      }

      gsap.to(backgroundRef.current, {
        duration: 0.5,
        opacity: opacityValue,
      });
    };
    updateBackgroundOpacity();
  }, [backgroundToggle, size, playModeToggle]);

  return (
    <div
      className={
        "fixed inset-0 bg-background opacity-0 -z-1 pointer-events-none"
      }
      ref={backgroundRef}
      style={{ height: "10000vh" }}
    ></div>
  );
}

export default Background;
