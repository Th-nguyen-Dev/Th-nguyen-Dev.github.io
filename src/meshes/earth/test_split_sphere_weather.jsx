import React, { useEffect, useMemo, Suspense, useRef, useState } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader';
import { splitGeometryByUV } from './mesh_lib/mesh_lib';
import CustomShaderMaterial from "three-custom-shader-material/vanilla";

import weatherPatchmapFrag from '@/shaders/weather_v2/weather_patchmap_frag.glsl'; 
import weatherInitFrag from '@/shaders/weather_v2/weather_init_frag.glsl';
import weatherInjectFrag from '@/shaders/weather_v2/weather_inject_frag.glsl';


const texturePathGeneration = ({month}) => {
    const textureBasePath = '/textures_sequence/compressed_4x4/';
    const monthString = month.toString().padStart(2, '0');
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

const texturePathGenerationTest = () => {
    const textureBasePath = '/textures_sequence/compressed_albedo_4x4';
    return [
        [
        `${textureBasePath}/earth_surface_01_0.ktx2`,
        `${textureBasePath}/earth_surface_01_1.ktx2`,
        `${textureBasePath}/earth_surface_01_2.ktx2`,
        `${textureBasePath}/earth_surface_01_3.ktx2`,
        ],
        [
        `${textureBasePath}/earth_surface_01_4.ktx2`,
        `${textureBasePath}/earth_surface_01_5.ktx2`,
        `${textureBasePath}/earth_surface_01_6.ktx2`,
        `${textureBasePath}/earth_surface_01_7.ktx2`,
        ],
        [
        `${textureBasePath}/earth_surface_01_8.ktx2`,
        `${textureBasePath}/earth_surface_01_9.ktx2`,
        `${textureBasePath}/earth_surface_01_10.ktx2`,
        `${textureBasePath}/earth_surface_01_11.ktx2`,
        ],
        [
        `${textureBasePath}/earth_surface_01_12.ktx2`,
        `${textureBasePath}/earth_surface_01_13.ktx2`,
        `${textureBasePath}/earth_surface_01_14.ktx2`,
        `${textureBasePath}/earth_surface_01_15.ktx2`,
        ],
    ];
};

const bumpTexturePathGeneration = () => {
    const textureBasePath = '/textures_sequence/compressed_bump_4x4/';
    return [
        [
        `${textureBasePath}earth_bump_xl_0.ktx2`,
        `${textureBasePath}earth_bump_xl_1.ktx2`,
        `${textureBasePath}earth_bump_xl_2.ktx2`,
        `${textureBasePath}earth_bump_xl_3.ktx2`,
        ],
        [
        `${textureBasePath}earth_bump_xl_4.ktx2`,
        `${textureBasePath}earth_bump_xl_5.ktx2`,
        `${textureBasePath}earth_bump_xl_6.ktx2`,
        `${textureBasePath}earth_bump_xl_7.ktx2`,
        ],
        [
        `${textureBasePath}earth_bump_xl_8.ktx2`,
        `${textureBasePath}earth_bump_xl_9.ktx2`,
        `${textureBasePath}earth_bump_xl_10.ktx2`,
        `${textureBasePath}earth_bump_xl_11.ktx2`,
        ],
        [
        `${textureBasePath}earth_bump_xl_12.ktx2`,
        `${textureBasePath}earth_bump_xl_13.ktx2`,
        `${textureBasePath}earth_bump_xl_14.ktx2`,
        `${textureBasePath}earth_bump_xl_15.ktx2`,
        ],
    ];
};

const bumpTexturePathGenerationSanityCheck = () => {
    const textureBasePath = '/textures_sequence/compressed_bump_4x4/';
    return [
        [
        `${textureBasePath}earth_bump_xl_0.jpg`,
        `${textureBasePath}earth_bump_xl_1.jpg`,
        `${textureBasePath}earth_bump_xl_2.jpg`,
        `${textureBasePath}earth_bump_xl_3.jpg`,
        ],
        [
        `${textureBasePath}earth_bump_xl_4.jpg`,
        `${textureBasePath}earth_bump_xl_5.jpg`,
        `${textureBasePath}earth_bump_xl_6.jpg`,
        `${textureBasePath}earth_bump_xl_7.jpg`,
        ],
        [
        `${textureBasePath}earth_bump_xl_8.jpg`,
        `${textureBasePath}earth_bump_xl_9.jpg`,
        `${textureBasePath}earth_bump_xl_10.jpg`,
        `${textureBasePath}earth_bump_xl_11.jpg`,
        ],
        [
        `${textureBasePath}earth_bump_xl_12.jpg`,
        `${textureBasePath}earth_bump_xl_13.jpg`,
        `${textureBasePath}earth_bump_xl_14.jpg`,
        `${textureBasePath}earth_bump_xl_15.jpg`,
        ],
    ];
};

// Create a single instance of KTX2Loader
const textureLoader = new KTX2Loader();
textureLoader.setTranscoderPath('/basis/');
textureLoader.setWorkerLimit(4);

const loadTexturesBump = async ({renderer}) => {
    textureLoader.detectSupport(renderer);
    const textureLoaderBase = new THREE.TextureLoader();
    const texturePaths = bumpTexturePathGeneration();
    const texturesPathsSanityCheck = bumpTexturePathGenerationSanityCheck();
    const texturePromises = texturePaths.flat().map(path => {
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
                    texture.wrapS = THREE.ClampToEdgeWrapping;
                    texture.wrapT = THREE.ClampToEdgeWrapping;
                    texture.repeat.set(4, 4);
                    texture.offset.set(0, 0); // Adjust the offset to start at the edge
                    texture.minFilter = THREE.LinearMipMapLinearFilter;
                    texture.magFilter = THREE.LinearFilter;
                    resolve(texture);
                },
                undefined,
                (error) => {
                    reject(error);
                }
            );
        });
    });
    // const texturePromises = texturesPathsSanityCheck.flat().map(path => {
    //     return new Promise((resolve, reject) => {
    //         textureLoaderBase.load(
    //             path,
    //             (texture) => {
    //                 texture.wrapS = THREE.RepeatWrapping;
    //                 texture.wrapT = THREE.RepeatWrapping;
    //                 texture.repeat.set(4, 4);
    //                 texture.offset.set(0, 0); // Adjust the offset to start at the edge
    //                 texture.generateMipmaps = true;
                    
    //                 texture.minFilter = THREE.LinearMipMapLinearFilter;
    //                 texture.magFilter = THREE.LinearFilter;
    //                 console.log('Texture loaded:', texture);
    //                 resolve(texture);
    //             },
    //             undefined,
    //             (error) => {
    //                 reject(error);
    //             }
    //         );
    //     });
    // });
    return Promise.all(texturePromises);
};

