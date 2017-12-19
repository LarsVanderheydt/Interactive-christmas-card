const AudioContext = window.AudioContext || window.webkitAudioContext;
import handleSantaAudio from './objects/handleSantaAudio';
import SantaScene from './classes/SantaScene';
import getUrlParameter from './objects/getUrlParameter';
import CardAPI from './lib/cardAPI';

let audioCtx, santaScene;

const init = () => {
  particlesJS.load('particles-js', '../assets/particles.json');

  santaScene = new SantaScene();
  santaScene.errorText();

  // create shapes araound head
  // options:
      // 'hearts' (default)
      // 'stars'
  santaScene.createShapes('stars');

  loop();
}

const loop = () => {
  santaScene.startSpinning();
  santaScene.recieverState();
  santaScene.render();
  requestAnimationFrame(loop);
}

init();
