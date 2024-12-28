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
    console.log('Texture paths:', texturePathsMonth);
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

                    console.log('Loaded texture:', texture);
                    resolve(texture);
                },
                undefined,
                (error) => {
                    console.error('Error loading texture:', error);
                    reject(error);
                }
            );
        });
    });

    return Promise.all(texturePromises);
};



const createTextureSphereMaterials = async ({renderer, month}) => {
    console.log("createTextureSphereMaterials called");
    try {
        const textures = await loadTextures({renderer, month});
        console.log('Loaded textures:', textures);

        const textureSphereMaterials = textures.map(texture => {
            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.set(4, 4);
            texture.offset.set(0, 0); // Adjust the offset to start at the edge

            texture.minFilter = THREE.NearestMipMapNearestFilter;
            texture.magFilter = THREE.NearestFilter;

            const material = new THREE.MeshPhongMaterial({ map: texture });
            material.precision = 'highp';
            return material;
        });

        return textureSphereMaterials;
    } catch (error) {
        console.error('Error creating texture sphere materials:', error);
        return [];
    }
};

const CreateSphereMaterials = async ({ renderer, month, uniforms }) => {
    try {
        const textures = await loadTextures({ renderer, month });
        const newMaterials = textures.map((texture, index) => {
            uniforms[index].mapCurrent.value = texture;
            console.log('Custom Shader in the making');
            return new CustomShaderMaterial({
                baseMaterial: THREE.MeshPhongMaterial,
                map: texture,
                uniforms: uniforms[index],
                fragmentShader: weatherPatchmapFrag,
                patchMap: {
                    patchInit: { "#include <map_pars_fragment>": `${weatherInitFrag}` },
                    pathInject: { "#include <map_fragment>": `${weatherInjectFrag}` }
                }
            });
        });

        console.log('Weather Sphere materials:', newMaterials);
        return newMaterials;
    } catch (error) {
        console.error('Error creating texture sphere materials:', error);
        return [];
    }
};

function TestSplitSphereWeather() {
    console.log("Debug: TestSplitSphereWeather is rendering.");
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
                mapCurrent: { value: new THREE.CompressedTexture() },
                mapNext: { value: new THREE.CompressedTexture() }
            });
        }
        return uniformSet;
    }, []);

    const time = useRef(0);
    const pastTime = useRef(0);
    const [trigger, setTrigger] = useState(false);
    const [init, setInit] = useState(false);

    useEffect(() => {
        console.log("Debug: useEffect triggered with trigger =", trigger, "init =", init);
        const updateTexture = async () => {
            if (trigger && init) {
                const nextMonth = (Math.floor(time.current) % 12) + 1;
                console.log("Debug: Calculated nextMonth =", nextMonth);
                const nextTextures = await loadTextures({ renderer: gl, month: nextMonth });
                nextTextures.forEach((texture, index) => {
                    uniforms[index].utime.value = 0;
                    uniforms[index].mapNext.value = texture;
                });
                setTrigger(false);
            }
        };

        updateTexture();
    }, [trigger, init]);


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
                console.log('Sphere materials:', sphereMaterials);
                setInit(true);
                memoizedSphereMesh.current.material = sphereMaterials;
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

    useFrame(() => {
        if (memoizedSphereMesh.current) {
            time.current += 0.01;
            memoizedSphereMesh.current.material.forEach((material, index) => {
                material.uniforms.utime.value = time.current;
            });

            if (((time.current - pastTime.current) > 1) && !trigger) {
                pastTime.current = Math.floor(time.current);
                setTrigger(true);
            }

            if (time.current > 12) {
                time.current = 0;
            }
        }
    });

    const sphereMesh = useMemo(() => (
        <Suspense fallback={null}>
            <mesh ref={memoizedSphereMesh} material={new THREE.MeshBasicMaterial({ color: 'blue'})} geometry={new THREE.SphereGeometry(radius, subdivisions, subdivisions)}/>
        </Suspense>
    ), [radius, subdivisions, splitDim]);

    return sphereMesh;
}

export default TestSplitSphereWeather