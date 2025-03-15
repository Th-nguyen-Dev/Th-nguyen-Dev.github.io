import React, { useMemo, useRef, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import gsap from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin";
import * as PIXI from "gsap/src/PixiPlugin";
import * as THREE from "three";
import { WebContext } from "../context/web_context";
function DirectionalLights() {
  gsap.registerPlugin(PixiPlugin);
  PixiPlugin.registerPIXI(PIXI);
  const directionalLightRef = useRef([]);
  const { addLight } = useContext(WebContext);
  const lightRotationValue = useSelector(
    (state) => state.lightRotationValue.value,
  );
  const lightColorValue = useSelector((state) => state.lightColorValue);
  const directionalIntensity = useSelector(
    (state) => state.directionalIntensityValue.value,
  );
  const lightPosition = new THREE.Vector3(-18, 10, 20);

  const rotateLight = (angle) => {
    if (directionalLightRef.current && directionalLightRef.current.length > 0) {
      directionalLightRef.current.forEach((light) => {
        if (light) {
          const lightPositionClone = lightPosition.clone();
          const newPosition = {
            x:
              lightPositionClone.x * Math.cos(angle) -
              lightPositionClone.z * Math.sin(angle),
            y: lightPositionClone.y,
            z:
              lightPositionClone.z * Math.cos(angle) +
              lightPositionClone.x * Math.sin(angle),
          };
          gsap.to(light.position, {
            x: newPosition.x,
            y: newPosition.y,
            z: newPosition.z,
            duration: 0.1,
            ease: "sine.inOut",
          });
        }
      });
    }
  };

  useEffect(() => {
    if (directionalLightRef.current && directionalLightRef.current.length > 0) {
      directionalLightRef.current.forEach((light) => addLight(light));
    }
  }, [directionalLightRef.current]);

  useEffect(() => {
    if (lightRotationValue) {
      rotateLight(lightRotationValue);
    }
  }, [lightRotationValue]);

  useEffect(() => {
    if (directionalLightRef.current && directionalLightRef.current.length > 0) {
      directionalLightRef.current.forEach((light) => {
        if (light) {
          const nextColorToString = {
            value: `hsl(${lightColorValue.h}, ${lightColorValue.s}%, ${lightColorValue.l}%)`,
          };
          const tl = gsap.timeline();
          tl.to(nextColorToString, {
            pixi: { value: nextColorToString.value },
            duration: 1,
            onUpdate: () => {
              const hslValue = { h: 0, s: 0, l: 0 };
              nextColorToString.value.replace(
                /hsla?\(([^,]+),([^,]+)%,([^,]+)%[^)]*\)/,
                (_, h, s, l) => {
                  hslValue.h = parseFloat(h) / 360;
                  hslValue.s = parseFloat(s) / 100;
                  hslValue.l = parseFloat(l) / 100;
                },
              );
              light.color.setHSL(hslValue.h, hslValue.s, hslValue.l);
            },
            ease: "sine.inOut",
          });
        }
      });
    }
  }, [lightColorValue]);

  useEffect(() => {
    if (directionalLightRef.current && directionalLightRef.current.length > 0) {
      directionalLightRef.current.forEach((light) => {
        if (light) {
          console.log("New directionalIntensity" + directionalIntensity * 1.0);
          light.intensity = 0.1 + directionalIntensity * 1.0;
        }
      });
    }
  }, [directionalIntensity]);

  return useMemo(
    () => (
      <>
        <directionalLight
          ref={(ref) => directionalLightRef.current.push(ref)}
          color={0xffffff}
          position={lightPosition.clone()}
          intensity={3.6}
          target={new THREE.Object3D()}
        />
      </>
    ),
    [],
  );
}
export default DirectionalLights;
