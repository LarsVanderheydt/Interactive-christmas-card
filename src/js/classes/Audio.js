var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
const AudioContext = window.AudioContext || window.webkitAudioContext;

let audioCtx, recognition;
let transcript = "";
let audioChunks = [];

const text = document.getElementById(`field`);
const record = document.getElementById(`record`);

export default class Audio {
  constructor() {
    // handle SpeechRecognition
    recognition = new SpeechRecognition();
    this.speechSettings();

    recognition.onresult = event => this.gotResult(event);
    recognition.onspeechend = e => this.onSpeechEnd(e);
    text.addEventListener(`blur`, () => this.txt = text.value);

    this.text = "";
    // handle AudioContext
    audioCtx = new AudioContext();
    navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
      this.mediaRecorder = new MediaRecorder(stream);

      /*--------------------Start Recording-----------------------*/
      record.addEventListener(`click`, () => {
         this.mediaRecorder.start();
         recognition.start();
         record.disabled = true;
      });
      /*----------------------------------------------------------*/

      // add audiochunk to array
      this.mediaRecorder.addEventListener(`dataavailable`,  e => audioChunks.push(e.data));

      // when mediaRecorder stops, make and handle audio blob
      this.mediaRecorder.addEventListener(`stop`, () => {
        // create blob from audiochunks
        this.blob = new Blob(audioChunks, {type : 'audio/ogg'});

        // make url from blob stream
        const blobUrl = URL.createObjectURL(this.blob);
        document.getElementById(`audio_controls`).src = blobUrl;

        audioChunks = [];
      });
    });
  }

  onSpeechEnd(e) {
    this.mediaRecorder.stop();

    recognition.stop();
    record.disabled = false;
    record.textContent = 'Opnieuw proberen?';
    this.txt = text.value;
  }

  gotResult(event) {
    const last = event.results.length - 1;
    transcript = event.results[last][0].transcript;
    text.value = transcript;
  }

  speechSettings() {
    recognition.continuous = false;
    recognition.lang = 'nl-BE';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
  }
};
