import React from "react";
import * as THREE from 'three';
import { useSelector, useDispatch} from 'react-redux';
import CoordinateMeshesGeneration from './coordinates_lib';
import { regenerateDictionary } from '@/context/reducer/locations/locations_timeline';

const CoordinatesTimeline = () => {
    const coordinates3D = useSelector((state) => state.locationsTLDictionary.coordinates3D);
    const radius = useSelector((state) => state.locationsTLDictionary.radius);
    const dispatch = useDispatch(); 

    const color = new THREE.Color(0x00ff00);
    const emissiveColor = new THREE.Color(0x00ff00);
    const emissiveIntensity = 0.5;
    const size = 0.005;
    const subdivide = 10;
    

    return (
        <CoordinateMeshesGeneration 
            coordinates={coordinates3D}
            color={color}
            emissiveColor={emissiveColor}
            emissiveIntensity={emissiveIntensity}
            size={size}
            subdivide={subdivide}
        />
    );
}

export default CoordinatesTimeline;