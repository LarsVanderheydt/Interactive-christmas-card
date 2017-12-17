import SoundAPI from '../lib/soundAPI';
import shortId from 'shortid';

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
const AudioContext = window.AudioContext || window.webkitAudioContext;

let audioCtx, recognition;
let transcript = "";
let audioChunks = [];

const $text = document.getElementById(`field`);
const $record = document.getElementById(`record`);
const $audio = document.getElementById(`audio_controls`);
const $stop = document.getElementById(`stop`);

let audioSources = [],
    pitchShifterProcessor;

let audioSourceIndex = 0,
    audioVisualisationIndex = 0,
    validGranSizes = [256, 512, 1024, 2048, 4096, 8192],
    grainSize = validGranSizes[2],
    pitchRatio = 1.0,
    overlapRatio = 0.50;

const id = shortId.generate();

export default class Audio {
  constructor() {
    this.id = id;
    // handle SpeechRecognition
    recognition = new SpeechRecognition();
    this.speechSettings();

    recognition.onresult = event => this.gotResult(event);
    recognition.onspeechend = e => this.onSpeechEnd(e);
    $text.addEventListener(`blur`, () => this.txt = $text.value);

    navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
      this.mediaRecorder = new MediaRecorder(stream);

      /*--------------------Start Recording-----------------------*/
      $record.addEventListener(`click`, () => {
         this.mediaRecorder.start();
         recognition.start();
         $record.disabled = true;
      });
      /*----------------------------------------------------------*/

      this.mediaRecorder.addEventListener(`dataavailable`,  e => audioChunks.push(e.data)); // add audiochunk to array

      // when mediaRecorder stops, make and handle audio blob
      this.mediaRecorder.addEventListener(`stop`, () => {

        // give link to audio controls to play and control the sound
        this.blob = new Blob(audioChunks, {type : 'audio/ogg'}); // create blob from audiochunks
        // const blobUrl = URL.createObjectURL(this.blob); // make url from blob stream
        // $audio.src = blobUrl;

        SoundAPI.create({
          id: this.id,
          blob: this.blob
        });

        audioCtx = new AudioContext();

        // const source = audioCtx.createMediaElementSource($audio); // get audio from

        setTimeout(() => {
          const bufferLoader = new BufferLoader(
            audioCtx, [`./uploads/${this.id}.ogg`], bufferList => {

              let loop = false;
              let source;

              document.getElementById(`repeat`).addEventListener(`click`,  () => {
                loop = !loop;
                source.stop();
              });

              const $pitch = document.getElementById(`pitch`);
              $pitch.addEventListener(`change`, () => {
                pitchRatio = parseFloat($pitch.value);
                console.log(pitchRatio);
              });

              $audio.addEventListener(`click`, () => {
                source = '';
                source = audioCtx.createBufferSource();
                source.buffer = bufferList[0];

                // source.connect(audioCtx.destination)

                source.connect(pitchShifterProcessor);
                source.loop = loop;
                source.start();
              });

            }
          );

          bufferLoader.load();
          this.initProcessor();
          // this.initSliders();

        }, 1000);


        const overlap = document.getElementById(`overlap`);
        overlap.addEventListener(`change`, () => {
          overlapRatio = overlap.value;
          console.log(overlap.value);
        });


        audioChunks = [];
      });
    });
  }

  onSpeechEnd(e) {
    this.mediaRecorder.stop();
    recognition.stop();
    $record.disabled = false;
    $record.textContent = 'Want to try again?';
    this.txt = $text.value;
  }

  gotResult(event) {
    const last = event.results.length - 1;
    transcript = event.results[last][0].transcript;
    $text.value = transcript;
  }

  speechSettings() {
    recognition.continuous = false;
    recognition.lang = 'nl-BE';
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
