
import React from 'react';
import SharedCameraState from './SharedCameraState.jsx';

const CameraDebug = () => {
    const cameraRef = SharedCameraState();

    return (
        <div>
            <p>X: {cameraRef.current.position.x}</p>
            <p>Y: {cameraRef.current.position.y}</p>
            <p>Z: {cameraRef.current.position.z}</p>
        </div>
    );
};

export default CameraDebug;
