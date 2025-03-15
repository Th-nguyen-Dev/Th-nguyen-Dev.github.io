import React, { useState, useEffect, useRef, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Wheel, ShadeSlider } from "@uiw/react-color";
import { hsvaToHsla, hslaToHsva } from "@uiw/color-convert";
import { setAmbientColorValue } from "@/context/reducer/ambient_light/ambient_color_value";
import { setLightColorValue } from "@/context/reducer/directional_light/light_color_value";

const ColorPicker = ({ color, onChange }) => {
  const wheelContainerRef = useRef();
  const [{ width, height }, setDimensions] = useState({ width: 0, height: 0 });
  const [hsva, setHsva] = useState(hslaToHsva(color));

  useEffect(() => {
    onChange(hsvaToHsla(hsva));
  }, [hsva, onChange]);

  const updateDimensions = () => {
    if (wheelContainerRef.current) {
      setDimensions({
        width: wheelContainerRef.current.offsetWidth,
        height: wheelContainerRef.current.offsetWidth,
      });
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    window.addEventListener("zoom", updateDimensions);
    const observer = new ResizeObserver(updateDimensions);
    if (wheelContainerRef.current) {
      observer.observe(wheelContainerRef.current);
    }

    return () => {
      window.removeEventListener("resize", updateDimensions);
      window.removeEventListener("zoom", updateDimensions);
      if (wheelContainerRef.current) {
        observer.unobserve(wheelContainerRef.current);
      }
    };
  }, []);

  return (
    <Fragment>
      <div className="w-full justify-center items-center flex flex-col gap-3">
        <div className="w-full aspect-square" ref={wheelContainerRef}>
          <Wheel
            width={width}
            height={height}
            color={hsva}
            onChange={(color) => setHsva({ ...hsva, ...color.hsva })}
          />
        </div>
        <ShadeSlider
          hsva={hsva}
          className="w-full h-1/2"
          onChange={(newShade) => {
            setHsva({ ...hsva, ...newShade });
          }}
        />
      </div>
    </Fragment>
  );
};

const AmbientColorPicker = () => {
  const dispatch = useDispatch();
  const ambientColorValue = useSelector((state) => state.ambientColorValue);
  const handleColorChange = (color) => {
    dispatch(setAmbientColorValue(color));
  };
  return <ColorPicker color={ambientColorValue} onChange={handleColorChange} />;
};

const DirectionalColorPicker = () => {
  const dispatch = useDispatch();
  const lightColorValue = useSelector((state) => state.lightColorValue);
  const handleColorChange = (color) => {
    dispatch(setLightColorValue(color));
  };
  return <ColorPicker color={lightColorValue} onChange={handleColorChange} />;
};

export { ColorPicker, AmbientColorPicker, DirectionalColorPicker };
