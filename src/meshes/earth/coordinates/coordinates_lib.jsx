import React, { useMemo } from 'react';

function CoordinateMeshesGeneration({coordinates, color, emissiveColor, emissiveIntensity}){
    
    const generateMeshes = () => {
        const meshes = [];
        coordinates.forEach((value, key) => {
            meshes.push(
                <group key={key} position={value}>
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

    return useMemo(
        <>
            {generateMeshes()}
        </>
    );
}
export default CoordinateMeshesGeneration({coordinates, color, emissiveColor, emissiveIntensity});
