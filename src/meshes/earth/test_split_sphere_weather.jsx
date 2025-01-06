import React, { useEffect, useMemo, Suspense, useRef, useState } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader';
import { splitGeometryByUV } from './mesh_lib/mesh_lib';
import CustomShaderMaterial from "three-custom-shader-material/vanilla";

import weatherPatchmapFrag from '@/shaders/weather_v2/weather_patchmap_frag.glsl'; 
import weatherInitFrag from '@/shaders/weather_v2/weather_init_frag.glsl';
import weatherInjectFrag from '@/shaders/weather_v2/weather_inject_frag.glsl';

import earthWhite from '/textures/earth_white_environment.png';
import earthStars from '/textures/earth_environment.jpg';
import { useSelector } from 'react-redux';


const texturePathGeneration = ({month}) => {
    const textureBasePath = '/textures_sequence/compressed_earth_4x4/';
    const monthString = month.toString().padStart(2, '0');
    return [
        [
        `${textureBasePath}earth_surface_${monthString}_0.ktx2`,
        `${textureBasePath}earth_surface_${monthString}_1.ktx2`,
        `${textureBasePath}earth_surface_${monthString}_2.ktx2`,
        `${textureBasePath}earth_surface_${monthString}_3.ktx2`,
        ],
        [
        `${textureBasePath}earth_surface_${monthString}_4.ktx2`,
        `${textureBasePath}earth_surface_${monthString}_5.ktx2`,
        `${textureBasePath}earth_surface_${monthString}_6.ktx2`,
        `${textureBasePath}earth_surface_${monthString}_7.ktx2`,
        ],
        [
        `${textureBasePath}earth_surface_${monthString}_8.ktx2`,
        `${textureBasePath}earth_surface_${monthString}_9.ktx2`,
        `${textureBasePath}earth_surface_${monthString}_10.ktx2`,
        `${textureBasePath}earth_surface_${monthString}_11.ktx2`,
        ],
        [
        `${textureBasePath}earth_surface_${monthString}_12.ktx2`,
        `${textureBasePath}earth_surface_${monthString}_13.ktx2`,
        `${textureBasePath}earth_surface_${monthString}_14.ktx2`,
        `${textureBasePath}earth_surface_${monthString}_15.ktx2`,
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

const RoughnessTexturePathGeneration = () => {
    const textureBasePath = '/textures_sequence/compressed_roughness_4x4/';
    return [
        [
        `${textureBasePath}earth_roughness_0.ktx2`,
        `${textureBasePath}earth_roughness_1.ktx2`,
        `${textureBasePath}earth_roughness_2.ktx2`,
        `${textureBasePath}earth_roughness_3.ktx2`,
        ],
        [
        `${textureBasePath}earth_roughness_4.ktx2`,
        `${textureBasePath}earth_roughness_5.ktx2`,
        `${textureBasePath}earth_roughness_6.ktx2`,
        `${textureBasePath}earth_roughness_7.ktx2`,
        ],
        [
        `${textureBasePath}earth_roughness_8.ktx2`,
        `${textureBasePath}earth_roughness_9.ktx2`,
        `${textureBasePath}earth_roughness_10.ktx2`,
        `${textureBasePath}earth_roughness_11.ktx2`,
        ],
        [
        `${textureBasePath}earth_roughness_12.ktx2`,
        `${textureBasePath}earth_roughness_13.ktx2`,
        `${textureBasePath}earth_roughness_14.ktx2`,
        `${textureBasePath}earth_roughness_15.ktx2`,
        ],
    ];
};


// Create a single instance of KTX2Loader
const textureLoader = new KTX2Loader();
textureLoader.setTranscoderPath('/basis/');
textureLoader.setWorkerLimit(4);

const loadTexturesOther = async ({renderer, list}) => {
    textureLoader.detectSupport(renderer);
    const texturePaths = list;
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
                    texture.minFilter = THREE.LinearMipMapLinearFilter;
                    texture.magFilter = THREE.LinearFilter;
                    texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
                    resolve(texture);
                },
                undefined,
                (error) => {
                    reject(error);
                }
            );
        });
    });

    const textures = await Promise.all(texturePromises);
    textures.forEach((texture, index) => {
        const tileU = index % 4;
        const tileV = Math.floor(index / 4);
        texture.offset.set(-tileU, tileV - 3);
        texture.repeat.set(4.0, 4.0);
    });

    return textures;
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
                    texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
                    resolve(texture);
                },
                undefined,
                (error) => {
                    console.error('Error loading texture:', path);
                    reject(error);
                }
            );
        });
    });

    const textures = await Promise.all(texturePromises);
    textures.forEach((texture, index) => {
        const tileU = index % 4;
        const tileV = Math.floor(index / 4);
        texture.offset.set(-tileU, tileV - 3);
        texture.repeat.set(4.0, 4.0);
    });

    return textures;
};


