import earthAlbedo from "/textures/earth albedo dec.png";
import earthBump from "/textures/earth_bump_map.png";
import earthSpecular from "/textures/earth land ocean mask.png";

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useEffect } from 'react';
import EdmondsCollege from '/textures/edmonds_college_round.png';


import * as THREE from 'three';
function LocationSprite(){
    return(
        <>
            <sprite scale={[10,10,0]}>
                <spriteMaterial
                map={new THREE.TextureLoader().load(EdmondsCollege)}
                /> 
            </sprite>
        </>
    )
}
export default LocationSprite;