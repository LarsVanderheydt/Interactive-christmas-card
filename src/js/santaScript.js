const AudioContext = window.AudioContext || window.webkitAudioContext;
import CartAPI from './lib/cartAPI';

let targetId, audioCtx;
const play = document.getElementById(`play_santa`);

const init = () => {
  audioCtx = new AudioContext();
  targetId = getUrlParameter("id");
  if (!targetId) window.location = "https://localhost:8080";

  CartAPI.readOne(targetId).then(d => {
    if (d.statusCode) {
      window.location = "https://localhost:8080";
    } else {
      document.getElementById(`title`).innerHTML = d.from;
      document.getElementById(`santa_audio`).src = `./uploads/${d.sound}.ogg`;
    }
  });
}

const loadArrayBuffer = arrayBuffer => {
  const source = audioCtx.createBufferSource();

  audioCtx.decodeAudioData(arrayBuffer, buffer => {
    source.buffer = buffer;
    source.connect(audioCtx.destination);

    /*---------------Play arrayBuffer-----------------*/
    play.addEventListener(`click`, () => source.start());
    /*------------------------------------------------*/

  },
  e => { console.log("Error with decoding audio data" + e.err); });
}

const getUrlParameter = name => {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  const results = regex.exec(location.search);
  return results === null ? false : decodeURIComponent(results[1].replace(/\+/g, ' '));
};


init();
