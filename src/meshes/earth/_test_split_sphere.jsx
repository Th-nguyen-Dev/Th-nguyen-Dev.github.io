import React, { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";
import { KTX2Loader } from "three/examples/jsm/loaders/KTX2Loader";
import { splitGeometryByUV } from "./mesh_lib/mesh_lib";

const textureBasePath = "/textures_sequence/split_images_4x4/";
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

// Create a single instance of KTX2Loader
const textureLoader = new KTX2Loader();
textureLoader.setTranscoderPath("/basis/");

const loadTextures = async ({ renderer }) => {
  textureLoader.detectSupport(renderer);
  const texturePromises = texturePaths2.flat().map((path) => {
    return new Promise((resolve, reject) => {
      fetch(path)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
        })
        .catch((error) => {
          reject(error);
        });
      textureLoader.load(
        path,
        (texture) => {
          resolve(texture);
        },
        undefined,
        (error) => {
          reject(error);
        },
      );
    });
  });

  return Promise.all(texturePromises);
};

const createTextureSphereMaterials = async ({ renderer }) => {
  console.log("createTextureSphereMaterials called");
  try {
    const textures = await loadTextures({ renderer });
    console.log("Loaded textures:", textures);

    const textureSphereMaterials = textures.map((texture) => {
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(4, 4);
      texture.offset.set(0, 0); // Adjust the offset to start at the edge

      texture.minFilter = THREE.NearestMipMapNearestFilter;
      texture.magFilter = THREE.NearestFilter;
      if (texture.iscompressedTexture) {
        texture.encoding = THREE.sRGBEncoding;
      }

      const material = new THREE.MeshPhongMaterial({ map: texture });
      material.precision = "highp";
      return material;
    });

    return textureSphereMaterials;
  } catch (error) {
    console.error("Error creating texture sphere materials:", error);
    return [];
  }
};

function TestSplitSphere() {
  const radius = 5;
  const subdivisions = 80;
  const splitDim = 4;
  const memoizedSphereMesh = useRef(null);
  const { gl } = useThree();

  useEffect(() => {
    const disposeMaterials = () => {
      if (memoizedSphereMesh.current) {
        if (Array.isArray(memoizedSphereMesh.current.material)) {
          memoizedSphereMesh.current.material.forEach((material) =>
            material.dispose(),
          );
          console.log("Disposed of current materials array");
        } else {
          memoizedSphereMesh.current.material.dispose();
          console.log("Disposed of current single material");
        }
      }
    };

    const updateMaterials = async () => {
      console.log("updateMaterials called");
      if (memoizedSphereMesh.current) {
        console.log("memoizedSphereMesh is valid");

        disposeMaterials();

        const sphereMaterials = await createTextureSphereMaterials({
          renderer: gl,
        });
        console.log("Got sphereMaterials:", sphereMaterials);
        memoizedSphereMesh.current.material = sphereMaterials;
        console.log(
          "Updated sphereMaterials:",
          memoizedSphereMesh.current.material,
        );
      }
    };

    updateMaterials();

    return () => {
      disposeMaterials();
      console.log("Cleaned up materials");
      textureLoader.dispose();
    };
  }, [gl]);

  useEffect(() => {
    const splitGeometry = async () => {
      const newGeometry = await splitGeometryByUV(
        new THREE.SphereGeometry(radius, subdivisions, subdivisions),
      );
      if (newGeometry && memoizedSphereMesh.current) {
        memoizedSphereMesh.current.geometry.dispose();
        memoizedSphereMesh.current.geometry = newGeometry;
        console.log("Updated geometry:", newGeometry);
      }
    };
    splitGeometry();

    return () => {
      if (memoizedSphereMesh.current) {
        memoizedSphereMesh.current.geometry.dispose();
        console.log("Cleaned up geometry");
      }
    };
  }, [radius, subdivisions, splitDim]);

  const sphereMesh = useMemo(
    () => (
      <mesh
        ref={memoizedSphereMesh}
        material={new THREE.MeshBasicMaterial({ color: "blue" })}
        geometry={new THREE.SphereGeometry(radius, subdivisions, subdivisions)}
      />
    ),
    [radius, subdivisions, splitDim],
  );

  return sphereMesh;
}

export default TestSplitSphere;
