import SantaScene from './classes/SantaScene';

let santaScene;

const init = () => {
  particlesJS.load(`particles-js`, `../assets/particles.json`);

  santaScene = new SantaScene();
  santaScene.errorText();

  // create shapes araound head
  // options:
  // 'hearts' (default)
  // 'stars'
  santaScene.createShapes(`stars`);

  loop();
};

const loop = () => {
  santaScene.startSpinning();
  santaScene.recieverState();
  santaScene.render();
  requestAnimationFrame(loop);
};

init();
