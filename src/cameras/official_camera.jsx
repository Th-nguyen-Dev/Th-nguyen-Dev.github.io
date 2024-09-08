import React, { useRef } from 'react';
import { PerspectiveCamera, useHelper } from '@react-three/drei';
import { useEffect, useState } from 'react';
import { useControls } from 'leva';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

function OfficialCamera() {
    const OfficialCameraRef = useRef();
    const {size} = useThree();
    const adjustment = 1000/size.width;

    return (
        <>
            <PerspectiveCamera 
                ref={OfficialCameraRef} 
                makeDefault = {true}
                position = {[32.00, 0, 12.50 - adjustment]}
                rotation = {[0, 1.36,0]}
                fov = {20}
            />
            
        </>
    );
}

export default OfficialCamera;
