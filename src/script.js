import * as THREE from 'three'

const canvas = document.querySelector('canvas.webgl')
const scene = new THREE.Scene()
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);

const material = new THREE.MeshBasicMaterial()
material.color = new THREE.Color(0xff0000)

const sphereMesh = THREE.Mesh(sphereGeometry, material)
scene.add(sphereMesh)

alert('Still alive!')