const loadTexturesTest = async ({renderer}) => {
    textureLoader.detectSupport(renderer);
    const texturePathsMonth = texturePathGenerationTest();
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
                    texture.wrapS = THREE.ClampToEdgeWrapping;
                    texture.wrapT = THREE.ClampToEdgeWrapping;// Adjust the offset to start at the edge
                    texture.minFilter = THREE.NearestFilter;
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
                    texture.wrapS = THREE.ClampToEdgeWrapping;
                    texture.wrapT = THREE.ClampToEdgeWrapping;// Adjust the offset to start at the edge
                    texture.minFilter = THREE.LinearMipMapLinearFilter;
                    texture.magFilter = THREE.LinearFilter;
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
        // const textures = await loadTexturesTest({ renderer});
        console.log('Starting to load textures...');
        const textures = await loadTextures({ renderer, month });
        console.log('Textures loaded:', textures.length);

        // console.log('Loading next month textures...');
        // const texturesNext = await loadTextures({ renderer, month: month + 1 });
        // console.log('Textures next loaded:', texturesNext.length);

        // console.log('Loading next 2 months textures...');
        // const texturesNext2 = await loadTextures({ renderer, month: month + 2 });
        // console.log('Textures next2 loaded:', texturesNext2.length);

        console.log('Loading bump textures...');
        const bumpTextures = await loadTexturesBump({ renderer });
        console.log('Bump Textures loaded:', bumpTextures.length);

        const textureLoader = new THREE.TextureLoader();
        const debugTexture = textureLoader.load('textures_sequence/debug_test.webp');
        debugTexture.wrapS = THREE.RepeatWrapping;
        debugTexture.wrapT = THREE.RepeatWrapping;
        debugTexture.offset.set(0, 0);
        debugTexture.repeat.set(4, 4);
        debugTexture.minFilter = THREE.LinearFilter;
        debugTexture.magFilter = THREE.LinearMipmapLinearFilter;

        const newMaterials = textures.map((texture, index) => {
            const bumpTexture = bumpTextures[index];

            const albedoTexture = texture.clone();
            const tileU = index % 4;
            const tileV = Math.floor(index / 4);


            // console.log('Albedo texture Before: ', index, " " , albedoTexture);
            albedoTexture.offset.set( - tileU , tileV - 3);
            albedoTexture.repeat.set(4.0, 4.0);

            bumpTexture.offset.set( - tileU , tileV - 3);
            bumpTexture.repeat.set(4.0, 4.0);
            // console.log('Albedo texture After : ', index, " " , albedoTexture);

            // console.log('Create material for index:', index);
            // console.log(`Tile U: ${tileU}, Tile V: ${tileV}`);
            // textureIndex.offset.set(1 / 4.0 * tileU, 1 / 4.0 * tileV);
            // textureIndex.repeat.set(4, 4);
            // uniforms[index].mapCurrent_1.value = texture;
            // uniforms[index].mapNext_1.value = texturesNext[index];
            // uniforms[index].mapNext_2.value = texturesNext[index];
            // uniforms[index].mapCurrent_2.value = texturesNext2[index];
            // const material = new CustomShaderMaterial({
            //     baseMaterial: THREE.MeshPhongMaterial,
            //     map: debugTexture,
            //     // color: new THREE.Color(0xc0c0c0),
            //     // bumpMap: bumpTexture,
            //     bumpScale: 500,
            //     uniforms: uniforms[index],
            //     fragmentShader: weatherPatchmapFrag,
            //     patchMap: {
            //         "patchInit": { "#include <map_pars_fragment>": `${weatherInitFrag}` },
            //         "patchInject": { "#include <map_fragment>": `${weatherInjectFrag}` }
            //     }
            // });
            const material = new THREE.MeshPhongMaterial({ 
                map: albedoTexture,
                // color: '#' + Math.floor(Math.random() * 16777215).toString(16),
                bumpMap: bumpTexture,
                bumpScale: 100,
                precision: 'highp',
            });
            
            console.log(`Material created for index ${index}`);
            return material;
        });

        console.log('All materials created successfully.');
        return newMaterials;
    } catch (error) {
        console.error('Error creating texture sphere materials:', error);
        return [];
    }
};

