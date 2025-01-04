import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { CameraControls } from '@react-three/drei';
const OfficialCameraV2 = () => {
    const { camera } = useThree();
    const controls = useRef();
    return (
            <CameraControls
                dollySpeed={0}
                ref={controls}
                camera={camera}
                makeDefault={true}
                setOrbitPoint={[0, 0, 0]}
                distance={15}
                // enabled={false} // Disable controls to prevent scrolling
            />
    )
}
export default OfficialCameraV2;