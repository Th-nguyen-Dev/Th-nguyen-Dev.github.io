import React, { useRef, useContext } from 'react';
import { EffectComposer, SelectiveBloom } from '@react-three/postprocessing';
import { WebContext } from '../context/web_context';
function PostProcessing() {
    const bloomPassRef = useRef();
    const { meshes, lights } = useContext(WebContext);
    return (
        <EffectComposer>
            <SelectiveBloom
                ref={bloomPassRef}
                selection={meshes}
                lights={lights}
                luminanceThreshold={0.7}
                luminanceSmoothing={0.2}
                intensity={1}
            />
        </EffectComposer>
    );
}

export default PostProcessing;
