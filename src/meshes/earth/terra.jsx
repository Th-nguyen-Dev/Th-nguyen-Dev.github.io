import earthBumpLg from "/textures/earth_bump_map.avif";
import earthSpecular from "/textures/earth land ocean mask.avif";
import cloudLg from "/textures/earth clouds_Lg.avif";
import cityLightsSm from "/textures/earth night_lights_Sm.avif";
import earthSpriteSheetXl from "/textures_transition/earth_sprite_grid_md.avif";

import earth_frag from "@/shaders/earth_frag.glsl";
import earth_vert from "@/shaders/earth_vert.glsl";

import { useRef, useMemo, useEffect } from "react";
import { useLoader, useFrame } from "@react-three/fiber";

import * as THREE from "three";

function Terra() {
  const materialRef = useRef();

  const bump = useLoader(THREE.TextureLoader, earthBumpLg);
  const specular = useLoader(THREE.TextureLoader, earthSpecular);
  const cloud = useLoader(THREE.TextureLoader, cloudLg);
  const cities = useLoader(THREE.TextureLoader, cityLightsSm);
  const map = useLoader(THREE.TextureLoader, earthSpriteSheetXl);

  useEffect(() => {
    if (cloud) {
      cloud.wrapS = THREE.RepeatWrapping;
      cloud.wrapT = THREE.RepeatWrapping;
    }
  }, [cloud]);

  const time = useRef(0);
  const timeCloud = useRef(0);
  const currentTileX = useRef(0);
  const currentTileY = useRef(0);
  const nextTileX = useRef(0);
  const nextTileY = useRef(0);

  const uniforms = useMemo(
    () => ({
      utime: { value: 0 },
      utimeMap: { value: 0 },
      bump: { value: bump },
      specular: { value: specular },
      cloud: { value: cloud },
      cities: { value: cities },
      map: { value: map },
      matMonth1: { value: new THREE.Matrix3() },
      matMonth2: { value: new THREE.Matrix3() },

      // Light uniforms
      ambientLightColor: { value: null },
      lightProbe: { value: null },
      directionalLights: { value: null },
      directionalLightShadows: { value: null },
      spotLights: { value: null },
      spotLightShadows: { value: null },
      rectAreaLights: { value: null },
      ltc_1: { value: null },
      ltc_2: { value: null },
      pointLights: { value: null },
      pointLightShadows: { value: null },
      hemisphereLights: { value: null },
      directionalShadowMap: { value: null },
      directionalShadowMatrix: { value: null },
      spotShadowMap: { value: null },
      spotLightMatrix: { value: null },
      spotLightMap: { value: null },
      pointShadowMap: { value: null },
      pointShadowMatrix: { value: null },
    }),
    [bump, cities, cloud, map, specular],
  );

  function updateTexture() {
    console.log(materialRef.current);
    currentTileX.current = Math.floor(time.current % 3);
    currentTileY.current = Math.floor(time.current / 3) % 4;

    nextTileX.current = Math.floor((time.current + 1) % 3);
    nextTileY.current = Math.floor((time.current + 1) / 3) % 4;

    // Update matrices
    materialRef.current.uniforms.matMonth1.value.set(
      1 / 3,
      0,
      currentTileX.current / 3,
      0,
      1 / 4,
      currentTileY.current / 4,
      0,
      0,
      1,
    );

    materialRef.current.uniforms.matMonth2.value.set(
      1 / 3,
      0,
      nextTileX.current / 3,
      0,
      1 / 4,
      nextTileY.current / 4,
      0,
      0,
      1,
    );

    materialRef.current.uniforms.utime.value = time.current;
    materialRef.current.uniforms.utimeMap.value = timeCloud.current;
  }

  // Add animation frame handler
  useFrame(() => {
    timeCloud.current = (timeCloud.current - 0.0003) % 1;
    time.current = (time.current + 0.02) % 12;
    updateTexture();
  });

  return (
    <mesh>
      <sphereGeometry args={[5, 30, 30, 0, Math.PI * 2, 0, Math.PI]} />
      <shaderMaterial
        lights={true}
        ref={materialRef}
        uniforms={uniforms}
        fragmentShader={earth_frag}
        vertexShader={earth_vert}
      />
    </mesh>
  );
}

export default Terra;
