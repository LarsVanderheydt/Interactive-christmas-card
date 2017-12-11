import Colors from './colors';
// let skinMat = new THREE.MeshLambertMaterial({color: Colors.skin, flatShading: true});
// let skin2Mat = new THREE.MeshLambertMaterial({color: Colors.skin, flatShading: true});
// let auburnMat = new THREE.MeshLambertMaterial({color: Colors.auburn, flatShading: true});
// let brownMat = new THREE.MeshLambertMaterial({color: Colors.brown, flatShading: true});
// let blackMat = new THREE.MeshLambertMaterial({color: Colors.black, flatShading: true});
// let whiteMat = new THREE.MeshPhongMaterial({color: Colors.white, flatShading: true});
// let blueMat = new THREE.MeshPhongMaterial({color: Colors.lightBlue, flatShading: true});
// let beigeMat = new THREE.MeshPhongMaterial({color: Colors.beige, flatShading: true});
// let yellowMat = new THREE.MeshPhongMaterial({color: Colors.yellow, flatShading: true});
// let normalMat = new THREE.MeshNormalMaterial({});

const Materials = {
  "skinMat": new THREE.MeshLambertMaterial({color: Colors.skin, flatShading: true}),
  "skin2Mat": new THREE.MeshLambertMaterial({color: Colors.skin2, flatShading: true}),
  "whiteMat": new THREE.MeshLambertMaterial({color: Colors.white, flatShading: true}),
  "goldMat": new THREE.MeshLambertMaterial({color: Colors.gold, flatShading: true}),
  "teethMat": new THREE.MeshPhongMaterial({color: Colors.teeth, flatShading: true}),
  "beigeMat": new THREE.MeshPhongMaterial({color: Colors.beige, flatShading: true}),
  "brownMat": new THREE.MeshLambertMaterial({color: Colors.brown, flatShading: true}),
  "blackMat": new THREE.MeshLambertMaterial({color: Colors.black, flatShading: true}),
  "blueMat": new THREE.MeshPhongMaterial({color: Colors.lightBlue, flatShading: true}),
  "yellowMat": new THREE.MeshPhongMaterial({color: Colors.yellow, flatShading: true}),
  "redMat": new THREE.MeshPhongMaterial({color: Colors.red, flatShading: true}),
  "normalMat": new THREE.MeshNormalMaterial({})
};

export default Materials;
