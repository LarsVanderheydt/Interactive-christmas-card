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

  create: ({text, id, name, sound}) => {
    const method = `POST`;
    const body = new FormData();
    body.append(`text`, text);
    body.append(`id`, id);
    body.append(`name`, name);
    body.append(`sound`, sound);

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
    audio;

  const saveBtn = document.getElementById(`save`);

  let mousePos = { x: 0, y: 0};

  let starArray = [];

  const init = () => {
    createScene();
    createLights();

    // audio = new Audio();
    const SpeechText = new __WEBPACK_IMPORTED_MODULE_3__classes_SpeechRecognition_js__["a" /* default */]();

    particlesJS.load('container', '../assets/particles.json', () => {
      console.log('callback - particles.js config loaded');
    });

    head = new __WEBPACK_IMPORTED_MODULE_0__classes_Head__["a" /* default */]();
    scene.add(head.mesh);

    window.scene = scene;

    saveBtn.addEventListener(`click`, () => {
      if (!SpeechText.txt) return;
      Object(__WEBPACK_IMPORTED_MODULE_4__objects_Save__["a" /* default */])({
        text: SpeechText.txt
      });
    });

    // console.log(controllerText);
    // const controller = new controllerText(this.skinColor);
    console.log("onder Controller");
    const gui = new dat.GUI();

    // let control1 = gui.addColor(controller, 'skinColor');
    // gui.add(options, 'reset');
    normalize();
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

  const normalize = (v, vmin, vmax, tmin, tmax) => {
    const nv = Math.max(Math.min(v, vmax), vmin);
    const dv = vmax - vmin;
    const pc = (nv - vmin) / dv;
    const dt = tmax - tmin;
    const tv = tmin + (pc * dt);
    return tv;
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
      console.log('blink');
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

  updateBody(speed) {
    //this.eyeBlueRight.rotation.y += (lion.tHeagRotY - this.eyeBlueRight.rotation.y) / speed;
    //this.eyeBlueRight.rotation.x += (this.eyeBlueRightRotX - this.eyeBlueRight.rotation.x) / speed;

    //this.eyeBlueRight.position.x += (this.eyeBlueRightPosX - this.eyeBlueRight.position.x) / speed;

    //this.eyeBlueRight.position.y += Math.sin(this.eyeBlueRightPosY - this.eyeBlueRight.position.y) / speed;
    // this.eyeBlueRight.position.z += (this.eyeBlueRightPosZ - this.eyeBlueRight.position.z) / speed;
  }

  idle(xTarget, yTarget) {
    //console.log(xTarget, yTarget);
    //console.log(this.eyeBlueRight.position.x);
    //console.log(this.eyeBlueRight.position.y);
    let distance = 1;

    this.head.rotation.z = Math.sin(Date.now() * 0.005) * Math.PI * 0.005;
    this.head.rotation.x = Math.sin(Date.now() * 0.004) * Math.PI * 0.03;

    this.eyeBlueLeft.position.x = Math.sin(Date.now() * 0.002) * distance / 2;
    this.eyeBlueRight.position.x = Math.sin(Date.now() * 0.002) * distance / 2;
    //this.eyeBlueRightPosX = (xTarget);

    //this.eyeBlueRightPosX = normalize(xTarget, -20, 20, 70, -70);

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
    this.updateBody(10);
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
}
/* unused harmony export default */
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

const HandleSave = ({text, sound}) => {
  const id = __WEBPACK_IMPORTED_MODULE_1_shortid___default.a.generate();
  __WEBPACK_IMPORTED_MODULE_0__lib_cartAPI__["a" /* default */].create({
    text, id, name: name.value, sound
  });

  link.innerHTML = `https://localhost:8080/santa.html?id=${id}`;
  link.setAttribute('href', `https://localhost:8080/santa.html?id=${id}`);
  link.setAttribute('target', `_blank`);
};

/* harmony default export */ __webpack_exports__["a"] = (HandleSave);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTg5NWQ0ODY2MTI1NzI2MmI5ZWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2xpYi9jYXJ0QVBJLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaG9ydGlkL2xpYi9hbHBoYWJldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvb2JqZWN0cy9jb2xvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtZmV0Y2gvZmV0Y2gtbnBtLWJyb3dzZXJpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3doYXR3Zy1mZXRjaC9mZXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvZW5jb2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzZXMvSGVhZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvb2JqZWN0cy9NYXRlcmlhbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzZXMvQXVkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzZXMvU3BlZWNoUmVjb2duaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL29iamVjdHMvU2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Nob3J0aWQvbGliL3JhbmRvbS9yYW5kb20tZnJvbS1zZWVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaG9ydGlkL2xpYi9yYW5kb20vcmFuZG9tLWJ5dGUtYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvZGVjb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaG9ydGlkL2xpYi9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvaXMtdmFsaWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Nob3J0aWQvbGliL3V0aWwvY2x1c3Rlci13b3JrZXItaWQtYnJvd3Nlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM3REE7O0FBRUE7O0FBRUE7O0FBRUEsWUFBWSxzQkFBc0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBFQUF1QixhQUFhO0FBQ3BDO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLHVFQUFvQixJQUFJO0FBQ3hCO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsdUVBQW9CLElBQUksR0FBRyxHQUFHLElBQUksT0FBTztBQUN6QztBQUNBOzs7Ozs7OztBQzNCQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNqR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNMQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLG1CQUFtQjtBQUMzRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0Msb0JBQW9CO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdDQUF3Qyw0QkFBNEI7QUFDcEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNULDhFQUE4RTtBQUM5RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4Qix1QkFBdUI7QUFDckQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSx1Q0FBdUMsMEJBQTBCO0FBQ2pFO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQkFBK0IsMEJBQTBCLGVBQWU7QUFDeEU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7QUM1Y0Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxrQkFBa0I7O0FBRWxCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0NBQXdDLDZCQUE2QjtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGdCQUFnQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isc0JBQXNCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7QUMxV0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7Ozs7QUN2aEJBO0FBQ0EsZ0RBQWdELHNDQUFzQztBQUN0RixpREFBaUQsc0NBQXNDO0FBQ3ZGLGtEQUFrRCx3Q0FBd0M7QUFDMUYsaURBQWlELHVDQUF1QztBQUN4RixpREFBaUQsdUNBQXVDO0FBQ3hGLCtDQUErQyx1Q0FBdUM7QUFDdEYsOENBQThDLDJDQUEyQztBQUN6RiwrQ0FBK0MsdUNBQXVDO0FBQ3RGLGdEQUFnRCx3Q0FBd0M7QUFDeEYsa0RBQWtEOztBQUVsRDtBQUNBLDRDQUE0Qyx3RkFBc0M7QUFDbEYsNkNBQTZDLHlGQUF1QztBQUNwRiw2Q0FBNkMseUZBQXVDO0FBQ3BGLDRDQUE0Qyx3RkFBc0M7QUFDbEYsMkNBQTJDLHlGQUF1QztBQUNsRiwyQ0FBMkMseUZBQXVDO0FBQ2xGLDZDQUE2Qyx5RkFBdUM7QUFDcEYsNkNBQTZDLHlGQUF1QztBQUNwRiwwQ0FBMEMsNkZBQTJDO0FBQ3JGLDRDQUE0QywwRkFBd0M7QUFDcEYseUNBQXlDLHVGQUFxQztBQUM5RSw4Q0FBOEM7QUFDOUM7O0FBRUE7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlDQUF5QyxjQUFjO0FBQ3ZEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTCxVQUFVLHVEQUF1RCxFQUFFO0FBQ25FO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7OztBQ2hFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkIsZ0JBQWdCLDhDQUE4Qzs7QUFFM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3BFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsWUFBWTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVILDJEQUEyRCxHQUFHO0FBQzlELG9FQUFvRSxHQUFHO0FBQ3ZFO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDaEJBO0FBQ0E7Ozs7Ozs7O0FDREE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDaEVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3hCQTs7QUFFQSw4RUFBOEU7O0FBRTlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDYkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDaEJBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7OztBQy9DQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsU0FBUztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDbEJBOztBQUVBIiwiZmlsZSI6ImpzL3NjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGU4OTVkNDg2NjEyNTcyNjJiOWVmIiwiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnO1xuXG5jb25zdCB1cmwgPSBgL2FwaS9jYXJ0YDtcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gIGNyZWF0ZTogKHt0ZXh0LCBpZCwgbmFtZSwgc291bmR9KSA9PiB7XG4gICAgY29uc3QgbWV0aG9kID0gYFBPU1RgO1xuICAgIGNvbnN0IGJvZHkgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBib2R5LmFwcGVuZChgdGV4dGAsIHRleHQpO1xuICAgIGJvZHkuYXBwZW5kKGBpZGAsIGlkKTtcbiAgICBib2R5LmFwcGVuZChgbmFtZWAsIG5hbWUpO1xuICAgIGJvZHkuYXBwZW5kKGBzb3VuZGAsIHNvdW5kKTtcblxuICAgIHJldHVybiBmZXRjaCh1cmwsIHttZXRob2QsIGJvZHl9KVxuICAgICAgLnRoZW4ociA9PiByLmpzb24oKSk7XG4gIH0sXG5cbiAgcmVhZDogKCkgPT4ge1xuICAgIHJldHVybiBmZXRjaChgJHt1cmx9P2lzQWN0aXZlPXRydWVgKVxuICAgICAgLnRoZW4ociA9PiByLmpzb24oKSk7XG4gIH0sXG5cbiAgcmVhZE9uZTogaWQgPT4ge1xuICAgIGNvbnN0IG1ldGhvZCA9IGBHRVRgO1xuICAgIHJldHVybiBmZXRjaChgJHt1cmx9LyR7aWR9YCwge21ldGhvZH0pLnRoZW4ociA9PiByLmpzb24oKSk7XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9saWIvY2FydEFQSS5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJhbmRvbUZyb21TZWVkID0gcmVxdWlyZSgnLi9yYW5kb20vcmFuZG9tLWZyb20tc2VlZCcpO1xuXG52YXIgT1JJR0lOQUwgPSAnMDEyMzQ1Njc4OWFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpfLSc7XG52YXIgYWxwaGFiZXQ7XG52YXIgcHJldmlvdXNTZWVkO1xuXG52YXIgc2h1ZmZsZWQ7XG5cbmZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIHNodWZmbGVkID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHNldENoYXJhY3RlcnMoX2FscGhhYmV0Xykge1xuICAgIGlmICghX2FscGhhYmV0Xykge1xuICAgICAgICBpZiAoYWxwaGFiZXQgIT09IE9SSUdJTkFMKSB7XG4gICAgICAgICAgICBhbHBoYWJldCA9IE9SSUdJTkFMO1xuICAgICAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKF9hbHBoYWJldF8gPT09IGFscGhhYmV0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoX2FscGhhYmV0Xy5sZW5ndGggIT09IE9SSUdJTkFMLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0N1c3RvbSBhbHBoYWJldCBmb3Igc2hvcnRpZCBtdXN0IGJlICcgKyBPUklHSU5BTC5sZW5ndGggKyAnIHVuaXF1ZSBjaGFyYWN0ZXJzLiBZb3Ugc3VibWl0dGVkICcgKyBfYWxwaGFiZXRfLmxlbmd0aCArICcgY2hhcmFjdGVyczogJyArIF9hbHBoYWJldF8pO1xuICAgIH1cblxuICAgIHZhciB1bmlxdWUgPSBfYWxwaGFiZXRfLnNwbGl0KCcnKS5maWx0ZXIoZnVuY3Rpb24oaXRlbSwgaW5kLCBhcnIpe1xuICAgICAgIHJldHVybiBpbmQgIT09IGFyci5sYXN0SW5kZXhPZihpdGVtKTtcbiAgICB9KTtcblxuICAgIGlmICh1bmlxdWUubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ3VzdG9tIGFscGhhYmV0IGZvciBzaG9ydGlkIG11c3QgYmUgJyArIE9SSUdJTkFMLmxlbmd0aCArICcgdW5pcXVlIGNoYXJhY3RlcnMuIFRoZXNlIGNoYXJhY3RlcnMgd2VyZSBub3QgdW5pcXVlOiAnICsgdW5pcXVlLmpvaW4oJywgJykpO1xuICAgIH1cblxuICAgIGFscGhhYmV0ID0gX2FscGhhYmV0XztcbiAgICByZXNldCgpO1xufVxuXG5mdW5jdGlvbiBjaGFyYWN0ZXJzKF9hbHBoYWJldF8pIHtcbiAgICBzZXRDaGFyYWN0ZXJzKF9hbHBoYWJldF8pO1xuICAgIHJldHVybiBhbHBoYWJldDtcbn1cblxuZnVuY3Rpb24gc2V0U2VlZChzZWVkKSB7XG4gICAgcmFuZG9tRnJvbVNlZWQuc2VlZChzZWVkKTtcbiAgICBpZiAocHJldmlvdXNTZWVkICE9PSBzZWVkKSB7XG4gICAgICAgIHJlc2V0KCk7XG4gICAgICAgIHByZXZpb3VzU2VlZCA9IHNlZWQ7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzaHVmZmxlKCkge1xuICAgIGlmICghYWxwaGFiZXQpIHtcbiAgICAgICAgc2V0Q2hhcmFjdGVycyhPUklHSU5BTCk7XG4gICAgfVxuXG4gICAgdmFyIHNvdXJjZUFycmF5ID0gYWxwaGFiZXQuc3BsaXQoJycpO1xuICAgIHZhciB0YXJnZXRBcnJheSA9IFtdO1xuICAgIHZhciByID0gcmFuZG9tRnJvbVNlZWQubmV4dFZhbHVlKCk7XG4gICAgdmFyIGNoYXJhY3RlckluZGV4O1xuXG4gICAgd2hpbGUgKHNvdXJjZUFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgciA9IHJhbmRvbUZyb21TZWVkLm5leHRWYWx1ZSgpO1xuICAgICAgICBjaGFyYWN0ZXJJbmRleCA9IE1hdGguZmxvb3IociAqIHNvdXJjZUFycmF5Lmxlbmd0aCk7XG4gICAgICAgIHRhcmdldEFycmF5LnB1c2goc291cmNlQXJyYXkuc3BsaWNlKGNoYXJhY3RlckluZGV4LCAxKVswXSk7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXRBcnJheS5qb2luKCcnKTtcbn1cblxuZnVuY3Rpb24gZ2V0U2h1ZmZsZWQoKSB7XG4gICAgaWYgKHNodWZmbGVkKSB7XG4gICAgICAgIHJldHVybiBzaHVmZmxlZDtcbiAgICB9XG4gICAgc2h1ZmZsZWQgPSBzaHVmZmxlKCk7XG4gICAgcmV0dXJuIHNodWZmbGVkO1xufVxuXG4vKipcbiAqIGxvb2t1cCBzaHVmZmxlZCBsZXR0ZXJcbiAqIEBwYXJhbSBpbmRleFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gbG9va3VwKGluZGV4KSB7XG4gICAgdmFyIGFscGhhYmV0U2h1ZmZsZWQgPSBnZXRTaHVmZmxlZCgpO1xuICAgIHJldHVybiBhbHBoYWJldFNodWZmbGVkW2luZGV4XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgY2hhcmFjdGVyczogY2hhcmFjdGVycyxcbiAgICBzZWVkOiBzZXRTZWVkLFxuICAgIGxvb2t1cDogbG9va3VwLFxuICAgIHNodWZmbGVkOiBnZXRTaHVmZmxlZFxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Nob3J0aWQvbGliL2FscGhhYmV0LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IENvbG9ycyA9IHtcbiAgc2tpbjogMHhmZmUwYmQsXG4gIHNraW4yOiAweGNmYmE5NixcbiAgd2hpdGU6IDB4ZTllYmVlLFxuICBnb2xkOiAweGY5YzQyMSxcbiAgdGVldGg6IDB4ZmZmZmZmLFxuICBiZWlnZTogMHhhNDkxNzgsXG4gIGJyb3duOiAweDZlNTEzNixcbiAgYmxhY2s6IDB4MmUyZTJlLFxuICBsaWdodEJsdWU6IDB4NjI5NWE4LFxuICB5ZWxsb3c6IDB4ZmZmMDAwLFxuICByZWQ6IDB4Y2QwMDIwXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb2xvcnM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9vYmplY3RzL2NvbG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyB0aGUgd2hhdHdnLWZldGNoIHBvbHlmaWxsIGluc3RhbGxzIHRoZSBmZXRjaCgpIGZ1bmN0aW9uXG4vLyBvbiB0aGUgZ2xvYmFsIG9iamVjdCAod2luZG93IG9yIHNlbGYpXG4vL1xuLy8gUmV0dXJuIHRoYXQgYXMgdGhlIGV4cG9ydCBmb3IgdXNlIGluIFdlYnBhY2ssIEJyb3dzZXJpZnkgZXRjLlxucmVxdWlyZSgnd2hhdHdnLWZldGNoJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHNlbGYuZmV0Y2guYmluZChzZWxmKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtZmV0Y2gvZmV0Y2gtbnBtLWJyb3dzZXJpZnkuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIoZnVuY3Rpb24oc2VsZikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgaWYgKHNlbGYuZmV0Y2gpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciBzdXBwb3J0ID0ge1xuICAgIHNlYXJjaFBhcmFtczogJ1VSTFNlYXJjaFBhcmFtcycgaW4gc2VsZixcbiAgICBpdGVyYWJsZTogJ1N5bWJvbCcgaW4gc2VsZiAmJiAnaXRlcmF0b3InIGluIFN5bWJvbCxcbiAgICBibG9iOiAnRmlsZVJlYWRlcicgaW4gc2VsZiAmJiAnQmxvYicgaW4gc2VsZiAmJiAoZnVuY3Rpb24oKSB7XG4gICAgICB0cnkge1xuICAgICAgICBuZXcgQmxvYigpXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfSkoKSxcbiAgICBmb3JtRGF0YTogJ0Zvcm1EYXRhJyBpbiBzZWxmLFxuICAgIGFycmF5QnVmZmVyOiAnQXJyYXlCdWZmZXInIGluIHNlbGZcbiAgfVxuXG4gIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyKSB7XG4gICAgdmFyIHZpZXdDbGFzc2VzID0gW1xuICAgICAgJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQzMkFycmF5XScsXG4gICAgICAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nXG4gICAgXVxuXG4gICAgdmFyIGlzRGF0YVZpZXcgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgRGF0YVZpZXcucHJvdG90eXBlLmlzUHJvdG90eXBlT2Yob2JqKVxuICAgIH1cblxuICAgIHZhciBpc0FycmF5QnVmZmVyVmlldyA9IEFycmF5QnVmZmVyLmlzVmlldyB8fCBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdmlld0NsYXNzZXMuaW5kZXhPZihPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSkgPiAtMVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZU5hbWUobmFtZSkge1xuICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIG5hbWUgPSBTdHJpbmcobmFtZSlcbiAgICB9XG4gICAgaWYgKC9bXmEtejAtOVxcLSMkJSYnKisuXFxeX2B8fl0vaS50ZXN0KG5hbWUpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGNoYXJhY3RlciBpbiBoZWFkZXIgZmllbGQgbmFtZScpXG4gICAgfVxuICAgIHJldHVybiBuYW1lLnRvTG93ZXJDYXNlKClcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZVZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHZhbHVlID0gU3RyaW5nKHZhbHVlKVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIC8vIEJ1aWxkIGEgZGVzdHJ1Y3RpdmUgaXRlcmF0b3IgZm9yIHRoZSB2YWx1ZSBsaXN0XG4gIGZ1bmN0aW9uIGl0ZXJhdG9yRm9yKGl0ZW1zKSB7XG4gICAgdmFyIGl0ZXJhdG9yID0ge1xuICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGl0ZW1zLnNoaWZ0KClcbiAgICAgICAgcmV0dXJuIHtkb25lOiB2YWx1ZSA9PT0gdW5kZWZpbmVkLCB2YWx1ZTogdmFsdWV9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cHBvcnQuaXRlcmFibGUpIHtcbiAgICAgIGl0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZXJhdG9yXG4gIH1cblxuICBmdW5jdGlvbiBIZWFkZXJzKGhlYWRlcnMpIHtcbiAgICB0aGlzLm1hcCA9IHt9XG5cbiAgICBpZiAoaGVhZGVycyBpbnN0YW5jZW9mIEhlYWRlcnMpIHtcbiAgICAgIGhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgICAgICB0aGlzLmFwcGVuZChuYW1lLCB2YWx1ZSlcbiAgICAgIH0sIHRoaXMpXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGhlYWRlcnMpKSB7XG4gICAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24oaGVhZGVyKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKGhlYWRlclswXSwgaGVhZGVyWzFdKVxuICAgICAgfSwgdGhpcylcbiAgICB9IGVsc2UgaWYgKGhlYWRlcnMpIHtcbiAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGhlYWRlcnMpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgICB0aGlzLmFwcGVuZChuYW1lLCBoZWFkZXJzW25hbWVdKVxuICAgICAgfSwgdGhpcylcbiAgICB9XG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgIG5hbWUgPSBub3JtYWxpemVOYW1lKG5hbWUpXG4gICAgdmFsdWUgPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSlcbiAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLm1hcFtuYW1lXVxuICAgIHRoaXMubWFwW25hbWVdID0gb2xkVmFsdWUgPyBvbGRWYWx1ZSsnLCcrdmFsdWUgOiB2YWx1ZVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGVbJ2RlbGV0ZSddID0gZnVuY3Rpb24obmFtZSkge1xuICAgIGRlbGV0ZSB0aGlzLm1hcFtub3JtYWxpemVOYW1lKG5hbWUpXVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24obmFtZSkge1xuICAgIG5hbWUgPSBub3JtYWxpemVOYW1lKG5hbWUpXG4gICAgcmV0dXJuIHRoaXMuaGFzKG5hbWUpID8gdGhpcy5tYXBbbmFtZV0gOiBudWxsXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwLmhhc093blByb3BlcnR5KG5vcm1hbGl6ZU5hbWUobmFtZSkpXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgIHRoaXMubWFwW25vcm1hbGl6ZU5hbWUobmFtZSldID0gbm9ybWFsaXplVmFsdWUodmFsdWUpXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24oY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMubWFwKSB7XG4gICAgICBpZiAodGhpcy5tYXAuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB0aGlzLm1hcFtuYW1lXSwgbmFtZSwgdGhpcylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5rZXlzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1zID0gW11cbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHsgaXRlbXMucHVzaChuYW1lKSB9KVxuICAgIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLnZhbHVlcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdXG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7IGl0ZW1zLnB1c2godmFsdWUpIH0pXG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuZW50cmllcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdXG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7IGl0ZW1zLnB1c2goW25hbWUsIHZhbHVlXSkgfSlcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH1cblxuICBpZiAoc3VwcG9ydC5pdGVyYWJsZSkge1xuICAgIEhlYWRlcnMucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl0gPSBIZWFkZXJzLnByb3RvdHlwZS5lbnRyaWVzXG4gIH1cblxuICBmdW5jdGlvbiBjb25zdW1lZChib2R5KSB7XG4gICAgaWYgKGJvZHkuYm9keVVzZWQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKCdBbHJlYWR5IHJlYWQnKSlcbiAgICB9XG4gICAgYm9keS5ib2R5VXNlZCA9IHRydWVcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlc29sdmUocmVhZGVyLnJlc3VsdClcbiAgICAgIH1cbiAgICAgIHJlYWRlci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChyZWFkZXIuZXJyb3IpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWRCbG9iQXNBcnJheUJ1ZmZlcihibG9iKSB7XG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICB2YXIgcHJvbWlzZSA9IGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpXG4gICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGJsb2IpXG4gICAgcmV0dXJuIHByb21pc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWRCbG9iQXNUZXh0KGJsb2IpIHtcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgIHZhciBwcm9taXNlID0gZmlsZVJlYWRlclJlYWR5KHJlYWRlcilcbiAgICByZWFkZXIucmVhZEFzVGV4dChibG9iKVxuICAgIHJldHVybiBwcm9taXNlXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQXJyYXlCdWZmZXJBc1RleHQoYnVmKSB7XG4gICAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShidWYpXG4gICAgdmFyIGNoYXJzID0gbmV3IEFycmF5KHZpZXcubGVuZ3RoKVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2aWV3Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGFyc1tpXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUodmlld1tpXSlcbiAgICB9XG4gICAgcmV0dXJuIGNoYXJzLmpvaW4oJycpXG4gIH1cblxuICBmdW5jdGlvbiBidWZmZXJDbG9uZShidWYpIHtcbiAgICBpZiAoYnVmLnNsaWNlKSB7XG4gICAgICByZXR1cm4gYnVmLnNsaWNlKDApXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoYnVmLmJ5dGVMZW5ndGgpXG4gICAgICB2aWV3LnNldChuZXcgVWludDhBcnJheShidWYpKVxuICAgICAgcmV0dXJuIHZpZXcuYnVmZmVyXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gQm9keSgpIHtcbiAgICB0aGlzLmJvZHlVc2VkID0gZmFsc2VcblxuICAgIHRoaXMuX2luaXRCb2R5ID0gZnVuY3Rpb24oYm9keSkge1xuICAgICAgdGhpcy5fYm9keUluaXQgPSBib2R5XG4gICAgICBpZiAoIWJvZHkpIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSAnJ1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYm9keSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSBib2R5XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYmxvYiAmJiBCbG9iLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlCbG9iID0gYm9keVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmZvcm1EYXRhICYmIEZvcm1EYXRhLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlGb3JtRGF0YSA9IGJvZHlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5zZWFyY2hQYXJhbXMgJiYgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keS50b1N0cmluZygpXG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIgJiYgc3VwcG9ydC5ibG9iICYmIGlzRGF0YVZpZXcoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyID0gYnVmZmVyQ2xvbmUoYm9keS5idWZmZXIpXG4gICAgICAgIC8vIElFIDEwLTExIGNhbid0IGhhbmRsZSBhIERhdGFWaWV3IGJvZHkuXG4gICAgICAgIHRoaXMuX2JvZHlJbml0ID0gbmV3IEJsb2IoW3RoaXMuX2JvZHlBcnJheUJ1ZmZlcl0pXG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIgJiYgKEFycmF5QnVmZmVyLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpIHx8IGlzQXJyYXlCdWZmZXJWaWV3KGJvZHkpKSkge1xuICAgICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIgPSBidWZmZXJDbG9uZShib2R5KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bnN1cHBvcnRlZCBCb2R5SW5pdCB0eXBlJylcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKSkge1xuICAgICAgICBpZiAodHlwZW9mIGJvZHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgJ3RleHQvcGxhaW47Y2hhcnNldD1VVEYtOCcpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUJsb2IgJiYgdGhpcy5fYm9keUJsb2IudHlwZSkge1xuICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsIHRoaXMuX2JvZHlCbG9iLnR5cGUpXG4gICAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5zZWFyY2hQYXJhbXMgJiYgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PVVURi04JylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdXBwb3J0LmJsb2IpIHtcbiAgICAgIHRoaXMuYmxvYiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcmVqZWN0ZWQgPSBjb25zdW1lZCh0aGlzKVxuICAgICAgICBpZiAocmVqZWN0ZWQpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0ZWRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9ib2R5QmxvYikge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUJsb2IpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbdGhpcy5fYm9keUFycmF5QnVmZmVyXSkpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUZvcm1EYXRhKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgcmVhZCBGb3JtRGF0YSBib2R5IGFzIGJsb2InKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3RoaXMuX2JvZHlUZXh0XSkpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5hcnJheUJ1ZmZlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnN1bWVkKHRoaXMpIHx8IFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYmxvYigpLnRoZW4ocmVhZEJsb2JBc0FycmF5QnVmZmVyKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy50ZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcmVqZWN0ZWQgPSBjb25zdW1lZCh0aGlzKVxuICAgICAgaWYgKHJlamVjdGVkKSB7XG4gICAgICAgIHJldHVybiByZWplY3RlZFxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fYm9keUJsb2IpIHtcbiAgICAgICAgcmV0dXJuIHJlYWRCbG9iQXNUZXh0KHRoaXMuX2JvZHlCbG9iKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZWFkQXJyYXlCdWZmZXJBc1RleHQodGhpcy5fYm9keUFycmF5QnVmZmVyKSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUZvcm1EYXRhKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IHJlYWQgRm9ybURhdGEgYm9keSBhcyB0ZXh0JylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keVRleHQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cHBvcnQuZm9ybURhdGEpIHtcbiAgICAgIHRoaXMuZm9ybURhdGEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dCgpLnRoZW4oZGVjb2RlKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuanNvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudGV4dCgpLnRoZW4oSlNPTi5wYXJzZSlcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgLy8gSFRUUCBtZXRob2RzIHdob3NlIGNhcGl0YWxpemF0aW9uIHNob3VsZCBiZSBub3JtYWxpemVkXG4gIHZhciBtZXRob2RzID0gWydERUxFVEUnLCAnR0VUJywgJ0hFQUQnLCAnT1BUSU9OUycsICdQT1NUJywgJ1BVVCddXG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplTWV0aG9kKG1ldGhvZCkge1xuICAgIHZhciB1cGNhc2VkID0gbWV0aG9kLnRvVXBwZXJDYXNlKClcbiAgICByZXR1cm4gKG1ldGhvZHMuaW5kZXhPZih1cGNhc2VkKSA+IC0xKSA/IHVwY2FzZWQgOiBtZXRob2RcbiAgfVxuXG4gIGZ1bmN0aW9uIFJlcXVlc3QoaW5wdXQsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuICAgIHZhciBib2R5ID0gb3B0aW9ucy5ib2R5XG5cbiAgICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBSZXF1ZXN0KSB7XG4gICAgICBpZiAoaW5wdXQuYm9keVVzZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQWxyZWFkeSByZWFkJylcbiAgICAgIH1cbiAgICAgIHRoaXMudXJsID0gaW5wdXQudXJsXG4gICAgICB0aGlzLmNyZWRlbnRpYWxzID0gaW5wdXQuY3JlZGVudGlhbHNcbiAgICAgIGlmICghb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKGlucHV0LmhlYWRlcnMpXG4gICAgICB9XG4gICAgICB0aGlzLm1ldGhvZCA9IGlucHV0Lm1ldGhvZFxuICAgICAgdGhpcy5tb2RlID0gaW5wdXQubW9kZVxuICAgICAgaWYgKCFib2R5ICYmIGlucHV0Ll9ib2R5SW5pdCAhPSBudWxsKSB7XG4gICAgICAgIGJvZHkgPSBpbnB1dC5fYm9keUluaXRcbiAgICAgICAgaW5wdXQuYm9keVVzZWQgPSB0cnVlXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXJsID0gU3RyaW5nKGlucHV0KVxuICAgIH1cblxuICAgIHRoaXMuY3JlZGVudGlhbHMgPSBvcHRpb25zLmNyZWRlbnRpYWxzIHx8IHRoaXMuY3JlZGVudGlhbHMgfHwgJ29taXQnXG4gICAgaWYgKG9wdGlvbnMuaGVhZGVycyB8fCAhdGhpcy5oZWFkZXJzKSB7XG4gICAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhvcHRpb25zLmhlYWRlcnMpXG4gICAgfVxuICAgIHRoaXMubWV0aG9kID0gbm9ybWFsaXplTWV0aG9kKG9wdGlvbnMubWV0aG9kIHx8IHRoaXMubWV0aG9kIHx8ICdHRVQnKVxuICAgIHRoaXMubW9kZSA9IG9wdGlvbnMubW9kZSB8fCB0aGlzLm1vZGUgfHwgbnVsbFxuICAgIHRoaXMucmVmZXJyZXIgPSBudWxsXG5cbiAgICBpZiAoKHRoaXMubWV0aG9kID09PSAnR0VUJyB8fCB0aGlzLm1ldGhvZCA9PT0gJ0hFQUQnKSAmJiBib2R5KSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb2R5IG5vdCBhbGxvd2VkIGZvciBHRVQgb3IgSEVBRCByZXF1ZXN0cycpXG4gICAgfVxuICAgIHRoaXMuX2luaXRCb2R5KGJvZHkpXG4gIH1cblxuICBSZXF1ZXN0LnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUmVxdWVzdCh0aGlzLCB7IGJvZHk6IHRoaXMuX2JvZHlJbml0IH0pXG4gIH1cblxuICBmdW5jdGlvbiBkZWNvZGUoYm9keSkge1xuICAgIHZhciBmb3JtID0gbmV3IEZvcm1EYXRhKClcbiAgICBib2R5LnRyaW0oKS5zcGxpdCgnJicpLmZvckVhY2goZnVuY3Rpb24oYnl0ZXMpIHtcbiAgICAgIGlmIChieXRlcykge1xuICAgICAgICB2YXIgc3BsaXQgPSBieXRlcy5zcGxpdCgnPScpXG4gICAgICAgIHZhciBuYW1lID0gc3BsaXQuc2hpZnQoKS5yZXBsYWNlKC9cXCsvZywgJyAnKVxuICAgICAgICB2YXIgdmFsdWUgPSBzcGxpdC5qb2luKCc9JykucmVwbGFjZSgvXFwrL2csICcgJylcbiAgICAgICAgZm9ybS5hcHBlbmQoZGVjb2RlVVJJQ29tcG9uZW50KG5hbWUpLCBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGZvcm1cbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhyYXdIZWFkZXJzKSB7XG4gICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpXG4gICAgcmF3SGVhZGVycy5zcGxpdCgvXFxyP1xcbi8pLmZvckVhY2goZnVuY3Rpb24obGluZSkge1xuICAgICAgdmFyIHBhcnRzID0gbGluZS5zcGxpdCgnOicpXG4gICAgICB2YXIga2V5ID0gcGFydHMuc2hpZnQoKS50cmltKClcbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gcGFydHMuam9pbignOicpLnRyaW0oKVxuICAgICAgICBoZWFkZXJzLmFwcGVuZChrZXksIHZhbHVlKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGhlYWRlcnNcbiAgfVxuXG4gIEJvZHkuY2FsbChSZXF1ZXN0LnByb3RvdHlwZSlcblxuICBmdW5jdGlvbiBSZXNwb25zZShib2R5SW5pdCwgb3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IHt9XG4gICAgfVxuXG4gICAgdGhpcy50eXBlID0gJ2RlZmF1bHQnXG4gICAgdGhpcy5zdGF0dXMgPSAnc3RhdHVzJyBpbiBvcHRpb25zID8gb3B0aW9ucy5zdGF0dXMgOiAyMDBcbiAgICB0aGlzLm9rID0gdGhpcy5zdGF0dXMgPj0gMjAwICYmIHRoaXMuc3RhdHVzIDwgMzAwXG4gICAgdGhpcy5zdGF0dXNUZXh0ID0gJ3N0YXR1c1RleHQnIGluIG9wdGlvbnMgPyBvcHRpb25zLnN0YXR1c1RleHQgOiAnT0snXG4gICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKVxuICAgIHRoaXMudXJsID0gb3B0aW9ucy51cmwgfHwgJydcbiAgICB0aGlzLl9pbml0Qm9keShib2R5SW5pdClcbiAgfVxuXG4gIEJvZHkuY2FsbChSZXNwb25zZS5wcm90b3R5cGUpXG5cbiAgUmVzcG9uc2UucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZSh0aGlzLl9ib2R5SW5pdCwge1xuICAgICAgc3RhdHVzOiB0aGlzLnN0YXR1cyxcbiAgICAgIHN0YXR1c1RleHQ6IHRoaXMuc3RhdHVzVGV4dCxcbiAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHRoaXMuaGVhZGVycyksXG4gICAgICB1cmw6IHRoaXMudXJsXG4gICAgfSlcbiAgfVxuXG4gIFJlc3BvbnNlLmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKG51bGwsIHtzdGF0dXM6IDAsIHN0YXR1c1RleHQ6ICcnfSlcbiAgICByZXNwb25zZS50eXBlID0gJ2Vycm9yJ1xuICAgIHJldHVybiByZXNwb25zZVxuICB9XG5cbiAgdmFyIHJlZGlyZWN0U3RhdHVzZXMgPSBbMzAxLCAzMDIsIDMwMywgMzA3LCAzMDhdXG5cbiAgUmVzcG9uc2UucmVkaXJlY3QgPSBmdW5jdGlvbih1cmwsIHN0YXR1cykge1xuICAgIGlmIChyZWRpcmVjdFN0YXR1c2VzLmluZGV4T2Yoc3RhdHVzKSA9PT0gLTEpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHN0YXR1cyBjb2RlJylcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKG51bGwsIHtzdGF0dXM6IHN0YXR1cywgaGVhZGVyczoge2xvY2F0aW9uOiB1cmx9fSlcbiAgfVxuXG4gIHNlbGYuSGVhZGVycyA9IEhlYWRlcnNcbiAgc2VsZi5SZXF1ZXN0ID0gUmVxdWVzdFxuICBzZWxmLlJlc3BvbnNlID0gUmVzcG9uc2VcblxuICBzZWxmLmZldGNoID0gZnVuY3Rpb24oaW5wdXQsIGluaXQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KGlucHV0LCBpbml0KVxuICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXG5cbiAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgc3RhdHVzOiB4aHIuc3RhdHVzLFxuICAgICAgICAgIHN0YXR1c1RleHQ6IHhoci5zdGF0dXNUZXh0LFxuICAgICAgICAgIGhlYWRlcnM6IHBhcnNlSGVhZGVycyh4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkgfHwgJycpXG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9ucy51cmwgPSAncmVzcG9uc2VVUkwnIGluIHhociA/IHhoci5yZXNwb25zZVVSTCA6IG9wdGlvbnMuaGVhZGVycy5nZXQoJ1gtUmVxdWVzdC1VUkwnKVxuICAgICAgICB2YXIgYm9keSA9ICdyZXNwb25zZScgaW4geGhyID8geGhyLnJlc3BvbnNlIDogeGhyLnJlc3BvbnNlVGV4dFxuICAgICAgICByZXNvbHZlKG5ldyBSZXNwb25zZShib2R5LCBvcHRpb25zKSlcbiAgICAgIH1cblxuICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ05ldHdvcmsgcmVxdWVzdCBmYWlsZWQnKSlcbiAgICAgIH1cblxuICAgICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QobmV3IFR5cGVFcnJvcignTmV0d29yayByZXF1ZXN0IGZhaWxlZCcpKVxuICAgICAgfVxuXG4gICAgICB4aHIub3BlbihyZXF1ZXN0Lm1ldGhvZCwgcmVxdWVzdC51cmwsIHRydWUpXG5cbiAgICAgIGlmIChyZXF1ZXN0LmNyZWRlbnRpYWxzID09PSAnaW5jbHVkZScpIHtcbiAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKCdyZXNwb25zZVR5cGUnIGluIHhociAmJiBzdXBwb3J0LmJsb2IpIHtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdibG9iJ1xuICAgICAgfVxuXG4gICAgICByZXF1ZXN0LmhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihuYW1lLCB2YWx1ZSlcbiAgICAgIH0pXG5cbiAgICAgIHhoci5zZW5kKHR5cGVvZiByZXF1ZXN0Ll9ib2R5SW5pdCA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogcmVxdWVzdC5fYm9keUluaXQpXG4gICAgfSlcbiAgfVxuICBzZWxmLmZldGNoLnBvbHlmaWxsID0gdHJ1ZVxufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvd2hhdHdnLWZldGNoL2ZldGNoLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmFuZG9tQnl0ZSA9IHJlcXVpcmUoJy4vcmFuZG9tL3JhbmRvbS1ieXRlJyk7XG5cbmZ1bmN0aW9uIGVuY29kZShsb29rdXAsIG51bWJlcikge1xuICAgIHZhciBsb29wQ291bnRlciA9IDA7XG4gICAgdmFyIGRvbmU7XG5cbiAgICB2YXIgc3RyID0gJyc7XG5cbiAgICB3aGlsZSAoIWRvbmUpIHtcbiAgICAgICAgc3RyID0gc3RyICsgbG9va3VwKCAoIChudW1iZXIgPj4gKDQgKiBsb29wQ291bnRlcikpICYgMHgwZiApIHwgcmFuZG9tQnl0ZSgpICk7XG4gICAgICAgIGRvbmUgPSBudW1iZXIgPCAoTWF0aC5wb3coMTYsIGxvb3BDb3VudGVyICsgMSApICk7XG4gICAgICAgIGxvb3BDb3VudGVyKys7XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZW5jb2RlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvZW5jb2RlLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBIZWFkIGZyb20gJy4vY2xhc3Nlcy9IZWFkJztcbmltcG9ydCBDb2xvcnMgZnJvbSAnLi9vYmplY3RzL2NvbG9ycyc7XG5pbXBvcnQgQXVkaW8gZnJvbSAnLi9jbGFzc2VzL0F1ZGlvLmpzJztcbmltcG9ydCBTcGVlY2hSZWNvZ24gZnJvbSAnLi9jbGFzc2VzL1NwZWVjaFJlY29nbml0aW9uLmpzJztcbmltcG9ydCBIYW5kbGVTYXZlIGZyb20gJy4vb2JqZWN0cy9TYXZlJztcbmltcG9ydCBDYXJ0QVBJIGZyb20gJy4vbGliL2NhcnRBUEknO1xue1xuICBsZXQgc2NlbmUsXG4gICAgY2FtZXJhLFxuICAgIGZpZWxkT2ZWaWV3LFxuICAgIGFzcGVjdFJhdGlvLFxuICAgIG5lYXJQbGFuZSxcbiAgICBmYXJQbGFuZSxcbiAgICBIRUlHSFQsXG4gICAgV0lEVEgsXG4gICAgZ2xvYmFsTGlnaHQsXG4gICAgc2hhZG93TGlnaHQsXG4gICAgYmFja0xpZ2h0LFxuICAgIGxpZ2h0LFxuICAgIHJlbmRlcmVyLFxuICAgIGNvbnRhaW5lcixcbiAgICBjb250cm9scyxcbiAgICBsb2FkZWQsXG4gICAgaGVhZCxcbiAgICBzdGFycyxcbiAgICB3aW5kb3dIYWxmWCxcbiAgICB3aW5kb3dIYWxmWSxcbiAgICBjb2xvcixcbiAgICBhdWRpbztcblxuICBjb25zdCBzYXZlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHNhdmVgKTtcblxuICBsZXQgbW91c2VQb3MgPSB7IHg6IDAsIHk6IDB9O1xuXG4gIGxldCBzdGFyQXJyYXkgPSBbXTtcblxuICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgIGNyZWF0ZVNjZW5lKCk7XG4gICAgY3JlYXRlTGlnaHRzKCk7XG5cbiAgICAvLyBhdWRpbyA9IG5ldyBBdWRpbygpO1xuICAgIGNvbnN0IFNwZWVjaFRleHQgPSBuZXcgU3BlZWNoUmVjb2duKCk7XG5cbiAgICBwYXJ0aWNsZXNKUy5sb2FkKCdjb250YWluZXInLCAnLi4vYXNzZXRzL3BhcnRpY2xlcy5qc29uJywgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2NhbGxiYWNrIC0gcGFydGljbGVzLmpzIGNvbmZpZyBsb2FkZWQnKTtcbiAgICB9KTtcblxuICAgIGhlYWQgPSBuZXcgSGVhZCgpO1xuICAgIHNjZW5lLmFkZChoZWFkLm1lc2gpO1xuXG4gICAgd2luZG93LnNjZW5lID0gc2NlbmU7XG5cbiAgICBzYXZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgKCkgPT4ge1xuICAgICAgaWYgKCFTcGVlY2hUZXh0LnR4dCkgcmV0dXJuO1xuICAgICAgSGFuZGxlU2F2ZSh7XG4gICAgICAgIHRleHQ6IFNwZWVjaFRleHQudHh0XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIGNvbnNvbGUubG9nKGNvbnRyb2xsZXJUZXh0KTtcbiAgICAvLyBjb25zdCBjb250cm9sbGVyID0gbmV3IGNvbnRyb2xsZXJUZXh0KHRoaXMuc2tpbkNvbG9yKTtcbiAgICBjb25zb2xlLmxvZyhcIm9uZGVyIENvbnRyb2xsZXJcIik7XG4gICAgY29uc3QgZ3VpID0gbmV3IGRhdC5HVUkoKTtcblxuICAgIC8vIGxldCBjb250cm9sMSA9IGd1aS5hZGRDb2xvcihjb250cm9sbGVyLCAnc2tpbkNvbG9yJyk7XG4gICAgLy8gZ3VpLmFkZChvcHRpb25zLCAncmVzZXQnKTtcbiAgICBub3JtYWxpemUoKTtcbiAgICBsb29wKCk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlU2NlbmUgPSAoKSA9PiB7O1xuICAgIEhFSUdIVCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICBXSURUSCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHdpbmRvd0hhbGZYID0gV0lEVEggLyAyO1xuICAgIHdpbmRvd0hhbGZZID0gSEVJR0hUIC8gMjtcblxuICAgIHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG4gICAgLy9zY2VuZS5mb2cgPSBuZXcgVEhSRUUuRm9nKDB4ZmZmZmZmLCAxNTAsMzAwKTtcbiAgICBhc3BlY3RSYXRpbyA9IFdJRFRIIC8gSEVJR0hUO1xuICAgIGZpZWxkT2ZWaWV3ID0gNTA7XG4gICAgbmVhclBsYW5lID0gMTtcbiAgICBmYXJQbGFuZSA9IDIwMDA7XG4gICAgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKGZpZWxkT2ZWaWV3LCBhc3BlY3RSYXRpbywgbmVhclBsYW5lLCBmYXJQbGFuZSk7XG4gICAgY2FtZXJhLnBvc2l0aW9uLnggPSAwO1xuICAgIGNhbWVyYS5wb3NpdGlvbi56ID0gNzA7XG4gICAgY2FtZXJhLnBvc2l0aW9uLnkgPSAwO1xuXG4gICAgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7YWxwaGE6IHRydWUsIGFudGlhbGlhczogdHJ1ZX0pO1xuICAgIHJlbmRlcmVyLnNldFBpeGVsUmF0aW8oXG4gICAgICB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpb1xuICAgICAgPyB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpb1xuICAgICAgOiAxKVxuICAgIHJlbmRlcmVyLnNldFNpemUoV0lEVEgsIEhFSUdIVCk7XG4gICAgcmVuZGVyZXIuc2hhZG93TWFwLmVuYWJsZWQgPSB0cnVlO1xuICAgIHJlbmRlcmVyLnNoYWRvd01hcC50eXBlID0gVEhSRUUuUENGU29mdFNoYWRvd01hcDtcblxuICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25XaW5kb3dSZXNpemUsIGZhbHNlKTtcbiAgICAvL2hhbmRsZVdpbmRvd1Jlc2l6ZSgpO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaGFuZGxlTW91c2VNb3ZlLCBmYWxzZSk7XG5cbiAgfVxuXG4gIGNvbnN0IG9uV2luZG93UmVzaXplID0gKCkgPT4ge1xuICAgIEhFSUdIVCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICBXSURUSCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHdpbmRvd0hhbGZYID0gV0lEVEggLyAyO1xuICAgIHdpbmRvd0hhbGZZID0gSEVJR0hUIC8gMjtcbiAgICByZW5kZXJlci5zZXRTaXplKFdJRFRILCBIRUlHSFQpO1xuICAgIGNhbWVyYS5hc3BlY3QgPSBXSURUSCAvIEhFSUdIVDtcbiAgICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlTW91c2VNb3ZlID0gZSA9PiB7XG4gICAgLy8gY29uc3QgdHggPSAtMSArIChldmVudC5jbGllbnRYIC8gV0lEVEgpICoyO1xuICAgIC8vIGxldCB0eSA9IDEgLSAoZXZlbnQuY2xpZW50WSAvIEhFSUdIVCkqMjtcbiAgICAvLyBtb3VzZVBvcyA9IHtcbiAgICAvLyAgIHg6IHR4LFxuICAgIC8vICAgeTogdHlcbiAgICAvLyB9O1xuICAgIG1vdXNlUG9zID0ge1xuICAgICAgeDogZXZlbnQuY2xpZW50WCxcbiAgICAgIHk6IGV2ZW50LmNsaWVudFlcbiAgICB9O1xuICB9XG5cbiAgY29uc3Qgbm9ybWFsaXplID0gKHYsIHZtaW4sIHZtYXgsIHRtaW4sIHRtYXgpID0+IHtcbiAgICBjb25zdCBudiA9IE1hdGgubWF4KE1hdGgubWluKHYsIHZtYXgpLCB2bWluKTtcbiAgICBjb25zdCBkdiA9IHZtYXggLSB2bWluO1xuICAgIGNvbnN0IHBjID0gKG52IC0gdm1pbikgLyBkdjtcbiAgICBjb25zdCBkdCA9IHRtYXggLSB0bWluO1xuICAgIGNvbnN0IHR2ID0gdG1pbiArIChwYyAqIGR0KTtcbiAgICByZXR1cm4gdHY7XG4gIH1cblxuICBsZXQgbG9hZGVyTWFuYWdlciA9IG5ldyBUSFJFRS5Mb2FkaW5nTWFuYWdlcigpO1xuXG4gIGNvbnN0IG9uU3RhcnQgPSAodXJsLCBpdGVtc0xvYWRlZCwgaXRlbXNUb3RhbCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdTdGFydGVkIGxvYWRpbmcgZmlsZTogJyArIHVybCArICcuXFxuTG9hZGVkICcgKyBpdGVtc0xvYWRlZCArICcgb2YgJyArIGl0ZW1zVG90YWwgKyAnIGZpbGVzLicpO1xuICB9XG5cbiAgY29uc3Qgb25Mb2FkID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdMb2FkaW5nIGNvbXBsZXRlIScpO1xuICAgIGZpbmlzaGVkTG9hZGluZygpO1xuICB9XG5cbiAgY29uc3Qgb25Qcm9ncmVzcyA9ICh1cmwsIGl0ZW1zTG9hZGVkLCBpdGVtc1RvdGFsKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0xvYWRpbmcgZmlsZTogJyArIHVybCArICcuXFxuTG9hZGVkICcgKyBpdGVtc0xvYWRlZCArICcgb2YgJyArIGl0ZW1zVG90YWwgKyAnIGZpbGVzLicpO1xuICB9XG5cbiAgY29uc3Qgb25FcnJvciA9ICh1cmwpID0+IHtcbiAgICBjb25zb2xlLmxvZygnVGhlcmUgd2FzIGFuIGVycm9yIGxvYWRpbmcgJyArIHVybCk7XG4gIH1cblxuICBjb25zdCBmaW5pc2hlZExvYWRpbmcgPSAoKSA9PiB7XG4gICAgbG9hZGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVdpbmRvd1Jlc2l6ZSA9IGUgPT4ge1xuICAgIEhFSUdIVCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICBXSURUSCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHJlbmRlcmVyLnNldFNpemUoV0lEVEgsIEhFSUdIVCk7XG4gICAgY2FtZXJhLmFzcGVjdCA9IFdJRFRIIC8gSEVJR0hUO1xuICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gIH1cblxuICBsZXQgaXNNb2JpbGUgPSAvaVBob25lfEFuZHJvaWQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuXG4gIGNvbnN0IGNyZWF0ZUxpZ2h0cyA9ICgpID0+IHtcblxuICAgIGdsb2JhbExpZ2h0ID0gbmV3IFRIUkVFLkhlbWlzcGhlcmVMaWdodCgweGZmZmZmZiwgMHg1NTU1NTUsIC45KTtcblxuICAgIHNoYWRvd0xpZ2h0ID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoMHhmZmZmZmYsIC4zKTtcbiAgICBzaGFkb3dMaWdodC5wb3NpdGlvbi5zZXQoMTAwLCAyNTAsIDE3NSk7XG4gICAgc2hhZG93TGlnaHQuY2FzdFNoYWRvdyA9IHRydWU7XG4gICAgLy8gc2hhZG93TGlnaHQuc2hhZG93LmNhbWVyYS5sZWZ0ID0gLTE1MDtcbiAgICAvLyBzaGFkb3dMaWdodC5zaGFkb3cuY2FtZXJhLnJpZ2h0ID0gMTUwO1xuICAgIC8vIHNoYWRvd0xpZ2h0LnNoYWRvdy5jYW1lcmEudG9wID0gMTUwO1xuICAgIC8vIHNoYWRvd0xpZ2h0LnNoYWRvdy5jYW1lcmEuYm90dG9tID0gLTE1MDtcbiAgICAvLyBzaGFkb3dMaWdodC5zaGFkb3cuY2FtZXJhLm5lYXIgPSAxO1xuICAgIC8vIHNoYWRvd0xpZ2h0LnNoYWRvdy5jYW1lcmEuZmFyID0gMTAwMDtcblxuICAgIGJhY2tMaWdodCA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0KDB4ZmZmZmZmLCAuMik7XG4gICAgYmFja0xpZ2h0LnBvc2l0aW9uLnNldCgtMTAwLCAyMDAsIDE1MCk7XG4gICAgYmFja0xpZ2h0LmNhc3RTaGFkb3cgPSB0cnVlO1xuICAgIC8vYmFja0xpZ2h0LnBvc2l0aW9uLnNldCgxMDAsIDEwMCwgLTIwMCk7XG5cbiAgICBpZiAoaXNNb2JpbGUpXG4gICAgICBzaGFkb3dMaWdodC5zaGFkb3cubWFwU2l6ZS53aWR0aCA9IHNoYWRvd0xpZ2h0LnNoYWRvdy5tYXBTaXplLmhlaWdodCA9IDEwMjQ7XG4gICAgaWYgKCFpc01vYmlsZSlcbiAgICAgIHNoYWRvd0xpZ2h0LnNoYWRvdy5tYXBTaXplLndpZHRoID0gc2hhZG93TGlnaHQuc2hhZG93Lm1hcFNpemUuaGVpZ2h0ID0gMjA0ODtcblxuICAgIHNjZW5lLmFkZChnbG9iYWxMaWdodCk7XG4gICAgc2NlbmUuYWRkKHNoYWRvd0xpZ2h0KTtcbiAgICBzY2VuZS5hZGQoYmFja0xpZ2h0KTtcbiAgICBzY2VuZS5hZGQoIG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoIDB4ZWFkZWFkLCAwLjEgKSk7XG4gIH1cblxuICAvLyBjbGFzcyBTdGFyIHtcbiAgLy8gICBjb25zdHJ1Y3Rvcigpe1xuICAvL1xuICAvLyAgIFNUQVJcbiAgLy8gICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vXG4gIC8vICAgdGhpcy5tZXNoID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gIC8vXG4gIC8vICAgbGV0IHB0cyA9IFtdLFxuICAvLyAgICAgbnVtUHRzID0gNTtcbiAgLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVB0cyAqIDI7IGkrKykge1xuICAvLyAgICAgbGV0IGwgPSBpICUgMiA9PSAxXG4gIC8vICAgICAgID8gMVxuICAvLyAgICAgICA6IDI7XG4gIC8vICAgICBsZXQgYSA9IGkgLyBudW1QdHMgKiBNYXRoLlBJO1xuICAvLyAgICAgcHRzLnB1c2gobmV3IFRIUkVFLlZlY3RvcjIoTWF0aC5jb3MoYSkgKiBsLCBNYXRoLnNpbihhKSAqIGwpKTtcbiAgLy8gICB9XG4gIC8vICAgbGV0IHN0YXJTaGFwZSA9IG5ldyBUSFJFRS5TaGFwZShwdHMpO1xuICAvL1xuICAvLyAgIGxldCBleHRydWRlU2V0dGluZ3MgPSB7XG4gIC8vICAgICBhbW91bnQ6IDAuNSxcbiAgLy8gICAgIHN0ZXBzOiAxLFxuICAvLyAgICAgYmV2ZWxFbmFibGVkOiBmYWxzZVxuICAvLyAgIH07XG4gIC8vICAgbGV0IHN0YXJHZW9tID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShzdGFyU2hhcGUsIGV4dHJ1ZGVTZXR0aW5ncyk7XG4gIC8vICAgbGV0IHN0YXIgPSBuZXcgVEhSRUUuTWVzaChzdGFyR2VvbSwgeWVsbG93TWF0KTtcbiAgLy8gICBzdGFyLnJvdGF0aW9uLnggPSBNYXRoLlBJIC8gMjtcbiAgLy8gICB0aGlzLm1lc2guYWRkKHN0YXIpO1xuICAvLyB9XG4gIC8vIH1cbiAgLy9cbiAgLy8gbGV0IFN0YXJzR3JvdXAgPSBmdW5jdGlvbigpIHtcbiAgLy9cbiAgLy8gICAgIHRoaXMubWVzaCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAvL1xuICAvLyAgICAgdGhpcy5uU3RhcnMgPSAxNTtcbiAgLy9cbiAgLy8gICAgIGxldCBzdGVwQW5nbGUgPSBNYXRoLlBJICogMiAvIHRoaXMublN0YXJzO1xuICAvL1xuICAvLyAgICAgIENyZWF0ZSB0aGUgU3RhcnNcbiAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5uU3RhcnM7IGkrKykge1xuICAvL1xuICAvLyAgICAgICB0aGlzLnMgPSBuZXcgU3RhcigpO1xuICAvLyAgICAgICBsZXQgYSA9IHN0ZXBBbmdsZSAqIGk7XG4gIC8vICAgICAgIGxldCByID0gMTU7XG4gIC8vXG4gIC8vICAgICAgIHRoaXMucy5tZXNoLnBvc2l0aW9uLnkgPSBNYXRoLnNpbihhKSAqIHI7XG4gIC8vICAgICAgIHRoaXMucy5tZXNoLnBvc2l0aW9uLnggPSBNYXRoLmNvcyhhKSAqIHI7XG4gIC8vXG4gIC8vICAgICAgIHRoaXMucy5tZXNoLnJvdGF0aW9uLnogPSBhICsgTWF0aC5QSSAvIDI7XG4gIC8vICAgICAgIHRoaXMucy5tZXNoLnBvc2l0aW9uLnogPSAwIC0gTWF0aC5yYW5kb20oKSAqIDM7XG4gIC8vXG4gIC8vICAgICAgICAgcmFuZG9tIHNjYWxlIGZvciBlYWNoIGNsb3VkXG4gIC8vICAgICAgIGxldCBzYyA9IDAuNSArIE1hdGgucmFuZG9tKCkgKiAuNjtcbiAgLy8gICAgICAgdGhpcy5zLm1lc2guc2NhbGUuc2V0KHNjLCBzYywgc2MpO1xuICAvL1xuICAvLyAgICAgICB0aGlzLm1lc2guYWRkKHRoaXMucy5tZXNoKTtcbiAgLy8gICAgICAgc3RhckFycmF5LnB1c2godGhpcy5zKTtcbiAgLy8gICAgIH1cbiAgLy8gICAgIHRoaXMubWVzaC5yb3RhdGlvbi54ID0gTWF0aC5QSSAvIDI7XG4gIC8vIH1cblxuICBjb25zdCBjcmVhdGVIZWFkID0gKCkgPT4ge1xuICAgIGhlYWQgPSBuZXcgSGVhZCgpO1xuICAgIGhlYWQuaWRsZSgpO1xuICAgIHNjZW5lLmFkZChoZWFkLm1lc2gpO1xuICAgIC8vc3RhcnMgPSBuZXcgU3RhcnNHcm91cCgpO1xuICAgIC8vc2NlbmUuYWRkKHN0YXJzLm1lc2gpO1xuICB9XG5cbiAgY29uc3QgY3JlYXRlQ2hhcmFjdGVyID0gKCkgPT4ge1xuICAgIGNyZWF0ZUhlYWQoKTtcbiAgICBoZWFkLm1lc2gucG9zaXRpb24uc2V0KDAsIDIsIDApO1xuICAgIC8vc3RhcnMubWVzaC5wb3NpdGlvbi5zZXQoMCwgMTAsIDApO1xuICB9XG5cbiAgLy9CTElOS1xuICAvLy8vLy8vLy8vLy8vLy8vLy8vL1xuICBsZXQgaXNCbGlua2luZyA9IGZhbHNlO1xuICBjb25zdCBibGlua0xvb3AgPSAoKSA9PiB7XG4gICAgaXNCbGlua2luZyA9IGZhbHNlO1xuXG4gICAgaWYgKCghaXNCbGlua2luZykgJiYgKE1hdGgucmFuZG9tKCkgPiAwLjk5KSkge1xuICAgICAgY29uc29sZS5sb2coJ2JsaW5rJyk7XG4gICAgICBpc0JsaW5raW5nID0gdHJ1ZTtcbiAgICAgIGJsaW5rKCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgYmxpbmsgPSAoKSA9PiB7XG4gICAgaGVhZC5leWVzLnNjYWxlLnkgPSAxO1xuICAgIFR3ZWVuTWF4LnRvKGhlYWQuZXllcy5zY2FsZSwgLjA3LCB7XG4gICAgICB5OiAwLFxuICAgICAgeW95bzogdHJ1ZSxcbiAgICAgIHJlcGVhdDogMSxcbiAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpc0JsaW5raW5nID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvL0hFQUQgQU5JTUFUSU9OU1xuICAvLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gIC8vIEhlYWQucHJvdG90eXBlLmRpenp5ID0gZnVuY3Rpb24oKSB7XG4gIC8vXG4gIC8vICAgICBsZXQgZGlzdGFuY2UgPSAxO1xuICAvL1xuICAvLyAgICAgdGhpcy5oZWFkLnJvdGF0aW9uLnogPSBNYXRoLnNpbihEYXRlLm5vdygpICogMC4wMDUpICogTWF0aC5QSSAqIDAuMDE7XG4gIC8vICAgICB0aGlzLmhlYWQucm90YXRpb24ueCA9IE1hdGguc2luKERhdGUubm93KCkgKiAwLjAxKSAqIE1hdGguUEkgKiAwLjAxO1xuICAvLyAgICAgdGhpcy5oZWFkLnJvdGF0aW9uLnkgPSBNYXRoLnNpbihEYXRlLm5vdygpICogMC4wMDUpICogTWF0aC5QSSAqIDAuMDE7XG4gIC8vXG4gIC8vICAgICB0aGlzLmV5ZUJsdWVSaWdodC5wb3NpdGlvbi54ID0gTWF0aC5zaW4oRGF0ZS5ub3coKSAqIDAuMDA1KSAqIC1kaXN0YW5jZTtcbiAgLy8gICAgIHRoaXMuZXllQmx1ZUxlZnQucG9zaXRpb24ueCA9IE1hdGguc2luKERhdGUubm93KCkgKiAwLjAwNSkgKiBkaXN0YW5jZTtcbiAgLy8gICAgIHRoaXMuZXllQmx1ZVJpZ2h0LnBvc2l0aW9uLnkgPSBNYXRoLmNvcyhEYXRlLm5vdygpICogMC4wMDUpICogLWRpc3RhbmNlO1xuICAvLyAgICAgdGhpcy5leWVCbHVlTGVmdC5wb3NpdGlvbi55ID0gTWF0aC5jb3MoRGF0ZS5ub3coKSAqIDAuMDA1KSAqIGRpc3RhbmNlO1xuICAvLyAgICAgdGhpcy5leWVCcm93UmlnaHQucG9zaXRpb24ueSA9IE1hdGguY29zKERhdGUubm93KCkgKiAwLjAwNSkgKiAtZGlzdGFuY2U7XG4gIC8vICAgICB0aGlzLmV5ZUJyb3dMZWZ0LnBvc2l0aW9uLnkgPSBNYXRoLmNvcyhEYXRlLm5vdygpICogMC4wMDUpICogZGlzdGFuY2U7XG4gIC8vXG4gIC8vICAgICB0aGlzLm1vdXN0YWNoZS5yb3RhdGlvbi56ID0gTWF0aC5zaW4oRGF0ZS5ub3coKSAqIDAuMDA1KSAqIE1hdGguUEkgKiAwLjA1O1xuICAvL1xuICAvLyAgICAgYmxpbmtMb29wKCk7XG4gIC8vICAgICBzdGFycy5zcGluU2NhbGUoKTtcbiAgLy9cbiAgLy8gICB9XG5cbiAgLy9TVEFSR1JPVVBcbiAgLy8gU3RhcnNHcm91cC5wcm90b3R5cGUuc3BpblNjYWxlID0gZnVuY3Rpb24oKSB7XG4gIC8vXG4gIC8vICAgICB0aGlzLm1lc2gucm90YXRpb24ueiArPSAwLjAyO1xuICAvL1xuICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGFyQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgLy8gICAgICAgIHN0YXJBcnJheVtpXS5tZXNoLnJvdGF0aW9uLnggPSBNYXRoLnNpbihEYXRlLm5vdygpICogMC4wMSkgKiBNYXRoLlBJICogMC4xIDtcbiAgLy8gICAgICAgc3RhckFycmF5W2ldLm1lc2gucm90YXRpb24ueiArPSAwIC0gTWF0aC5yYW5kb20oKSAqIDAuMTU7XG4gIC8vICAgICAgIHN0YXJBcnJheVtpXS5tZXNoLnJvdGF0aW9uLnggKz0gMCAtIE1hdGgucmFuZG9tKCkgKiAwLjA1O1xuICAvL1xuICAvLyAgICAgfVxuICAvLyAgIH1cblxuICAvLyBjb25zdCBjb250cm9sbGVyVGV4dCA9IChza2luQ29sb3IpID0+IHtcbiAgLy8gICBjb25zb2xlLmxvZyhcIkluc2lkZSBGSVpaWVwiKTtcbiAgLy9cbiAgLy8gICB0aGlzLnNraW5Db2xvciA9IFwiI2U0NDIzMVwiO1xuICAvLyB9XG5cbiAgY29uc3QgbG9vcCA9ICgpID0+IHtcbiAgICBibGlua0xvb3AoKTtcbiAgICAvL2hlYWQuZGl6enkoKTtcbiAgICBsZXQgeFRhcmdldCA9IChtb3VzZVBvcy54IC0gd2luZG93SGFsZlgpO1xuICAgIGxldCB5VGFyZ2V0ID0gKG1vdXNlUG9zLnkgLSB3aW5kb3dIYWxmWSk7XG5cbiAgICAvL2NvbnNvbGUubG9nKHhUYXJnZXQpO1xuXG4gICAgaGVhZC5pZGxlKHhUYXJnZXQsIHlUYXJnZXQpO1xuICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG4gIH1cblxuICAvL3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgaW5pdCwgZmFsc2UpO1xuXG4gIGluaXQoKTtcblxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvc2NyaXB0LmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBDb2xvcnMgZnJvbSAnLi4vb2JqZWN0cy9jb2xvcnMnO1xuaW1wb3J0IE1hdCBmcm9tICcuLi9vYmplY3RzL01hdGVyaWFscyc7XG5cbmxldCBpc0JsaW5raW5nID0gZmFsc2U7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1lc2ggPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcblxuICAgIGxldCBoZWFkR2VvbSA9IG5ldyBUSFJFRS5Cb3hCdWZmZXJHZW9tZXRyeSgxNiwgMTYsIDE2KTtcbiAgICB0aGlzLmhlYWQgPSBuZXcgVEhSRUUuTWVzaChoZWFkR2VvbSwgTWF0LnNraW5NYXQpO1xuICAgIHRoaXMuaGVhZC5jYXN0U2hhZG93ID0gdHJ1ZTtcbiAgICB0aGlzLmhlYWQucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuICAgIHRoaXMubWVzaC5hZGQodGhpcy5oZWFkKTtcblxuICAgIHRoaXMuYmVhcmQgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICB0aGlzLmJlYXJkLnBvc2l0aW9uLnkgPSAtNztcbiAgICB0aGlzLmJlYXJkLnBvc2l0aW9uLnogPSAwLjU7XG4gICAgdGhpcy5oZWFkLmFkZCh0aGlzLmJlYXJkKTtcblxuICAgIHRoaXMuQmVhcmQoKTtcbiAgICB0aGlzLkdsYXNzZXMoKTtcbiAgICB0aGlzLkhhaXIoKTtcbiAgICB0aGlzLkV5ZXMoKTtcbiAgICB0aGlzLkV5ZUJyb3dzKCk7XG4gICAgdGhpcy5IYXQoKTtcbiAgICB0aGlzLkZyZWNrbGVzKCk7XG4gICAgdGhpcy5GZWF0dXJlcygpO1xuICAgIHRoaXMuaWRsZSgpO1xuICAgIHRoaXMubm9ybWFsaXplKCk7XG4gIH1cblxuICBub3JtYWxpemUodiwgdm1pbiwgdm1heCwgdG1pbiwgdG1heCkge1xuICAgIGNvbnN0IG52ID0gTWF0aC5tYXgoTWF0aC5taW4odiwgdm1heCksIHZtaW4pO1xuICAgIGNvbnN0IGR2ID0gdm1heCAtIHZtaW47XG4gICAgY29uc3QgcGMgPSAobnYgLSB2bWluKSAvIGR2O1xuICAgIGNvbnN0IGR0ID0gdG1heCAtIHRtaW47XG4gICAgY29uc3QgdHYgPSB0bWluICsgKHBjICogZHQpO1xuICAgIHJldHVybiB0djtcbiAgfVxuXG4gIHVwZGF0ZUJvZHkoc3BlZWQpIHtcbiAgICAvL3RoaXMuZXllQmx1ZVJpZ2h0LnJvdGF0aW9uLnkgKz0gKGxpb24udEhlYWdSb3RZIC0gdGhpcy5leWVCbHVlUmlnaHQucm90YXRpb24ueSkgLyBzcGVlZDtcbiAgICAvL3RoaXMuZXllQmx1ZVJpZ2h0LnJvdGF0aW9uLnggKz0gKHRoaXMuZXllQmx1ZVJpZ2h0Um90WCAtIHRoaXMuZXllQmx1ZVJpZ2h0LnJvdGF0aW9uLngpIC8gc3BlZWQ7XG5cbiAgICAvL3RoaXMuZXllQmx1ZVJpZ2h0LnBvc2l0aW9uLnggKz0gKHRoaXMuZXllQmx1ZVJpZ2h0UG9zWCAtIHRoaXMuZXllQmx1ZVJpZ2h0LnBvc2l0aW9uLngpIC8gc3BlZWQ7XG5cbiAgICAvL3RoaXMuZXllQmx1ZVJpZ2h0LnBvc2l0aW9uLnkgKz0gTWF0aC5zaW4odGhpcy5leWVCbHVlUmlnaHRQb3NZIC0gdGhpcy5leWVCbHVlUmlnaHQucG9zaXRpb24ueSkgLyBzcGVlZDtcbiAgICAvLyB0aGlzLmV5ZUJsdWVSaWdodC5wb3NpdGlvbi56ICs9ICh0aGlzLmV5ZUJsdWVSaWdodFBvc1ogLSB0aGlzLmV5ZUJsdWVSaWdodC5wb3NpdGlvbi56KSAvIHNwZWVkO1xuICB9XG5cbiAgaWRsZSh4VGFyZ2V0LCB5VGFyZ2V0KSB7XG4gICAgLy9jb25zb2xlLmxvZyh4VGFyZ2V0LCB5VGFyZ2V0KTtcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMuZXllQmx1ZVJpZ2h0LnBvc2l0aW9uLngpO1xuICAgIC8vY29uc29sZS5sb2codGhpcy5leWVCbHVlUmlnaHQucG9zaXRpb24ueSk7XG4gICAgbGV0IGRpc3RhbmNlID0gMTtcblxuICAgIHRoaXMuaGVhZC5yb3RhdGlvbi56ID0gTWF0aC5zaW4oRGF0ZS5ub3coKSAqIDAuMDA1KSAqIE1hdGguUEkgKiAwLjAwNTtcbiAgICB0aGlzLmhlYWQucm90YXRpb24ueCA9IE1hdGguc2luKERhdGUubm93KCkgKiAwLjAwNCkgKiBNYXRoLlBJICogMC4wMztcblxuICAgIHRoaXMuZXllQmx1ZUxlZnQucG9zaXRpb24ueCA9IE1hdGguc2luKERhdGUubm93KCkgKiAwLjAwMikgKiBkaXN0YW5jZSAvIDI7XG4gICAgdGhpcy5leWVCbHVlUmlnaHQucG9zaXRpb24ueCA9IE1hdGguc2luKERhdGUubm93KCkgKiAwLjAwMikgKiBkaXN0YW5jZSAvIDI7XG4gICAgLy90aGlzLmV5ZUJsdWVSaWdodFBvc1ggPSAoeFRhcmdldCk7XG5cbiAgICAvL3RoaXMuZXllQmx1ZVJpZ2h0UG9zWCA9IG5vcm1hbGl6ZSh4VGFyZ2V0LCAtMjAsIDIwLCA3MCwgLTcwKTtcblxuICAgIC8vIHRoaXMuZXllQmx1ZVJpZ2h0Um90WSA9IHhUYXJnZXQsIC0yMCwgMjAsIC1NYXRoLlBJIC8gNCwgTWF0aC5QSSAvIDQ7XG4gICAgLy8gdGhpcy5leWVCbHVlUmlnaHRSb3RYID0geVRhcmdldCwgLTIwLCAyMCwgLU1hdGguUEkgLyA0LCBNYXRoLlBJIC8gNDtcbiAgICAvLyB0aGlzLmV5ZUJsdWVSaWdodFBvc1ggPSB4VGFyZ2V0LCAtMjAsIDIwLCA3MCwgLTcwO1xuICAgIC8vIHRoaXMuZXllQmx1ZVJpZ2h0UG9zWSA9IHlUYXJnZXQsIC0xNDAsIDI2MCwgMjAsIDEwMDtcbiAgICAvLyB0aGlzLmV5ZUJsdWVSaWdodFBvc1ogPSA3O1xuXG4gICAgdGhpcy5leWVCcm93UmlnaHQucG9zaXRpb24ueSA9IE1hdGguc2luKERhdGUubm93KCkgKiAwLjAwNCkgKiBkaXN0YW5jZSAvIDI7XG4gICAgdGhpcy5leWVCcm93TGVmdC5wb3NpdGlvbi55ID0gTWF0aC5jb3MoRGF0ZS5ub3coKSAqIDAuMDA0KSAqIGRpc3RhbmNlIC8gMjtcblxuICAgIC8vIHRoaXMuZXllQnJvd1JpZ2h0LnJvdGF0aW9uLnogPSBNYXRoLnNpbihEYXRlLm5vdygpICogMC4wMDIpICogTWF0aC5QSSAqIDAuMDQ7XG4gICAgLy8gdGhpcy5leWVCcm93TGVmdC5yb3RhdGlvbi56ID0gTWF0aC5jb3MoRGF0ZS5ub3coKSAqIDAuMDAyKSAqIE1hdGguUEkgKiAwLjA0O1xuXG4gICAgLy90aGlzLmJlYXJkLm1vdXRoLnBvc2l0aW9uLnggPSBNYXRoLnNpbihEYXRlLm5vdygpICogMC4wMDIpICogZGlzdGFuY2UgLyAyO1xuXG4gICAgLy8gU05PUiBPTUhPT0ctT01MQUFHXG4gICAgdGhpcy5tb3VzdGFjaGUucG9zaXRpb24ueSA9IE1hdGguY29zKERhdGUubm93KCkgKiAwLjAxKSAqIGRpc3RhbmNlIC8gNDtcbiAgICAvLyBTTk9SIE9NSE9PRy1ST1RBVElFXG4gICAgdGhpcy5tb3VzdGFjaGUucm90YXRpb24ueiA9IE1hdGguc2luKERhdGUubm93KCkgKiAwLjAxKSAqIE1hdGguUEkgKiAwLjAxO1xuXG4gICAgLy90aGlzLm1vdXRoLnNjYWxlLnggPSBNYXRoLmNvcyhEYXRlLm5vdygpICogMC4wMDQpICogZGlzdGFuY2UgLyAyO1xuXG4gICAgLy9TTkVMSEVJRCBIRUVOIEVOIFdFRVJcbiAgICB0aGlzLm1lc2gucm90YXRpb24ueSA9IE1hdGguc2luKERhdGUubm93KCkgKiAwLjAwMikgKiBNYXRoLlBJICogMC4wNTtcbiAgICB0aGlzLnVwZGF0ZUJvZHkoMTApO1xuICB9XG5cbiAgQmVhcmQoKSB7XG4gICAgLy9CRUFSRFxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgbGV0IGJlYXJkR2VvbU1lcmdlZCA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xuXG4gICAgbGV0IGJlYXJkMUdlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMiwgMTAsIDE2KTtcblxuICAgIGxldCBiZWFyZDEgPSBuZXcgVEhSRUUuTWVzaChiZWFyZDFHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGJlYXJkMS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbig5LCAwLCAwKSk7XG4gICAgYmVhcmQxLnVwZGF0ZU1hdHJpeCgpO1xuICAgIGJlYXJkR2VvbU1lcmdlZC5tZXJnZShiZWFyZDEuZ2VvbWV0cnksIGJlYXJkMS5tYXRyaXgpO1xuXG4gICAgbGV0IGJlYXJkMiA9IG5ldyBUSFJFRS5NZXNoKGJlYXJkMUdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgYmVhcmQyLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDcsIC0yLCAyKSk7XG4gICAgYmVhcmQyLnNjYWxlLnogPSAwLjg7XG4gICAgYmVhcmQyLnVwZGF0ZU1hdHJpeCgpO1xuICAgIGJlYXJkR2VvbU1lcmdlZC5tZXJnZShiZWFyZDIuZ2VvbWV0cnksIGJlYXJkMi5tYXRyaXgpO1xuXG4gICAgbGV0IGJlYXJkMyA9IGJlYXJkMS5jbG9uZSgpO1xuICAgIGJlYXJkMy5wb3NpdGlvbi54ID0gLWJlYXJkMS5wb3NpdGlvbi54O1xuICAgIGJlYXJkMy51cGRhdGVNYXRyaXgoKTtcbiAgICBiZWFyZEdlb21NZXJnZWQubWVyZ2UoYmVhcmQzLmdlb21ldHJ5LCBiZWFyZDMubWF0cml4KTtcblxuICAgIGxldCBiZWFyZDQgPSBiZWFyZDIuY2xvbmUoKTtcbiAgICBiZWFyZDQucG9zaXRpb24ueCA9IC1iZWFyZDIucG9zaXRpb24ueDtcbiAgICBiZWFyZDQudXBkYXRlTWF0cml4KCk7XG4gICAgYmVhcmRHZW9tTWVyZ2VkLm1lcmdlKGJlYXJkNC5nZW9tZXRyeSwgYmVhcmQ0Lm1hdHJpeCk7XG5cbiAgICBsZXQgYmVhcmQyR2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgzLCAxNCwgMTApO1xuICAgIGJlYXJkMkdlb20udmVydGljZXNbMl0ueiAtPSAyO1xuICAgIGJlYXJkMkdlb20udmVydGljZXNbN10ueiAtPSAyO1xuXG4gICAgbGV0IGJlYXJkNSA9IG5ldyBUSFJFRS5NZXNoKGJlYXJkMkdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgYmVhcmQ1LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDUsIC01LCA0KSk7XG4gICAgYmVhcmQ1LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGJlYXJkR2VvbU1lcmdlZC5tZXJnZShiZWFyZDUuZ2VvbWV0cnksIGJlYXJkNS5tYXRyaXgpO1xuXG4gICAgbGV0IGJlYXJkM0dlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMi41LCAxNCwgMTApO1xuICAgIGJlYXJkM0dlb20udmVydGljZXNbMl0ueiAtPSAyO1xuICAgIGJlYXJkM0dlb20udmVydGljZXNbN10ueiAtPSAyO1xuXG4gICAgbGV0IGJlYXJkNiA9IG5ldyBUSFJFRS5NZXNoKGJlYXJkM0dlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgYmVhcmQ2LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDIuNSwgLTYsIDYpKTtcbiAgICBiZWFyZDYudXBkYXRlTWF0cml4KCk7XG4gICAgYmVhcmRHZW9tTWVyZ2VkLm1lcmdlKGJlYXJkNi5nZW9tZXRyeSwgYmVhcmQ2Lm1hdHJpeCk7XG5cbiAgICBsZXQgYmVhcmQ3ID0gYmVhcmQ1LmNsb25lKCk7XG4gICAgYmVhcmQ3LnBvc2l0aW9uLnggPSAtYmVhcmQ1LnBvc2l0aW9uLng7XG4gICAgYmVhcmQ3LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGJlYXJkR2VvbU1lcmdlZC5tZXJnZShiZWFyZDcuZ2VvbWV0cnksIGJlYXJkNy5tYXRyaXgpO1xuXG4gICAgbGV0IGJlYXJkOCA9IGJlYXJkNi5jbG9uZSgpO1xuICAgIGJlYXJkOC5wb3NpdGlvbi54ID0gLWJlYXJkNi5wb3NpdGlvbi54O1xuICAgIGJlYXJkOC51cGRhdGVNYXRyaXgoKTtcbiAgICBiZWFyZEdlb21NZXJnZWQubWVyZ2UoYmVhcmQ4Lmdlb21ldHJ5LCBiZWFyZDgubWF0cml4KTtcblxuICAgIGxldCBiZWFyZDRHZW9tID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDIuNSwgMTQuNSwgMTApO1xuICAgIGJlYXJkNEdlb20udmVydGljZXNbMl0ueiAtPSAxO1xuICAgIGJlYXJkNEdlb20udmVydGljZXNbN10ueiAtPSAxO1xuXG4gICAgbGV0IGJlYXJkOSA9IG5ldyBUSFJFRS5NZXNoKGJlYXJkNEdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgYmVhcmQ5LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDAsIC03LCA1Ljc1KSk7XG4gICAgYmVhcmQ5LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGJlYXJkR2VvbU1lcmdlZC5tZXJnZShiZWFyZDkuZ2VvbWV0cnksIGJlYXJkOS5tYXRyaXgpO1xuXG4gICAgbGV0IGJlYXJkNUdlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoNCwgOCwgOCk7XG4gICAgbGV0IGJlYXJkMTAgPSBuZXcgVEhSRUUuTWVzaChiZWFyZDVHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGJlYXJkMTAuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oLTYsIC0xLCAtMikpO1xuICAgIGJlYXJkMTAudXBkYXRlTWF0cml4KCk7XG4gICAgYmVhcmRHZW9tTWVyZ2VkLm1lcmdlKGJlYXJkMTAuZ2VvbWV0cnksIGJlYXJkMTAubWF0cml4KTtcblxuICAgIGxldCBiZWFyZDExID0gbmV3IFRIUkVFLk1lc2goYmVhcmQ1R2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBiZWFyZDExLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDAsIC01LCAtMikpO1xuICAgIGJlYXJkMTEudXBkYXRlTWF0cml4KCk7XG4gICAgYmVhcmRHZW9tTWVyZ2VkLm1lcmdlKGJlYXJkMTEuZ2VvbWV0cnksIGJlYXJkMTEubWF0cml4KTtcblxuICAgIGxldCBiZWFyZE1lcmdlZCA9IG5ldyBUSFJFRS5NZXNoKGJlYXJkR2VvbU1lcmdlZCwgTWF0LndoaXRlTWF0KTtcbiAgICBiZWFyZE1lcmdlZC5jYXN0U2hhZG93ID0gdHJ1ZTtcbiAgICBiZWFyZE1lcmdlZC5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcblxuICAgIGxldCBtb3V0aEdlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMTAsIDQsIDEpO1xuICAgIGxldCBtb3V0aCA9IG5ldyBUSFJFRS5NZXNoKG1vdXRoR2VvbSwgTWF0LmJsYWNrTWF0KTtcbiAgICBtb3V0aC5wb3NpdGlvbi5zZXQoMCwgMiwgOCk7XG4gICAgbW91dGguY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIG1vdXRoLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xuXG4gICAgbGV0IHRlZXRoR2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgxMCwgMSwgMSk7XG4gICAgbGV0IHRlZXRoID0gbmV3IFRIUkVFLk1lc2godGVldGhHZW9tLCBNYXQudGVldGhNYXQpO1xuICAgIHRlZXRoLnBvc2l0aW9uLnNldCgwLCAwLjUsIDAuMSk7XG4gICAgdGVldGguY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIHRlZXRoLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xuICAgIG1vdXRoLmFkZCh0ZWV0aClcblxuICAgIC8vIGxldCBzbWlsZUdlb20gPSBuZXcgVEhSRUUuVG9ydXNHZW9tZXRyeSg0LCAxLjUsIDIsIDYsIC1NYXRoLlBJKTtcbiAgICAvLyB0aGlzLnNtaWxlID0gbmV3IFRIUkVFLk1lc2goc21pbGVHZW9tLCBNYXQuYmxhY2tNYXQpO1xuICAgIC8vIHRoaXMuc21pbGUucG9zaXRpb24uc2V0KDAsIDIsIDEwKTtcbiAgICAvLyB0aGlzLnNtaWxlLmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICAvLyB0aGlzLnNtaWxlLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xuICAgIC8vXG4gICAgLy8gdGhpcy5iZWFyZC5hZGQoYmVhcmRNZXJnZWQsIG1vdXRoLCB0aGlzLnNtaWxlKTtcbiAgICB0aGlzLmJlYXJkLmFkZChiZWFyZE1lcmdlZCwgbW91dGgpO1xuXG4gICAgbGV0IG1vdXN0YWNoZUdlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMTQsIDMsIDMsIDMpO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbMF0ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbMV0ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbMl0ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbM10ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbNF0ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbNV0ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbNl0ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbN10ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbOF0ueCAtPSAxO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbOV0ueCArPSAxO1xuXG4gICAgbW91c3RhY2hlR2VvbS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigwLCA0LCAwKSk7XG4gICAgdGhpcy5tb3VzdGFjaGUgPSBuZXcgVEhSRUUuTWVzaChtb3VzdGFjaGVHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIHRoaXMubW91c3RhY2hlLmNhc3RTaGFkb3cgPSB0cnVlO1xuICAgIHRoaXMubW91c3RhY2hlLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xuXG4gICAgdGhpcy5tb3VzdGFjaGUucG9zaXRpb24uc2V0KDAsIDAsIDkpO1xuICAgIHRoaXMuYmVhcmQuYWRkKHRoaXMubW91c3RhY2hlKTtcbiAgfVxuXG4gIEdsYXNzZXMoKSB7XG4gICAgLy9HTEFTU0VTXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgdGhpcy5nbGFzc2VzID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgdGhpcy5nbGFzc2VzLnBvc2l0aW9uLnNldCgwLCAwLCA5KTtcbiAgICB0aGlzLmhlYWQuYWRkKHRoaXMuZ2xhc3Nlcyk7XG5cbiAgICBsZXQgZnJhbWVHZW9tTWVyZ2VkID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XG5cbiAgICBsZXQgZnJhbWVPdXRlckdlb20gPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeSgzLCAzLCAwLjUsIDMyKVxuICAgIGxldCBmcmFtZUlubmVyR2VvbSA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KDIuNywgMi43LCAwLjUsIDMyKVxuXG4gICAgZnJhbWVPdXRlckdlb20uYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25YKC1NYXRoLlBJIC8gMikpO1xuICAgIGZyYW1lSW5uZXJHZW9tLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWCgtTWF0aC5QSSAvIDIpKTtcblxuICAgIGxldCBmcmFtZUJTUCA9IG5ldyBUaHJlZUJTUChmcmFtZU91dGVyR2VvbSk7XG4gICAgbGV0IGZyYW1lQ3V0QlNQID0gbmV3IFRocmVlQlNQKGZyYW1lSW5uZXJHZW9tKTtcblxuICAgIGxldCBmcmFtZWludGVyc2VjdGlvbkJTUCA9IGZyYW1lQlNQLnN1YnRyYWN0KGZyYW1lQ3V0QlNQKTtcbiAgICBsZXQgZnJhbWVMZWZ0ID0gZnJhbWVpbnRlcnNlY3Rpb25CU1AudG9NZXNoKE1hdC5nb2xkTWF0KTtcblxuICAgIGZyYW1lTGVmdC5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbig0LCAzLCAwKSk7XG4gICAgZnJhbWVMZWZ0LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGZyYW1lR2VvbU1lcmdlZC5tZXJnZShmcmFtZUxlZnQuZ2VvbWV0cnksIGZyYW1lTGVmdC5tYXRyaXgpO1xuXG4gICAgbGV0IGZyYW1lUmlnaHQgPSBmcmFtZUxlZnQuY2xvbmUoKTtcbiAgICBmcmFtZVJpZ2h0LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWihNYXRoLlBJIC8gMzApKTtcbiAgICBmcmFtZVJpZ2h0LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKC03LjUsIC0wLjI1LCAwKSk7XG4gICAgZnJhbWVSaWdodC51cGRhdGVNYXRyaXgoKTtcbiAgICBmcmFtZUdlb21NZXJnZWQubWVyZ2UoZnJhbWVSaWdodC5nZW9tZXRyeSwgZnJhbWVSaWdodC5tYXRyaXgpO1xuXG4gICAgbGV0IGZyYW1lTWlkR2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgyLCAuMywgLjUpO1xuICAgIGxldCBmcmFtZU1pZCA9IG5ldyBUSFJFRS5NZXNoKGZyYW1lTWlkR2VvbSwgTWF0LmdvbGRNYXQpO1xuICAgIGZyYW1lTWlkLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDAsIDMuMywgLTAuMykpO1xuICAgIGZyYW1lTWlkLnVwZGF0ZU1hdHJpeCgpO1xuICAgIGZyYW1lR2VvbU1lcmdlZC5tZXJnZShmcmFtZU1pZC5nZW9tZXRyeSwgZnJhbWVNaWQubWF0cml4KTtcblxuICAgIGxldCBmcmFtZUVuZEdlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMS41LCAuNSwgMSk7XG4gICAgbGV0IGZyYW1lRW5kUmlnaHQgPSBuZXcgVEhSRUUuTWVzaChmcmFtZUVuZEdlb20sIE1hdC5nb2xkTWF0KTtcbiAgICBmcmFtZUVuZFJpZ2h0LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDcuNSwgMywgMCkpO1xuICAgIGZyYW1lRW5kUmlnaHQudXBkYXRlTWF0cml4KCk7XG4gICAgZnJhbWVHZW9tTWVyZ2VkLm1lcmdlKGZyYW1lRW5kUmlnaHQuZ2VvbWV0cnksIGZyYW1lRW5kUmlnaHQubWF0cml4KTtcblxuICAgIGxldCBmcmFtZUVuZExlZnQgPSBmcmFtZUVuZFJpZ2h0LmNsb25lKCk7XG4gICAgZnJhbWVFbmRMZWZ0LnBvc2l0aW9uLnggPSAtZnJhbWVFbmRSaWdodC5wb3NpdGlvbi54O1xuICAgIGZyYW1lRW5kTGVmdC51cGRhdGVNYXRyaXgoKTtcbiAgICBmcmFtZUdlb21NZXJnZWQubWVyZ2UoZnJhbWVFbmRMZWZ0Lmdlb21ldHJ5LCBmcmFtZUVuZExlZnQubWF0cml4KTtcblxuICAgIGxldCBmcmFtZVNwb2tlR2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgxLCAwLjUsIDEyKTtcbiAgICBsZXQgZnJhbWVTcG9rZVJpZ2h0ID0gbmV3IFRIUkVFLk1lc2goZnJhbWVTcG9rZUdlb20sIE1hdC5nb2xkTWF0KTtcbiAgICBmcmFtZVNwb2tlUmlnaHQuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oOCwgMywgLTUuNSkpO1xuICAgIGZyYW1lU3Bva2VSaWdodC51cGRhdGVNYXRyaXgoKTtcbiAgICBmcmFtZUdlb21NZXJnZWQubWVyZ2UoZnJhbWVTcG9rZVJpZ2h0Lmdlb21ldHJ5LCBmcmFtZVNwb2tlUmlnaHQubWF0cml4KTtcblxuICAgIGxldCBmcmFtZVNwb2tlTGVmdCA9IGZyYW1lU3Bva2VSaWdodC5jbG9uZSgpO1xuICAgIGZyYW1lU3Bva2VMZWZ0LnBvc2l0aW9uLnggPSAtZnJhbWVTcG9rZVJpZ2h0LnBvc2l0aW9uLng7XG4gICAgZnJhbWVTcG9rZUxlZnQudXBkYXRlTWF0cml4KCk7XG4gICAgZnJhbWVHZW9tTWVyZ2VkLm1lcmdlKGZyYW1lU3Bva2VMZWZ0Lmdlb21ldHJ5LCBmcmFtZVNwb2tlTGVmdC5tYXRyaXgpO1xuXG4gICAgbGV0IGZyYW1lTWVyZ2VkID0gbmV3IFRIUkVFLk1lc2goZnJhbWVHZW9tTWVyZ2VkLCBNYXQuZ29sZE1hdCk7XG4gICAgZnJhbWVNZXJnZWQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIGZyYW1lTWVyZ2VkLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xuXG4gICAgdGhpcy5nbGFzc2VzLmFkZChmcmFtZU1lcmdlZCk7XG5cbiAgfVxuXG4gIEhhaXIoKSB7XG4gICAgLy9IQUlSXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICB0aGlzLmhhaXIgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICB0aGlzLmhhaXIucG9zaXRpb24uc2V0KDAsIDksIDApO1xuICAgIHRoaXMuaGVhZC5hZGQodGhpcy5oYWlyKTtcblxuICAgIGxldCBoYWlyR2VvbU1lcmdlZCA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xuXG4gICAgbGV0IGhhaXJGbGF0R2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgxMCwgMiwgMTgpO1xuXG4gICAgbGV0IGhhaXIxID0gbmV3IFRIUkVFLk1lc2goaGFpckZsYXRHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGhhaXIxLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWigtTWF0aC5QSSAvIDQwKSk7XG4gICAgaGFpcjEuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oLTQsIC0wLjUsIDApKTtcbiAgICBoYWlyMS51cGRhdGVNYXRyaXgoKTtcbiAgICBoYWlyR2VvbU1lcmdlZC5tZXJnZShoYWlyMS5nZW9tZXRyeSwgaGFpcjEubWF0cml4KTtcblxuICAgIGxldCBoYWlyMiA9IG5ldyBUSFJFRS5NZXNoKGhhaXJGbGF0R2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBoYWlyMi5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblooLU1hdGguUEkgLyAxMCkpO1xuICAgIGhhaXIyLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKC0yLCAxLCAwKSk7XG4gICAgaGFpcjIudXBkYXRlTWF0cml4KCk7XG4gICAgaGFpckdlb21NZXJnZWQubWVyZ2UoaGFpcjIuZ2VvbWV0cnksIGhhaXIyLm1hdHJpeCk7XG5cbiAgICBsZXQgaGFpcjMgPSBuZXcgVEhSRUUuTWVzaChoYWlyRmxhdEdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgaGFpcjMuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25aKC1NYXRoLlBJIC8gNSkpO1xuICAgIGhhaXIzLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDIsIDEsIDApKTtcbiAgICBoYWlyMy51cGRhdGVNYXRyaXgoKTtcbiAgICBoYWlyR2VvbU1lcmdlZC5tZXJnZShoYWlyMy5nZW9tZXRyeSwgaGFpcjMubWF0cml4KTtcblxuICAgIGxldCBoYWlyNCA9IG5ldyBUSFJFRS5NZXNoKGhhaXJGbGF0R2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBoYWlyNC5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblooLU1hdGguUEkgLyA0KSk7XG4gICAgaGFpcjQuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oNiwgMCwgMCkpO1xuICAgIGhhaXI0LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGhhaXJHZW9tTWVyZ2VkLm1lcmdlKGhhaXI0Lmdlb21ldHJ5LCBoYWlyNC5tYXRyaXgpO1xuXG4gICAgbGV0IGhhaXI2ID0gbmV3IFRIUkVFLk1lc2goaGFpckZsYXRHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGhhaXI2LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWigtTWF0aC5QSSAvIC0zKSk7XG4gICAgaGFpcjYuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oLTcuNzUsIC0uNSwgMCkpO1xuICAgIGhhaXI2LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGhhaXJHZW9tTWVyZ2VkLm1lcmdlKGhhaXI2Lmdlb21ldHJ5LCBoYWlyNi5tYXRyaXgpO1xuXG4gICAgbGV0IGhhaXJGbGF0QmFja0dlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMTgsIDcsIDYpO1xuICAgIGhhaXJGbGF0QmFja0dlb20udmVydGljZXNbMF0ueCAtPSAxO1xuICAgIGhhaXJGbGF0QmFja0dlb20udmVydGljZXNbMV0ueCAtPSAxO1xuICAgIGhhaXJGbGF0QmFja0dlb20udmVydGljZXNbNF0ueCArPSAxO1xuICAgIGhhaXJGbGF0QmFja0dlb20udmVydGljZXNbNV0ueCArPSAxO1xuXG4gICAgbGV0IGhhaXI1ID0gbmV3IFRIUkVFLk1lc2goaGFpckZsYXRCYWNrR2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBoYWlyNS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigwLCAtNC41LCAtNikpO1xuICAgIGhhaXI1LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGhhaXJHZW9tTWVyZ2VkLm1lcmdlKGhhaXI1Lmdlb21ldHJ5LCBoYWlyNS5tYXRyaXgpO1xuXG4gICAgbGV0IGhhaXJNZXJnZWQgPSBuZXcgVEhSRUUuTWVzaChoYWlyR2VvbU1lcmdlZCwgTWF0LndoaXRlTWF0KTtcbiAgICBoYWlyTWVyZ2VkLmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICBoYWlyTWVyZ2VkLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xuXG4gICAgdGhpcy5oYWlyLmFkZChoYWlyTWVyZ2VkKTtcblxuICB9XG5cbiAgRXllcygpIHtcbiAgICAvL0VZRVNcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIHRoaXMuZXllcyA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgIHRoaXMuZXllcy5wb3NpdGlvbi5zZXQoMCwgMywgOSk7XG4gICAgdGhpcy5oZWFkLmFkZCh0aGlzLmV5ZXMpO1xuXG4gICAgbGV0IGV5ZVdoaXRlR2VvbSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KDIuNSwgMi41KTtcblxuICAgIGxldCBleWVXaGl0ZVJpZ2h0ID0gbmV3IFRIUkVFLk1lc2goZXllV2hpdGVHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGV5ZVdoaXRlUmlnaHQucG9zaXRpb24uc2V0KC0zLjc1LCAwLCAwKTtcbiAgICBleWVXaGl0ZVJpZ2h0LmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICBleWVXaGl0ZVJpZ2h0LnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIGxldCBleWVCbHVlR2VvbSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KDEuNSwgMS41KTtcblxuICAgIHRoaXMuZXllQmx1ZVJpZ2h0ID0gbmV3IFRIUkVFLk1lc2goZXllQmx1ZUdlb20sIE1hdC5ibHVlTWF0KTtcbiAgICB0aGlzLmV5ZUJsdWVSaWdodC5wb3NpdGlvbi5zZXQoMCwgMCwgLjAxKTtcbiAgICB0aGlzLmV5ZUJsdWVSaWdodC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgdGhpcy5leWVCbHVlUmlnaHQucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgZXllV2hpdGVSaWdodC5hZGQodGhpcy5leWVCbHVlUmlnaHQpO1xuXG4gICAgbGV0IGV5ZVB1cGlsR2VvbSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KDEsIDEpO1xuXG4gICAgdGhpcy5leWVQdXBpbFJpZ2h0ID0gbmV3IFRIUkVFLk1lc2goZXllUHVwaWxHZW9tLCBNYXQuYmxhY2tNYXQpO1xuICAgIHRoaXMuZXllUHVwaWxSaWdodC5wb3NpdGlvbi5zZXQoMCwgMCwgLjAyKTtcbiAgICB0aGlzLmV5ZVB1cGlsUmlnaHQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIHRoaXMuZXllUHVwaWxSaWdodC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICB0aGlzLmV5ZUJsdWVSaWdodC5hZGQodGhpcy5leWVQdXBpbFJpZ2h0KTtcblxuICAgIGxldCBleWVXaGl0ZUxlZnQgPSBuZXcgVEhSRUUuTWVzaChleWVXaGl0ZUdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgZXllV2hpdGVMZWZ0LnBvc2l0aW9uLnNldCgzLjc1LCAwLCAwKTtcbiAgICBleWVXaGl0ZUxlZnQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIGV5ZVdoaXRlTGVmdC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICB0aGlzLmV5ZUJsdWVMZWZ0ID0gbmV3IFRIUkVFLk1lc2goZXllQmx1ZUdlb20sIE1hdC5ibHVlTWF0KTtcbiAgICB0aGlzLmV5ZUJsdWVMZWZ0LnBvc2l0aW9uLnNldCgwLCAwLCAuMDEpO1xuICAgIHRoaXMuZXllQmx1ZUxlZnQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIHRoaXMuZXllQmx1ZUxlZnQucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgZXllV2hpdGVMZWZ0LmFkZCh0aGlzLmV5ZUJsdWVMZWZ0KTtcblxuICAgIHRoaXMuZXllUHVwaWxMZWZ0ID0gbmV3IFRIUkVFLk1lc2goZXllUHVwaWxHZW9tLCBNYXQuYmxhY2tNYXQpO1xuICAgIHRoaXMuZXllUHVwaWxMZWZ0LnBvc2l0aW9uLnNldCgwLCAwLCAuMDIpO1xuICAgIHRoaXMuZXllUHVwaWxMZWZ0LmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICB0aGlzLmV5ZVB1cGlsTGVmdC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICB0aGlzLmV5ZUJsdWVMZWZ0LmFkZCh0aGlzLmV5ZVB1cGlsTGVmdCk7XG5cbiAgICB0aGlzLmV5ZXMuYWRkKGV5ZVdoaXRlUmlnaHQsIGV5ZVdoaXRlTGVmdCk7XG4gIH1cblxuICBFeWVCcm93cygpIHtcbiAgICAvL0VZRSBCUk9XU1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgdGhpcy5leWVCcm93cyA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgIHRoaXMuZXllQnJvd3MucG9zaXRpb24uc2V0KDAsIDYsIDgpO1xuICAgIHRoaXMuaGVhZC5hZGQodGhpcy5leWVCcm93cyk7XG5cbiAgICBsZXQgZXllQnJvd0dlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoNCwgMSwgMSk7XG5cbiAgICB0aGlzLmV5ZUJyb3dSaWdodCA9IG5ldyBUSFJFRS5NZXNoKGV5ZUJyb3dHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIHRoaXMuZXllQnJvd1JpZ2h0LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWihNYXRoLlBJIC8gNDUpKTtcbiAgICB0aGlzLmV5ZUJyb3dSaWdodC5wb3NpdGlvbi5zZXQoLTMuNzUsIDAsIDApO1xuICAgIHRoaXMuZXllQnJvd1JpZ2h0LmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICB0aGlzLmV5ZUJyb3dSaWdodC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICB0aGlzLmV5ZUJyb3dMZWZ0ID0gbmV3IFRIUkVFLk1lc2goZXllQnJvd0dlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgdGhpcy5leWVCcm93TGVmdC5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblooLU1hdGguUEkgLyA0NSkpO1xuICAgIHRoaXMuZXllQnJvd0xlZnQucG9zaXRpb24uc2V0KDMuNzUsIDAsIDApO1xuICAgIHRoaXMuZXllQnJvd0xlZnQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIHRoaXMuZXllQnJvd0xlZnQucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgdGhpcy5leWVCcm93cy5hZGQodGhpcy5leWVCcm93UmlnaHQsIHRoaXMuZXllQnJvd0xlZnQpO1xuICB9XG5cbiAgSGF0KCkge1xuICAgIC8vSEFUXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICB0aGlzLmhhdCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgIHRoaXMuaGF0LnBvc2l0aW9uLnNldCgtMC4yLCAxMSwgMi40KTtcbiAgICB0aGlzLmhlYWQuYWRkKHRoaXMuaGF0KTtcblxuICAgIGxldCBiYW5kR2VvbSA9IG5ldyBUSFJFRS5Ub3J1c0dlb21ldHJ5KDksIDIsIDE2LCAxMDApO1xuICAgIGxldCBiaWdDb25lR2VvbSA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KDEsIDExLCAxMiwgMTUpO1xuICAgIGxldCBzbWFsbENvbmVHZW9tID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoMC44LCAzLCA5LCAzMik7XG4gICAgbGV0IGhhdERpbmdsZUdlb20gPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoMS41LCA4LCA4KTtcblxuICAgIHRoaXMuYmFuZCA9IG5ldyBUSFJFRS5NZXNoKGJhbmRHZW9tLCBNYXQudGVldGhNYXQpO1xuICAgIHRoaXMuYmFuZC5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblgoTWF0aC5QSSAvIDIpKTtcbiAgICB0aGlzLmJhbmQucG9zaXRpb24uc2V0KDAsIDAsIDApO1xuICAgIHRoaXMuYmFuZC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgdGhpcy5iYW5kLnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIHRoaXMuYmlnQ29uZSA9IG5ldyBUSFJFRS5NZXNoKGJpZ0NvbmVHZW9tLCBNYXQucmVkTWF0KTtcbiAgICB0aGlzLmJpZ0NvbmUucG9zaXRpb24uc2V0KDAsIDYsIDApO1xuICAgIHRoaXMuYmlnQ29uZS5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgdGhpcy5iaWdDb25lLnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIHRoaXMuc21hbGxDb25lID0gbmV3IFRIUkVFLk1lc2goc21hbGxDb25lR2VvbSwgTWF0LnJlZE1hdCk7XG4gICAgdGhpcy5zbWFsbENvbmUuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25YKE1hdGguUEkgLyAyKSk7XG4gICAgdGhpcy5zbWFsbENvbmUuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25ZKE1hdGguUEkgLyAyKSk7XG4gICAgdGhpcy5zbWFsbENvbmUuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25aKE1hdGguUEkgLyAtOCkpO1xuICAgIHRoaXMuc21hbGxDb25lLnBvc2l0aW9uLnNldCg0LCA3LjgsIC0xKTtcbiAgICB0aGlzLnNtYWxsQ29uZS5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgdGhpcy5zbWFsbENvbmUucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgdGhpcy5oYXREaW5nbGUgPSBuZXcgVEhSRUUuTWVzaChoYXREaW5nbGVHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIHRoaXMuaGF0RGluZ2xlLnBvc2l0aW9uLnNldCg5LCA1LjUsIC0xKTtcbiAgICB0aGlzLmhhdERpbmdsZS5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgdGhpcy5oYXREaW5nbGUucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgdGhpcy5oYXQuYWRkKHRoaXMuYmFuZCwgdGhpcy5iaWdDb25lLCB0aGlzLnNtYWxsQ29uZSwgdGhpcy5oYXREaW5nbGUpO1xuICB9XG5cbiAgRnJlY2tsZXMoKSB7XG4gICAgLy9GcmVja2xlc1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIHRoaXMuZnJlY2tsZXMgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICB0aGlzLmZyZWNrbGVzLnBvc2l0aW9uLnNldCgwLCAwLCA4KTtcbiAgICB0aGlzLmhlYWQuYWRkKHRoaXMuZnJlY2tsZXMpO1xuXG4gICAgbGV0IGZyZWNrbGVzR2VvbU1lcmdlZCA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xuXG4gICAgbGV0IGZyZWNrbGVzR2VvbSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KDAuNSwgMC41KTtcblxuICAgIGxldCBmcmVja2xlMSA9IG5ldyBUSFJFRS5NZXNoKGZyZWNrbGVzR2VvbSwgTWF0LmJyb3duTWF0KTtcbiAgICBmcmVja2xlMS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigtNSwgMCwgMC4wMSkpO1xuICAgIGZyZWNrbGUxLnVwZGF0ZU1hdHJpeCgpO1xuICAgIGZyZWNrbGVzR2VvbU1lcmdlZC5tZXJnZShmcmVja2xlMS5nZW9tZXRyeSwgZnJlY2tsZTEubWF0cml4KTtcblxuICAgIGxldCBmcmVja2xlMiA9IGZyZWNrbGUxLmNsb25lKCk7XG4gICAgZnJlY2tsZTIuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oLTAuNSwgLTEsIDApKTtcbiAgICBmcmVja2xlMi51cGRhdGVNYXRyaXgoKTtcbiAgICBmcmVja2xlc0dlb21NZXJnZWQubWVyZ2UoZnJlY2tsZTIuZ2VvbWV0cnksIGZyZWNrbGUyLm1hdHJpeCk7XG5cbiAgICBsZXQgZnJlY2tsZTMgPSBmcmVja2xlMS5jbG9uZSgpO1xuICAgIGZyZWNrbGUzLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDEsIC0wLjUsIDApKTtcbiAgICBmcmVja2xlMy51cGRhdGVNYXRyaXgoKTtcbiAgICBmcmVja2xlc0dlb21NZXJnZWQubWVyZ2UoZnJlY2tsZTMuZ2VvbWV0cnksIGZyZWNrbGUzLm1hdHJpeCk7XG5cbiAgICBsZXQgZnJlY2tsZTQgPSBmcmVja2xlMS5jbG9uZSgpO1xuICAgIGZyZWNrbGU0LnBvc2l0aW9uLnggPSAtZnJlY2tsZTEucG9zaXRpb24ueDtcbiAgICBmcmVja2xlNC51cGRhdGVNYXRyaXgoKTtcbiAgICBmcmVja2xlc0dlb21NZXJnZWQubWVyZ2UoZnJlY2tsZTQuZ2VvbWV0cnksIGZyZWNrbGU0Lm1hdHJpeCk7XG4gICAgbGV0IGZyZWNrbGU1ID0gZnJlY2tsZTIuY2xvbmUoKTtcbiAgICBmcmVja2xlNS5wb3NpdGlvbi54ID0gLWZyZWNrbGUyLnBvc2l0aW9uLng7XG4gICAgZnJlY2tsZTUudXBkYXRlTWF0cml4KCk7XG4gICAgZnJlY2tsZXNHZW9tTWVyZ2VkLm1lcmdlKGZyZWNrbGU1Lmdlb21ldHJ5LCBmcmVja2xlNS5tYXRyaXgpO1xuICAgIGxldCBmcmVja2xlNiA9IGZyZWNrbGUzLmNsb25lKCk7XG4gICAgZnJlY2tsZTYucG9zaXRpb24ueCA9IC1mcmVja2xlMy5wb3NpdGlvbi54O1xuICAgIGZyZWNrbGU2LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGZyZWNrbGVzR2VvbU1lcmdlZC5tZXJnZShmcmVja2xlNi5nZW9tZXRyeSwgZnJlY2tsZTYubWF0cml4KTtcblxuICAgIGxldCBmcmVja2xlZE1lcmdlZCA9IG5ldyBUSFJFRS5NZXNoKGZyZWNrbGVzR2VvbU1lcmdlZCwgTWF0LnNraW4yTWF0KTtcbiAgICBmcmVja2xlZE1lcmdlZC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgZnJlY2tsZWRNZXJnZWQucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgdGhpcy5mcmVja2xlcy5hZGQoZnJlY2tsZWRNZXJnZWQpO1xuICB9XG5cbiAgRmVhdHVyZXMoKSB7XG4gICAgLy9GZWF0dXJlcyAtIE5vc2UgYW5kIEVhcnNcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGxldCBlYXJHZW9tID0gbmV3IFRIUkVFLkJveEJ1ZmZlckdlb21ldHJ5KDEuNSwgMywgMS41KTtcbiAgICBsZXQgZWFyUmlnaHQgPSBuZXcgVEhSRUUuTWVzaChlYXJHZW9tLCBNYXQuc2tpbk1hdCk7XG4gICAgZWFyUmlnaHQucG9zaXRpb24uc2V0KC04LjUsIDEsIDMpO1xuICAgIGVhclJpZ2h0LmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICBlYXJSaWdodC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICBsZXQgZWFyTGVmdCA9IG5ldyBUSFJFRS5NZXNoKGVhckdlb20sIE1hdC5za2luTWF0KTtcbiAgICBlYXJMZWZ0LnBvc2l0aW9uLnNldCg4LjUsIDEsIDMpO1xuICAgIGVhckxlZnQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIGVhckxlZnQucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgbGV0IG5vc2VHZW9tID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoMSwgMiwgNCwgNCk7XG4gICAgbGV0IG5vc2UgPSBuZXcgVEhSRUUuTWVzaChub3NlR2VvbSwgTWF0LnNraW5NYXQpO1xuICAgIG5vc2Uuc2NhbGUuc2V0KC43NSwgMSwgMS4zKTtcbiAgICBub3NlLnBvc2l0aW9uLnNldCgwLCAxLCA4KTtcbiAgICBub3NlLmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICBub3NlLnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIHRoaXMuaGVhZC5hZGQoZWFyUmlnaHQsIGVhckxlZnQsIG5vc2UpO1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9jbGFzc2VzL0hlYWQuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IENvbG9ycyBmcm9tICcuL2NvbG9ycyc7XG4vLyBsZXQgc2tpbk1hdCA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHtjb2xvcjogQ29sb3JzLnNraW4sIGZsYXRTaGFkaW5nOiB0cnVlfSk7XG4vLyBsZXQgc2tpbjJNYXQgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy5za2luLCBmbGF0U2hhZGluZzogdHJ1ZX0pO1xuLy8gbGV0IGF1YnVybk1hdCA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHtjb2xvcjogQ29sb3JzLmF1YnVybiwgZmxhdFNoYWRpbmc6IHRydWV9KTtcbi8vIGxldCBicm93bk1hdCA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHtjb2xvcjogQ29sb3JzLmJyb3duLCBmbGF0U2hhZGluZzogdHJ1ZX0pO1xuLy8gbGV0IGJsYWNrTWF0ID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoe2NvbG9yOiBDb2xvcnMuYmxhY2ssIGZsYXRTaGFkaW5nOiB0cnVlfSk7XG4vLyBsZXQgd2hpdGVNYXQgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe2NvbG9yOiBDb2xvcnMud2hpdGUsIGZsYXRTaGFkaW5nOiB0cnVlfSk7XG4vLyBsZXQgYmx1ZU1hdCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy5saWdodEJsdWUsIGZsYXRTaGFkaW5nOiB0cnVlfSk7XG4vLyBsZXQgYmVpZ2VNYXQgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe2NvbG9yOiBDb2xvcnMuYmVpZ2UsIGZsYXRTaGFkaW5nOiB0cnVlfSk7XG4vLyBsZXQgeWVsbG93TWF0ID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHtjb2xvcjogQ29sb3JzLnllbGxvdywgZmxhdFNoYWRpbmc6IHRydWV9KTtcbi8vIGxldCBub3JtYWxNYXQgPSBuZXcgVEhSRUUuTWVzaE5vcm1hbE1hdGVyaWFsKHt9KTtcblxuY29uc3QgTWF0ZXJpYWxzID0ge1xuICBcInNraW5NYXRcIjogbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoe2NvbG9yOiBDb2xvcnMuc2tpbiwgZmxhdFNoYWRpbmc6IHRydWV9KSxcbiAgXCJza2luMk1hdFwiOiBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy5za2luMiwgZmxhdFNoYWRpbmc6IHRydWV9KSxcbiAgXCJ3aGl0ZU1hdFwiOiBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy53aGl0ZSwgZmxhdFNoYWRpbmc6IHRydWV9KSxcbiAgXCJnb2xkTWF0XCI6IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHtjb2xvcjogQ29sb3JzLmdvbGQsIGZsYXRTaGFkaW5nOiB0cnVlfSksXG4gIFwidGVldGhNYXRcIjogbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHtjb2xvcjogQ29sb3JzLnRlZXRoLCBmbGF0U2hhZGluZzogdHJ1ZX0pLFxuICBcImJlaWdlTWF0XCI6IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy5iZWlnZSwgZmxhdFNoYWRpbmc6IHRydWV9KSxcbiAgXCJicm93bk1hdFwiOiBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy5icm93biwgZmxhdFNoYWRpbmc6IHRydWV9KSxcbiAgXCJibGFja01hdFwiOiBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy5ibGFjaywgZmxhdFNoYWRpbmc6IHRydWV9KSxcbiAgXCJibHVlTWF0XCI6IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy5saWdodEJsdWUsIGZsYXRTaGFkaW5nOiB0cnVlfSksXG4gIFwieWVsbG93TWF0XCI6IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy55ZWxsb3csIGZsYXRTaGFkaW5nOiB0cnVlfSksXG4gIFwicmVkTWF0XCI6IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy5yZWQsIGZsYXRTaGFkaW5nOiB0cnVlfSksXG4gIFwibm9ybWFsTWF0XCI6IG5ldyBUSFJFRS5NZXNoTm9ybWFsTWF0ZXJpYWwoe30pXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYXRlcmlhbHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9vYmplY3RzL01hdGVyaWFscy5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBBdWRpb0NvbnRleHQgPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQ7XG5sZXQgYXVkaW9DdHgsIHRhZztcbmxldCBhdWRpb0NodW5rcyA9IFtdO1xuY29uc3QgcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwbGF5YCk7XG5jb25zdCBzdG9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHN0b3BgKTtcbmNvbnN0IHJlY29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBhdWRpb2ApO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdWRpbyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZXh0ZXJuYWxTY29wZVZhcmlhYmxlID0gJyc7XG4gICAgdGhpcy5zdG9wdFJlY29yZGluZyA9IGZhbHNlO1xuXG4gICAgYXVkaW9DdHggPSBuZXcgQXVkaW9Db250ZXh0KCk7XG4gICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoeyBhdWRpbzogdHJ1ZSB9KVxuICAgIC50aGVuKHN0cmVhbSA9PiB7XG4gICAgICBjb25zdCBtZWRpYVJlY29yZGVyID0gbmV3IE1lZGlhUmVjb3JkZXIoc3RyZWFtKTtcblxuICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLVN0YXJ0IFJlY29yZGluZy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICAgIHJlY29yZC5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsICgpID0+IG1lZGlhUmVjb3JkZXIuc3RhcnQoKSk7XG4gICAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gICAgICBtZWRpYVJlY29yZGVyLmFkZEV2ZW50TGlzdGVuZXIoYGRhdGFhdmFpbGFibGVgLCAgZSA9PiBhdWRpb0NodW5rcy5wdXNoKGUuZGF0YSkpO1xuICAgICAgbWVkaWFSZWNvcmRlci5hZGRFdmVudExpc3RlbmVyKGBzdG9wYCwgKCkgPT4ge1xuICAgICAgICB0aGlzLmF1ZGlvQmxvYiA9IG5ldyBCbG9iKGF1ZGlvQ2h1bmtzKTtcbiAgICAgICAgdGhpcy5ibG9iVG9BcnJheUJ1ZmZlcih0aGlzLmF1ZGlvQmxvYik7XG4gICAgICAgIGF1ZGlvQ2h1bmtzID0gW107XG4gICAgICB9KTtcblxuICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS1TdG9wIFJlY29yZGluZy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgICAgc3RvcC5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsICgpID0+IHtcbiAgICAgICAgbWVkaWFSZWNvcmRlci5zdG9wKCk7XG4gICAgICAgIHRoaXMuc3RvcHRSZWNvcmRpbmcgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgICB9KTtcbiAgfVxuXG4gIGJsb2JUb0FycmF5QnVmZmVyKGF1ZGlvQmxvYikge1xuICAgIGNvbnN0IGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG4gICAgZmlsZVJlYWRlci5vbmxvYWQgPSBlID0+IHtcbiAgICAgIC8vIHRoaXMuYXJyID0gZS5jdXJyZW50VGFyZ2V0LnJlc3VsdDtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGUuY3VycmVudFRhcmdldC5yZXN1bHQpO1xuICAgICAgY29uc3QgYXJyYXlCdWZmZXIgPSBlLmN1cnJlbnRUYXJnZXQucmVzdWx0O1xuICAgICAgdGhpcy5sb2FkQXJyYXlCdWZmZXIoYXJyYXlCdWZmZXIpO1xuICAgIH07XG5cbiAgICBmaWxlUmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGF1ZGlvQmxvYik7XG4gIH1cblxuICBsb2FkQXJyYXlCdWZmZXIoYXJyYXlCdWZmZXIpIHtcbiAgICBjb25zdCBzb3VyY2UgPSBhdWRpb0N0eC5jcmVhdGVCdWZmZXJTb3VyY2UoKTtcbiAgICBhdWRpb0N0eC5kZWNvZGVBdWRpb0RhdGEoYXJyYXlCdWZmZXIsIGJ1ZmZlciA9PiB7XG4gICAgICBzb3VyY2UuYnVmZmVyID0gYnVmZmVyO1xuICAgICAgc291cmNlLmNvbm5lY3QoYXVkaW9DdHguZGVzdGluYXRpb24pO1xuXG4gICAgICAvKi0tLS0tLS0tLS0tLS0tLVBsYXkgYXJyYXlCdWZmZXItLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgICBwbGF5LmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgKCkgPT4gc291cmNlLnN0YXJ0KCkpO1xuICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gICAgfSxcbiAgICBlID0+IHsgY29uc29sZS5sb2coXCJFcnJvciB3aXRoIGRlY29kaW5nIGF1ZGlvIGRhdGFcIiArIGUuZXJyKTsgfSk7XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9jbGFzc2VzL0F1ZGlvLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBTcGVlY2hSZWNvZ25pdGlvbiA9IFNwZWVjaFJlY29nbml0aW9uIHx8IHdlYmtpdFNwZWVjaFJlY29nbml0aW9uXG52YXIgU3BlZWNoR3JhbW1hckxpc3QgPSBTcGVlY2hHcmFtbWFyTGlzdCB8fCB3ZWJraXRTcGVlY2hHcmFtbWFyTGlzdFxudmFyIFNwZWVjaFJlY29nbml0aW9uRXZlbnQgPSBTcGVlY2hSZWNvZ25pdGlvbkV2ZW50IHx8IHdlYmtpdFNwZWVjaFJlY29nbml0aW9uRXZlbnRcblxuLy8gdmFyIGNvbG9ycyA9IFsgJ2FxdWEnICwgJ2F6dXJlJyAsICdiZWlnZScsICdiaXNxdWUnLCAnYmxhY2snLCAnYmx1ZScsICdicm93bicsICdjaG9jb2xhdGUnLCAnY29yYWwnLCAnY3JpbXNvbicsICdjeWFuJywgJ2Z1Y2hzaWEnLCAnZ2hvc3R3aGl0ZScsICdnb2xkJywgJ2dvbGRlbnJvZCcsICdncmF5JywgJ2dyZWVuJywgJ2luZGlnbycsICdpdm9yeScsICdraGFraScsICdsYXZlbmRlcicsICdsaW1lJywgJ2xpbmVuJywgJ21hZ2VudGEnLCAnbWFyb29uJywgJ21vY2Nhc2luJywgJ25hdnknLCAnb2xpdmUnLCAnb3JhbmdlJywgJ29yY2hpZCcsICdwZXJ1JywgJ3BpbmsnLCAncGx1bScsICdwdXJwbGUnLCAncmVkJywgJ3NhbG1vbicsICdzaWVubmEnLCAnc2lsdmVyJywgJ3Nub3cnLCAndGFuJywgJ3RlYWwnLCAndGhpc3RsZScsICd0b21hdG8nLCAndHVycXVvaXNlJywgJ3Zpb2xldCcsICd3aGl0ZScsICd5ZWxsb3cnXTtcbi8vIHZhciBncmFtbWFyID0gJyNKU0dGIFYxLjA7IGdyYW1tYXIgY29sb3JzOyBwdWJsaWMgPGNvbG9yPiA9ICcgKyBjb2xvcnMuam9pbignIHwgJykgKyAnIDsnXG5cbmxldCByZWNvcmRpbmcgPSBmYWxzZTtcbmxldCB0cmFuc2NyaXB0ID0gXCJcIjtcbmNvbnN0IHRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZmllbGRgKTtcbmNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGByZWNvcmRgKTtcbmNvbnN0IGR1cmluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkdXJpbmdgKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BlZWNoUmVjb2duIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50eHQgPSAnJztcbiAgICB0aGlzLnJlY29nbml0aW9uID0gbmV3IFNwZWVjaFJlY29nbml0aW9uKCk7XG4gICAgY29uc3Qgc3BlZWNoUmVjb2duaXRpb25MaXN0ID0gbmV3IFNwZWVjaEdyYW1tYXJMaXN0KCk7XG4gICAgLy8gc3BlZWNoUmVjb2duaXRpb25MaXN0LmFkZEZyb21TdHJpbmcoZ3JhbW1hciwgMSk7XG4gICAgLy8gdGhpcy5yZWNvZ25pdGlvbi5ncmFtbWFycyA9IHNwZWVjaFJlY29nbml0aW9uTGlzdDtcbiAgICB0aGlzLnJlY29nbml0aW9uLmNvbnRpbnVvdXMgPSBmYWxzZTtcbiAgICB0aGlzLnJlY29nbml0aW9uLmxhbmcgPSAnbmwtQkUnO1xuICAgIHRoaXMucmVjb2duaXRpb24uaW50ZXJpbVJlc3VsdHMgPSBmYWxzZTtcbiAgICB0aGlzLnJlY29nbml0aW9uLm1heEFsdGVybmF0aXZlcyA9IDE7XG5cbiAgICB0aGlzLmluaXQoKTtcblxuICAgIHRoaXMucmVjb2duaXRpb24ub25yZXN1bHQgPSBldmVudCA9PiB0aGlzLmdvdFJlc3VsdChldmVudCk7XG4gICAgdGhpcy5yZWNvZ25pdGlvbi5vbnNwZWVjaGVuZCA9IGUgPT7CoHRoaXMub25TcGVlY2hFbmQoZSk7XG5cbiAgICB0ZXh0LmFkZEV2ZW50TGlzdGVuZXIoYGJsdXJgLCAoKSA9PiB0aGlzLmhhbmRsZUNoYW5nZSgpKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgKCkgPT4ge1xuICAgICAgdGhpcy5yZWNvZ25pdGlvbi5zdGFydCgpO1xuICAgICAgY29uc29sZS5sb2coJ1JlYWR5IHRvIHJlY2VpdmUgYSBjb21tYW5kLicpO1xuICAgICAgYnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSgpIHtcbiAgICB0aGlzLnR4dCA9IHRleHQudmFsdWU7XG4gIH1cblxuICBnb3RSZXN1bHQoZXZlbnQpIHtcbiAgICBjb25zdCBsYXN0ID0gZXZlbnQucmVzdWx0cy5sZW5ndGggLSAxO1xuICAgIHRyYW5zY3JpcHQgPSBldmVudC5yZXN1bHRzW2xhc3RdWzBdLnRyYW5zY3JpcHQ7XG5cbiAgICB0ZXh0LnZhbHVlID0gdHJhbnNjcmlwdDtcbiAgICBjb25zb2xlLmxvZyhldmVudC5yZXN1bHRzKTtcbiAgICBjb25zb2xlLmxvZygnQ29uZmlkZW5jZTogJyArIGV2ZW50LnJlc3VsdHNbMF1bMF0uY29uZmlkZW5jZSk7XG4gIH1cblxuICBvblNwZWVjaEVuZChlKcKge1xuICAgIHRoaXMucmVjb2duaXRpb24uc3RvcCgpO1xuICAgIGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdDbGljayBUbyBTdGFydCc7XG4gICAgdGhpcy50eHQgPSB0ZXh0LnZhbHVlO1xuICB9XG59XG5cbi8vIHRoaXMucmVjb2duaXRpb24ub25ub21hdGNoID0gZnVuY3Rpb24oZXZlbnQpIHtcbi8vICAgZGlhZ25vc3RpYy50ZXh0Q29udGVudCA9IFwiSSBkaWRuJ3QgcmVjb2duaXNlIHRoYXQgY29sb3IuXCI7XG4vLyB9XG4vL1xuLy8gdGhpcy5yZWNvZ25pdGlvbi5vbmVycm9yID0gZnVuY3Rpb24oZXZlbnQpIHtcbi8vICAgZGlhZ25vc3RpYy50ZXh0Q29udGVudCA9ICdFcnJvciBvY2N1cnJlZCBpbiB0aGlzLnJlY29nbml0aW9uOiAnICsgZXZlbnQuZXJyb3I7XG4vLyB9XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9jbGFzc2VzL1NwZWVjaFJlY29nbml0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQ2FydEFQSSBmcm9tICcuLi9saWIvY2FydEFQSSc7XG5pbXBvcnQgc2hvcnRpZCBmcm9tICdzaG9ydGlkJztcbmNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbmFtZV9pbnB1dGApO1xuY29uc3QgbGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC51bmlxdWVfbGlua2ApO1xuXG5jb25zdCBIYW5kbGVTYXZlID0gKHt0ZXh0LCBzb3VuZH0pID0+IHtcbiAgY29uc3QgaWQgPSBzaG9ydGlkLmdlbmVyYXRlKCk7XG4gIENhcnRBUEkuY3JlYXRlKHtcbiAgICB0ZXh0LCBpZCwgbmFtZTogbmFtZS52YWx1ZSwgc291bmRcbiAgfSk7XG5cbiAgbGluay5pbm5lckhUTUwgPSBgaHR0cHM6Ly9sb2NhbGhvc3Q6ODA4MC9zYW50YS5odG1sP2lkPSR7aWR9YDtcbiAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBgaHR0cHM6Ly9sb2NhbGhvc3Q6ODA4MC9zYW50YS5odG1sP2lkPSR7aWR9YCk7XG4gIGxpbmsuc2V0QXR0cmlidXRlKCd0YXJnZXQnLCBgX2JsYW5rYCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIYW5kbGVTYXZlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvb2JqZWN0cy9TYXZlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2luZGV4Jyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaG9ydGlkL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBhbHBoYWJldCA9IHJlcXVpcmUoJy4vYWxwaGFiZXQnKTtcbnZhciBlbmNvZGUgPSByZXF1aXJlKCcuL2VuY29kZScpO1xudmFyIGRlY29kZSA9IHJlcXVpcmUoJy4vZGVjb2RlJyk7XG52YXIgYnVpbGQgPSByZXF1aXJlKCcuL2J1aWxkJyk7XG52YXIgaXNWYWxpZCA9IHJlcXVpcmUoJy4vaXMtdmFsaWQnKTtcblxuLy8gaWYgeW91IGFyZSB1c2luZyBjbHVzdGVyIG9yIG11bHRpcGxlIHNlcnZlcnMgdXNlIHRoaXMgdG8gbWFrZSBlYWNoIGluc3RhbmNlXG4vLyBoYXMgYSB1bmlxdWUgdmFsdWUgZm9yIHdvcmtlclxuLy8gTm90ZTogSSBkb24ndCBrbm93IGlmIHRoaXMgaXMgYXV0b21hdGljYWxseSBzZXQgd2hlbiB1c2luZyB0aGlyZFxuLy8gcGFydHkgY2x1c3RlciBzb2x1dGlvbnMgc3VjaCBhcyBwbTIuXG52YXIgY2x1c3RlcldvcmtlcklkID0gcmVxdWlyZSgnLi91dGlsL2NsdXN0ZXItd29ya2VyLWlkJykgfHwgMDtcblxuLyoqXG4gKiBTZXQgdGhlIHNlZWQuXG4gKiBIaWdobHkgcmVjb21tZW5kZWQgaWYgeW91IGRvbid0IHdhbnQgcGVvcGxlIHRvIHRyeSB0byBmaWd1cmUgb3V0IHlvdXIgaWQgc2NoZW1hLlxuICogZXhwb3NlZCBhcyBzaG9ydGlkLnNlZWQoaW50KVxuICogQHBhcmFtIHNlZWQgSW50ZWdlciB2YWx1ZSB0byBzZWVkIHRoZSByYW5kb20gYWxwaGFiZXQuICBBTFdBWVMgVVNFIFRIRSBTQU1FIFNFRUQgb3IgeW91IG1pZ2h0IGdldCBvdmVybGFwcy5cbiAqL1xuZnVuY3Rpb24gc2VlZChzZWVkVmFsdWUpIHtcbiAgICBhbHBoYWJldC5zZWVkKHNlZWRWYWx1ZSk7XG4gICAgcmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vKipcbiAqIFNldCB0aGUgY2x1c3RlciB3b3JrZXIgb3IgbWFjaGluZSBpZFxuICogZXhwb3NlZCBhcyBzaG9ydGlkLndvcmtlcihpbnQpXG4gKiBAcGFyYW0gd29ya2VySWQgd29ya2VyIG11c3QgYmUgcG9zaXRpdmUgaW50ZWdlci4gIE51bWJlciBsZXNzIHRoYW4gMTYgaXMgcmVjb21tZW5kZWQuXG4gKiByZXR1cm5zIHNob3J0aWQgbW9kdWxlIHNvIGl0IGNhbiBiZSBjaGFpbmVkLlxuICovXG5mdW5jdGlvbiB3b3JrZXIod29ya2VySWQpIHtcbiAgICBjbHVzdGVyV29ya2VySWQgPSB3b3JrZXJJZDtcbiAgICByZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8qKlxuICpcbiAqIHNldHMgbmV3IGNoYXJhY3RlcnMgdG8gdXNlIGluIHRoZSBhbHBoYWJldFxuICogcmV0dXJucyB0aGUgc2h1ZmZsZWQgYWxwaGFiZXRcbiAqL1xuZnVuY3Rpb24gY2hhcmFjdGVycyhuZXdDaGFyYWN0ZXJzKSB7XG4gICAgaWYgKG5ld0NoYXJhY3RlcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBhbHBoYWJldC5jaGFyYWN0ZXJzKG5ld0NoYXJhY3RlcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBhbHBoYWJldC5zaHVmZmxlZCgpO1xufVxuXG4vKipcbiAqIEdlbmVyYXRlIHVuaXF1ZSBpZFxuICogUmV0dXJucyBzdHJpbmcgaWRcbiAqL1xuZnVuY3Rpb24gZ2VuZXJhdGUoKSB7XG4gIHJldHVybiBidWlsZChjbHVzdGVyV29ya2VySWQpO1xufVxuXG4vLyBFeHBvcnQgYWxsIG90aGVyIGZ1bmN0aW9ucyBhcyBwcm9wZXJ0aWVzIG9mIHRoZSBnZW5lcmF0ZSBmdW5jdGlvblxubW9kdWxlLmV4cG9ydHMgPSBnZW5lcmF0ZTtcbm1vZHVsZS5leHBvcnRzLmdlbmVyYXRlID0gZ2VuZXJhdGU7XG5tb2R1bGUuZXhwb3J0cy5zZWVkID0gc2VlZDtcbm1vZHVsZS5leHBvcnRzLndvcmtlciA9IHdvcmtlcjtcbm1vZHVsZS5leHBvcnRzLmNoYXJhY3RlcnMgPSBjaGFyYWN0ZXJzO1xubW9kdWxlLmV4cG9ydHMuZGVjb2RlID0gZGVjb2RlO1xubW9kdWxlLmV4cG9ydHMuaXNWYWxpZCA9IGlzVmFsaWQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaG9ydGlkL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBGb3VuZCB0aGlzIHNlZWQtYmFzZWQgcmFuZG9tIGdlbmVyYXRvciBzb21ld2hlcmVcbi8vIEJhc2VkIG9uIFRoZSBDZW50cmFsIFJhbmRvbWl6ZXIgMS4zIChDKSAxOTk3IGJ5IFBhdWwgSG91bGUgKGhvdWxlQG1zYy5jb3JuZWxsLmVkdSlcblxudmFyIHNlZWQgPSAxO1xuXG4vKipcbiAqIHJldHVybiBhIHJhbmRvbSBudW1iZXIgYmFzZWQgb24gYSBzZWVkXG4gKiBAcGFyYW0gc2VlZFxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gZ2V0TmV4dFZhbHVlKCkge1xuICAgIHNlZWQgPSAoc2VlZCAqIDkzMDEgKyA0OTI5NykgJSAyMzMyODA7XG4gICAgcmV0dXJuIHNlZWQvKDIzMzI4MC4wKTtcbn1cblxuZnVuY3Rpb24gc2V0U2VlZChfc2VlZF8pIHtcbiAgICBzZWVkID0gX3NlZWRfO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBuZXh0VmFsdWU6IGdldE5leHRWYWx1ZSxcbiAgICBzZWVkOiBzZXRTZWVkXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvcmFuZG9tL3JhbmRvbS1mcm9tLXNlZWQuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNyeXB0byA9IHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmICh3aW5kb3cuY3J5cHRvIHx8IHdpbmRvdy5tc0NyeXB0byk7IC8vIElFIDExIHVzZXMgd2luZG93Lm1zQ3J5cHRvXG5cbmZ1bmN0aW9uIHJhbmRvbUJ5dGUoKSB7XG4gICAgaWYgKCFjcnlwdG8gfHwgIWNyeXB0by5nZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NikgJiAweDMwO1xuICAgIH1cbiAgICB2YXIgZGVzdCA9IG5ldyBVaW50OEFycmF5KDEpO1xuICAgIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMoZGVzdCk7XG4gICAgcmV0dXJuIGRlc3RbMF0gJiAweDMwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJhbmRvbUJ5dGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaG9ydGlkL2xpYi9yYW5kb20vcmFuZG9tLWJ5dGUtYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFscGhhYmV0ID0gcmVxdWlyZSgnLi9hbHBoYWJldCcpO1xuXG4vKipcbiAqIERlY29kZSB0aGUgaWQgdG8gZ2V0IHRoZSB2ZXJzaW9uIGFuZCB3b3JrZXJcbiAqIE1haW5seSBmb3IgZGVidWdnaW5nIGFuZCB0ZXN0aW5nLlxuICogQHBhcmFtIGlkIC0gdGhlIHNob3J0aWQtZ2VuZXJhdGVkIGlkLlxuICovXG5mdW5jdGlvbiBkZWNvZGUoaWQpIHtcbiAgICB2YXIgY2hhcmFjdGVycyA9IGFscGhhYmV0LnNodWZmbGVkKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdmVyc2lvbjogY2hhcmFjdGVycy5pbmRleE9mKGlkLnN1YnN0cigwLCAxKSkgJiAweDBmLFxuICAgICAgICB3b3JrZXI6IGNoYXJhY3RlcnMuaW5kZXhPZihpZC5zdWJzdHIoMSwgMSkpICYgMHgwZlxuICAgIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVjb2RlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvZGVjb2RlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBlbmNvZGUgPSByZXF1aXJlKCcuL2VuY29kZScpO1xudmFyIGFscGhhYmV0ID0gcmVxdWlyZSgnLi9hbHBoYWJldCcpO1xuXG4vLyBJZ25vcmUgYWxsIG1pbGxpc2Vjb25kcyBiZWZvcmUgYSBjZXJ0YWluIHRpbWUgdG8gcmVkdWNlIHRoZSBzaXplIG9mIHRoZSBkYXRlIGVudHJvcHkgd2l0aG91dCBzYWNyaWZpY2luZyB1bmlxdWVuZXNzLlxuLy8gVGhpcyBudW1iZXIgc2hvdWxkIGJlIHVwZGF0ZWQgZXZlcnkgeWVhciBvciBzbyB0byBrZWVwIHRoZSBnZW5lcmF0ZWQgaWQgc2hvcnQuXG4vLyBUbyByZWdlbmVyYXRlIGBuZXcgRGF0ZSgpIC0gMGAgYW5kIGJ1bXAgdGhlIHZlcnNpb24uIEFsd2F5cyBidW1wIHRoZSB2ZXJzaW9uIVxudmFyIFJFRFVDRV9USU1FID0gMTQ1OTcwNzYwNjUxODtcblxuLy8gZG9uJ3QgY2hhbmdlIHVubGVzcyB3ZSBjaGFuZ2UgdGhlIGFsZ29zIG9yIFJFRFVDRV9USU1FXG4vLyBtdXN0IGJlIGFuIGludGVnZXIgYW5kIGxlc3MgdGhhbiAxNlxudmFyIHZlcnNpb24gPSA2O1xuXG4vLyBDb3VudGVyIGlzIHVzZWQgd2hlbiBzaG9ydGlkIGlzIGNhbGxlZCBtdWx0aXBsZSB0aW1lcyBpbiBvbmUgc2Vjb25kLlxudmFyIGNvdW50ZXI7XG5cbi8vIFJlbWVtYmVyIHRoZSBsYXN0IHRpbWUgc2hvcnRpZCB3YXMgY2FsbGVkIGluIGNhc2UgY291bnRlciBpcyBuZWVkZWQuXG52YXIgcHJldmlvdXNTZWNvbmRzO1xuXG4vKipcbiAqIEdlbmVyYXRlIHVuaXF1ZSBpZFxuICogUmV0dXJucyBzdHJpbmcgaWRcbiAqL1xuZnVuY3Rpb24gYnVpbGQoY2x1c3RlcldvcmtlcklkKSB7XG5cbiAgICB2YXIgc3RyID0gJyc7XG5cbiAgICB2YXIgc2Vjb25kcyA9IE1hdGguZmxvb3IoKERhdGUubm93KCkgLSBSRURVQ0VfVElNRSkgKiAwLjAwMSk7XG5cbiAgICBpZiAoc2Vjb25kcyA9PT0gcHJldmlvdXNTZWNvbmRzKSB7XG4gICAgICAgIGNvdW50ZXIrKztcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb3VudGVyID0gMDtcbiAgICAgICAgcHJldmlvdXNTZWNvbmRzID0gc2Vjb25kcztcbiAgICB9XG5cbiAgICBzdHIgPSBzdHIgKyBlbmNvZGUoYWxwaGFiZXQubG9va3VwLCB2ZXJzaW9uKTtcbiAgICBzdHIgPSBzdHIgKyBlbmNvZGUoYWxwaGFiZXQubG9va3VwLCBjbHVzdGVyV29ya2VySWQpO1xuICAgIGlmIChjb3VudGVyID4gMCkge1xuICAgICAgICBzdHIgPSBzdHIgKyBlbmNvZGUoYWxwaGFiZXQubG9va3VwLCBjb3VudGVyKTtcbiAgICB9XG4gICAgc3RyID0gc3RyICsgZW5jb2RlKGFscGhhYmV0Lmxvb2t1cCwgc2Vjb25kcyk7XG5cbiAgICByZXR1cm4gc3RyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ1aWxkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvYnVpbGQuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBhbHBoYWJldCA9IHJlcXVpcmUoJy4vYWxwaGFiZXQnKTtcblxuZnVuY3Rpb24gaXNTaG9ydElkKGlkKSB7XG4gICAgaWYgKCFpZCB8fCB0eXBlb2YgaWQgIT09ICdzdHJpbmcnIHx8IGlkLmxlbmd0aCA8IDYgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgY2hhcmFjdGVycyA9IGFscGhhYmV0LmNoYXJhY3RlcnMoKTtcbiAgICB2YXIgbGVuID0gaWQubGVuZ3RoO1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47aSsrKSB7XG4gICAgICAgIGlmIChjaGFyYWN0ZXJzLmluZGV4T2YoaWRbaV0pID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU2hvcnRJZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Nob3J0aWQvbGliL2lzLXZhbGlkLmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gMDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Nob3J0aWQvbGliL3V0aWwvY2x1c3Rlci13b3JrZXItaWQtYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==