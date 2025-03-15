import React from "react";

import Fresnel from "./fresnel";
import EarthAtmosphere from "./earth_atmostphere";
function EarthMeshesAtmosphere() {
  return (
    <group>
      <EarthAtmosphere />
      <Fresnel />
    </group>
  );
}
export default EarthMeshesAtmosphere;
