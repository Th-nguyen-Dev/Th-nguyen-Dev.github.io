import React, { useRef, useEffect, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Bvh, PresentationControls } from "@react-three/drei";
import * as THREE from "three";

import EarthCloud from "./earth_cloud";
import EarthWeather from "./earth_weather";
import EarthCities from "./earth_cities";
import CoordinatesCoreControl from "./coordinates/coordinates_core_control";
import { useSelector } from "react-redux";

function EarthMeshesPhysical() {
  const meshRef = useRef();
  const movementQuaternions = useSelector(
    (state) => state.locationsTLDictionary.movementQuaternions,
  );
  const toggleDes = useSelector((state) => state.timelineToggle);

    const selectedQuaterion = useRef(new THREE.Quaternion());

  useEffect(() => {
    if (toggleDes) {
      console.log(toggleDes);
      const { x, y, z, w } = movementQuaternions[toggleDes.value];
      selectedQuaterion.current = new THREE.Quaternion(x, y, z, w);
    }
  }, [movementQuaternions, toggleDes]);

    const lastQuaternion = useRef(new THREE.Quaternion());
    const rotateEarth = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), 0.0004);
    const returnToBase = useRef(true);
    const startRotation = useRef(false);

    const rotateEase = (quaternion) => {
        const tl = gsap.timeline();
        const temp = {value: 0};
        const startQuaternion = meshRef.current.quaternion.clone();
        tl.to(temp,{
            value: 1, 
            duration: 1, 
            ease: "sine.inOut", 
            onStart: () => {
                returnToBase.current = false;
            },
            onUpdate: () => {
                returnToBase.current = false;
                const quaternionStep = new THREE.Quaternion().slerpQuaternions(startQuaternion, quaternion, temp.value);
                meshRef.current.quaternion.set(quaternionStep.x, quaternionStep.y, quaternionStep.z, quaternionStep.w);
            },
            onComplete: () => {
                if (!toggleDes){
                    returnToBase.current = true;
                }
            }
        })
    };
    useEffect(() => {
        if (toggleDes){
            if (returnToBase.current){
                lastQuaternion.current = meshRef.current.quaternion.clone();
            }
            rotateEase(selectedQuaterion.current);
        }
        else{
            rotateEase(lastQuaternion.current);
        }
    }, [toggleDes]);


    const handleFrame = () => {
        if (returnToBase.current){    
            meshRef.current.quaternion.multiply(rotateEarth);
        }
    };

    useFrame(handleFrame);
    return useMemo(() => (
        <PresentationControls
            rotation={[0, 0, 0]}
            global={false}
            snap={true}
            speed={2}
            cursor={true}
            polar={[-Infinity, Infinity]} // Vertical limits
            azimuth={[-Infinity, Infinity]} // Horizontal limits
        >
        <Bvh firstHitOnly>
            <group ref={meshRef}>    
                <EarthCities />
                <EarthWeather />
                <EarthCloud />
                <TestCoordinate />
            </group>
        </Bvh>
        </PresentationControls>
    ), []);

}
export default EarthMeshesPhysical;

