
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { useRef, useEffect, useMemo,useLayoutEffect } from 'react';
import { useControls } from "leva";
import { useState } from 'react';
import CustomShaderMaterial from "three-custom-shader-material";

import * as THREE from 'three';
function TestMesh(){
    const {scene} = useGLTF("/Experimental GLB/ExperimentalEarth.glb");
    return (
        <primitive object={scene}/>
    );

}

export default TestMesh;