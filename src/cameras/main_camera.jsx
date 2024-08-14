import React, { useRef } from 'react';
import { PerspectiveCamera, useHelper } from '@react-three/drei';
import { useEffect, useState } from 'react';
import { useControls } from 'leva';
import * as THREE from 'three';

function MainCamera({makeDefault}) {
    const mainCameraRef = useRef();
    useHelper(mainCameraRef, THREE.CameraHelper, 'cyan');
    const { cameraPositionX, cameraPositionY, cameraPositionZ, 
        cameraRotationX, cameraRotationY, cameraRotationZ } = useControls('Camera', {
        cameraPositionX: {
            value: 80,
            min: -100,
            max: 100,
            step: 0.01,
        },
        cameraPositionY: {
            value: 12,
            min: -100,
            max: 100,
            step: 0.01,
        },
        cameraPositionZ: {
            value: 10,
            min: -100,
            max: 100,
            step: 0.01,
        },
        cameraRotationX: {
            value: 0,
            min: -5,
            max: 5,
            step: 0.01,
        },
        cameraRotationY: {
            value: 0,
            min: -5,
            max: 5,
            step: 0.01,
        },
        cameraRotationZ: {
            value: 0,
            min: -5,
            max: 5,
            step: 0.01,
        },
        });
    
    return (
        <>
            <PerspectiveCamera 
                ref={mainCameraRef} 
                makeDefault = {makeDefault}
                position = {[cameraPositionX, cameraPositionY, cameraPositionZ]}
                rotation = {[cameraRotationX, cameraRotationY, cameraRotationZ]}
            />
        </>
    );
}

export default MainCamera;
