const AudioContext = window.AudioContext || window.webkitAudioContext;
import Head from '../classes/Head';

let targetId, audioCtx;
const play = document.getElementById(`play_santa`);
const $audio = document.getElementById(`audio`);

let pitchShifterProcessor;
let isPlaying = false;
let grainSize = 512,
    pitchRatio = 1.0,
    overlapRatio = 0.50;

let url;

const handleSantaAudio = card => {
  audioCtx = new AudioContext();
  const audioSettings = JSON.parse(card.audioSettings);

  setTimeout(() => {
    if (!card.isFileEmpty) {
      url = `./uploads/${card.id}.ogg`;
    } else {
      url = `./assets/santa.ogg`;
    }
    const bufferLoader = new BufferLoader(
      audioCtx, [url], bufferList => {

        let loop = false;
        let source;

        const $repeat = document.getElementById(`repeat`);
        $repeat.addEventListener(`click`,  () => {
          if (loop) {
            $repeat.style.backgroundColor = 'rgba(113, 0, 24, 0.4)';
          } else {
            $repeat.style.backgroundColor = 'rgba(150, 0, 39, 1)';
          }

          loop = !loop;
          if (isPlaying) source.stop();
        });

        pitchRatio = audioSettings.pitch;
        overlapRatio = audioSettings.overlap;

        $audio.addEventListener(`click`, () => {
          isPlaying = true;
          source = '';
          source = audioCtx.createBufferSource();
          source.buffer = bufferList[0];
          source.loop = loop;
          if (!card.isFileEmpty) source.connect(pitchShifterProcessor);
          if (card.isFileEmpty) source.connect(audioCtx.destination);

          source.start();
        });

      }
    );

    bufferLoader.load();

    if (!card.isFileEmpty) initProcessor();

  }, 1000);
}

const linearInterpolation = (a, b, t) => {
  return a + (b - a) * t;
};

const initProcessor = () => {

  if (pitchShifterProcessor) {
    pitchShifterProcessor.disconnect();
  }

  if (audioCtx.createScriptProcessor) {
    pitchShifterProcessor = audioCtx.createScriptProcessor(grainSize, 1, 1);
  } else if (audioCtx.createJavaScriptNode) {
    pitchShifterProcessor = audioCtx.createJavaScriptNode(grainSize, 1, 1);
  }

  pitchShifterProcessor.buffer = new Float32Array(grainSize * 2);
  pitchShifterProcessor.grainWindow = hannWindow(grainSize);

  pitchShifterProcessor.onaudioprocess = function(event) {

    var inputData = event.inputBuffer.getChannelData(0);
    var outputData = event.outputBuffer.getChannelData(0);

    for (i = 0; i < inputData.length; i++) {

      // Apply the window to the input buffer
      inputData[i] *= this.grainWindow[i];

      // Shift half of the buffer
      this.buffer[i] = this.buffer[i + grainSize];

      // Empty the buffer tail
      this.buffer[i + grainSize] = 0.0;
    }

    // Calculate the pitch shifted grain re-sampling and looping the input
    var grainData = new Float32Array(grainSize * 2);
    for (var i = 0, j = 0.0; i < grainSize; i++, j += pitchRatio) {

      var index = Math.floor(j) % grainSize;
      var a = inputData[index];
      var b = inputData[(index + 1) % grainSize];
      grainData[i] += linearInterpolation(a, b, j % 1.0) * this.grainWindow[i];
    }

    // Copy the grain multiple times overlapping it
    for (i = 0; i < grainSize; i += Math.round(grainSize * (1 - overlapRatio))) {
      for (j = 0; j <= grainSize; j++) {
        this.buffer[i + j] += grainData[j];
      }
    }

    // Output the first half of the buffer
    for (i = 0; i < grainSize; i++) {
      outputData[i] = this.buffer[i];
    }
  };

  pitchShifterProcessor.connect(audioCtx.destination);

};

const hannWindow = length => {
  const window = new Float32Array(length);
  for (let i = 0; i < length; i++) {
      window[i] = 0.5 * (1 - Math.cos(2 * Math.PI * i / (length - 1)));
  }
  return window;
};

export default handleSantaAudio;
