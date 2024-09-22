import { useRef, useEffect } from 'react';
import * as THREE from 'three';

function EarthClippingMask(props){
    const earthRef = useRef();

    return (
        <mesh ref={earthRef} {...props}>
            <sphereGeometry args={[5, 50, 50, 0, Math.PI * 2, 0, Math.PI]} />
            <meshBasicMaterial  
                color="white"
            >
            </meshBasicMaterial>   
        </mesh>
    );

}

export default EarthClippingMask;