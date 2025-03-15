import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

import cloud from "/textures/earth clouds.png";

function EarthCloud() {
  const cloudRef = useRef();
  const cloudTexture = useLoader(THREE.TextureLoader, cloudLg);

  useFrame(() => {
    if (cloudRef.current) {
      cloudRef.current.rotation.y += Math.PI / 3650 / 3.5;
    }
  });

  return React.useMemo(
    () => (
      <mesh ref={cloudRef}>
        <sphereGeometry args={[5.02, 80, 80, 0, Math.PI * 2, 0, Math.PI]} />
        <meshStandardMaterial
          color="white"
          alphaMap={cloudTexture}
          transparent={true}
          depthTest={false}
        />
      </mesh>
    ),
    [cloudTexture],
  );
}

export default EarthCloud;