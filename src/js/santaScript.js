const AudioContext = window.AudioContext || window.webkitAudioContext;
import CartAPI from './lib/cartAPI';
import Head from './classes/Head';

let targetId, audioCtx;
const play = document.getElementById(`play_santa`);

const init = () => {
  audioCtx = new AudioContext();
  targetId = getUrlParameter("id");
  if (!targetId) window.location = "https://localhost:8080";

  CartAPI.readOne(targetId).then(d => {
    console.log(d);
    if (d.statusCode) {
      window.location = "https://localhost:8080";
    } else {
      document.getElementById(`name`).innerHTML = d.name;
      document.getElementById(`santa_audio`).src = `./uploads/${d.sound}.ogg`;
    }
  });
}

const getUrlParameter = name => {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  const results = regex.exec(location.search);
  return results === null ? false : decodeURIComponent(results[1].replace(/\+/g, ' '));
};



init();
