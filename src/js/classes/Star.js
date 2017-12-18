import Colors from '../objects/colors'; 
class Star {
  constructor() {
    // STAR
    //////////////////////////////////
    this.mesh = new THREE.Object3D();

    let pts = [],
      numPts = 5;
    for (let i = 0; i < numPts * 2; i++) {
      let l = i % 2 == 1
        ? 1
        : 2;
      let a = i / numPts * Math.PI;
      pts.push(new THREE.Vector2(Math.cos(a) * l, Math.sin(a) * l));
    }
    let starShape = new THREE.Shape(pts);

    let extrudeSettings = {
      amount: 0.5,
      steps: 1,
      bevelEnabled: false
    };
    let starGeom = new THREE.ExtrudeGeometry(starShape, extrudeSettings);
    let mat = new THREE.MeshLambertMaterial({color: Colors.black, flatShading: true})
    let star = new THREE.Mesh(starGeom, mat);
    star.rotation.x = Math.PI / 2;
    this.mesh.add(star);
  }
}

export default Star;
