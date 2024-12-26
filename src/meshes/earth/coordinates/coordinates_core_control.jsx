import React from "react";
import * as THREE from 'three';
import CoordinatesTimeline from './coordinates_timeline';
import CoordinatesNeuralNetwork from "./coordinates_neuralnetwork";

const CoordinatesCoreControl = () => {

    return (
        <>
            <CoordinatesTimeline />
            <CoordinatesNeuralNetwork />
        </>
    );
}

export default CoordinatesCoreControl;