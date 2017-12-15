const AudioContext = window.AudioContext || window.webkitAudioContext;
import getUrlParameter from './objects/getUrlParameter'; 
import CartAPI from './lib/cartAPI';
import Head from './classes/Head';

let targetId, audioCtx;
const play = document.getElementById(`play_santa`);

const init = () => {
  audioCtx = new AudioContext();
  targetId = getUrlParameter("id");
  if (!targetId) window.location = "https://localhost:8080";

  CartAPI.readOne(targetId).then(d => {
    if (d.statusCode) window.location = "https://localhost:8080";
    document.getElementById(`name`).innerHTML = d.name;
    document.getElementById(`santa_audio`).src = `./uploads/${d.sound}.ogg`;
  });
}

init();
