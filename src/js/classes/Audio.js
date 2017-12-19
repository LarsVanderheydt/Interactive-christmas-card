import SoundAPI from '../lib/soundAPI';
import shortId from 'shortid';

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
const AudioContext = window.AudioContext || window.webkitAudioContext;

let audioCtx, recognition;
let transcript = "";
let audioChunks = [];
let source;

const $text = document.getElementById(`field`);
const $record = document.getElementById(`record`);
const $audio = document.getElementById(`audio_controls`);
const $stop = document.getElementById(`stop`);

let audioSources = [],
    pitchShifterProcessor;
let loop = false;
let grainSize = 512,
    pitchRatio = 1.0,
    overlapRatio = 0.50;

export default class Audio {
  constructor() {
    this.id = shortId.generate();
    this.pitchRatio = 1.0;
    this.overlap = 0.50;
    audioCtx = new AudioContext();
    this.isFileEmpty = true;
    this.txt = "";

    // handle SpeechRecognition
    recognition = new SpeechRecognition();
    this.speechSettings();

    recognition.onresult = event => this.gotResult(event);
    recognition.onspeechend = e => this.onSpeechEnd(e);
    $text.addEventListener(`blur`, () => {
      this.txt = $text.value;
    });

    navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
      this.mediaRecorder = new MediaRecorder(stream);

      /*--------------------Start Recording-----------------------*/
      $record.addEventListener(`click`, () => {
        this.isFileEmpty = false;
        this.mediaRecorder.start();
        recognition.start();
        $record.disabled = true;
      });
      /*----------------------------------------------------------*/

      this.mediaRecorder.addEventListener(`dataavailable`,  e => {
        audioChunks.push(e.data);
      }); // add audiochunk to array

      // when mediaRecorder stops, make and handle audio blob
      this.mediaRecorder.addEventListener(`stop`, () => {
        // give link to audio controls to play and control the sound
        this.blob = new Blob(audioChunks, {type : 'audio/ogg'}); // create blob from audiochunks

        SoundAPI.create({
          id: this.id,
          blob: this.blob
        });

        setTimeout(() => {
          const bufferLoader = new BufferLoader(
            audioCtx, [`./uploads/${this.id}.ogg`], bufferList => {
              // to avoid overlapping previous sound, empty bufferList when trying again
              $record.addEventListener(`click`, () => bufferList = []);

              // trigger loop
              const $repeat = document.getElementById(`repeat`)
              $repeat.addEventListener(`click`,  () => {
                if (loop) {
                  $repeat.style.backgroundColor = 'rgba(113, 0, 24, 0.4)';
                } else {
                  $repeat.style.backgroundColor = 'rgba(150, 0, 39, 1)';
                }
                loop = !loop;
                source.stop();
              });

              // pitch value
              const $pitch = document.getElementById(`pitch`);
              $pitch.addEventListener(`change`, () => {
                pitchRatio = parseFloat($pitch.value);
                this.pitchRatio = pitchRatio;
              });

              // play modified sound
              $audio.addEventListener(`click`, () => {
                source = '';
                source = audioCtx.createBufferSource();
                source.buffer = bufferList[0];
                source.connect(pitchShifterProcessor);
                source.loop = loop;
                source.start();
              });
            }
          );

          bufferLoader.load();
          this.initProcessor();

        }, 1000);

        // set sound filter overlap
        const overlap = document.getElementById(`overlap`);
        overlap.addEventListener(`change`, () => {
          overlapRatio = overlap.value;
          this.overlap = overlapRatio;
        });

        audioChunks = [];
      });
    });
  }

  onSpeechEnd(e) {
    $record.disabled = false;
    $record.textContent = 'Want to try again?';
    this.txt = $text.value;
    this.mediaRecorder.stop();
    recognition.stop();
  }

  gotResult(event) {
    const last = event.results.length - 1;
    transcript = event.results[last][0].transcript;
    $text.value = transcript;
  }

  speechSettings() {
    recognition.continuous = false;
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
  }

  initProcessor() {

    const linearInterpolation = (a, b, t) => {
      return a + (b - a) * t;
    };

    if (pitchShifterProcessor) {
      pitchShifterProcessor.disconnect();
    }

    if (audioCtx.createScriptProcessor) {
      pitchShifterProcessor = audioCtx.createScriptProcessor(grainSize, 1, 1);
    } else if (audioCtx.createJavaScriptNode) {
      pitchShifterProcessor = audioCtx.createJavaScriptNode(grainSize, 1, 1);
    }

    pitchShifterProcessor.buffer = new Float32Array(grainSize * 2);
    pitchShifterProcessor.grainWindow = this.hannWindow(grainSize);

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

  hannWindow(length) {
    const window = new Float32Array(length);
    for (let i = 0; i < length; i++) {
        window[i] = 0.5 * (1 - Math.cos(2 * Math.PI * i / (length - 1)));
    }
    return window;
  };
};
