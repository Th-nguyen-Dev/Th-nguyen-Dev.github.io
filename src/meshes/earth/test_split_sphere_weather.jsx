import React, { useEffect, useMemo, Suspense, useRef, useState } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader';
import { splitGeometryByUV } from './mesh_lib/mesh_lib';
import CustomShaderMaterial from "three-custom-shader-material/vanilla";

import weatherPatchmapFrag from '@/shaders/weather_v2/weather_patchmap_frag.glsl'; 
import weatherInitFrag from '@/shaders/weather_v2/weather_init_frag.glsl';
import weatherInjectFrag from '@/shaders/weather_v2/weather_inject_frag.glsl';

const textureBasePath = '/textures_sequence/split_images_4x4/';
const texturePaths2 = [
    [
      `${textureBasePath}00/earth_surface_01_0.ktx2`,
      `${textureBasePath}01/earth_surface_01_1.ktx2`,
      `${textureBasePath}02/earth_surface_01_2.ktx2`,
      `${textureBasePath}03/earth_surface_01_3.ktx2`,
    ],
    [
      `${textureBasePath}04/earth_surface_01_4.ktx2`,
      `${textureBasePath}05/earth_surface_01_5.ktx2`,
      `${textureBasePath}06/earth_surface_01_6.ktx2`,
      `${textureBasePath}07/earth_surface_01_7.ktx2`,
    ],
    [
      `${textureBasePath}08/earth_surface_01_8.ktx2`,
      `${textureBasePath}09/earth_surface_01_9.ktx2`,
      `${textureBasePath}10/earth_surface_01_10.ktx2`,
      `${textureBasePath}11/earth_surface_01_11.ktx2`,
    ],
    [
      `${textureBasePath}12/earth_surface_01_12.ktx2`,
      `${textureBasePath}13/earth_surface_01_13.ktx2`,
      `${textureBasePath}14/earth_surface_01_14.ktx2`,
      `${textureBasePath}15/earth_surface_01_15.ktx2`,
    ],
];

const texturePathGeneration = ({month}) => {
    const textureBasePath = '/textures_sequence/split_images_4x4/';
    const monthString = month.toString().padStart(2, '0');
    console.log('Month string:', monthString);
    return [
        [
        `${textureBasePath}00/earth_surface_${monthString}_0.ktx2`,
        `${textureBasePath}01/earth_surface_${monthString}_1.ktx2`,
        `${textureBasePath}02/earth_surface_${monthString}_2.ktx2`,
        `${textureBasePath}03/earth_surface_${monthString}_3.ktx2`,
        ],
        [
        `${textureBasePath}04/earth_surface_${monthString}_4.ktx2`,
        `${textureBasePath}05/earth_surface_${monthString}_5.ktx2`,
        `${textureBasePath}06/earth_surface_${monthString}_6.ktx2`,
        `${textureBasePath}07/earth_surface_${monthString}_7.ktx2`,
        ],
        [
        `${textureBasePath}08/earth_surface_${monthString}_8.ktx2`,
        `${textureBasePath}09/earth_surface_${monthString}_9.ktx2`,
        `${textureBasePath}10/earth_surface_${monthString}_10.ktx2`,
        `${textureBasePath}11/earth_surface_${monthString}_11.ktx2`,
        ],
        [
        `${textureBasePath}12/earth_surface_${monthString}_12.ktx2`,
        `${textureBasePath}13/earth_surface_${monthString}_13.ktx2`,
        `${textureBasePath}14/earth_surface_${monthString}_14.ktx2`,
        `${textureBasePath}15/earth_surface_${monthString}_15.ktx2`,
        ],
    ];
};

// Create a single instance of KTX2Loader
const textureLoader = new KTX2Loader();
textureLoader.setTranscoderPath('/basis/');

const loadTextures = async ({renderer, month}) => {
    textureLoader.detectSupport(renderer);
    const texturePathsMonth = texturePathGeneration({month});
    const texturePromises = texturePathsMonth.flat().map(path => {
        return new Promise((resolve, reject) => {
            fetch(path)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                })
                .catch(error => {
                    reject(error);
                });
            textureLoader.load(
                path,
                (texture) => {
                    texture.wrapS = THREE.RepeatWrapping;
                    texture.wrapT = THREE.RepeatWrapping;
                    texture.repeat.set(4, 4);
                    texture.offset.set(0, 0); // Adjust the offset to start at the edge
        
                    texture.minFilter = THREE.NearestMipMapNearestFilter;
                    texture.magFilter = THREE.NearestFilter;
                    resolve(texture);
                },
                undefined,
                (error) => {
                    reject(error);
                }
            );
        });
    });

    return Promise.all(texturePromises);
};


