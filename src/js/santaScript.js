const AudioContext = window.AudioContext || window.webkitAudioContext;
import handleSantaAudio from './objects/handleSantaAudio';
import santaScene from './objects/santaPageScene';
import getUrlParameter from './objects/getUrlParameter';
import CartAPI from './lib/cartAPI';

let targetId, audioCtx;

const init = () => {

  particlesJS.load('particles-js', '../assets/particles.json', () => {
    console.log('callback - particles.js config loaded');
  });

  targetId = getUrlParameter("id");
  if (!targetId) window.location = "https://localhost:8080";

  CartAPI.readOne(targetId).then(d => {
    if (d.statusCode) window.location = "https://localhost:8080";
    document.getElementById(`from`).innerHTML = `from: ${d.from}`;
    document.getElementById(`to`).innerHTML = `to: ${d.to}`;

    handleSantaAudio(d);
    santaScene(d);
  });

}

init();
