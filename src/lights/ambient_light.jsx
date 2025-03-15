import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";

function AmbientLight() {
  const ambientLightRef = useRef();
  const ambientColorValue = useSelector((state) => state.ambientColorValue);
  const ambientIntensityValue = useSelector(
    (state) => state.ambientIntensityValue,
  );

  useEffect(() => {
    if (ambientLightRef.current) {
      ambientLightRef.current.color.setHSL(
        ambientColorValue.h / 360,
        ambientColorValue.s / 100,
        ambientColorValue.l / 100,
      );
    }
  }, [ambientColorValue]);

  useEffect(() => {
    if (ambientLightRef.current) {
      ambientLightRef.current.intensity =
        0.01 + ambientIntensityValue.value / 100;
    }
  }, [ambientIntensityValue]);

  return <ambientLight ref={ambientLightRef} color={0xffffff} intensity={1} />;
}

export default AmbientLight;