function TestSplitSphereWeather() {
    const radius = 5;
    const subdivisions = 320;
    const splitDim = 4;
    const memoizedSphereMesh = useRef(null);
    const { gl } = useThree();



    const [isInit, setIsInit] = useState(false);

    //Initialize the materials
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
                // LoadAllTextures();
                const sphereMaterials = await CreateSphereMaterials({ renderer: gl, month: 0, uniforms : uniforms });
                memoizedSphereMesh.current.material = sphereMaterials;
                console.log('Sphere materials loaded');
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


    //Initailize the geometry
    useEffect(() => {
        const disposeGeometry = () => {
            if (memoizedSphereMesh.current) {
                memoizedSphereMesh.current.geometry.dispose();
            }
        };

        const splitGeometry = async () => {
            const newGeometry = await splitGeometryByUV(new THREE.SphereGeometry(radius, subdivisions, subdivisions), 4, true);
            if (newGeometry && memoizedSphereMesh.current) {
                memoizedSphereMesh.current.geometry = newGeometry;
                console.log('Sphere geometry split: ', newGeometry);
            }
        };

        disposeGeometry();
        splitGeometry();

        return () => {
            disposeGeometry();
        };
    }, [radius, subdivisions, splitDim]);

    const timeRef = useRef(1);
    const lastMonthRef = useRef(1);
    const currentBufferRef = useRef(1);
    const deltaTime = 0.005;

    const uniforms = useMemo(() => {
        const uniformSet = [];
        for (let i = 0; i < 16; i++) {
            uniformSet.push({
                blend: { value: 0 },
                currentBuffer : { value : currentBufferRef.current  },
                mapCurrent_1: { value: new THREE.CompressedTexture() },
                mapNext_1: { value: new THREE.CompressedTexture() },
                mapCurrent_2 : { value: new THREE.CompressedTexture() },
                mapNext_2 : { value: new THREE.CompressedTexture() }
            });
        }
        return uniformSet;
    }, []);

    const updateBlend = () => {
        uniforms.forEach((uniform) => {
            uniform.blend.value = timeRef.current % 1;
        })
    }

    const BATCH_SIZE = 1; // Process 4 uniforms at a time

    const updateUniformBatch = (startIdx, nextTextures) => {
        const endIdx = Math.min(startIdx + BATCH_SIZE, uniforms.length);
        
        for(let i = startIdx; i < endIdx; i++) {
            if (currentBufferRef.current === 1) {
                const temp = uniforms[i].mapCurrent_2.value;
                uniforms[i].mapCurrent_2.value = uniforms[i].mapNext_1.value;
                uniforms[i].mapNext_2.value = nextTextures[i];
                temp?.dispose();
            } else {
                const temp = uniforms[i].mapCurrent_1.value;
                uniforms[i].mapCurrent_1.value = uniforms[i].mapNext_2.value;
                uniforms[i].mapNext_1.value = nextTextures[i];
                temp?.dispose();
            }
        }
        return endIdx;
    };

    const updateUniforms = async (nextTextures) => {
        return new Promise((resolve) => {
            let processedIdx = 0;
            let frameId;

            const processBatch = () => {
                if (processedIdx < uniforms.length) {
                    processedIdx = updateUniformBatch(processedIdx, nextTextures);
                    frameId = requestAnimationFrame(processBatch);
                } else {
                    resolve();
                }
            };

            processBatch();

            return () => {
                if (frameId) {
                    cancelAnimationFrame(frameId);
                }
            };
        });
    };

    //Update the texture to reflect the season
    const updateTexture = async () => {
        if (!memoizedSphereMesh.current || !isInit) return;


            lastMonthRef.current = Math.floor(timeRef.current);
            const bufferMonth = (lastMonthRef.current + 2) % 12;

            if(currentBufferRef.current === 1){
                currentBufferRef.current = 2;
            } else {
                currentBufferRef.current = 1;

            }
            uniforms.forEach((uniform, index) => {
                uniform.currentBuffer.value = currentBufferRef.current;
            })

            loadTextures({ renderer: gl, month: bufferMonth }).then(async nextTextures => {
                try {
                    await updateUniforms(nextTextures);
                } catch (error) {
                    console.error('Error updating uniforms:', error);
            }
            }).catch(error => {
                console.error('Error loading textures:', error);
            });

            // const nextTextures = poolTextures.current[bufferMonth];
            // updateUniforms(nextTextures);

    };

    useFrame(() => {
        // if (!memoizedSphereMesh.current || !isInit) return;

        // timeRef.current += deltaTime;
        // timeRef.current = (timeRef.current % 12);

        // updateBlend();
        // if (Math.abs(timeRef.current - lastMonthRef.current) >= 1) {
        //     updateTexture();
        // }
    });

    const sphereMesh = useMemo(() => (
        <Suspense fallback={null}>
            <mesh ref={memoizedSphereMesh} material={new THREE.MeshBasicMaterial({ color: 'blue'})} geometry={new THREE.SphereGeometry(radius, subdivisions, subdivisions)}/>
        </Suspense>
    ), [radius, subdivisions, splitDim]);

    return sphereMesh;
}

export default TestSplitSphereWeather