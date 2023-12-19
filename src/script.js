import * as THREE from 'three'
import { onLights } from './lights';
import { makeGeometry } from './geometry';
import { makeOrbit } from './orbit';

const canvas = document.querySelector('canvas.webgl')

const scene = new THREE.Scene()
const texture = new THREE.TextureLoader().load( "/images/pexels-photo-207529-2.jpeg" )
texture.wrapS = THREE.RepeatWrapping
texture.wrapT = THREE.RepeatWrapping
texture.repeat.set( 1, 1 )
scene.background = texture

const sphereMesh = makeGeometry(scene)

onLights(scene)

const sizes = {
    width: window.innerWidth - 200,
    height: window.innerHeight - 20
}

window.addEventListener('resize', () => {
    sizes.width = window.innerWidth - 200
    sizes.height = window.innerHeight - 20

    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

const camera = new THREE.PerspectiveCamera(
    45, 
    sizes.width / sizes.height, 
    0.1, 
    100
)
camera.position.x = 0
camera.position.y = 1
camera.position.z = 4
camera.rotation.x = -0.3
scene.add(camera)

const gridHelper = new THREE.GridHelper(3, 15);
gridHelper.position.y = -1
scene.add(gridHelper)

makeOrbit(sphereMesh, scene, camera)

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

const clock = new THREE.Clock()

const tick = () => {
    const elapsedTime = clock.getElapsedTime()
    sphereMesh.rotation.y = .2 * elapsedTime
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()