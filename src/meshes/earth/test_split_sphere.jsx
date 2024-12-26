import React, { useEffect, useState, useMemo } from 'react';
import * as THREE from 'three';
import { splitMeshGroups } from './mesh_lib/mesh_lib';

/**
 * TestSplitSphere component creates a sphere geometry with eight different textures.
 * 
 * The sphere is divided into eight segments, each with a different texture.
 * 
 * The sphere geometry is created with a radius of 5, 80 width segments, and 80 height segments.
 * The textures are assigned to the geometry in a repeating pattern.
 * 
 * @returns {JSX.Element} A mesh component with the sphere geometry and the eight textures.
 */
function TestSplitSphere() {
    const [sphereMesh, setSphereMesh] = useState(null);

    const generateMesh = async () => {
        const texturePaths = [
            'textures_sequence/test_split_image/earth_surface_01__2.jpg',
            'textures_sequence/test_split_image/earth_surface_01__3.jpg',
            'textures_sequence/test_split_image/earth_surface_01__0.jpg',
            'textures_sequence/test_split_image/earth_surface_01__1.jpg',
        ];

        const textureLoader = new THREE.TextureLoader();
        const textures = texturePaths.map(path => textureLoader.load(path));

        const textureSphereMaterials = textures.map(texture => {
            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.set(2, 2);
            texture.offset.set(-0.5, 0); // Adjust the offset to start at the edge

            texture.minFilter = THREE.NearestFilter;
            texture.magFilter = THREE.NearestFilter;

            const material = new THREE.MeshBasicMaterial({ map: texture });
            material.precision = 'highp';
            return material;
        });

        const sphereGeometry = new THREE.SphereGeometry(5, 80, 80);
        const newMesh = await splitMeshGroups(new THREE.Mesh(sphereGeometry, textureSphereMaterials), 2, 5);
        setSphereMesh(newMesh);
    };

    useEffect(() => {
        (async () => {
            await generateMesh();
        })();
    }, []);

    const memoizedSphereMesh = useMemo(() => {
        if (!sphereMesh) return null;
        console.log('OMG THE SPHERE MESH IS HERE');
        return sphereMesh;
    }, [sphereMesh]);

    return (
        <group>
            {memoizedSphereMesh && <primitive object={memoizedSphereMesh} />}
        </group>
    );
}

export default TestSplitSphere;