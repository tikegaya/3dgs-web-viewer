# 3DGS Web Viewer

## Project Overview
This project provides a web viewer for 3D graphics utilizing modern web technologies. It leverages the power of Three.js for rendering, Spark Renderer for efficient handling of graphics, and Vite for a fast development experience.

## Installation Instructions
1. Clone the repository:
   ```
   git clone https://github.com/tikegaya/3dgs-web-viewer.git
   ```
2. Navigate into the project directory:
   ```
   cd 3dgs-web-viewer
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```

## File Structure Documentation
- `src/` - Contains the source code of the application.
  - `components/` - React components used in the application.
  - `assets/` - Static assets such as images and 3D models.
  - `styles/` - CSS & styling files.
- `public/` - Contains static files that are served directly.
- `index.html` - The main HTML file.
- `vite.config.js` - Configuration file for Vite.

## Technology Stack
- **Three.js** - A JavaScript library that simplifies the creation of 3D graphics.
- **Spark Renderer** - Optimizes the rendering process to provide a better performance.
- **Vite** - A modern build tool that provides a fast development environment.

## Asset Loading Instructions
To load assets in the project, ensure all your files are placed in the `src/assets` directory. Use the following code snippet to load a 3D model:
```javascript
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const loader = new GLTFLoader();
loader.load('path/to/model.glb', (gltf) => {
    scene.add(gltf.scene);
});
```