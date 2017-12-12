const AudioContext = window.AudioContext || window.webkitAudioContext;
let audioCtx, tag;
let audioChunks = [];
const play = document.getElementById(`play`);
const stop = document.getElementById(`stop`);
const record = document.getElementById(`audio`);

export default class Audio {
  constructor() {
    this.externalScopeVariable = '';
    this.stoptRecording = false;

    audioCtx = new AudioContext();
    navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
      const mediaRecorder = new MediaRecorder(stream);

      /*--------------------Start Recording-----------------------*/
      record.addEventListener(`click`, () => mediaRecorder.start());
      /*----------------------------------------------------------*/

      mediaRecorder.addEventListener(`dataavailable`,  e => audioChunks.push(e.data));
      mediaRecorder.addEventListener(`stop`, () => {
        this.audioBlob = new Blob(audioChunks);
        this.blobToArrayBuffer(this.audioBlob);
        audioChunks = [];
      });

      /*------------------Stop Recording----------------------*/
      stop.addEventListener(`click`, () => {
        mediaRecorder.stop();
        this.stoptRecording = true;
      });
      /*------------------------------------------------------*/

    });
  }

  blobToArrayBuffer(audioBlob) {
    const fileReader = new FileReader();

    fileReader.onload = e => {
      // this.arr = e.currentTarget.result;
      // console.log(e.currentTarget.result);
      const arrayBuffer = e.currentTarget.result;
      this.loadArrayBuffer(arrayBuffer);
    };

    fileReader.readAsArrayBuffer(audioBlob);
  }

  loadArrayBuffer(arrayBuffer) {
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
};
