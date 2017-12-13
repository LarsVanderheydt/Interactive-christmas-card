const AudioContext = window.AudioContext || window.webkitAudioContext;
import bufferToArrayBuffer from 'buffer-to-arraybuffer';
import CartAPI from './lib/cartAPI';

let targetId, audioCtx;
const play = document.getElementById(`play_santa`);

const init = () => {
  audioCtx = new AudioContext();
  targetId = getUrlParameter("id");
  if (!targetId) {
    alert('missing id');
    return;
  }

  CartAPI.readOne(targetId).then(d => {
    if (d.statusCode) {
      console.log('something went terribly wrong ehzeg!');
    } else {
      console.log('something went terribly right ehzeg!');
      console.log(d);
      document.getElementById(`title`).innerHTML = d.from;

      const audio = new bufferToArrayBuffer(d.sound);
      console.log(audio);
      loadArrayBuffer(audio);
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
