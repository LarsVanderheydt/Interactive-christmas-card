const AudioContext = window.AudioContext || window.webkitAudioContext;
import handleSantaAudio from './objects/handleSantaAudio';
import SantaScene from './classes/SantaScene';
import getUrlParameter from './objects/getUrlParameter';
import CardAPI from './lib/cardAPI';

let audioCtx, santa;

const init = () => {
  particlesJS.load('particles-js', '../assets/particles.json');

  santa = new SantaScene();
  santa.errorText();

  // create shapes araound head
  // options:
      // 'hearts' (default)
      // 'stars'
  santa.createShapes();

  loop();
}

const loop = () => {
  santa.loop();
  santa.startSpinning();
  requestAnimationFrame(loop);
}

init();
