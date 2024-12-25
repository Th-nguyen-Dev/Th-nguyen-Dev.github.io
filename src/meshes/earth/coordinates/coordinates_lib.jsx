import React, { useMemo } from 'react';

function CoordinateMeshesGeneration({ coordinates, color, emissiveColor, emissiveIntensity }) {
    
    const generateMeshes = () => {
        const meshes = [];
        Object.entries(coordinates).forEach(([key, value]) => {
            meshes.push(
                <group key={key} position={[value.x, value.y, value.z]}>
                    <mesh>
                        <sphereGeometry args={[0.05, 10, 10]} />
                        <meshLambertMaterial 
                            color={color}
                            emissive={emissiveColor}
                            emissiveIntensity={emissiveIntensity}
                        />
                    </mesh>
                </group>
            );
        });
        return meshes;
    };

    const meshes = useMemo(() => generateMeshes(), [coordinates, color, emissiveColor, emissiveIntensity]);

    return (
        <>
            {meshes}
        </>
    );
}

export default CoordinateMeshesGeneration;
