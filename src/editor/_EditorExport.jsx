import React, { useEffect, useRef, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, View, Bounds } from "@react-three/drei";

import SceneEditorExport from "./_SceneEditorExport.jsx";
import MainCamera from "../cameras/_main_camera.jsx";
import PostProcessing from "../postprocesses/effect_composer.jsx";
export function PerformanceConfig() {
  const { gl } = useThree();
  useEffect(() => {
    gl.powerPreference = "high-performance";
  }, []);
}
function EditorExport() {
  const SceneRef = useRef();
  const [viewCam, setViewCam] = useState();
  const addCam = (object) => {
    setViewCam(object);
  };
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
    <div className="canvas_container">
      <View index={1} className="view1">
        <color attach="background" args={["#000000"]} />
        <MainCamera makeDefault={false} />
        <Bounds fit clip observe margin={1.5}>
          <SceneEditorExport addMesh={addMesh} addLight={addLight} />
        </Bounds>
        <PostProcessing selectMesh={selectMesh} selectLight={selectLight} />
        <OrbitControls />
      </View>
      <View index={2} className="view2">
        <color attach="background" args={["#d6edf3"]} />
        <MainCamera makeDefault={true} />
        <Bounds fit clip observe margin={1.5}>
          <SceneEditorExport addMesh={addMesh} addLight={addLight} />
        </Bounds>
      </View>

      <Canvas className="canvas">
        <color attach="background" args={["#000000"]} />
        <View.Port />
        <PerformanceConfig />
      </Canvas>
    </div>
  );
}

export default EditorExport;
