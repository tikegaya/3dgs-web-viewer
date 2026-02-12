// Importing Three.js and Spark Renderer
import * as THREE from 'three';
import { SparkRenderer } from 'spark-renderer';

// Create a scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ antialias: false });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Load the Taranis2_1.sog model
const loader = new THREE.ObjectLoader();
loader.load('path/to/Taranis2_1.sog', function (object) {
    scene.add(object);
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Update the scene
    renderer.render(scene, camera);
}
animate();