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
    const projectGraphicToggle = useSelector((state) => state.projectGraphicToggle.value);
    const timelineIntroToggle = useSelector((state) => state.timelineIntroToggle.value);
    const playmodeToggle = useSelector((state) => state.playmodeToggle.value);  
    const {size} = useThree();

    const position = new THREE.Vector3(32.00, 0, 12.25);
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

    const changeFov = (fov) => {
        const currentFov = {value : OfficialCameraRef.current.getFocalLength()};
        gsap.to(currentFov, {
            value: fov,
            ease: "sine.inOut",
            duration: 1,
            onUpdate: () => {
                OfficialCameraRef.current.setFocalLength(currentFov.value);
            }
        });
    }
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
            z: destination.z,
            ease: "sine.inOut",
            duration: 1,
        });
    }
    const returnCamera = () => {
        gsap.to(OfficialCameraRef.current.position,
            {
            x: position.clone().x,
            y: position.clone().y,
            z: position.clone().z,
            ease: "sine.inOut",
            duration: 1,
        });
    }

    const returnY = () => {
        gsap.to(OfficialCameraRef.current.position,
            {
            y: position.clone().y,
            ease: "sine.inOut",
            duration: 1,
        });
    }

    useEffect(() => {
        if (introToggle) {
            changeFov(50);
            if(size.width < 720){ centerCamera(); returnY(); }
            else{ returnCamera(); }
        }
    },[introToggle]);
    useEffect(() => {
        if (timelineIntroToggle) {
            changeFov(90);
            if(size.width < 720){ centerCamera(); returnY(); }
            else{ returnCamera(); }
        }
    },[timelineIntroToggle]);
    useEffect(() => {
        if (projectToggle) {
            changeFov(130);
        }

    },[projectToggle]);
    useEffect(() => {
        if (projectGraphicToggle) {
            changeFov(100)
        }

    },[projectGraphicToggle]);
    useEffect(() => {  
        changeFov(50);
        if(size.width < 720){ centerCamera(); }
        else{ returnCamera(); }
    }, []);    
    useEffect(() => {
        if (playmodeToggle) {
            changeFov(55);
        }
    }
    ,[playmodeToggle]);



    useEffect(() =>{
        if (projectToggle) {
            gsap.to(OfficialCameraRef.current.position,
                {
                    y: position.clone().y + 3,
                    ease: "sine.inOut",
                    duration: 1,
                }
            )
        }
    },[projectToggle]);
    useEffect(() => {
        if (projectGraphicToggle) {
            gsap.to(OfficialCameraRef.current.position,
                {
                    y: position.clone().y,
                    ease: "sine.inOut",
                    duration: 1,
                }
            )
        }
    },[projectGraphicToggle]);
    // useEffect(() => {
    //     if (!projectToggle && !introToggle && !timelineIntroToggle) {
    //         const currentFov = {value : OfficialCameraRef.current.getFocalLength()};
    //         gsap.to(currentFov, {
    //             value:50,
    //             ease: "sine.inOut",
    //             duration: 1,
    //             onUpdate: () => {
    //                 OfficialCameraRef.current.setFocalLength(currentFov.value);
    //             }
    //         });
    //     }

    // },[projectToggle]);

    useEffect(() => {
        if (projectToggle || projectGraphicToggle || playmodeToggle) {
            centerCamera();
        }
    }, [projectToggle, projectGraphicToggle, playmodeToggle]);
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
