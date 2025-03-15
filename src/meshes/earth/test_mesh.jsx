import { useGLTF } from "@react-three/drei";

function TestMesh() {
  const { scene } = useGLTF("/Experimental GLB/ExperimentalEarth.glb");
  return <primitive object={scene} />;
}

export default TestMesh;
