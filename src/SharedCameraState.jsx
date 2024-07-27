import { useRef } from 'react';   
import * as THREE from 'three';
function ShareCameraState() {
    const cameraRef = useRef(new THREE.PerspectiveCamera());
    return cameraRef;
}
export default ShareCameraState;