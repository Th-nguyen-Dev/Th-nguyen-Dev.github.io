import React, { useRef } from 'react';
import { PerspectiveCamera, useHelper } from '@react-three/drei';
import { useEffect, useState } from 'react';
import { useControls } from 'leva';
import * as THREE from 'three';

function OfficialCamera() {
    const OfficialCameraRef = useRef();
    return (
        <>
            <PerspectiveCamera 
                ref={OfficialCameraRef} 
                makeDefault = {true}
                position = {[32.00, 8.30, 13.00]}
                rotation = {[5.44, 1.25,0.82]}
                fov = {20}
            />
            
        </>
    );
}

export default OfficialCamera;
