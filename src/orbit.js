import * as THREE from 'three'

export function makeOrbit(sphereMesh, scene, camera) {

    const whileMove = function (e) {
        if (e.which == 2) {
            let scale = -0.001;
            orbit.rotateY(e.movementX * scale);
            orbit.rotateX(e.movementY * scale);
            orbit.rotation.z = 0; //this is important to keep the camera level..
        }
    }

    document.addEventListener('mousemove', whileMove)
    
    let orbit = new THREE.Object3D();
    orbit.rotation.order = "YXZ"; //this is important to keep level, so Z should be the last axis to rotate in order...
    orbit.position.copy( sphereMesh.position );
    scene.add(orbit);
    
    orbit.add(camera);
}
