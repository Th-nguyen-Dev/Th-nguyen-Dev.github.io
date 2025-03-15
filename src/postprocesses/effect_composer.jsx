import React from "react";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
function PostProcessing() {
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
