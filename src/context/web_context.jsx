import React, { useEffect } from "react";
import { createContext, useState, useMemo } from "react";
import { useControls } from "leva";
import * as THREE from 'three';

export const WebContext = createContext();

export const WebProvider = ({ children }) => {

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
    const getQuaternions = (name) => {
        const desVec = getCoordPosition(name).normalize();
        const cameraVec = new THREE.Vector3(32.00, 0, 8.50).normalize();
        return new THREE.Quaternion().setFromUnitVectors(desVec, cameraVec);
    }

    const addMesh = (mesh) => {
        setMeshes([...meshes, mesh]);
    }
    const addLight = (light) => {
        setLights([...lights, light]);
    }

    const [meshes, setMeshes] = useState([]);
    const [lights, setLights] = useState([]);
    const [toggleDes, setToggleDes] = useState(null);
    const [radius] = useState(5);

    const [coordinates] = useState(
        new Map([
            // ['Seattle', [47.608013, -122.335167]],
            // ['Ho Chi Minh City', [10.762622, 106.660172]],
            ['My Tho', [10.360015, 106.359375]],
            ['Houston', [29.760427, -95.369804]],
            ['Edmonds', [47.810652, -122.377355]],
            ['Renton', [47.482878, -122.217066]],
        ])
    );

    const quaternions = useMemo(() => {
        const newQuaternions = new Map();
        coordinates.forEach((_, key) => {
            newQuaternions.set(key, getQuaternions(key));
        });
        console.log(newQuaternions);
        return newQuaternions;
    }, [coordinates]);

    return (
        <WebContext.Provider value={{ 
            meshes, 
            addMesh, 
            lights, 
            addLight, 
            coordinates, 
            getCoordPosition,
            toggleDes, 
            setToggleDes,
            quaternions
        }}>
            {children}
        </WebContext.Provider>
    );
}

