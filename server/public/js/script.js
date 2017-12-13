/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__);


const url = `/api/cart`;

/* harmony default export */ __webpack_exports__["a"] = ({

  create: ({text, id, name, blob}) => {
    const method = `POST`;
    const newFileName = `${id.split(` `).join(`_`)}`;
    const body = new FormData();
    body.append(`text`, text);
    body.append(`id`, id);
    body.append(`name`, name);
    body.append(`sound`, blob, newFileName);

    return __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()(url, {method, body})
      .then(r => r.json());
  },

  read: () => {
    return __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()(`${url}?isActive=true`)
      .then(r => r.json());
  },

  readOne: id => {
    const method = `GET`;
    return __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()(`${url}/${id}`, {method}).then(r => r.json());
  }
});


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var randomFromSeed = __webpack_require__(14);

var ORIGINAL = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
var alphabet;
var previousSeed;

var shuffled;

function reset() {
    shuffled = false;
}

function setCharacters(_alphabet_) {
    if (!_alphabet_) {
        if (alphabet !== ORIGINAL) {
            alphabet = ORIGINAL;
            reset();
        }
        return;
    }

    if (_alphabet_ === alphabet) {
        return;
    }

    if (_alphabet_.length !== ORIGINAL.length) {
        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. You submitted ' + _alphabet_.length + ' characters: ' + _alphabet_);
    }

    var unique = _alphabet_.split('').filter(function(item, ind, arr){
       return ind !== arr.lastIndexOf(item);
    });

    if (unique.length) {
        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. These characters were not unique: ' + unique.join(', '));
    }

    alphabet = _alphabet_;
    reset();
}

function characters(_alphabet_) {
    setCharacters(_alphabet_);
    return alphabet;
}

function setSeed(seed) {
    randomFromSeed.seed(seed);
    if (previousSeed !== seed) {
        reset();
        previousSeed = seed;
    }
}

function shuffle() {
    if (!alphabet) {
        setCharacters(ORIGINAL);
    }

    var sourceArray = alphabet.split('');
    var targetArray = [];
    var r = randomFromSeed.nextValue();
    var characterIndex;

    while (sourceArray.length > 0) {
        r = randomFromSeed.nextValue();
        characterIndex = Math.floor(r * sourceArray.length);
        targetArray.push(sourceArray.splice(characterIndex, 1)[0]);
    }
    return targetArray.join('');
}

function getShuffled() {
    if (shuffled) {
        return shuffled;
    }
    shuffled = shuffle();
    return shuffled;
}

/**
 * lookup shuffled letter
 * @param index
 * @returns {string}
 */
function lookup(index) {
    var alphabetShuffled = getShuffled();
    return alphabetShuffled[index];
}

module.exports = {
    characters: characters,
    seed: setSeed,
    lookup: lookup,
    shuffled: getShuffled
};


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const Colors = {
  skin: 0xffe0bd,
  skin2: 0xcfba96,
  white: 0xe9ebee,
  gold: 0xf9c421,
  teeth: 0xffffff,
  beige: 0xa49178,
  brown: 0x6e5136,
  black: 0x2e2e2e,
  lightBlue: 0x6295a8,
  yellow: 0xfff000,
  red: 0xcd0020
};

/* harmony default export */ __webpack_exports__["a"] = (Colors);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
__webpack_require__(4);
module.exports = self.fetch.bind(self);


/***/ }),
/* 4 */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    rawHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = 'status' in options ? options.status : 200
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var randomByte = __webpack_require__(15);

function encode(lookup, number) {
    var loopCounter = 0;
    var done;

    var str = '';

    while (!done) {
        str = str + lookup( ( (number >> (4 * loopCounter)) & 0x0f ) | randomByte() );
        done = number < (Math.pow(16, loopCounter + 1 ) );
        loopCounter++;
    }
    return str;
}

module.exports = encode;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes_Head__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects_colors__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_Audio_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_SpeechRecognition_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__objects_Save__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_cartAPI__ = __webpack_require__(0);






{
  let scene,
    camera,
    fieldOfView,
    aspectRatio,
    nearPlane,
    farPlane,
    HEIGHT,
    WIDTH,
    globalLight,
    shadowLight,
    backLight,
    light,
    renderer,
    container,
    controls,
    loaded,
    head,
    stars,
    windowHalfX,
    windowHalfY,
    color,
    audio,
    SpeechText;

  const saveBtn = document.getElementById(`save_audio`);

  let mousePos = { x: 0, y: 0};

  let starArray = [];

  const init = () => {
    createScene();
    createLights();

    // create snow
    particlesJS.load('container', '../assets/particles.json', () => {
      console.log('callback - particles.js config loaded');
    });

    // handle audio
    audio = new __WEBPACK_IMPORTED_MODULE_2__classes_Audio_js__["a" /* default */]();

    // show and handle head
    head = new __WEBPACK_IMPORTED_MODULE_0__classes_Head__["a" /* default */]();
    scene.add(head.mesh);

    // handle SpeechRecognition
    SpeechText = new __WEBPACK_IMPORTED_MODULE_3__classes_SpeechRecognition_js__["a" /* default */]();

    // send objects to save on click
    saveBtn.addEventListener(`click`, () => {
      Object(__WEBPACK_IMPORTED_MODULE_4__objects_Save__["a" /* default */])({
        text: SpeechText.txt,
        // send audioblob to save
        blob: audio.blob
      });
    });

    // console.log(controllerText);
    // const controller = new controllerText(this.skinColor);
    console.log("onder Controller");
    const gui = new dat.GUI();

    // let control1 = gui.addColor(controller, 'skinColor');
    // gui.add(options, 'reset');

    // set scene for extension
    window.scene = scene;

    loop();
  };

  const createScene = () => {;
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;
    windowHalfX = WIDTH / 2;
    windowHalfY = HEIGHT / 2;

    scene = new THREE.Scene();
    //scene.fog = new THREE.Fog(0xffffff, 150,300);
    aspectRatio = WIDTH / HEIGHT;
    fieldOfView = 50;
    nearPlane = 1;
    farPlane = 2000;
    camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
    camera.position.x = 0;
    camera.position.z = 70;
    camera.position.y = 0;

    renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
    renderer.setPixelRatio(
      window.devicePixelRatio
      ? window.devicePixelRatio
      : 1)
    renderer.setSize(WIDTH, HEIGHT);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container = document.getElementById('container')
    container.appendChild(renderer.domElement);
    window.addEventListener('resize', onWindowResize, false);
    //handleWindowResize();

    document.addEventListener('mousemove', handleMouseMove, false);

  }

  const onWindowResize = () => {
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;
    windowHalfX = WIDTH / 2;
    windowHalfY = HEIGHT / 2;
    renderer.setSize(WIDTH, HEIGHT);
    camera.aspect = WIDTH / HEIGHT;
    camera.updateProjectionMatrix();
  }

  const handleMouseMove = e => {
    // const tx = -1 + (event.clientX / WIDTH) *2;
    // let ty = 1 - (event.clientY / HEIGHT)*2;
    // mousePos = {
    //   x: tx,
    //   y: ty
    // };
    mousePos = {
      x: event.clientX,
      y: event.clientY
    };
  }

  let loaderManager = new THREE.LoadingManager();

  const onStart = (url, itemsLoaded, itemsTotal) => {
    console.log('Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.');
  }

  const onLoad = () => {
    console.log('Loading complete!');
    finishedLoading();
  }

  const onProgress = (url, itemsLoaded, itemsTotal) => {
    console.log('Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.');
  }

  const onError = (url) => {
    console.log('There was an error loading ' + url);
  }

  const finishedLoading = () => {
    loaded = true;
  }

  const handleWindowResize = e => {
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;
    renderer.setSize(WIDTH, HEIGHT);
    camera.aspect = WIDTH / HEIGHT;
    camera.updateProjectionMatrix();
  }

  let isMobile = /iPhone|Android/i.test(navigator.userAgent);

  const createLights = () => {

    globalLight = new THREE.HemisphereLight(0xffffff, 0x555555, .9);

    shadowLight = new THREE.DirectionalLight(0xffffff, .3);
    shadowLight.position.set(100, 250, 175);
    shadowLight.castShadow = true;
    // shadowLight.shadow.camera.left = -150;
    // shadowLight.shadow.camera.right = 150;
    // shadowLight.shadow.camera.top = 150;
    // shadowLight.shadow.camera.bottom = -150;
    // shadowLight.shadow.camera.near = 1;
    // shadowLight.shadow.camera.far = 1000;

    backLight = new THREE.DirectionalLight(0xffffff, .2);
    backLight.position.set(-100, 200, 150);
    backLight.castShadow = true;
    //backLight.position.set(100, 100, -200);

    if (isMobile)
      shadowLight.shadow.mapSize.width = shadowLight.shadow.mapSize.height = 1024;
    if (!isMobile)
      shadowLight.shadow.mapSize.width = shadowLight.shadow.mapSize.height = 2048;

    scene.add(globalLight);
    scene.add(shadowLight);
    scene.add(backLight);
    scene.add( new THREE.AmbientLight( 0xeadead, 0.1 ));
  }

  // class Star {
  //   constructor(){
  //
  //   STAR
  //   //////////////////////////////////
  //
  //   this.mesh = new THREE.Object3D();
  //
  //   let pts = [],
  //     numPts = 5;
  //   for (let i = 0; i < numPts * 2; i++) {
  //     let l = i % 2 == 1
  //       ? 1
  //       : 2;
  //     let a = i / numPts * Math.PI;
  //     pts.push(new THREE.Vector2(Math.cos(a) * l, Math.sin(a) * l));
  //   }
  //   let starShape = new THREE.Shape(pts);
  //
  //   let extrudeSettings = {
  //     amount: 0.5,
  //     steps: 1,
  //     bevelEnabled: false
  //   };
  //   let starGeom = new THREE.ExtrudeGeometry(starShape, extrudeSettings);
  //   let star = new THREE.Mesh(starGeom, yellowMat);
  //   star.rotation.x = Math.PI / 2;
  //   this.mesh.add(star);
  // }
  // }
  //
  // let StarsGroup = function() {
  //
  //     this.mesh = new THREE.Object3D();
  //
  //     this.nStars = 15;
  //
  //     let stepAngle = Math.PI * 2 / this.nStars;
  //
  //      Create the Stars
  //     for (let i = 0; i < this.nStars; i++) {
  //
  //       this.s = new Star();
  //       let a = stepAngle * i;
  //       let r = 15;
  //
  //       this.s.mesh.position.y = Math.sin(a) * r;
  //       this.s.mesh.position.x = Math.cos(a) * r;
  //
  //       this.s.mesh.rotation.z = a + Math.PI / 2;
  //       this.s.mesh.position.z = 0 - Math.random() * 3;
  //
  //         random scale for each cloud
  //       let sc = 0.5 + Math.random() * .6;
  //       this.s.mesh.scale.set(sc, sc, sc);
  //
  //       this.mesh.add(this.s.mesh);
  //       starArray.push(this.s);
  //     }
  //     this.mesh.rotation.x = Math.PI / 2;
  // }

  const createHead = () => {
    head = new __WEBPACK_IMPORTED_MODULE_0__classes_Head__["a" /* default */]();
    head.idle();
    scene.add(head.mesh);
    //stars = new StarsGroup();
    //scene.add(stars.mesh);
  }

  const createCharacter = () => {
    createHead();
    head.mesh.position.set(0, 2, 0);
    //stars.mesh.position.set(0, 10, 0);
  }

  //BLINK
  ////////////////////
  let isBlinking = false;
  const blinkLoop = () => {
    isBlinking = false;

    if ((!isBlinking) && (Math.random() > 0.99)) {
      isBlinking = true;
      blink();
    }
  }

  const blink = () => {
    head.eyes.scale.y = 1;
    TweenMax.to(head.eyes.scale, .07, {
      y: 0,
      yoyo: true,
      repeat: 1,
      onComplete: function() {
        isBlinking = false;
      }
    });
  }

  //HEAD ANIMATIONS
  ////////////////////

  // Head.prototype.dizzy = function() {
  //
  //     let distance = 1;
  //
  //     this.head.rotation.z = Math.sin(Date.now() * 0.005) * Math.PI * 0.01;
  //     this.head.rotation.x = Math.sin(Date.now() * 0.01) * Math.PI * 0.01;
  //     this.head.rotation.y = Math.sin(Date.now() * 0.005) * Math.PI * 0.01;
  //
  //     this.eyeBlueRight.position.x = Math.sin(Date.now() * 0.005) * -distance;
  //     this.eyeBlueLeft.position.x = Math.sin(Date.now() * 0.005) * distance;
  //     this.eyeBlueRight.position.y = Math.cos(Date.now() * 0.005) * -distance;
  //     this.eyeBlueLeft.position.y = Math.cos(Date.now() * 0.005) * distance;
  //     this.eyeBrowRight.position.y = Math.cos(Date.now() * 0.005) * -distance;
  //     this.eyeBrowLeft.position.y = Math.cos(Date.now() * 0.005) * distance;
  //
  //     this.moustache.rotation.z = Math.sin(Date.now() * 0.005) * Math.PI * 0.05;
  //
  //     blinkLoop();
  //     stars.spinScale();
  //
  //   }

  //STARGROUP
  // StarsGroup.prototype.spinScale = function() {
  //
  //     this.mesh.rotation.z += 0.02;
  //
  //     for (let i = 0; i < starArray.length; i++) {
  //        starArray[i].mesh.rotation.x = Math.sin(Date.now() * 0.01) * Math.PI * 0.1 ;
  //       starArray[i].mesh.rotation.z += 0 - Math.random() * 0.15;
  //       starArray[i].mesh.rotation.x += 0 - Math.random() * 0.05;
  //
  //     }
  //   }

  // const controllerText = (skinColor) => {
  //   console.log("Inside FIZZY");
  //
  //   this.skinColor = "#e44231";
  // }

  const loop = () => {
    blinkLoop();
    //head.dizzy();
    let xTarget = (mousePos.x - windowHalfX);
    let yTarget = (mousePos.y - windowHalfY);

    //console.log(xTarget);

    head.idle(xTarget, yTarget);
    renderer.render(scene, camera);
    requestAnimationFrame(loop);
  }

  //window.addEventListener('load', init, false);

  init();

}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__objects_colors__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects_Materials__ = __webpack_require__(8);



let isBlinking = false;

class Head {
  constructor() {
    this.mesh = new THREE.Object3D();

    let headGeom = new THREE.BoxBufferGeometry(16, 16, 16);
    this.head = new THREE.Mesh(headGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].skinMat);
    this.head.castShadow = true;
    this.head.receiveShadow = false;
    this.mesh.add(this.head);

    this.beard = new THREE.Object3D();
    this.beard.position.y = -7;
    this.beard.position.z = 0.5;
    this.head.add(this.beard);

