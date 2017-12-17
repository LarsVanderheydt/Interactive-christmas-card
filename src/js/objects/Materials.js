import Colors from './colors';
const Materials = {
  "whiteMat": new THREE.MeshLambertMaterial({color: Colors.white, flatShading: true}),
  "teethMat": new THREE.MeshPhongMaterial({color: Colors.teeth, flatShading: true}),
  "blackMat": new THREE.MeshLambertMaterial({color: Colors.black, flatShading: true}),
  "normalMat": new THREE.MeshNormalMaterial({})
};

export default Materials;
