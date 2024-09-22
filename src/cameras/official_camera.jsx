import React, { useRef, useEffect, useMemo } from 'react';
import { PerspectiveCamera } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useSelector } from 'react-redux';
import gsap from 'gsap';

import * as THREE from 'three';

function OfficialCamera() {
    const OfficialCameraRef = useRef();
    const {size} = useThree();
    const projectToggle = useSelector((state) => state.projectToggle.value);
    const position = new THREE.Vector3(32.00, 0, 11.50);
    const rotation = new THREE.Euler(0, 1.36, 0);
    const lookDirection = useMemo(() => {
        if (OfficialCameraRef.current) {
            return OfficialCameraRef.current.getWorldDirection(new THREE.Vector3());
        }
        return new THREE.Vector3();
    }, [OfficialCameraRef.current]);

    const rightDirection = useMemo(() => {
        return lookDirection.clone().cross(new THREE.Vector3(0, 1, 0)).normalize();
    }, [lookDirection]);

    
    useEffect(() => {
        let destination = position.clone();
        if (projectToggle) {
                const distance = OfficialCameraRef.current.position.distanceTo(new THREE.Vector3(0,0,0));
                const currentposition = OfficialCameraRef.current.position;
                const angle = OfficialCameraRef.current.position.clone().normalize().dot(rightDirection);
                const factor = -(distance * angle);
                destination = new THREE.Vector3( 
                currentposition.x + rightDirection.x*factor, 
                currentposition.y + rightDirection.y*factor, 
                currentposition.z + rightDirection.z*factor);
        }
        gsap.to(OfficialCameraRef.current.position,
            {
            x: destination.x,
            y: destination.y,
            z: destination.z,
            ease: "sine",
            duration: 1,
        });

    }, [projectToggle, rightDirection]);
    return (
        useMemo(() =>(
            <PerspectiveCamera 
                ref={OfficialCameraRef} 
                makeDefault = {true}
                position = {position.clone()}
                rotation = {rotation.clone()}   
                fov = {20}
            />
        ),[])
        );
}

export default OfficialCamera;
