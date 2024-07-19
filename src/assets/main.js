import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas : document.querySelector('#bg'),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);


const geometry = new THREE.SphereGeometry(10, 24, 24, 0, Math.PI * 2, 0, Math.PI);
const material = new THREE.MeshStandardMaterial({ color: 0xFF6347 });
const earth = new THREE.Mesh(geometry, material);

scene.add(earth);
const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 10);
const ambientLight = new THREE.AmbientLight(0xfffffff, 1);
const lightHelper = new THREE.DirectionalLightHelper(directionalLight);
const girdHelper = new THREE.GridHelper(200,50);

directionalLight.position.set(5,10,7.5)

scene.add(ambientLight);
scene.add(lightHelper);
scene.add(girdHelper);
scene.add(directionalLight)

const control  = new OrbitControls(camera, renderer.domElement);
renderer.render(scene,camera);
function animate(){
    requestAnimationFrame(animate);
    earth.rotateX(0.01);
    renderer.render(scene,camera);

    control.update();
}
animate();