const CreateSphereMaterials = async ({ renderer, month, uniforms }) => {
    try {
        const textures = await loadTextures({ renderer, month });
        const texturesNext = await loadTextures({ renderer, month: month + 1 });
        const newMaterials = textures.map((texture, index) => {
            uniforms[index].mapCurrent.value = texture;
            uniforms[index].mapNext.value = texturesNext[index];
            const material = new CustomShaderMaterial({
                baseMaterial: THREE.MeshPhongMaterial,
                map: texture,
                uniforms: uniforms[index],
                fragmentShader: weatherPatchmapFrag,
                patchMap: {
                "patchInit": { "#include <map_pars_fragment>": `${weatherInitFrag}` },
                "patchInject": { "#include <map_fragment>": `${weatherInjectFrag}` }
                }
            });
            return material;
        });


        return newMaterials;
    } catch (error) {
        console.error('Error creating texture sphere materials:', error);
        return [];
    }
};

function TestSplitSphereWeather() {
    const radius = 5;
    const subdivisions = 80;
    const splitDim = 4;
    const memoizedSphereMesh = useRef(null);
    const { gl } = useThree();

    const uniforms = useMemo(() => {
        const uniformSet = [];
        for (let i = 0; i < 16; i++) {
            uniformSet.push({
                utime: { value: 0 },
                lastMonth: { value: 0 },
                mapCurrent: { value: new THREE.CompressedTexture() },
                mapNext: { value: new THREE.CompressedTexture() },
                mapBuffer : { value: new THREE.CompressedTexture() }
            });
        }
        return uniformSet;
    }, []);

    const [isInit, setIsInit] = useState(false);


    useEffect(() => {

        const disposeMaterials = () => {
            if (memoizedSphereMesh.current) {
                if (Array.isArray(memoizedSphereMesh.current.material)) {
                    memoizedSphereMesh.current.material.forEach(material => material.dispose());
                } else {
                    memoizedSphereMesh.current.material.dispose();
                }
            }
        };

        const updateMaterials = async () => {
            if (memoizedSphereMesh.current) {
                // const sphereMaterials = await createTextureSphereMaterials({renderer: gl, month: 1});
                const sphereMaterials = await CreateSphereMaterials({ renderer: gl, month: 1, uniforms : uniforms });
                memoizedSphereMesh.current.material = sphereMaterials;
                setIsInit(true);
            }
        };

        disposeMaterials();
        updateMaterials();

        return () => {
            disposeMaterials();
            textureLoader.dispose();
        };
    }, []);

    useEffect(() => {
        const disposeGeometry = () => {
            if (memoizedSphereMesh.current) {
                memoizedSphereMesh.current.geometry.dispose();
            }
        };

        const splitGeometry = async () => {
            const newGeometry = await splitGeometryByUV(new THREE.SphereGeometry(radius, subdivisions, subdivisions));
            if (newGeometry && memoizedSphereMesh.current) {
                memoizedSphereMesh.current.geometry = newGeometry;
            }
        };

        disposeGeometry();
        splitGeometry();

        return () => {
            disposeGeometry();
        };
    }, [radius, subdivisions, splitDim]);

    const [isUpdating, setIsUpdating] = useState(false);
    const timeRef = useRef(0);
    const lastMonthRef = useRef(1);
    const deltaTime = 0.01;

    const updateTexture = async () => {
        if (!memoizedSphereMesh.current || !isInit) return;

        lastMonthRef.current = Math.floor(timeRef.current - deltaTime) % 12;
        uniforms.forEach((uniform) => {
            uniform.utime.value = timeRef.current;
            uniform.lastMonth.value = lastMonthRef.current;
        });

        const currentMonth = Math.floor(timeRef.current) % 12;
        if (Math.abs(timeRef.current - lastMonthRef.current) >= 1) {
            try {
                setIsUpdating(true);

                // Pre-load next textures
                const nextTextures = await loadTextures({
                    renderer: gl,
                    month: currentMonth
                });

                // Ensure we're still on the same month when textures finish loading
                nextTextures.forEach((texture, index) => {
                    uniforms[index].mapCurrent.value.dispose();
                    uniforms[index].mapCurrent.value = uniforms[index].mapNext.value;
                    uniforms[index].mapNext.value = texture;
                });

            } catch (error) {
                console.error('Error loading textures:', error);
            } finally {
                memoizedSphereMesh.current.material.needsUpdate = true;
                setIsUpdating(false);
            }
        }


    };

    useFrame(() => {
        if (!memoizedSphereMesh.current || !isInit) return;

        if (isUpdating) return;

        timeRef.current += 0.01;
        timeRef.current = timeRef.current % 12;

        updateTexture();
    });

    const sphereMesh = useMemo(() => (
        <Suspense fallback={null}>
            <mesh ref={memoizedSphereMesh} material={new THREE.MeshBasicMaterial({ color: 'blue'})} geometry={new THREE.SphereGeometry(radius, subdivisions, subdivisions)}/>
        </Suspense>
    ), [radius, subdivisions, splitDim]);

    return sphereMesh;
}

export default TestSplitSphereWeather