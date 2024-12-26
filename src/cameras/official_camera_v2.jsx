import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { CameraControls } from '@react-three/drei';
const OfficialCameraV2 = () => {
    const { camera } = useThree();
    const controls = useRef();
    return (
            <CameraControls
                ref={controls}
                camera={camera}
                makeDefault={true}
                setOrbitPoint={[0, 0, 0]}
                distance={20}
            />
    )
}
export default OfficialCameraV2;