async function main() {
    const info = document.getElementById('info');

    // jsDelivrからモジュールをロード（正しいURL）
    const THREE = await import('https://cdn.jsdelivr.net/npm/three@0.178.0/build/three.module.js');
    const OrbitControlsModule = await import('https://cdn.jsdelivr.net/npm/three@0.178.0/examples/jsm/controls/OrbitControls.js');
    const SparkModule = await import('https://sparkjs.dev/releases/spark/0.1.10/spark.module.js');
    
    const OrbitControls = OrbitControlsModule.OrbitControls;
    const SplatMesh = SparkModule.SplatMesh;

    const renderer = new THREE.WebGLRenderer({ antialias: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    document.body.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(3, -9, -7); // カメラ初期位置
    camera.up.set(0, -1, 0); // Y軸を上方向に設定（反転）
    camera.lookAt(1, -3.5, 1); // ターゲットを向く
    
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(1, -3.5, 1); // ターゲット位置を設定
    controls.enableDamping = false; // ダンピングを無効化（移動は触った時だけ）
    controls.autoRotate = false;
    controls.enablePan = true;
    controls.minPolarAngle = 0; // 上側から見える（制限なし）
    controls.maxPolarAngle = Math.PI; // 下側から見える（制限なし）
    controls.enableZoom = true;
    controls.update(); // ターゲット変更を反映

    try {
        console.log('🚀 Sparkエンジンの初期化を開始...');
        
        const splatURL = '/assets/splats/Taranis2_1.sog';
        const splatMesh = new SplatMesh({ 
            url: splatURL,
            shDegree: 3  // SH係数を有効化（度数3 = より詳細な視点依存色）
        });
        scene.add(splatMesh);
        
        info.innerText = '操作方法\n☝️1本指：回転\n👆️2本指：ズーム';
        console.log('✅ Success: Model attached to scene');

        renderer.setAnimationLoop(() => {
            controls.update();
            renderer.render(scene, camera);
        });

    } catch (err) {
        info.innerText = '❌ エラーが発生しました。コンソールを確認してください。';
        console.error('Fatal Error:', err);
    }
    
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

main();