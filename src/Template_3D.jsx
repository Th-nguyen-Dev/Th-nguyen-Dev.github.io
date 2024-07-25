import './style.css';
import React from 'react'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import earthAlbedo from "/textures/earth albedo dec.png";
import earthBump from "/textures/earth bump.jpg";
import earthSpecular from "/textures/earth land ocean mask.png";
import earthNight from "/textures/earth night_lights_modified.png";
import galaxy from "/textures/Galaxy.png";
import fragmentShader from "./shaders/fragment_fresnel.glsl";
import vertexShader from "./shaders/vertex_fresnel.glsl";
import cloud from "/textures/earth clouds.jpg";
import { texture } from 'three/examples/jsm/nodes/Nodes.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas : document.querySelector('#bg'),
    antialias: true
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMapSoft = true;
camera.position.setZ(30);

//Add Earth
const earthGeometry = new THREE.SphereGeometry(10, 100, 100, 0, Math.PI * 2, 0, Math.PI);
const earthTexture = new THREE.TextureLoader().load(earthAlbedo);
const earthBumpTexture = new THREE.TextureLoader().load(earthBump);
const earthSpecularTexture = new THREE.TextureLoader().load(earthSpecular);
const earthEnvTexture = new THREE.TextureLoader().load(galaxy);
const earthMaterial = new THREE.MeshPhongMaterial({ 
    map: earthTexture, 

    envMap: earthEnvTexture,
    
    bumpMap: earthBumpTexture, 
    bumpScale: 100, 

    specularMap: earthSpecularTexture, 
    shininess: 100,

    reflectivity: -1.0,
    polygonOffset : true,
    polygonOffsetFactor: 20000,
    precision : "highp"
});
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earth);
const uniforms = {
    cameraPosition : {value: new THREE.Vector3()}
};
const fresnelGeometry = new THREE.SphereGeometry(10, 100, 100, 0, Math.PI * 2, 0, Math.PI);
const fresnelMaterial = new THREE.ShaderMaterial({
    fragmentShader : fragmentShader,
    vertexShader : vertexShader,
    transparent : true,
    uniforms: uniforms,
    polygonOffset : true,
    polygonOffsetFactor: -20000
})

fresnelMaterial.uniforms.uTime = {value :0}
fresnelMaterial.uniforms.uRadius = {value : 0.5}

const fresnel = new THREE.Mesh(fresnelGeometry, fresnelMaterial);
scene.add(fresnel);


//Add Cloud
const cloudGeometry = new THREE.SphereGeometry(10, 100, 100,0, Math.PI * 2, 0, Math.PI);
const cloudTexture = new THREE.TextureLoader().load(cloud);
const cloudMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    alphaMap: cloudTexture,
    blending: THREE.AdditiveBlending,
    polygonOffset : true,
    polygonOffsetFactor: -10000
});
const earthCloud = new THREE.Mesh(cloudGeometry, cloudMaterial);
scene.add(earthCloud);



//Add light
const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 2);
const ambientLight = new THREE.AmbientLight(0xfffffff,0.005);

// const lightHelper = new THREE.DirectionalLightHelper(directionalLight);
// scene.add(lightHelper);

//Add GridHelper
// const girdHelper = new THREE.GridHelper(200,50);
// scene.add(girdHelper);

directionalLight.position.set(5,10,7.5)

const axis = new THREE.Vector3(0,1,0);
const lineHelper = new THREE.ArrowHelper(axis)
const angle = Math.PI/3650;



scene.add(ambientLight);


scene.add(directionalLight)
scene.add(axis);
scene.add(camera);

const control  = new OrbitControls(camera, renderer.domElement);
renderer.render(scene,camera);
function animate(){
    //Rotate Earth
    requestAnimationFrame(animate);
    earth.rotateOnAxis(axis, angle);
    uniforms.cameraPosition.value.copy(camera.getWorldPosition(new THREE.Vector3));

    //Rotate Cloud
    earthCloud.rotateOnAxis(axis, angle*1.5);
    renderer.render(scene,camera);

    control.update();
}
animate();