import React, { useRef, useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { useSelector } from 'react-redux';
import { useSpring } from '@react-spring/three';
import * as THREE from 'three';

function OfficialCamera() {
    // Get the default camera from Three.js
    const { camera } = useThree();
    const cameraToggle = useSelector((state) => state.cameraToggle);
    const { size } = useThree();

    // Create spring but don't render anything
    const [cameraProps, api] = useSpring(() => ({
        fov: 80,
        position: [-5.25, 0, 35],
        rotation: [0, 0, 0],
        config: {
            mass: 0.1, tension: 200, friction: 80, precision: 0.001
        },
        onChange: ({ value }) => {
            camera.fov = value.fov;
            camera.position.set(value.position[0], value.position[1], value.position[2]);
            camera.rotation.set(value.rotation[0], value.rotation[1], value.rotation[2]);
            // camera.aspect = size.width / size.height;
            camera.updateProjectionMatrix();
        }
    }));

    const cameraState = {
        'zoom_in_right': {
            fov: 15,
            position: size.width < 789 ? [0,0,25] : [-5.25, 0, 35],
            rotation: [0, 0, 0],
        },
        'zoom_out_right': {
            fov: 20,
            position: size.width < 789 ? [0,0,40] : [-5.25, 0, 35],
            rotation: [0, 0, 0],
        },
        'zoom_in_middle': {
            fov: 15,
            position: [0, 3, 25],
            rotation: [0, 0, 0],
        },
        'zoom_out_middle': {
            fov: 20,
            position: [0, 0, 40],
            rotation: [0, 0, 0],
        },
        'zoom_in_middle_down': {
            fov: 15,
            position: [0, 0, 25],
            rotation: [0, 0, 0],
        },
        'default': {
            fov: 20,
            position: size.width < 789 ? [0,0,25] : [-5.25, 0, 35],
            rotation: [0, 0, 0],
        },
    }



    useEffect(() => {
        const mode = cameraState[cameraToggle.cameraToggle];
        if (mode) {
            api.start({
                ...mode,
            });
        }
    }, [cameraToggle, size]);

    // No need to return an actual camera element
    return null;
}

export default OfficialCamera;
