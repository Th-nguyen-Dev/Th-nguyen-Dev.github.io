import React from "react";;
import * as THREE from 'three';

const locationsNeuralNetwork = {
    "72790024141": { latitude: 47.30777, longitude: -119.51551 },
    "72785524114": { latitude: 47.63333, longitude: -117.65 },
    "72789094197": { latitude: 48.46113, longitude: -119.52091 },
    "72793024233": { latitude: 47.44467, longitude: -122.31442 },
    "72785794129": { latitude: 46.74376, longitude: -117.11581 },
    "72788594266": { latitude: 48.12194, longitude: -123.50662 },
    "72797624217": { latitude: 48.7991, longitude: -122.54069 },
    "72785024157": { latitude: 47.62168, longitude: -117.52796 },
    "72797094240": { latitude: 47.93695, longitude: -124.55757 },
    "72798594276": { latitude: 48.51998, longitude: -123.0264 },
    "72792424223": { latitude: 46.11667, longitude: -122.89389 },
    "72792894263": { latitude: 47.48333, longitude: -122.76667 },
    "72781024243": { latitude: 46.56398, longitude: -120.53488 },
    "72781524237": { latitude: 47.2767, longitude: -121.3372 },
    "72788324220": { latitude: 47.03376, longitude: -120.53135 },
    "72698824219": { latitude: 45.61901, longitude: -121.16571 },
    "72793894274": { latitude: 47.26744, longitude: -122.57623 },
    "74206024207": { latitude: 47.15, longitude: -122.48333 },
    "72782724110": { latitude: 47.19295, longitude: -119.31459 },
    "72793724222": { latitude: 47.92322, longitude: -122.28308 },
    "72792594227": { latitude: 47.23842, longitude: -123.14147 },
    "72782594239": { latitude: 47.39746, longitude: -120.20124 },
    "72794504205": { latitude: 48.16056, longitude: -122.15889 },
    "72792394225": { latitude: 46.97288, longitude: -123.93074 },
    "72784524163": { latitude: 46.2695, longitude: -119.11816 },
    "72792024227": { latitude: 46.97371, longitude: -122.90493 },
    "72785694176": { latitude: 47.68575, longitude: -117.32141 }
};

const locationsTimeline = {
    "My Tho": { latitude: 10.360015, longitude: 106.359375 },
    "Houston": { latitude: 29.760427, longitude: -95.369804 },
    "Edmonds": { latitude: 47.810652, longitude: -122.377355 },
    "Renton": { latitude: 47.482878, longitude: -122.217066 }
};

const get3DCoordinate = ({ earthCoordinate, radius }) => {
    const lat = (90 - earthCoordinate.latitude) * Math.PI / 180;
    const lon = -( earthCoordinate.longitude) * Math.PI / 180;
    return {
        x: radius * Math.sin(lat) * Math.cos(lon),
        y: radius * Math.cos(lat),
        z: radius * Math.sin(lat) * Math.sin(lon)
    };
};

const getMovementQuaternion = ({ startVec, endVec }) => {
    const startVec3 = new THREE.Vector3(startVec.x, startVec.y, startVec.z);
    const endVec3 = new THREE.Vector3(endVec.x, endVec.y, endVec.z);
    const startVecNorm = startVec3.normalize();
    const endVecNorm = endVec3.normalize();
    const quaternion = new THREE.Quaternion().setFromUnitVectors(startVecNorm, endVecNorm);
    return { x: quaternion.x, y: quaternion.y, z: quaternion.z, w: quaternion.w };
};

const generate3DCoordinates = ({ locations, radius }) => {
    const coordinates = {};
    Object.keys(locations).forEach((key) => {
        coordinates[key] = get3DCoordinate({ earthCoordinate: locations[key], radius });
    });
    return coordinates;
};

const generateMovementQuaternions = ({ locations, endVec, radius }) => {
    const quaternions = {};
    Object.keys(locations).forEach((key) => {
        const currentStartVec = get3DCoordinate({ earthCoordinate: locations[key], radius });
        quaternions[key] = getMovementQuaternion({ startVec: currentStartVec, endVec });
    });
    return quaternions;
};

export { locationsNeuralNetwork, locationsTimeline, generate3DCoordinates, generateMovementQuaternions };