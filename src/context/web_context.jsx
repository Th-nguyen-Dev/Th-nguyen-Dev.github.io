import React from "react";
import { createContext, useState, useMemo } from "react";
import { useControls } from "leva";
import * as THREE from 'three';

export const WebContext = createContext();

export const WebProvider = ({ children }) => {
    const [meshes, setMeshes] = useState([]);
    const [lights, setLights] = useState([]);
    const [coordinates, setCoordinates] = useState(
        new Map([
            ['Seattle', [47.608013, -122.335167]],
            ['Ho Chi Minh City', [10.762622, 106.660172]]
    ]));
    const [radius, setRadius] = useState(5);

    const getCoordPosition = (name) => {
        const coord = coordinates.get(name);
        const lat = (90 - coord[0]) * Math.PI / 180;
        const lon = -coord[1] * Math.PI / 180;
        return new THREE.Vector3(
           radius * Math.sin(lat) * Math.cos(lon),
           radius * Math.cos(lat),
           radius * Math.sin(lat) * Math.sin(lon)
        );
    }

    const addMesh = (mesh) => {
        setMeshes([...meshes, mesh]);
    }
    const addLight = (light) => {
        setLights([...lights, light]);
    }
    return (
        <WebContext.Provider value={{ 
            meshes, 
            addMesh, 
            lights, 
            addLight, 
            coordinates, 
            getCoordPosition,
        }}>
            {children}
        </WebContext.Provider>
    );
}

