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

export default class Audio {
  constructor() {
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
        const blobUrl = URL.createObjectURL(this.blob); // make url from blob stream
        $audio.src = blobUrl;

        audioCtx = new AudioContext();
        const source = audioCtx.createMediaElementSource($audio); // get audio from
        const biquadFilter = audioCtx.createBiquadFilter(); // Create the filter








        const $biquadRange = document.getElementById(`biquadValue`);
        const $biquadType = document.getElementById(`biquadType`);

        $biquadType.addEventListener(`change`, () => {
          biquadFilter.type = $biquadType.value;
        });

        // biquadFilter.frequency.value = $biquadRange.value;

        $biquadRange.addEventListener(`change`, () => {
          biquadFilter.frequency.value = $biquadRange.value;
        });

        source.connect(biquadFilter);
        biquadFilter.connect(audioCtx.destination);

        audioChunks = [];
      });
    });
  }

  onSpeechEnd(e) {
    this.mediaRecorder.stop();
    recognition.stop();
    $record.disabled = false;
    $record.textContent = 'Opnieuw proberen?';
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
};
