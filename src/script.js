import * as THREE from 'three'
import { onLights } from './lights';
import { makeGeometry } from './geometry';
import { makeOrbit } from './orbit';
import './sass/index.scss';

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
    width: window.innerWidth - 185,
    height: window.innerHeight - 5
}

window.addEventListener('resize', () => {
    sizes.width = window.innerWidth - 185
    sizes.height = window.innerHeight - 5

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

let factor = 0.0008
document.getElementById('plus').addEventListener('click', function() {
    factor += 0.0004
})
document.getElementById('minus').addEventListener('click', function() {
    factor -= 0.0004
})

const tick = () => {
    const elapsedTime = clock.getElapsedTime()
    sphereMesh.rotation.y += factor
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()