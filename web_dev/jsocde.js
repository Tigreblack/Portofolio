import * as THREE from "https://unpkg.com/three@0.160.0/build/three.module.js";

/* ================== SCENE ================== */

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 40;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(0x000000, 1);
document.body.appendChild(renderer.domElement);

/* ================== FOG (DEPTH) ================== */

scene.fog = new THREE.Fog(0x000000, 20, 120);

/* ================== STAR FIELD ================== */

const starCount = 2500;
const geometry = new THREE.BufferGeometry();
const positions = new Float32Array(starCount * 3);

for (let i = 0; i < starCount * 3; i++) {
  positions[i] = (Math.random() - 0.5) * 200;
}

geometry.setAttribute(
  "position",
  new THREE.BufferAttribute(positions, 3)
);

const material = new THREE.PointsMaterial({
  color: 0xffffff,
  size: 0.7,
  transparent: true,
  opacity: 0.9,
  depthWrite: false
});

const stars = new THREE.Points(geometry, material);
scene.add(stars);

/* ================== LIGHT AMBIANCE ================== */

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

/* ================== SMOOTH COLOR TRANSITION ================== */

let currentBg = new THREE.Color(0x000000);
let targetBg = new THREE.Color(0x000000);

let currentStar = new THREE.Color(0xffffff);
let targetStar = new THREE.Color(0xffffff);

function setTheme(bgHex, starHex) {
  targetBg.setHex(bgHex);
  targetStar.setHex(starHex);
}

/* ================== HOVER CARDS ================== */

const cards = document.querySelectorAll(".tile");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    const bg = Number(card.dataset.bg);
    const star = Number(card.dataset.star);
    setTheme(bg, star);
  });
});

/* ================== ANIMATION LOOP ================== */

function animate() {
  requestAnimationFrame(animate);

  // rotation lente pour effet depth
  stars.rotation.y += 0.0005;

  // interpolation smooth couleurs
  currentBg.lerp(targetBg, 0.05);
  currentStar.lerp(targetStar, 0.05);

  renderer.setClearColor(currentBg);
  stars.material.color.copy(currentStar);
  scene.fog.color.copy(currentBg);

  renderer.render(scene, camera);
}

animate();

/* ================== RESIZE ================== */

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});