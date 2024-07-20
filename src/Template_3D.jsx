import './style.css';
import React from 'react'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import earthAlbedo from "/textures/earth albedo.jpg";
import earthBump from "/textures/earth bump.jpg";
import { texture } from 'three/examples/jsm/nodes/Nodes.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas : document.querySelector('#bg'),
    antialias: true
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMapSoft = true;
camera.position.setZ(30);


const geometry = new THREE.SphereGeometry(10, 48, 48, 0, Math.PI * 2, 0, Math.PI);
const earthTexture = new THREE.TextureLoader().load(earthAlbedo);
const earthBumpTexture = new THREE.TextureLoader().load(earthBump);
const material = new THREE.MeshStandardMaterial({ map: earthTexture, bumpMap: earthBumpTexture, bumpScale: 50 });
const earth = new THREE.Mesh(geometry, material);

scene.add(earth);
const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 5);
const ambientLight = new THREE.AmbientLight(0xfffffff,0);
const lightHelper = new THREE.DirectionalLightHelper(directionalLight);
const girdHelper = new THREE.GridHelper(200,50);

directionalLight.position.set(5,10,7.5)

const axis = new THREE.Vector3(0,0.91706,0.399);
const lineHelper = new THREE.ArrowHelper(axis)
const angle = Math.PI/36500;

scene.add(ambientLight);
scene.add(lightHelper);
scene.add(girdHelper);
scene.add(directionalLight)
scene.add(axis);


const control  = new OrbitControls(camera, renderer.domElement);
renderer.render(scene,camera);
function animate(){
    requestAnimationFrame(animate);
    earth.rotateOnAxis(axis, angle);
    renderer.render(scene,camera);

    control.update();
}
animate();