import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLightRotationValue } from "@/context/reducer/directional_light/light_rotation_value";
import { setAmbientIntensityValue } from "@/context/reducer/ambient_light/ambient_intensity_value";
import { setDirectionalIntensityValue } from "@/context/reducer/directional_light/light_intensity_value";
import { Slider } from "@/components/ui/slider";

const SliderDirectionalLightRotation = () => {
  const dispatch = useDispatch();
  const lightRotationValue =
    useSelector((state) => state.lightRotationValue.value) * 10;
  const handleSliderChange = (value) => {
    dispatch(setLightRotationValue(value / 10));
  };
  return (
    <Slider onValueChange={handleSliderChange} value={[lightRotationValue]} />
  );
};

const SliderAmbientLightIntensity = () => {
  const dispatch = useDispatch();
  const ambientIntensityValue = useSelector(
    (state) => state.ambientIntensityValue.value,
  );
  const handleSliderChange = (value) => {
    dispatch(setAmbientIntensityValue(value));
  };
  return (
    <Slider
      onValueChange={handleSliderChange}
      value={[ambientIntensityValue]}
    />
  );
};

const SliderDirectionalLightIntensity = () => {
  const dispatch = useDispatch();
  const intensity = useSelector(
    (state) => state.directionalIntensityValue.value,
  );
  const handleSliderChange = (value) => {
    dispatch(setDirectionalIntensityValue(value));
  };
  return <Slider onValueChange={handleSliderChange} value={[intensity]} />;
};

export {
  SliderDirectionalLightRotation,
  SliderAmbientLightIntensity,
  SliderDirectionalLightIntensity,
};
