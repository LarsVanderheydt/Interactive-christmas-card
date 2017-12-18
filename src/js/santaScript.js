const AudioContext = window.AudioContext || window.webkitAudioContext;
import handleSantaAudio from './objects/handleSantaAudio';
import SantaScene from './classes/SantaScene';
import getUrlParameter from './objects/getUrlParameter';
import CardAPI from './lib/cardAPI';

let targetId, audioCtx, santa;

const init = () => {

  particlesJS.load('particles-js', '../assets/particles.json');

  targetId = getUrlParameter("id");
  if (!targetId) window.location = "https://experimentalweb.herokuapp.com/";

  CardAPI.readOne(targetId).then(d => {
    if (d.statusCode) window.location = "https://experimentalweb.herokuapp.com/";
    document.getElementById(`from`).innerHTML = `from: ${d.from}`;
    document.getElementById(`to`).innerHTML = `to: ${d.to}`;

    santa = new SantaScene();
    santa.setColors(d);

    handleSantaAudio(d);

    loop();
  });
}

const loop = () => {
  santa.loop();
  requestAnimationFrame(loop);
}

init();
