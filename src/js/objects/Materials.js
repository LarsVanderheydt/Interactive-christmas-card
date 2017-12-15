import Colors from './colors';
// let skinMat = new THREE.MeshLambertMaterial({color: Colors.skin, flatShading: true});
// let frecklesMat = new THREE.MeshLambertMaterial({color: Colors.freckles, flatShading: true});
// let auburnMat = new THREE.MeshLambertMaterial({color: Colors.auburn, flatShading: true});
// let brownMat = new THREE.MeshLambertMaterial({color: Colors.brown, flatShading: true});
// let blackMat = new THREE.MeshLambertMaterial({color: Colors.black, flatShading: true});
// let whiteMat = new THREE.MeshPhongMaterial({color: Colors.white, flatShading: true});
// let eyesMat = new THREE.MeshPhongMaterial({color: Colors.eyes, flatShading: true});
// let beigeMat = new THREE.MeshPhongMaterial({color: Colors.beige, flatShading: true});
// let normalMat = new THREE.MeshNormalMaterial({});
const Materials = {
  //"skinMat": new THREE.MeshLambertMaterial({color: Colors.skin, flatShading: true}),
  //"frecklesMat": new THREE.MeshLambertMaterial({color: Colors.freckles, flatShading: true}),
  "whiteMat": new THREE.MeshLambertMaterial({color: Colors.white, flatShading: true}),
  //"glassesMat": new THREE.MeshLambertMaterial({color: Colors.glasses, flatShading: true}),
  "teethMat": new THREE.MeshPhongMaterial({color: Colors.teeth, flatShading: true}),
  "brownMat": new THREE.MeshLambertMaterial({color: Colors.brown, flatShading: true}),
  "blackMat": new THREE.MeshLambertMaterial({color: Colors.black, flatShading: true}),
  //"eyeMat": new THREE.MeshPhongMaterial({color: Colors.eye, flatShading: true}),
  //"hatMat": new THREE.MeshPhongMaterial({color: Colors.hat, flatShading: true}),
  "normalMat": new THREE.MeshNormalMaterial({})
};

export default Materials;
