import React, { useRef, useContext } from 'react';
import { EffectComposer, SelectiveBloom, Glitch, GodRays, Noise,SMAA, DotScreen, ChromaticAberration  } from '@react-three/postprocessing';
import { GlitchMode } from 'postprocessing';
import { BlendFunction } from 'postprocessing'
import { WebContext } from '../context/web_context';
function PostProcessing() {
    const bloomPassRef = useRef();
    const { meshes, lights } = useContext(WebContext);
    return (
        <EffectComposer multisampling={0}>

            <SMAA />
            <SelectiveBloom
                ref={bloomPassRef}
                selection={meshes}
                lights={lights}
                luminanceThreshold={0.9}
                luminanceSmoothing={0.2}
                intensity={0.75}
            />
            
        </EffectComposer>
    );
}

export default PostProcessing;
