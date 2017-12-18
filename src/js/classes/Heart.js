class Heart {
  constructor() {
    this.mesh = new THREE.Object3D();

    const x = 0, y = 0;
    const heartShape = new THREE.Shape();

    heartShape.moveTo(x + 25, y + 25);
    heartShape.bezierCurveTo(x + 25, y + 25, x + 20, y, x, y);
    heartShape.bezierCurveTo(x - 30, y, x - 30, y + 35, x - 30, y + 35);
    heartShape.bezierCurveTo(x - 30, y + 55, x - 10, y + 77, x + 25, y + 95);
    heartShape.bezierCurveTo(x + 60, y + 77, x + 80, y + 55, x + 80, y + 35);
    heartShape.bezierCurveTo(x + 80, y + 35, x + 80, y, x + 50, y);
    heartShape.bezierCurveTo(x + 35, y, x + 25, y + 25, x + 25, y + 25);

    const extrudeSettings = {
      amount: 20,
      bevelEnabled: true,
      bevelSegments: 2,
      steps: 2,
      bevelSize: 1,
      bevelThickness: 1
    };

    this.addShape(heartShape, extrudeSettings, 0xf9c421, 0, 0, 0, 0, 1, Math.PI, 0.03);
  }


  addShape(shape, extrudeSettings, color, x, y, z, rx, ry, rz, s) {
    // extruded shape

    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);

    const mesh = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({color: color}));
    mesh.position.set(x, y, z);
    mesh.rotation.set(rx, ry, rz);
    mesh.scale.set(s, s, s);
    this.mesh.add(mesh);
  }
}

export default Heart;
