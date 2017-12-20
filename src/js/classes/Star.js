import Colors from '../objects/colors';
class Star {
  constructor() {
    this.mesh = new THREE.Object3D();

    const pts = [],
      numPts = 5;
    for (let i = 0;i < numPts * 2;i ++) {
      const l = i % 2 === 1
        ? 1
        : 2;
      const a = i / numPts * Math.PI;
      pts.push(new THREE.Vector2(Math.cos(a) * l, Math.sin(a) * l));
    }
    const starShape = new THREE.Shape(pts);

    const extrudeSettings = {
      amount: 0.5,
      steps: 1,
      bevelEnabled: false
    };
    const starGeom = new THREE.ExtrudeGeometry(starShape, extrudeSettings);
    const mat = new THREE.MeshLambertMaterial({color: Colors.glasses, flatShading: true});
    const star = new THREE.Mesh(starGeom, mat);
    star.rotation.x = Math.PI / 2;
    this.mesh.add(star);
  }
}

export default Star;
