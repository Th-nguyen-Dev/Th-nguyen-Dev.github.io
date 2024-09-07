import React from "react";
import { createContext, useState } from "react";

export const WebContext = createContext();

export const WebProvider = ({ children }) => {
    const [meshes, setMeshes] = useState([]);
    const [lights, setLights] = useState([]);
    const addMesh = (mesh) => {
        setMeshes([...meshes, mesh]);
    }
    const addLight = (light) => {
        setLights([...lights, light]);
    }
    return (
        <WebContext.Provider value={{ meshes, addMesh, lights, addLight }}>
            {children}
        </WebContext.Provider>
    );
}