    this.Beard();
    this.Glasses();
    this.Hair();
    this.Eyes();
    this.EyeBrows();
    this.Hat();
    this.Freckles();
    this.Features();
    this.idle();
    this.normalize();
  }

  normalize(v, vmin, vmax, tmin, tmax) {
    const nv = Math.max(Math.min(v, vmax), vmin);
    const dv = vmax - vmin;
    const pc = (nv - vmin) / dv;
    const dt = tmax - tmin;
    const tv = tmin + (pc * dt);
    return tv;
  }

  updateBody(speed, eyeBlueRightPosX, eyeBlueLeftPosX, eyeBlueRightPosY, eyeBlueLeftPosY) {
    //this.eyeBlueRight.rotation.y += (lion.tHeagRotY - this.eyeBlueRight.rotation.y) / speed;
    //this.eyeBlueRight.rotation.x += (this.eyeBlueRightRotX - this.eyeBlueRight.rotation.x) / speed;

    this.eyeBlueRight.position.x += (eyeBlueRightPosX - this.eyeBlueRight.position.x) / speed;
    this.eyeBlueLeft.position.x += (eyeBlueLeftPosX - this.eyeBlueLeft.position.x) / speed;

    this.eyeBlueRight.position.y += (eyeBlueRightPosY - this.eyeBlueRight.position.y) / speed;
    this.eyeBlueLeft.position.y += (eyeBlueLeftPosY - this.eyeBlueLeft.position.y) / speed;

    //this.eyeBlueRight.position.y += Math.sin(this.eyeBlueRightPosY - this.eyeBlueRight.position.y) / speed;
    // this.eyeBlueRight.position.z += (this.eyeBlueRightPosZ - this.eyeBlueRight.position.z) / speed;
  }

  idle(xTarget = 0, yTarget = 0) {

    //console.log(xTarget, yTarget);
    //console.log(this.eyeBlueRight.position.x);
    console.log(this.eyeBlueRight.position.y);
    let distance = 1;

    this.head.rotation.z = Math.sin(Date.now() * 0.005) * Math.PI * 0.005;
    this.head.rotation.x = Math.sin(Date.now() * 0.004) * Math.PI * 0.03;

    // this.eyeBlueLeft.position.x = Math.sin(Date.now() * 0.002) * distance / 2;
    // this.eyeBlueRight.position.x = Math.sin(Date.now() * 0.002) * distance / 2;

    const eyeBlueRightPosX = this.normalize(xTarget, -200, 200, -0.6, 0.6);

    const eyeBlueLeftPosX = this.normalize(xTarget, -200, 200, -0.6, 0.6);

    const eyeBlueRightPosY = this.normalize(yTarget, -200, 200, 0.6, -0.6);

    const eyeBlueLeftPosY = this.normalize(yTarget, -200, 200, 0.6, -0.6);

    // this.eyeBlueRightRotY = xTarget, -20, 20, -Math.PI / 4, Math.PI / 4;
    // this.eyeBlueRightRotX = yTarget, -20, 20, -Math.PI / 4, Math.PI / 4;
    // this.eyeBlueRightPosX = xTarget, -20, 20, 70, -70;
    // this.eyeBlueRightPosY = yTarget, -140, 260, 20, 100;
    // this.eyeBlueRightPosZ = 7;

    this.eyeBrowRight.position.y = Math.sin(Date.now() * 0.004) * distance / 2;
    this.eyeBrowLeft.position.y = Math.cos(Date.now() * 0.004) * distance / 2;

    // this.eyeBrowRight.rotation.z = Math.sin(Date.now() * 0.002) * Math.PI * 0.04;
    // this.eyeBrowLeft.rotation.z = Math.cos(Date.now() * 0.002) * Math.PI * 0.04;

    //this.beard.mouth.position.x = Math.sin(Date.now() * 0.002) * distance / 2;

    // SNOR OMHOOG-OMLAAG
    this.moustache.position.y = Math.cos(Date.now() * 0.01) * distance / 4;
    // SNOR OMHOOG-ROTATIE
    this.moustache.rotation.z = Math.sin(Date.now() * 0.01) * Math.PI * 0.01;

    //this.mouth.scale.x = Math.cos(Date.now() * 0.004) * distance / 2;

    //SNELHEID HEEN EN WEER
    this.mesh.rotation.y = Math.sin(Date.now() * 0.002) * Math.PI * 0.05;
    this.updateBody(10, eyeBlueRightPosX, eyeBlueLeftPosX, eyeBlueRightPosY, eyeBlueLeftPosY);
  }

  Beard() {
    //BEARD
    ////////////////////////////////////

    let beardGeomMerged = new THREE.Geometry();

    let beard1Geom = new THREE.BoxGeometry(2, 10, 16);

    let beard1 = new THREE.Mesh(beard1Geom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
    beard1.applyMatrix(new THREE.Matrix4().makeTranslation(9, 0, 0));
    beard1.updateMatrix();
    beardGeomMerged.merge(beard1.geometry, beard1.matrix);

    let beard2 = new THREE.Mesh(beard1Geom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
    beard2.applyMatrix(new THREE.Matrix4().makeTranslation(7, -2, 2));
    beard2.scale.z = 0.8;
    beard2.updateMatrix();
    beardGeomMerged.merge(beard2.geometry, beard2.matrix);

    let beard3 = beard1.clone();
    beard3.position.x = -beard1.position.x;
    beard3.updateMatrix();
    beardGeomMerged.merge(beard3.geometry, beard3.matrix);

    let beard4 = beard2.clone();
    beard4.position.x = -beard2.position.x;
    beard4.updateMatrix();
    beardGeomMerged.merge(beard4.geometry, beard4.matrix);

    let beard2Geom = new THREE.BoxGeometry(3, 14, 10);
    beard2Geom.vertices[2].z -= 2;
    beard2Geom.vertices[7].z -= 2;

    let beard5 = new THREE.Mesh(beard2Geom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
    beard5.applyMatrix(new THREE.Matrix4().makeTranslation(5, -5, 4));
    beard5.updateMatrix();
    beardGeomMerged.merge(beard5.geometry, beard5.matrix);

    let beard3Geom = new THREE.BoxGeometry(2.5, 14, 10);
    beard3Geom.vertices[2].z -= 2;
    beard3Geom.vertices[7].z -= 2;

    let beard6 = new THREE.Mesh(beard3Geom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
    beard6.applyMatrix(new THREE.Matrix4().makeTranslation(2.5, -6, 6));
    beard6.updateMatrix();
    beardGeomMerged.merge(beard6.geometry, beard6.matrix);

    let beard7 = beard5.clone();
    beard7.position.x = -beard5.position.x;
    beard7.updateMatrix();
    beardGeomMerged.merge(beard7.geometry, beard7.matrix);

    let beard8 = beard6.clone();
    beard8.position.x = -beard6.position.x;
    beard8.updateMatrix();
    beardGeomMerged.merge(beard8.geometry, beard8.matrix);

    let beard4Geom = new THREE.BoxGeometry(2.5, 14.5, 10);
    beard4Geom.vertices[2].z -= 1;
    beard4Geom.vertices[7].z -= 1;

    let beard9 = new THREE.Mesh(beard4Geom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
    beard9.applyMatrix(new THREE.Matrix4().makeTranslation(0, -7, 5.75));
    beard9.updateMatrix();
    beardGeomMerged.merge(beard9.geometry, beard9.matrix);

    let beard5Geom = new THREE.BoxGeometry(4, 8, 8);
    let beard10 = new THREE.Mesh(beard5Geom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
    beard10.applyMatrix(new THREE.Matrix4().makeTranslation(-6, -1, -2));
    beard10.updateMatrix();
    beardGeomMerged.merge(beard10.geometry, beard10.matrix);

    let beard11 = new THREE.Mesh(beard5Geom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
    beard11.applyMatrix(new THREE.Matrix4().makeTranslation(0, -5, -2));
    beard11.updateMatrix();
    beardGeomMerged.merge(beard11.geometry, beard11.matrix);

    let beardMerged = new THREE.Mesh(beardGeomMerged, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
    beardMerged.castShadow = true;
    beardMerged.receiveShadow = true;

    let mouthGeom = new THREE.BoxGeometry(10, 4, 1);
    let mouth = new THREE.Mesh(mouthGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].blackMat);
    mouth.position.set(0, 2, 8);
    mouth.castShadow = false;
    mouth.receiveShadow = true;

    let teethGeom = new THREE.BoxGeometry(10, 1, 1);
    let teeth = new THREE.Mesh(teethGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].teethMat);
    teeth.position.set(0, 0.5, 0.1);
    teeth.castShadow = false;
    teeth.receiveShadow = true;
    mouth.add(teeth)

    // let smileGeom = new THREE.TorusGeometry(4, 1.5, 2, 6, -Math.PI);
    // this.smile = new THREE.Mesh(smileGeom, Mat.blackMat);
    // this.smile.position.set(0, 2, 10);
    // this.smile.castShadow = false;
    // this.smile.receiveShadow = true;
    //
    // this.beard.add(beardMerged, mouth, this.smile);
    this.beard.add(beardMerged, mouth);

    let moustacheGeom = new THREE.BoxGeometry(14, 3, 3, 3);
    moustacheGeom.vertices[0].y -= 2;
    moustacheGeom.vertices[1].y -= 2;
    moustacheGeom.vertices[2].y -= 2;
    moustacheGeom.vertices[3].y -= 2;
    moustacheGeom.vertices[4].y -= 2;
    moustacheGeom.vertices[5].y -= 2;
    moustacheGeom.vertices[6].y -= 2;
    moustacheGeom.vertices[7].y -= 2;
    moustacheGeom.vertices[8].x -= 1;
    moustacheGeom.vertices[9].x += 1;

    moustacheGeom.applyMatrix(new THREE.Matrix4().makeTranslation(0, 4, 0));
    this.moustache = new THREE.Mesh(moustacheGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
    this.moustache.castShadow = true;
    this.moustache.receiveShadow = true;

    this.moustache.position.set(0, 0, 9);
    this.beard.add(this.moustache);
  }

  Glasses() {
    //GLASSES
    //////////////////////////////////

    this.glasses = new THREE.Object3D();
    this.glasses.position.set(0, 0, 9);
    this.head.add(this.glasses);

    let frameGeomMerged = new THREE.Geometry();

    let frameOuterGeom = new THREE.CylinderGeometry(3, 3, 0.5, 32)
    let frameInnerGeom = new THREE.CylinderGeometry(2.7, 2.7, 0.5, 32)

    frameOuterGeom.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI / 2));
    frameInnerGeom.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI / 2));

    let frameBSP = new ThreeBSP(frameOuterGeom);
    let frameCutBSP = new ThreeBSP(frameInnerGeom);

    let frameintersectionBSP = frameBSP.subtract(frameCutBSP);
    let frameLeft = frameintersectionBSP.toMesh(__WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].goldMat);

    frameLeft.applyMatrix(new THREE.Matrix4().makeTranslation(4, 3, 0));
    frameLeft.updateMatrix();
    frameGeomMerged.merge(frameLeft.geometry, frameLeft.matrix);

    let frameRight = frameLeft.clone();
    frameRight.applyMatrix(new THREE.Matrix4().makeRotationZ(Math.PI / 30));
    frameRight.applyMatrix(new THREE.Matrix4().makeTranslation(-7.5, -0.25, 0));
    frameRight.updateMatrix();
    frameGeomMerged.merge(frameRight.geometry, frameRight.matrix);

    let frameMidGeom = new THREE.BoxGeometry(2, .3, .5);
    let frameMid = new THREE.Mesh(frameMidGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].goldMat);
    frameMid.applyMatrix(new THREE.Matrix4().makeTranslation(0, 3.3, -0.3));
    frameMid.updateMatrix();
    frameGeomMerged.merge(frameMid.geometry, frameMid.matrix);

    let frameEndGeom = new THREE.BoxGeometry(1.5, .5, 1);
    let frameEndRight = new THREE.Mesh(frameEndGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].goldMat);
    frameEndRight.applyMatrix(new THREE.Matrix4().makeTranslation(7.5, 3, 0));
    frameEndRight.updateMatrix();
    frameGeomMerged.merge(frameEndRight.geometry, frameEndRight.matrix);

    let frameEndLeft = frameEndRight.clone();
    frameEndLeft.position.x = -frameEndRight.position.x;
    frameEndLeft.updateMatrix();
    frameGeomMerged.merge(frameEndLeft.geometry, frameEndLeft.matrix);

    let frameSpokeGeom = new THREE.BoxGeometry(1, 0.5, 12);
    let frameSpokeRight = new THREE.Mesh(frameSpokeGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].goldMat);
    frameSpokeRight.applyMatrix(new THREE.Matrix4().makeTranslation(8, 3, -5.5));
    frameSpokeRight.updateMatrix();
    frameGeomMerged.merge(frameSpokeRight.geometry, frameSpokeRight.matrix);

    let frameSpokeLeft = frameSpokeRight.clone();
    frameSpokeLeft.position.x = -frameSpokeRight.position.x;
    frameSpokeLeft.updateMatrix();
    frameGeomMerged.merge(frameSpokeLeft.geometry, frameSpokeLeft.matrix);

    let frameMerged = new THREE.Mesh(frameGeomMerged, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].goldMat);
    frameMerged.castShadow = false;
    frameMerged.receiveShadow = true;

    this.glasses.add(frameMerged);

  }

  Hair() {
    //HAIR
    ////////////////////////////////////

    this.hair = new THREE.Object3D();
    this.hair.position.set(0, 9, 0);
    this.head.add(this.hair);

    let hairGeomMerged = new THREE.Geometry();

    let hairFlatGeom = new THREE.BoxGeometry(10, 2, 18);

    let hair1 = new THREE.Mesh(hairFlatGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
    hair1.applyMatrix(new THREE.Matrix4().makeRotationZ(-Math.PI / 40));
    hair1.applyMatrix(new THREE.Matrix4().makeTranslation(-4, -0.5, 0));
    hair1.updateMatrix();
    hairGeomMerged.merge(hair1.geometry, hair1.matrix);

    let hair2 = new THREE.Mesh(hairFlatGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
    hair2.applyMatrix(new THREE.Matrix4().makeRotationZ(-Math.PI / 10));
    hair2.applyMatrix(new THREE.Matrix4().makeTranslation(-2, 1, 0));
    hair2.updateMatrix();
    hairGeomMerged.merge(hair2.geometry, hair2.matrix);

    let hair3 = new THREE.Mesh(hairFlatGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
    hair3.applyMatrix(new THREE.Matrix4().makeRotationZ(-Math.PI / 5));
    hair3.applyMatrix(new THREE.Matrix4().makeTranslation(2, 1, 0));
    hair3.updateMatrix();
    hairGeomMerged.merge(hair3.geometry, hair3.matrix);

    let hair4 = new THREE.Mesh(hairFlatGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
    hair4.applyMatrix(new THREE.Matrix4().makeRotationZ(-Math.PI / 4));
    hair4.applyMatrix(new THREE.Matrix4().makeTranslation(6, 0, 0));
    hair4.updateMatrix();
    hairGeomMerged.merge(hair4.geometry, hair4.matrix);

    let hair6 = new THREE.Mesh(hairFlatGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
    hair6.applyMatrix(new THREE.Matrix4().makeRotationZ(-Math.PI / -3));
    hair6.applyMatrix(new THREE.Matrix4().makeTranslation(-7.75, -.5, 0));
    hair6.updateMatrix();
    hairGeomMerged.merge(hair6.geometry, hair6.matrix);

    let hairFlatBackGeom = new THREE.BoxGeometry(18, 7, 6);
    hairFlatBackGeom.vertices[0].x -= 1;
    hairFlatBackGeom.vertices[1].x -= 1;
    hairFlatBackGeom.vertices[4].x += 1;
    hairFlatBackGeom.vertices[5].x += 1;

    let hair5 = new THREE.Mesh(hairFlatBackGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
    hair5.applyMatrix(new THREE.Matrix4().makeTranslation(0, -4.5, -6));
    hair5.updateMatrix();
    hairGeomMerged.merge(hair5.geometry, hair5.matrix);

    let hairMerged = new THREE.Mesh(hairGeomMerged, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
    hairMerged.castShadow = false;
    hairMerged.receiveShadow = true;

    this.hair.add(hairMerged);

  }

  Eyes() {
    //EYES
    ////////////////////////////////////

    this.eyes = new THREE.Object3D();
    this.eyes.position.set(0, 3, 9);
    this.head.add(this.eyes);

    let eyeWhiteGeom = new THREE.PlaneGeometry(2.5, 2.5);

    let eyeWhiteRight = new THREE.Mesh(eyeWhiteGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
    eyeWhiteRight.position.set(-3.75, 0, 0);
    eyeWhiteRight.castShadow = false;
    eyeWhiteRight.receiveShadow = false;

    let eyeBlueGeom = new THREE.PlaneGeometry(1.5, 1.5);

    this.eyeBlueRight = new THREE.Mesh(eyeBlueGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].blueMat);
    this.eyeBlueRight.position.set(0, 0, .01);
    this.eyeBlueRight.castShadow = false;
    this.eyeBlueRight.receiveShadow = false;

    eyeWhiteRight.add(this.eyeBlueRight);

    let eyePupilGeom = new THREE.PlaneGeometry(1, 1);

    this.eyePupilRight = new THREE.Mesh(eyePupilGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].blackMat);
    this.eyePupilRight.position.set(0, 0, .02);
    this.eyePupilRight.castShadow = false;
    this.eyePupilRight.receiveShadow = false;

    this.eyeBlueRight.add(this.eyePupilRight);

    let eyeWhiteLeft = new THREE.Mesh(eyeWhiteGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
    eyeWhiteLeft.position.set(3.75, 0, 0);
    eyeWhiteLeft.castShadow = false;
    eyeWhiteLeft.receiveShadow = false;

    this.eyeBlueLeft = new THREE.Mesh(eyeBlueGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].blueMat);
    this.eyeBlueLeft.position.set(0, 0, .01);
    this.eyeBlueLeft.castShadow = false;
    this.eyeBlueLeft.receiveShadow = false;

    eyeWhiteLeft.add(this.eyeBlueLeft);

    this.eyePupilLeft = new THREE.Mesh(eyePupilGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].blackMat);
    this.eyePupilLeft.position.set(0, 0, .02);
    this.eyePupilLeft.castShadow = false;
    this.eyePupilLeft.receiveShadow = false;

    this.eyeBlueLeft.add(this.eyePupilLeft);

    this.eyes.add(eyeWhiteRight, eyeWhiteLeft);
  }

  EyeBrows() {
    //EYE BROWS
    ////////////////////////////////////

    this.eyeBrows = new THREE.Object3D();
    this.eyeBrows.position.set(0, 6, 8);
    this.head.add(this.eyeBrows);

    let eyeBrowGeom = new THREE.BoxGeometry(4, 1, 1);

    this.eyeBrowRight = new THREE.Mesh(eyeBrowGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
    this.eyeBrowRight.applyMatrix(new THREE.Matrix4().makeRotationZ(Math.PI / 45));
    this.eyeBrowRight.position.set(-3.75, 0, 0);
    this.eyeBrowRight.castShadow = false;
    this.eyeBrowRight.receiveShadow = false;

    this.eyeBrowLeft = new THREE.Mesh(eyeBrowGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
    this.eyeBrowLeft.applyMatrix(new THREE.Matrix4().makeRotationZ(-Math.PI / 45));
    this.eyeBrowLeft.position.set(3.75, 0, 0);
    this.eyeBrowLeft.castShadow = false;
    this.eyeBrowLeft.receiveShadow = false;

    this.eyeBrows.add(this.eyeBrowRight, this.eyeBrowLeft);
  }

  Hat() {
    //HAT
    ////////////////////////////////////

    this.hat = new THREE.Object3D();
    this.hat.position.set(-0.2, 11, 2.4);
    this.head.add(this.hat);

    let bandGeom = new THREE.TorusGeometry(9, 2, 16, 100);
    let bigConeGeom = new THREE.CylinderGeometry(1, 11, 12, 15);
    let smallConeGeom = new THREE.CylinderGeometry(0.8, 3, 9, 32);
    let hatDingleGeom = new THREE.SphereGeometry(1.5, 8, 8);

    this.band = new THREE.Mesh(bandGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].teethMat);
    this.band.applyMatrix(new THREE.Matrix4().makeRotationX(Math.PI / 2));
    this.band.position.set(0, 0, 0);
    this.band.castShadow = false;
    this.band.receiveShadow = false;

    this.bigCone = new THREE.Mesh(bigConeGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].redMat);
    this.bigCone.position.set(0, 6, 0);
    this.bigCone.castShadow = false;
    this.bigCone.receiveShadow = false;

    this.smallCone = new THREE.Mesh(smallConeGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].redMat);
    this.smallCone.applyMatrix(new THREE.Matrix4().makeRotationX(Math.PI / 2));
    this.smallCone.applyMatrix(new THREE.Matrix4().makeRotationY(Math.PI / 2));
    this.smallCone.applyMatrix(new THREE.Matrix4().makeRotationZ(Math.PI / -8));
    this.smallCone.position.set(4, 7.8, -1);
    this.smallCone.castShadow = false;
    this.smallCone.receiveShadow = false;

    this.hatDingle = new THREE.Mesh(hatDingleGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
    this.hatDingle.position.set(9, 5.5, -1);
    this.hatDingle.castShadow = false;
    this.hatDingle.receiveShadow = false;

    this.hat.add(this.band, this.bigCone, this.smallCone, this.hatDingle);
  }

  Freckles() {
    //Freckles
    ////////////////////////////////////
    this.freckles = new THREE.Object3D();
    this.freckles.position.set(0, 0, 8);
    this.head.add(this.freckles);

    let frecklesGeomMerged = new THREE.Geometry();

    let frecklesGeom = new THREE.PlaneGeometry(0.5, 0.5);

    let freckle1 = new THREE.Mesh(frecklesGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].brownMat);
    freckle1.applyMatrix(new THREE.Matrix4().makeTranslation(-5, 0, 0.01));
    freckle1.updateMatrix();
    frecklesGeomMerged.merge(freckle1.geometry, freckle1.matrix);

    let freckle2 = freckle1.clone();
    freckle2.applyMatrix(new THREE.Matrix4().makeTranslation(-0.5, -1, 0));
    freckle2.updateMatrix();
    frecklesGeomMerged.merge(freckle2.geometry, freckle2.matrix);

    let freckle3 = freckle1.clone();
    freckle3.applyMatrix(new THREE.Matrix4().makeTranslation(1, -0.5, 0));
    freckle3.updateMatrix();
    frecklesGeomMerged.merge(freckle3.geometry, freckle3.matrix);

    let freckle4 = freckle1.clone();
    freckle4.position.x = -freckle1.position.x;
    freckle4.updateMatrix();
    frecklesGeomMerged.merge(freckle4.geometry, freckle4.matrix);
    let freckle5 = freckle2.clone();
    freckle5.position.x = -freckle2.position.x;
    freckle5.updateMatrix();
    frecklesGeomMerged.merge(freckle5.geometry, freckle5.matrix);
    let freckle6 = freckle3.clone();
    freckle6.position.x = -freckle3.position.x;
    freckle6.updateMatrix();
    frecklesGeomMerged.merge(freckle6.geometry, freckle6.matrix);

    let freckledMerged = new THREE.Mesh(frecklesGeomMerged, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].skin2Mat);
    freckledMerged.castShadow = false;
    freckledMerged.receiveShadow = false;

    this.freckles.add(freckledMerged);
  }

  Features() {
    //Features - Nose and Ears
    ////////////////////////////////////

    let earGeom = new THREE.BoxBufferGeometry(1.5, 3, 1.5);
    let earRight = new THREE.Mesh(earGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].skinMat);
    earRight.position.set(-8.5, 1, 3);
    earRight.castShadow = false;
    earRight.receiveShadow = false;

    let earLeft = new THREE.Mesh(earGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].skinMat);
    earLeft.position.set(8.5, 1, 3);
    earLeft.castShadow = false;
    earLeft.receiveShadow = false;

    let noseGeom = new THREE.CylinderGeometry(1, 2, 4, 4);
    let nose = new THREE.Mesh(noseGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].skinMat);
    nose.scale.set(.75, 1, 1.3);
    nose.position.set(0, 1, 8);
    nose.castShadow = false;
    nose.receiveShadow = false;

    this.head.add(earRight, earLeft, nose);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Head;



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(2);

// let skinMat = new THREE.MeshLambertMaterial({color: Colors.skin, flatShading: true});
// let skin2Mat = new THREE.MeshLambertMaterial({color: Colors.skin, flatShading: true});
// let auburnMat = new THREE.MeshLambertMaterial({color: Colors.auburn, flatShading: true});
// let brownMat = new THREE.MeshLambertMaterial({color: Colors.brown, flatShading: true});
// let blackMat = new THREE.MeshLambertMaterial({color: Colors.black, flatShading: true});
// let whiteMat = new THREE.MeshPhongMaterial({color: Colors.white, flatShading: true});
// let blueMat = new THREE.MeshPhongMaterial({color: Colors.lightBlue, flatShading: true});
// let beigeMat = new THREE.MeshPhongMaterial({color: Colors.beige, flatShading: true});
// let yellowMat = new THREE.MeshPhongMaterial({color: Colors.yellow, flatShading: true});
// let normalMat = new THREE.MeshNormalMaterial({});

const Materials = {
  "skinMat": new THREE.MeshLambertMaterial({color: __WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */].skin, flatShading: true}),
  "skin2Mat": new THREE.MeshLambertMaterial({color: __WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */].skin2, flatShading: true}),
  "whiteMat": new THREE.MeshLambertMaterial({color: __WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */].white, flatShading: true}),
  "goldMat": new THREE.MeshLambertMaterial({color: __WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */].gold, flatShading: true}),
  "teethMat": new THREE.MeshPhongMaterial({color: __WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */].teeth, flatShading: true}),
  "beigeMat": new THREE.MeshPhongMaterial({color: __WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */].beige, flatShading: true}),
  "brownMat": new THREE.MeshLambertMaterial({color: __WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */].brown, flatShading: true}),
  "blackMat": new THREE.MeshLambertMaterial({color: __WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */].black, flatShading: true}),
  "blueMat": new THREE.MeshPhongMaterial({color: __WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */].lightBlue, flatShading: true}),
  "yellowMat": new THREE.MeshPhongMaterial({color: __WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */].yellow, flatShading: true}),
  "redMat": new THREE.MeshPhongMaterial({color: __WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */].red, flatShading: true}),
  "normalMat": new THREE.MeshNormalMaterial({})
};

/* harmony default export */ __webpack_exports__["a"] = (Materials);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const AudioContext = window.AudioContext || window.webkitAudioContext;
let audioCtx, tag;
let audioChunks = [];
const play = document.getElementById(`play`);
const stop = document.getElementById(`stop`);
const record = document.getElementById(`audio`);

