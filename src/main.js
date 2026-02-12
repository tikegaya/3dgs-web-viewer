import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { SparkRenderer } from 'spark-renderer';

// Create scene
const scene = new THREE.Scene();

// Initialize Spark Renderer
const renderer = new SparkRenderer({
    antialias: false,
    pixelRatio: Math.min(window.devicePixelRatio, 1.5)
});

// Setup camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 1, 3);

// Orbit Controls
const controls = new OrbitControls(camera, renderer.domElement);

// Animation Loop
const animate = () => {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
};

animate();

// Placeholder for .sog/.spz asset loading
// const assets = ['path/to/your/asset.sog', 'path/to/your/asset.spz'];
// Load assets here...  
