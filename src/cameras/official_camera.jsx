import React, { useRef, useEffect, useMemo } from 'react';
import { PerspectiveCamera } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useSelector } from 'react-redux';
import gsap from 'gsap';

import * as THREE from 'three';

function OfficialCamera() {
    const OfficialCameraRef = useRef();
    const introToggle = useSelector((state) => state.introToggle.value);
    const projectToggle = useSelector((state) => state.projectToggle.value);
    const timelineIntroToggle = useSelector((state) => state.timelineIntroToggle.value);
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
    const upDirection = useMemo(() => {
        return rightDirection.clone().cross(lookDirection).normalize();
    }, [rightDirection, lookDirection]);

    useEffect(() => {
        if (introToggle) {
            const currentFov = {value : OfficialCameraRef.current.getFocalLength()};
            gsap.to(currentFov, {
                value: 55,
                ease: "sine.inOut",
                duration: 1,
                onUpdate: () => {
                    OfficialCameraRef.current.setFocalLength(currentFov.value);
                }
            });
        }
    },[introToggle]);
    useEffect(() => {
        if (timelineIntroToggle) {
            const currentFov = {value : OfficialCameraRef.current.getFocalLength()};
            gsap.to(currentFov, {
                value: 90,
                ease: "sine.inOut",
                duration: 1,
                onUpdate: () => {
                    OfficialCameraRef.current.setFocalLength(currentFov.value);
                }
            });
        }
    },[timelineIntroToggle]);
    useEffect(() => {
        if (projectToggle) {
            const currentFov = {value : OfficialCameraRef.current.getFocalLength()};
            gsap.to(currentFov, {
                value: 120,
                ease: "sine.inOut",
                duration: 1,
                onUpdate: () => {
                    OfficialCameraRef.current.setFocalLength(currentFov.value);
                }
            });
        }

    },[projectToggle]);


    const centerCamera = () => {
        let destination = position.clone();
        const distance = OfficialCameraRef.current.position.distanceTo(new THREE.Vector3(0,0,0));
        const currentposition = OfficialCameraRef.current.position;
        const angle = OfficialCameraRef.current.position.clone().normalize().dot(rightDirection);
        const factor = -(distance * angle);
        destination = new THREE.Vector3( 
        currentposition.x + rightDirection.x*factor, 
        currentposition.y + rightDirection.y*factor, 
        currentposition.z + rightDirection.z*factor);
        gsap.to(OfficialCameraRef.current.position,
            {
            x: destination.x,
            y: destination.y + (4-destination.y),
            z: destination.z,
            ease: "sine.inOut",
            duration: 1,
        });
    }
    useEffect(() => {
        if (!projectToggle && !introToggle && !timelineIntroToggle) {
            const currentFov = {value : OfficialCameraRef.current.getFocalLength()};
            gsap.to(currentFov, {
                value:50,
                ease: "sine.inOut",
                duration: 1,
                onUpdate: () => {
                    OfficialCameraRef.current.setFocalLength(currentFov.value);
                }
            });
        }

    },[projectToggle]);

    useEffect(() => {
        if (projectToggle) {
            centerCamera();
        }
        else{
            gsap.to(OfficialCameraRef.current.position,
                {
                x: position.clone().x,
                y: position.clone().y,
                z: position.clone().z,
                ease: "sine.inOut",
                duration: 1,
            });
        }

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
