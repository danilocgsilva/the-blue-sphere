import * as THREE from 'three'

export function makeGeometry(scene) {
    const geometry = new THREE.SphereGeometry(1, 192, 96);
    const material = new THREE.MeshPhongMaterial({ map: THREE.ImageUtils.loadTexture('/images/world.topo.bathy.200404.3x2600x1350.png') })
    material.color = new THREE.Color(0xffffff)
    const sphere = new THREE.Mesh(geometry, material)
    scene.add(sphere)
    return sphere
}
