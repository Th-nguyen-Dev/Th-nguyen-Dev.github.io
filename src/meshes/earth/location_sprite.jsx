import EdmondsCollege from "/textures/edmonds_college_round.png";

import * as THREE from "three";
function LocationSprite() {
  return (
    <>
      <sprite scale={[10, 10, 0]}>
        <spriteMaterial map={new THREE.TextureLoader().load(EdmondsCollege)} />
      </sprite>
    </>
  );
}
export default LocationSprite;
