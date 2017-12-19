import Colors from '../objects/colors';
import Star from './Star';
import Heart from './Heart';
let group;
let starArray = [];

class HeartsGroup {
  constructor(type) {
    this.mesh = new THREE.Object3D();
    this.nStars = 15;

    let stepAngle = Math.PI * 2 / this.nStars;

     // Create the Stars
    for (let i = 0; i < this.nStars; i++) {

      switch (type) {
        case 'stars':
        this.s = new Star();
          break;
        case 'hearts':
        this.s = new Heart();
          break;
      }

      let a = stepAngle * i;
      let r = 15;

      this.s.mesh.position.y = Math.sin(a) * r;
      this.s.mesh.position.x = Math.cos(a) * r;

      this.s.mesh.rotation.z = a + Math.PI / 2;
      this.s.mesh.position.z = 0 - Math.random() * 3;

        // random scale for each cloud
      let sc = 0.5 + Math.random() * .6;
      this.s.mesh.scale.set(sc, sc, sc);

      this.mesh.add(this.s.mesh);
      starArray.push(this.s);
    }

    this.mesh.rotation.x = Math.PI / 2;
    this.mesh.position.x = -22;
    this.mesh.position.y = 8;
  }

  spinScale() {
    this.mesh.rotation.z += 0.012;
    for (let i = 0; i < starArray.length; i++) {
      starArray[i].mesh.rotation.z += 0 - Math.random() * 0.10;
      starArray[i].mesh.rotation.x += 0 - Math.random() * 0.05;
    }
  }
}

export default HeartsGroup;
