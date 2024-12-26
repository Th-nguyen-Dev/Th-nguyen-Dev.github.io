import React from "react";
import * as THREE from 'three';
import { useSelector, useDispatch} from 'react-redux';
import CoordinateMeshesGeneration from './coordinates_lib';
import { regenerateDictionary } from '@/context/reducer/locations/locations_neural_network';

const CoordinatesNeuralNetwork = () => {
    const coordinates3D = useSelector((state) => state.locationsNNDictionary.coordinates3D);
    const radius = useSelector((state) => state.locationsNNDictionary.radius);
    const color = new THREE.Color(0xffa500);
    const emissiveColor = new THREE.Color(0xffa500);
    const emissiveIntensity = 0.5;
    const dispatch = useDispatch();

    return (
        <CoordinateMeshesGeneration 
            coordinates={coordinates3D}
            color={color}
            emissiveColor={emissiveColor}
            emissiveIntensity={emissiveIntensity}
        />
    );
}

export default CoordinatesNeuralNetwork;