const CreateSphereMaterials = async ({ renderer, month, uniforms }) => {
    try {
        // const textures = await loadTexturesTest({ renderer});
        const textures = await loadTextures({ renderer, month });
        console.log('Textures loaded:', textures.length);
        
        const bumpTextures = await loadTexturesOther({ renderer, list: bumpTexturePathGeneration() });
        console.log('Bump Textures loaded:', bumpTextures.length);

        const roughnessTextures = await loadTexturesOther({ renderer, list: RoughnessTexturePathGeneration() });
        console.log('Roughness Textures loaded:', roughnessTextures.length);

        // const textureLoader = new THREE.TextureLoader();
        // const debugTexture = textureLoader.load('textures_sequence/debug_test.webp');
        // debugTexture.wrapS = THREE.RepeatWrapping;
        // debugTexture.wrapT = THREE.RepeatWrapping;
        // debugTexture.offset.set(0, 0);
        // debugTexture.repeat.set(4, 4);
        // debugTexture.minFilter = THREE.LinearFilter;
        // debugTexture.magFilter = THREE.LinearMipmapLinearFilter;


        const newMaterials = textures.map((texture, index) => {
            const bumpTexture = bumpTextures[index];
            const roughnessTexture = roughnessTextures[index];

            // const albedoTexture = texture.clone();
            // uniforms[index].mapCurrent_1.value = texture;
            // uniforms[index].mapNext_1.value = texturesNext[index];
            // uniforms[index].mapNext_2.value = texturesNext[index];
            // uniforms[index].mapCurrent_2.value = texturesNext2[index];
            // const material = new CustomShaderMaterial({
            //     baseMaterial: THREE.MeshPhongMaterial,
            //     map: texture,
            //     bumpMap: bumpTexture,
            //     bumpScale: 100,
            //     uniforms: uniforms[index],
            //     fragmentShader: weatherPatchmapFrag,
            //     patchMap: {
            //         "patchInit": { "#include <map_pars_fragment>": `${weatherInitFrag}` },
            //         "patchInject": { "#include <map_fragment>": `${weatherInjectFrag}` }
            //     }
            // });
            const materialtest = new THREE.MeshPhongMaterial({
                map: texture,
                bumpMap: bumpTexture,
                bumpScale: 50,
                side: THREE.FrontSide,
                precision: 'highp',
            });

            const material = new CustomShaderMaterial({
                baseMaterial: THREE.MeshPhysicalMaterial,
                reflectivity: 0.01,
                ior: 1.5,
                roughness: 0.8,
                roughnessMap: roughnessTexture,
                metalness: 0.0,
                map: texture,
                bumpMap: bumpTexture,
                bumpScale: 50,
                envMap: uniforms.EnvMap.value,
                envMapIntensity: 0.05,
                precision: 'highp',
            });

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
    const lightColorValue = useSelector(state => state.lightColorValue);
    const { gl } = useThree();



    const [isInit, setIsInit] = useState(false);

    const uniforms = useMemo(() => {

        const lightColorValueConverter = new THREE.Color()
        lightColorValueConverter.setHSL(lightColorValue.h / 360, lightColorValue.s / 100, lightColorValue.l / 100);
        const lightColorValueHex = `#${lightColorValueConverter.getHexString()}`;

        const canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 128;

        const context = canvas.getContext('2d');
        context.fillStyle = lightColorValueHex || '#ffffff'; // Ensure lightColorValue is a valid color
        context.fillRect(0, 0, canvas.width, canvas.height);

        const texture = new THREE.CanvasTexture(canvas);
        texture.mapping = THREE.EquirectangularReflectionMapping;

        return {
            EnvMap: { value: texture },
        };
    }, [lightColorValue]);

    useEffect(() => {
        if (memoizedSphereMesh.current) {
            if (Array.isArray(memoizedSphereMesh.current.material)) {
                memoizedSphereMesh.current.material.forEach(material => {material.envMap = uniforms.EnvMap.value});
            }
        }
    }, [uniforms.EnvMap.value]);

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
                const sphereMaterials = await CreateSphereMaterials({ renderer: gl, month: 1, uniforms : uniforms });
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

    // useFrame(() => {
    //     if (!memoizedSphereMesh.current || !isInit) return;

    //     timeRef.current += deltaTime;
    //     timeRef.current = (timeRef.current % 12);

    //     updateBlend();
    //     if (Math.abs(timeRef.current - lastMonthRef.current) >= 1) {
    //         updateTexture();
    //     }
    // });

    const sphereMesh = useMemo(() => (
        <Suspense fallback={null}>
            <mesh ref={memoizedSphereMesh} material={new THREE.MeshBasicMaterial({ color: 'blue'})} geometry={new THREE.SphereGeometry(radius, subdivisions, subdivisions)}/>
        </Suspense>
    ), [radius, subdivisions, splitDim]);

    return sphereMesh;
}

export default TestSplitSphereWeather