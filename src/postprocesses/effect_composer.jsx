import React, { useRef, useContext } from "react";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { WebContext } from "../context/web_context";
function PostProcessing() {
  const bloomPassRef = useRef();
  const { meshes, lights } = useContext(WebContext);
  return (
    <EffectComposer multisampling={0}>
      {/* <SMAA /> */}
      <Bloom
        luminanceThreshold={0.9}
        luminanceSmoothing={0.2}
        intensity={0.75}
      />
    </EffectComposer>
  );
}

export default PostProcessing;
