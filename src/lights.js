import * as THREE from 'three'

export function onLights(scene) {
    const pointLight = new THREE.PointLight(0xffffff, 1)
    pointLight.position.x = 2
    pointLight.position.y = 3
    pointLight.position.z = 4
    scene.add(pointLight)
}
