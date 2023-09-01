<script setup lang="ts">
import { ref, onMounted } from 'vue';
const canvas = ref(null);
import * as THREE from 'three';
const scene = new THREE.Scene();
const geometry = new THREE.BoxGeometry(20, 20, 20);
const material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
});
const mesh = new THREE.Mesh(geometry, material);
mesh.position.set(0, 10, 0);
scene.add(mesh);
const width = window.innerWidth;
const height = window.innerHeight;
const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000);
camera.position.set(200, 200, 200);
camera.lookAt(mesh.position);
const renderer = new THREE.WebGLRenderer({
  antialias: true,
});
renderer.setSize(width, height);
function animate() {
  requestAnimationFrame(animate);
  renderer.clear();
  mesh.rotation.y += 0.002;
  renderer.render(scene, camera);
}
window.onresize = function () {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
};
onMounted(() => {
  animate();
  canvas.value.appendChild(renderer.domElement);
});
</script>

<template>
  <div class="app" ref="canvas"></div>
</template>
