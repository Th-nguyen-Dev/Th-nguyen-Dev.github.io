import { useRef } from "react";

function EarthClippingMask(props) {
  const earthRef = useRef();

  return (
    <mesh ref={earthRef} {...props}>
      <sphereGeometry args={[5, 30, 30, 0, Math.PI * 2, 0, Math.PI]} />
      <meshBasicMaterial color="white"></meshBasicMaterial>
    </mesh>
  );
}

export default EarthClippingMask;