class Audio {
  constructor() {
    this.stoptRecording = false;

    audioCtx = new AudioContext();
    navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
      const mediaRecorder = new MediaRecorder(stream);

      /*--------------------Start Recording-----------------------*/
      record.addEventListener(`click`, () => {
         mediaRecorder.start();
         console.log('record');
      });
      /*----------------------------------------------------------*/

      // add audiochunk to array
      mediaRecorder.addEventListener(`dataavailable`,  e => audioChunks.push(e.data));
      mediaRecorder.addEventListener(`stop`, () => {
        // create blob from audiochunks
        this.blob = new Blob(audioChunks, {type : 'audio/ogg'});

        const blobUrl = URL.createObjectURL(this.blob);

        document.getElementById(`audio_controls`).src = blobUrl;

        //this.blobToArrayBuffer(this.blob);
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
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Audio;
;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

// var colors = [ 'aqua' , 'azure' , 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral', 'crimson', 'cyan', 'fuchsia', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'indigo', 'ivory', 'khaki', 'lavender', 'lime', 'linen', 'magenta', 'maroon', 'moccasin', 'navy', 'olive', 'orange', 'orchid', 'peru', 'pink', 'plum', 'purple', 'red', 'salmon', 'sienna', 'silver', 'snow', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'white', 'yellow'];
// var grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colors.join(' | ') + ' ;'

let recording = false;
let transcript = "";
const text = document.getElementById(`field`);
const button = document.getElementById(`record`);
const during = document.getElementById(`during`);

class SpeechRecogn {
  constructor() {
    this.txt = '';
    this.recognition = new SpeechRecognition();
    const speechRecognitionList = new SpeechGrammarList();
    // speechRecognitionList.addFromString(grammar, 1);
    // this.recognition.grammars = speechRecognitionList;
    this.recognition.continuous = false;
    this.recognition.lang = 'nl-BE';
    this.recognition.interimResults = false;
    this.recognition.maxAlternatives = 1;

    this.init();

    this.recognition.onresult = event => this.gotResult(event);
    this.recognition.onspeechend = e => this.onSpeechEnd(e);

    text.addEventListener(`blur`, () => this.handleChange());
  }

  init() {
    button.addEventListener(`click`, () => {
      this.recognition.start();
      console.log('Ready to receive a command.');
      button.disabled = true;
    });
  }

  handleChange() {
    this.txt = text.value;
  }

  gotResult(event) {
    const last = event.results.length - 1;
    transcript = event.results[last][0].transcript;

    text.value = transcript;
    console.log(event.results);
    console.log('Confidence: ' + event.results[0][0].confidence);
  }

  onSpeechEnd(e) {
    this.recognition.stop();
    button.disabled = false;
    button.textContent = 'Click To Start';
    this.txt = text.value;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SpeechRecogn;


// this.recognition.onnomatch = function(event) {
//   diagnostic.textContent = "I didn't recognise that color.";
// }
//
// this.recognition.onerror = function(event) {
//   diagnostic.textContent = 'Error occurred in this.recognition: ' + event.error;
// }


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_cartAPI__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shortid__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shortid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_shortid__);


const name = document.getElementById(`name_input`);
const link = document.querySelector(`.unique_link`);

const handleSave = ({text, blob}) => {
  const id = __WEBPACK_IMPORTED_MODULE_1_shortid___default.a.generate();

  __WEBPACK_IMPORTED_MODULE_0__lib_cartAPI__["a" /* default */].create({
    text,
    id,
    name: name.value,
    blob
  });

  link.innerHTML = `https://localhost:8080/santa.html?id=${id}`;
  link.setAttribute('href', `https://localhost:8080/santa.html?id=${id}`);
  link.setAttribute('target', `_blank`);
};

/* harmony default export */ __webpack_exports__["a"] = (handleSave);


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = __webpack_require__(13);


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet = __webpack_require__(1);
var encode = __webpack_require__(5);
var decode = __webpack_require__(16);
var build = __webpack_require__(17);
var isValid = __webpack_require__(18);

// if you are using cluster or multiple servers use this to make each instance
// has a unique value for worker
// Note: I don't know if this is automatically set when using third
// party cluster solutions such as pm2.
var clusterWorkerId = __webpack_require__(19) || 0;

/**
 * Set the seed.
 * Highly recommended if you don't want people to try to figure out your id schema.
 * exposed as shortid.seed(int)
 * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.
 */
function seed(seedValue) {
    alphabet.seed(seedValue);
    return module.exports;
}

/**
 * Set the cluster worker or machine id
 * exposed as shortid.worker(int)
 * @param workerId worker must be positive integer.  Number less than 16 is recommended.
 * returns shortid module so it can be chained.
 */
function worker(workerId) {
    clusterWorkerId = workerId;
    return module.exports;
}

/**
 *
 * sets new characters to use in the alphabet
 * returns the shuffled alphabet
 */
function characters(newCharacters) {
    if (newCharacters !== undefined) {
        alphabet.characters(newCharacters);
    }

    return alphabet.shuffled();
}

/**
 * Generate unique id
 * Returns string id
 */
function generate() {
  return build(clusterWorkerId);
}

// Export all other functions as properties of the generate function
module.exports = generate;
module.exports.generate = generate;
module.exports.seed = seed;
module.exports.worker = worker;
module.exports.characters = characters;
module.exports.decode = decode;
module.exports.isValid = isValid;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Found this seed-based random generator somewhere
// Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)

var seed = 1;

/**
 * return a random number based on a seed
 * @param seed
 * @returns {number}
 */
function getNextValue() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed/(233280.0);
}

function setSeed(_seed_) {
    seed = _seed_;
}

module.exports = {
    nextValue: getNextValue,
    seed: setSeed
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var crypto = typeof window === 'object' && (window.crypto || window.msCrypto); // IE 11 uses window.msCrypto

function randomByte() {
    if (!crypto || !crypto.getRandomValues) {
        return Math.floor(Math.random() * 256) & 0x30;
    }
    var dest = new Uint8Array(1);
    crypto.getRandomValues(dest);
    return dest[0] & 0x30;
}

module.exports = randomByte;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var alphabet = __webpack_require__(1);

/**
 * Decode the id to get the version and worker
 * Mainly for debugging and testing.
 * @param id - the shortid-generated id.
 */
function decode(id) {
    var characters = alphabet.shuffled();
    return {
        version: characters.indexOf(id.substr(0, 1)) & 0x0f,
        worker: characters.indexOf(id.substr(1, 1)) & 0x0f
    };
}

module.exports = decode;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var encode = __webpack_require__(5);
var alphabet = __webpack_require__(1);

// Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.
// This number should be updated every year or so to keep the generated id short.
// To regenerate `new Date() - 0` and bump the version. Always bump the version!
var REDUCE_TIME = 1459707606518;

// don't change unless we change the algos or REDUCE_TIME
// must be an integer and less than 16
var version = 6;

// Counter is used when shortid is called multiple times in one second.
var counter;

// Remember the last time shortid was called in case counter is needed.
var previousSeconds;

/**
 * Generate unique id
 * Returns string id
 */
function build(clusterWorkerId) {

    var str = '';

    var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);

    if (seconds === previousSeconds) {
        counter++;
    } else {
        counter = 0;
        previousSeconds = seconds;
    }

    str = str + encode(alphabet.lookup, version);
    str = str + encode(alphabet.lookup, clusterWorkerId);
    if (counter > 0) {
        str = str + encode(alphabet.lookup, counter);
    }
    str = str + encode(alphabet.lookup, seconds);

    return str;
}

module.exports = build;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var alphabet = __webpack_require__(1);

function isShortId(id) {
    if (!id || typeof id !== 'string' || id.length < 6 ) {
        return false;
    }

    var characters = alphabet.characters();
    var len = id.length;
    for(var i = 0; i < len;i++) {
        if (characters.indexOf(id[i]) === -1) {
            return false;
        }
    }
    return true;
}

module.exports = isShortId;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = 0;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTRjNzNmNGQ5NjE3ZGFkYTZmNTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2xpYi9jYXJ0QVBJLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaG9ydGlkL2xpYi9hbHBoYWJldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvb2JqZWN0cy9jb2xvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtZmV0Y2gvZmV0Y2gtbnBtLWJyb3dzZXJpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3doYXR3Zy1mZXRjaC9mZXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvZW5jb2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzZXMvSGVhZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvb2JqZWN0cy9NYXRlcmlhbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzZXMvQXVkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzZXMvU3BlZWNoUmVjb2duaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL29iamVjdHMvU2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Nob3J0aWQvbGliL3JhbmRvbS9yYW5kb20tZnJvbS1zZWVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaG9ydGlkL2xpYi9yYW5kb20vcmFuZG9tLWJ5dGUtYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvZGVjb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaG9ydGlkL2xpYi9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvaXMtdmFsaWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Nob3J0aWQvbGliL3V0aWwvY2x1c3Rlci13b3JrZXItaWQtYnJvd3Nlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM3REE7O0FBRUE7O0FBRUE7O0FBRUEsWUFBWSxxQkFBcUI7QUFDakM7QUFDQSwyQkFBMkIsd0JBQXdCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEVBQXVCLGFBQWE7QUFDcEM7QUFDQSxHQUFHOztBQUVIO0FBQ0EsdUVBQW9CLElBQUk7QUFDeEI7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSx1RUFBb0IsSUFBSSxHQUFHLEdBQUcsSUFBSSxPQUFPO0FBQ3pDO0FBQ0E7Ozs7Ozs7O0FDNUJBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ0xBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsbUJBQW1CO0FBQzNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQyxvQkFBb0I7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLDRCQUE0QjtBQUNwRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RCxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1QsOEVBQThFO0FBQzlFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLHVCQUF1QjtBQUNyRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLHVDQUF1QywwQkFBMEI7QUFDakU7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtCQUErQiwwQkFBMEIsZUFBZTtBQUN4RTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7OztBQzVjRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsa0JBQWtCOztBQUVsQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0NBQXdDLDZCQUE2QjtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixnQkFBZ0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixzQkFBc0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7OztBQ3pXQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7OztBQ2ppQkE7QUFDQSxnREFBZ0Qsc0NBQXNDO0FBQ3RGLGlEQUFpRCxzQ0FBc0M7QUFDdkYsa0RBQWtELHdDQUF3QztBQUMxRixpREFBaUQsdUNBQXVDO0FBQ3hGLGlEQUFpRCx1Q0FBdUM7QUFDeEYsK0NBQStDLHVDQUF1QztBQUN0Riw4Q0FBOEMsMkNBQTJDO0FBQ3pGLCtDQUErQyx1Q0FBdUM7QUFDdEYsZ0RBQWdELHdDQUF3QztBQUN4RixrREFBa0Q7O0FBRWxEO0FBQ0EsNENBQTRDLHdGQUFzQztBQUNsRiw2Q0FBNkMseUZBQXVDO0FBQ3BGLDZDQUE2Qyx5RkFBdUM7QUFDcEYsNENBQTRDLHdGQUFzQztBQUNsRiwyQ0FBMkMseUZBQXVDO0FBQ2xGLDJDQUEyQyx5RkFBdUM7QUFDbEYsNkNBQTZDLHlGQUF1QztBQUNwRiw2Q0FBNkMseUZBQXVDO0FBQ3BGLDBDQUEwQyw2RkFBMkM7QUFDckYsNENBQTRDLDBGQUF3QztBQUNwRix5Q0FBeUMsdUZBQXFDO0FBQzlFLDhDQUE4QztBQUM5Qzs7QUFFQTs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlDQUF5QyxjQUFjO0FBQ3ZEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsbUJBQW1COztBQUU5RDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTCxVQUFVLHVEQUF1RCxFQUFFO0FBQ25FO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7OztBQ3ZFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkIsZ0JBQWdCLDhDQUE4Qzs7QUFFM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3BFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsV0FBVztBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCwyREFBMkQsR0FBRztBQUM5RCxvRUFBb0UsR0FBRztBQUN2RTtBQUNBOztBQUVBOzs7Ozs7OztBQ3BCQTtBQUNBOzs7Ozs7OztBQ0RBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2hFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN4QkE7O0FBRUEsOEVBQThFOztBQUU5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQ2JBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQ2hCQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7QUMvQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQ2xCQTs7QUFFQSIsImZpbGUiOiJqcy9zY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5NGM3M2Y0ZDk2MTdkYWRhNmY1MCIsImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJztcblxuY29uc3QgdXJsID0gYC9hcGkvY2FydGA7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICBjcmVhdGU6ICh7dGV4dCwgaWQsIG5hbWUsIGJsb2J9KSA9PiB7XG4gICAgY29uc3QgbWV0aG9kID0gYFBPU1RgO1xuICAgIGNvbnN0IG5ld0ZpbGVOYW1lID0gYCR7aWQuc3BsaXQoYCBgKS5qb2luKGBfYCl9YDtcbiAgICBjb25zdCBib2R5ID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgYm9keS5hcHBlbmQoYHRleHRgLCB0ZXh0KTtcbiAgICBib2R5LmFwcGVuZChgaWRgLCBpZCk7XG4gICAgYm9keS5hcHBlbmQoYG5hbWVgLCBuYW1lKTtcbiAgICBib2R5LmFwcGVuZChgc291bmRgLCBibG9iLCBuZXdGaWxlTmFtZSk7XG5cbiAgICByZXR1cm4gZmV0Y2godXJsLCB7bWV0aG9kLCBib2R5fSlcbiAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpO1xuICB9LFxuXG4gIHJlYWQ6ICgpID0+IHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dXJsfT9pc0FjdGl2ZT10cnVlYClcbiAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpO1xuICB9LFxuXG4gIHJlYWRPbmU6IGlkID0+IHtcbiAgICBjb25zdCBtZXRob2QgPSBgR0VUYDtcbiAgICByZXR1cm4gZmV0Y2goYCR7dXJsfS8ke2lkfWAsIHttZXRob2R9KS50aGVuKHIgPT4gci5qc29uKCkpO1xuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbGliL2NhcnRBUEkuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbnZhciByYW5kb21Gcm9tU2VlZCA9IHJlcXVpcmUoJy4vcmFuZG9tL3JhbmRvbS1mcm9tLXNlZWQnKTtcblxudmFyIE9SSUdJTkFMID0gJzAxMjM0NTY3ODlhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ekFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaXy0nO1xudmFyIGFscGhhYmV0O1xudmFyIHByZXZpb3VzU2VlZDtcblxudmFyIHNodWZmbGVkO1xuXG5mdW5jdGlvbiByZXNldCgpIHtcbiAgICBzaHVmZmxlZCA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBzZXRDaGFyYWN0ZXJzKF9hbHBoYWJldF8pIHtcbiAgICBpZiAoIV9hbHBoYWJldF8pIHtcbiAgICAgICAgaWYgKGFscGhhYmV0ICE9PSBPUklHSU5BTCkge1xuICAgICAgICAgICAgYWxwaGFiZXQgPSBPUklHSU5BTDtcbiAgICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChfYWxwaGFiZXRfID09PSBhbHBoYWJldCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKF9hbHBoYWJldF8ubGVuZ3RoICE9PSBPUklHSU5BTC5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDdXN0b20gYWxwaGFiZXQgZm9yIHNob3J0aWQgbXVzdCBiZSAnICsgT1JJR0lOQUwubGVuZ3RoICsgJyB1bmlxdWUgY2hhcmFjdGVycy4gWW91IHN1Ym1pdHRlZCAnICsgX2FscGhhYmV0Xy5sZW5ndGggKyAnIGNoYXJhY3RlcnM6ICcgKyBfYWxwaGFiZXRfKTtcbiAgICB9XG5cbiAgICB2YXIgdW5pcXVlID0gX2FscGhhYmV0Xy5zcGxpdCgnJykuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0sIGluZCwgYXJyKXtcbiAgICAgICByZXR1cm4gaW5kICE9PSBhcnIubGFzdEluZGV4T2YoaXRlbSk7XG4gICAgfSk7XG5cbiAgICBpZiAodW5pcXVlLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0N1c3RvbSBhbHBoYWJldCBmb3Igc2hvcnRpZCBtdXN0IGJlICcgKyBPUklHSU5BTC5sZW5ndGggKyAnIHVuaXF1ZSBjaGFyYWN0ZXJzLiBUaGVzZSBjaGFyYWN0ZXJzIHdlcmUgbm90IHVuaXF1ZTogJyArIHVuaXF1ZS5qb2luKCcsICcpKTtcbiAgICB9XG5cbiAgICBhbHBoYWJldCA9IF9hbHBoYWJldF87XG4gICAgcmVzZXQoKTtcbn1cblxuZnVuY3Rpb24gY2hhcmFjdGVycyhfYWxwaGFiZXRfKSB7XG4gICAgc2V0Q2hhcmFjdGVycyhfYWxwaGFiZXRfKTtcbiAgICByZXR1cm4gYWxwaGFiZXQ7XG59XG5cbmZ1bmN0aW9uIHNldFNlZWQoc2VlZCkge1xuICAgIHJhbmRvbUZyb21TZWVkLnNlZWQoc2VlZCk7XG4gICAgaWYgKHByZXZpb3VzU2VlZCAhPT0gc2VlZCkge1xuICAgICAgICByZXNldCgpO1xuICAgICAgICBwcmV2aW91c1NlZWQgPSBzZWVkO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2h1ZmZsZSgpIHtcbiAgICBpZiAoIWFscGhhYmV0KSB7XG4gICAgICAgIHNldENoYXJhY3RlcnMoT1JJR0lOQUwpO1xuICAgIH1cblxuICAgIHZhciBzb3VyY2VBcnJheSA9IGFscGhhYmV0LnNwbGl0KCcnKTtcbiAgICB2YXIgdGFyZ2V0QXJyYXkgPSBbXTtcbiAgICB2YXIgciA9IHJhbmRvbUZyb21TZWVkLm5leHRWYWx1ZSgpO1xuICAgIHZhciBjaGFyYWN0ZXJJbmRleDtcblxuICAgIHdoaWxlIChzb3VyY2VBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHIgPSByYW5kb21Gcm9tU2VlZC5uZXh0VmFsdWUoKTtcbiAgICAgICAgY2hhcmFjdGVySW5kZXggPSBNYXRoLmZsb29yKHIgKiBzb3VyY2VBcnJheS5sZW5ndGgpO1xuICAgICAgICB0YXJnZXRBcnJheS5wdXNoKHNvdXJjZUFycmF5LnNwbGljZShjaGFyYWN0ZXJJbmRleCwgMSlbMF0pO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0QXJyYXkuam9pbignJyk7XG59XG5cbmZ1bmN0aW9uIGdldFNodWZmbGVkKCkge1xuICAgIGlmIChzaHVmZmxlZCkge1xuICAgICAgICByZXR1cm4gc2h1ZmZsZWQ7XG4gICAgfVxuICAgIHNodWZmbGVkID0gc2h1ZmZsZSgpO1xuICAgIHJldHVybiBzaHVmZmxlZDtcbn1cblxuLyoqXG4gKiBsb29rdXAgc2h1ZmZsZWQgbGV0dGVyXG4gKiBAcGFyYW0gaW5kZXhcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGxvb2t1cChpbmRleCkge1xuICAgIHZhciBhbHBoYWJldFNodWZmbGVkID0gZ2V0U2h1ZmZsZWQoKTtcbiAgICByZXR1cm4gYWxwaGFiZXRTaHVmZmxlZFtpbmRleF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGNoYXJhY3RlcnM6IGNoYXJhY3RlcnMsXG4gICAgc2VlZDogc2V0U2VlZCxcbiAgICBsb29rdXA6IGxvb2t1cCxcbiAgICBzaHVmZmxlZDogZ2V0U2h1ZmZsZWRcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaG9ydGlkL2xpYi9hbHBoYWJldC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBDb2xvcnMgPSB7XG4gIHNraW46IDB4ZmZlMGJkLFxuICBza2luMjogMHhjZmJhOTYsXG4gIHdoaXRlOiAweGU5ZWJlZSxcbiAgZ29sZDogMHhmOWM0MjEsXG4gIHRlZXRoOiAweGZmZmZmZixcbiAgYmVpZ2U6IDB4YTQ5MTc4LFxuICBicm93bjogMHg2ZTUxMzYsXG4gIGJsYWNrOiAweDJlMmUyZSxcbiAgbGlnaHRCbHVlOiAweDYyOTVhOCxcbiAgeWVsbG93OiAweGZmZjAwMCxcbiAgcmVkOiAweGNkMDAyMFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29sb3JzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvb2JqZWN0cy9jb2xvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gdGhlIHdoYXR3Zy1mZXRjaCBwb2x5ZmlsbCBpbnN0YWxscyB0aGUgZmV0Y2goKSBmdW5jdGlvblxuLy8gb24gdGhlIGdsb2JhbCBvYmplY3QgKHdpbmRvdyBvciBzZWxmKVxuLy9cbi8vIFJldHVybiB0aGF0IGFzIHRoZSBleHBvcnQgZm9yIHVzZSBpbiBXZWJwYWNrLCBCcm93c2VyaWZ5IGV0Yy5cbnJlcXVpcmUoJ3doYXR3Zy1mZXRjaCcpO1xubW9kdWxlLmV4cG9ydHMgPSBzZWxmLmZldGNoLmJpbmQoc2VsZik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLWZldGNoL2ZldGNoLW5wbS1icm93c2VyaWZ5LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiKGZ1bmN0aW9uKHNlbGYpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGlmIChzZWxmLmZldGNoKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgc3VwcG9ydCA9IHtcbiAgICBzZWFyY2hQYXJhbXM6ICdVUkxTZWFyY2hQYXJhbXMnIGluIHNlbGYsXG4gICAgaXRlcmFibGU6ICdTeW1ib2wnIGluIHNlbGYgJiYgJ2l0ZXJhdG9yJyBpbiBTeW1ib2wsXG4gICAgYmxvYjogJ0ZpbGVSZWFkZXInIGluIHNlbGYgJiYgJ0Jsb2InIGluIHNlbGYgJiYgKGZ1bmN0aW9uKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbmV3IEJsb2IoKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH0pKCksXG4gICAgZm9ybURhdGE6ICdGb3JtRGF0YScgaW4gc2VsZixcbiAgICBhcnJheUJ1ZmZlcjogJ0FycmF5QnVmZmVyJyBpbiBzZWxmXG4gIH1cblxuICBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlcikge1xuICAgIHZhciB2aWV3Q2xhc3NlcyA9IFtcbiAgICAgICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgICAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgICAnW29iamVjdCBGbG9hdDY0QXJyYXldJ1xuICAgIF1cblxuICAgIHZhciBpc0RhdGFWaWV3ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIERhdGFWaWV3LnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKG9iailcbiAgICB9XG5cbiAgICB2YXIgaXNBcnJheUJ1ZmZlclZpZXcgPSBBcnJheUJ1ZmZlci5pc1ZpZXcgfHwgZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHZpZXdDbGFzc2VzLmluZGV4T2YoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikpID4gLTFcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWxpemVOYW1lKG5hbWUpIHtcbiAgICBpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICBuYW1lID0gU3RyaW5nKG5hbWUpXG4gICAgfVxuICAgIGlmICgvW15hLXowLTlcXC0jJCUmJyorLlxcXl9gfH5dL2kudGVzdChuYW1lKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBjaGFyYWN0ZXIgaW4gaGVhZGVyIGZpZWxkIG5hbWUnKVxuICAgIH1cbiAgICByZXR1cm4gbmFtZS50b0xvd2VyQ2FzZSgpXG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWxpemVWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB2YWx1ZSA9IFN0cmluZyh2YWx1ZSlcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICAvLyBCdWlsZCBhIGRlc3RydWN0aXZlIGl0ZXJhdG9yIGZvciB0aGUgdmFsdWUgbGlzdFxuICBmdW5jdGlvbiBpdGVyYXRvckZvcihpdGVtcykge1xuICAgIHZhciBpdGVyYXRvciA9IHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdmFsdWUgPSBpdGVtcy5zaGlmdCgpXG4gICAgICAgIHJldHVybiB7ZG9uZTogdmFsdWUgPT09IHVuZGVmaW5lZCwgdmFsdWU6IHZhbHVlfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdXBwb3J0Lml0ZXJhYmxlKSB7XG4gICAgICBpdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvclxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpdGVyYXRvclxuICB9XG5cbiAgZnVuY3Rpb24gSGVhZGVycyhoZWFkZXJzKSB7XG4gICAgdGhpcy5tYXAgPSB7fVxuXG4gICAgaWYgKGhlYWRlcnMgaW5zdGFuY2VvZiBIZWFkZXJzKSB7XG4gICAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQobmFtZSwgdmFsdWUpXG4gICAgICB9LCB0aGlzKVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShoZWFkZXJzKSkge1xuICAgICAgaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKGhlYWRlcikge1xuICAgICAgICB0aGlzLmFwcGVuZChoZWFkZXJbMF0sIGhlYWRlclsxXSlcbiAgICAgIH0sIHRoaXMpXG4gICAgfSBlbHNlIGlmIChoZWFkZXJzKSB7XG4gICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoZWFkZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQobmFtZSwgaGVhZGVyc1tuYW1lXSlcbiAgICAgIH0sIHRoaXMpXG4gICAgfVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICBuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKVxuICAgIHZhbHVlID0gbm9ybWFsaXplVmFsdWUodmFsdWUpXG4gICAgdmFyIG9sZFZhbHVlID0gdGhpcy5tYXBbbmFtZV1cbiAgICB0aGlzLm1hcFtuYW1lXSA9IG9sZFZhbHVlID8gb2xkVmFsdWUrJywnK3ZhbHVlIDogdmFsdWVcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlWydkZWxldGUnXSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy5tYXBbbm9ybWFsaXplTmFtZShuYW1lKV1cbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKVxuICAgIHJldHVybiB0aGlzLmhhcyhuYW1lKSA/IHRoaXMubWFwW25hbWVdIDogbnVsbFxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24obmFtZSkge1xuICAgIHJldHVybiB0aGlzLm1hcC5oYXNPd25Qcm9wZXJ0eShub3JtYWxpemVOYW1lKG5hbWUpKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICB0aGlzLm1hcFtub3JtYWxpemVOYW1lKG5hbWUpXSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uKGNhbGxiYWNrLCB0aGlzQXJnKSB7XG4gICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzLm1hcCkge1xuICAgICAgaWYgKHRoaXMubWFwLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdGhpcy5tYXBbbmFtZV0sIG5hbWUsIHRoaXMpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdXG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7IGl0ZW1zLnB1c2gobmFtZSkgfSlcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS52YWx1ZXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXVxuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkgeyBpdGVtcy5wdXNoKHZhbHVlKSB9KVxuICAgIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmVudHJpZXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXVxuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkgeyBpdGVtcy5wdXNoKFtuYW1lLCB2YWx1ZV0pIH0pXG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9XG5cbiAgaWYgKHN1cHBvcnQuaXRlcmFibGUpIHtcbiAgICBIZWFkZXJzLnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdID0gSGVhZGVycy5wcm90b3R5cGUuZW50cmllc1xuICB9XG5cbiAgZnVuY3Rpb24gY29uc3VtZWQoYm9keSkge1xuICAgIGlmIChib2R5LmJvZHlVc2VkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFR5cGVFcnJvcignQWxyZWFkeSByZWFkJykpXG4gICAgfVxuICAgIGJvZHkuYm9keVVzZWQgPSB0cnVlXG4gIH1cblxuICBmdW5jdGlvbiBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXNvbHZlKHJlYWRlci5yZXN1bHQpXG4gICAgICB9XG4gICAgICByZWFkZXIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QocmVhZGVyLmVycm9yKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQmxvYkFzQXJyYXlCdWZmZXIoYmxvYikge1xuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgdmFyIHByb21pc2UgPSBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKVxuICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iKVxuICAgIHJldHVybiBwcm9taXNlXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQmxvYkFzVGV4dChibG9iKSB7XG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICB2YXIgcHJvbWlzZSA9IGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpXG4gICAgcmVhZGVyLnJlYWRBc1RleHQoYmxvYilcbiAgICByZXR1cm4gcHJvbWlzZVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEFycmF5QnVmZmVyQXNUZXh0KGJ1Zikge1xuICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoYnVmKVxuICAgIHZhciBjaGFycyA9IG5ldyBBcnJheSh2aWV3Lmxlbmd0aClcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmlldy5sZW5ndGg7IGkrKykge1xuICAgICAgY2hhcnNbaV0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHZpZXdbaV0pXG4gICAgfVxuICAgIHJldHVybiBjaGFycy5qb2luKCcnKVxuICB9XG5cbiAgZnVuY3Rpb24gYnVmZmVyQ2xvbmUoYnVmKSB7XG4gICAgaWYgKGJ1Zi5zbGljZSkge1xuICAgICAgcmV0dXJuIGJ1Zi5zbGljZSgwKVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1Zi5ieXRlTGVuZ3RoKVxuICAgICAgdmlldy5zZXQobmV3IFVpbnQ4QXJyYXkoYnVmKSlcbiAgICAgIHJldHVybiB2aWV3LmJ1ZmZlclxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIEJvZHkoKSB7XG4gICAgdGhpcy5ib2R5VXNlZCA9IGZhbHNlXG5cbiAgICB0aGlzLl9pbml0Qm9keSA9IGZ1bmN0aW9uKGJvZHkpIHtcbiAgICAgIHRoaXMuX2JvZHlJbml0ID0gYm9keVxuICAgICAgaWYgKCFib2R5KSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gJydcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGJvZHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmJsb2IgJiYgQmxvYi5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5QmxvYiA9IGJvZHlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5mb3JtRGF0YSAmJiBGb3JtRGF0YS5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5Rm9ybURhdGEgPSBib2R5XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuc2VhcmNoUGFyYW1zICYmIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHkudG9TdHJpbmcoKVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyICYmIHN1cHBvcnQuYmxvYiAmJiBpc0RhdGFWaWV3KGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlBcnJheUJ1ZmZlciA9IGJ1ZmZlckNsb25lKGJvZHkuYnVmZmVyKVxuICAgICAgICAvLyBJRSAxMC0xMSBjYW4ndCBoYW5kbGUgYSBEYXRhVmlldyBib2R5LlxuICAgICAgICB0aGlzLl9ib2R5SW5pdCA9IG5ldyBCbG9iKFt0aGlzLl9ib2R5QXJyYXlCdWZmZXJdKVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyICYmIChBcnJheUJ1ZmZlci5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSB8fCBpc0FycmF5QnVmZmVyVmlldyhib2R5KSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyID0gYnVmZmVyQ2xvbmUoYm9keSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndW5zdXBwb3J0ZWQgQm9keUluaXQgdHlwZScpXG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJykpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsICd0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLTgnKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlCbG9iICYmIHRoaXMuX2JvZHlCbG9iLnR5cGUpIHtcbiAgICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCB0aGlzLl9ib2R5QmxvYi50eXBlKVxuICAgICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuc2VhcmNoUGFyYW1zICYmIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD1VVEYtOCcpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VwcG9ydC5ibG9iKSB7XG4gICAgICB0aGlzLmJsb2IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHJlamVjdGVkID0gY29uc3VtZWQodGhpcylcbiAgICAgICAgaWYgKHJlamVjdGVkKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdGVkXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fYm9keUJsb2IpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlCbG9iKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3RoaXMuX2JvZHlBcnJheUJ1ZmZlcl0pKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlGb3JtRGF0YSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IHJlYWQgRm9ybURhdGEgYm9keSBhcyBibG9iJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBCbG9iKFt0aGlzLl9ib2R5VGV4dF0pKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYXJyYXlCdWZmZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICAgIHJldHVybiBjb25zdW1lZCh0aGlzKSB8fCBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUFycmF5QnVmZmVyKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmJsb2IoKS50aGVuKHJlYWRCbG9iQXNBcnJheUJ1ZmZlcilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMudGV4dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHJlamVjdGVkID0gY29uc3VtZWQodGhpcylcbiAgICAgIGlmIChyZWplY3RlZCkge1xuICAgICAgICByZXR1cm4gcmVqZWN0ZWRcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2JvZHlCbG9iKSB7XG4gICAgICAgIHJldHVybiByZWFkQmxvYkFzVGV4dCh0aGlzLl9ib2R5QmxvYilcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVhZEFycmF5QnVmZmVyQXNUZXh0KHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlGb3JtRGF0YSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkIG5vdCByZWFkIEZvcm1EYXRhIGJvZHkgYXMgdGV4dCcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlUZXh0KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdXBwb3J0LmZvcm1EYXRhKSB7XG4gICAgICB0aGlzLmZvcm1EYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKGRlY29kZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmpzb24gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKEpTT04ucGFyc2UpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIC8vIEhUVFAgbWV0aG9kcyB3aG9zZSBjYXBpdGFsaXphdGlvbiBzaG91bGQgYmUgbm9ybWFsaXplZFxuICB2YXIgbWV0aG9kcyA9IFsnREVMRVRFJywgJ0dFVCcsICdIRUFEJywgJ09QVElPTlMnLCAnUE9TVCcsICdQVVQnXVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZU1ldGhvZChtZXRob2QpIHtcbiAgICB2YXIgdXBjYXNlZCA9IG1ldGhvZC50b1VwcGVyQ2FzZSgpXG4gICAgcmV0dXJuIChtZXRob2RzLmluZGV4T2YodXBjYXNlZCkgPiAtMSkgPyB1cGNhc2VkIDogbWV0aG9kXG4gIH1cblxuICBmdW5jdGlvbiBSZXF1ZXN0KGlucHV0LCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgICB2YXIgYm9keSA9IG9wdGlvbnMuYm9keVxuXG4gICAgaWYgKGlucHV0IGluc3RhbmNlb2YgUmVxdWVzdCkge1xuICAgICAgaWYgKGlucHV0LmJvZHlVc2VkKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FscmVhZHkgcmVhZCcpXG4gICAgICB9XG4gICAgICB0aGlzLnVybCA9IGlucHV0LnVybFxuICAgICAgdGhpcy5jcmVkZW50aWFscyA9IGlucHV0LmNyZWRlbnRpYWxzXG4gICAgICBpZiAoIW9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhpbnB1dC5oZWFkZXJzKVxuICAgICAgfVxuICAgICAgdGhpcy5tZXRob2QgPSBpbnB1dC5tZXRob2RcbiAgICAgIHRoaXMubW9kZSA9IGlucHV0Lm1vZGVcbiAgICAgIGlmICghYm9keSAmJiBpbnB1dC5fYm9keUluaXQgIT0gbnVsbCkge1xuICAgICAgICBib2R5ID0gaW5wdXQuX2JvZHlJbml0XG4gICAgICAgIGlucHV0LmJvZHlVc2VkID0gdHJ1ZVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVybCA9IFN0cmluZyhpbnB1dClcbiAgICB9XG5cbiAgICB0aGlzLmNyZWRlbnRpYWxzID0gb3B0aW9ucy5jcmVkZW50aWFscyB8fCB0aGlzLmNyZWRlbnRpYWxzIHx8ICdvbWl0J1xuICAgIGlmIChvcHRpb25zLmhlYWRlcnMgfHwgIXRoaXMuaGVhZGVycykge1xuICAgICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKVxuICAgIH1cbiAgICB0aGlzLm1ldGhvZCA9IG5vcm1hbGl6ZU1ldGhvZChvcHRpb25zLm1ldGhvZCB8fCB0aGlzLm1ldGhvZCB8fCAnR0VUJylcbiAgICB0aGlzLm1vZGUgPSBvcHRpb25zLm1vZGUgfHwgdGhpcy5tb2RlIHx8IG51bGxcbiAgICB0aGlzLnJlZmVycmVyID0gbnVsbFxuXG4gICAgaWYgKCh0aGlzLm1ldGhvZCA9PT0gJ0dFVCcgfHwgdGhpcy5tZXRob2QgPT09ICdIRUFEJykgJiYgYm9keSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9keSBub3QgYWxsb3dlZCBmb3IgR0VUIG9yIEhFQUQgcmVxdWVzdHMnKVxuICAgIH1cbiAgICB0aGlzLl9pbml0Qm9keShib2R5KVxuICB9XG5cbiAgUmVxdWVzdC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFJlcXVlc3QodGhpcywgeyBib2R5OiB0aGlzLl9ib2R5SW5pdCB9KVxuICB9XG5cbiAgZnVuY3Rpb24gZGVjb2RlKGJvZHkpIHtcbiAgICB2YXIgZm9ybSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgYm9keS50cmltKCkuc3BsaXQoJyYnKS5mb3JFYWNoKGZ1bmN0aW9uKGJ5dGVzKSB7XG4gICAgICBpZiAoYnl0ZXMpIHtcbiAgICAgICAgdmFyIHNwbGl0ID0gYnl0ZXMuc3BsaXQoJz0nKVxuICAgICAgICB2YXIgbmFtZSA9IHNwbGl0LnNoaWZ0KCkucmVwbGFjZSgvXFwrL2csICcgJylcbiAgICAgICAgdmFyIHZhbHVlID0gc3BsaXQuam9pbignPScpLnJlcGxhY2UoL1xcKy9nLCAnICcpXG4gICAgICAgIGZvcm0uYXBwZW5kKGRlY29kZVVSSUNvbXBvbmVudChuYW1lKSwgZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBmb3JtXG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUhlYWRlcnMocmF3SGVhZGVycykge1xuICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKVxuICAgIHJhd0hlYWRlcnMuc3BsaXQoL1xccj9cXG4vKS5mb3JFYWNoKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgIHZhciBwYXJ0cyA9IGxpbmUuc3BsaXQoJzonKVxuICAgICAgdmFyIGtleSA9IHBhcnRzLnNoaWZ0KCkudHJpbSgpXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHBhcnRzLmpvaW4oJzonKS50cmltKClcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoa2V5LCB2YWx1ZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBoZWFkZXJzXG4gIH1cblxuICBCb2R5LmNhbGwoUmVxdWVzdC5wcm90b3R5cGUpXG5cbiAgZnVuY3Rpb24gUmVzcG9uc2UoYm9keUluaXQsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSB7fVxuICAgIH1cblxuICAgIHRoaXMudHlwZSA9ICdkZWZhdWx0J1xuICAgIHRoaXMuc3RhdHVzID0gJ3N0YXR1cycgaW4gb3B0aW9ucyA/IG9wdGlvbnMuc3RhdHVzIDogMjAwXG4gICAgdGhpcy5vayA9IHRoaXMuc3RhdHVzID49IDIwMCAmJiB0aGlzLnN0YXR1cyA8IDMwMFxuICAgIHRoaXMuc3RhdHVzVGV4dCA9ICdzdGF0dXNUZXh0JyBpbiBvcHRpb25zID8gb3B0aW9ucy5zdGF0dXNUZXh0IDogJ09LJ1xuICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdGlvbnMuaGVhZGVycylcbiAgICB0aGlzLnVybCA9IG9wdGlvbnMudXJsIHx8ICcnXG4gICAgdGhpcy5faW5pdEJvZHkoYm9keUluaXQpXG4gIH1cblxuICBCb2R5LmNhbGwoUmVzcG9uc2UucHJvdG90eXBlKVxuXG4gIFJlc3BvbnNlLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUmVzcG9uc2UodGhpcy5fYm9keUluaXQsIHtcbiAgICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgICBzdGF0dXNUZXh0OiB0aGlzLnN0YXR1c1RleHQsXG4gICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh0aGlzLmhlYWRlcnMpLFxuICAgICAgdXJsOiB0aGlzLnVybFxuICAgIH0pXG4gIH1cblxuICBSZXNwb25zZS5lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZXNwb25zZSA9IG5ldyBSZXNwb25zZShudWxsLCB7c3RhdHVzOiAwLCBzdGF0dXNUZXh0OiAnJ30pXG4gICAgcmVzcG9uc2UudHlwZSA9ICdlcnJvcidcbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgfVxuXG4gIHZhciByZWRpcmVjdFN0YXR1c2VzID0gWzMwMSwgMzAyLCAzMDMsIDMwNywgMzA4XVxuXG4gIFJlc3BvbnNlLnJlZGlyZWN0ID0gZnVuY3Rpb24odXJsLCBzdGF0dXMpIHtcbiAgICBpZiAocmVkaXJlY3RTdGF0dXNlcy5pbmRleE9mKHN0YXR1cykgPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCBzdGF0dXMgY29kZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShudWxsLCB7c3RhdHVzOiBzdGF0dXMsIGhlYWRlcnM6IHtsb2NhdGlvbjogdXJsfX0pXG4gIH1cblxuICBzZWxmLkhlYWRlcnMgPSBIZWFkZXJzXG4gIHNlbGYuUmVxdWVzdCA9IFJlcXVlc3RcbiAgc2VsZi5SZXNwb25zZSA9IFJlc3BvbnNlXG5cbiAgc2VsZi5mZXRjaCA9IGZ1bmN0aW9uKGlucHV0LCBpbml0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgUmVxdWVzdChpbnB1dCwgaW5pdClcbiAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuXG4gICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgIHN0YXR1czogeGhyLnN0YXR1cyxcbiAgICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dCxcbiAgICAgICAgICBoZWFkZXJzOiBwYXJzZUhlYWRlcnMoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpIHx8ICcnKVxuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMudXJsID0gJ3Jlc3BvbnNlVVJMJyBpbiB4aHIgPyB4aHIucmVzcG9uc2VVUkwgOiBvcHRpb25zLmhlYWRlcnMuZ2V0KCdYLVJlcXVlc3QtVVJMJylcbiAgICAgICAgdmFyIGJvZHkgPSAncmVzcG9uc2UnIGluIHhociA/IHhoci5yZXNwb25zZSA6IHhoci5yZXNwb25zZVRleHRcbiAgICAgICAgcmVzb2x2ZShuZXcgUmVzcG9uc2UoYm9keSwgb3B0aW9ucykpXG4gICAgICB9XG5cbiAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJykpXG4gICAgICB9XG5cbiAgICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ05ldHdvcmsgcmVxdWVzdCBmYWlsZWQnKSlcbiAgICAgIH1cblxuICAgICAgeGhyLm9wZW4ocmVxdWVzdC5tZXRob2QsIHJlcXVlc3QudXJsLCB0cnVlKVxuXG4gICAgICBpZiAocmVxdWVzdC5jcmVkZW50aWFscyA9PT0gJ2luY2x1ZGUnKSB7XG4gICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmICgncmVzcG9uc2VUeXBlJyBpbiB4aHIgJiYgc3VwcG9ydC5ibG9iKSB7XG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYmxvYidcbiAgICAgIH1cblxuICAgICAgcmVxdWVzdC5oZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgdmFsdWUpXG4gICAgICB9KVxuXG4gICAgICB4aHIuc2VuZCh0eXBlb2YgcmVxdWVzdC5fYm9keUluaXQgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHJlcXVlc3QuX2JvZHlJbml0KVxuICAgIH0pXG4gIH1cbiAgc2VsZi5mZXRjaC5wb2x5ZmlsbCA9IHRydWVcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3doYXR3Zy1mZXRjaC9mZXRjaC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJhbmRvbUJ5dGUgPSByZXF1aXJlKCcuL3JhbmRvbS9yYW5kb20tYnl0ZScpO1xuXG5mdW5jdGlvbiBlbmNvZGUobG9va3VwLCBudW1iZXIpIHtcbiAgICB2YXIgbG9vcENvdW50ZXIgPSAwO1xuICAgIHZhciBkb25lO1xuXG4gICAgdmFyIHN0ciA9ICcnO1xuXG4gICAgd2hpbGUgKCFkb25lKSB7XG4gICAgICAgIHN0ciA9IHN0ciArIGxvb2t1cCggKCAobnVtYmVyID4+ICg0ICogbG9vcENvdW50ZXIpKSAmIDB4MGYgKSB8IHJhbmRvbUJ5dGUoKSApO1xuICAgICAgICBkb25lID0gbnVtYmVyIDwgKE1hdGgucG93KDE2LCBsb29wQ291bnRlciArIDEgKSApO1xuICAgICAgICBsb29wQ291bnRlcisrO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVuY29kZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Nob3J0aWQvbGliL2VuY29kZS5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgSGVhZCBmcm9tICcuL2NsYXNzZXMvSGVhZCc7XG5pbXBvcnQgQ29sb3JzIGZyb20gJy4vb2JqZWN0cy9jb2xvcnMnO1xuaW1wb3J0IEF1ZGlvIGZyb20gJy4vY2xhc3Nlcy9BdWRpby5qcyc7XG5pbXBvcnQgU3BlZWNoUmVjb2duIGZyb20gJy4vY2xhc3Nlcy9TcGVlY2hSZWNvZ25pdGlvbi5qcyc7XG5pbXBvcnQgaGFuZGxlU2F2ZSBmcm9tICcuL29iamVjdHMvU2F2ZSc7XG5pbXBvcnQgQ2FydEFQSSBmcm9tICcuL2xpYi9jYXJ0QVBJJztcbntcbiAgbGV0IHNjZW5lLFxuICAgIGNhbWVyYSxcbiAgICBmaWVsZE9mVmlldyxcbiAgICBhc3BlY3RSYXRpbyxcbiAgICBuZWFyUGxhbmUsXG4gICAgZmFyUGxhbmUsXG4gICAgSEVJR0hULFxuICAgIFdJRFRILFxuICAgIGdsb2JhbExpZ2h0LFxuICAgIHNoYWRvd0xpZ2h0LFxuICAgIGJhY2tMaWdodCxcbiAgICBsaWdodCxcbiAgICByZW5kZXJlcixcbiAgICBjb250YWluZXIsXG4gICAgY29udHJvbHMsXG4gICAgbG9hZGVkLFxuICAgIGhlYWQsXG4gICAgc3RhcnMsXG4gICAgd2luZG93SGFsZlgsXG4gICAgd2luZG93SGFsZlksXG4gICAgY29sb3IsXG4gICAgYXVkaW8sXG4gICAgU3BlZWNoVGV4dDtcblxuICBjb25zdCBzYXZlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHNhdmVfYXVkaW9gKTtcblxuICBsZXQgbW91c2VQb3MgPSB7IHg6IDAsIHk6IDB9O1xuXG4gIGxldCBzdGFyQXJyYXkgPSBbXTtcblxuICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgIGNyZWF0ZVNjZW5lKCk7XG4gICAgY3JlYXRlTGlnaHRzKCk7XG5cbiAgICAvLyBjcmVhdGUgc25vd1xuICAgIHBhcnRpY2xlc0pTLmxvYWQoJ2NvbnRhaW5lcicsICcuLi9hc3NldHMvcGFydGljbGVzLmpzb24nLCAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnY2FsbGJhY2sgLSBwYXJ0aWNsZXMuanMgY29uZmlnIGxvYWRlZCcpO1xuICAgIH0pO1xuXG4gICAgLy8gaGFuZGxlIGF1ZGlvXG4gICAgYXVkaW8gPSBuZXcgQXVkaW8oKTtcblxuICAgIC8vIHNob3cgYW5kIGhhbmRsZSBoZWFkXG4gICAgaGVhZCA9IG5ldyBIZWFkKCk7XG4gICAgc2NlbmUuYWRkKGhlYWQubWVzaCk7XG5cbiAgICAvLyBoYW5kbGUgU3BlZWNoUmVjb2duaXRpb25cbiAgICBTcGVlY2hUZXh0ID0gbmV3IFNwZWVjaFJlY29nbigpO1xuXG4gICAgLy8gc2VuZCBvYmplY3RzIHRvIHNhdmUgb24gY2xpY2tcbiAgICBzYXZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgKCkgPT4ge1xuICAgICAgaGFuZGxlU2F2ZSh7XG4gICAgICAgIHRleHQ6IFNwZWVjaFRleHQudHh0LFxuICAgICAgICAvLyBzZW5kIGF1ZGlvYmxvYiB0byBzYXZlXG4gICAgICAgIGJsb2I6IGF1ZGlvLmJsb2JcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gY29uc29sZS5sb2coY29udHJvbGxlclRleHQpO1xuICAgIC8vIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgY29udHJvbGxlclRleHQodGhpcy5za2luQ29sb3IpO1xuICAgIGNvbnNvbGUubG9nKFwib25kZXIgQ29udHJvbGxlclwiKTtcbiAgICBjb25zdCBndWkgPSBuZXcgZGF0LkdVSSgpO1xuXG4gICAgLy8gbGV0IGNvbnRyb2wxID0gZ3VpLmFkZENvbG9yKGNvbnRyb2xsZXIsICdza2luQ29sb3InKTtcbiAgICAvLyBndWkuYWRkKG9wdGlvbnMsICdyZXNldCcpO1xuXG4gICAgLy8gc2V0IHNjZW5lIGZvciBleHRlbnNpb25cbiAgICB3aW5kb3cuc2NlbmUgPSBzY2VuZTtcblxuICAgIGxvb3AoKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVTY2VuZSA9ICgpID0+IHs7XG4gICAgSEVJR0hUID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIFdJRFRIID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgd2luZG93SGFsZlggPSBXSURUSCAvIDI7XG4gICAgd2luZG93SGFsZlkgPSBIRUlHSFQgLyAyO1xuXG4gICAgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbiAgICAvL3NjZW5lLmZvZyA9IG5ldyBUSFJFRS5Gb2coMHhmZmZmZmYsIDE1MCwzMDApO1xuICAgIGFzcGVjdFJhdGlvID0gV0lEVEggLyBIRUlHSFQ7XG4gICAgZmllbGRPZlZpZXcgPSA1MDtcbiAgICBuZWFyUGxhbmUgPSAxO1xuICAgIGZhclBsYW5lID0gMjAwMDtcbiAgICBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoZmllbGRPZlZpZXcsIGFzcGVjdFJhdGlvLCBuZWFyUGxhbmUsIGZhclBsYW5lKTtcbiAgICBjYW1lcmEucG9zaXRpb24ueCA9IDA7XG4gICAgY2FtZXJhLnBvc2l0aW9uLnogPSA3MDtcbiAgICBjYW1lcmEucG9zaXRpb24ueSA9IDA7XG5cbiAgICByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHthbHBoYTogdHJ1ZSwgYW50aWFsaWFzOiB0cnVlfSk7XG4gICAgcmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyhcbiAgICAgIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvXG4gICAgICA/IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvXG4gICAgICA6IDEpXG4gICAgcmVuZGVyZXIuc2V0U2l6ZShXSURUSCwgSEVJR0hUKTtcbiAgICByZW5kZXJlci5zaGFkb3dNYXAuZW5hYmxlZCA9IHRydWU7XG4gICAgcmVuZGVyZXIuc2hhZG93TWFwLnR5cGUgPSBUSFJFRS5QQ0ZTb2Z0U2hhZG93TWFwO1xuXG4gICAgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvbldpbmRvd1Jlc2l6ZSwgZmFsc2UpO1xuICAgIC8vaGFuZGxlV2luZG93UmVzaXplKCk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVNb3VzZU1vdmUsIGZhbHNlKTtcblxuICB9XG5cbiAgY29uc3Qgb25XaW5kb3dSZXNpemUgPSAoKSA9PiB7XG4gICAgSEVJR0hUID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIFdJRFRIID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgd2luZG93SGFsZlggPSBXSURUSCAvIDI7XG4gICAgd2luZG93SGFsZlkgPSBIRUlHSFQgLyAyO1xuICAgIHJlbmRlcmVyLnNldFNpemUoV0lEVEgsIEhFSUdIVCk7XG4gICAgY2FtZXJhLmFzcGVjdCA9IFdJRFRIIC8gSEVJR0hUO1xuICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVNb3VzZU1vdmUgPSBlID0+IHtcbiAgICAvLyBjb25zdCB0eCA9IC0xICsgKGV2ZW50LmNsaWVudFggLyBXSURUSCkgKjI7XG4gICAgLy8gbGV0IHR5ID0gMSAtIChldmVudC5jbGllbnRZIC8gSEVJR0hUKSoyO1xuICAgIC8vIG1vdXNlUG9zID0ge1xuICAgIC8vICAgeDogdHgsXG4gICAgLy8gICB5OiB0eVxuICAgIC8vIH07XG4gICAgbW91c2VQb3MgPSB7XG4gICAgICB4OiBldmVudC5jbGllbnRYLFxuICAgICAgeTogZXZlbnQuY2xpZW50WVxuICAgIH07XG4gIH1cblxuICBsZXQgbG9hZGVyTWFuYWdlciA9IG5ldyBUSFJFRS5Mb2FkaW5nTWFuYWdlcigpO1xuXG4gIGNvbnN0IG9uU3RhcnQgPSAodXJsLCBpdGVtc0xvYWRlZCwgaXRlbXNUb3RhbCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdTdGFydGVkIGxvYWRpbmcgZmlsZTogJyArIHVybCArICcuXFxuTG9hZGVkICcgKyBpdGVtc0xvYWRlZCArICcgb2YgJyArIGl0ZW1zVG90YWwgKyAnIGZpbGVzLicpO1xuICB9XG5cbiAgY29uc3Qgb25Mb2FkID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdMb2FkaW5nIGNvbXBsZXRlIScpO1xuICAgIGZpbmlzaGVkTG9hZGluZygpO1xuICB9XG5cbiAgY29uc3Qgb25Qcm9ncmVzcyA9ICh1cmwsIGl0ZW1zTG9hZGVkLCBpdGVtc1RvdGFsKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0xvYWRpbmcgZmlsZTogJyArIHVybCArICcuXFxuTG9hZGVkICcgKyBpdGVtc0xvYWRlZCArICcgb2YgJyArIGl0ZW1zVG90YWwgKyAnIGZpbGVzLicpO1xuICB9XG5cbiAgY29uc3Qgb25FcnJvciA9ICh1cmwpID0+IHtcbiAgICBjb25zb2xlLmxvZygnVGhlcmUgd2FzIGFuIGVycm9yIGxvYWRpbmcgJyArIHVybCk7XG4gIH1cblxuICBjb25zdCBmaW5pc2hlZExvYWRpbmcgPSAoKSA9PiB7XG4gICAgbG9hZGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVdpbmRvd1Jlc2l6ZSA9IGUgPT4ge1xuICAgIEhFSUdIVCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICBXSURUSCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHJlbmRlcmVyLnNldFNpemUoV0lEVEgsIEhFSUdIVCk7XG4gICAgY2FtZXJhLmFzcGVjdCA9IFdJRFRIIC8gSEVJR0hUO1xuICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gIH1cblxuICBsZXQgaXNNb2JpbGUgPSAvaVBob25lfEFuZHJvaWQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuXG4gIGNvbnN0IGNyZWF0ZUxpZ2h0cyA9ICgpID0+IHtcblxuICAgIGdsb2JhbExpZ2h0ID0gbmV3IFRIUkVFLkhlbWlzcGhlcmVMaWdodCgweGZmZmZmZiwgMHg1NTU1NTUsIC45KTtcblxuICAgIHNoYWRvd0xpZ2h0ID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoMHhmZmZmZmYsIC4zKTtcbiAgICBzaGFkb3dMaWdodC5wb3NpdGlvbi5zZXQoMTAwLCAyNTAsIDE3NSk7XG4gICAgc2hhZG93TGlnaHQuY2FzdFNoYWRvdyA9IHRydWU7XG4gICAgLy8gc2hhZG93TGlnaHQuc2hhZG93LmNhbWVyYS5sZWZ0ID0gLTE1MDtcbiAgICAvLyBzaGFkb3dMaWdodC5zaGFkb3cuY2FtZXJhLnJpZ2h0ID0gMTUwO1xuICAgIC8vIHNoYWRvd0xpZ2h0LnNoYWRvdy5jYW1lcmEudG9wID0gMTUwO1xuICAgIC8vIHNoYWRvd0xpZ2h0LnNoYWRvdy5jYW1lcmEuYm90dG9tID0gLTE1MDtcbiAgICAvLyBzaGFkb3dMaWdodC5zaGFkb3cuY2FtZXJhLm5lYXIgPSAxO1xuICAgIC8vIHNoYWRvd0xpZ2h0LnNoYWRvdy5jYW1lcmEuZmFyID0gMTAwMDtcblxuICAgIGJhY2tMaWdodCA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0KDB4ZmZmZmZmLCAuMik7XG4gICAgYmFja0xpZ2h0LnBvc2l0aW9uLnNldCgtMTAwLCAyMDAsIDE1MCk7XG4gICAgYmFja0xpZ2h0LmNhc3RTaGFkb3cgPSB0cnVlO1xuICAgIC8vYmFja0xpZ2h0LnBvc2l0aW9uLnNldCgxMDAsIDEwMCwgLTIwMCk7XG5cbiAgICBpZiAoaXNNb2JpbGUpXG4gICAgICBzaGFkb3dMaWdodC5zaGFkb3cubWFwU2l6ZS53aWR0aCA9IHNoYWRvd0xpZ2h0LnNoYWRvdy5tYXBTaXplLmhlaWdodCA9IDEwMjQ7XG4gICAgaWYgKCFpc01vYmlsZSlcbiAgICAgIHNoYWRvd0xpZ2h0LnNoYWRvdy5tYXBTaXplLndpZHRoID0gc2hhZG93TGlnaHQuc2hhZG93Lm1hcFNpemUuaGVpZ2h0ID0gMjA0ODtcblxuICAgIHNjZW5lLmFkZChnbG9iYWxMaWdodCk7XG4gICAgc2NlbmUuYWRkKHNoYWRvd0xpZ2h0KTtcbiAgICBzY2VuZS5hZGQoYmFja0xpZ2h0KTtcbiAgICBzY2VuZS5hZGQoIG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoIDB4ZWFkZWFkLCAwLjEgKSk7XG4gIH1cblxuICAvLyBjbGFzcyBTdGFyIHtcbiAgLy8gICBjb25zdHJ1Y3Rvcigpe1xuICAvL1xuICAvLyAgIFNUQVJcbiAgLy8gICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vXG4gIC8vICAgdGhpcy5tZXNoID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gIC8vXG4gIC8vICAgbGV0IHB0cyA9IFtdLFxuICAvLyAgICAgbnVtUHRzID0gNTtcbiAgLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVB0cyAqIDI7IGkrKykge1xuICAvLyAgICAgbGV0IGwgPSBpICUgMiA9PSAxXG4gIC8vICAgICAgID8gMVxuICAvLyAgICAgICA6IDI7XG4gIC8vICAgICBsZXQgYSA9IGkgLyBudW1QdHMgKiBNYXRoLlBJO1xuICAvLyAgICAgcHRzLnB1c2gobmV3IFRIUkVFLlZlY3RvcjIoTWF0aC5jb3MoYSkgKiBsLCBNYXRoLnNpbihhKSAqIGwpKTtcbiAgLy8gICB9XG4gIC8vICAgbGV0IHN0YXJTaGFwZSA9IG5ldyBUSFJFRS5TaGFwZShwdHMpO1xuICAvL1xuICAvLyAgIGxldCBleHRydWRlU2V0dGluZ3MgPSB7XG4gIC8vICAgICBhbW91bnQ6IDAuNSxcbiAgLy8gICAgIHN0ZXBzOiAxLFxuICAvLyAgICAgYmV2ZWxFbmFibGVkOiBmYWxzZVxuICAvLyAgIH07XG4gIC8vICAgbGV0IHN0YXJHZW9tID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShzdGFyU2hhcGUsIGV4dHJ1ZGVTZXR0aW5ncyk7XG4gIC8vICAgbGV0IHN0YXIgPSBuZXcgVEhSRUUuTWVzaChzdGFyR2VvbSwgeWVsbG93TWF0KTtcbiAgLy8gICBzdGFyLnJvdGF0aW9uLnggPSBNYXRoLlBJIC8gMjtcbiAgLy8gICB0aGlzLm1lc2guYWRkKHN0YXIpO1xuICAvLyB9XG4gIC8vIH1cbiAgLy9cbiAgLy8gbGV0IFN0YXJzR3JvdXAgPSBmdW5jdGlvbigpIHtcbiAgLy9cbiAgLy8gICAgIHRoaXMubWVzaCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAvL1xuICAvLyAgICAgdGhpcy5uU3RhcnMgPSAxNTtcbiAgLy9cbiAgLy8gICAgIGxldCBzdGVwQW5nbGUgPSBNYXRoLlBJICogMiAvIHRoaXMublN0YXJzO1xuICAvL1xuICAvLyAgICAgIENyZWF0ZSB0aGUgU3RhcnNcbiAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5uU3RhcnM7IGkrKykge1xuICAvL1xuICAvLyAgICAgICB0aGlzLnMgPSBuZXcgU3RhcigpO1xuICAvLyAgICAgICBsZXQgYSA9IHN0ZXBBbmdsZSAqIGk7XG4gIC8vICAgICAgIGxldCByID0gMTU7XG4gIC8vXG4gIC8vICAgICAgIHRoaXMucy5tZXNoLnBvc2l0aW9uLnkgPSBNYXRoLnNpbihhKSAqIHI7XG4gIC8vICAgICAgIHRoaXMucy5tZXNoLnBvc2l0aW9uLnggPSBNYXRoLmNvcyhhKSAqIHI7XG4gIC8vXG4gIC8vICAgICAgIHRoaXMucy5tZXNoLnJvdGF0aW9uLnogPSBhICsgTWF0aC5QSSAvIDI7XG4gIC8vICAgICAgIHRoaXMucy5tZXNoLnBvc2l0aW9uLnogPSAwIC0gTWF0aC5yYW5kb20oKSAqIDM7XG4gIC8vXG4gIC8vICAgICAgICAgcmFuZG9tIHNjYWxlIGZvciBlYWNoIGNsb3VkXG4gIC8vICAgICAgIGxldCBzYyA9IDAuNSArIE1hdGgucmFuZG9tKCkgKiAuNjtcbiAgLy8gICAgICAgdGhpcy5zLm1lc2guc2NhbGUuc2V0KHNjLCBzYywgc2MpO1xuICAvL1xuICAvLyAgICAgICB0aGlzLm1lc2guYWRkKHRoaXMucy5tZXNoKTtcbiAgLy8gICAgICAgc3RhckFycmF5LnB1c2godGhpcy5zKTtcbiAgLy8gICAgIH1cbiAgLy8gICAgIHRoaXMubWVzaC5yb3RhdGlvbi54ID0gTWF0aC5QSSAvIDI7XG4gIC8vIH1cblxuICBjb25zdCBjcmVhdGVIZWFkID0gKCkgPT4ge1xuICAgIGhlYWQgPSBuZXcgSGVhZCgpO1xuICAgIGhlYWQuaWRsZSgpO1xuICAgIHNjZW5lLmFkZChoZWFkLm1lc2gpO1xuICAgIC8vc3RhcnMgPSBuZXcgU3RhcnNHcm91cCgpO1xuICAgIC8vc2NlbmUuYWRkKHN0YXJzLm1lc2gpO1xuICB9XG5cbiAgY29uc3QgY3JlYXRlQ2hhcmFjdGVyID0gKCkgPT4ge1xuICAgIGNyZWF0ZUhlYWQoKTtcbiAgICBoZWFkLm1lc2gucG9zaXRpb24uc2V0KDAsIDIsIDApO1xuICAgIC8vc3RhcnMubWVzaC5wb3NpdGlvbi5zZXQoMCwgMTAsIDApO1xuICB9XG5cbiAgLy9CTElOS1xuICAvLy8vLy8vLy8vLy8vLy8vLy8vL1xuICBsZXQgaXNCbGlua2luZyA9IGZhbHNlO1xuICBjb25zdCBibGlua0xvb3AgPSAoKSA9PiB7XG4gICAgaXNCbGlua2luZyA9IGZhbHNlO1xuXG4gICAgaWYgKCghaXNCbGlua2luZykgJiYgKE1hdGgucmFuZG9tKCkgPiAwLjk5KSkge1xuICAgICAgaXNCbGlua2luZyA9IHRydWU7XG4gICAgICBibGluaygpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGJsaW5rID0gKCkgPT4ge1xuICAgIGhlYWQuZXllcy5zY2FsZS55ID0gMTtcbiAgICBUd2Vlbk1heC50byhoZWFkLmV5ZXMuc2NhbGUsIC4wNywge1xuICAgICAgeTogMCxcbiAgICAgIHlveW86IHRydWUsXG4gICAgICByZXBlYXQ6IDEsXG4gICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaXNCbGlua2luZyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy9IRUFEIEFOSU1BVElPTlNcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAvLyBIZWFkLnByb3RvdHlwZS5kaXp6eSA9IGZ1bmN0aW9uKCkge1xuICAvL1xuICAvLyAgICAgbGV0IGRpc3RhbmNlID0gMTtcbiAgLy9cbiAgLy8gICAgIHRoaXMuaGVhZC5yb3RhdGlvbi56ID0gTWF0aC5zaW4oRGF0ZS5ub3coKSAqIDAuMDA1KSAqIE1hdGguUEkgKiAwLjAxO1xuICAvLyAgICAgdGhpcy5oZWFkLnJvdGF0aW9uLnggPSBNYXRoLnNpbihEYXRlLm5vdygpICogMC4wMSkgKiBNYXRoLlBJICogMC4wMTtcbiAgLy8gICAgIHRoaXMuaGVhZC5yb3RhdGlvbi55ID0gTWF0aC5zaW4oRGF0ZS5ub3coKSAqIDAuMDA1KSAqIE1hdGguUEkgKiAwLjAxO1xuICAvL1xuICAvLyAgICAgdGhpcy5leWVCbHVlUmlnaHQucG9zaXRpb24ueCA9IE1hdGguc2luKERhdGUubm93KCkgKiAwLjAwNSkgKiAtZGlzdGFuY2U7XG4gIC8vICAgICB0aGlzLmV5ZUJsdWVMZWZ0LnBvc2l0aW9uLnggPSBNYXRoLnNpbihEYXRlLm5vdygpICogMC4wMDUpICogZGlzdGFuY2U7XG4gIC8vICAgICB0aGlzLmV5ZUJsdWVSaWdodC5wb3NpdGlvbi55ID0gTWF0aC5jb3MoRGF0ZS5ub3coKSAqIDAuMDA1KSAqIC1kaXN0YW5jZTtcbiAgLy8gICAgIHRoaXMuZXllQmx1ZUxlZnQucG9zaXRpb24ueSA9IE1hdGguY29zKERhdGUubm93KCkgKiAwLjAwNSkgKiBkaXN0YW5jZTtcbiAgLy8gICAgIHRoaXMuZXllQnJvd1JpZ2h0LnBvc2l0aW9uLnkgPSBNYXRoLmNvcyhEYXRlLm5vdygpICogMC4wMDUpICogLWRpc3RhbmNlO1xuICAvLyAgICAgdGhpcy5leWVCcm93TGVmdC5wb3NpdGlvbi55ID0gTWF0aC5jb3MoRGF0ZS5ub3coKSAqIDAuMDA1KSAqIGRpc3RhbmNlO1xuICAvL1xuICAvLyAgICAgdGhpcy5tb3VzdGFjaGUucm90YXRpb24ueiA9IE1hdGguc2luKERhdGUubm93KCkgKiAwLjAwNSkgKiBNYXRoLlBJICogMC4wNTtcbiAgLy9cbiAgLy8gICAgIGJsaW5rTG9vcCgpO1xuICAvLyAgICAgc3RhcnMuc3BpblNjYWxlKCk7XG4gIC8vXG4gIC8vICAgfVxuXG4gIC8vU1RBUkdST1VQXG4gIC8vIFN0YXJzR3JvdXAucHJvdG90eXBlLnNwaW5TY2FsZSA9IGZ1bmN0aW9uKCkge1xuICAvL1xuICAvLyAgICAgdGhpcy5tZXNoLnJvdGF0aW9uLnogKz0gMC4wMjtcbiAgLy9cbiAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhckFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gIC8vICAgICAgICBzdGFyQXJyYXlbaV0ubWVzaC5yb3RhdGlvbi54ID0gTWF0aC5zaW4oRGF0ZS5ub3coKSAqIDAuMDEpICogTWF0aC5QSSAqIDAuMSA7XG4gIC8vICAgICAgIHN0YXJBcnJheVtpXS5tZXNoLnJvdGF0aW9uLnogKz0gMCAtIE1hdGgucmFuZG9tKCkgKiAwLjE1O1xuICAvLyAgICAgICBzdGFyQXJyYXlbaV0ubWVzaC5yb3RhdGlvbi54ICs9IDAgLSBNYXRoLnJhbmRvbSgpICogMC4wNTtcbiAgLy9cbiAgLy8gICAgIH1cbiAgLy8gICB9XG5cbiAgLy8gY29uc3QgY29udHJvbGxlclRleHQgPSAoc2tpbkNvbG9yKSA9PiB7XG4gIC8vICAgY29uc29sZS5sb2coXCJJbnNpZGUgRklaWllcIik7XG4gIC8vXG4gIC8vICAgdGhpcy5za2luQ29sb3IgPSBcIiNlNDQyMzFcIjtcbiAgLy8gfVxuXG4gIGNvbnN0IGxvb3AgPSAoKSA9PiB7XG4gICAgYmxpbmtMb29wKCk7XG4gICAgLy9oZWFkLmRpenp5KCk7XG4gICAgbGV0IHhUYXJnZXQgPSAobW91c2VQb3MueCAtIHdpbmRvd0hhbGZYKTtcbiAgICBsZXQgeVRhcmdldCA9IChtb3VzZVBvcy55IC0gd2luZG93SGFsZlkpO1xuXG4gICAgLy9jb25zb2xlLmxvZyh4VGFyZ2V0KTtcblxuICAgIGhlYWQuaWRsZSh4VGFyZ2V0LCB5VGFyZ2V0KTtcbiAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xuICB9XG5cbiAgLy93aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGluaXQsIGZhbHNlKTtcblxuICBpbml0KCk7XG5cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL3NjcmlwdC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQ29sb3JzIGZyb20gJy4uL29iamVjdHMvY29sb3JzJztcbmltcG9ydCBNYXQgZnJvbSAnLi4vb2JqZWN0cy9NYXRlcmlhbHMnO1xuXG5sZXQgaXNCbGlua2luZyA9IGZhbHNlO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5tZXNoID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG5cbiAgICBsZXQgaGVhZEdlb20gPSBuZXcgVEhSRUUuQm94QnVmZmVyR2VvbWV0cnkoMTYsIDE2LCAxNik7XG4gICAgdGhpcy5oZWFkID0gbmV3IFRIUkVFLk1lc2goaGVhZEdlb20sIE1hdC5za2luTWF0KTtcbiAgICB0aGlzLmhlYWQuY2FzdFNoYWRvdyA9IHRydWU7XG4gICAgdGhpcy5oZWFkLnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcbiAgICB0aGlzLm1lc2guYWRkKHRoaXMuaGVhZCk7XG5cbiAgICB0aGlzLmJlYXJkID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgdGhpcy5iZWFyZC5wb3NpdGlvbi55ID0gLTc7XG4gICAgdGhpcy5iZWFyZC5wb3NpdGlvbi56ID0gMC41O1xuICAgIHRoaXMuaGVhZC5hZGQodGhpcy5iZWFyZCk7XG5cbiAgICB0aGlzLkJlYXJkKCk7XG4gICAgdGhpcy5HbGFzc2VzKCk7XG4gICAgdGhpcy5IYWlyKCk7XG4gICAgdGhpcy5FeWVzKCk7XG4gICAgdGhpcy5FeWVCcm93cygpO1xuICAgIHRoaXMuSGF0KCk7XG4gICAgdGhpcy5GcmVja2xlcygpO1xuICAgIHRoaXMuRmVhdHVyZXMoKTtcbiAgICB0aGlzLmlkbGUoKTtcbiAgICB0aGlzLm5vcm1hbGl6ZSgpO1xuICB9XG5cbiAgbm9ybWFsaXplKHYsIHZtaW4sIHZtYXgsIHRtaW4sIHRtYXgpIHtcbiAgICBjb25zdCBudiA9IE1hdGgubWF4KE1hdGgubWluKHYsIHZtYXgpLCB2bWluKTtcbiAgICBjb25zdCBkdiA9IHZtYXggLSB2bWluO1xuICAgIGNvbnN0IHBjID0gKG52IC0gdm1pbikgLyBkdjtcbiAgICBjb25zdCBkdCA9IHRtYXggLSB0bWluO1xuICAgIGNvbnN0IHR2ID0gdG1pbiArIChwYyAqIGR0KTtcbiAgICByZXR1cm4gdHY7XG4gIH1cblxuICB1cGRhdGVCb2R5KHNwZWVkLCBleWVCbHVlUmlnaHRQb3NYLCBleWVCbHVlTGVmdFBvc1gsIGV5ZUJsdWVSaWdodFBvc1ksIGV5ZUJsdWVMZWZ0UG9zWSkge1xuICAgIC8vdGhpcy5leWVCbHVlUmlnaHQucm90YXRpb24ueSArPSAobGlvbi50SGVhZ1JvdFkgLSB0aGlzLmV5ZUJsdWVSaWdodC5yb3RhdGlvbi55KSAvIHNwZWVkO1xuICAgIC8vdGhpcy5leWVCbHVlUmlnaHQucm90YXRpb24ueCArPSAodGhpcy5leWVCbHVlUmlnaHRSb3RYIC0gdGhpcy5leWVCbHVlUmlnaHQucm90YXRpb24ueCkgLyBzcGVlZDtcblxuICAgIHRoaXMuZXllQmx1ZVJpZ2h0LnBvc2l0aW9uLnggKz0gKGV5ZUJsdWVSaWdodFBvc1ggLSB0aGlzLmV5ZUJsdWVSaWdodC5wb3NpdGlvbi54KSAvIHNwZWVkO1xuICAgIHRoaXMuZXllQmx1ZUxlZnQucG9zaXRpb24ueCArPSAoZXllQmx1ZUxlZnRQb3NYIC0gdGhpcy5leWVCbHVlTGVmdC5wb3NpdGlvbi54KSAvIHNwZWVkO1xuXG4gICAgdGhpcy5leWVCbHVlUmlnaHQucG9zaXRpb24ueSArPSAoZXllQmx1ZVJpZ2h0UG9zWSAtIHRoaXMuZXllQmx1ZVJpZ2h0LnBvc2l0aW9uLnkpIC8gc3BlZWQ7XG4gICAgdGhpcy5leWVCbHVlTGVmdC5wb3NpdGlvbi55ICs9IChleWVCbHVlTGVmdFBvc1kgLSB0aGlzLmV5ZUJsdWVMZWZ0LnBvc2l0aW9uLnkpIC8gc3BlZWQ7XG5cbiAgICAvL3RoaXMuZXllQmx1ZVJpZ2h0LnBvc2l0aW9uLnkgKz0gTWF0aC5zaW4odGhpcy5leWVCbHVlUmlnaHRQb3NZIC0gdGhpcy5leWVCbHVlUmlnaHQucG9zaXRpb24ueSkgLyBzcGVlZDtcbiAgICAvLyB0aGlzLmV5ZUJsdWVSaWdodC5wb3NpdGlvbi56ICs9ICh0aGlzLmV5ZUJsdWVSaWdodFBvc1ogLSB0aGlzLmV5ZUJsdWVSaWdodC5wb3NpdGlvbi56KSAvIHNwZWVkO1xuICB9XG5cbiAgaWRsZSh4VGFyZ2V0ID0gMCwgeVRhcmdldCA9IDApIHtcblxuICAgIC8vY29uc29sZS5sb2coeFRhcmdldCwgeVRhcmdldCk7XG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLmV5ZUJsdWVSaWdodC5wb3NpdGlvbi54KTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmV5ZUJsdWVSaWdodC5wb3NpdGlvbi55KTtcbiAgICBsZXQgZGlzdGFuY2UgPSAxO1xuXG4gICAgdGhpcy5oZWFkLnJvdGF0aW9uLnogPSBNYXRoLnNpbihEYXRlLm5vdygpICogMC4wMDUpICogTWF0aC5QSSAqIDAuMDA1O1xuICAgIHRoaXMuaGVhZC5yb3RhdGlvbi54ID0gTWF0aC5zaW4oRGF0ZS5ub3coKSAqIDAuMDA0KSAqIE1hdGguUEkgKiAwLjAzO1xuXG4gICAgLy8gdGhpcy5leWVCbHVlTGVmdC5wb3NpdGlvbi54ID0gTWF0aC5zaW4oRGF0ZS5ub3coKSAqIDAuMDAyKSAqIGRpc3RhbmNlIC8gMjtcbiAgICAvLyB0aGlzLmV5ZUJsdWVSaWdodC5wb3NpdGlvbi54ID0gTWF0aC5zaW4oRGF0ZS5ub3coKSAqIDAuMDAyKSAqIGRpc3RhbmNlIC8gMjtcblxuICAgIGNvbnN0IGV5ZUJsdWVSaWdodFBvc1ggPSB0aGlzLm5vcm1hbGl6ZSh4VGFyZ2V0LCAtMjAwLCAyMDAsIC0wLjYsIDAuNik7XG5cbiAgICBjb25zdCBleWVCbHVlTGVmdFBvc1ggPSB0aGlzLm5vcm1hbGl6ZSh4VGFyZ2V0LCAtMjAwLCAyMDAsIC0wLjYsIDAuNik7XG5cbiAgICBjb25zdCBleWVCbHVlUmlnaHRQb3NZID0gdGhpcy5ub3JtYWxpemUoeVRhcmdldCwgLTIwMCwgMjAwLCAwLjYsIC0wLjYpO1xuXG4gICAgY29uc3QgZXllQmx1ZUxlZnRQb3NZID0gdGhpcy5ub3JtYWxpemUoeVRhcmdldCwgLTIwMCwgMjAwLCAwLjYsIC0wLjYpO1xuXG4gICAgLy8gdGhpcy5leWVCbHVlUmlnaHRSb3RZID0geFRhcmdldCwgLTIwLCAyMCwgLU1hdGguUEkgLyA0LCBNYXRoLlBJIC8gNDtcbiAgICAvLyB0aGlzLmV5ZUJsdWVSaWdodFJvdFggPSB5VGFyZ2V0LCAtMjAsIDIwLCAtTWF0aC5QSSAvIDQsIE1hdGguUEkgLyA0O1xuICAgIC8vIHRoaXMuZXllQmx1ZVJpZ2h0UG9zWCA9IHhUYXJnZXQsIC0yMCwgMjAsIDcwLCAtNzA7XG4gICAgLy8gdGhpcy5leWVCbHVlUmlnaHRQb3NZID0geVRhcmdldCwgLTE0MCwgMjYwLCAyMCwgMTAwO1xuICAgIC8vIHRoaXMuZXllQmx1ZVJpZ2h0UG9zWiA9IDc7XG5cbiAgICB0aGlzLmV5ZUJyb3dSaWdodC5wb3NpdGlvbi55ID0gTWF0aC5zaW4oRGF0ZS5ub3coKSAqIDAuMDA0KSAqIGRpc3RhbmNlIC8gMjtcbiAgICB0aGlzLmV5ZUJyb3dMZWZ0LnBvc2l0aW9uLnkgPSBNYXRoLmNvcyhEYXRlLm5vdygpICogMC4wMDQpICogZGlzdGFuY2UgLyAyO1xuXG4gICAgLy8gdGhpcy5leWVCcm93UmlnaHQucm90YXRpb24ueiA9IE1hdGguc2luKERhdGUubm93KCkgKiAwLjAwMikgKiBNYXRoLlBJICogMC4wNDtcbiAgICAvLyB0aGlzLmV5ZUJyb3dMZWZ0LnJvdGF0aW9uLnogPSBNYXRoLmNvcyhEYXRlLm5vdygpICogMC4wMDIpICogTWF0aC5QSSAqIDAuMDQ7XG5cbiAgICAvL3RoaXMuYmVhcmQubW91dGgucG9zaXRpb24ueCA9IE1hdGguc2luKERhdGUubm93KCkgKiAwLjAwMikgKiBkaXN0YW5jZSAvIDI7XG5cbiAgICAvLyBTTk9SIE9NSE9PRy1PTUxBQUdcbiAgICB0aGlzLm1vdXN0YWNoZS5wb3NpdGlvbi55ID0gTWF0aC5jb3MoRGF0ZS5ub3coKSAqIDAuMDEpICogZGlzdGFuY2UgLyA0O1xuICAgIC8vIFNOT1IgT01IT09HLVJPVEFUSUVcbiAgICB0aGlzLm1vdXN0YWNoZS5yb3RhdGlvbi56ID0gTWF0aC5zaW4oRGF0ZS5ub3coKSAqIDAuMDEpICogTWF0aC5QSSAqIDAuMDE7XG5cbiAgICAvL3RoaXMubW91dGguc2NhbGUueCA9IE1hdGguY29zKERhdGUubm93KCkgKiAwLjAwNCkgKiBkaXN0YW5jZSAvIDI7XG5cbiAgICAvL1NORUxIRUlEIEhFRU4gRU4gV0VFUlxuICAgIHRoaXMubWVzaC5yb3RhdGlvbi55ID0gTWF0aC5zaW4oRGF0ZS5ub3coKSAqIDAuMDAyKSAqIE1hdGguUEkgKiAwLjA1O1xuICAgIHRoaXMudXBkYXRlQm9keSgxMCwgZXllQmx1ZVJpZ2h0UG9zWCwgZXllQmx1ZUxlZnRQb3NYLCBleWVCbHVlUmlnaHRQb3NZLCBleWVCbHVlTGVmdFBvc1kpO1xuICB9XG5cbiAgQmVhcmQoKSB7XG4gICAgLy9CRUFSRFxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgbGV0IGJlYXJkR2VvbU1lcmdlZCA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xuXG4gICAgbGV0IGJlYXJkMUdlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMiwgMTAsIDE2KTtcblxuICAgIGxldCBiZWFyZDEgPSBuZXcgVEhSRUUuTWVzaChiZWFyZDFHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGJlYXJkMS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbig5LCAwLCAwKSk7XG4gICAgYmVhcmQxLnVwZGF0ZU1hdHJpeCgpO1xuICAgIGJlYXJkR2VvbU1lcmdlZC5tZXJnZShiZWFyZDEuZ2VvbWV0cnksIGJlYXJkMS5tYXRyaXgpO1xuXG4gICAgbGV0IGJlYXJkMiA9IG5ldyBUSFJFRS5NZXNoKGJlYXJkMUdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgYmVhcmQyLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDcsIC0yLCAyKSk7XG4gICAgYmVhcmQyLnNjYWxlLnogPSAwLjg7XG4gICAgYmVhcmQyLnVwZGF0ZU1hdHJpeCgpO1xuICAgIGJlYXJkR2VvbU1lcmdlZC5tZXJnZShiZWFyZDIuZ2VvbWV0cnksIGJlYXJkMi5tYXRyaXgpO1xuXG4gICAgbGV0IGJlYXJkMyA9IGJlYXJkMS5jbG9uZSgpO1xuICAgIGJlYXJkMy5wb3NpdGlvbi54ID0gLWJlYXJkMS5wb3NpdGlvbi54O1xuICAgIGJlYXJkMy51cGRhdGVNYXRyaXgoKTtcbiAgICBiZWFyZEdlb21NZXJnZWQubWVyZ2UoYmVhcmQzLmdlb21ldHJ5LCBiZWFyZDMubWF0cml4KTtcblxuICAgIGxldCBiZWFyZDQgPSBiZWFyZDIuY2xvbmUoKTtcbiAgICBiZWFyZDQucG9zaXRpb24ueCA9IC1iZWFyZDIucG9zaXRpb24ueDtcbiAgICBiZWFyZDQudXBkYXRlTWF0cml4KCk7XG4gICAgYmVhcmRHZW9tTWVyZ2VkLm1lcmdlKGJlYXJkNC5nZW9tZXRyeSwgYmVhcmQ0Lm1hdHJpeCk7XG5cbiAgICBsZXQgYmVhcmQyR2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgzLCAxNCwgMTApO1xuICAgIGJlYXJkMkdlb20udmVydGljZXNbMl0ueiAtPSAyO1xuICAgIGJlYXJkMkdlb20udmVydGljZXNbN10ueiAtPSAyO1xuXG4gICAgbGV0IGJlYXJkNSA9IG5ldyBUSFJFRS5NZXNoKGJlYXJkMkdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgYmVhcmQ1LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDUsIC01LCA0KSk7XG4gICAgYmVhcmQ1LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGJlYXJkR2VvbU1lcmdlZC5tZXJnZShiZWFyZDUuZ2VvbWV0cnksIGJlYXJkNS5tYXRyaXgpO1xuXG4gICAgbGV0IGJlYXJkM0dlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMi41LCAxNCwgMTApO1xuICAgIGJlYXJkM0dlb20udmVydGljZXNbMl0ueiAtPSAyO1xuICAgIGJlYXJkM0dlb20udmVydGljZXNbN10ueiAtPSAyO1xuXG4gICAgbGV0IGJlYXJkNiA9IG5ldyBUSFJFRS5NZXNoKGJlYXJkM0dlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgYmVhcmQ2LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDIuNSwgLTYsIDYpKTtcbiAgICBiZWFyZDYudXBkYXRlTWF0cml4KCk7XG4gICAgYmVhcmRHZW9tTWVyZ2VkLm1lcmdlKGJlYXJkNi5nZW9tZXRyeSwgYmVhcmQ2Lm1hdHJpeCk7XG5cbiAgICBsZXQgYmVhcmQ3ID0gYmVhcmQ1LmNsb25lKCk7XG4gICAgYmVhcmQ3LnBvc2l0aW9uLnggPSAtYmVhcmQ1LnBvc2l0aW9uLng7XG4gICAgYmVhcmQ3LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGJlYXJkR2VvbU1lcmdlZC5tZXJnZShiZWFyZDcuZ2VvbWV0cnksIGJlYXJkNy5tYXRyaXgpO1xuXG4gICAgbGV0IGJlYXJkOCA9IGJlYXJkNi5jbG9uZSgpO1xuICAgIGJlYXJkOC5wb3NpdGlvbi54ID0gLWJlYXJkNi5wb3NpdGlvbi54O1xuICAgIGJlYXJkOC51cGRhdGVNYXRyaXgoKTtcbiAgICBiZWFyZEdlb21NZXJnZWQubWVyZ2UoYmVhcmQ4Lmdlb21ldHJ5LCBiZWFyZDgubWF0cml4KTtcblxuICAgIGxldCBiZWFyZDRHZW9tID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDIuNSwgMTQuNSwgMTApO1xuICAgIGJlYXJkNEdlb20udmVydGljZXNbMl0ueiAtPSAxO1xuICAgIGJlYXJkNEdlb20udmVydGljZXNbN10ueiAtPSAxO1xuXG4gICAgbGV0IGJlYXJkOSA9IG5ldyBUSFJFRS5NZXNoKGJlYXJkNEdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgYmVhcmQ5LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDAsIC03LCA1Ljc1KSk7XG4gICAgYmVhcmQ5LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGJlYXJkR2VvbU1lcmdlZC5tZXJnZShiZWFyZDkuZ2VvbWV0cnksIGJlYXJkOS5tYXRyaXgpO1xuXG4gICAgbGV0IGJlYXJkNUdlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoNCwgOCwgOCk7XG4gICAgbGV0IGJlYXJkMTAgPSBuZXcgVEhSRUUuTWVzaChiZWFyZDVHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGJlYXJkMTAuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oLTYsIC0xLCAtMikpO1xuICAgIGJlYXJkMTAudXBkYXRlTWF0cml4KCk7XG4gICAgYmVhcmRHZW9tTWVyZ2VkLm1lcmdlKGJlYXJkMTAuZ2VvbWV0cnksIGJlYXJkMTAubWF0cml4KTtcblxuICAgIGxldCBiZWFyZDExID0gbmV3IFRIUkVFLk1lc2goYmVhcmQ1R2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBiZWFyZDExLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDAsIC01LCAtMikpO1xuICAgIGJlYXJkMTEudXBkYXRlTWF0cml4KCk7XG4gICAgYmVhcmRHZW9tTWVyZ2VkLm1lcmdlKGJlYXJkMTEuZ2VvbWV0cnksIGJlYXJkMTEubWF0cml4KTtcblxuICAgIGxldCBiZWFyZE1lcmdlZCA9IG5ldyBUSFJFRS5NZXNoKGJlYXJkR2VvbU1lcmdlZCwgTWF0LndoaXRlTWF0KTtcbiAgICBiZWFyZE1lcmdlZC5jYXN0U2hhZG93ID0gdHJ1ZTtcbiAgICBiZWFyZE1lcmdlZC5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcblxuICAgIGxldCBtb3V0aEdlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMTAsIDQsIDEpO1xuICAgIGxldCBtb3V0aCA9IG5ldyBUSFJFRS5NZXNoKG1vdXRoR2VvbSwgTWF0LmJsYWNrTWF0KTtcbiAgICBtb3V0aC5wb3NpdGlvbi5zZXQoMCwgMiwgOCk7XG4gICAgbW91dGguY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIG1vdXRoLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xuXG4gICAgbGV0IHRlZXRoR2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgxMCwgMSwgMSk7XG4gICAgbGV0IHRlZXRoID0gbmV3IFRIUkVFLk1lc2godGVldGhHZW9tLCBNYXQudGVldGhNYXQpO1xuICAgIHRlZXRoLnBvc2l0aW9uLnNldCgwLCAwLjUsIDAuMSk7XG4gICAgdGVldGguY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIHRlZXRoLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xuICAgIG1vdXRoLmFkZCh0ZWV0aClcblxuICAgIC8vIGxldCBzbWlsZUdlb20gPSBuZXcgVEhSRUUuVG9ydXNHZW9tZXRyeSg0LCAxLjUsIDIsIDYsIC1NYXRoLlBJKTtcbiAgICAvLyB0aGlzLnNtaWxlID0gbmV3IFRIUkVFLk1lc2goc21pbGVHZW9tLCBNYXQuYmxhY2tNYXQpO1xuICAgIC8vIHRoaXMuc21pbGUucG9zaXRpb24uc2V0KDAsIDIsIDEwKTtcbiAgICAvLyB0aGlzLnNtaWxlLmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICAvLyB0aGlzLnNtaWxlLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xuICAgIC8vXG4gICAgLy8gdGhpcy5iZWFyZC5hZGQoYmVhcmRNZXJnZWQsIG1vdXRoLCB0aGlzLnNtaWxlKTtcbiAgICB0aGlzLmJlYXJkLmFkZChiZWFyZE1lcmdlZCwgbW91dGgpO1xuXG4gICAgbGV0IG1vdXN0YWNoZUdlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMTQsIDMsIDMsIDMpO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbMF0ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbMV0ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbMl0ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbM10ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbNF0ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbNV0ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbNl0ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbN10ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbOF0ueCAtPSAxO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbOV0ueCArPSAxO1xuXG4gICAgbW91c3RhY2hlR2VvbS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigwLCA0LCAwKSk7XG4gICAgdGhpcy5tb3VzdGFjaGUgPSBuZXcgVEhSRUUuTWVzaChtb3VzdGFjaGVHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIHRoaXMubW91c3RhY2hlLmNhc3RTaGFkb3cgPSB0cnVlO1xuICAgIHRoaXMubW91c3RhY2hlLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xuXG4gICAgdGhpcy5tb3VzdGFjaGUucG9zaXRpb24uc2V0KDAsIDAsIDkpO1xuICAgIHRoaXMuYmVhcmQuYWRkKHRoaXMubW91c3RhY2hlKTtcbiAgfVxuXG4gIEdsYXNzZXMoKSB7XG4gICAgLy9HTEFTU0VTXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgdGhpcy5nbGFzc2VzID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgdGhpcy5nbGFzc2VzLnBvc2l0aW9uLnNldCgwLCAwLCA5KTtcbiAgICB0aGlzLmhlYWQuYWRkKHRoaXMuZ2xhc3Nlcyk7XG5cbiAgICBsZXQgZnJhbWVHZW9tTWVyZ2VkID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XG5cbiAgICBsZXQgZnJhbWVPdXRlckdlb20gPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeSgzLCAzLCAwLjUsIDMyKVxuICAgIGxldCBmcmFtZUlubmVyR2VvbSA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KDIuNywgMi43LCAwLjUsIDMyKVxuXG4gICAgZnJhbWVPdXRlckdlb20uYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25YKC1NYXRoLlBJIC8gMikpO1xuICAgIGZyYW1lSW5uZXJHZW9tLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWCgtTWF0aC5QSSAvIDIpKTtcblxuICAgIGxldCBmcmFtZUJTUCA9IG5ldyBUaHJlZUJTUChmcmFtZU91dGVyR2VvbSk7XG4gICAgbGV0IGZyYW1lQ3V0QlNQID0gbmV3IFRocmVlQlNQKGZyYW1lSW5uZXJHZW9tKTtcblxuICAgIGxldCBmcmFtZWludGVyc2VjdGlvbkJTUCA9IGZyYW1lQlNQLnN1YnRyYWN0KGZyYW1lQ3V0QlNQKTtcbiAgICBsZXQgZnJhbWVMZWZ0ID0gZnJhbWVpbnRlcnNlY3Rpb25CU1AudG9NZXNoKE1hdC5nb2xkTWF0KTtcblxuICAgIGZyYW1lTGVmdC5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbig0LCAzLCAwKSk7XG4gICAgZnJhbWVMZWZ0LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGZyYW1lR2VvbU1lcmdlZC5tZXJnZShmcmFtZUxlZnQuZ2VvbWV0cnksIGZyYW1lTGVmdC5tYXRyaXgpO1xuXG4gICAgbGV0IGZyYW1lUmlnaHQgPSBmcmFtZUxlZnQuY2xvbmUoKTtcbiAgICBmcmFtZVJpZ2h0LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWihNYXRoLlBJIC8gMzApKTtcbiAgICBmcmFtZVJpZ2h0LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKC03LjUsIC0wLjI1LCAwKSk7XG4gICAgZnJhbWVSaWdodC51cGRhdGVNYXRyaXgoKTtcbiAgICBmcmFtZUdlb21NZXJnZWQubWVyZ2UoZnJhbWVSaWdodC5nZW9tZXRyeSwgZnJhbWVSaWdodC5tYXRyaXgpO1xuXG4gICAgbGV0IGZyYW1lTWlkR2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgyLCAuMywgLjUpO1xuICAgIGxldCBmcmFtZU1pZCA9IG5ldyBUSFJFRS5NZXNoKGZyYW1lTWlkR2VvbSwgTWF0LmdvbGRNYXQpO1xuICAgIGZyYW1lTWlkLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDAsIDMuMywgLTAuMykpO1xuICAgIGZyYW1lTWlkLnVwZGF0ZU1hdHJpeCgpO1xuICAgIGZyYW1lR2VvbU1lcmdlZC5tZXJnZShmcmFtZU1pZC5nZW9tZXRyeSwgZnJhbWVNaWQubWF0cml4KTtcblxuICAgIGxldCBmcmFtZUVuZEdlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMS41LCAuNSwgMSk7XG4gICAgbGV0IGZyYW1lRW5kUmlnaHQgPSBuZXcgVEhSRUUuTWVzaChmcmFtZUVuZEdlb20sIE1hdC5nb2xkTWF0KTtcbiAgICBmcmFtZUVuZFJpZ2h0LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDcuNSwgMywgMCkpO1xuICAgIGZyYW1lRW5kUmlnaHQudXBkYXRlTWF0cml4KCk7XG4gICAgZnJhbWVHZW9tTWVyZ2VkLm1lcmdlKGZyYW1lRW5kUmlnaHQuZ2VvbWV0cnksIGZyYW1lRW5kUmlnaHQubWF0cml4KTtcblxuICAgIGxldCBmcmFtZUVuZExlZnQgPSBmcmFtZUVuZFJpZ2h0LmNsb25lKCk7XG4gICAgZnJhbWVFbmRMZWZ0LnBvc2l0aW9uLnggPSAtZnJhbWVFbmRSaWdodC5wb3NpdGlvbi54O1xuICAgIGZyYW1lRW5kTGVmdC51cGRhdGVNYXRyaXgoKTtcbiAgICBmcmFtZUdlb21NZXJnZWQubWVyZ2UoZnJhbWVFbmRMZWZ0Lmdlb21ldHJ5LCBmcmFtZUVuZExlZnQubWF0cml4KTtcblxuICAgIGxldCBmcmFtZVNwb2tlR2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgxLCAwLjUsIDEyKTtcbiAgICBsZXQgZnJhbWVTcG9rZVJpZ2h0ID0gbmV3IFRIUkVFLk1lc2goZnJhbWVTcG9rZUdlb20sIE1hdC5nb2xkTWF0KTtcbiAgICBmcmFtZVNwb2tlUmlnaHQuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oOCwgMywgLTUuNSkpO1xuICAgIGZyYW1lU3Bva2VSaWdodC51cGRhdGVNYXRyaXgoKTtcbiAgICBmcmFtZUdlb21NZXJnZWQubWVyZ2UoZnJhbWVTcG9rZVJpZ2h0Lmdlb21ldHJ5LCBmcmFtZVNwb2tlUmlnaHQubWF0cml4KTtcblxuICAgIGxldCBmcmFtZVNwb2tlTGVmdCA9IGZyYW1lU3Bva2VSaWdodC5jbG9uZSgpO1xuICAgIGZyYW1lU3Bva2VMZWZ0LnBvc2l0aW9uLnggPSAtZnJhbWVTcG9rZVJpZ2h0LnBvc2l0aW9uLng7XG4gICAgZnJhbWVTcG9rZUxlZnQudXBkYXRlTWF0cml4KCk7XG4gICAgZnJhbWVHZW9tTWVyZ2VkLm1lcmdlKGZyYW1lU3Bva2VMZWZ0Lmdlb21ldHJ5LCBmcmFtZVNwb2tlTGVmdC5tYXRyaXgpO1xuXG4gICAgbGV0IGZyYW1lTWVyZ2VkID0gbmV3IFRIUkVFLk1lc2goZnJhbWVHZW9tTWVyZ2VkLCBNYXQuZ29sZE1hdCk7XG4gICAgZnJhbWVNZXJnZWQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIGZyYW1lTWVyZ2VkLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xuXG4gICAgdGhpcy5nbGFzc2VzLmFkZChmcmFtZU1lcmdlZCk7XG5cbiAgfVxuXG4gIEhhaXIoKSB7XG4gICAgLy9IQUlSXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICB0aGlzLmhhaXIgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICB0aGlzLmhhaXIucG9zaXRpb24uc2V0KDAsIDksIDApO1xuICAgIHRoaXMuaGVhZC5hZGQodGhpcy5oYWlyKTtcblxuICAgIGxldCBoYWlyR2VvbU1lcmdlZCA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xuXG4gICAgbGV0IGhhaXJGbGF0R2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgxMCwgMiwgMTgpO1xuXG4gICAgbGV0IGhhaXIxID0gbmV3IFRIUkVFLk1lc2goaGFpckZsYXRHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGhhaXIxLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWigtTWF0aC5QSSAvIDQwKSk7XG4gICAgaGFpcjEuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oLTQsIC0wLjUsIDApKTtcbiAgICBoYWlyMS51cGRhdGVNYXRyaXgoKTtcbiAgICBoYWlyR2VvbU1lcmdlZC5tZXJnZShoYWlyMS5nZW9tZXRyeSwgaGFpcjEubWF0cml4KTtcblxuICAgIGxldCBoYWlyMiA9IG5ldyBUSFJFRS5NZXNoKGhhaXJGbGF0R2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBoYWlyMi5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblooLU1hdGguUEkgLyAxMCkpO1xuICAgIGhhaXIyLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKC0yLCAxLCAwKSk7XG4gICAgaGFpcjIudXBkYXRlTWF0cml4KCk7XG4gICAgaGFpckdlb21NZXJnZWQubWVyZ2UoaGFpcjIuZ2VvbWV0cnksIGhhaXIyLm1hdHJpeCk7XG5cbiAgICBsZXQgaGFpcjMgPSBuZXcgVEhSRUUuTWVzaChoYWlyRmxhdEdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgaGFpcjMuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25aKC1NYXRoLlBJIC8gNSkpO1xuICAgIGhhaXIzLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDIsIDEsIDApKTtcbiAgICBoYWlyMy51cGRhdGVNYXRyaXgoKTtcbiAgICBoYWlyR2VvbU1lcmdlZC5tZXJnZShoYWlyMy5nZW9tZXRyeSwgaGFpcjMubWF0cml4KTtcblxuICAgIGxldCBoYWlyNCA9IG5ldyBUSFJFRS5NZXNoKGhhaXJGbGF0R2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBoYWlyNC5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblooLU1hdGguUEkgLyA0KSk7XG4gICAgaGFpcjQuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oNiwgMCwgMCkpO1xuICAgIGhhaXI0LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGhhaXJHZW9tTWVyZ2VkLm1lcmdlKGhhaXI0Lmdlb21ldHJ5LCBoYWlyNC5tYXRyaXgpO1xuXG4gICAgbGV0IGhhaXI2ID0gbmV3IFRIUkVFLk1lc2goaGFpckZsYXRHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGhhaXI2LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWigtTWF0aC5QSSAvIC0zKSk7XG4gICAgaGFpcjYuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oLTcuNzUsIC0uNSwgMCkpO1xuICAgIGhhaXI2LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGhhaXJHZW9tTWVyZ2VkLm1lcmdlKGhhaXI2Lmdlb21ldHJ5LCBoYWlyNi5tYXRyaXgpO1xuXG4gICAgbGV0IGhhaXJGbGF0QmFja0dlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMTgsIDcsIDYpO1xuICAgIGhhaXJGbGF0QmFja0dlb20udmVydGljZXNbMF0ueCAtPSAxO1xuICAgIGhhaXJGbGF0QmFja0dlb20udmVydGljZXNbMV0ueCAtPSAxO1xuICAgIGhhaXJGbGF0QmFja0dlb20udmVydGljZXNbNF0ueCArPSAxO1xuICAgIGhhaXJGbGF0QmFja0dlb20udmVydGljZXNbNV0ueCArPSAxO1xuXG4gICAgbGV0IGhhaXI1ID0gbmV3IFRIUkVFLk1lc2goaGFpckZsYXRCYWNrR2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBoYWlyNS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigwLCAtNC41LCAtNikpO1xuICAgIGhhaXI1LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGhhaXJHZW9tTWVyZ2VkLm1lcmdlKGhhaXI1Lmdlb21ldHJ5LCBoYWlyNS5tYXRyaXgpO1xuXG4gICAgbGV0IGhhaXJNZXJnZWQgPSBuZXcgVEhSRUUuTWVzaChoYWlyR2VvbU1lcmdlZCwgTWF0LndoaXRlTWF0KTtcbiAgICBoYWlyTWVyZ2VkLmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICBoYWlyTWVyZ2VkLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xuXG4gICAgdGhpcy5oYWlyLmFkZChoYWlyTWVyZ2VkKTtcblxuICB9XG5cbiAgRXllcygpIHtcbiAgICAvL0VZRVNcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIHRoaXMuZXllcyA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgIHRoaXMuZXllcy5wb3NpdGlvbi5zZXQoMCwgMywgOSk7XG4gICAgdGhpcy5oZWFkLmFkZCh0aGlzLmV5ZXMpO1xuXG4gICAgbGV0IGV5ZVdoaXRlR2VvbSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KDIuNSwgMi41KTtcblxuICAgIGxldCBleWVXaGl0ZVJpZ2h0ID0gbmV3IFRIUkVFLk1lc2goZXllV2hpdGVHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGV5ZVdoaXRlUmlnaHQucG9zaXRpb24uc2V0KC0zLjc1LCAwLCAwKTtcbiAgICBleWVXaGl0ZVJpZ2h0LmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICBleWVXaGl0ZVJpZ2h0LnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIGxldCBleWVCbHVlR2VvbSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KDEuNSwgMS41KTtcblxuICAgIHRoaXMuZXllQmx1ZVJpZ2h0ID0gbmV3IFRIUkVFLk1lc2goZXllQmx1ZUdlb20sIE1hdC5ibHVlTWF0KTtcbiAgICB0aGlzLmV5ZUJsdWVSaWdodC5wb3NpdGlvbi5zZXQoMCwgMCwgLjAxKTtcbiAgICB0aGlzLmV5ZUJsdWVSaWdodC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgdGhpcy5leWVCbHVlUmlnaHQucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgZXllV2hpdGVSaWdodC5hZGQodGhpcy5leWVCbHVlUmlnaHQpO1xuXG4gICAgbGV0IGV5ZVB1cGlsR2VvbSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KDEsIDEpO1xuXG4gICAgdGhpcy5leWVQdXBpbFJpZ2h0ID0gbmV3IFRIUkVFLk1lc2goZXllUHVwaWxHZW9tLCBNYXQuYmxhY2tNYXQpO1xuICAgIHRoaXMuZXllUHVwaWxSaWdodC5wb3NpdGlvbi5zZXQoMCwgMCwgLjAyKTtcbiAgICB0aGlzLmV5ZVB1cGlsUmlnaHQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIHRoaXMuZXllUHVwaWxSaWdodC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICB0aGlzLmV5ZUJsdWVSaWdodC5hZGQodGhpcy5leWVQdXBpbFJpZ2h0KTtcblxuICAgIGxldCBleWVXaGl0ZUxlZnQgPSBuZXcgVEhSRUUuTWVzaChleWVXaGl0ZUdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgZXllV2hpdGVMZWZ0LnBvc2l0aW9uLnNldCgzLjc1LCAwLCAwKTtcbiAgICBleWVXaGl0ZUxlZnQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIGV5ZVdoaXRlTGVmdC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICB0aGlzLmV5ZUJsdWVMZWZ0ID0gbmV3IFRIUkVFLk1lc2goZXllQmx1ZUdlb20sIE1hdC5ibHVlTWF0KTtcbiAgICB0aGlzLmV5ZUJsdWVMZWZ0LnBvc2l0aW9uLnNldCgwLCAwLCAuMDEpO1xuICAgIHRoaXMuZXllQmx1ZUxlZnQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIHRoaXMuZXllQmx1ZUxlZnQucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgZXllV2hpdGVMZWZ0LmFkZCh0aGlzLmV5ZUJsdWVMZWZ0KTtcblxuICAgIHRoaXMuZXllUHVwaWxMZWZ0ID0gbmV3IFRIUkVFLk1lc2goZXllUHVwaWxHZW9tLCBNYXQuYmxhY2tNYXQpO1xuICAgIHRoaXMuZXllUHVwaWxMZWZ0LnBvc2l0aW9uLnNldCgwLCAwLCAuMDIpO1xuICAgIHRoaXMuZXllUHVwaWxMZWZ0LmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICB0aGlzLmV5ZVB1cGlsTGVmdC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICB0aGlzLmV5ZUJsdWVMZWZ0LmFkZCh0aGlzLmV5ZVB1cGlsTGVmdCk7XG5cbiAgICB0aGlzLmV5ZXMuYWRkKGV5ZVdoaXRlUmlnaHQsIGV5ZVdoaXRlTGVmdCk7XG4gIH1cblxuICBFeWVCcm93cygpIHtcbiAgICAvL0VZRSBCUk9XU1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgdGhpcy5leWVCcm93cyA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgIHRoaXMuZXllQnJvd3MucG9zaXRpb24uc2V0KDAsIDYsIDgpO1xuICAgIHRoaXMuaGVhZC5hZGQodGhpcy5leWVCcm93cyk7XG5cbiAgICBsZXQgZXllQnJvd0dlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoNCwgMSwgMSk7XG5cbiAgICB0aGlzLmV5ZUJyb3dSaWdodCA9IG5ldyBUSFJFRS5NZXNoKGV5ZUJyb3dHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIHRoaXMuZXllQnJvd1JpZ2h0LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWihNYXRoLlBJIC8gNDUpKTtcbiAgICB0aGlzLmV5ZUJyb3dSaWdodC5wb3NpdGlvbi5zZXQoLTMuNzUsIDAsIDApO1xuICAgIHRoaXMuZXllQnJvd1JpZ2h0LmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICB0aGlzLmV5ZUJyb3dSaWdodC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICB0aGlzLmV5ZUJyb3dMZWZ0ID0gbmV3IFRIUkVFLk1lc2goZXllQnJvd0dlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgdGhpcy5leWVCcm93TGVmdC5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblooLU1hdGguUEkgLyA0NSkpO1xuICAgIHRoaXMuZXllQnJvd0xlZnQucG9zaXRpb24uc2V0KDMuNzUsIDAsIDApO1xuICAgIHRoaXMuZXllQnJvd0xlZnQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIHRoaXMuZXllQnJvd0xlZnQucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgdGhpcy5leWVCcm93cy5hZGQodGhpcy5leWVCcm93UmlnaHQsIHRoaXMuZXllQnJvd0xlZnQpO1xuICB9XG5cbiAgSGF0KCkge1xuICAgIC8vSEFUXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICB0aGlzLmhhdCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgIHRoaXMuaGF0LnBvc2l0aW9uLnNldCgtMC4yLCAxMSwgMi40KTtcbiAgICB0aGlzLmhlYWQuYWRkKHRoaXMuaGF0KTtcblxuICAgIGxldCBiYW5kR2VvbSA9IG5ldyBUSFJFRS5Ub3J1c0dlb21ldHJ5KDksIDIsIDE2LCAxMDApO1xuICAgIGxldCBiaWdDb25lR2VvbSA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KDEsIDExLCAxMiwgMTUpO1xuICAgIGxldCBzbWFsbENvbmVHZW9tID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoMC44LCAzLCA5LCAzMik7XG4gICAgbGV0IGhhdERpbmdsZUdlb20gPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoMS41LCA4LCA4KTtcblxuICAgIHRoaXMuYmFuZCA9IG5ldyBUSFJFRS5NZXNoKGJhbmRHZW9tLCBNYXQudGVldGhNYXQpO1xuICAgIHRoaXMuYmFuZC5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblgoTWF0aC5QSSAvIDIpKTtcbiAgICB0aGlzLmJhbmQucG9zaXRpb24uc2V0KDAsIDAsIDApO1xuICAgIHRoaXMuYmFuZC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgdGhpcy5iYW5kLnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIHRoaXMuYmlnQ29uZSA9IG5ldyBUSFJFRS5NZXNoKGJpZ0NvbmVHZW9tLCBNYXQucmVkTWF0KTtcbiAgICB0aGlzLmJpZ0NvbmUucG9zaXRpb24uc2V0KDAsIDYsIDApO1xuICAgIHRoaXMuYmlnQ29uZS5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgdGhpcy5iaWdDb25lLnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIHRoaXMuc21hbGxDb25lID0gbmV3IFRIUkVFLk1lc2goc21hbGxDb25lR2VvbSwgTWF0LnJlZE1hdCk7XG4gICAgdGhpcy5zbWFsbENvbmUuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25YKE1hdGguUEkgLyAyKSk7XG4gICAgdGhpcy5zbWFsbENvbmUuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25ZKE1hdGguUEkgLyAyKSk7XG4gICAgdGhpcy5zbWFsbENvbmUuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25aKE1hdGguUEkgLyAtOCkpO1xuICAgIHRoaXMuc21hbGxDb25lLnBvc2l0aW9uLnNldCg0LCA3LjgsIC0xKTtcbiAgICB0aGlzLnNtYWxsQ29uZS5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgdGhpcy5zbWFsbENvbmUucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgdGhpcy5oYXREaW5nbGUgPSBuZXcgVEhSRUUuTWVzaChoYXREaW5nbGVHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIHRoaXMuaGF0RGluZ2xlLnBvc2l0aW9uLnNldCg5LCA1LjUsIC0xKTtcbiAgICB0aGlzLmhhdERpbmdsZS5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgdGhpcy5oYXREaW5nbGUucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgdGhpcy5oYXQuYWRkKHRoaXMuYmFuZCwgdGhpcy5iaWdDb25lLCB0aGlzLnNtYWxsQ29uZSwgdGhpcy5oYXREaW5nbGUpO1xuICB9XG5cbiAgRnJlY2tsZXMoKSB7XG4gICAgLy9GcmVja2xlc1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIHRoaXMuZnJlY2tsZXMgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICB0aGlzLmZyZWNrbGVzLnBvc2l0aW9uLnNldCgwLCAwLCA4KTtcbiAgICB0aGlzLmhlYWQuYWRkKHRoaXMuZnJlY2tsZXMpO1xuXG4gICAgbGV0IGZyZWNrbGVzR2VvbU1lcmdlZCA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xuXG4gICAgbGV0IGZyZWNrbGVzR2VvbSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KDAuNSwgMC41KTtcblxuICAgIGxldCBmcmVja2xlMSA9IG5ldyBUSFJFRS5NZXNoKGZyZWNrbGVzR2VvbSwgTWF0LmJyb3duTWF0KTtcbiAgICBmcmVja2xlMS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigtNSwgMCwgMC4wMSkpO1xuICAgIGZyZWNrbGUxLnVwZGF0ZU1hdHJpeCgpO1xuICAgIGZyZWNrbGVzR2VvbU1lcmdlZC5tZXJnZShmcmVja2xlMS5nZW9tZXRyeSwgZnJlY2tsZTEubWF0cml4KTtcblxuICAgIGxldCBmcmVja2xlMiA9IGZyZWNrbGUxLmNsb25lKCk7XG4gICAgZnJlY2tsZTIuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oLTAuNSwgLTEsIDApKTtcbiAgICBmcmVja2xlMi51cGRhdGVNYXRyaXgoKTtcbiAgICBmcmVja2xlc0dlb21NZXJnZWQubWVyZ2UoZnJlY2tsZTIuZ2VvbWV0cnksIGZyZWNrbGUyLm1hdHJpeCk7XG5cbiAgICBsZXQgZnJlY2tsZTMgPSBmcmVja2xlMS5jbG9uZSgpO1xuICAgIGZyZWNrbGUzLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDEsIC0wLjUsIDApKTtcbiAgICBmcmVja2xlMy51cGRhdGVNYXRyaXgoKTtcbiAgICBmcmVja2xlc0dlb21NZXJnZWQubWVyZ2UoZnJlY2tsZTMuZ2VvbWV0cnksIGZyZWNrbGUzLm1hdHJpeCk7XG5cbiAgICBsZXQgZnJlY2tsZTQgPSBmcmVja2xlMS5jbG9uZSgpO1xuICAgIGZyZWNrbGU0LnBvc2l0aW9uLnggPSAtZnJlY2tsZTEucG9zaXRpb24ueDtcbiAgICBmcmVja2xlNC51cGRhdGVNYXRyaXgoKTtcbiAgICBmcmVja2xlc0dlb21NZXJnZWQubWVyZ2UoZnJlY2tsZTQuZ2VvbWV0cnksIGZyZWNrbGU0Lm1hdHJpeCk7XG4gICAgbGV0IGZyZWNrbGU1ID0gZnJlY2tsZTIuY2xvbmUoKTtcbiAgICBmcmVja2xlNS5wb3NpdGlvbi54ID0gLWZyZWNrbGUyLnBvc2l0aW9uLng7XG4gICAgZnJlY2tsZTUudXBkYXRlTWF0cml4KCk7XG4gICAgZnJlY2tsZXNHZW9tTWVyZ2VkLm1lcmdlKGZyZWNrbGU1Lmdlb21ldHJ5LCBmcmVja2xlNS5tYXRyaXgpO1xuICAgIGxldCBmcmVja2xlNiA9IGZyZWNrbGUzLmNsb25lKCk7XG4gICAgZnJlY2tsZTYucG9zaXRpb24ueCA9IC1mcmVja2xlMy5wb3NpdGlvbi54O1xuICAgIGZyZWNrbGU2LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGZyZWNrbGVzR2VvbU1lcmdlZC5tZXJnZShmcmVja2xlNi5nZW9tZXRyeSwgZnJlY2tsZTYubWF0cml4KTtcblxuICAgIGxldCBmcmVja2xlZE1lcmdlZCA9IG5ldyBUSFJFRS5NZXNoKGZyZWNrbGVzR2VvbU1lcmdlZCwgTWF0LnNraW4yTWF0KTtcbiAgICBmcmVja2xlZE1lcmdlZC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgZnJlY2tsZWRNZXJnZWQucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgdGhpcy5mcmVja2xlcy5hZGQoZnJlY2tsZWRNZXJnZWQpO1xuICB9XG5cbiAgRmVhdHVyZXMoKSB7XG4gICAgLy9GZWF0dXJlcyAtIE5vc2UgYW5kIEVhcnNcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGxldCBlYXJHZW9tID0gbmV3IFRIUkVFLkJveEJ1ZmZlckdlb21ldHJ5KDEuNSwgMywgMS41KTtcbiAgICBsZXQgZWFyUmlnaHQgPSBuZXcgVEhSRUUuTWVzaChlYXJHZW9tLCBNYXQuc2tpbk1hdCk7XG4gICAgZWFyUmlnaHQucG9zaXRpb24uc2V0KC04LjUsIDEsIDMpO1xuICAgIGVhclJpZ2h0LmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICBlYXJSaWdodC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICBsZXQgZWFyTGVmdCA9IG5ldyBUSFJFRS5NZXNoKGVhckdlb20sIE1hdC5za2luTWF0KTtcbiAgICBlYXJMZWZ0LnBvc2l0aW9uLnNldCg4LjUsIDEsIDMpO1xuICAgIGVhckxlZnQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIGVhckxlZnQucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgbGV0IG5vc2VHZW9tID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoMSwgMiwgNCwgNCk7XG4gICAgbGV0IG5vc2UgPSBuZXcgVEhSRUUuTWVzaChub3NlR2VvbSwgTWF0LnNraW5NYXQpO1xuICAgIG5vc2Uuc2NhbGUuc2V0KC43NSwgMSwgMS4zKTtcbiAgICBub3NlLnBvc2l0aW9uLnNldCgwLCAxLCA4KTtcbiAgICBub3NlLmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICBub3NlLnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIHRoaXMuaGVhZC5hZGQoZWFyUmlnaHQsIGVhckxlZnQsIG5vc2UpO1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9jbGFzc2VzL0hlYWQuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IENvbG9ycyBmcm9tICcuL2NvbG9ycyc7XG4vLyBsZXQgc2tpbk1hdCA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHtjb2xvcjogQ29sb3JzLnNraW4sIGZsYXRTaGFkaW5nOiB0cnVlfSk7XG4vLyBsZXQgc2tpbjJNYXQgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy5za2luLCBmbGF0U2hhZGluZzogdHJ1ZX0pO1xuLy8gbGV0IGF1YnVybk1hdCA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHtjb2xvcjogQ29sb3JzLmF1YnVybiwgZmxhdFNoYWRpbmc6IHRydWV9KTtcbi8vIGxldCBicm93bk1hdCA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHtjb2xvcjogQ29sb3JzLmJyb3duLCBmbGF0U2hhZGluZzogdHJ1ZX0pO1xuLy8gbGV0IGJsYWNrTWF0ID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoe2NvbG9yOiBDb2xvcnMuYmxhY2ssIGZsYXRTaGFkaW5nOiB0cnVlfSk7XG4vLyBsZXQgd2hpdGVNYXQgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe2NvbG9yOiBDb2xvcnMud2hpdGUsIGZsYXRTaGFkaW5nOiB0cnVlfSk7XG4vLyBsZXQgYmx1ZU1hdCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy5saWdodEJsdWUsIGZsYXRTaGFkaW5nOiB0cnVlfSk7XG4vLyBsZXQgYmVpZ2VNYXQgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe2NvbG9yOiBDb2xvcnMuYmVpZ2UsIGZsYXRTaGFkaW5nOiB0cnVlfSk7XG4vLyBsZXQgeWVsbG93TWF0ID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHtjb2xvcjogQ29sb3JzLnllbGxvdywgZmxhdFNoYWRpbmc6IHRydWV9KTtcbi8vIGxldCBub3JtYWxNYXQgPSBuZXcgVEhSRUUuTWVzaE5vcm1hbE1hdGVyaWFsKHt9KTtcblxuY29uc3QgTWF0ZXJpYWxzID0ge1xuICBcInNraW5NYXRcIjogbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoe2NvbG9yOiBDb2xvcnMuc2tpbiwgZmxhdFNoYWRpbmc6IHRydWV9KSxcbiAgXCJza2luMk1hdFwiOiBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy5za2luMiwgZmxhdFNoYWRpbmc6IHRydWV9KSxcbiAgXCJ3aGl0ZU1hdFwiOiBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy53aGl0ZSwgZmxhdFNoYWRpbmc6IHRydWV9KSxcbiAgXCJnb2xkTWF0XCI6IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHtjb2xvcjogQ29sb3JzLmdvbGQsIGZsYXRTaGFkaW5nOiB0cnVlfSksXG4gIFwidGVldGhNYXRcIjogbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHtjb2xvcjogQ29sb3JzLnRlZXRoLCBmbGF0U2hhZGluZzogdHJ1ZX0pLFxuICBcImJlaWdlTWF0XCI6IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy5iZWlnZSwgZmxhdFNoYWRpbmc6IHRydWV9KSxcbiAgXCJicm93bk1hdFwiOiBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy5icm93biwgZmxhdFNoYWRpbmc6IHRydWV9KSxcbiAgXCJibGFja01hdFwiOiBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy5ibGFjaywgZmxhdFNoYWRpbmc6IHRydWV9KSxcbiAgXCJibHVlTWF0XCI6IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy5saWdodEJsdWUsIGZsYXRTaGFkaW5nOiB0cnVlfSksXG4gIFwieWVsbG93TWF0XCI6IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy55ZWxsb3csIGZsYXRTaGFkaW5nOiB0cnVlfSksXG4gIFwicmVkTWF0XCI6IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy5yZWQsIGZsYXRTaGFkaW5nOiB0cnVlfSksXG4gIFwibm9ybWFsTWF0XCI6IG5ldyBUSFJFRS5NZXNoTm9ybWFsTWF0ZXJpYWwoe30pXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYXRlcmlhbHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9vYmplY3RzL01hdGVyaWFscy5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBBdWRpb0NvbnRleHQgPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQ7XG5sZXQgYXVkaW9DdHgsIHRhZztcbmxldCBhdWRpb0NodW5rcyA9IFtdO1xuY29uc3QgcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwbGF5YCk7XG5jb25zdCBzdG9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHN0b3BgKTtcbmNvbnN0IHJlY29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBhdWRpb2ApO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdWRpbyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc3RvcHRSZWNvcmRpbmcgPSBmYWxzZTtcblxuICAgIGF1ZGlvQ3R4ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHsgYXVkaW86IHRydWUgfSlcbiAgICAudGhlbihzdHJlYW0gPT4ge1xuICAgICAgY29uc3QgbWVkaWFSZWNvcmRlciA9IG5ldyBNZWRpYVJlY29yZGVyKHN0cmVhbSk7XG5cbiAgICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS1TdGFydCBSZWNvcmRpbmctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgICByZWNvcmQuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCAoKSA9PiB7XG4gICAgICAgICBtZWRpYVJlY29yZGVyLnN0YXJ0KCk7XG4gICAgICAgICBjb25zb2xlLmxvZygncmVjb3JkJyk7XG4gICAgICB9KTtcbiAgICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgICAgIC8vIGFkZCBhdWRpb2NodW5rIHRvIGFycmF5XG4gICAgICBtZWRpYVJlY29yZGVyLmFkZEV2ZW50TGlzdGVuZXIoYGRhdGFhdmFpbGFibGVgLCAgZSA9PiBhdWRpb0NodW5rcy5wdXNoKGUuZGF0YSkpO1xuICAgICAgbWVkaWFSZWNvcmRlci5hZGRFdmVudExpc3RlbmVyKGBzdG9wYCwgKCkgPT4ge1xuICAgICAgICAvLyBjcmVhdGUgYmxvYiBmcm9tIGF1ZGlvY2h1bmtzXG4gICAgICAgIHRoaXMuYmxvYiA9IG5ldyBCbG9iKGF1ZGlvQ2h1bmtzLCB7dHlwZSA6ICdhdWRpby9vZ2cnfSk7XG5cbiAgICAgICAgY29uc3QgYmxvYlVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwodGhpcy5ibG9iKTtcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYXVkaW9fY29udHJvbHNgKS5zcmMgPSBibG9iVXJsO1xuXG4gICAgICAgIC8vdGhpcy5ibG9iVG9BcnJheUJ1ZmZlcih0aGlzLmJsb2IpO1xuICAgICAgICBhdWRpb0NodW5rcyA9IFtdO1xuICAgICAgfSk7XG5cbiAgICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tU3RvcCBSZWNvcmRpbmctLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICAgIHN0b3AuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCAoKSA9PiB7XG4gICAgICAgIG1lZGlhUmVjb3JkZXIuc3RvcCgpO1xuICAgICAgICB0aGlzLnN0b3B0UmVjb3JkaW5nID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gICAgfSk7XG4gIH1cblxuICBibG9iVG9BcnJheUJ1ZmZlcihhdWRpb0Jsb2IpIHtcbiAgICBjb25zdCBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICAgIGZpbGVSZWFkZXIub25sb2FkID0gZSA9PiB7XG4gICAgICBjb25zdCBhcnJheUJ1ZmZlciA9IGUuY3VycmVudFRhcmdldC5yZXN1bHQ7XG4gICAgICB0aGlzLmxvYWRBcnJheUJ1ZmZlcihhcnJheUJ1ZmZlcik7XG4gICAgfTtcblxuICAgIGZpbGVSZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoYXVkaW9CbG9iKTtcbiAgfVxuXG4gIGxvYWRBcnJheUJ1ZmZlcihhcnJheUJ1ZmZlcikge1xuICAgIGNvbnN0IHNvdXJjZSA9IGF1ZGlvQ3R4LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpO1xuICAgIGF1ZGlvQ3R4LmRlY29kZUF1ZGlvRGF0YShhcnJheUJ1ZmZlciwgYnVmZmVyID0+IHtcbiAgICAgIHNvdXJjZS5idWZmZXIgPSBidWZmZXI7XG4gICAgICBzb3VyY2UuY29ubmVjdChhdWRpb0N0eC5kZXN0aW5hdGlvbik7XG5cbiAgICAgIC8qLS0tLS0tLS0tLS0tLS0tUGxheSBhcnJheUJ1ZmZlci0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICAgIHBsYXkuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCAoKSA9PiBzb3VyY2Uuc3RhcnQoKSk7XG4gICAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgICB9LFxuICAgIGUgPT4geyBjb25zb2xlLmxvZyhcIkVycm9yIHdpdGggZGVjb2RpbmcgYXVkaW8gZGF0YVwiICsgZS5lcnIpOyB9KTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2NsYXNzZXMvQXVkaW8uanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFNwZWVjaFJlY29nbml0aW9uID0gU3BlZWNoUmVjb2duaXRpb24gfHwgd2Via2l0U3BlZWNoUmVjb2duaXRpb25cbnZhciBTcGVlY2hHcmFtbWFyTGlzdCA9IFNwZWVjaEdyYW1tYXJMaXN0IHx8IHdlYmtpdFNwZWVjaEdyYW1tYXJMaXN0XG52YXIgU3BlZWNoUmVjb2duaXRpb25FdmVudCA9IFNwZWVjaFJlY29nbml0aW9uRXZlbnQgfHwgd2Via2l0U3BlZWNoUmVjb2duaXRpb25FdmVudFxuXG4vLyB2YXIgY29sb3JzID0gWyAnYXF1YScgLCAnYXp1cmUnICwgJ2JlaWdlJywgJ2Jpc3F1ZScsICdibGFjaycsICdibHVlJywgJ2Jyb3duJywgJ2Nob2NvbGF0ZScsICdjb3JhbCcsICdjcmltc29uJywgJ2N5YW4nLCAnZnVjaHNpYScsICdnaG9zdHdoaXRlJywgJ2dvbGQnLCAnZ29sZGVucm9kJywgJ2dyYXknLCAnZ3JlZW4nLCAnaW5kaWdvJywgJ2l2b3J5JywgJ2toYWtpJywgJ2xhdmVuZGVyJywgJ2xpbWUnLCAnbGluZW4nLCAnbWFnZW50YScsICdtYXJvb24nLCAnbW9jY2FzaW4nLCAnbmF2eScsICdvbGl2ZScsICdvcmFuZ2UnLCAnb3JjaGlkJywgJ3BlcnUnLCAncGluaycsICdwbHVtJywgJ3B1cnBsZScsICdyZWQnLCAnc2FsbW9uJywgJ3NpZW5uYScsICdzaWx2ZXInLCAnc25vdycsICd0YW4nLCAndGVhbCcsICd0aGlzdGxlJywgJ3RvbWF0bycsICd0dXJxdW9pc2UnLCAndmlvbGV0JywgJ3doaXRlJywgJ3llbGxvdyddO1xuLy8gdmFyIGdyYW1tYXIgPSAnI0pTR0YgVjEuMDsgZ3JhbW1hciBjb2xvcnM7IHB1YmxpYyA8Y29sb3I+ID0gJyArIGNvbG9ycy5qb2luKCcgfCAnKSArICcgOydcblxubGV0IHJlY29yZGluZyA9IGZhbHNlO1xubGV0IHRyYW5zY3JpcHQgPSBcIlwiO1xuY29uc3QgdGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBmaWVsZGApO1xuY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHJlY29yZGApO1xuY29uc3QgZHVyaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGR1cmluZ2ApO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGVlY2hSZWNvZ24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnR4dCA9ICcnO1xuICAgIHRoaXMucmVjb2duaXRpb24gPSBuZXcgU3BlZWNoUmVjb2duaXRpb24oKTtcbiAgICBjb25zdCBzcGVlY2hSZWNvZ25pdGlvbkxpc3QgPSBuZXcgU3BlZWNoR3JhbW1hckxpc3QoKTtcbiAgICAvLyBzcGVlY2hSZWNvZ25pdGlvbkxpc3QuYWRkRnJvbVN0cmluZyhncmFtbWFyLCAxKTtcbiAgICAvLyB0aGlzLnJlY29nbml0aW9uLmdyYW1tYXJzID0gc3BlZWNoUmVjb2duaXRpb25MaXN0O1xuICAgIHRoaXMucmVjb2duaXRpb24uY29udGludW91cyA9IGZhbHNlO1xuICAgIHRoaXMucmVjb2duaXRpb24ubGFuZyA9ICdubC1CRSc7XG4gICAgdGhpcy5yZWNvZ25pdGlvbi5pbnRlcmltUmVzdWx0cyA9IGZhbHNlO1xuICAgIHRoaXMucmVjb2duaXRpb24ubWF4QWx0ZXJuYXRpdmVzID0gMTtcblxuICAgIHRoaXMuaW5pdCgpO1xuXG4gICAgdGhpcy5yZWNvZ25pdGlvbi5vbnJlc3VsdCA9IGV2ZW50ID0+IHRoaXMuZ290UmVzdWx0KGV2ZW50KTtcbiAgICB0aGlzLnJlY29nbml0aW9uLm9uc3BlZWNoZW5kID0gZSA9PsKgdGhpcy5vblNwZWVjaEVuZChlKTtcblxuICAgIHRleHQuYWRkRXZlbnRMaXN0ZW5lcihgYmx1cmAsICgpID0+IHRoaXMuaGFuZGxlQ2hhbmdlKCkpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlY29nbml0aW9uLnN0YXJ0KCk7XG4gICAgICBjb25zb2xlLmxvZygnUmVhZHkgdG8gcmVjZWl2ZSBhIGNvbW1hbmQuJyk7XG4gICAgICBidXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKCkge1xuICAgIHRoaXMudHh0ID0gdGV4dC52YWx1ZTtcbiAgfVxuXG4gIGdvdFJlc3VsdChldmVudCkge1xuICAgIGNvbnN0IGxhc3QgPSBldmVudC5yZXN1bHRzLmxlbmd0aCAtIDE7XG4gICAgdHJhbnNjcmlwdCA9IGV2ZW50LnJlc3VsdHNbbGFzdF1bMF0udHJhbnNjcmlwdDtcblxuICAgIHRleHQudmFsdWUgPSB0cmFuc2NyaXB0O1xuICAgIGNvbnNvbGUubG9nKGV2ZW50LnJlc3VsdHMpO1xuICAgIGNvbnNvbGUubG9nKCdDb25maWRlbmNlOiAnICsgZXZlbnQucmVzdWx0c1swXVswXS5jb25maWRlbmNlKTtcbiAgfVxuXG4gIG9uU3BlZWNoRW5kKGUpwqB7XG4gICAgdGhpcy5yZWNvZ25pdGlvbi5zdG9wKCk7XG4gICAgYnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ0NsaWNrIFRvIFN0YXJ0JztcbiAgICB0aGlzLnR4dCA9IHRleHQudmFsdWU7XG4gIH1cbn1cblxuLy8gdGhpcy5yZWNvZ25pdGlvbi5vbm5vbWF0Y2ggPSBmdW5jdGlvbihldmVudCkge1xuLy8gICBkaWFnbm9zdGljLnRleHRDb250ZW50ID0gXCJJIGRpZG4ndCByZWNvZ25pc2UgdGhhdCBjb2xvci5cIjtcbi8vIH1cbi8vXG4vLyB0aGlzLnJlY29nbml0aW9uLm9uZXJyb3IgPSBmdW5jdGlvbihldmVudCkge1xuLy8gICBkaWFnbm9zdGljLnRleHRDb250ZW50ID0gJ0Vycm9yIG9jY3VycmVkIGluIHRoaXMucmVjb2duaXRpb246ICcgKyBldmVudC5lcnJvcjtcbi8vIH1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2NsYXNzZXMvU3BlZWNoUmVjb2duaXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBDYXJ0QVBJIGZyb20gJy4uL2xpYi9jYXJ0QVBJJztcbmltcG9ydCBzaG9ydGlkIGZyb20gJ3Nob3J0aWQnO1xuY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBuYW1lX2lucHV0YCk7XG5jb25zdCBsaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnVuaXF1ZV9saW5rYCk7XG5cbmNvbnN0IGhhbmRsZVNhdmUgPSAoe3RleHQsIGJsb2J9KSA9PiB7XG4gIGNvbnN0IGlkID0gc2hvcnRpZC5nZW5lcmF0ZSgpO1xuXG4gIENhcnRBUEkuY3JlYXRlKHtcbiAgICB0ZXh0LFxuICAgIGlkLFxuICAgIG5hbWU6IG5hbWUudmFsdWUsXG4gICAgYmxvYlxuICB9KTtcblxuICBsaW5rLmlubmVySFRNTCA9IGBodHRwczovL2xvY2FsaG9zdDo4MDgwL3NhbnRhLmh0bWw/aWQ9JHtpZH1gO1xuICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIGBodHRwczovL2xvY2FsaG9zdDo4MDgwL3NhbnRhLmh0bWw/aWQ9JHtpZH1gKTtcbiAgbGluay5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsIGBfYmxhbmtgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZVNhdmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9vYmplY3RzL1NhdmUuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvaW5kZXgnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Nob3J0aWQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFscGhhYmV0ID0gcmVxdWlyZSgnLi9hbHBoYWJldCcpO1xudmFyIGVuY29kZSA9IHJlcXVpcmUoJy4vZW5jb2RlJyk7XG52YXIgZGVjb2RlID0gcmVxdWlyZSgnLi9kZWNvZGUnKTtcbnZhciBidWlsZCA9IHJlcXVpcmUoJy4vYnVpbGQnKTtcbnZhciBpc1ZhbGlkID0gcmVxdWlyZSgnLi9pcy12YWxpZCcpO1xuXG4vLyBpZiB5b3UgYXJlIHVzaW5nIGNsdXN0ZXIgb3IgbXVsdGlwbGUgc2VydmVycyB1c2UgdGhpcyB0byBtYWtlIGVhY2ggaW5zdGFuY2Vcbi8vIGhhcyBhIHVuaXF1ZSB2YWx1ZSBmb3Igd29ya2VyXG4vLyBOb3RlOiBJIGRvbid0IGtub3cgaWYgdGhpcyBpcyBhdXRvbWF0aWNhbGx5IHNldCB3aGVuIHVzaW5nIHRoaXJkXG4vLyBwYXJ0eSBjbHVzdGVyIHNvbHV0aW9ucyBzdWNoIGFzIHBtMi5cbnZhciBjbHVzdGVyV29ya2VySWQgPSByZXF1aXJlKCcuL3V0aWwvY2x1c3Rlci13b3JrZXItaWQnKSB8fCAwO1xuXG4vKipcbiAqIFNldCB0aGUgc2VlZC5cbiAqIEhpZ2hseSByZWNvbW1lbmRlZCBpZiB5b3UgZG9uJ3Qgd2FudCBwZW9wbGUgdG8gdHJ5IHRvIGZpZ3VyZSBvdXQgeW91ciBpZCBzY2hlbWEuXG4gKiBleHBvc2VkIGFzIHNob3J0aWQuc2VlZChpbnQpXG4gKiBAcGFyYW0gc2VlZCBJbnRlZ2VyIHZhbHVlIHRvIHNlZWQgdGhlIHJhbmRvbSBhbHBoYWJldC4gIEFMV0FZUyBVU0UgVEhFIFNBTUUgU0VFRCBvciB5b3UgbWlnaHQgZ2V0IG92ZXJsYXBzLlxuICovXG5mdW5jdGlvbiBzZWVkKHNlZWRWYWx1ZSkge1xuICAgIGFscGhhYmV0LnNlZWQoc2VlZFZhbHVlKTtcbiAgICByZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8qKlxuICogU2V0IHRoZSBjbHVzdGVyIHdvcmtlciBvciBtYWNoaW5lIGlkXG4gKiBleHBvc2VkIGFzIHNob3J0aWQud29ya2VyKGludClcbiAqIEBwYXJhbSB3b3JrZXJJZCB3b3JrZXIgbXVzdCBiZSBwb3NpdGl2ZSBpbnRlZ2VyLiAgTnVtYmVyIGxlc3MgdGhhbiAxNiBpcyByZWNvbW1lbmRlZC5cbiAqIHJldHVybnMgc2hvcnRpZCBtb2R1bGUgc28gaXQgY2FuIGJlIGNoYWluZWQuXG4gKi9cbmZ1bmN0aW9uIHdvcmtlcih3b3JrZXJJZCkge1xuICAgIGNsdXN0ZXJXb3JrZXJJZCA9IHdvcmtlcklkO1xuICAgIHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLyoqXG4gKlxuICogc2V0cyBuZXcgY2hhcmFjdGVycyB0byB1c2UgaW4gdGhlIGFscGhhYmV0XG4gKiByZXR1cm5zIHRoZSBzaHVmZmxlZCBhbHBoYWJldFxuICovXG5mdW5jdGlvbiBjaGFyYWN0ZXJzKG5ld0NoYXJhY3RlcnMpIHtcbiAgICBpZiAobmV3Q2hhcmFjdGVycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGFscGhhYmV0LmNoYXJhY3RlcnMobmV3Q2hhcmFjdGVycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFscGhhYmV0LnNodWZmbGVkKCk7XG59XG5cbi8qKlxuICogR2VuZXJhdGUgdW5pcXVlIGlkXG4gKiBSZXR1cm5zIHN0cmluZyBpZFxuICovXG5mdW5jdGlvbiBnZW5lcmF0ZSgpIHtcbiAgcmV0dXJuIGJ1aWxkKGNsdXN0ZXJXb3JrZXJJZCk7XG59XG5cbi8vIEV4cG9ydCBhbGwgb3RoZXIgZnVuY3Rpb25zIGFzIHByb3BlcnRpZXMgb2YgdGhlIGdlbmVyYXRlIGZ1bmN0aW9uXG5tb2R1bGUuZXhwb3J0cyA9IGdlbmVyYXRlO1xubW9kdWxlLmV4cG9ydHMuZ2VuZXJhdGUgPSBnZW5lcmF0ZTtcbm1vZHVsZS5leHBvcnRzLnNlZWQgPSBzZWVkO1xubW9kdWxlLmV4cG9ydHMud29ya2VyID0gd29ya2VyO1xubW9kdWxlLmV4cG9ydHMuY2hhcmFjdGVycyA9IGNoYXJhY3RlcnM7XG5tb2R1bGUuZXhwb3J0cy5kZWNvZGUgPSBkZWNvZGU7XG5tb2R1bGUuZXhwb3J0cy5pc1ZhbGlkID0gaXNWYWxpZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Nob3J0aWQvbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbi8vIEZvdW5kIHRoaXMgc2VlZC1iYXNlZCByYW5kb20gZ2VuZXJhdG9yIHNvbWV3aGVyZVxuLy8gQmFzZWQgb24gVGhlIENlbnRyYWwgUmFuZG9taXplciAxLjMgKEMpIDE5OTcgYnkgUGF1bCBIb3VsZSAoaG91bGVAbXNjLmNvcm5lbGwuZWR1KVxuXG52YXIgc2VlZCA9IDE7XG5cbi8qKlxuICogcmV0dXJuIGEgcmFuZG9tIG51bWJlciBiYXNlZCBvbiBhIHNlZWRcbiAqIEBwYXJhbSBzZWVkXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5mdW5jdGlvbiBnZXROZXh0VmFsdWUoKSB7XG4gICAgc2VlZCA9IChzZWVkICogOTMwMSArIDQ5Mjk3KSAlIDIzMzI4MDtcbiAgICByZXR1cm4gc2VlZC8oMjMzMjgwLjApO1xufVxuXG5mdW5jdGlvbiBzZXRTZWVkKF9zZWVkXykge1xuICAgIHNlZWQgPSBfc2VlZF87XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIG5leHRWYWx1ZTogZ2V0TmV4dFZhbHVlLFxuICAgIHNlZWQ6IHNldFNlZWRcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaG9ydGlkL2xpYi9yYW5kb20vcmFuZG9tLWZyb20tc2VlZC5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3J5cHRvID0gdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgKHdpbmRvdy5jcnlwdG8gfHwgd2luZG93Lm1zQ3J5cHRvKTsgLy8gSUUgMTEgdXNlcyB3aW5kb3cubXNDcnlwdG9cblxuZnVuY3Rpb24gcmFuZG9tQnl0ZSgpIHtcbiAgICBpZiAoIWNyeXB0byB8fCAhY3J5cHRvLmdldFJhbmRvbVZhbHVlcykge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KSAmIDB4MzA7XG4gICAgfVxuICAgIHZhciBkZXN0ID0gbmV3IFVpbnQ4QXJyYXkoMSk7XG4gICAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhkZXN0KTtcbiAgICByZXR1cm4gZGVzdFswXSAmIDB4MzA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmFuZG9tQnl0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Nob3J0aWQvbGliL3JhbmRvbS9yYW5kb20tYnl0ZS1icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgYWxwaGFiZXQgPSByZXF1aXJlKCcuL2FscGhhYmV0Jyk7XG5cbi8qKlxuICogRGVjb2RlIHRoZSBpZCB0byBnZXQgdGhlIHZlcnNpb24gYW5kIHdvcmtlclxuICogTWFpbmx5IGZvciBkZWJ1Z2dpbmcgYW5kIHRlc3RpbmcuXG4gKiBAcGFyYW0gaWQgLSB0aGUgc2hvcnRpZC1nZW5lcmF0ZWQgaWQuXG4gKi9cbmZ1bmN0aW9uIGRlY29kZShpZCkge1xuICAgIHZhciBjaGFyYWN0ZXJzID0gYWxwaGFiZXQuc2h1ZmZsZWQoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB2ZXJzaW9uOiBjaGFyYWN0ZXJzLmluZGV4T2YoaWQuc3Vic3RyKDAsIDEpKSAmIDB4MGYsXG4gICAgICAgIHdvcmtlcjogY2hhcmFjdGVycy5pbmRleE9mKGlkLnN1YnN0cigxLCAxKSkgJiAweDBmXG4gICAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWNvZGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaG9ydGlkL2xpYi9kZWNvZGUuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVuY29kZSA9IHJlcXVpcmUoJy4vZW5jb2RlJyk7XG52YXIgYWxwaGFiZXQgPSByZXF1aXJlKCcuL2FscGhhYmV0Jyk7XG5cbi8vIElnbm9yZSBhbGwgbWlsbGlzZWNvbmRzIGJlZm9yZSBhIGNlcnRhaW4gdGltZSB0byByZWR1Y2UgdGhlIHNpemUgb2YgdGhlIGRhdGUgZW50cm9weSB3aXRob3V0IHNhY3JpZmljaW5nIHVuaXF1ZW5lc3MuXG4vLyBUaGlzIG51bWJlciBzaG91bGQgYmUgdXBkYXRlZCBldmVyeSB5ZWFyIG9yIHNvIHRvIGtlZXAgdGhlIGdlbmVyYXRlZCBpZCBzaG9ydC5cbi8vIFRvIHJlZ2VuZXJhdGUgYG5ldyBEYXRlKCkgLSAwYCBhbmQgYnVtcCB0aGUgdmVyc2lvbi4gQWx3YXlzIGJ1bXAgdGhlIHZlcnNpb24hXG52YXIgUkVEVUNFX1RJTUUgPSAxNDU5NzA3NjA2NTE4O1xuXG4vLyBkb24ndCBjaGFuZ2UgdW5sZXNzIHdlIGNoYW5nZSB0aGUgYWxnb3Mgb3IgUkVEVUNFX1RJTUVcbi8vIG11c3QgYmUgYW4gaW50ZWdlciBhbmQgbGVzcyB0aGFuIDE2XG52YXIgdmVyc2lvbiA9IDY7XG5cbi8vIENvdW50ZXIgaXMgdXNlZCB3aGVuIHNob3J0aWQgaXMgY2FsbGVkIG11bHRpcGxlIHRpbWVzIGluIG9uZSBzZWNvbmQuXG52YXIgY291bnRlcjtcblxuLy8gUmVtZW1iZXIgdGhlIGxhc3QgdGltZSBzaG9ydGlkIHdhcyBjYWxsZWQgaW4gY2FzZSBjb3VudGVyIGlzIG5lZWRlZC5cbnZhciBwcmV2aW91c1NlY29uZHM7XG5cbi8qKlxuICogR2VuZXJhdGUgdW5pcXVlIGlkXG4gKiBSZXR1cm5zIHN0cmluZyBpZFxuICovXG5mdW5jdGlvbiBidWlsZChjbHVzdGVyV29ya2VySWQpIHtcblxuICAgIHZhciBzdHIgPSAnJztcblxuICAgIHZhciBzZWNvbmRzID0gTWF0aC5mbG9vcigoRGF0ZS5ub3coKSAtIFJFRFVDRV9USU1FKSAqIDAuMDAxKTtcblxuICAgIGlmIChzZWNvbmRzID09PSBwcmV2aW91c1NlY29uZHMpIHtcbiAgICAgICAgY291bnRlcisrO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvdW50ZXIgPSAwO1xuICAgICAgICBwcmV2aW91c1NlY29uZHMgPSBzZWNvbmRzO1xuICAgIH1cblxuICAgIHN0ciA9IHN0ciArIGVuY29kZShhbHBoYWJldC5sb29rdXAsIHZlcnNpb24pO1xuICAgIHN0ciA9IHN0ciArIGVuY29kZShhbHBoYWJldC5sb29rdXAsIGNsdXN0ZXJXb3JrZXJJZCk7XG4gICAgaWYgKGNvdW50ZXIgPiAwKSB7XG4gICAgICAgIHN0ciA9IHN0ciArIGVuY29kZShhbHBoYWJldC5sb29rdXAsIGNvdW50ZXIpO1xuICAgIH1cbiAgICBzdHIgPSBzdHIgKyBlbmNvZGUoYWxwaGFiZXQubG9va3VwLCBzZWNvbmRzKTtcblxuICAgIHJldHVybiBzdHI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnVpbGQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaG9ydGlkL2xpYi9idWlsZC5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFscGhhYmV0ID0gcmVxdWlyZSgnLi9hbHBoYWJldCcpO1xuXG5mdW5jdGlvbiBpc1Nob3J0SWQoaWQpIHtcbiAgICBpZiAoIWlkIHx8IHR5cGVvZiBpZCAhPT0gJ3N0cmluZycgfHwgaWQubGVuZ3RoIDwgNiApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBjaGFyYWN0ZXJzID0gYWxwaGFiZXQuY2hhcmFjdGVycygpO1xuICAgIHZhciBsZW4gPSBpZC5sZW5ndGg7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGxlbjtpKyspIHtcbiAgICAgICAgaWYgKGNoYXJhY3RlcnMuaW5kZXhPZihpZFtpXSkgPT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTaG9ydElkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvaXMtdmFsaWQuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSAwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvdXRpbC9jbHVzdGVyLXdvcmtlci1pZC1icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9