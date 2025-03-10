import React, { useEffect } from "react";
import * as THREE from 'three';
import { useSelector, useDispatch} from 'react-redux';
import CoordinateMeshesGeneration from './coordinates_lib';
import { regenerateDictionary } from '@/context/reducer/locations/locations_timeline';

const CoordinatesTimeline = () => {
    const data = useSelector((state) => state.locationsTLDictionary);
    const dispatch = useDispatch(); 

    const color = new THREE.Color(0x00ff00);
    const emissiveColor = new THREE.Color(0x00ff00);
    const emissiveIntensity = 0.5;
    const size = 0.05;
    const subdivide = 10;

    useEffect(() => {
        dispatch(regenerateDictionary
            (data.radius)
        );
    }, [data.radius]);

    useEffect(() => {
        console.log(data);
    }, [data]);
    

    return (
        <CoordinateMeshesGeneration 
            coordinates={data.coordinates3D}
            color={color}
            emissiveColor={emissiveColor}
            emissiveIntensity={emissiveIntensity}
            size={size}
            subdivide={subdivide}
        />
    );
}

export default CoordinatesTimeline;