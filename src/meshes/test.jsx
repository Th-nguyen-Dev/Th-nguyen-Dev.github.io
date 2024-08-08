import * as THREE from 'three';
function TestSphere() {
    return (
        <mesh>
            <sphereGeometry args={[10, 100, 100, 0, Math.PI * 2, 0, Math.PI]} />
            <meshStandardMaterial color="green" />
        </mesh>
    )
}
export default TestSphere;