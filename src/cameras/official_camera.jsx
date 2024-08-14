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
                position = {[40.15, 0.00, 6]}
                rotation = {[0.00, 7.85, 0.00]}
                fov = {20}
            />
        </>
    );
}

export default OfficialCamera;
