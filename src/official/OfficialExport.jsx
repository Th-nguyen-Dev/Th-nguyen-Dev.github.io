import React, {
  useRef,
  useEffect,
  useState,
  Suspense,
  useCallback,
} from "react";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { Scroll, ScrollControls, useProgress, Html } from "@react-three/drei";

import AmbientLight from "../lights/ambient_light";
import DirectionalLights from "../lights/directional_light";
import PostProcessing from "../postprocesses/effect_composer";
import EarthMeshes from "../meshes/earth/earth_meshes";
import OfficialCamera from "../cameras/official_camera";

import Header from "@/UI/header/Header";
import VisualizerConfig from "@/UI/visualizer_config/VisualizerConfig";

import OfficialHTML from "./OfficialHTML";
import earthEnvironment from "/textures/earth_environment.jpg";

import * as THREE from "three";

export function Loading() {
  const { progress } = useProgress();
  return <div>{progress} % loaded</div>;
}

export function CanvasDOM() {
  const [pages, setPages] = useState(30);
  const { size } = useThree();
  const { scene } = useThree();
  const envTexture = useLoader(THREE.TextureLoader, earthEnvironment);
  const [nodeRef, setNodeRef] = useState(null);

  // Set up environment
  useEffect(() => {
    scene.background = new THREE.Color("#000000");
    scene.environment = envTexture;
    scene.environmentIntensity = 10.0;
  }, [scene, envTexture]);

  const refCallback = useCallback(
    (node) => {
      if (node !== null) {
        // Set up a ResizeObserver to catch ALL size changes including accordion
        const resizeObserver = new ResizeObserver(() => {
          const height = node.getBoundingClientRect().height;
          const pageCount = Math.ceil(height / size.height); // Always round up to integer
          setPages(pageCount);
        });

        resizeObserver.observe(node);

        // Initial calculation
        const initialHeight = node.getBoundingClientRect().height;
        const initialPageCount = Math.ceil(initialHeight / size.height);
        setPages(initialPageCount);
      }

      return () => {
        if (node?._cleanup) {
          // Keep track of the observer for cleanup
          node._cleanup = () => resizeObserver.disconnect();
          node._cleanup();
        }
      };
    },
    [size],
  );

  return (
    <ScrollControls damping={0.1} offset={1} pages={pages}>
      <AmbientLight />
      <DirectionalLights />
      <EarthMeshes />
      <PostProcessing />
      <OfficialCamera />
      <Scroll html style={{ height: "100%", width: "100%" }}>
        <div className="w-auto h-auto" ref={refCallback}>
          <OfficialHTML />
        </div>
      </Scroll>
    </ScrollControls>
  );
}

function PLoader() {
  return (
    <Html center>
      <div className="flex-col flex w-screen space-y-6 items-center justify-center">
        <div className="dot-spin"></div>
      </div>
    </Html>
  );
}
function OfficialExport() {
  const canvasRef = useRef();
  return (
    <div className="w-screen h-screen relative">
      <Canvas
        ref={canvasRef}
        className="canvas pointer-events-auto z-10"
        gl={{
          powerPreference: "high-performance",
          antialias: false,
        }}
        color="black"
        camera={{ fov: 20, position: [0, 0, 2000] }}
      >
        <Suspense fallback={PLoader()}>
          <color attach="background" args={["#000000"]} />
          <CanvasDOM />
        </Suspense>
      </Canvas>

      <div className="absolute top-0 left-0 w-full pointer-events-auto z-30">
        <Header />
      </div>
      <div className="absolute bottom-0 right-0 pointer-events-auto z-40">
        <VisualizerConfig />
      </div>
    </div>
  );
}

export default OfficialExport;
