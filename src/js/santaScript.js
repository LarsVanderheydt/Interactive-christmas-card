const AudioContext = window.AudioContext || window.webkitAudioContext;
import handleSantaAudio from './objects/handleSantaAudio';
import santaScene from './objects/santaPageScene';
import getUrlParameter from './objects/getUrlParameter';
import CardAPI from './lib/cardAPI';

let targetId, audioCtx;

const init = () => {

  particlesJS.load('particles-js', '../assets/particles.json', () => {
    console.log('callback - particles.js config loaded');
  });

  targetId = getUrlParameter("id");
  if (!targetId) window.location = "https://experimentalweb.herokuapp.com/";

  CardAPI.readOne(targetId).then(d => {
    if (d.statusCode) window.location = "https://experimentalweb.herokuapp.com/";
    document.getElementById(`from`).innerHTML = `from: ${d.from}`;
    document.getElementById(`to`).innerHTML = `to: ${d.to}`;

    handleSantaAudio(d);
    santaScene(d);
  });

}

init();
