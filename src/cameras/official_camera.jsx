import React, { useRef, useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { useSelector } from "react-redux";
import { useSpring, animated } from "@react-spring/three";

function OfficialCamera() {
  const OfficialCameraRef = useRef();
  const cameraToggle = useSelector((state) => state.cameraToggle);
  const { size } = useThree();

  const [cameraProps, api] = useSpring(() => ({
    fov: 50,
    position: size.width < 720 ? [0, 0, 0] : [32.0, 0, 12.25],
    rotation: [0, size.width < 720 ? 0 : 1.36, 0],
    config: {
      mass: 1,
      tension: 280,
      friction: 60,
    },
  }));

  useEffect(() => {
    api.start({
      fov: 50,
      position: size.width < 720 ? [0, 0, 0] : [32.0, 0, 12.25],
      rotation: [0, size.width < 720 ? 0 : 1.36, 0],
    });
  }, [size.width, api]);

  useEffect(() => {
    if (cameraToggle.zoom_out_right) {
      api.start({
        fov: 50,
        position: size.width < 720 ? [0, 0, 0] : [32.0, 0, 12.25],
      });
    }
  }, [cameraToggle.zoom_out_right, size.width, api]);

  useEffect(() => {
    if (cameraToggle.zoom_in_right) {
      api.start({
        fov: 72,
        position: size.width < 720 ? [0, 0, 0] : [32.0, 0, 12.25],
      });
    }
  }, [cameraToggle.zoom_in_right, size.width, api]);

  useEffect(() => {
    if (cameraToggle.zoom_in_middle_down) {
      api.start({ fov: 120, position: [0, 3, 0] });
    }
  }, [cameraToggle.zoom_in_middle_down, api]);

  useEffect(() => {
    if (cameraToggle.zoom_in_middle) {
      api.start({ fov: 120, position: [0, 0, 0] });
    }
  }, [cameraToggle.zoom_in_middle, api]);

  useEffect(() => {
    if (cameraToggle.zoom_out_middle) {
      api.start({ fov: 50, position: [0, -0.25, 0] });
    }
  }, [cameraToggle.zoom_out_middle, api]);

  useEffect(() => {
    // Force initial position based on screen size
    setTimeout(() => {
      api.start({
        immediate: true,
        position: size.width < 720 ? [0, 0, 0] : [32.0, 0, 12.25],
      });
    }, 100);
  }, []); // Empty dependency array = run once on mount

  return (
    <animated.perspectiveCamera ref={OfficialCameraRef} {...cameraProps} />
  );
}

export default OfficialCamera;
