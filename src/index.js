const THREE = require('three');

const width = window.innerWidth;
const height = window.innerHeight;

const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(10, 10, 10);
const material = new THREE.MeshLambertMaterial({ color: 'red' });
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

const light = new THREE.PointLight('#fff', 1);
light.position.set(0, 0, 100);

scene.add(light);

const camera = new THREE.PerspectiveCamera(30, width / height, 1, 1000);
camera.position.z = 100;

const animate = () => {
  requestAnimationFrame(animate);

  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;
  renderer.render(scene, camera);
};

animate();
