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
                position = {[-6.54, 14.56, 35.63]}
                rotation = {[5.90, 0.00, 0.00]}
                fov = {20}
            />
            
        </>
    );
}

export default OfficialCamera;
