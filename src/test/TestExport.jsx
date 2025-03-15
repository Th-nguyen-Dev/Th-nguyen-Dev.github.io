import React from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { OrbitControls, Preload } from "@react-three/drei";

import AmbientLight from "../lights/ambient_light";
import DirectionalLights from "../lights/directional_light";

import OfficialCamera from "../cameras/official_camera";
import TestMesh from "../meshes/earth/test_mesh";
function PerformanceConfig() {
  const { gl } = useThree();
  useEffect(() => {
    gl.powerPreference = "high-performance";
  }, []);
}
function TestExport() {
  const [selectMesh, setSelectMesh] = useState([]);
  const addMesh = (object) => {
    setSelectMesh((prevObjects) => [...prevObjects, object]);
    console.log("mesh added");
    console.log(selectMesh);
  };

  const [selectLight, setSelectLight] = useState([]);
  const addLight = (light) => {
    setSelectLight((prevLights) => [...prevLights, light]);
    console.log("light added");
    console.log(selectLight);
  };
  return (
    <>
      <Canvas className="canvas">
        <PerformanceConfig />
        {/* <MainCamera /> */}
        <color attach="background" args={["#000000"]} />
        <AmbientLight addLight={addLight} />
        <TestMesh />
        <DirectionalLights addLight={addLight} />
        <OfficialCamera makeDefault={true} />
        <OrbitControls />
        <Preload all />
        {/* <Stats />
            <Perf/> */}
      </Canvas>
    </>
  );
}

export default TestExport;
