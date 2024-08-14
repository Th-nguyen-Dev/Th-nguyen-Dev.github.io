import React, { useRef } from 'react';
import { EffectComposer, SelectiveBloom } from '@react-three/postprocessing';

function PostProcessing({selectMesh, selectLight}) {
    const bloomPassRef = useRef();
    
    return (
        <EffectComposer>
            <SelectiveBloom
                ref={bloomPassRef}
                selection={selectMesh}
                lights={selectLight}
                luminanceThreshold={0.7}
                luminanceSmoothing={0.2}
                intensity={1}
            />
        </EffectComposer>
    );
}

export default PostProcessing;
