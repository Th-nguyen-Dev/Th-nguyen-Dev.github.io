import React, { useRef, useEffect, useContext } from "react";
import { useFrame } from "@react-three/fiber";
import { WebContext } from "../../context/web_context";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

// import cloud from "/textures/earth clouds.png";
// import cloudXl from "/textures/earth clouds_Xl.png";
import cloudLg from "/textures/earth clouds_Lg.avif";

function EarthCloud() {
  const cloudRef = useRef();
  const { addMesh } = useContext(WebContext);
  const cloudTexture = useLoader(THREE.TextureLoader, cloudLg);

  useEffect(() => {
    if (cloudRef.current) {
      addMesh(cloudRef.current);
    }
  }, [cloudRef.current]);

  useFrame(() => {
    if (cloudRef.current) {
      cloudRef.current.rotation.y += Math.PI / 3650 / 3.5;
    }
  });

  return (
    <mesh ref={cloudRef}>
      <sphereGeometry args={[5.02, 80, 80, 0, Math.PI * 2, 0, Math.PI]} />
      <meshStandardMaterial
        color="white"
        alphaMap={cloudTexture}
        transparent={true}
        depthTest={false}
      />
    </mesh>
  );
}

export default EarthCloud;
