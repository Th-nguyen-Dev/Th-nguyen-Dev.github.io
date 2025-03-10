import React, { useMemo } from 'react';

function CoordinateMeshesGeneration({ coordinates, color, emissiveColor, emissiveIntensity, size, subdivide  }) {
    
    const generateMeshes = () => {
        const meshes = [];
        Object.entries(coordinates).forEach(([key, value]) => {
            meshes.push(
                <group key={key} position={[value.x, value.y, value.z]}>
                    <mesh>
                        <sphereGeometry args={[size, subdivide, subdivide]} />
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

    const meshes = useMemo(() => generateMeshes(), [coordinates, color, emissiveColor, emissiveIntensity, size, subdivide]);

    return (
        <>
            {meshes}
        </>
    );
}

export default CoordinateMeshesGeneration;
