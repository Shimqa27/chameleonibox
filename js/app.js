import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const container = document.getElementById("viewer");

const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x020611, 12, 30);

const camera = new THREE.PerspectiveCamera(
    45,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
);

// ИЗМЕНЕНО: приблизили камеру
camera.position.set(0, 0, 7);

const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.shadowMap.enabled = true;
container.appendChild(renderer.domElement);

// Свет
scene.add(new THREE.AmbientLight(0xffffff, 2));

const keyLight = new THREE.DirectionalLight(0xffffff, 4);
keyLight.position.set(5, 8, 5);
keyLight.castShadow = true;
scene.add(keyLight);

const blueLight = new THREE.PointLight(0x3b82ff, 40, 20);
blueLight.position.set(0, 2, 3);
scene.add(blueLight);

const backLight = new THREE.PointLight(0x2c6cff, 20, 20);
backLight.position.set(0, -3, -5);
scene.add(backLight);

// Orbit Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableRotate = false;
controls.enableZoom = false;
controls.enablePan = false;

// Модель
let model;
const loader = new GLTFLoader();

loader.load(
    "./models/chameleon.glb",
    (gltf) => {
        model = gltf.scene;
        
        // ИЗМЕНЕНО: увеличен масштаб
        model.scale.set(
            4,   // Увеличили
            4,   // Увеличили
            4    // Увеличили
        );
        
        model.position.set(0, 0, 0);
        
        model.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });
        
        scene.add(model);
        console.log("✅ Модель загружена!");
    },
    (xhr) => {
        console.log(Math.round((xhr.loaded / xhr.total) * 100) + "%");
    },
    (error) => {
        console.error("❌ Ошибка:", error);
    }
);

// Mouse Parallax
let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (event) => {
    mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
});

const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);
    
    const t = clock.getElapsedTime();
    
    if (model) {
        model.rotation.y += 0.003;
        model.rotation.x = Math.sin(t * 0.4) * 0.04;
        model.rotation.z = Math.sin(t * 0.25) * 0.02;
        model.position.y = Math.sin(t * 1.2) * 0.08;
    }
    
    camera.position.x += ((mouseX * 0.35) - camera.position.x) * 0.03;
    camera.position.y += ((-mouseY * 0.25) - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);
    
    blueLight.intensity = 35 + Math.sin(t * 2) * 5;
    
    renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", () => {
    const width = container.clientWidth;
    const height = container.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
});

// Fade in
renderer.domElement.style.opacity = 0;
let opacity = 0;

function fadeIn() {
    opacity += 0.02;
    renderer.domElement.style.opacity = opacity;
    if (opacity < 1) {
        requestAnimationFrame(fadeIn);
    }
}
fadeIn();
document.addEventListener('DOMContentLoaded', function() {

    const burgerMenu = document.getElementById('burgerMenu');
    const navMenu = document.getElementById('navMenu');
    
    // Создаем оверлей только если есть бургер
    if (burgerMenu) {
        const overlay = document.createElement('div');
        overlay.className = 'menu-overlay';
        document.body.appendChild(overlay);

        function toggleMenu() {
            burgerMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
            overlay.classList.toggle('active');
            
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        }

        burgerMenu.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);

        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    toggleMenu();
                }
            });
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });

        // Автоматически закрываем меню при ресайзе на десктоп
        window.addEventListener('resize', () => {
            if (window.innerWidth > 1100 && navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    }

});