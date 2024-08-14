import React, { useRef } from 'react';
import { PerspectiveCamera, useHelper } from '@react-three/drei';
import { useEffect, useState } from 'react';
import { useControls } from 'leva';
import * as THREE from 'three';

function MainCamera({makeDefault}) {
    const mainCameraRef = useRef();
    useHelper(mainCameraRef, THREE.CameraHelper, 'cyan');
    const { PositionX, PositionY, PositionZ, 
        RotationX, RotationY, RotationZ } = useControls('Camera', {
        PositionX: {
            value: 0,
            min: -100,
            max: 100,
            step: 0.01,
        },
        PositionY: {
            value: 0,
            min: -100,
            max: 100,
            step: 0.01,
        },
        PositionZ: {
            value: 0,
            min: -100,
            max: 100,
            step: 0.01,
        },
        RotationX: {
            value: 0,
            min: 0,
            max: 2,
            step: 0.01,
        },
        RotationY: {
            value: 0,
            min: 0,
            max: 2,
            step: 0.01,
        },
        RotationZ: {
            value: 0,
            min: 0,
            max: 2,
            step: 0.01,
        },
        });
    
    return (
        <>
            <PerspectiveCamera 
                ref={mainCameraRef} 
                makeDefault = {makeDefault}
                position = {[PositionX, PositionY, PositionZ]}
                rotation = {[RotationX, RotationY, RotationZ]}
            />
        </>
    );
}

export default MainCamera;
