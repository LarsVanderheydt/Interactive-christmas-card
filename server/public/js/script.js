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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Colors = {
  skin: 0xffe0bd,
  freckles: 0xcfba96,
  white: 0xe9ebee,
  glasses: 0xf9c421,
  teeth: 0xffffff,
  black: 0x2e2e2e,
  eye: 0x6295a8,
  hat: 0x720314
};
/* harmony default export */ __webpack_exports__["a"] = (Colors);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
__webpack_require__(5);
module.exports = self.fetch.bind(self);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var randomFromSeed = __webpack_require__(13);

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
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__objects_colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects_Materials__ = __webpack_require__(4);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var isBlinking = false;

var Head = function () {
  function Head() {
    _classCallCheck(this, Head);

    this.mesh = new THREE.Object3D();

    var headGeom = new THREE.BoxBufferGeometry(16, 16, 16);
    var skinMat = new THREE.MeshLambertMaterial({ color: __WEBPACK_IMPORTED_MODULE_0__objects_colors__["a" /* default */].skin, flatShading: true });
    var eyeMat = new THREE.MeshPhongMaterial({ color: __WEBPACK_IMPORTED_MODULE_0__objects_colors__["a" /* default */].eye, flatShading: true });

    this.head = new THREE.Mesh(headGeom, skinMat);
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

  _createClass(Head, [{
    key: 'normalize',
    value: function normalize(v, vmin, vmax, tmin, tmax) {
      var nv = Math.max(Math.min(v, vmax), vmin);
      var dv = vmax - vmin;
      var pc = (nv - vmin) / dv;
      var dt = tmax - tmin;
      var tv = tmin + pc * dt;
      return tv;
    }
  }, {
    key: 'updateBody',
    value: function updateBody(speed, eyeBlueRightPosX, eyeBlueLeftPosX, eyeBlueRightPosY, eyeBlueLeftPosY, eyeBrowRightPosY, eyeBrowLeftPosY) {
      this.eyeBlueRight.position.x += (eyeBlueRightPosX - this.eyeBlueRight.position.x) / speed;
      this.eyeBlueLeft.position.x += (eyeBlueLeftPosX - this.eyeBlueLeft.position.x) / speed;

      this.eyeBlueRight.position.y += (eyeBlueRightPosY - this.eyeBlueRight.position.y) / speed;
      this.eyeBlueLeft.position.y += (eyeBlueLeftPosY - this.eyeBlueLeft.position.y) / speed;

      this.eyeBrowRight.position.y += (eyeBrowRightPosY - this.eyeBrowRight.position.y) / speed;
      this.eyeBrowLeft.position.y += (eyeBrowLeftPosY - this.eyeBrowLeft.position.y) / speed;
    }
  }, {
    key: 'idle',
    value: function idle() {
      var xTarget = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var yTarget = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var distance = 1;

      this.head.rotation.z = Math.sin(Date.now() * 0.005) * Math.PI * 0.005;
      this.head.rotation.x = Math.sin(Date.now() * 0.004) * Math.PI * 0.03;

      var eyeBlueRightPosX = this.normalize(xTarget, -200, 200, -0.6, 0.6);
      var eyeBlueLeftPosX = this.normalize(xTarget, -200, 200, -0.6, 0.6);

      var eyeBlueRightPosY = this.normalize(yTarget, -200, 200, 0.6, -0.6);
      var eyeBlueLeftPosY = this.normalize(yTarget, -200, 200, 0.6, -0.6);

      var eyeBrowRightPosY = this.normalize(xTarget, -200, 200, -1, 0.8);
      var eyeBrowLeftPosY = this.normalize(xTarget, -200, 200, -1, 0.8);

      this.moustache.position.y = Math.cos(Date.now() * 0.01) * distance / 4;
      this.moustache.rotation.z = Math.sin(Date.now() * 0.01) * Math.PI * 0.01;

      this.mesh.rotation.y = Math.sin(Date.now() * 0.002) * Math.PI * 0.05;
      this.updateBody(10, eyeBlueRightPosX, eyeBlueLeftPosX, eyeBlueRightPosY, eyeBlueLeftPosY, eyeBrowRightPosY, eyeBrowLeftPosY);
    }
  }, {
    key: 'Beard',
    value: function Beard() {
      var beardGeomMerged = new THREE.Geometry();

      var beard1Geom = new THREE.BoxGeometry(2, 10, 16);

      var beard1 = new THREE.Mesh(beard1Geom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
      beard1.applyMatrix(new THREE.Matrix4().makeTranslation(9, 0, 0));
      beard1.updateMatrix();
      beardGeomMerged.merge(beard1.geometry, beard1.matrix);

      var beard2 = new THREE.Mesh(beard1Geom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
      beard2.applyMatrix(new THREE.Matrix4().makeTranslation(7, -2, 2));
      beard2.scale.z = 0.8;
      beard2.updateMatrix();
      beardGeomMerged.merge(beard2.geometry, beard2.matrix);

      var beard3 = beard1.clone();
      beard3.position.x = -beard1.position.x;
      beard3.updateMatrix();
      beardGeomMerged.merge(beard3.geometry, beard3.matrix);

      var beard4 = beard2.clone();
      beard4.position.x = -beard2.position.x;
      beard4.updateMatrix();
      beardGeomMerged.merge(beard4.geometry, beard4.matrix);

      var beard2Geom = new THREE.BoxGeometry(3, 14, 10);
      beard2Geom.vertices[2].z -= 2;
      beard2Geom.vertices[7].z -= 2;

      var beard5 = new THREE.Mesh(beard2Geom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
      beard5.applyMatrix(new THREE.Matrix4().makeTranslation(5, -5, 4));
      beard5.updateMatrix();
      beardGeomMerged.merge(beard5.geometry, beard5.matrix);

      var beard3Geom = new THREE.BoxGeometry(2.5, 14, 10);
      beard3Geom.vertices[2].z -= 2;
      beard3Geom.vertices[7].z -= 2;

      var beard6 = new THREE.Mesh(beard3Geom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
      beard6.applyMatrix(new THREE.Matrix4().makeTranslation(2.5, -6, 6));
      beard6.updateMatrix();
      beardGeomMerged.merge(beard6.geometry, beard6.matrix);

      var beard7 = beard5.clone();
      beard7.position.x = -beard5.position.x;
      beard7.updateMatrix();
      beardGeomMerged.merge(beard7.geometry, beard7.matrix);

      var beard8 = beard6.clone();
      beard8.position.x = -beard6.position.x;
      beard8.updateMatrix();
      beardGeomMerged.merge(beard8.geometry, beard8.matrix);

      var beard4Geom = new THREE.BoxGeometry(2.5, 14.5, 10);
      beard4Geom.vertices[2].z -= 1;
      beard4Geom.vertices[7].z -= 1;

      var beard9 = new THREE.Mesh(beard4Geom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
      beard9.applyMatrix(new THREE.Matrix4().makeTranslation(0, -7, 5.75));
      beard9.updateMatrix();
      beardGeomMerged.merge(beard9.geometry, beard9.matrix);

      var beard5Geom = new THREE.BoxGeometry(4, 8, 8);
      var beard10 = new THREE.Mesh(beard5Geom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
      beard10.applyMatrix(new THREE.Matrix4().makeTranslation(-6, -1, -2));
      beard10.updateMatrix();
      beardGeomMerged.merge(beard10.geometry, beard10.matrix);

      var beard11 = new THREE.Mesh(beard5Geom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
      beard11.applyMatrix(new THREE.Matrix4().makeTranslation(0, -5, -2));
      beard11.updateMatrix();
      beardGeomMerged.merge(beard11.geometry, beard11.matrix);

      var beardMerged = new THREE.Mesh(beardGeomMerged, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
      beardMerged.castShadow = true;
      beardMerged.receiveShadow = true;

      var mouthGeom = new THREE.BoxGeometry(10, 4, 1);
      var mouth = new THREE.Mesh(mouthGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].blackMat);
      mouth.position.set(0, 2, 8);
      mouth.castShadow = false;
      mouth.receiveShadow = true;

      var teethGeom = new THREE.BoxGeometry(10, 1, 1);
      var teeth = new THREE.Mesh(teethGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].teethMat);
      teeth.position.set(0, 0.5, 0.1);
      teeth.castShadow = false;
      teeth.receiveShadow = true;
      mouth.add(teeth);

      this.beard.add(beardMerged, mouth);

      var moustacheGeom = new THREE.BoxGeometry(14, 3, 3, 3);
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
  }, {
    key: 'Glasses',
    value: function Glasses() {

      this.glasses = new THREE.Object3D();
      this.glasses.position.set(0, 0, 9);
      this.head.add(this.glasses);
      var glassesMat = new THREE.MeshPhongMaterial({ color: __WEBPACK_IMPORTED_MODULE_0__objects_colors__["a" /* default */].glasses, flatShading: true });

      var frameGeomMerged = new THREE.Geometry();

      var frameOuterGeom = new THREE.CylinderGeometry(3, 3, 0.5, 32);
      var frameInnerGeom = new THREE.CylinderGeometry(2.7, 2.7, 0.5, 32);

      frameOuterGeom.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI / 2));
      frameInnerGeom.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI / 2));

      var frameBSP = new ThreeBSP(frameOuterGeom);
      var frameCutBSP = new ThreeBSP(frameInnerGeom);

      var frameintersectionBSP = frameBSP.subtract(frameCutBSP);
      var frameLeft = frameintersectionBSP.toMesh(glassesMat);

      frameLeft.applyMatrix(new THREE.Matrix4().makeTranslation(4, 3, 0));
      frameLeft.updateMatrix();
      frameGeomMerged.merge(frameLeft.geometry, frameLeft.matrix);

      var frameRight = frameLeft.clone();
      frameRight.applyMatrix(new THREE.Matrix4().makeRotationZ(Math.PI / 30));
      frameRight.applyMatrix(new THREE.Matrix4().makeTranslation(-7.5, -0.25, 0));
      frameRight.updateMatrix();
      frameGeomMerged.merge(frameRight.geometry, frameRight.matrix);

      var frameMidGeom = new THREE.BoxGeometry(2, .3, .5);
      var frameMid = new THREE.Mesh(frameMidGeom, glassesMat);
      frameMid.applyMatrix(new THREE.Matrix4().makeTranslation(0, 3.3, -0.3));
      frameMid.updateMatrix();
      frameGeomMerged.merge(frameMid.geometry, frameMid.matrix);

      var frameEndGeom = new THREE.BoxGeometry(1.5, .5, 1);
      var frameEndRight = new THREE.Mesh(frameEndGeom, glassesMat);
      frameEndRight.applyMatrix(new THREE.Matrix4().makeTranslation(7.5, 3, 0));
      frameEndRight.updateMatrix();
      frameGeomMerged.merge(frameEndRight.geometry, frameEndRight.matrix);

      var frameEndLeft = frameEndRight.clone();
      frameEndLeft.position.x = -frameEndRight.position.x;
      frameEndLeft.updateMatrix();
      frameGeomMerged.merge(frameEndLeft.geometry, frameEndLeft.matrix);

      var frameSpokeGeom = new THREE.BoxGeometry(1, 0.5, 12);
      var frameSpokeRight = new THREE.Mesh(frameSpokeGeom, glassesMat);
      frameSpokeRight.applyMatrix(new THREE.Matrix4().makeTranslation(8, 3, -5.5));
      frameSpokeRight.updateMatrix();
      frameGeomMerged.merge(frameSpokeRight.geometry, frameSpokeRight.matrix);

      var frameSpokeLeft = frameSpokeRight.clone();
      frameSpokeLeft.position.x = -frameSpokeRight.position.x;
      frameSpokeLeft.updateMatrix();
      frameGeomMerged.merge(frameSpokeLeft.geometry, frameSpokeLeft.matrix);

      var frameMerged = new THREE.Mesh(frameGeomMerged, glassesMat);
      frameMerged.castShadow = false;
      frameMerged.receiveShadow = true;

      this.glasses.add(frameMerged);
    }
  }, {
    key: 'Hair',
    value: function Hair() {

      this.hair = new THREE.Object3D();
      this.hair.position.set(0, 9, 0);
      this.head.add(this.hair);

      var hairGeomMerged = new THREE.Geometry();

      var hairFlatGeom = new THREE.BoxGeometry(10, 2, 18);

      var hair1 = new THREE.Mesh(hairFlatGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
      hair1.applyMatrix(new THREE.Matrix4().makeRotationZ(-Math.PI / 40));
      hair1.applyMatrix(new THREE.Matrix4().makeTranslation(-4, -0.5, 0));
      hair1.updateMatrix();
      hairGeomMerged.merge(hair1.geometry, hair1.matrix);

      var hair2 = new THREE.Mesh(hairFlatGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
      hair2.applyMatrix(new THREE.Matrix4().makeRotationZ(-Math.PI / 10));
      hair2.applyMatrix(new THREE.Matrix4().makeTranslation(-2, 1, 0));
      hair2.updateMatrix();
      hairGeomMerged.merge(hair2.geometry, hair2.matrix);

      var hair3 = new THREE.Mesh(hairFlatGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
      hair3.applyMatrix(new THREE.Matrix4().makeRotationZ(-Math.PI / 5));
      hair3.applyMatrix(new THREE.Matrix4().makeTranslation(2, 1, 0));
      hair3.updateMatrix();
      hairGeomMerged.merge(hair3.geometry, hair3.matrix);

      var hair4 = new THREE.Mesh(hairFlatGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
      hair4.applyMatrix(new THREE.Matrix4().makeRotationZ(-Math.PI / 4));
      hair4.applyMatrix(new THREE.Matrix4().makeTranslation(6, 0, 0));
      hair4.updateMatrix();
      hairGeomMerged.merge(hair4.geometry, hair4.matrix);

      var hair6 = new THREE.Mesh(hairFlatGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
      hair6.applyMatrix(new THREE.Matrix4().makeRotationZ(-Math.PI / -3));
      hair6.applyMatrix(new THREE.Matrix4().makeTranslation(-7.75, -.5, 0));
      hair6.updateMatrix();
      hairGeomMerged.merge(hair6.geometry, hair6.matrix);

      var hairFlatBackGeom = new THREE.BoxGeometry(18, 7, 6);
      hairFlatBackGeom.vertices[0].x -= 1;
      hairFlatBackGeom.vertices[1].x -= 1;
      hairFlatBackGeom.vertices[4].x += 1;
      hairFlatBackGeom.vertices[5].x += 1;

      var hair5 = new THREE.Mesh(hairFlatBackGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
      hair5.applyMatrix(new THREE.Matrix4().makeTranslation(0, -4.5, -6));
      hair5.updateMatrix();
      hairGeomMerged.merge(hair5.geometry, hair5.matrix);

      var hairMerged = new THREE.Mesh(hairGeomMerged, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
      hairMerged.castShadow = false;
      hairMerged.receiveShadow = true;

      this.hair.add(hairMerged);
    }
  }, {
    key: 'Eyes',
    value: function Eyes() {

      this.eyes = new THREE.Object3D();
      this.eyes.position.set(0, 3, 9);
      this.head.add(this.eyes);

      var eyeWhiteGeom = new THREE.PlaneGeometry(2.5, 2.5);

      var eyeWhiteRight = new THREE.Mesh(eyeWhiteGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
      eyeWhiteRight.position.set(-3.75, 0, 0);
      eyeWhiteRight.castShadow = false;
      eyeWhiteRight.receiveShadow = false;

      var eyeBlueGeom = new THREE.PlaneGeometry(1.5, 1.5);

      var eyeMat = new THREE.MeshPhongMaterial({ color: __WEBPACK_IMPORTED_MODULE_0__objects_colors__["a" /* default */].eye, flatShading: true });

      this.eyeBlueRight = new THREE.Mesh(eyeBlueGeom, eyeMat);
      this.eyeBlueRight.position.set(0, 0, .01);
      this.eyeBlueRight.castShadow = false;
      this.eyeBlueRight.receiveShadow = false;

      eyeWhiteRight.add(this.eyeBlueRight);

      var eyePupilGeom = new THREE.PlaneGeometry(1, 1);

      this.eyePupilRight = new THREE.Mesh(eyePupilGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].blackMat);
      this.eyePupilRight.position.set(0, 0, .02);
      this.eyePupilRight.castShadow = false;
      this.eyePupilRight.receiveShadow = false;

      this.eyeBlueRight.add(this.eyePupilRight);

      var eyeWhiteLeft = new THREE.Mesh(eyeWhiteGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
      eyeWhiteLeft.position.set(3.75, 0, 0);
      eyeWhiteLeft.castShadow = false;
      eyeWhiteLeft.receiveShadow = false;

      this.eyeBlueLeft = new THREE.Mesh(eyeBlueGeom, eyeMat);
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
  }, {
    key: 'EyeBrows',
    value: function EyeBrows() {
      this.eyeBrows = new THREE.Object3D();
      this.eyeBrows.position.set(0, 6, 8);
      this.head.add(this.eyeBrows);

      var eyeBrowGeom = new THREE.BoxGeometry(4, 1, 1);

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
  }, {
    key: 'Hat',
    value: function Hat() {
      this.hat = new THREE.Object3D();
      this.hat.position.set(-0.2, 11, 2.4);
      this.head.add(this.hat);

      var hatMat = new THREE.MeshPhongMaterial({ color: __WEBPACK_IMPORTED_MODULE_0__objects_colors__["a" /* default */].hat, flatShading: true });

      var bandGeom = new THREE.TorusGeometry(9, 2, 16, 100);
      var bigConeGeom = new THREE.CylinderGeometry(1, 11, 12, 15);
      var smallConeGeom = new THREE.CylinderGeometry(0.8, 3, 9, 32);
      var hatDingleGeom = new THREE.SphereGeometry(1.5, 8, 8);

      this.band = new THREE.Mesh(bandGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].teethMat);
      this.band.applyMatrix(new THREE.Matrix4().makeRotationX(Math.PI / 2));
      this.band.position.set(0, 0, 0);
      this.band.castShadow = false;
      this.band.receiveShadow = false;

      this.bigCone = new THREE.Mesh(bigConeGeom, hatMat);
      this.bigCone.position.set(0, 6, 0);
      this.bigCone.castShadow = false;
      this.bigCone.receiveShadow = false;

      this.smallCone = new THREE.Mesh(smallConeGeom, hatMat);
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
  }, {
    key: 'Freckles',
    value: function Freckles() {
      this.freckles = new THREE.Object3D();
      this.freckles.position.set(0, 0, 8);
      this.head.add(this.freckles);

      var frecklesMat = new THREE.MeshLambertMaterial({ color: __WEBPACK_IMPORTED_MODULE_0__objects_colors__["a" /* default */].freckles, flatShading: true });
      var frecklesGeomMerged = new THREE.Geometry();

      var frecklesGeom = new THREE.PlaneGeometry(0.5, 0.5);

      var freckle1 = new THREE.Mesh(frecklesGeom, frecklesMat);
      freckle1.applyMatrix(new THREE.Matrix4().makeTranslation(-5, 0, 0.01));
      freckle1.updateMatrix();
      frecklesGeomMerged.merge(freckle1.geometry, freckle1.matrix);

      var freckle2 = freckle1.clone();
      freckle2.applyMatrix(new THREE.Matrix4().makeTranslation(-0.5, -1, 0));
      freckle2.updateMatrix();
      frecklesGeomMerged.merge(freckle2.geometry, freckle2.matrix);

      var freckle3 = freckle1.clone();
      freckle3.applyMatrix(new THREE.Matrix4().makeTranslation(1, -0.5, 0));
      freckle3.updateMatrix();
      frecklesGeomMerged.merge(freckle3.geometry, freckle3.matrix);

      var freckle4 = freckle1.clone();
      freckle4.position.x = -freckle1.position.x;
      freckle4.updateMatrix();
      frecklesGeomMerged.merge(freckle4.geometry, freckle4.matrix);
      var freckle5 = freckle2.clone();
      freckle5.position.x = -freckle2.position.x;
      freckle5.updateMatrix();
      frecklesGeomMerged.merge(freckle5.geometry, freckle5.matrix);
      var freckle6 = freckle3.clone();
      freckle6.position.x = -freckle3.position.x;
      freckle6.updateMatrix();
      frecklesGeomMerged.merge(freckle6.geometry, freckle6.matrix);

      var freckledMerged = new THREE.Mesh(frecklesGeomMerged, frecklesMat);
      freckledMerged.castShadow = false;
      freckledMerged.receiveShadow = false;

      this.freckles.add(freckledMerged);
    }
  }, {
    key: 'Features',
    value: function Features() {
      var earGeom = new THREE.BoxBufferGeometry(1.5, 3, 1.5);
      var skinMat = new THREE.MeshLambertMaterial({ color: __WEBPACK_IMPORTED_MODULE_0__objects_colors__["a" /* default */].skin, flatShading: true });
      var earRight = new THREE.Mesh(earGeom, skinMat);
      earRight.position.set(-8.5, 1, 3);
      earRight.castShadow = false;
      earRight.receiveShadow = false;

      var earLeft = new THREE.Mesh(earGeom, skinMat);
      earLeft.position.set(8.5, 1, 3);
      earLeft.castShadow = false;
      earLeft.receiveShadow = false;

      var noseGeom = new THREE.CylinderGeometry(1, 2, 4, 4);
      var nose = new THREE.Mesh(noseGeom, skinMat);
      nose.scale.set(.75, 1, 1.3);
      nose.position.set(0, 1, 8);
      nose.castShadow = false;
      nose.receiveShadow = false;

      this.head.add(earRight, earLeft, nose);
    }
  }]);

  return Head;
}();

/* harmony default export */ __webpack_exports__["a"] = (Head);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);

var Materials = {
  "whiteMat": new THREE.MeshLambertMaterial({ color: __WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */].white, flatShading: true }),
  "teethMat": new THREE.MeshPhongMaterial({ color: __WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */].teeth, flatShading: true }),
  "blackMat": new THREE.MeshLambertMaterial({ color: __WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */].black, flatShading: true }),
  "normalMat": new THREE.MeshNormalMaterial({})
};

/* harmony default export */ __webpack_exports__["a"] = (Materials);

/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__);


var url = '/api/cart';

/* harmony default export */ __webpack_exports__["a"] = ({

  create: function create(_ref) {
    var text = _ref.text,
        id = _ref.id,
        from = _ref.from,
        blob = _ref.blob,
        to = _ref.to,
        audioSettings = _ref.audioSettings,
        headColors = _ref.headColors;

    var method = 'POST';
    // const newFileName = `${id.split(` `).join(`_`)}`;
    var body = new FormData();
    body.append('text', text);
    body.append('id', id);
    body.append('from', from);
    body.append('to', to);
    body.append('audioSettings', audioSettings);
    body.append('headColors', headColors);

    return __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()(url, { method: method, body: body }).then(function (r) {
      return r.json();
    });
  },

  read: function read() {
    return __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()(url + '?isActive=true').then(function (r) {
      return r.json();
    });
  },

  readOne: function readOne(id) {
    var method = 'GET';
    return __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()(url + '/' + id, { method: method }).then(function (r) {
      return r.json();
    });
  }
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = __webpack_require__(12);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var randomByte = __webpack_require__(14);

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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes_Head__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects_colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_Audio_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__objects_Save__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_cartAPI__ = __webpack_require__(6);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }







{
  var scene = void 0,
      camera = void 0,
      fieldOfView = void 0,
      aspectRatio = void 0,
      nearPlane = void 0,
      farPlane = void 0,
      HEIGHT = void 0,
      WIDTH = void 0;
  var globalLight = void 0,
      shadowLight = void 0,
      backLight = void 0,
      light = void 0,
      renderer = void 0,
      container = void 0,
      loaded = void 0;
  var head = void 0,
      stars = void 0,
      windowHalfX = void 0,
      windowHalfY = void 0,
      color = void 0,
      audio = void 0,
      SpeechText = void 0;

  // vars for dat.gui
  var controller = void 0,
      gui = void 0;
  var saveBtn = document.getElementById('save');

  var mousePos = { x: 0, y: 0 };

  var starArray = [];
  var isMobile = /iPhone|Android/i.test(navigator.userAgent);
  var loaderManager = new THREE.LoadingManager();

  var init = function init() {
    // create snow
    particlesJS.load('particles-js', '../assets/particles.json', function () {
      console.log('callback - particles.js config loaded');
    });

    createScene();
    createLights();

    audio = new __WEBPACK_IMPORTED_MODULE_2__classes_Audio_js__["a" /* default */](); // handle audio and speechrecognition
    head = new __WEBPACK_IMPORTED_MODULE_0__classes_Head__["a" /* default */](); // show and handle head
    scene.add(head.mesh);

    // send objects to save on click
    saveBtn.addEventListener('click', function () {
      var audioSettings = {
        pitch: audio.pitchRatio,
        overlap: audio.overlap
      };

      var headColors = {
        skin: __WEBPACK_IMPORTED_MODULE_1__objects_colors__["a" /* default */].skin,
        freckles: __WEBPACK_IMPORTED_MODULE_1__objects_colors__["a" /* default */].freckles,
        eye: __WEBPACK_IMPORTED_MODULE_1__objects_colors__["a" /* default */].eye,
        glasses: __WEBPACK_IMPORTED_MODULE_1__objects_colors__["a" /* default */].glasses,
        hat: __WEBPACK_IMPORTED_MODULE_1__objects_colors__["a" /* default */].hat
      };

      Object(__WEBPACK_IMPORTED_MODULE_3__objects_Save__["a" /* default */])({
        text: audio.txt,
        id: audio.id,
        audioSettings: JSON.stringify(audioSettings),
        headColors: JSON.stringify(headColors)
      });
    });

    gui = new dat.GUI();
    gui.domElement.id = 'gui';
    gui.closed = true;
    controller = new controllerText();
    guiController(['skin', 'freckles', 'eye', 'glasses', 'hat']); // add gui for array object and set colors on color change

    window.scene = scene; // set scene for extension

    loop();
  };

  var guiController = function guiController(keys) {
    keys.forEach(function (key) {
      gui.addColor(controller, key).onChange(function () {

        // set right color for material
        switch (key) {
          case 'skin':
            __WEBPACK_IMPORTED_MODULE_1__objects_colors__["a" /* default */].skin = controller.skin;
          case 'freckles':
            __WEBPACK_IMPORTED_MODULE_1__objects_colors__["a" /* default */].freckles = controller.freckles;
          case 'eye':
            __WEBPACK_IMPORTED_MODULE_1__objects_colors__["a" /* default */].eye = controller.eye;
          case 'glasses':
            __WEBPACK_IMPORTED_MODULE_1__objects_colors__["a" /* default */].glasses = controller.glasses;
          case 'hat':
            __WEBPACK_IMPORTED_MODULE_1__objects_colors__["a" /* default */].hat = controller.hat;
        }

        //remove current head and make a new one to set current color
        scene.remove(head.mesh);
        createHead();
      });
    });
  };

  var dec2hex = function dec2hex(i) {
    var result = "0x000000";
    if (i >= 0 && i <= 15) {
      result = "0x00000" + i.toString(16);
    } else if (i >= 16 && i <= 255) {
      result = "0x0000" + i.toString(16);
    } else if (i >= 256 && i <= 4095) {
      result = "0x000" + i.toString(16);
    } else if (i >= 4096 && i <= 65535) {
      result = "0x00" + i.toString(16);
    } else if (i >= 65535 && i <= 1048575) {
      result = "0x0" + i.toString(16);
    } else if (i >= 1048575) {
      result = '0x' + i.toString(16);
    }
    if (result.length == 8) {
      return result;
    }
  };

  var createScene = function createScene() {
    ;
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth / 1.67;
    windowHalfX = WIDTH / 2;
    windowHalfY = HEIGHT / 2;

    scene = new THREE.Scene();
    aspectRatio = WIDTH / HEIGHT;
    fieldOfView = 50;
    nearPlane = 1;
    farPlane = 2000;

    camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
    camera.position.x = 0;
    camera.position.z = 70;
    camera.position.y = -5;

    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
    renderer.setSize(WIDTH, HEIGHT);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container = document.getElementById('container');
    container.appendChild(renderer.domElement);
    window.addEventListener('resize', onWindowResize, false);
    document.addEventListener('mousemove', handleMouseMove, false);
  };

  var onWindowResize = function onWindowResize() {
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth / 1.67;
    windowHalfX = WIDTH / 2;
    windowHalfY = HEIGHT / 2;
    renderer.setSize(WIDTH, HEIGHT);
    camera.aspect = WIDTH / HEIGHT;
    camera.updateProjectionMatrix();
  };

  var handleMouseMove = function handleMouseMove(e) {
    mousePos = {
      x: event.clientX,
      y: event.clientY
    };
  };

  var handleWindowResize = function handleWindowResize(e) {
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;
    renderer.setSize(WIDTH, HEIGHT);
    camera.aspect = WIDTH / HEIGHT;
    camera.updateProjectionMatrix();
  };

  var createLights = function createLights() {

    globalLight = new THREE.HemisphereLight(0xffffff, 0x555555, .9);

    shadowLight = new THREE.DirectionalLight(0xffffff, .3);
    shadowLight.position.set(100, 250, 175);
    shadowLight.castShadow = true;

    backLight = new THREE.DirectionalLight(0xffffff, .2);
    backLight.position.set(-100, 200, 150);
    backLight.castShadow = true;

    if (isMobile) shadowLight.shadow.mapSize.width = shadowLight.shadow.mapSize.height = 1024;
    if (!isMobile) shadowLight.shadow.mapSize.width = shadowLight.shadow.mapSize.height = 2048;

    scene.add(globalLight);
    scene.add(shadowLight);
    scene.add(backLight);
    scene.add(new THREE.AmbientLight(0xeadead, 0.1));
  };

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

  var createHead = function createHead() {
    head.name = "Head";
    head = new __WEBPACK_IMPORTED_MODULE_0__classes_Head__["a" /* default */]();
    head.idle();
    scene.add(head.mesh);
    //stars = new StarsGroup();
    //scene.add(stars.mesh);
  };

  var createCharacter = function createCharacter() {
    createHead();
    head.mesh.position.set(0, 2, 0);
    //stars.mesh.position.set(0, 10, 0);
  };

  var isBlinking = false;
  var blinkLoop = function blinkLoop() {
    isBlinking = false;

    if (!isBlinking && Math.random() > 0.99) {
      isBlinking = true;
      blink();
    }
  };

  var blink = function blink() {
    head.eyes.scale.y = 1;
    TweenMax.to(head.eyes.scale, .07, {
      y: 0,
      yoyo: true,
      repeat: 1,
      onComplete: function onComplete() {
        isBlinking = false;
      }
    });
  };

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

  var controllerText = function controllerText() {
    _classCallCheck(this, controllerText);

    this.skin = __WEBPACK_IMPORTED_MODULE_1__objects_colors__["a" /* default */].skin;
    this.freckles = __WEBPACK_IMPORTED_MODULE_1__objects_colors__["a" /* default */].freckles;
    this.eye = __WEBPACK_IMPORTED_MODULE_1__objects_colors__["a" /* default */].eye;
    this.glasses = __WEBPACK_IMPORTED_MODULE_1__objects_colors__["a" /* default */].glasses;
    this.hat = __WEBPACK_IMPORTED_MODULE_1__objects_colors__["a" /* default */].hat;
  };

  var loop = function loop() {
    blinkLoop();
    //head.dizzy();
    var xTarget = mousePos.x - windowHalfX;
    var yTarget = mousePos.y - windowHalfY;

    head.idle(xTarget, yTarget);
    renderer.render(scene, camera);
    requestAnimationFrame(loop);
  };

  //window.addEventListener('load', init, false);

  init();
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_soundAPI__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shortid__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shortid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_shortid__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;
var AudioContext = window.AudioContext || window.webkitAudioContext;

var audioCtx = void 0,
    recognition = void 0;
var transcript = "";
var audioChunks = [];
var source = void 0;

var $text = document.getElementById('field');
var $record = document.getElementById('record');
var $audio = document.getElementById('audio_controls');
var $stop = document.getElementById('stop');

var audioSources = [],
    pitchShifterProcessor = void 0;

var grainSize = 512,
    pitchRatio = 1.0,
    overlapRatio = 0.50;

var Audio = function () {
  function Audio() {
    var _this = this;

    _classCallCheck(this, Audio);

    this.id = __WEBPACK_IMPORTED_MODULE_1_shortid___default.a.generate();
    this.pitchRatio = 1.0;
    this.overlap = 0.50;
    audioCtx = new AudioContext();

    // handle SpeechRecognition
    recognition = new SpeechRecognition();
    this.speechSettings();

    recognition.onresult = function (event) {
      return _this.gotResult(event);
    };
    recognition.onspeechend = function (e) {
      return _this.onSpeechEnd(e);
    };
    $text.addEventListener('blur', function () {
      return _this.txt = $text.value;
    });

    navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
      _this.mediaRecorder = new MediaRecorder(stream);

      /*--------------------Start Recording-----------------------*/
      $record.addEventListener('click', function () {
        _this.mediaRecorder.start();
        recognition.start();
        $record.disabled = true;
      });
      /*----------------------------------------------------------*/

      _this.mediaRecorder.addEventListener('dataavailable', function (e) {
        audioChunks.push(e.data);
      }); // add audiochunk to array

      // when mediaRecorder stops, make and handle audio blob
      _this.mediaRecorder.addEventListener('stop', function () {
        // give link to audio controls to play and control the sound
        _this.blob = new Blob(audioChunks, { type: 'audio/ogg' }); // create blob from audiochunks

        __WEBPACK_IMPORTED_MODULE_0__lib_soundAPI__["a" /* default */].create({
          id: _this.id,
          blob: _this.blob
        });

        setTimeout(function () {
          var bufferLoader = new BufferLoader(audioCtx, ['./uploads/' + _this.id + '.ogg'], function (bufferList) {
            // to avoid overlapping previous sound, empty bufferList when trying again
            $record.addEventListener('click', function () {
              return bufferList = [];
            });

            var loop = false;

            // trigger loop
            document.getElementById('repeat').addEventListener('click', function () {
              loop = !loop;
              source.stop();
            });

            // pitch value
            var $pitch = document.getElementById('pitch');
            $pitch.addEventListener('change', function () {
              pitchRatio = parseFloat($pitch.value);
              _this.pitchRatio = pitchRatio;
            });

            // play modified sound
            $audio.addEventListener('click', function () {
              source = '';
              source = audioCtx.createBufferSource();
              source.buffer = bufferList[0];
              source.connect(pitchShifterProcessor);
              source.loop = loop;
              source.start();
            });
          });

          bufferLoader.load();
          _this.initProcessor();
        }, 1000);

        // set sound filter overlap
        var overlap = document.getElementById('overlap');
        overlap.addEventListener('change', function () {
          overlapRatio = overlap.value;
          _this.overlap = overlapRatio;
        });

        audioChunks = [];
      });
    });
  }

  _createClass(Audio, [{
    key: 'onSpeechEnd',
    value: function onSpeechEnd(e) {
      this.mediaRecorder.stop();
      recognition.stop();
      $record.disabled = false;
      $record.textContent = 'Want to try again?';
      this.txt = $text.value;
    }
  }, {
    key: 'gotResult',
    value: function gotResult(event) {
      var last = event.results.length - 1;
      transcript = event.results[last][0].transcript;
      $text.value = transcript;
    }
  }, {
    key: 'speechSettings',
    value: function speechSettings() {
      recognition.continuous = false;
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;
    }
  }, {
    key: 'initProcessor',
    value: function initProcessor() {

      var linearInterpolation = function linearInterpolation(a, b, t) {
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

      pitchShifterProcessor.onaudioprocess = function (event) {

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
    }
  }, {
    key: 'hannWindow',
    value: function hannWindow(length) {
      var window = new Float32Array(length);
      for (var _i = 0; _i < length; _i++) {
        window[_i] = 0.5 * (1 - Math.cos(2 * Math.PI * _i / (length - 1)));
      }
      return window;
    }
  }]);

  return Audio;
}();

/* harmony default export */ __webpack_exports__["a"] = (Audio);
;

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__);


var url = '/api/sound';

/* harmony default export */ __webpack_exports__["a"] = ({

  create: function create(_ref) {
    var id = _ref.id,
        blob = _ref.blob;

    var method = 'POST';
    var newFileName = '' + id.split(' ').join('_');
    var body = new FormData();
    body.append('id', id);
    body.append('sound', blob, newFileName);

    return __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()(url, { method: method, body: body }).then(function (r) {
      return r.json();
    });
  },

  read: function read() {
    return __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()(url + '?isActive=true').then(function (r) {
      return r.json();
    });
  },

  readOne: function readOne(id) {
    var method = 'GET';
    return __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()(url + '/' + id, { method: method }).then(function (r) {
      return r.json();
    });
  }
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet = __webpack_require__(2);
var encode = __webpack_require__(8);
var decode = __webpack_require__(15);
var build = __webpack_require__(16);
var isValid = __webpack_require__(17);

// if you are using cluster or multiple servers use this to make each instance
// has a unique value for worker
// Note: I don't know if this is automatically set when using third
// party cluster solutions such as pm2.
var clusterWorkerId = __webpack_require__(18) || 0;

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
/* 13 */
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
/* 14 */
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var alphabet = __webpack_require__(2);

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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var encode = __webpack_require__(8);
var alphabet = __webpack_require__(2);

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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var alphabet = __webpack_require__(2);

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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = 0;


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_CartAPI__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shortid__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shortid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_shortid__);


var from = document.getElementById('name_input');
var to = document.getElementById('recipient_input');
var link = document.querySelector('.unique_link');

var handleSave = function handleSave(_ref) {
  var text = _ref.text,
      id = _ref.id,
      audioSettings = _ref.audioSettings,
      headColors = _ref.headColors;


  __WEBPACK_IMPORTED_MODULE_0__lib_CartAPI__["a" /* default */].create({
    text: text,
    id: id,
    from: from.value || 'Human',
    to: to.value || 'Fellow Human',
    audioSettings: audioSettings,
    headColors: headColors
  });

  link.innerHTML = 'https://localhost:8080/santa.html?id=' + id;
  link.setAttribute('href', 'https://localhost:8080/santa.html?id=' + id);
  link.setAttribute('target', '_blank');
};

/* harmony default export */ __webpack_exports__["a"] = (handleSave);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__);


var url = '/api/cart';

/* harmony default export */ __webpack_exports__["a"] = ({

  create: function create(_ref) {
    var text = _ref.text,
        id = _ref.id,
        from = _ref.from,
        blob = _ref.blob,
        to = _ref.to,
        audioSettings = _ref.audioSettings,
        headColors = _ref.headColors;

    var method = 'POST';
    // const newFileName = `${id.split(` `).join(`_`)}`;
    var body = new FormData();
    body.append('text', text);
    body.append('id', id);
    body.append('from', from);
    body.append('to', to);
    body.append('audioSettings', audioSettings);
    body.append('headColors', headColors);

    return __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()(url, { method: method, body: body }).then(function (r) {
      return r.json();
    });
  },

  read: function read() {
    return __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()(url + '?isActive=true').then(function (r) {
      return r.json();
    });
  },

  readOne: function readOne(id) {
    var method = 'GET';
    return __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()(url + '/' + id, { method: method }).then(function (r) {
      return r.json();
    });
  }
});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmZlYjYyODE5NDYzNWMxNGQyMDEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL29iamVjdHMvY29sb3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLWZldGNoL2ZldGNoLW5wbS1icm93c2VyaWZ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaG9ydGlkL2xpYi9hbHBoYWJldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY2xhc3Nlcy9IZWFkLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9vYmplY3RzL01hdGVyaWFscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd2hhdHdnLWZldGNoL2ZldGNoLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9saWIvY2FydEFQSS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvZW5jb2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzZXMvQXVkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2xpYi9zb3VuZEFQSS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Nob3J0aWQvbGliL3JhbmRvbS9yYW5kb20tZnJvbS1zZWVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaG9ydGlkL2xpYi9yYW5kb20vcmFuZG9tLWJ5dGUtYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvZGVjb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaG9ydGlkL2xpYi9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvaXMtdmFsaWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Nob3J0aWQvbGliL3V0aWwvY2x1c3Rlci13b3JrZXItaWQtYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvb2JqZWN0cy9TYXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9saWIvQ2FydEFQSS5qcyJdLCJuYW1lcyI6WyJDb2xvcnMiLCJza2luIiwiZnJlY2tsZXMiLCJ3aGl0ZSIsImdsYXNzZXMiLCJ0ZWV0aCIsImJsYWNrIiwiZXllIiwiaGF0IiwiaXNCbGlua2luZyIsIkhlYWQiLCJtZXNoIiwiVEhSRUUiLCJPYmplY3QzRCIsImhlYWRHZW9tIiwiQm94QnVmZmVyR2VvbWV0cnkiLCJza2luTWF0IiwiTWVzaExhbWJlcnRNYXRlcmlhbCIsImNvbG9yIiwiZmxhdFNoYWRpbmciLCJleWVNYXQiLCJNZXNoUGhvbmdNYXRlcmlhbCIsImhlYWQiLCJNZXNoIiwiY2FzdFNoYWRvdyIsInJlY2VpdmVTaGFkb3ciLCJhZGQiLCJiZWFyZCIsInBvc2l0aW9uIiwieSIsInoiLCJCZWFyZCIsIkdsYXNzZXMiLCJIYWlyIiwiRXllcyIsIkV5ZUJyb3dzIiwiSGF0IiwiRnJlY2tsZXMiLCJGZWF0dXJlcyIsImlkbGUiLCJub3JtYWxpemUiLCJ2Iiwidm1pbiIsInZtYXgiLCJ0bWluIiwidG1heCIsIm52IiwiTWF0aCIsIm1heCIsIm1pbiIsImR2IiwicGMiLCJkdCIsInR2Iiwic3BlZWQiLCJleWVCbHVlUmlnaHRQb3NYIiwiZXllQmx1ZUxlZnRQb3NYIiwiZXllQmx1ZVJpZ2h0UG9zWSIsImV5ZUJsdWVMZWZ0UG9zWSIsImV5ZUJyb3dSaWdodFBvc1kiLCJleWVCcm93TGVmdFBvc1kiLCJleWVCbHVlUmlnaHQiLCJ4IiwiZXllQmx1ZUxlZnQiLCJleWVCcm93UmlnaHQiLCJleWVCcm93TGVmdCIsInhUYXJnZXQiLCJ5VGFyZ2V0IiwiZGlzdGFuY2UiLCJyb3RhdGlvbiIsInNpbiIsIkRhdGUiLCJub3ciLCJQSSIsIm1vdXN0YWNoZSIsImNvcyIsInVwZGF0ZUJvZHkiLCJiZWFyZEdlb21NZXJnZWQiLCJHZW9tZXRyeSIsImJlYXJkMUdlb20iLCJCb3hHZW9tZXRyeSIsImJlYXJkMSIsIk1hdCIsIndoaXRlTWF0IiwiYXBwbHlNYXRyaXgiLCJNYXRyaXg0IiwibWFrZVRyYW5zbGF0aW9uIiwidXBkYXRlTWF0cml4IiwibWVyZ2UiLCJnZW9tZXRyeSIsIm1hdHJpeCIsImJlYXJkMiIsInNjYWxlIiwiYmVhcmQzIiwiY2xvbmUiLCJiZWFyZDQiLCJiZWFyZDJHZW9tIiwidmVydGljZXMiLCJiZWFyZDUiLCJiZWFyZDNHZW9tIiwiYmVhcmQ2IiwiYmVhcmQ3IiwiYmVhcmQ4IiwiYmVhcmQ0R2VvbSIsImJlYXJkOSIsImJlYXJkNUdlb20iLCJiZWFyZDEwIiwiYmVhcmQxMSIsImJlYXJkTWVyZ2VkIiwibW91dGhHZW9tIiwibW91dGgiLCJibGFja01hdCIsInNldCIsInRlZXRoR2VvbSIsInRlZXRoTWF0IiwibW91c3RhY2hlR2VvbSIsImdsYXNzZXNNYXQiLCJmcmFtZUdlb21NZXJnZWQiLCJmcmFtZU91dGVyR2VvbSIsIkN5bGluZGVyR2VvbWV0cnkiLCJmcmFtZUlubmVyR2VvbSIsIm1ha2VSb3RhdGlvblgiLCJmcmFtZUJTUCIsIlRocmVlQlNQIiwiZnJhbWVDdXRCU1AiLCJmcmFtZWludGVyc2VjdGlvbkJTUCIsInN1YnRyYWN0IiwiZnJhbWVMZWZ0IiwidG9NZXNoIiwiZnJhbWVSaWdodCIsIm1ha2VSb3RhdGlvbloiLCJmcmFtZU1pZEdlb20iLCJmcmFtZU1pZCIsImZyYW1lRW5kR2VvbSIsImZyYW1lRW5kUmlnaHQiLCJmcmFtZUVuZExlZnQiLCJmcmFtZVNwb2tlR2VvbSIsImZyYW1lU3Bva2VSaWdodCIsImZyYW1lU3Bva2VMZWZ0IiwiZnJhbWVNZXJnZWQiLCJoYWlyIiwiaGFpckdlb21NZXJnZWQiLCJoYWlyRmxhdEdlb20iLCJoYWlyMSIsImhhaXIyIiwiaGFpcjMiLCJoYWlyNCIsImhhaXI2IiwiaGFpckZsYXRCYWNrR2VvbSIsImhhaXI1IiwiaGFpck1lcmdlZCIsImV5ZXMiLCJleWVXaGl0ZUdlb20iLCJQbGFuZUdlb21ldHJ5IiwiZXllV2hpdGVSaWdodCIsImV5ZUJsdWVHZW9tIiwiZXllUHVwaWxHZW9tIiwiZXllUHVwaWxSaWdodCIsImV5ZVdoaXRlTGVmdCIsImV5ZVB1cGlsTGVmdCIsImV5ZUJyb3dzIiwiZXllQnJvd0dlb20iLCJoYXRNYXQiLCJiYW5kR2VvbSIsIlRvcnVzR2VvbWV0cnkiLCJiaWdDb25lR2VvbSIsInNtYWxsQ29uZUdlb20iLCJoYXREaW5nbGVHZW9tIiwiU3BoZXJlR2VvbWV0cnkiLCJiYW5kIiwiYmlnQ29uZSIsInNtYWxsQ29uZSIsIm1ha2VSb3RhdGlvblkiLCJoYXREaW5nbGUiLCJmcmVja2xlc01hdCIsImZyZWNrbGVzR2VvbU1lcmdlZCIsImZyZWNrbGVzR2VvbSIsImZyZWNrbGUxIiwiZnJlY2tsZTIiLCJmcmVja2xlMyIsImZyZWNrbGU0IiwiZnJlY2tsZTUiLCJmcmVja2xlNiIsImZyZWNrbGVkTWVyZ2VkIiwiZWFyR2VvbSIsImVhclJpZ2h0IiwiZWFyTGVmdCIsIm5vc2VHZW9tIiwibm9zZSIsIk1hdGVyaWFscyIsIk1lc2hOb3JtYWxNYXRlcmlhbCIsInVybCIsImNyZWF0ZSIsInRleHQiLCJpZCIsImZyb20iLCJibG9iIiwidG8iLCJhdWRpb1NldHRpbmdzIiwiaGVhZENvbG9ycyIsIm1ldGhvZCIsImJvZHkiLCJGb3JtRGF0YSIsImFwcGVuZCIsImZldGNoIiwidGhlbiIsInIiLCJqc29uIiwicmVhZCIsInJlYWRPbmUiLCJzY2VuZSIsImNhbWVyYSIsImZpZWxkT2ZWaWV3IiwiYXNwZWN0UmF0aW8iLCJuZWFyUGxhbmUiLCJmYXJQbGFuZSIsIkhFSUdIVCIsIldJRFRIIiwiZ2xvYmFsTGlnaHQiLCJzaGFkb3dMaWdodCIsImJhY2tMaWdodCIsImxpZ2h0IiwicmVuZGVyZXIiLCJjb250YWluZXIiLCJsb2FkZWQiLCJzdGFycyIsIndpbmRvd0hhbGZYIiwid2luZG93SGFsZlkiLCJhdWRpbyIsIlNwZWVjaFRleHQiLCJjb250cm9sbGVyIiwiZ3VpIiwic2F2ZUJ0biIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJtb3VzZVBvcyIsInN0YXJBcnJheSIsImlzTW9iaWxlIiwidGVzdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImxvYWRlck1hbmFnZXIiLCJMb2FkaW5nTWFuYWdlciIsImluaXQiLCJwYXJ0aWNsZXNKUyIsImxvYWQiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlU2NlbmUiLCJjcmVhdGVMaWdodHMiLCJhZGRFdmVudExpc3RlbmVyIiwicGl0Y2giLCJwaXRjaFJhdGlvIiwib3ZlcmxhcCIsImhhbmRsZVNhdmUiLCJ0eHQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0IiwiR1VJIiwiZG9tRWxlbWVudCIsImNsb3NlZCIsImNvbnRyb2xsZXJUZXh0IiwiZ3VpQ29udHJvbGxlciIsIndpbmRvdyIsImxvb3AiLCJrZXlzIiwiZm9yRWFjaCIsImFkZENvbG9yIiwia2V5Iiwib25DaGFuZ2UiLCJyZW1vdmUiLCJjcmVhdGVIZWFkIiwiZGVjMmhleCIsImkiLCJyZXN1bHQiLCJ0b1N0cmluZyIsImxlbmd0aCIsImlubmVySGVpZ2h0IiwiaW5uZXJXaWR0aCIsIlNjZW5lIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJXZWJHTFJlbmRlcmVyIiwiYWxwaGEiLCJhbnRpYWxpYXMiLCJzZXRQaXhlbFJhdGlvIiwiZGV2aWNlUGl4ZWxSYXRpbyIsInNldFNpemUiLCJzaGFkb3dNYXAiLCJlbmFibGVkIiwidHlwZSIsIlBDRlNvZnRTaGFkb3dNYXAiLCJhcHBlbmRDaGlsZCIsIm9uV2luZG93UmVzaXplIiwiaGFuZGxlTW91c2VNb3ZlIiwiYXNwZWN0IiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsImV2ZW50IiwiY2xpZW50WCIsImNsaWVudFkiLCJoYW5kbGVXaW5kb3dSZXNpemUiLCJIZW1pc3BoZXJlTGlnaHQiLCJEaXJlY3Rpb25hbExpZ2h0Iiwic2hhZG93IiwibWFwU2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiQW1iaWVudExpZ2h0IiwibmFtZSIsImNyZWF0ZUNoYXJhY3RlciIsImJsaW5rTG9vcCIsInJhbmRvbSIsImJsaW5rIiwiVHdlZW5NYXgiLCJ5b3lvIiwicmVwZWF0Iiwib25Db21wbGV0ZSIsInJlbmRlciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIlNwZWVjaFJlY29nbml0aW9uIiwid2Via2l0U3BlZWNoUmVjb2duaXRpb24iLCJTcGVlY2hHcmFtbWFyTGlzdCIsIndlYmtpdFNwZWVjaEdyYW1tYXJMaXN0IiwiU3BlZWNoUmVjb2duaXRpb25FdmVudCIsIndlYmtpdFNwZWVjaFJlY29nbml0aW9uRXZlbnQiLCJBdWRpb0NvbnRleHQiLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJhdWRpb0N0eCIsInJlY29nbml0aW9uIiwidHJhbnNjcmlwdCIsImF1ZGlvQ2h1bmtzIiwic291cmNlIiwiJHRleHQiLCIkcmVjb3JkIiwiJGF1ZGlvIiwiJHN0b3AiLCJhdWRpb1NvdXJjZXMiLCJwaXRjaFNoaWZ0ZXJQcm9jZXNzb3IiLCJncmFpblNpemUiLCJvdmVybGFwUmF0aW8iLCJBdWRpbyIsInNob3J0SWQiLCJnZW5lcmF0ZSIsInNwZWVjaFNldHRpbmdzIiwib25yZXN1bHQiLCJnb3RSZXN1bHQiLCJvbnNwZWVjaGVuZCIsIm9uU3BlZWNoRW5kIiwiZSIsInZhbHVlIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwibWVkaWFSZWNvcmRlciIsIk1lZGlhUmVjb3JkZXIiLCJzdHJlYW0iLCJzdGFydCIsImRpc2FibGVkIiwicHVzaCIsImRhdGEiLCJCbG9iIiwiU291bmRBUEkiLCJzZXRUaW1lb3V0IiwiYnVmZmVyTG9hZGVyIiwiQnVmZmVyTG9hZGVyIiwiYnVmZmVyTGlzdCIsInN0b3AiLCIkcGl0Y2giLCJwYXJzZUZsb2F0IiwiY3JlYXRlQnVmZmVyU291cmNlIiwiYnVmZmVyIiwiY29ubmVjdCIsImluaXRQcm9jZXNzb3IiLCJ0ZXh0Q29udGVudCIsImxhc3QiLCJyZXN1bHRzIiwiY29udGludW91cyIsImxhbmciLCJpbnRlcmltUmVzdWx0cyIsIm1heEFsdGVybmF0aXZlcyIsImxpbmVhckludGVycG9sYXRpb24iLCJhIiwiYiIsInQiLCJkaXNjb25uZWN0IiwiY3JlYXRlU2NyaXB0UHJvY2Vzc29yIiwiY3JlYXRlSmF2YVNjcmlwdE5vZGUiLCJGbG9hdDMyQXJyYXkiLCJncmFpbldpbmRvdyIsImhhbm5XaW5kb3ciLCJvbmF1ZGlvcHJvY2VzcyIsImlucHV0RGF0YSIsImlucHV0QnVmZmVyIiwiZ2V0Q2hhbm5lbERhdGEiLCJvdXRwdXREYXRhIiwib3V0cHV0QnVmZmVyIiwiZ3JhaW5EYXRhIiwiaiIsImluZGV4IiwiZmxvb3IiLCJyb3VuZCIsImRlc3RpbmF0aW9uIiwibmV3RmlsZU5hbWUiLCJzcGxpdCIsImpvaW4iLCJsaW5rIiwicXVlcnlTZWxlY3RvciIsIkNhcnRBUEkiLCJpbm5lckhUTUwiLCJzZXRBdHRyaWJ1dGUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REEsSUFBTUEsU0FBUztBQUNiQyxRQUFNLFFBRE87QUFFYkMsWUFBVSxRQUZHO0FBR2JDLFNBQU8sUUFITTtBQUliQyxXQUFTLFFBSkk7QUFLYkMsU0FBTyxR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Q0FDQztBQUFBLGFBQUtDLEVBQUVDLElBQUYsRUFBTDtBQUFBLEtBREQsQ0FBUDtBQUVELEdBZlk7O0FBaUJiQyxRQUFNLGdCQUFNO0FBQ1YsV0FBTyx3REFBQUosQ0FBU2IsR0FBVCxxQkFDSmMsSUFESSxDQUNDO0FBQUEsYUFBS0MsRUFBRUMsSUFBRixFQUFMO0FBQUEsS0FERCxDQUFQO0FBRUQsR0FwQlk7O0FBc0JiRSxXQUFTLHFCQUFNO0FBQ2IsUUFBTVQsY0FBTjtBQUNBLFdBQU8sd0RBQUFJLENBQVNiLEdBQVQsU0FBZ0JHLEVBQWhCLEVBQXNCLEVBQUNNLGNBQUQsRUFBdEIsRUFBZ0NLLElBQWhDLENBQXFDO0FBQUEsYUFBS0MsRUFBRUMsSUFBRixFQUFMO0FBQUEsS0FBckMsQ0FBUDtBQUNEO0FBekJZLENBQWYsRSIsImZpbGUiOiJqcy9zY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA5KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2ZmViNjI4MTk0NjM1YzE0ZDIwMSIsImNvbnN0IENvbG9ycyA9IHtcbiAgc2tpbjogMHhmZmUwYmQsXG4gIGZyZWNrbGVzOiAweGNmYmE5NixcbiAgd2hpdGU6IDB4ZTllYmVlLFxuICBnbGFzc2VzOiAweGY5YzQyMSxcbiAgdGVldGg6IDB4ZmZmZmZmLFxuICBibGFjazogMHgyZTJlMmUsXG4gIGV5ZTogMHg2Mjk1YTgsXG4gIGhhdDogMHg3MjAzMTRcbn07XG5leHBvcnQgZGVmYXVsdCBDb2xvcnM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvb2JqZWN0cy9jb2xvcnMuanMiLCIvLyB0aGUgd2hhdHdnLWZldGNoIHBvbHlmaWxsIGluc3RhbGxzIHRoZSBmZXRjaCgpIGZ1bmN0aW9uXG4vLyBvbiB0aGUgZ2xvYmFsIG9iamVjdCAod2luZG93IG9yIHNlbGYpXG4vL1xuLy8gUmV0dXJuIHRoYXQgYXMgdGhlIGV4cG9ydCBmb3IgdXNlIGluIFdlYnBhY2ssIEJyb3dzZXJpZnkgZXRjLlxucmVxdWlyZSgnd2hhdHdnLWZldGNoJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHNlbGYuZmV0Y2guYmluZChzZWxmKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtZmV0Y2gvZmV0Y2gtbnBtLWJyb3dzZXJpZnkuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbnZhciByYW5kb21Gcm9tU2VlZCA9IHJlcXVpcmUoJy4vcmFuZG9tL3JhbmRvbS1mcm9tLXNlZWQnKTtcblxudmFyIE9SSUdJTkFMID0gJzAxMjM0NTY3ODlhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ekFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaXy0nO1xudmFyIGFscGhhYmV0O1xudmFyIHByZXZpb3VzU2VlZDtcblxudmFyIHNodWZmbGVkO1xuXG5mdW5jdGlvbiByZXNldCgpIHtcbiAgICBzaHVmZmxlZCA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBzZXRDaGFyYWN0ZXJzKF9hbHBoYWJldF8pIHtcbiAgICBpZiAoIV9hbHBoYWJldF8pIHtcbiAgICAgICAgaWYgKGFscGhhYmV0ICE9PSBPUklHSU5BTCkge1xuICAgICAgICAgICAgYWxwaGFiZXQgPSBPUklHSU5BTDtcbiAgICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChfYWxwaGFiZXRfID09PSBhbHBoYWJldCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKF9hbHBoYWJldF8ubGVuZ3RoICE9PSBPUklHSU5BTC5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDdXN0b20gYWxwaGFiZXQgZm9yIHNob3J0aWQgbXVzdCBiZSAnICsgT1JJR0lOQUwubGVuZ3RoICsgJyB1bmlxdWUgY2hhcmFjdGVycy4gWW91IHN1Ym1pdHRlZCAnICsgX2FscGhhYmV0Xy5sZW5ndGggKyAnIGNoYXJhY3RlcnM6ICcgKyBfYWxwaGFiZXRfKTtcbiAgICB9XG5cbiAgICB2YXIgdW5pcXVlID0gX2FscGhhYmV0Xy5zcGxpdCgnJykuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0sIGluZCwgYXJyKXtcbiAgICAgICByZXR1cm4gaW5kICE9PSBhcnIubGFzdEluZGV4T2YoaXRlbSk7XG4gICAgfSk7XG5cbiAgICBpZiAodW5pcXVlLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0N1c3RvbSBhbHBoYWJldCBmb3Igc2hvcnRpZCBtdXN0IGJlICcgKyBPUklHSU5BTC5sZW5ndGggKyAnIHVuaXF1ZSBjaGFyYWN0ZXJzLiBUaGVzZSBjaGFyYWN0ZXJzIHdlcmUgbm90IHVuaXF1ZTogJyArIHVuaXF1ZS5qb2luKCcsICcpKTtcbiAgICB9XG5cbiAgICBhbHBoYWJldCA9IF9hbHBoYWJldF87XG4gICAgcmVzZXQoKTtcbn1cblxuZnVuY3Rpb24gY2hhcmFjdGVycyhfYWxwaGFiZXRfKSB7XG4gICAgc2V0Q2hhcmFjdGVycyhfYWxwaGFiZXRfKTtcbiAgICByZXR1cm4gYWxwaGFiZXQ7XG59XG5cbmZ1bmN0aW9uIHNldFNlZWQoc2VlZCkge1xuICAgIHJhbmRvbUZyb21TZWVkLnNlZWQoc2VlZCk7XG4gICAgaWYgKHByZXZpb3VzU2VlZCAhPT0gc2VlZCkge1xuICAgICAgICByZXNldCgpO1xuICAgICAgICBwcmV2aW91c1NlZWQgPSBzZWVkO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2h1ZmZsZSgpIHtcbiAgICBpZiAoIWFscGhhYmV0KSB7XG4gICAgICAgIHNldENoYXJhY3RlcnMoT1JJR0lOQUwpO1xuICAgIH1cblxuICAgIHZhciBzb3VyY2VBcnJheSA9IGFscGhhYmV0LnNwbGl0KCcnKTtcbiAgICB2YXIgdGFyZ2V0QXJyYXkgPSBbXTtcbiAgICB2YXIgciA9IHJhbmRvbUZyb21TZWVkLm5leHRWYWx1ZSgpO1xuICAgIHZhciBjaGFyYWN0ZXJJbmRleDtcblxuICAgIHdoaWxlIChzb3VyY2VBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHIgPSByYW5kb21Gcm9tU2VlZC5uZXh0VmFsdWUoKTtcbiAgICAgICAgY2hhcmFjdGVySW5kZXggPSBNYXRoLmZsb29yKHIgKiBzb3VyY2VBcnJheS5sZW5ndGgpO1xuICAgICAgICB0YXJnZXRBcnJheS5wdXNoKHNvdXJjZUFycmF5LnNwbGljZShjaGFyYWN0ZXJJbmRleCwgMSlbMF0pO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0QXJyYXkuam9pbignJyk7XG59XG5cbmZ1bmN0aW9uIGdldFNodWZmbGVkKCkge1xuICAgIGlmIChzaHVmZmxlZCkge1xuICAgICAgICByZXR1cm4gc2h1ZmZsZWQ7XG4gICAgfVxuICAgIHNodWZmbGVkID0gc2h1ZmZsZSgpO1xuICAgIHJldHVybiBzaHVmZmxlZDtcbn1cblxuLyoqXG4gKiBsb29rdXAgc2h1ZmZsZWQgbGV0dGVyXG4gKiBAcGFyYW0gaW5kZXhcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGxvb2t1cChpbmRleCkge1xuICAgIHZhciBhbHBoYWJldFNodWZmbGVkID0gZ2V0U2h1ZmZsZWQoKTtcbiAgICByZXR1cm4gYWxwaGFiZXRTaHVmZmxlZFtpbmRleF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGNoYXJhY3RlcnM6IGNoYXJhY3RlcnMsXG4gICAgc2VlZDogc2V0U2VlZCxcbiAgICBsb29rdXA6IGxvb2t1cCxcbiAgICBzaHVmZmxlZDogZ2V0U2h1ZmZsZWRcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaG9ydGlkL2xpYi9hbHBoYWJldC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQ29sb3JzIGZyb20gJy4uL29iamVjdHMvY29sb3JzJztcbmltcG9ydCBNYXQgZnJvbSAnLi4vb2JqZWN0cy9NYXRlcmlhbHMnO1xuXG5sZXQgaXNCbGlua2luZyA9IGZhbHNlO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5tZXNoID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG5cbiAgICBsZXQgaGVhZEdlb20gPSBuZXcgVEhSRUUuQm94QnVmZmVyR2VvbWV0cnkoMTYsIDE2LCAxNik7XG4gICAgbGV0IHNraW5NYXQgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy5za2luLCBmbGF0U2hhZGluZzogdHJ1ZX0pO1xuICAgIGxldCBleWVNYXQgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe2NvbG9yOiBDb2xvcnMuZXllLCBmbGF0U2hhZGluZzogdHJ1ZX0pO1xuXG4gICAgdGhpcy5oZWFkID0gbmV3IFRIUkVFLk1lc2goaGVhZEdlb20sc2tpbk1hdCk7XG4gICAgdGhpcy5oZWFkLmNhc3RTaGFkb3cgPSB0cnVlO1xuICAgIHRoaXMuaGVhZC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG4gICAgdGhpcy5tZXNoLmFkZCh0aGlzLmhlYWQpO1xuXG4gICAgdGhpcy5iZWFyZCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgIHRoaXMuYmVhcmQucG9zaXRpb24ueSA9IC03O1xuICAgIHRoaXMuYmVhcmQucG9zaXRpb24ueiA9IDAuNTtcbiAgICB0aGlzLmhlYWQuYWRkKHRoaXMuYmVhcmQpO1xuXG4gICAgdGhpcy5CZWFyZCgpO1xuICAgIHRoaXMuR2xhc3NlcygpO1xuICAgIHRoaXMuSGFpcigpO1xuICAgIHRoaXMuRXllcygpO1xuICAgIHRoaXMuRXllQnJvd3MoKTtcbiAgICB0aGlzLkhhdCgpO1xuICAgIHRoaXMuRnJlY2tsZXMoKTtcbiAgICB0aGlzLkZlYXR1cmVzKCk7XG4gICAgdGhpcy5pZGxlKCk7XG4gICAgdGhpcy5ub3JtYWxpemUoKTtcbiAgfVxuXG4gIG5vcm1hbGl6ZSh2LCB2bWluLCB2bWF4LCB0bWluLCB0bWF4KSB7XG4gICAgY29uc3QgbnYgPSBNYXRoLm1heChNYXRoLm1pbih2LCB2bWF4KSwgdm1pbik7XG4gICAgY29uc3QgZHYgPSB2bWF4IC0gdm1pbjtcbiAgICBjb25zdCBwYyA9IChudiAtIHZtaW4pIC8gZHY7XG4gICAgY29uc3QgZHQgPSB0bWF4IC0gdG1pbjtcbiAgICBjb25zdCB0diA9IHRtaW4gKyAocGMgKiBkdCk7XG4gICAgcmV0dXJuIHR2O1xuICB9XG5cbiAgdXBkYXRlQm9keShzcGVlZCwgZXllQmx1ZVJpZ2h0UG9zWCwgZXllQmx1ZUxlZnRQb3NYLCBleWVCbHVlUmlnaHRQb3NZLCBleWVCbHVlTGVmdFBvc1ksIGV5ZUJyb3dSaWdodFBvc1ksIGV5ZUJyb3dMZWZ0UG9zWSkge1xuICAgIHRoaXMuZXllQmx1ZVJpZ2h0LnBvc2l0aW9uLnggKz0gKGV5ZUJsdWVSaWdodFBvc1ggLSB0aGlzLmV5ZUJsdWVSaWdodC5wb3NpdGlvbi54KSAvIHNwZWVkO1xuICAgIHRoaXMuZXllQmx1ZUxlZnQucG9zaXRpb24ueCArPSAoZXllQmx1ZUxlZnRQb3NYIC0gdGhpcy5leWVCbHVlTGVmdC5wb3NpdGlvbi54KSAvIHNwZWVkO1xuXG4gICAgdGhpcy5leWVCbHVlUmlnaHQucG9zaXRpb24ueSArPSAoZXllQmx1ZVJpZ2h0UG9zWSAtIHRoaXMuZXllQmx1ZVJpZ2h0LnBvc2l0aW9uLnkpIC8gc3BlZWQ7XG4gICAgdGhpcy5leWVCbHVlTGVmdC5wb3NpdGlvbi55ICs9IChleWVCbHVlTGVmdFBvc1kgLSB0aGlzLmV5ZUJsdWVMZWZ0LnBvc2l0aW9uLnkpIC8gc3BlZWQ7XG5cbiAgICB0aGlzLmV5ZUJyb3dSaWdodC5wb3NpdGlvbi55ICs9IChleWVCcm93UmlnaHRQb3NZIC0gdGhpcy5leWVCcm93UmlnaHQucG9zaXRpb24ueSkgLyBzcGVlZDtcbiAgICB0aGlzLmV5ZUJyb3dMZWZ0LnBvc2l0aW9uLnkgKz0gKGV5ZUJyb3dMZWZ0UG9zWSAtIHRoaXMuZXllQnJvd0xlZnQucG9zaXRpb24ueSkgLyBzcGVlZDtcbiAgfVxuXG4gIGlkbGUoeFRhcmdldCA9IDAsIHlUYXJnZXQgPSAwKSB7XG4gICAgbGV0IGRpc3RhbmNlID0gMTtcblxuICAgIHRoaXMuaGVhZC5yb3RhdGlvbi56ID0gTWF0aC5zaW4oRGF0ZS5ub3coKSAqIDAuMDA1KSAqIE1hdGguUEkgKiAwLjAwNTtcbiAgICB0aGlzLmhlYWQucm90YXRpb24ueCA9IE1hdGguc2luKERhdGUubm93KCkgKiAwLjAwNCkgKiBNYXRoLlBJICogMC4wMztcblxuICAgIGNvbnN0IGV5ZUJsdWVSaWdodFBvc1ggPSB0aGlzLm5vcm1hbGl6ZSh4VGFyZ2V0LCAtMjAwLCAyMDAsIC0wLjYsIDAuNik7XG4gICAgY29uc3QgZXllQmx1ZUxlZnRQb3NYID0gdGhpcy5ub3JtYWxpemUoeFRhcmdldCwgLTIwMCwgMjAwLCAtMC42LCAwLjYpO1xuXG4gICAgY29uc3QgZXllQmx1ZVJpZ2h0UG9zWSA9IHRoaXMubm9ybWFsaXplKHlUYXJnZXQsIC0yMDAsIDIwMCwgMC42LCAtMC42KTtcbiAgICBjb25zdCBleWVCbHVlTGVmdFBvc1kgPSB0aGlzLm5vcm1hbGl6ZSh5VGFyZ2V0LCAtMjAwLCAyMDAsIDAuNiwgLTAuNik7XG5cbiAgICBjb25zdCBleWVCcm93UmlnaHRQb3NZID0gdGhpcy5ub3JtYWxpemUoeFRhcmdldCwgLTIwMCwgMjAwLCAtMSwgMC44KTtcbiAgICBjb25zdCBleWVCcm93TGVmdFBvc1kgPSB0aGlzLm5vcm1hbGl6ZSh4VGFyZ2V0LCAtMjAwLCAyMDAsIC0xLCAwLjgpO1xuXG4gICAgdGhpcy5tb3VzdGFjaGUucG9zaXRpb24ueSA9IE1hdGguY29zKERhdGUubm93KCkgKiAwLjAxKSAqIGRpc3RhbmNlIC8gNDtcbiAgICB0aGlzLm1vdXN0YWNoZS5yb3RhdGlvbi56ID0gTWF0aC5zaW4oRGF0ZS5ub3coKSAqIDAuMDEpICogTWF0aC5QSSAqIDAuMDE7XG5cbiAgICB0aGlzLm1lc2gucm90YXRpb24ueSA9IE1hdGguc2luKERhdGUubm93KCkgKiAwLjAwMikgKiBNYXRoLlBJICogMC4wNTtcbiAgICB0aGlzLnVwZGF0ZUJvZHkoMTAsIGV5ZUJsdWVSaWdodFBvc1gsIGV5ZUJsdWVMZWZ0UG9zWCwgZXllQmx1ZVJpZ2h0UG9zWSwgZXllQmx1ZUxlZnRQb3NZLCBleWVCcm93UmlnaHRQb3NZLCBleWVCcm93TGVmdFBvc1kpO1xuICB9XG5cbiAgQmVhcmQoKSB7XG4gICAgbGV0IGJlYXJkR2VvbU1lcmdlZCA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xuXG4gICAgbGV0IGJlYXJkMUdlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMiwgMTAsIDE2KTtcblxuICAgIGxldCBiZWFyZDEgPSBuZXcgVEhSRUUuTWVzaChiZWFyZDFHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGJlYXJkMS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbig5LCAwLCAwKSk7XG4gICAgYmVhcmQxLnVwZGF0ZU1hdHJpeCgpO1xuICAgIGJlYXJkR2VvbU1lcmdlZC5tZXJnZShiZWFyZDEuZ2VvbWV0cnksIGJlYXJkMS5tYXRyaXgpO1xuXG4gICAgbGV0IGJlYXJkMiA9IG5ldyBUSFJFRS5NZXNoKGJlYXJkMUdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgYmVhcmQyLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDcsIC0yLCAyKSk7XG4gICAgYmVhcmQyLnNjYWxlLnogPSAwLjg7XG4gICAgYmVhcmQyLnVwZGF0ZU1hdHJpeCgpO1xuICAgIGJlYXJkR2VvbU1lcmdlZC5tZXJnZShiZWFyZDIuZ2VvbWV0cnksIGJlYXJkMi5tYXRyaXgpO1xuXG4gICAgbGV0IGJlYXJkMyA9IGJlYXJkMS5jbG9uZSgpO1xuICAgIGJlYXJkMy5wb3NpdGlvbi54ID0gLWJlYXJkMS5wb3NpdGlvbi54O1xuICAgIGJlYXJkMy51cGRhdGVNYXRyaXgoKTtcbiAgICBiZWFyZEdlb21NZXJnZWQubWVyZ2UoYmVhcmQzLmdlb21ldHJ5LCBiZWFyZDMubWF0cml4KTtcblxuICAgIGxldCBiZWFyZDQgPSBiZWFyZDIuY2xvbmUoKTtcbiAgICBiZWFyZDQucG9zaXRpb24ueCA9IC1iZWFyZDIucG9zaXRpb24ueDtcbiAgICBiZWFyZDQudXBkYXRlTWF0cml4KCk7XG4gICAgYmVhcmRHZW9tTWVyZ2VkLm1lcmdlKGJlYXJkNC5nZW9tZXRyeSwgYmVhcmQ0Lm1hdHJpeCk7XG5cbiAgICBsZXQgYmVhcmQyR2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgzLCAxNCwgMTApO1xuICAgIGJlYXJkMkdlb20udmVydGljZXNbMl0ueiAtPSAyO1xuICAgIGJlYXJkMkdlb20udmVydGljZXNbN10ueiAtPSAyO1xuXG4gICAgbGV0IGJlYXJkNSA9IG5ldyBUSFJFRS5NZXNoKGJlYXJkMkdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgYmVhcmQ1LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDUsIC01LCA0KSk7XG4gICAgYmVhcmQ1LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGJlYXJkR2VvbU1lcmdlZC5tZXJnZShiZWFyZDUuZ2VvbWV0cnksIGJlYXJkNS5tYXRyaXgpO1xuXG4gICAgbGV0IGJlYXJkM0dlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMi41LCAxNCwgMTApO1xuICAgIGJlYXJkM0dlb20udmVydGljZXNbMl0ueiAtPSAyO1xuICAgIGJlYXJkM0dlb20udmVydGljZXNbN10ueiAtPSAyO1xuXG4gICAgbGV0IGJlYXJkNiA9IG5ldyBUSFJFRS5NZXNoKGJlYXJkM0dlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgYmVhcmQ2LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDIuNSwgLTYsIDYpKTtcbiAgICBiZWFyZDYudXBkYXRlTWF0cml4KCk7XG4gICAgYmVhcmRHZW9tTWVyZ2VkLm1lcmdlKGJlYXJkNi5nZW9tZXRyeSwgYmVhcmQ2Lm1hdHJpeCk7XG5cbiAgICBsZXQgYmVhcmQ3ID0gYmVhcmQ1LmNsb25lKCk7XG4gICAgYmVhcmQ3LnBvc2l0aW9uLnggPSAtYmVhcmQ1LnBvc2l0aW9uLng7XG4gICAgYmVhcmQ3LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGJlYXJkR2VvbU1lcmdlZC5tZXJnZShiZWFyZDcuZ2VvbWV0cnksIGJlYXJkNy5tYXRyaXgpO1xuXG4gICAgbGV0IGJlYXJkOCA9IGJlYXJkNi5jbG9uZSgpO1xuICAgIGJlYXJkOC5wb3NpdGlvbi54ID0gLWJlYXJkNi5wb3NpdGlvbi54O1xuICAgIGJlYXJkOC51cGRhdGVNYXRyaXgoKTtcbiAgICBiZWFyZEdlb21NZXJnZWQubWVyZ2UoYmVhcmQ4Lmdlb21ldHJ5LCBiZWFyZDgubWF0cml4KTtcblxuICAgIGxldCBiZWFyZDRHZW9tID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDIuNSwgMTQuNSwgMTApO1xuICAgIGJlYXJkNEdlb20udmVydGljZXNbMl0ueiAtPSAxO1xuICAgIGJlYXJkNEdlb20udmVydGljZXNbN10ueiAtPSAxO1xuXG4gICAgbGV0IGJlYXJkOSA9IG5ldyBUSFJFRS5NZXNoKGJlYXJkNEdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgYmVhcmQ5LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDAsIC03LCA1Ljc1KSk7XG4gICAgYmVhcmQ5LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGJlYXJkR2VvbU1lcmdlZC5tZXJnZShiZWFyZDkuZ2VvbWV0cnksIGJlYXJkOS5tYXRyaXgpO1xuXG4gICAgbGV0IGJlYXJkNUdlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoNCwgOCwgOCk7XG4gICAgbGV0IGJlYXJkMTAgPSBuZXcgVEhSRUUuTWVzaChiZWFyZDVHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGJlYXJkMTAuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oLTYsIC0xLCAtMikpO1xuICAgIGJlYXJkMTAudXBkYXRlTWF0cml4KCk7XG4gICAgYmVhcmRHZW9tTWVyZ2VkLm1lcmdlKGJlYXJkMTAuZ2VvbWV0cnksIGJlYXJkMTAubWF0cml4KTtcblxuICAgIGxldCBiZWFyZDExID0gbmV3IFRIUkVFLk1lc2goYmVhcmQ1R2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBiZWFyZDExLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDAsIC01LCAtMikpO1xuICAgIGJlYXJkMTEudXBkYXRlTWF0cml4KCk7XG4gICAgYmVhcmRHZW9tTWVyZ2VkLm1lcmdlKGJlYXJkMTEuZ2VvbWV0cnksIGJlYXJkMTEubWF0cml4KTtcblxuICAgIGxldCBiZWFyZE1lcmdlZCA9IG5ldyBUSFJFRS5NZXNoKGJlYXJkR2VvbU1lcmdlZCwgTWF0LndoaXRlTWF0KTtcbiAgICBiZWFyZE1lcmdlZC5jYXN0U2hhZG93ID0gdHJ1ZTtcbiAgICBiZWFyZE1lcmdlZC5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcblxuICAgIGxldCBtb3V0aEdlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMTAsIDQsIDEpO1xuICAgIGxldCBtb3V0aCA9IG5ldyBUSFJFRS5NZXNoKG1vdXRoR2VvbSwgTWF0LmJsYWNrTWF0KTtcbiAgICBtb3V0aC5wb3NpdGlvbi5zZXQoMCwgMiwgOCk7XG4gICAgbW91dGguY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIG1vdXRoLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xuXG4gICAgbGV0IHRlZXRoR2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgxMCwgMSwgMSk7XG4gICAgbGV0IHRlZXRoID0gbmV3IFRIUkVFLk1lc2godGVldGhHZW9tLCBNYXQudGVldGhNYXQpO1xuICAgIHRlZXRoLnBvc2l0aW9uLnNldCgwLCAwLjUsIDAuMSk7XG4gICAgdGVldGguY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIHRlZXRoLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xuICAgIG1vdXRoLmFkZCh0ZWV0aClcblxuICAgIHRoaXMuYmVhcmQuYWRkKGJlYXJkTWVyZ2VkLCBtb3V0aCk7XG5cbiAgICBsZXQgbW91c3RhY2hlR2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgxNCwgMywgMywgMyk7XG4gICAgbW91c3RhY2hlR2VvbS52ZXJ0aWNlc1swXS55IC09IDI7XG4gICAgbW91c3RhY2hlR2VvbS52ZXJ0aWNlc1sxXS55IC09IDI7XG4gICAgbW91c3RhY2hlR2VvbS52ZXJ0aWNlc1syXS55IC09IDI7XG4gICAgbW91c3RhY2hlR2VvbS52ZXJ0aWNlc1szXS55IC09IDI7XG4gICAgbW91c3RhY2hlR2VvbS52ZXJ0aWNlc1s0XS55IC09IDI7XG4gICAgbW91c3RhY2hlR2VvbS52ZXJ0aWNlc1s1XS55IC09IDI7XG4gICAgbW91c3RhY2hlR2VvbS52ZXJ0aWNlc1s2XS55IC09IDI7XG4gICAgbW91c3RhY2hlR2VvbS52ZXJ0aWNlc1s3XS55IC09IDI7XG4gICAgbW91c3RhY2hlR2VvbS52ZXJ0aWNlc1s4XS54IC09IDE7XG4gICAgbW91c3RhY2hlR2VvbS52ZXJ0aWNlc1s5XS54ICs9IDE7XG5cbiAgICBtb3VzdGFjaGVHZW9tLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDAsIDQsIDApKTtcbiAgICB0aGlzLm1vdXN0YWNoZSA9IG5ldyBUSFJFRS5NZXNoKG1vdXN0YWNoZUdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgdGhpcy5tb3VzdGFjaGUuY2FzdFNoYWRvdyA9IHRydWU7XG4gICAgdGhpcy5tb3VzdGFjaGUucmVjZWl2ZVNoYWRvdyA9IHRydWU7XG5cbiAgICB0aGlzLm1vdXN0YWNoZS5wb3NpdGlvbi5zZXQoMCwgMCwgOSk7XG4gICAgdGhpcy5iZWFyZC5hZGQodGhpcy5tb3VzdGFjaGUpO1xuICB9XG5cbiAgR2xhc3NlcygpIHtcblxuICAgIHRoaXMuZ2xhc3NlcyA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgIHRoaXMuZ2xhc3Nlcy5wb3NpdGlvbi5zZXQoMCwgMCwgOSk7XG4gICAgdGhpcy5oZWFkLmFkZCh0aGlzLmdsYXNzZXMpO1xuICAgIGxldCBnbGFzc2VzTWF0ID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHtjb2xvcjogQ29sb3JzLmdsYXNzZXMsIGZsYXRTaGFkaW5nOiB0cnVlfSk7XG5cbiAgICBsZXQgZnJhbWVHZW9tTWVyZ2VkID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XG5cbiAgICBsZXQgZnJhbWVPdXRlckdlb20gPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeSgzLCAzLCAwLjUsIDMyKVxuICAgIGxldCBmcmFtZUlubmVyR2VvbSA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KDIuNywgMi43LCAwLjUsIDMyKVxuXG4gICAgZnJhbWVPdXRlckdlb20uYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25YKC1NYXRoLlBJIC8gMikpO1xuICAgIGZyYW1lSW5uZXJHZW9tLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWCgtTWF0aC5QSSAvIDIpKTtcblxuICAgIGxldCBmcmFtZUJTUCA9IG5ldyBUaHJlZUJTUChmcmFtZU91dGVyR2VvbSk7XG4gICAgbGV0IGZyYW1lQ3V0QlNQID0gbmV3IFRocmVlQlNQKGZyYW1lSW5uZXJHZW9tKTtcblxuICAgIGxldCBmcmFtZWludGVyc2VjdGlvbkJTUCA9IGZyYW1lQlNQLnN1YnRyYWN0KGZyYW1lQ3V0QlNQKTtcbiAgICBsZXQgZnJhbWVMZWZ0ID0gZnJhbWVpbnRlcnNlY3Rpb25CU1AudG9NZXNoKGdsYXNzZXNNYXQpO1xuXG4gICAgZnJhbWVMZWZ0LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDQsIDMsIDApKTtcbiAgICBmcmFtZUxlZnQudXBkYXRlTWF0cml4KCk7XG4gICAgZnJhbWVHZW9tTWVyZ2VkLm1lcmdlKGZyYW1lTGVmdC5nZW9tZXRyeSwgZnJhbWVMZWZ0Lm1hdHJpeCk7XG5cbiAgICBsZXQgZnJhbWVSaWdodCA9IGZyYW1lTGVmdC5jbG9uZSgpO1xuICAgIGZyYW1lUmlnaHQuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25aKE1hdGguUEkgLyAzMCkpO1xuICAgIGZyYW1lUmlnaHQuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oLTcuNSwgLTAuMjUsIDApKTtcbiAgICBmcmFtZVJpZ2h0LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGZyYW1lR2VvbU1lcmdlZC5tZXJnZShmcmFtZVJpZ2h0Lmdlb21ldHJ5LCBmcmFtZVJpZ2h0Lm1hdHJpeCk7XG5cbiAgICBsZXQgZnJhbWVNaWRHZW9tID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDIsIC4zLCAuNSk7XG4gICAgbGV0IGZyYW1lTWlkID0gbmV3IFRIUkVFLk1lc2goZnJhbWVNaWRHZW9tLCBnbGFzc2VzTWF0KTtcbiAgICBmcmFtZU1pZC5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigwLCAzLjMsIC0wLjMpKTtcbiAgICBmcmFtZU1pZC51cGRhdGVNYXRyaXgoKTtcbiAgICBmcmFtZUdlb21NZXJnZWQubWVyZ2UoZnJhbWVNaWQuZ2VvbWV0cnksIGZyYW1lTWlkLm1hdHJpeCk7XG5cbiAgICBsZXQgZnJhbWVFbmRHZW9tID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDEuNSwgLjUsIDEpO1xuICAgIGxldCBmcmFtZUVuZFJpZ2h0ID0gbmV3IFRIUkVFLk1lc2goZnJhbWVFbmRHZW9tLCBnbGFzc2VzTWF0KTtcbiAgICBmcmFtZUVuZFJpZ2h0LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDcuNSwgMywgMCkpO1xuICAgIGZyYW1lRW5kUmlnaHQudXBkYXRlTWF0cml4KCk7XG4gICAgZnJhbWVHZW9tTWVyZ2VkLm1lcmdlKGZyYW1lRW5kUmlnaHQuZ2VvbWV0cnksIGZyYW1lRW5kUmlnaHQubWF0cml4KTtcblxuICAgIGxldCBmcmFtZUVuZExlZnQgPSBmcmFtZUVuZFJpZ2h0LmNsb25lKCk7XG4gICAgZnJhbWVFbmRMZWZ0LnBvc2l0aW9uLnggPSAtZnJhbWVFbmRSaWdodC5wb3NpdGlvbi54O1xuICAgIGZyYW1lRW5kTGVmdC51cGRhdGVNYXRyaXgoKTtcbiAgICBmcmFtZUdlb21NZXJnZWQubWVyZ2UoZnJhbWVFbmRMZWZ0Lmdlb21ldHJ5LCBmcmFtZUVuZExlZnQubWF0cml4KTtcblxuICAgIGxldCBmcmFtZVNwb2tlR2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgxLCAwLjUsIDEyKTtcbiAgICBsZXQgZnJhbWVTcG9rZVJpZ2h0ID0gbmV3IFRIUkVFLk1lc2goZnJhbWVTcG9rZUdlb20sIGdsYXNzZXNNYXQpO1xuICAgIGZyYW1lU3Bva2VSaWdodC5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbig4LCAzLCAtNS41KSk7XG4gICAgZnJhbWVTcG9rZVJpZ2h0LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGZyYW1lR2VvbU1lcmdlZC5tZXJnZShmcmFtZVNwb2tlUmlnaHQuZ2VvbWV0cnksIGZyYW1lU3Bva2VSaWdodC5tYXRyaXgpO1xuXG4gICAgbGV0IGZyYW1lU3Bva2VMZWZ0ID0gZnJhbWVTcG9rZVJpZ2h0LmNsb25lKCk7XG4gICAgZnJhbWVTcG9rZUxlZnQucG9zaXRpb24ueCA9IC1mcmFtZVNwb2tlUmlnaHQucG9zaXRpb24ueDtcbiAgICBmcmFtZVNwb2tlTGVmdC51cGRhdGVNYXRyaXgoKTtcbiAgICBmcmFtZUdlb21NZXJnZWQubWVyZ2UoZnJhbWVTcG9rZUxlZnQuZ2VvbWV0cnksIGZyYW1lU3Bva2VMZWZ0Lm1hdHJpeCk7XG5cbiAgICBsZXQgZnJhbWVNZXJnZWQgPSBuZXcgVEhSRUUuTWVzaChmcmFtZUdlb21NZXJnZWQsIGdsYXNzZXNNYXQpO1xuICAgIGZyYW1lTWVyZ2VkLmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICBmcmFtZU1lcmdlZC5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcblxuICAgIHRoaXMuZ2xhc3Nlcy5hZGQoZnJhbWVNZXJnZWQpO1xuXG4gIH1cblxuICBIYWlyKCkge1xuXG4gICAgdGhpcy5oYWlyID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgdGhpcy5oYWlyLnBvc2l0aW9uLnNldCgwLCA5LCAwKTtcbiAgICB0aGlzLmhlYWQuYWRkKHRoaXMuaGFpcik7XG5cbiAgICBsZXQgaGFpckdlb21NZXJnZWQgPSBuZXcgVEhSRUUuR2VvbWV0cnkoKTtcblxuICAgIGxldCBoYWlyRmxhdEdlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMTAsIDIsIDE4KTtcblxuICAgIGxldCBoYWlyMSA9IG5ldyBUSFJFRS5NZXNoKGhhaXJGbGF0R2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBoYWlyMS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblooLU1hdGguUEkgLyA0MCkpO1xuICAgIGhhaXIxLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKC00LCAtMC41LCAwKSk7XG4gICAgaGFpcjEudXBkYXRlTWF0cml4KCk7XG4gICAgaGFpckdlb21NZXJnZWQubWVyZ2UoaGFpcjEuZ2VvbWV0cnksIGhhaXIxLm1hdHJpeCk7XG5cbiAgICBsZXQgaGFpcjIgPSBuZXcgVEhSRUUuTWVzaChoYWlyRmxhdEdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgaGFpcjIuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25aKC1NYXRoLlBJIC8gMTApKTtcbiAgICBoYWlyMi5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigtMiwgMSwgMCkpO1xuICAgIGhhaXIyLnVwZGF0ZU1hdHJpeCgpO1xuICAgIGhhaXJHZW9tTWVyZ2VkLm1lcmdlKGhhaXIyLmdlb21ldHJ5LCBoYWlyMi5tYXRyaXgpO1xuXG4gICAgbGV0IGhhaXIzID0gbmV3IFRIUkVFLk1lc2goaGFpckZsYXRHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGhhaXIzLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWigtTWF0aC5QSSAvIDUpKTtcbiAgICBoYWlyMy5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigyLCAxLCAwKSk7XG4gICAgaGFpcjMudXBkYXRlTWF0cml4KCk7XG4gICAgaGFpckdlb21NZXJnZWQubWVyZ2UoaGFpcjMuZ2VvbWV0cnksIGhhaXIzLm1hdHJpeCk7XG5cbiAgICBsZXQgaGFpcjQgPSBuZXcgVEhSRUUuTWVzaChoYWlyRmxhdEdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgaGFpcjQuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25aKC1NYXRoLlBJIC8gNCkpO1xuICAgIGhhaXI0LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDYsIDAsIDApKTtcbiAgICBoYWlyNC51cGRhdGVNYXRyaXgoKTtcbiAgICBoYWlyR2VvbU1lcmdlZC5tZXJnZShoYWlyNC5nZW9tZXRyeSwgaGFpcjQubWF0cml4KTtcblxuICAgIGxldCBoYWlyNiA9IG5ldyBUSFJFRS5NZXNoKGhhaXJGbGF0R2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBoYWlyNi5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblooLU1hdGguUEkgLyAtMykpO1xuICAgIGhhaXI2LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKC03Ljc1LCAtLjUsIDApKTtcbiAgICBoYWlyNi51cGRhdGVNYXRyaXgoKTtcbiAgICBoYWlyR2VvbU1lcmdlZC5tZXJnZShoYWlyNi5nZW9tZXRyeSwgaGFpcjYubWF0cml4KTtcblxuICAgIGxldCBoYWlyRmxhdEJhY2tHZW9tID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDE4LCA3LCA2KTtcbiAgICBoYWlyRmxhdEJhY2tHZW9tLnZlcnRpY2VzWzBdLnggLT0gMTtcbiAgICBoYWlyRmxhdEJhY2tHZW9tLnZlcnRpY2VzWzFdLnggLT0gMTtcbiAgICBoYWlyRmxhdEJhY2tHZW9tLnZlcnRpY2VzWzRdLnggKz0gMTtcbiAgICBoYWlyRmxhdEJhY2tHZW9tLnZlcnRpY2VzWzVdLnggKz0gMTtcblxuICAgIGxldCBoYWlyNSA9IG5ldyBUSFJFRS5NZXNoKGhhaXJGbGF0QmFja0dlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgaGFpcjUuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oMCwgLTQuNSwgLTYpKTtcbiAgICBoYWlyNS51cGRhdGVNYXRyaXgoKTtcbiAgICBoYWlyR2VvbU1lcmdlZC5tZXJnZShoYWlyNS5nZW9tZXRyeSwgaGFpcjUubWF0cml4KTtcblxuICAgIGxldCBoYWlyTWVyZ2VkID0gbmV3IFRIUkVFLk1lc2goaGFpckdlb21NZXJnZWQsIE1hdC53aGl0ZU1hdCk7XG4gICAgaGFpck1lcmdlZC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgaGFpck1lcmdlZC5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcblxuICAgIHRoaXMuaGFpci5hZGQoaGFpck1lcmdlZCk7XG5cbiAgfVxuXG4gIEV5ZXMoKSB7XG5cbiAgICB0aGlzLmV5ZXMgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICB0aGlzLmV5ZXMucG9zaXRpb24uc2V0KDAsIDMsIDkpO1xuICAgIHRoaXMuaGVhZC5hZGQodGhpcy5leWVzKTtcblxuICAgIGxldCBleWVXaGl0ZUdlb20gPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSgyLjUsIDIuNSk7XG5cbiAgICBsZXQgZXllV2hpdGVSaWdodCA9IG5ldyBUSFJFRS5NZXNoKGV5ZVdoaXRlR2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBleWVXaGl0ZVJpZ2h0LnBvc2l0aW9uLnNldCgtMy43NSwgMCwgMCk7XG4gICAgZXllV2hpdGVSaWdodC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgZXllV2hpdGVSaWdodC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICBsZXQgZXllQmx1ZUdlb20gPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSgxLjUsIDEuNSk7XG5cbiAgICBsZXQgZXllTWF0ID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHtjb2xvcjogQ29sb3JzLmV5ZSwgZmxhdFNoYWRpbmc6IHRydWV9KTtcblxuICAgIHRoaXMuZXllQmx1ZVJpZ2h0ID0gbmV3IFRIUkVFLk1lc2goZXllQmx1ZUdlb20sIGV5ZU1hdCk7XG4gICAgdGhpcy5leWVCbHVlUmlnaHQucG9zaXRpb24uc2V0KDAsIDAsIC4wMSk7XG4gICAgdGhpcy5leWVCbHVlUmlnaHQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIHRoaXMuZXllQmx1ZVJpZ2h0LnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIGV5ZVdoaXRlUmlnaHQuYWRkKHRoaXMuZXllQmx1ZVJpZ2h0KTtcblxuICAgIGxldCBleWVQdXBpbEdlb20gPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSgxLCAxKTtcblxuICAgIHRoaXMuZXllUHVwaWxSaWdodCA9IG5ldyBUSFJFRS5NZXNoKGV5ZVB1cGlsR2VvbSwgTWF0LmJsYWNrTWF0KTtcbiAgICB0aGlzLmV5ZVB1cGlsUmlnaHQucG9zaXRpb24uc2V0KDAsIDAsIC4wMik7XG4gICAgdGhpcy5leWVQdXBpbFJpZ2h0LmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICB0aGlzLmV5ZVB1cGlsUmlnaHQucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgdGhpcy5leWVCbHVlUmlnaHQuYWRkKHRoaXMuZXllUHVwaWxSaWdodCk7XG5cbiAgICBsZXQgZXllV2hpdGVMZWZ0ID0gbmV3IFRIUkVFLk1lc2goZXllV2hpdGVHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGV5ZVdoaXRlTGVmdC5wb3NpdGlvbi5zZXQoMy43NSwgMCwgMCk7XG4gICAgZXllV2hpdGVMZWZ0LmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICBleWVXaGl0ZUxlZnQucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgdGhpcy5leWVCbHVlTGVmdCA9IG5ldyBUSFJFRS5NZXNoKGV5ZUJsdWVHZW9tLCBleWVNYXQpO1xuICAgIHRoaXMuZXllQmx1ZUxlZnQucG9zaXRpb24uc2V0KDAsIDAsIC4wMSk7XG4gICAgdGhpcy5leWVCbHVlTGVmdC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgdGhpcy5leWVCbHVlTGVmdC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICBleWVXaGl0ZUxlZnQuYWRkKHRoaXMuZXllQmx1ZUxlZnQpO1xuXG4gICAgdGhpcy5leWVQdXBpbExlZnQgPSBuZXcgVEhSRUUuTWVzaChleWVQdXBpbEdlb20sIE1hdC5ibGFja01hdCk7XG4gICAgdGhpcy5leWVQdXBpbExlZnQucG9zaXRpb24uc2V0KDAsIDAsIC4wMik7XG4gICAgdGhpcy5leWVQdXBpbExlZnQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIHRoaXMuZXllUHVwaWxMZWZ0LnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIHRoaXMuZXllQmx1ZUxlZnQuYWRkKHRoaXMuZXllUHVwaWxMZWZ0KTtcblxuICAgIHRoaXMuZXllcy5hZGQoZXllV2hpdGVSaWdodCwgZXllV2hpdGVMZWZ0KTtcbiAgfVxuXG4gIEV5ZUJyb3dzKCkge1xuICAgIHRoaXMuZXllQnJvd3MgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICB0aGlzLmV5ZUJyb3dzLnBvc2l0aW9uLnNldCgwLCA2LCA4KTtcbiAgICB0aGlzLmhlYWQuYWRkKHRoaXMuZXllQnJvd3MpO1xuXG4gICAgbGV0IGV5ZUJyb3dHZW9tID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDQsIDEsIDEpO1xuXG4gICAgdGhpcy5leWVCcm93UmlnaHQgPSBuZXcgVEhSRUUuTWVzaChleWVCcm93R2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICB0aGlzLmV5ZUJyb3dSaWdodC5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblooTWF0aC5QSSAvIDQ1KSk7XG4gICAgdGhpcy5leWVCcm93UmlnaHQucG9zaXRpb24uc2V0KC0zLjc1LCAwLCAwKTtcbiAgICB0aGlzLmV5ZUJyb3dSaWdodC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgdGhpcy5leWVCcm93UmlnaHQucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgdGhpcy5leWVCcm93TGVmdCA9IG5ldyBUSFJFRS5NZXNoKGV5ZUJyb3dHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIHRoaXMuZXllQnJvd0xlZnQuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25aKC1NYXRoLlBJIC8gNDUpKTtcbiAgICB0aGlzLmV5ZUJyb3dMZWZ0LnBvc2l0aW9uLnNldCgzLjc1LCAwLCAwKTtcbiAgICB0aGlzLmV5ZUJyb3dMZWZ0LmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICB0aGlzLmV5ZUJyb3dMZWZ0LnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIHRoaXMuZXllQnJvd3MuYWRkKHRoaXMuZXllQnJvd1JpZ2h0LCB0aGlzLmV5ZUJyb3dMZWZ0KTtcbiAgfVxuXG4gIEhhdCgpIHtcbiAgICB0aGlzLmhhdCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgIHRoaXMuaGF0LnBvc2l0aW9uLnNldCgtMC4yLCAxMSwgMi40KTtcbiAgICB0aGlzLmhlYWQuYWRkKHRoaXMuaGF0KTtcblxuICAgIGxldCBoYXRNYXQgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe2NvbG9yOiBDb2xvcnMuaGF0LCBmbGF0U2hhZGluZzogdHJ1ZX0pO1xuXG4gICAgbGV0IGJhbmRHZW9tID0gbmV3IFRIUkVFLlRvcnVzR2VvbWV0cnkoOSwgMiwgMTYsIDEwMCk7XG4gICAgbGV0IGJpZ0NvbmVHZW9tID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoMSwgMTEsIDEyLCAxNSk7XG4gICAgbGV0IHNtYWxsQ29uZUdlb20gPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeSgwLjgsIDMsIDksIDMyKTtcbiAgICBsZXQgaGF0RGluZ2xlR2VvbSA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeSgxLjUsIDgsIDgpO1xuXG4gICAgdGhpcy5iYW5kID0gbmV3IFRIUkVFLk1lc2goYmFuZEdlb20sIE1hdC50ZWV0aE1hdCk7XG4gICAgdGhpcy5iYW5kLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWChNYXRoLlBJIC8gMikpO1xuICAgIHRoaXMuYmFuZC5wb3NpdGlvbi5zZXQoMCwgMCwgMCk7XG4gICAgdGhpcy5iYW5kLmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICB0aGlzLmJhbmQucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgdGhpcy5iaWdDb25lID0gbmV3IFRIUkVFLk1lc2goYmlnQ29uZUdlb20sIGhhdE1hdCk7XG4gICAgdGhpcy5iaWdDb25lLnBvc2l0aW9uLnNldCgwLCA2LCAwKTtcbiAgICB0aGlzLmJpZ0NvbmUuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIHRoaXMuYmlnQ29uZS5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICB0aGlzLnNtYWxsQ29uZSA9IG5ldyBUSFJFRS5NZXNoKHNtYWxsQ29uZUdlb20sIGhhdE1hdCk7XG4gICAgdGhpcy5zbWFsbENvbmUuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25YKE1hdGguUEkgLyAyKSk7XG4gICAgdGhpcy5zbWFsbENvbmUuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25ZKE1hdGguUEkgLyAyKSk7XG4gICAgdGhpcy5zbWFsbENvbmUuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25aKE1hdGguUEkgLyAtOCkpO1xuICAgIHRoaXMuc21hbGxDb25lLnBvc2l0aW9uLnNldCg0LCA3LjgsIC0xKTtcbiAgICB0aGlzLnNtYWxsQ29uZS5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgdGhpcy5zbWFsbENvbmUucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgdGhpcy5oYXREaW5nbGUgPSBuZXcgVEhSRUUuTWVzaChoYXREaW5nbGVHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIHRoaXMuaGF0RGluZ2xlLnBvc2l0aW9uLnNldCg5LCA1LjUsIC0xKTtcbiAgICB0aGlzLmhhdERpbmdsZS5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgdGhpcy5oYXREaW5nbGUucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgdGhpcy5oYXQuYWRkKHRoaXMuYmFuZCwgdGhpcy5iaWdDb25lLCB0aGlzLnNtYWxsQ29uZSwgdGhpcy5oYXREaW5nbGUpO1xuICB9XG5cbiAgRnJlY2tsZXMoKSB7XG4gICAgdGhpcy5mcmVja2xlcyA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgIHRoaXMuZnJlY2tsZXMucG9zaXRpb24uc2V0KDAsIDAsIDgpO1xuICAgIHRoaXMuaGVhZC5hZGQodGhpcy5mcmVja2xlcyk7XG5cbiAgICBsZXQgZnJlY2tsZXNNYXQgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy5mcmVja2xlcywgZmxhdFNoYWRpbmc6IHRydWV9KTtcbiAgICBsZXQgZnJlY2tsZXNHZW9tTWVyZ2VkID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XG5cbiAgICBsZXQgZnJlY2tsZXNHZW9tID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoMC41LCAwLjUpO1xuXG4gICAgbGV0IGZyZWNrbGUxID0gbmV3IFRIUkVFLk1lc2goZnJlY2tsZXNHZW9tLCBmcmVja2xlc01hdCk7XG4gICAgZnJlY2tsZTEuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oLTUsIDAsIDAuMDEpKTtcbiAgICBmcmVja2xlMS51cGRhdGVNYXRyaXgoKTtcbiAgICBmcmVja2xlc0dlb21NZXJnZWQubWVyZ2UoZnJlY2tsZTEuZ2VvbWV0cnksIGZyZWNrbGUxLm1hdHJpeCk7XG5cbiAgICBsZXQgZnJlY2tsZTIgPSBmcmVja2xlMS5jbG9uZSgpO1xuICAgIGZyZWNrbGUyLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKC0wLjUsIC0xLCAwKSk7XG4gICAgZnJlY2tsZTIudXBkYXRlTWF0cml4KCk7XG4gICAgZnJlY2tsZXNHZW9tTWVyZ2VkLm1lcmdlKGZyZWNrbGUyLmdlb21ldHJ5LCBmcmVja2xlMi5tYXRyaXgpO1xuXG4gICAgbGV0IGZyZWNrbGUzID0gZnJlY2tsZTEuY2xvbmUoKTtcbiAgICBmcmVja2xlMy5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigxLCAtMC41LCAwKSk7XG4gICAgZnJlY2tsZTMudXBkYXRlTWF0cml4KCk7XG4gICAgZnJlY2tsZXNHZW9tTWVyZ2VkLm1lcmdlKGZyZWNrbGUzLmdlb21ldHJ5LCBmcmVja2xlMy5tYXRyaXgpO1xuXG4gICAgbGV0IGZyZWNrbGU0ID0gZnJlY2tsZTEuY2xvbmUoKTtcbiAgICBmcmVja2xlNC5wb3NpdGlvbi54ID0gLWZyZWNrbGUxLnBvc2l0aW9uLng7XG4gICAgZnJlY2tsZTQudXBkYXRlTWF0cml4KCk7XG4gICAgZnJlY2tsZXNHZW9tTWVyZ2VkLm1lcmdlKGZyZWNrbGU0Lmdlb21ldHJ5LCBmcmVja2xlNC5tYXRyaXgpO1xuICAgIGxldCBmcmVja2xlNSA9IGZyZWNrbGUyLmNsb25lKCk7XG4gICAgZnJlY2tsZTUucG9zaXRpb24ueCA9IC1mcmVja2xlMi5wb3NpdGlvbi54O1xuICAgIGZyZWNrbGU1LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGZyZWNrbGVzR2VvbU1lcmdlZC5tZXJnZShmcmVja2xlNS5nZW9tZXRyeSwgZnJlY2tsZTUubWF0cml4KTtcbiAgICBsZXQgZnJlY2tsZTYgPSBmcmVja2xlMy5jbG9uZSgpO1xuICAgIGZyZWNrbGU2LnBvc2l0aW9uLnggPSAtZnJlY2tsZTMucG9zaXRpb24ueDtcbiAgICBmcmVja2xlNi51cGRhdGVNYXRyaXgoKTtcbiAgICBmcmVja2xlc0dlb21NZXJnZWQubWVyZ2UoZnJlY2tsZTYuZ2VvbWV0cnksIGZyZWNrbGU2Lm1hdHJpeCk7XG5cbiAgICBsZXQgZnJlY2tsZWRNZXJnZWQgPSBuZXcgVEhSRUUuTWVzaChmcmVja2xlc0dlb21NZXJnZWQsIGZyZWNrbGVzTWF0KTtcbiAgICBmcmVja2xlZE1lcmdlZC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgZnJlY2tsZWRNZXJnZWQucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgdGhpcy5mcmVja2xlcy5hZGQoZnJlY2tsZWRNZXJnZWQpO1xuICB9XG5cbiAgRmVhdHVyZXMoKSB7XG4gICAgbGV0IGVhckdlb20gPSBuZXcgVEhSRUUuQm94QnVmZmVyR2VvbWV0cnkoMS41LCAzLCAxLjUpO1xuICAgIGxldCBza2luTWF0ID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoe2NvbG9yOiBDb2xvcnMuc2tpbiwgZmxhdFNoYWRpbmc6IHRydWV9KTtcbiAgICBsZXQgZWFyUmlnaHQgPSBuZXcgVEhSRUUuTWVzaChlYXJHZW9tLCBza2luTWF0KTtcbiAgICBlYXJSaWdodC5wb3NpdGlvbi5zZXQoLTguNSwgMSwgMyk7XG4gICAgZWFyUmlnaHQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIGVhclJpZ2h0LnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIGxldCBlYXJMZWZ0ID0gbmV3IFRIUkVFLk1lc2goZWFyR2VvbSwgc2tpbk1hdCk7XG4gICAgZWFyTGVmdC5wb3NpdGlvbi5zZXQoOC41LCAxLCAzKTtcbiAgICBlYXJMZWZ0LmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICBlYXJMZWZ0LnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIGxldCBub3NlR2VvbSA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KDEsIDIsIDQsIDQpO1xuICAgIGxldCBub3NlID0gbmV3IFRIUkVFLk1lc2gobm9zZUdlb20sIHNraW5NYXQpO1xuICAgIG5vc2Uuc2NhbGUuc2V0KC43NSwgMSwgMS4zKTtcbiAgICBub3NlLnBvc2l0aW9uLnNldCgwLCAxLCA4KTtcbiAgICBub3NlLmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICBub3NlLnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIHRoaXMuaGVhZC5hZGQoZWFyUmlnaHQsIGVhckxlZnQsIG5vc2UpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY2xhc3Nlcy9IZWFkLmpzIiwiaW1wb3J0IENvbG9ycyBmcm9tICcuL2NvbG9ycyc7XG5jb25zdCBNYXRlcmlhbHMgPSB7XG4gIFwid2hpdGVNYXRcIjogbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoe2NvbG9yOiBDb2xvcnMud2hpdGUsIGZsYXRTaGFkaW5nOiB0cnVlfSksXG4gIFwidGVldGhNYXRcIjogbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHtjb2xvcjogQ29sb3JzLnRlZXRoLCBmbGF0U2hhZGluZzogdHJ1ZX0pLFxuICBcImJsYWNrTWF0XCI6IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHtjb2xvcjogQ29sb3JzLmJsYWNrLCBmbGF0U2hhZGluZzogdHJ1ZX0pLFxuICBcIm5vcm1hbE1hdFwiOiBuZXcgVEhSRUUuTWVzaE5vcm1hbE1hdGVyaWFsKHt9KVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTWF0ZXJpYWxzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL29iamVjdHMvTWF0ZXJpYWxzLmpzIiwiKGZ1bmN0aW9uKHNlbGYpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGlmIChzZWxmLmZldGNoKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgc3VwcG9ydCA9IHtcbiAgICBzZWFyY2hQYXJhbXM6ICdVUkxTZWFyY2hQYXJhbXMnIGluIHNlbGYsXG4gICAgaXRlcmFibGU6ICdTeW1ib2wnIGluIHNlbGYgJiYgJ2l0ZXJhdG9yJyBpbiBTeW1ib2wsXG4gICAgYmxvYjogJ0ZpbGVSZWFkZXInIGluIHNlbGYgJiYgJ0Jsb2InIGluIHNlbGYgJiYgKGZ1bmN0aW9uKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbmV3IEJsb2IoKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH0pKCksXG4gICAgZm9ybURhdGE6ICdGb3JtRGF0YScgaW4gc2VsZixcbiAgICBhcnJheUJ1ZmZlcjogJ0FycmF5QnVmZmVyJyBpbiBzZWxmXG4gIH1cblxuICBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlcikge1xuICAgIHZhciB2aWV3Q2xhc3NlcyA9IFtcbiAgICAgICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgICAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgICAnW29iamVjdCBGbG9hdDY0QXJyYXldJ1xuICAgIF1cblxuICAgIHZhciBpc0RhdGFWaWV3ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIERhdGFWaWV3LnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKG9iailcbiAgICB9XG5cbiAgICB2YXIgaXNBcnJheUJ1ZmZlclZpZXcgPSBBcnJheUJ1ZmZlci5pc1ZpZXcgfHwgZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHZpZXdDbGFzc2VzLmluZGV4T2YoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikpID4gLTFcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWxpemVOYW1lKG5hbWUpIHtcbiAgICBpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICBuYW1lID0gU3RyaW5nKG5hbWUpXG4gICAgfVxuICAgIGlmICgvW15hLXowLTlcXC0jJCUmJyorLlxcXl9gfH5dL2kudGVzdChuYW1lKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBjaGFyYWN0ZXIgaW4gaGVhZGVyIGZpZWxkIG5hbWUnKVxuICAgIH1cbiAgICByZXR1cm4gbmFtZS50b0xvd2VyQ2FzZSgpXG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWxpemVWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB2YWx1ZSA9IFN0cmluZyh2YWx1ZSlcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICAvLyBCdWlsZCBhIGRlc3RydWN0aXZlIGl0ZXJhdG9yIGZvciB0aGUgdmFsdWUgbGlzdFxuICBmdW5jdGlvbiBpdGVyYXRvckZvcihpdGVtcykge1xuICAgIHZhciBpdGVyYXRvciA9IHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdmFsdWUgPSBpdGVtcy5zaGlmdCgpXG4gICAgICAgIHJldHVybiB7ZG9uZTogdmFsdWUgPT09IHVuZGVmaW5lZCwgdmFsdWU6IHZhbHVlfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdXBwb3J0Lml0ZXJhYmxlKSB7XG4gICAgICBpdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvclxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpdGVyYXRvclxuICB9XG5cbiAgZnVuY3Rpb24gSGVhZGVycyhoZWFkZXJzKSB7XG4gICAgdGhpcy5tYXAgPSB7fVxuXG4gICAgaWYgKGhlYWRlcnMgaW5zdGFuY2VvZiBIZWFkZXJzKSB7XG4gICAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQobmFtZSwgdmFsdWUpXG4gICAgICB9LCB0aGlzKVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShoZWFkZXJzKSkge1xuICAgICAgaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKGhlYWRlcikge1xuICAgICAgICB0aGlzLmFwcGVuZChoZWFkZXJbMF0sIGhlYWRlclsxXSlcbiAgICAgIH0sIHRoaXMpXG4gICAgfSBlbHNlIGlmIChoZWFkZXJzKSB7XG4gICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoZWFkZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQobmFtZSwgaGVhZGVyc1tuYW1lXSlcbiAgICAgIH0sIHRoaXMpXG4gICAgfVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICBuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKVxuICAgIHZhbHVlID0gbm9ybWFsaXplVmFsdWUodmFsdWUpXG4gICAgdmFyIG9sZFZhbHVlID0gdGhpcy5tYXBbbmFtZV1cbiAgICB0aGlzLm1hcFtuYW1lXSA9IG9sZFZhbHVlID8gb2xkVmFsdWUrJywnK3ZhbHVlIDogdmFsdWVcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlWydkZWxldGUnXSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy5tYXBbbm9ybWFsaXplTmFtZShuYW1lKV1cbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKVxuICAgIHJldHVybiB0aGlzLmhhcyhuYW1lKSA/IHRoaXMubWFwW25hbWVdIDogbnVsbFxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24obmFtZSkge1xuICAgIHJldHVybiB0aGlzLm1hcC5oYXNPd25Qcm9wZXJ0eShub3JtYWxpemVOYW1lKG5hbWUpKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICB0aGlzLm1hcFtub3JtYWxpemVOYW1lKG5hbWUpXSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uKGNhbGxiYWNrLCB0aGlzQXJnKSB7XG4gICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzLm1hcCkge1xuICAgICAgaWYgKHRoaXMubWFwLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdGhpcy5tYXBbbmFtZV0sIG5hbWUsIHRoaXMpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdXG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7IGl0ZW1zLnB1c2gobmFtZSkgfSlcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS52YWx1ZXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXVxuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkgeyBpdGVtcy5wdXNoKHZhbHVlKSB9KVxuICAgIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmVudHJpZXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXVxuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkgeyBpdGVtcy5wdXNoKFtuYW1lLCB2YWx1ZV0pIH0pXG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9XG5cbiAgaWYgKHN1cHBvcnQuaXRlcmFibGUpIHtcbiAgICBIZWFkZXJzLnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdID0gSGVhZGVycy5wcm90b3R5cGUuZW50cmllc1xuICB9XG5cbiAgZnVuY3Rpb24gY29uc3VtZWQoYm9keSkge1xuICAgIGlmIChib2R5LmJvZHlVc2VkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFR5cGVFcnJvcignQWxyZWFkeSByZWFkJykpXG4gICAgfVxuICAgIGJvZHkuYm9keVVzZWQgPSB0cnVlXG4gIH1cblxuICBmdW5jdGlvbiBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXNvbHZlKHJlYWRlci5yZXN1bHQpXG4gICAgICB9XG4gICAgICByZWFkZXIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QocmVhZGVyLmVycm9yKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQmxvYkFzQXJyYXlCdWZmZXIoYmxvYikge1xuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgdmFyIHByb21pc2UgPSBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKVxuICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iKVxuICAgIHJldHVybiBwcm9taXNlXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQmxvYkFzVGV4dChibG9iKSB7XG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICB2YXIgcHJvbWlzZSA9IGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpXG4gICAgcmVhZGVyLnJlYWRBc1RleHQoYmxvYilcbiAgICByZXR1cm4gcHJvbWlzZVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEFycmF5QnVmZmVyQXNUZXh0KGJ1Zikge1xuICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoYnVmKVxuICAgIHZhciBjaGFycyA9IG5ldyBBcnJheSh2aWV3Lmxlbmd0aClcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmlldy5sZW5ndGg7IGkrKykge1xuICAgICAgY2hhcnNbaV0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHZpZXdbaV0pXG4gICAgfVxuICAgIHJldHVybiBjaGFycy5qb2luKCcnKVxuICB9XG5cbiAgZnVuY3Rpb24gYnVmZmVyQ2xvbmUoYnVmKSB7XG4gICAgaWYgKGJ1Zi5zbGljZSkge1xuICAgICAgcmV0dXJuIGJ1Zi5zbGljZSgwKVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1Zi5ieXRlTGVuZ3RoKVxuICAgICAgdmlldy5zZXQobmV3IFVpbnQ4QXJyYXkoYnVmKSlcbiAgICAgIHJldHVybiB2aWV3LmJ1ZmZlclxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIEJvZHkoKSB7XG4gICAgdGhpcy5ib2R5VXNlZCA9IGZhbHNlXG5cbiAgICB0aGlzLl9pbml0Qm9keSA9IGZ1bmN0aW9uKGJvZHkpIHtcbiAgICAgIHRoaXMuX2JvZHlJbml0ID0gYm9keVxuICAgICAgaWYgKCFib2R5KSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gJydcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGJvZHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmJsb2IgJiYgQmxvYi5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5QmxvYiA9IGJvZHlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5mb3JtRGF0YSAmJiBGb3JtRGF0YS5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5Rm9ybURhdGEgPSBib2R5XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuc2VhcmNoUGFyYW1zICYmIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHkudG9TdHJpbmcoKVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyICYmIHN1cHBvcnQuYmxvYiAmJiBpc0RhdGFWaWV3KGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlBcnJheUJ1ZmZlciA9IGJ1ZmZlckNsb25lKGJvZHkuYnVmZmVyKVxuICAgICAgICAvLyBJRSAxMC0xMSBjYW4ndCBoYW5kbGUgYSBEYXRhVmlldyBib2R5LlxuICAgICAgICB0aGlzLl9ib2R5SW5pdCA9IG5ldyBCbG9iKFt0aGlzLl9ib2R5QXJyYXlCdWZmZXJdKVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyICYmIChBcnJheUJ1ZmZlci5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSB8fCBpc0FycmF5QnVmZmVyVmlldyhib2R5KSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyID0gYnVmZmVyQ2xvbmUoYm9keSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndW5zdXBwb3J0ZWQgQm9keUluaXQgdHlwZScpXG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJykpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsICd0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLTgnKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlCbG9iICYmIHRoaXMuX2JvZHlCbG9iLnR5cGUpIHtcbiAgICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCB0aGlzLl9ib2R5QmxvYi50eXBlKVxuICAgICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuc2VhcmNoUGFyYW1zICYmIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD1VVEYtOCcpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VwcG9ydC5ibG9iKSB7XG4gICAgICB0aGlzLmJsb2IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHJlamVjdGVkID0gY29uc3VtZWQodGhpcylcbiAgICAgICAgaWYgKHJlamVjdGVkKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdGVkXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fYm9keUJsb2IpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlCbG9iKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3RoaXMuX2JvZHlBcnJheUJ1ZmZlcl0pKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlGb3JtRGF0YSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IHJlYWQgRm9ybURhdGEgYm9keSBhcyBibG9iJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBCbG9iKFt0aGlzLl9ib2R5VGV4dF0pKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYXJyYXlCdWZmZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICAgIHJldHVybiBjb25zdW1lZCh0aGlzKSB8fCBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUFycmF5QnVmZmVyKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmJsb2IoKS50aGVuKHJlYWRCbG9iQXNBcnJheUJ1ZmZlcilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMudGV4dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHJlamVjdGVkID0gY29uc3VtZWQodGhpcylcbiAgICAgIGlmIChyZWplY3RlZCkge1xuICAgICAgICByZXR1cm4gcmVqZWN0ZWRcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2JvZHlCbG9iKSB7XG4gICAgICAgIHJldHVybiByZWFkQmxvYkFzVGV4dCh0aGlzLl9ib2R5QmxvYilcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVhZEFycmF5QnVmZmVyQXNUZXh0KHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlGb3JtRGF0YSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkIG5vdCByZWFkIEZvcm1EYXRhIGJvZHkgYXMgdGV4dCcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlUZXh0KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdXBwb3J0LmZvcm1EYXRhKSB7XG4gICAgICB0aGlzLmZvcm1EYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKGRlY29kZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmpzb24gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKEpTT04ucGFyc2UpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIC8vIEhUVFAgbWV0aG9kcyB3aG9zZSBjYXBpdGFsaXphdGlvbiBzaG91bGQgYmUgbm9ybWFsaXplZFxuICB2YXIgbWV0aG9kcyA9IFsnREVMRVRFJywgJ0dFVCcsICdIRUFEJywgJ09QVElPTlMnLCAnUE9TVCcsICdQVVQnXVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZU1ldGhvZChtZXRob2QpIHtcbiAgICB2YXIgdXBjYXNlZCA9IG1ldGhvZC50b1VwcGVyQ2FzZSgpXG4gICAgcmV0dXJuIChtZXRob2RzLmluZGV4T2YodXBjYXNlZCkgPiAtMSkgPyB1cGNhc2VkIDogbWV0aG9kXG4gIH1cblxuICBmdW5jdGlvbiBSZXF1ZXN0KGlucHV0LCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgICB2YXIgYm9keSA9IG9wdGlvbnMuYm9keVxuXG4gICAgaWYgKGlucHV0IGluc3RhbmNlb2YgUmVxdWVzdCkge1xuICAgICAgaWYgKGlucHV0LmJvZHlVc2VkKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FscmVhZHkgcmVhZCcpXG4gICAgICB9XG4gICAgICB0aGlzLnVybCA9IGlucHV0LnVybFxuICAgICAgdGhpcy5jcmVkZW50aWFscyA9IGlucHV0LmNyZWRlbnRpYWxzXG4gICAgICBpZiAoIW9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhpbnB1dC5oZWFkZXJzKVxuICAgICAgfVxuICAgICAgdGhpcy5tZXRob2QgPSBpbnB1dC5tZXRob2RcbiAgICAgIHRoaXMubW9kZSA9IGlucHV0Lm1vZGVcbiAgICAgIGlmICghYm9keSAmJiBpbnB1dC5fYm9keUluaXQgIT0gbnVsbCkge1xuICAgICAgICBib2R5ID0gaW5wdXQuX2JvZHlJbml0XG4gICAgICAgIGlucHV0LmJvZHlVc2VkID0gdHJ1ZVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVybCA9IFN0cmluZyhpbnB1dClcbiAgICB9XG5cbiAgICB0aGlzLmNyZWRlbnRpYWxzID0gb3B0aW9ucy5jcmVkZW50aWFscyB8fCB0aGlzLmNyZWRlbnRpYWxzIHx8ICdvbWl0J1xuICAgIGlmIChvcHRpb25zLmhlYWRlcnMgfHwgIXRoaXMuaGVhZGVycykge1xuICAgICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKVxuICAgIH1cbiAgICB0aGlzLm1ldGhvZCA9IG5vcm1hbGl6ZU1ldGhvZChvcHRpb25zLm1ldGhvZCB8fCB0aGlzLm1ldGhvZCB8fCAnR0VUJylcbiAgICB0aGlzLm1vZGUgPSBvcHRpb25zLm1vZGUgfHwgdGhpcy5tb2RlIHx8IG51bGxcbiAgICB0aGlzLnJlZmVycmVyID0gbnVsbFxuXG4gICAgaWYgKCh0aGlzLm1ldGhvZCA9PT0gJ0dFVCcgfHwgdGhpcy5tZXRob2QgPT09ICdIRUFEJykgJiYgYm9keSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9keSBub3QgYWxsb3dlZCBmb3IgR0VUIG9yIEhFQUQgcmVxdWVzdHMnKVxuICAgIH1cbiAgICB0aGlzLl9pbml0Qm9keShib2R5KVxuICB9XG5cbiAgUmVxdWVzdC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFJlcXVlc3QodGhpcywgeyBib2R5OiB0aGlzLl9ib2R5SW5pdCB9KVxuICB9XG5cbiAgZnVuY3Rpb24gZGVjb2RlKGJvZHkpIHtcbiAgICB2YXIgZm9ybSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgYm9keS50cmltKCkuc3BsaXQoJyYnKS5mb3JFYWNoKGZ1bmN0aW9uKGJ5dGVzKSB7XG4gICAgICBpZiAoYnl0ZXMpIHtcbiAgICAgICAgdmFyIHNwbGl0ID0gYnl0ZXMuc3BsaXQoJz0nKVxuICAgICAgICB2YXIgbmFtZSA9IHNwbGl0LnNoaWZ0KCkucmVwbGFjZSgvXFwrL2csICcgJylcbiAgICAgICAgdmFyIHZhbHVlID0gc3BsaXQuam9pbignPScpLnJlcGxhY2UoL1xcKy9nLCAnICcpXG4gICAgICAgIGZvcm0uYXBwZW5kKGRlY29kZVVSSUNvbXBvbmVudChuYW1lKSwgZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBmb3JtXG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUhlYWRlcnMocmF3SGVhZGVycykge1xuICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKVxuICAgIHJhd0hlYWRlcnMuc3BsaXQoL1xccj9cXG4vKS5mb3JFYWNoKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgIHZhciBwYXJ0cyA9IGxpbmUuc3BsaXQoJzonKVxuICAgICAgdmFyIGtleSA9IHBhcnRzLnNoaWZ0KCkudHJpbSgpXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHBhcnRzLmpvaW4oJzonKS50cmltKClcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoa2V5LCB2YWx1ZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBoZWFkZXJzXG4gIH1cblxuICBCb2R5LmNhbGwoUmVxdWVzdC5wcm90b3R5cGUpXG5cbiAgZnVuY3Rpb24gUmVzcG9uc2UoYm9keUluaXQsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSB7fVxuICAgIH1cblxuICAgIHRoaXMudHlwZSA9ICdkZWZhdWx0J1xuICAgIHRoaXMuc3RhdHVzID0gJ3N0YXR1cycgaW4gb3B0aW9ucyA/IG9wdGlvbnMuc3RhdHVzIDogMjAwXG4gICAgdGhpcy5vayA9IHRoaXMuc3RhdHVzID49IDIwMCAmJiB0aGlzLnN0YXR1cyA8IDMwMFxuICAgIHRoaXMuc3RhdHVzVGV4dCA9ICdzdGF0dXNUZXh0JyBpbiBvcHRpb25zID8gb3B0aW9ucy5zdGF0dXNUZXh0IDogJ09LJ1xuICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdGlvbnMuaGVhZGVycylcbiAgICB0aGlzLnVybCA9IG9wdGlvbnMudXJsIHx8ICcnXG4gICAgdGhpcy5faW5pdEJvZHkoYm9keUluaXQpXG4gIH1cblxuICBCb2R5LmNhbGwoUmVzcG9uc2UucHJvdG90eXBlKVxuXG4gIFJlc3BvbnNlLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUmVzcG9uc2UodGhpcy5fYm9keUluaXQsIHtcbiAgICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgICBzdGF0dXNUZXh0OiB0aGlzLnN0YXR1c1RleHQsXG4gICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh0aGlzLmhlYWRlcnMpLFxuICAgICAgdXJsOiB0aGlzLnVybFxuICAgIH0pXG4gIH1cblxuICBSZXNwb25zZS5lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZXNwb25zZSA9IG5ldyBSZXNwb25zZShudWxsLCB7c3RhdHVzOiAwLCBzdGF0dXNUZXh0OiAnJ30pXG4gICAgcmVzcG9uc2UudHlwZSA9ICdlcnJvcidcbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgfVxuXG4gIHZhciByZWRpcmVjdFN0YXR1c2VzID0gWzMwMSwgMzAyLCAzMDMsIDMwNywgMzA4XVxuXG4gIFJlc3BvbnNlLnJlZGlyZWN0ID0gZnVuY3Rpb24odXJsLCBzdGF0dXMpIHtcbiAgICBpZiAocmVkaXJlY3RTdGF0dXNlcy5pbmRleE9mKHN0YXR1cykgPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCBzdGF0dXMgY29kZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShudWxsLCB7c3RhdHVzOiBzdGF0dXMsIGhlYWRlcnM6IHtsb2NhdGlvbjogdXJsfX0pXG4gIH1cblxuICBzZWxmLkhlYWRlcnMgPSBIZWFkZXJzXG4gIHNlbGYuUmVxdWVzdCA9IFJlcXVlc3RcbiAgc2VsZi5SZXNwb25zZSA9IFJlc3BvbnNlXG5cbiAgc2VsZi5mZXRjaCA9IGZ1bmN0aW9uKGlucHV0LCBpbml0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgUmVxdWVzdChpbnB1dCwgaW5pdClcbiAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuXG4gICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgIHN0YXR1czogeGhyLnN0YXR1cyxcbiAgICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dCxcbiAgICAgICAgICBoZWFkZXJzOiBwYXJzZUhlYWRlcnMoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpIHx8ICcnKVxuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMudXJsID0gJ3Jlc3BvbnNlVVJMJyBpbiB4aHIgPyB4aHIucmVzcG9uc2VVUkwgOiBvcHRpb25zLmhlYWRlcnMuZ2V0KCdYLVJlcXVlc3QtVVJMJylcbiAgICAgICAgdmFyIGJvZHkgPSAncmVzcG9uc2UnIGluIHhociA/IHhoci5yZXNwb25zZSA6IHhoci5yZXNwb25zZVRleHRcbiAgICAgICAgcmVzb2x2ZShuZXcgUmVzcG9uc2UoYm9keSwgb3B0aW9ucykpXG4gICAgICB9XG5cbiAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJykpXG4gICAgICB9XG5cbiAgICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ05ldHdvcmsgcmVxdWVzdCBmYWlsZWQnKSlcbiAgICAgIH1cblxuICAgICAgeGhyLm9wZW4ocmVxdWVzdC5tZXRob2QsIHJlcXVlc3QudXJsLCB0cnVlKVxuXG4gICAgICBpZiAocmVxdWVzdC5jcmVkZW50aWFscyA9PT0gJ2luY2x1ZGUnKSB7XG4gICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmICgncmVzcG9uc2VUeXBlJyBpbiB4aHIgJiYgc3VwcG9ydC5ibG9iKSB7XG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYmxvYidcbiAgICAgIH1cblxuICAgICAgcmVxdWVzdC5oZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgdmFsdWUpXG4gICAgICB9KVxuXG4gICAgICB4aHIuc2VuZCh0eXBlb2YgcmVxdWVzdC5fYm9keUluaXQgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHJlcXVlc3QuX2JvZHlJbml0KVxuICAgIH0pXG4gIH1cbiAgc2VsZi5mZXRjaC5wb2x5ZmlsbCA9IHRydWVcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3doYXR3Zy1mZXRjaC9mZXRjaC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJztcblxuY29uc3QgdXJsID0gYC9hcGkvY2FydGA7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICBjcmVhdGU6ICh7dGV4dCwgaWQsIGZyb20sIGJsb2IsIHRvLCBhdWRpb1NldHRpbmdzLCBoZWFkQ29sb3JzfSkgPT4ge1xuICAgIGNvbnN0IG1ldGhvZCA9IGBQT1NUYDtcbiAgICAvLyBjb25zdCBuZXdGaWxlTmFtZSA9IGAke2lkLnNwbGl0KGAgYCkuam9pbihgX2ApfWA7XG4gICAgY29uc3QgYm9keSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGJvZHkuYXBwZW5kKGB0ZXh0YCwgdGV4dCk7XG4gICAgYm9keS5hcHBlbmQoYGlkYCwgaWQpO1xuICAgIGJvZHkuYXBwZW5kKGBmcm9tYCwgZnJvbSk7XG4gICAgYm9keS5hcHBlbmQoYHRvYCwgdG8pO1xuICAgIGJvZHkuYXBwZW5kKGBhdWRpb1NldHRpbmdzYCwgYXVkaW9TZXR0aW5ncyk7XG4gICAgYm9keS5hcHBlbmQoYGhlYWRDb2xvcnNgLCBoZWFkQ29sb3JzKTtcblxuICAgIHJldHVybiBmZXRjaCh1cmwsIHttZXRob2QsIGJvZHl9KVxuICAgICAgLnRoZW4ociA9PiByLmpzb24oKSk7XG4gIH0sXG5cbiAgcmVhZDogKCkgPT4ge1xuICAgIHJldHVybiBmZXRjaChgJHt1cmx9P2lzQWN0aXZlPXRydWVgKVxuICAgICAgLnRoZW4ociA9PiByLmpzb24oKSk7XG4gIH0sXG5cbiAgcmVhZE9uZTogaWQgPT4ge1xuICAgIGNvbnN0IG1ldGhvZCA9IGBHRVRgO1xuICAgIHJldHVybiBmZXRjaChgJHt1cmx9LyR7aWR9YCwge21ldGhvZH0pLnRoZW4ociA9PiByLmpzb24oKSk7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvbGliL2NhcnRBUEkuanMiLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2luZGV4Jyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaG9ydGlkL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJhbmRvbUJ5dGUgPSByZXF1aXJlKCcuL3JhbmRvbS9yYW5kb20tYnl0ZScpO1xuXG5mdW5jdGlvbiBlbmNvZGUobG9va3VwLCBudW1iZXIpIHtcbiAgICB2YXIgbG9vcENvdW50ZXIgPSAwO1xuICAgIHZhciBkb25lO1xuXG4gICAgdmFyIHN0ciA9ICcnO1xuXG4gICAgd2hpbGUgKCFkb25lKSB7XG4gICAgICAgIHN0ciA9IHN0ciArIGxvb2t1cCggKCAobnVtYmVyID4+ICg0ICogbG9vcENvdW50ZXIpKSAmIDB4MGYgKSB8IHJhbmRvbUJ5dGUoKSApO1xuICAgICAgICBkb25lID0gbnVtYmVyIDwgKE1hdGgucG93KDE2LCBsb29wQ291bnRlciArIDEgKSApO1xuICAgICAgICBsb29wQ291bnRlcisrO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVuY29kZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Nob3J0aWQvbGliL2VuY29kZS5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgSGVhZCBmcm9tICcuL2NsYXNzZXMvSGVhZCc7XG5pbXBvcnQgQ29sb3JzIGZyb20gJy4vb2JqZWN0cy9jb2xvcnMnO1xuaW1wb3J0IEF1ZGlvIGZyb20gJy4vY2xhc3Nlcy9BdWRpby5qcyc7XG5pbXBvcnQgaGFuZGxlU2F2ZSBmcm9tICcuL29iamVjdHMvU2F2ZSc7XG5pbXBvcnQgQ2FydEFQSSBmcm9tICcuL2xpYi9jYXJ0QVBJJztcblxue1xuICBsZXQgc2NlbmUsIGNhbWVyYSwgZmllbGRPZlZpZXcsIGFzcGVjdFJhdGlvLCBuZWFyUGxhbmUsIGZhclBsYW5lLCBIRUlHSFQsIFdJRFRIO1xuICBsZXQgZ2xvYmFsTGlnaHQsIHNoYWRvd0xpZ2h0LCBiYWNrTGlnaHQsIGxpZ2h0LCByZW5kZXJlciwgY29udGFpbmVyLCBsb2FkZWQ7XG4gIGxldCBoZWFkLCBzdGFycywgd2luZG93SGFsZlgsIHdpbmRvd0hhbGZZLCBjb2xvciwgYXVkaW8sIFNwZWVjaFRleHQ7XG5cbiAgLy8gdmFycyBmb3IgZGF0Lmd1aVxuICBsZXQgY29udHJvbGxlciwgZ3VpO1xuICBjb25zdCBzYXZlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHNhdmVgKTtcblxuICBsZXQgbW91c2VQb3MgPSB7IHg6IDAsIHk6IDB9O1xuXG4gIGxldCBzdGFyQXJyYXkgPSBbXTtcbiAgbGV0IGlzTW9iaWxlID0gL2lQaG9uZXxBbmRyb2lkL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgbGV0IGxvYWRlck1hbmFnZXIgPSBuZXcgVEhSRUUuTG9hZGluZ01hbmFnZXIoKTtcblxuICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgIC8vIGNyZWF0ZSBzbm93XG4gICAgcGFydGljbGVzSlMubG9hZCgncGFydGljbGVzLWpzJywgJy4uL2Fzc2V0cy9wYXJ0aWNsZXMuanNvbicsICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdjYWxsYmFjayAtIHBhcnRpY2xlcy5qcyBjb25maWcgbG9hZGVkJyk7XG4gICAgfSk7XG5cbiAgICBjcmVhdGVTY2VuZSgpO1xuICAgIGNyZWF0ZUxpZ2h0cygpO1xuXG4gICAgYXVkaW8gPSBuZXcgQXVkaW8oKTsgLy8gaGFuZGxlIGF1ZGlvIGFuZCBzcGVlY2hyZWNvZ25pdGlvblxuICAgIGhlYWQgPSBuZXcgSGVhZCgpOyAvLyBzaG93IGFuZCBoYW5kbGUgaGVhZFxuICAgIHNjZW5lLmFkZChoZWFkLm1lc2gpO1xuXG4gICAgLy8gc2VuZCBvYmplY3RzIHRvIHNhdmUgb24gY2xpY2tcbiAgICBzYXZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgKCkgPT4ge1xuICAgICAgY29uc3QgYXVkaW9TZXR0aW5ncyA9IHtcbiAgICAgICAgcGl0Y2g6IGF1ZGlvLnBpdGNoUmF0aW8sXG4gICAgICAgIG92ZXJsYXA6IGF1ZGlvLm92ZXJsYXBcbiAgICAgIH1cblxuICAgICAgY29uc3QgaGVhZENvbG9ycyA9IHtcbiAgICAgICAgc2tpbjogQ29sb3JzLnNraW4sXG4gICAgICAgIGZyZWNrbGVzOiBDb2xvcnMuZnJlY2tsZXMsXG4gICAgICAgIGV5ZTogQ29sb3JzLmV5ZSxcbiAgICAgICAgZ2xhc3NlczogQ29sb3JzLmdsYXNzZXMsXG4gICAgICAgIGhhdDogQ29sb3JzLmhhdFxuICAgICAgfVxuXG4gICAgICBoYW5kbGVTYXZlKHtcbiAgICAgICAgdGV4dDogYXVkaW8udHh0LFxuICAgICAgICBpZDogYXVkaW8uaWQsXG4gICAgICAgIGF1ZGlvU2V0dGluZ3M6IEpTT04uc3RyaW5naWZ5KGF1ZGlvU2V0dGluZ3MpLFxuICAgICAgICBoZWFkQ29sb3JzOiBKU09OLnN0cmluZ2lmeShoZWFkQ29sb3JzKVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBndWkgPSBuZXcgZGF0LkdVSSgpO1xuICAgIGd1aS5kb21FbGVtZW50LmlkID0gJ2d1aSc7XG4gICAgZ3VpLmNsb3NlZCA9IHRydWU7XG4gICAgY29udHJvbGxlciA9IG5ldyBjb250cm9sbGVyVGV4dCgpO1xuICAgIGd1aUNvbnRyb2xsZXIoWydza2luJywgJ2ZyZWNrbGVzJywgJ2V5ZScsICdnbGFzc2VzJywgJ2hhdCddKTsgLy8gYWRkIGd1aSBmb3IgYXJyYXkgb2JqZWN0IGFuZCBzZXQgY29sb3JzIG9uIGNvbG9yIGNoYW5nZVxuXG4gICAgd2luZG93LnNjZW5lID0gc2NlbmU7IC8vIHNldCBzY2VuZSBmb3IgZXh0ZW5zaW9uXG5cbiAgICBsb29wKCk7XG4gIH07XG5cbiAgY29uc3QgZ3VpQ29udHJvbGxlciA9IGtleXMgPT4ge1xuICAgIGtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgZ3VpLmFkZENvbG9yKGNvbnRyb2xsZXIsIGtleSkub25DaGFuZ2UoKCkgPT4ge1xuXG4gICAgICAgIC8vIHNldCByaWdodCBjb2xvciBmb3IgbWF0ZXJpYWxcbiAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICBjYXNlICdza2luJzogQ29sb3JzLnNraW4gPSBjb250cm9sbGVyLnNraW47XG4gICAgICAgICAgY2FzZSAnZnJlY2tsZXMnOiBDb2xvcnMuZnJlY2tsZXMgPSBjb250cm9sbGVyLmZyZWNrbGVzO1xuICAgICAgICAgIGNhc2UgJ2V5ZSc6IENvbG9ycy5leWUgPSBjb250cm9sbGVyLmV5ZTtcbiAgICAgICAgICBjYXNlICdnbGFzc2VzJzogQ29sb3JzLmdsYXNzZXMgPSBjb250cm9sbGVyLmdsYXNzZXM7XG4gICAgICAgICAgY2FzZSAnaGF0JzogQ29sb3JzLmhhdCA9IGNvbnRyb2xsZXIuaGF0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy9yZW1vdmUgY3VycmVudCBoZWFkIGFuZCBtYWtlIGEgbmV3IG9uZSB0byBzZXQgY3VycmVudCBjb2xvclxuICAgICAgICBzY2VuZS5yZW1vdmUoaGVhZC5tZXNoKTtcbiAgICAgICAgY3JlYXRlSGVhZCgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBkZWMyaGV4ID0gKGkpID0+IHtcbiAgICB2YXIgcmVzdWx0ID0gXCIweDAwMDAwMFwiO1xuICAgIGlmIChpID49IDAgJiYgaSA8PSAxNSkge1xuICAgICAgcmVzdWx0ID0gXCIweDAwMDAwXCIgKyBpLnRvU3RyaW5nKDE2KTtcbiAgICB9IGVsc2UgaWYgKGkgPj0gMTYgJiYgaSA8PSAyNTUpIHtcbiAgICAgIHJlc3VsdCA9IFwiMHgwMDAwXCIgKyBpLnRvU3RyaW5nKDE2KTtcbiAgICB9IGVsc2UgaWYgKGkgPj0gMjU2ICYmIGkgPD0gNDA5NSkge1xuICAgICAgcmVzdWx0ID0gXCIweDAwMFwiICsgaS50b1N0cmluZygxNik7XG4gICAgfSBlbHNlIGlmIChpID49IDQwOTYgJiYgaSA8PSA2NTUzNSkge1xuICAgICAgcmVzdWx0ID0gXCIweDAwXCIgKyBpLnRvU3RyaW5nKDE2KTtcbiAgICB9IGVsc2UgaWYgKGkgPj0gNjU1MzUgJiYgaSA8PSAxMDQ4NTc1KSB7XG4gICAgICByZXN1bHQgPSBcIjB4MFwiICsgaS50b1N0cmluZygxNik7XG4gICAgfSBlbHNlIGlmIChpID49IDEwNDg1NzUpIHtcbiAgICAgIHJlc3VsdCA9ICcweCcgKyBpLnRvU3RyaW5nKDE2KTtcbiAgICB9XG4gICAgaWYgKHJlc3VsdC5sZW5ndGggPT0gOCkge1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIH1cblxuICBjb25zdCBjcmVhdGVTY2VuZSA9ICgpID0+IHs7XG4gICAgSEVJR0hUID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIFdJRFRIID0gd2luZG93LmlubmVyV2lkdGggLzEuNjc7XG4gICAgd2luZG93SGFsZlggPSBXSURUSCAvIDI7XG4gICAgd2luZG93SGFsZlkgPSBIRUlHSFQgLyAyO1xuXG4gICAgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbiAgICBhc3BlY3RSYXRpbyA9IFdJRFRIIC8gSEVJR0hUO1xuICAgIGZpZWxkT2ZWaWV3ID0gNTA7XG4gICAgbmVhclBsYW5lID0gMTtcbiAgICBmYXJQbGFuZSA9IDIwMDA7XG5cbiAgICBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoZmllbGRPZlZpZXcsIGFzcGVjdFJhdGlvLCBuZWFyUGxhbmUsIGZhclBsYW5lKTtcbiAgICBjYW1lcmEucG9zaXRpb24ueCA9IDA7XG4gICAgY2FtZXJhLnBvc2l0aW9uLnogPSA3MDtcbiAgICBjYW1lcmEucG9zaXRpb24ueSA9IC01O1xuXG4gICAgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7YWxwaGE6IHRydWUsIGFudGlhbGlhczogdHJ1ZX0pO1xuICAgIHJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8/IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvOiAxKVxuICAgIHJlbmRlcmVyLnNldFNpemUoV0lEVEgsIEhFSUdIVCk7XG4gICAgcmVuZGVyZXIuc2hhZG93TWFwLmVuYWJsZWQgPSB0cnVlO1xuICAgIHJlbmRlcmVyLnNoYWRvd01hcC50eXBlID0gVEhSRUUuUENGU29mdFNoYWRvd01hcDtcblxuICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25XaW5kb3dSZXNpemUsIGZhbHNlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVNb3VzZU1vdmUsIGZhbHNlKTtcbiAgfVxuXG4gIGNvbnN0IG9uV2luZG93UmVzaXplID0gKCkgPT4ge1xuICAgIEhFSUdIVCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICBXSURUSCA9IHdpbmRvdy5pbm5lcldpZHRoICAvIDEuNjc7XG4gICAgd2luZG93SGFsZlggPSBXSURUSCAvIDI7XG4gICAgd2luZG93SGFsZlkgPSBIRUlHSFQgLyAyO1xuICAgIHJlbmRlcmVyLnNldFNpemUoV0lEVEgsIEhFSUdIVCk7XG4gICAgY2FtZXJhLmFzcGVjdCA9IFdJRFRIIC8gSEVJR0hUO1xuICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVNb3VzZU1vdmUgPSBlID0+IHtcbiAgICBtb3VzZVBvcyA9IHtcbiAgICAgIHg6IGV2ZW50LmNsaWVudFgsXG4gICAgICB5OiBldmVudC5jbGllbnRZXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVdpbmRvd1Jlc2l6ZSA9IGUgPT4ge1xuICAgIEhFSUdIVCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICBXSURUSCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHJlbmRlcmVyLnNldFNpemUoV0lEVEgsIEhFSUdIVCk7XG4gICAgY2FtZXJhLmFzcGVjdCA9IFdJRFRIIC8gSEVJR0hUO1xuICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gIH1cblxuXG4gIGNvbnN0IGNyZWF0ZUxpZ2h0cyA9ICgpID0+IHtcblxuICAgIGdsb2JhbExpZ2h0ID0gbmV3IFRIUkVFLkhlbWlzcGhlcmVMaWdodCgweGZmZmZmZiwgMHg1NTU1NTUsIC45KTtcblxuICAgIHNoYWRvd0xpZ2h0ID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoMHhmZmZmZmYsIC4zKTtcbiAgICBzaGFkb3dMaWdodC5wb3NpdGlvbi5zZXQoMTAwLCAyNTAsIDE3NSk7XG4gICAgc2hhZG93TGlnaHQuY2FzdFNoYWRvdyA9IHRydWU7XG5cbiAgICBiYWNrTGlnaHQgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCgweGZmZmZmZiwgLjIpO1xuICAgIGJhY2tMaWdodC5wb3NpdGlvbi5zZXQoLTEwMCwgMjAwLCAxNTApO1xuICAgIGJhY2tMaWdodC5jYXN0U2hhZG93ID0gdHJ1ZTtcblxuICAgIGlmIChpc01vYmlsZSkgc2hhZG93TGlnaHQuc2hhZG93Lm1hcFNpemUud2lkdGggPSBzaGFkb3dMaWdodC5zaGFkb3cubWFwU2l6ZS5oZWlnaHQgPSAxMDI0O1xuICAgIGlmICghaXNNb2JpbGUpIHNoYWRvd0xpZ2h0LnNoYWRvdy5tYXBTaXplLndpZHRoID0gc2hhZG93TGlnaHQuc2hhZG93Lm1hcFNpemUuaGVpZ2h0ID0gMjA0ODtcblxuICAgIHNjZW5lLmFkZChnbG9iYWxMaWdodCk7XG4gICAgc2NlbmUuYWRkKHNoYWRvd0xpZ2h0KTtcbiAgICBzY2VuZS5hZGQoYmFja0xpZ2h0KTtcbiAgICBzY2VuZS5hZGQoIG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoIDB4ZWFkZWFkLCAwLjEgKSk7XG4gIH1cblxuICAvLyBjbGFzcyBTdGFyIHtcbiAgLy8gICBjb25zdHJ1Y3Rvcigpe1xuICAvL1xuICAvLyAgIFNUQVJcbiAgLy8gICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vXG4gIC8vICAgdGhpcy5tZXNoID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gIC8vXG4gIC8vICAgbGV0IHB0cyA9IFtdLFxuICAvLyAgICAgbnVtUHRzID0gNTtcbiAgLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVB0cyAqIDI7IGkrKykge1xuICAvLyAgICAgbGV0IGwgPSBpICUgMiA9PSAxXG4gIC8vICAgICAgID8gMVxuICAvLyAgICAgICA6IDI7XG4gIC8vICAgICBsZXQgYSA9IGkgLyBudW1QdHMgKiBNYXRoLlBJO1xuICAvLyAgICAgcHRzLnB1c2gobmV3IFRIUkVFLlZlY3RvcjIoTWF0aC5jb3MoYSkgKiBsLCBNYXRoLnNpbihhKSAqIGwpKTtcbiAgLy8gICB9XG4gIC8vICAgbGV0IHN0YXJTaGFwZSA9IG5ldyBUSFJFRS5TaGFwZShwdHMpO1xuICAvL1xuICAvLyAgIGxldCBleHRydWRlU2V0dGluZ3MgPSB7XG4gIC8vICAgICBhbW91bnQ6IDAuNSxcbiAgLy8gICAgIHN0ZXBzOiAxLFxuICAvLyAgICAgYmV2ZWxFbmFibGVkOiBmYWxzZVxuICAvLyAgIH07XG4gIC8vICAgbGV0IHN0YXJHZW9tID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShzdGFyU2hhcGUsIGV4dHJ1ZGVTZXR0aW5ncyk7XG4gIC8vICAgbGV0IHN0YXIgPSBuZXcgVEhSRUUuTWVzaChzdGFyR2VvbSwgeWVsbG93TWF0KTtcbiAgLy8gICBzdGFyLnJvdGF0aW9uLnggPSBNYXRoLlBJIC8gMjtcbiAgLy8gICB0aGlzLm1lc2guYWRkKHN0YXIpO1xuICAvLyB9XG4gIC8vIH1cbiAgLy9cbiAgLy8gbGV0IFN0YXJzR3JvdXAgPSBmdW5jdGlvbigpIHtcbiAgLy9cbiAgLy8gICAgIHRoaXMubWVzaCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAvL1xuICAvLyAgICAgdGhpcy5uU3RhcnMgPSAxNTtcbiAgLy9cbiAgLy8gICAgIGxldCBzdGVwQW5nbGUgPSBNYXRoLlBJICogMiAvIHRoaXMublN0YXJzO1xuICAvL1xuICAvLyAgICAgIENyZWF0ZSB0aGUgU3RhcnNcbiAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5uU3RhcnM7IGkrKykge1xuICAvL1xuICAvLyAgICAgICB0aGlzLnMgPSBuZXcgU3RhcigpO1xuICAvLyAgICAgICBsZXQgYSA9IHN0ZXBBbmdsZSAqIGk7XG4gIC8vICAgICAgIGxldCByID0gMTU7XG4gIC8vXG4gIC8vICAgICAgIHRoaXMucy5tZXNoLnBvc2l0aW9uLnkgPSBNYXRoLnNpbihhKSAqIHI7XG4gIC8vICAgICAgIHRoaXMucy5tZXNoLnBvc2l0aW9uLnggPSBNYXRoLmNvcyhhKSAqIHI7XG4gIC8vXG4gIC8vICAgICAgIHRoaXMucy5tZXNoLnJvdGF0aW9uLnogPSBhICsgTWF0aC5QSSAvIDI7XG4gIC8vICAgICAgIHRoaXMucy5tZXNoLnBvc2l0aW9uLnogPSAwIC0gTWF0aC5yYW5kb20oKSAqIDM7XG4gIC8vXG4gIC8vICAgICAgICAgcmFuZG9tIHNjYWxlIGZvciBlYWNoIGNsb3VkXG4gIC8vICAgICAgIGxldCBzYyA9IDAuNSArIE1hdGgucmFuZG9tKCkgKiAuNjtcbiAgLy8gICAgICAgdGhpcy5zLm1lc2guc2NhbGUuc2V0KHNjLCBzYywgc2MpO1xuICAvL1xuICAvLyAgICAgICB0aGlzLm1lc2guYWRkKHRoaXMucy5tZXNoKTtcbiAgLy8gICAgICAgc3RhckFycmF5LnB1c2godGhpcy5zKTtcbiAgLy8gICAgIH1cbiAgLy8gICAgIHRoaXMubWVzaC5yb3RhdGlvbi54ID0gTWF0aC5QSSAvIDI7XG4gIC8vIH1cblxuICBjb25zdCBjcmVhdGVIZWFkID0gKCkgPT4ge1xuICAgIGhlYWQubmFtZSA9IFwiSGVhZFwiO1xuICAgIGhlYWQgPSBuZXcgSGVhZCgpO1xuICAgIGhlYWQuaWRsZSgpO1xuICAgIHNjZW5lLmFkZChoZWFkLm1lc2gpO1xuICAgIC8vc3RhcnMgPSBuZXcgU3RhcnNHcm91cCgpO1xuICAgIC8vc2NlbmUuYWRkKHN0YXJzLm1lc2gpO1xuICB9XG5cbiAgY29uc3QgY3JlYXRlQ2hhcmFjdGVyID0gKCkgPT4ge1xuICAgIGNyZWF0ZUhlYWQoKTtcbiAgICBoZWFkLm1lc2gucG9zaXRpb24uc2V0KDAsIDIsIDApO1xuICAgIC8vc3RhcnMubWVzaC5wb3NpdGlvbi5zZXQoMCwgMTAsIDApO1xuICB9XG5cblxuICBsZXQgaXNCbGlua2luZyA9IGZhbHNlO1xuICBjb25zdCBibGlua0xvb3AgPSAoKSA9PiB7XG4gICAgaXNCbGlua2luZyA9IGZhbHNlO1xuXG4gICAgaWYgKCghaXNCbGlua2luZykgJiYgKE1hdGgucmFuZG9tKCkgPiAwLjk5KSkge1xuICAgICAgaXNCbGlua2luZyA9IHRydWU7XG4gICAgICBibGluaygpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGJsaW5rID0gKCkgPT4ge1xuICAgIGhlYWQuZXllcy5zY2FsZS55ID0gMTtcbiAgICBUd2Vlbk1heC50byhoZWFkLmV5ZXMuc2NhbGUsIC4wNywge1xuICAgICAgeTogMCxcbiAgICAgIHlveW86IHRydWUsXG4gICAgICByZXBlYXQ6IDEsXG4gICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaXNCbGlua2luZyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy9IRUFEIEFOSU1BVElPTlNcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAvLyBIZWFkLnByb3RvdHlwZS5kaXp6eSA9IGZ1bmN0aW9uKCkge1xuICAvL1xuICAvLyAgICAgbGV0IGRpc3RhbmNlID0gMTtcbiAgLy9cbiAgLy8gICAgIHRoaXMuaGVhZC5yb3RhdGlvbi56ID0gTWF0aC5zaW4oRGF0ZS5ub3coKSAqIDAuMDA1KSAqIE1hdGguUEkgKiAwLjAxO1xuICAvLyAgICAgdGhpcy5oZWFkLnJvdGF0aW9uLnggPSBNYXRoLnNpbihEYXRlLm5vdygpICogMC4wMSkgKiBNYXRoLlBJICogMC4wMTtcbiAgLy8gICAgIHRoaXMuaGVhZC5yb3RhdGlvbi55ID0gTWF0aC5zaW4oRGF0ZS5ub3coKSAqIDAuMDA1KSAqIE1hdGguUEkgKiAwLjAxO1xuICAvL1xuICAvLyAgICAgdGhpcy5leWVCbHVlUmlnaHQucG9zaXRpb24ueCA9IE1hdGguc2luKERhdGUubm93KCkgKiAwLjAwNSkgKiAtZGlzdGFuY2U7XG4gIC8vICAgICB0aGlzLmV5ZUJsdWVMZWZ0LnBvc2l0aW9uLnggPSBNYXRoLnNpbihEYXRlLm5vdygpICogMC4wMDUpICogZGlzdGFuY2U7XG4gIC8vICAgICB0aGlzLmV5ZUJsdWVSaWdodC5wb3NpdGlvbi55ID0gTWF0aC5jb3MoRGF0ZS5ub3coKSAqIDAuMDA1KSAqIC1kaXN0YW5jZTtcbiAgLy8gICAgIHRoaXMuZXllQmx1ZUxlZnQucG9zaXRpb24ueSA9IE1hdGguY29zKERhdGUubm93KCkgKiAwLjAwNSkgKiBkaXN0YW5jZTtcbiAgLy8gICAgIHRoaXMuZXllQnJvd1JpZ2h0LnBvc2l0aW9uLnkgPSBNYXRoLmNvcyhEYXRlLm5vdygpICogMC4wMDUpICogLWRpc3RhbmNlO1xuICAvLyAgICAgdGhpcy5leWVCcm93TGVmdC5wb3NpdGlvbi55ID0gTWF0aC5jb3MoRGF0ZS5ub3coKSAqIDAuMDA1KSAqIGRpc3RhbmNlO1xuICAvL1xuICAvLyAgICAgdGhpcy5tb3VzdGFjaGUucm90YXRpb24ueiA9IE1hdGguc2luKERhdGUubm93KCkgKiAwLjAwNSkgKiBNYXRoLlBJICogMC4wNTtcbiAgLy9cbiAgLy8gICAgIGJsaW5rTG9vcCgpO1xuICAvLyAgICAgc3RhcnMuc3BpblNjYWxlKCk7XG4gIC8vXG4gIC8vICAgfVxuXG4gIC8vU1RBUkdST1VQXG4gIC8vIFN0YXJzR3JvdXAucHJvdG90eXBlLnNwaW5TY2FsZSA9IGZ1bmN0aW9uKCkge1xuICAvL1xuICAvLyAgICAgdGhpcy5tZXNoLnJvdGF0aW9uLnogKz0gMC4wMjtcbiAgLy9cbiAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhckFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gIC8vICAgICAgICBzdGFyQXJyYXlbaV0ubWVzaC5yb3RhdGlvbi54ID0gTWF0aC5zaW4oRGF0ZS5ub3coKSAqIDAuMDEpICogTWF0aC5QSSAqIDAuMSA7XG4gIC8vICAgICAgIHN0YXJBcnJheVtpXS5tZXNoLnJvdGF0aW9uLnogKz0gMCAtIE1hdGgucmFuZG9tKCkgKiAwLjE1O1xuICAvLyAgICAgICBzdGFyQXJyYXlbaV0ubWVzaC5yb3RhdGlvbi54ICs9IDAgLSBNYXRoLnJhbmRvbSgpICogMC4wNTtcbiAgLy9cbiAgLy8gICAgIH1cbiAgLy8gICB9XG5cbiAgY2xhc3MgY29udHJvbGxlclRleHQge1xuICAgIGNvbnN0cnVjdG9yICgpe1xuICAgICAgdGhpcy5za2luID0gQ29sb3JzLnNraW47XG4gICAgICB0aGlzLmZyZWNrbGVzID0gQ29sb3JzLmZyZWNrbGVzO1xuICAgICAgdGhpcy5leWUgPSBDb2xvcnMuZXllO1xuICAgICAgdGhpcy5nbGFzc2VzID0gQ29sb3JzLmdsYXNzZXM7XG4gICAgICB0aGlzLmhhdCA9IENvbG9ycy5oYXQ7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbG9vcCA9ICgpID0+IHtcbiAgICBibGlua0xvb3AoKTtcbiAgICAvL2hlYWQuZGl6enkoKTtcbiAgICBsZXQgeFRhcmdldCA9IChtb3VzZVBvcy54IC0gd2luZG93SGFsZlgpO1xuICAgIGxldCB5VGFyZ2V0ID0gKG1vdXNlUG9zLnkgLSB3aW5kb3dIYWxmWSk7XG5cbiAgICBoZWFkLmlkbGUoeFRhcmdldCwgeVRhcmdldCk7XG4gICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcbiAgfVxuXG4gIC8vd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBpbml0LCBmYWxzZSk7XG5cbiAgaW5pdCgpO1xuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvc2NyaXB0LmpzIiwiaW1wb3J0IFNvdW5kQVBJIGZyb20gJy4uL2xpYi9zb3VuZEFQSSc7XG5pbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJztcblxudmFyIFNwZWVjaFJlY29nbml0aW9uID0gU3BlZWNoUmVjb2duaXRpb24gfHwgd2Via2l0U3BlZWNoUmVjb2duaXRpb25cbnZhciBTcGVlY2hHcmFtbWFyTGlzdCA9IFNwZWVjaEdyYW1tYXJMaXN0IHx8IHdlYmtpdFNwZWVjaEdyYW1tYXJMaXN0XG52YXIgU3BlZWNoUmVjb2duaXRpb25FdmVudCA9IFNwZWVjaFJlY29nbml0aW9uRXZlbnQgfHwgd2Via2l0U3BlZWNoUmVjb2duaXRpb25FdmVudFxuY29uc3QgQXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0O1xuXG5sZXQgYXVkaW9DdHgsIHJlY29nbml0aW9uO1xubGV0IHRyYW5zY3JpcHQgPSBcIlwiO1xubGV0IGF1ZGlvQ2h1bmtzID0gW107XG5sZXQgc291cmNlO1xuXG5jb25zdCAkdGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBmaWVsZGApO1xuY29uc3QgJHJlY29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGByZWNvcmRgKTtcbmNvbnN0ICRhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBhdWRpb19jb250cm9sc2ApO1xuY29uc3QgJHN0b3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgc3RvcGApO1xuXG5sZXQgYXVkaW9Tb3VyY2VzID0gW10sXG4gICAgcGl0Y2hTaGlmdGVyUHJvY2Vzc29yO1xuXG5sZXQgZ3JhaW5TaXplID0gNTEyLFxuICAgIHBpdGNoUmF0aW8gPSAxLjAsXG4gICAgb3ZlcmxhcFJhdGlvID0gMC41MDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXVkaW8ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmlkID0gc2hvcnRJZC5nZW5lcmF0ZSgpO1xuICAgIHRoaXMucGl0Y2hSYXRpbyA9IDEuMDtcbiAgICB0aGlzLm92ZXJsYXAgPSAwLjUwO1xuICAgIGF1ZGlvQ3R4ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuXG4gICAgLy8gaGFuZGxlIFNwZWVjaFJlY29nbml0aW9uXG4gICAgcmVjb2duaXRpb24gPSBuZXcgU3BlZWNoUmVjb2duaXRpb24oKTtcbiAgICB0aGlzLnNwZWVjaFNldHRpbmdzKCk7XG5cbiAgICByZWNvZ25pdGlvbi5vbnJlc3VsdCA9IGV2ZW50ID0+IHRoaXMuZ290UmVzdWx0KGV2ZW50KTtcbiAgICByZWNvZ25pdGlvbi5vbnNwZWVjaGVuZCA9IGUgPT4gdGhpcy5vblNwZWVjaEVuZChlKTtcbiAgICAkdGV4dC5hZGRFdmVudExpc3RlbmVyKGBibHVyYCwgKCkgPT4gdGhpcy50eHQgPSAkdGV4dC52YWx1ZSk7XG5cbiAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7IGF1ZGlvOiB0cnVlIH0pXG4gICAgLnRoZW4oc3RyZWFtID0+IHtcbiAgICAgIHRoaXMubWVkaWFSZWNvcmRlciA9IG5ldyBNZWRpYVJlY29yZGVyKHN0cmVhbSk7XG5cbiAgICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS1TdGFydCBSZWNvcmRpbmctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgICAkcmVjb3JkLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgKCkgPT4ge1xuICAgICAgICB0aGlzLm1lZGlhUmVjb3JkZXIuc3RhcnQoKTtcbiAgICAgICAgcmVjb2duaXRpb24uc3RhcnQoKTtcbiAgICAgICAgJHJlY29yZC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB9KTtcbiAgICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgICAgIHRoaXMubWVkaWFSZWNvcmRlci5hZGRFdmVudExpc3RlbmVyKGBkYXRhYXZhaWxhYmxlYCwgIGUgPT4ge1xuICAgICAgICBhdWRpb0NodW5rcy5wdXNoKGUuZGF0YSk7XG4gICAgICB9KTsgLy8gYWRkIGF1ZGlvY2h1bmsgdG8gYXJyYXlcblxuICAgICAgLy8gd2hlbiBtZWRpYVJlY29yZGVyIHN0b3BzLCBtYWtlIGFuZCBoYW5kbGUgYXVkaW8gYmxvYlxuICAgICAgdGhpcy5tZWRpYVJlY29yZGVyLmFkZEV2ZW50TGlzdGVuZXIoYHN0b3BgLCAoKSA9PiB7XG4gICAgICAgIC8vIGdpdmUgbGluayB0byBhdWRpbyBjb250cm9scyB0byBwbGF5IGFuZCBjb250cm9sIHRoZSBzb3VuZFxuICAgICAgICB0aGlzLmJsb2IgPSBuZXcgQmxvYihhdWRpb0NodW5rcywge3R5cGUgOiAnYXVkaW8vb2dnJ30pOyAvLyBjcmVhdGUgYmxvYiBmcm9tIGF1ZGlvY2h1bmtzXG5cbiAgICAgICAgU291bmRBUEkuY3JlYXRlKHtcbiAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICBibG9iOiB0aGlzLmJsb2JcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PsKge1xuICAgICAgICAgIGNvbnN0IGJ1ZmZlckxvYWRlciA9IG5ldyBCdWZmZXJMb2FkZXIoXG4gICAgICAgICAgICBhdWRpb0N0eCwgW2AuL3VwbG9hZHMvJHt0aGlzLmlkfS5vZ2dgXSwgYnVmZmVyTGlzdCA9PiB7XG4gICAgICAgICAgICAgIC8vIHRvIGF2b2lkIG92ZXJsYXBwaW5nIHByZXZpb3VzIHNvdW5kLCBlbXB0eSBidWZmZXJMaXN0IHdoZW4gdHJ5aW5nIGFnYWluXG4gICAgICAgICAgICAgICRyZWNvcmQuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCAoKSA9PiBidWZmZXJMaXN0ID0gW10pO1xuXG4gICAgICAgICAgICAgIGxldCBsb29wID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgLy8gdHJpZ2dlciBsb29wXG4gICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGByZXBlYXRgKS5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbG9vcCA9ICFsb29wO1xuICAgICAgICAgICAgICAgIHNvdXJjZS5zdG9wKCk7XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIC8vIHBpdGNoIHZhbHVlXG4gICAgICAgICAgICAgIGNvbnN0ICRwaXRjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwaXRjaGApO1xuICAgICAgICAgICAgICAkcGl0Y2guYWRkRXZlbnRMaXN0ZW5lcihgY2hhbmdlYCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHBpdGNoUmF0aW8gPSBwYXJzZUZsb2F0KCRwaXRjaC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5waXRjaFJhdGlvID0gcGl0Y2hSYXRpbztcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgLy8gcGxheSBtb2RpZmllZCBzb3VuZFxuICAgICAgICAgICAgICAkYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc291cmNlID0gJyc7XG4gICAgICAgICAgICAgICAgc291cmNlID0gYXVkaW9DdHguY3JlYXRlQnVmZmVyU291cmNlKCk7XG4gICAgICAgICAgICAgICAgc291cmNlLmJ1ZmZlciA9IGJ1ZmZlckxpc3RbMF07XG4gICAgICAgICAgICAgICAgc291cmNlLmNvbm5lY3QocGl0Y2hTaGlmdGVyUHJvY2Vzc29yKTtcbiAgICAgICAgICAgICAgICBzb3VyY2UubG9vcCA9IGxvb3A7XG4gICAgICAgICAgICAgICAgc291cmNlLnN0YXJ0KCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBidWZmZXJMb2FkZXIubG9hZCgpO1xuICAgICAgICAgIHRoaXMuaW5pdFByb2Nlc3NvcigpO1xuXG4gICAgICAgIH0sIDEwMDApO1xuXG4gICAgICAgIC8vIHNldCBzb3VuZCBmaWx0ZXIgb3ZlcmxhcFxuICAgICAgICBjb25zdCBvdmVybGFwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG92ZXJsYXBgKTtcbiAgICAgICAgb3ZlcmxhcC5hZGRFdmVudExpc3RlbmVyKGBjaGFuZ2VgLCAoKSA9PiB7XG4gICAgICAgICAgb3ZlcmxhcFJhdGlvID0gb3ZlcmxhcC52YWx1ZTtcbiAgICAgICAgICB0aGlzLm92ZXJsYXAgPSBvdmVybGFwUmF0aW87XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF1ZGlvQ2h1bmtzID0gW107XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uU3BlZWNoRW5kKGUpwqB7XG4gICAgdGhpcy5tZWRpYVJlY29yZGVyLnN0b3AoKTtcbiAgICByZWNvZ25pdGlvbi5zdG9wKCk7XG4gICAgJHJlY29yZC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICRyZWNvcmQudGV4dENvbnRlbnQgPSAnV2FudCB0byB0cnkgYWdhaW4/JztcbiAgICB0aGlzLnR4dCA9ICR0ZXh0LnZhbHVlO1xuICB9XG5cbiAgZ290UmVzdWx0KGV2ZW50KSB7XG4gICAgY29uc3QgbGFzdCA9IGV2ZW50LnJlc3VsdHMubGVuZ3RoIC0gMTtcbiAgICB0cmFuc2NyaXB0ID0gZXZlbnQucmVzdWx0c1tsYXN0XVswXS50cmFuc2NyaXB0O1xuICAgICR0ZXh0LnZhbHVlID0gdHJhbnNjcmlwdDtcbiAgfVxuXG4gIHNwZWVjaFNldHRpbmdzKCkge1xuICAgIHJlY29nbml0aW9uLmNvbnRpbnVvdXMgPSBmYWxzZTtcbiAgICByZWNvZ25pdGlvbi5sYW5nID0gJ2VuLVVTJztcbiAgICByZWNvZ25pdGlvbi5pbnRlcmltUmVzdWx0cyA9IGZhbHNlO1xuICAgIHJlY29nbml0aW9uLm1heEFsdGVybmF0aXZlcyA9IDE7XG4gIH1cblxuICBpbml0UHJvY2Vzc29yKCkge1xuXG4gICAgY29uc3QgbGluZWFySW50ZXJwb2xhdGlvbiA9IChhLCBiLCB0KSA9PiB7XG4gICAgICByZXR1cm4gYSArIChiIC0gYSkgKiB0O1xuICAgIH07XG5cbiAgICBpZiAocGl0Y2hTaGlmdGVyUHJvY2Vzc29yKSB7XG4gICAgICBwaXRjaFNoaWZ0ZXJQcm9jZXNzb3IuZGlzY29ubmVjdCgpO1xuICAgIH1cblxuICAgIGlmIChhdWRpb0N0eC5jcmVhdGVTY3JpcHRQcm9jZXNzb3IpIHtcbiAgICAgIHBpdGNoU2hpZnRlclByb2Nlc3NvciA9IGF1ZGlvQ3R4LmNyZWF0ZVNjcmlwdFByb2Nlc3NvcihncmFpblNpemUsIDEsIDEpO1xuICAgIH0gZWxzZSBpZiAoYXVkaW9DdHguY3JlYXRlSmF2YVNjcmlwdE5vZGUpIHtcbiAgICAgIHBpdGNoU2hpZnRlclByb2Nlc3NvciA9IGF1ZGlvQ3R4LmNyZWF0ZUphdmFTY3JpcHROb2RlKGdyYWluU2l6ZSwgMSwgMSk7XG4gICAgfVxuXG4gICAgcGl0Y2hTaGlmdGVyUHJvY2Vzc29yLmJ1ZmZlciA9IG5ldyBGbG9hdDMyQXJyYXkoZ3JhaW5TaXplICogMik7XG4gICAgcGl0Y2hTaGlmdGVyUHJvY2Vzc29yLmdyYWluV2luZG93ID0gdGhpcy5oYW5uV2luZG93KGdyYWluU2l6ZSk7XG5cbiAgICBwaXRjaFNoaWZ0ZXJQcm9jZXNzb3Iub25hdWRpb3Byb2Nlc3MgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICB2YXIgaW5wdXREYXRhID0gZXZlbnQuaW5wdXRCdWZmZXIuZ2V0Q2hhbm5lbERhdGEoMCk7XG4gICAgICB2YXIgb3V0cHV0RGF0YSA9IGV2ZW50Lm91dHB1dEJ1ZmZlci5nZXRDaGFubmVsRGF0YSgwKTtcblxuICAgICAgZm9yIChpID0gMDsgaSA8IGlucHV0RGF0YS5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgIC8vIEFwcGx5IHRoZSB3aW5kb3cgdG8gdGhlIGlucHV0IGJ1ZmZlclxuICAgICAgICBpbnB1dERhdGFbaV0gKj0gdGhpcy5ncmFpbldpbmRvd1tpXTtcblxuICAgICAgICAvLyBTaGlmdCBoYWxmIG9mIHRoZSBidWZmZXJcbiAgICAgICAgdGhpcy5idWZmZXJbaV0gPSB0aGlzLmJ1ZmZlcltpICsgZ3JhaW5TaXplXTtcblxuICAgICAgICAvLyBFbXB0eSB0aGUgYnVmZmVyIHRhaWxcbiAgICAgICAgdGhpcy5idWZmZXJbaSArIGdyYWluU2l6ZV0gPSAwLjA7XG4gICAgICB9XG5cbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgcGl0Y2ggc2hpZnRlZCBncmFpbiByZS1zYW1wbGluZyBhbmQgbG9vcGluZyB0aGUgaW5wdXRcbiAgICAgIHZhciBncmFpbkRhdGEgPSBuZXcgRmxvYXQzMkFycmF5KGdyYWluU2l6ZSAqIDIpO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGogPSAwLjA7IGkgPCBncmFpblNpemU7IGkrKywgaiArPSBwaXRjaFJhdGlvKSB7XG5cbiAgICAgICAgdmFyIGluZGV4ID0gTWF0aC5mbG9vcihqKSAlIGdyYWluU2l6ZTtcbiAgICAgICAgdmFyIGEgPSBpbnB1dERhdGFbaW5kZXhdO1xuICAgICAgICB2YXIgYiA9IGlucHV0RGF0YVsoaW5kZXggKyAxKSAlIGdyYWluU2l6ZV07XG4gICAgICAgIGdyYWluRGF0YVtpXSArPSBsaW5lYXJJbnRlcnBvbGF0aW9uKGEsIGIsIGogJSAxLjApICogdGhpcy5ncmFpbldpbmRvd1tpXTtcbiAgICAgIH1cblxuICAgICAgLy8gQ29weSB0aGUgZ3JhaW4gbXVsdGlwbGUgdGltZXMgb3ZlcmxhcHBpbmcgaXRcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBncmFpblNpemU7IGkgKz0gTWF0aC5yb3VuZChncmFpblNpemUgKiAoMSAtIG92ZXJsYXBSYXRpbykpKSB7XG4gICAgICAgIGZvciAoaiA9IDA7IGogPD0gZ3JhaW5TaXplOyBqKyspIHtcbiAgICAgICAgICB0aGlzLmJ1ZmZlcltpICsgal0gKz0gZ3JhaW5EYXRhW2pdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIE91dHB1dCB0aGUgZmlyc3QgaGFsZiBvZiB0aGUgYnVmZmVyXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgZ3JhaW5TaXplOyBpKyspIHtcbiAgICAgICAgb3V0cHV0RGF0YVtpXSA9IHRoaXMuYnVmZmVyW2ldO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBwaXRjaFNoaWZ0ZXJQcm9jZXNzb3IuY29ubmVjdChhdWRpb0N0eC5kZXN0aW5hdGlvbik7XG5cbiAgfTtcblxuICBoYW5uV2luZG93KGxlbmd0aCkge1xuICAgIGNvbnN0IHdpbmRvdyA9IG5ldyBGbG9hdDMyQXJyYXkobGVuZ3RoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHdpbmRvd1tpXSA9IDAuNSAqICgxIC0gTWF0aC5jb3MoMiAqIE1hdGguUEkgKiBpIC8gKGxlbmd0aCAtIDEpKSk7XG4gICAgfVxuICAgIHJldHVybiB3aW5kb3c7XG4gIH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NsYXNzZXMvQXVkaW8uanMiLCJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XG5cbmNvbnN0IHVybCA9IGAvYXBpL3NvdW5kYDtcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gIGNyZWF0ZTogKHtpZCwgYmxvYn0pID0+IHtcbiAgICBjb25zdCBtZXRob2QgPSBgUE9TVGA7XG4gICAgY29uc3QgbmV3RmlsZU5hbWUgPSBgJHtpZC5zcGxpdChgIGApLmpvaW4oYF9gKX1gO1xuICAgIGNvbnN0IGJvZHkgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBib2R5LmFwcGVuZChgaWRgLCBpZCk7XG4gICAgYm9keS5hcHBlbmQoYHNvdW5kYCwgYmxvYiwgbmV3RmlsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGZldGNoKHVybCwge21ldGhvZCwgYm9keX0pXG4gICAgICAudGhlbihyID0+IHIuanNvbigpKTtcbiAgfSxcblxuICByZWFkOiAoKSA9PiB7XG4gICAgcmV0dXJuIGZldGNoKGAke3VybH0/aXNBY3RpdmU9dHJ1ZWApXG4gICAgICAudGhlbihyID0+IHIuanNvbigpKTtcbiAgfSxcblxuICByZWFkT25lOiBpZCA9PiB7XG4gICAgY29uc3QgbWV0aG9kID0gYEdFVGA7XG4gICAgcmV0dXJuIGZldGNoKGAke3VybH0vJHtpZH1gLCB7bWV0aG9kfSkudGhlbihyID0+IHIuanNvbigpKTtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9saWIvc291bmRBUEkuanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBhbHBoYWJldCA9IHJlcXVpcmUoJy4vYWxwaGFiZXQnKTtcbnZhciBlbmNvZGUgPSByZXF1aXJlKCcuL2VuY29kZScpO1xudmFyIGRlY29kZSA9IHJlcXVpcmUoJy4vZGVjb2RlJyk7XG52YXIgYnVpbGQgPSByZXF1aXJlKCcuL2J1aWxkJyk7XG52YXIgaXNWYWxpZCA9IHJlcXVpcmUoJy4vaXMtdmFsaWQnKTtcblxuLy8gaWYgeW91IGFyZSB1c2luZyBjbHVzdGVyIG9yIG11bHRpcGxlIHNlcnZlcnMgdXNlIHRoaXMgdG8gbWFrZSBlYWNoIGluc3RhbmNlXG4vLyBoYXMgYSB1bmlxdWUgdmFsdWUgZm9yIHdvcmtlclxuLy8gTm90ZTogSSBkb24ndCBrbm93IGlmIHRoaXMgaXMgYXV0b21hdGljYWxseSBzZXQgd2hlbiB1c2luZyB0aGlyZFxuLy8gcGFydHkgY2x1c3RlciBzb2x1dGlvbnMgc3VjaCBhcyBwbTIuXG52YXIgY2x1c3RlcldvcmtlcklkID0gcmVxdWlyZSgnLi91dGlsL2NsdXN0ZXItd29ya2VyLWlkJykgfHwgMDtcblxuLyoqXG4gKiBTZXQgdGhlIHNlZWQuXG4gKiBIaWdobHkgcmVjb21tZW5kZWQgaWYgeW91IGRvbid0IHdhbnQgcGVvcGxlIHRvIHRyeSB0byBmaWd1cmUgb3V0IHlvdXIgaWQgc2NoZW1hLlxuICogZXhwb3NlZCBhcyBzaG9ydGlkLnNlZWQoaW50KVxuICogQHBhcmFtIHNlZWQgSW50ZWdlciB2YWx1ZSB0byBzZWVkIHRoZSByYW5kb20gYWxwaGFiZXQuICBBTFdBWVMgVVNFIFRIRSBTQU1FIFNFRUQgb3IgeW91IG1pZ2h0IGdldCBvdmVybGFwcy5cbiAqL1xuZnVuY3Rpb24gc2VlZChzZWVkVmFsdWUpIHtcbiAgICBhbHBoYWJldC5zZWVkKHNlZWRWYWx1ZSk7XG4gICAgcmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vKipcbiAqIFNldCB0aGUgY2x1c3RlciB3b3JrZXIgb3IgbWFjaGluZSBpZFxuICogZXhwb3NlZCBhcyBzaG9ydGlkLndvcmtlcihpbnQpXG4gKiBAcGFyYW0gd29ya2VySWQgd29ya2VyIG11c3QgYmUgcG9zaXRpdmUgaW50ZWdlci4gIE51bWJlciBsZXNzIHRoYW4gMTYgaXMgcmVjb21tZW5kZWQuXG4gKiByZXR1cm5zIHNob3J0aWQgbW9kdWxlIHNvIGl0IGNhbiBiZSBjaGFpbmVkLlxuICovXG5mdW5jdGlvbiB3b3JrZXIod29ya2VySWQpIHtcbiAgICBjbHVzdGVyV29ya2VySWQgPSB3b3JrZXJJZDtcbiAgICByZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8qKlxuICpcbiAqIHNldHMgbmV3IGNoYXJhY3RlcnMgdG8gdXNlIGluIHRoZSBhbHBoYWJldFxuICogcmV0dXJucyB0aGUgc2h1ZmZsZWQgYWxwaGFiZXRcbiAqL1xuZnVuY3Rpb24gY2hhcmFjdGVycyhuZXdDaGFyYWN0ZXJzKSB7XG4gICAgaWYgKG5ld0NoYXJhY3RlcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBhbHBoYWJldC5jaGFyYWN0ZXJzKG5ld0NoYXJhY3RlcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBhbHBoYWJldC5zaHVmZmxlZCgpO1xufVxuXG4vKipcbiAqIEdlbmVyYXRlIHVuaXF1ZSBpZFxuICogUmV0dXJucyBzdHJpbmcgaWRcbiAqL1xuZnVuY3Rpb24gZ2VuZXJhdGUoKSB7XG4gIHJldHVybiBidWlsZChjbHVzdGVyV29ya2VySWQpO1xufVxuXG4vLyBFeHBvcnQgYWxsIG90aGVyIGZ1bmN0aW9ucyBhcyBwcm9wZXJ0aWVzIG9mIHRoZSBnZW5lcmF0ZSBmdW5jdGlvblxubW9kdWxlLmV4cG9ydHMgPSBnZW5lcmF0ZTtcbm1vZHVsZS5leHBvcnRzLmdlbmVyYXRlID0gZ2VuZXJhdGU7XG5tb2R1bGUuZXhwb3J0cy5zZWVkID0gc2VlZDtcbm1vZHVsZS5leHBvcnRzLndvcmtlciA9IHdvcmtlcjtcbm1vZHVsZS5leHBvcnRzLmNoYXJhY3RlcnMgPSBjaGFyYWN0ZXJzO1xubW9kdWxlLmV4cG9ydHMuZGVjb2RlID0gZGVjb2RlO1xubW9kdWxlLmV4cG9ydHMuaXNWYWxpZCA9IGlzVmFsaWQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaG9ydGlkL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBGb3VuZCB0aGlzIHNlZWQtYmFzZWQgcmFuZG9tIGdlbmVyYXRvciBzb21ld2hlcmVcbi8vIEJhc2VkIG9uIFRoZSBDZW50cmFsIFJhbmRvbWl6ZXIgMS4zIChDKSAxOTk3IGJ5IFBhdWwgSG91bGUgKGhvdWxlQG1zYy5jb3JuZWxsLmVkdSlcblxudmFyIHNlZWQgPSAxO1xuXG4vKipcbiAqIHJldHVybiBhIHJhbmRvbSBudW1iZXIgYmFzZWQgb24gYSBzZWVkXG4gKiBAcGFyYW0gc2VlZFxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gZ2V0TmV4dFZhbHVlKCkge1xuICAgIHNlZWQgPSAoc2VlZCAqIDkzMDEgKyA0OTI5NykgJSAyMzMyODA7XG4gICAgcmV0dXJuIHNlZWQvKDIzMzI4MC4wKTtcbn1cblxuZnVuY3Rpb24gc2V0U2VlZChfc2VlZF8pIHtcbiAgICBzZWVkID0gX3NlZWRfO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBuZXh0VmFsdWU6IGdldE5leHRWYWx1ZSxcbiAgICBzZWVkOiBzZXRTZWVkXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvcmFuZG9tL3JhbmRvbS1mcm9tLXNlZWQuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNyeXB0byA9IHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmICh3aW5kb3cuY3J5cHRvIHx8IHdpbmRvdy5tc0NyeXB0byk7IC8vIElFIDExIHVzZXMgd2luZG93Lm1zQ3J5cHRvXG5cbmZ1bmN0aW9uIHJhbmRvbUJ5dGUoKSB7XG4gICAgaWYgKCFjcnlwdG8gfHwgIWNyeXB0by5nZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NikgJiAweDMwO1xuICAgIH1cbiAgICB2YXIgZGVzdCA9IG5ldyBVaW50OEFycmF5KDEpO1xuICAgIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMoZGVzdCk7XG4gICAgcmV0dXJuIGRlc3RbMF0gJiAweDMwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJhbmRvbUJ5dGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaG9ydGlkL2xpYi9yYW5kb20vcmFuZG9tLWJ5dGUtYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFscGhhYmV0ID0gcmVxdWlyZSgnLi9hbHBoYWJldCcpO1xuXG4vKipcbiAqIERlY29kZSB0aGUgaWQgdG8gZ2V0IHRoZSB2ZXJzaW9uIGFuZCB3b3JrZXJcbiAqIE1haW5seSBmb3IgZGVidWdnaW5nIGFuZCB0ZXN0aW5nLlxuICogQHBhcmFtIGlkIC0gdGhlIHNob3J0aWQtZ2VuZXJhdGVkIGlkLlxuICovXG5mdW5jdGlvbiBkZWNvZGUoaWQpIHtcbiAgICB2YXIgY2hhcmFjdGVycyA9IGFscGhhYmV0LnNodWZmbGVkKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdmVyc2lvbjogY2hhcmFjdGVycy5pbmRleE9mKGlkLnN1YnN0cigwLCAxKSkgJiAweDBmLFxuICAgICAgICB3b3JrZXI6IGNoYXJhY3RlcnMuaW5kZXhPZihpZC5zdWJzdHIoMSwgMSkpICYgMHgwZlxuICAgIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVjb2RlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvZGVjb2RlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBlbmNvZGUgPSByZXF1aXJlKCcuL2VuY29kZScpO1xudmFyIGFscGhhYmV0ID0gcmVxdWlyZSgnLi9hbHBoYWJldCcpO1xuXG4vLyBJZ25vcmUgYWxsIG1pbGxpc2Vjb25kcyBiZWZvcmUgYSBjZXJ0YWluIHRpbWUgdG8gcmVkdWNlIHRoZSBzaXplIG9mIHRoZSBkYXRlIGVudHJvcHkgd2l0aG91dCBzYWNyaWZpY2luZyB1bmlxdWVuZXNzLlxuLy8gVGhpcyBudW1iZXIgc2hvdWxkIGJlIHVwZGF0ZWQgZXZlcnkgeWVhciBvciBzbyB0byBrZWVwIHRoZSBnZW5lcmF0ZWQgaWQgc2hvcnQuXG4vLyBUbyByZWdlbmVyYXRlIGBuZXcgRGF0ZSgpIC0gMGAgYW5kIGJ1bXAgdGhlIHZlcnNpb24uIEFsd2F5cyBidW1wIHRoZSB2ZXJzaW9uIVxudmFyIFJFRFVDRV9USU1FID0gMTQ1OTcwNzYwNjUxODtcblxuLy8gZG9uJ3QgY2hhbmdlIHVubGVzcyB3ZSBjaGFuZ2UgdGhlIGFsZ29zIG9yIFJFRFVDRV9USU1FXG4vLyBtdXN0IGJlIGFuIGludGVnZXIgYW5kIGxlc3MgdGhhbiAxNlxudmFyIHZlcnNpb24gPSA2O1xuXG4vLyBDb3VudGVyIGlzIHVzZWQgd2hlbiBzaG9ydGlkIGlzIGNhbGxlZCBtdWx0aXBsZSB0aW1lcyBpbiBvbmUgc2Vjb25kLlxudmFyIGNvdW50ZXI7XG5cbi8vIFJlbWVtYmVyIHRoZSBsYXN0IHRpbWUgc2hvcnRpZCB3YXMgY2FsbGVkIGluIGNhc2UgY291bnRlciBpcyBuZWVkZWQuXG52YXIgcHJldmlvdXNTZWNvbmRzO1xuXG4vKipcbiAqIEdlbmVyYXRlIHVuaXF1ZSBpZFxuICogUmV0dXJucyBzdHJpbmcgaWRcbiAqL1xuZnVuY3Rpb24gYnVpbGQoY2x1c3RlcldvcmtlcklkKSB7XG5cbiAgICB2YXIgc3RyID0gJyc7XG5cbiAgICB2YXIgc2Vjb25kcyA9IE1hdGguZmxvb3IoKERhdGUubm93KCkgLSBSRURVQ0VfVElNRSkgKiAwLjAwMSk7XG5cbiAgICBpZiAoc2Vjb25kcyA9PT0gcHJldmlvdXNTZWNvbmRzKSB7XG4gICAgICAgIGNvdW50ZXIrKztcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb3VudGVyID0gMDtcbiAgICAgICAgcHJldmlvdXNTZWNvbmRzID0gc2Vjb25kcztcbiAgICB9XG5cbiAgICBzdHIgPSBzdHIgKyBlbmNvZGUoYWxwaGFiZXQubG9va3VwLCB2ZXJzaW9uKTtcbiAgICBzdHIgPSBzdHIgKyBlbmNvZGUoYWxwaGFiZXQubG9va3VwLCBjbHVzdGVyV29ya2VySWQpO1xuICAgIGlmIChjb3VudGVyID4gMCkge1xuICAgICAgICBzdHIgPSBzdHIgKyBlbmNvZGUoYWxwaGFiZXQubG9va3VwLCBjb3VudGVyKTtcbiAgICB9XG4gICAgc3RyID0gc3RyICsgZW5jb2RlKGFscGhhYmV0Lmxvb2t1cCwgc2Vjb25kcyk7XG5cbiAgICByZXR1cm4gc3RyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ1aWxkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvYnVpbGQuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBhbHBoYWJldCA9IHJlcXVpcmUoJy4vYWxwaGFiZXQnKTtcblxuZnVuY3Rpb24gaXNTaG9ydElkKGlkKSB7XG4gICAgaWYgKCFpZCB8fCB0eXBlb2YgaWQgIT09ICdzdHJpbmcnIHx8IGlkLmxlbmd0aCA8IDYgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgY2hhcmFjdGVycyA9IGFscGhhYmV0LmNoYXJhY3RlcnMoKTtcbiAgICB2YXIgbGVuID0gaWQubGVuZ3RoO1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47aSsrKSB7XG4gICAgICAgIGlmIChjaGFyYWN0ZXJzLmluZGV4T2YoaWRbaV0pID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU2hvcnRJZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Nob3J0aWQvbGliL2lzLXZhbGlkLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gMDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Nob3J0aWQvbGliL3V0aWwvY2x1c3Rlci13b3JrZXItaWQtYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IENhcnRBUEkgZnJvbSAnLi4vbGliL0NhcnRBUEknO1xuaW1wb3J0IHNob3J0aWQgZnJvbSAnc2hvcnRpZCc7XG5jb25zdCBmcm9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG5hbWVfaW5wdXRgKTtcbmNvbnN0IHRvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHJlY2lwaWVudF9pbnB1dGApO1xuY29uc3QgbGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC51bmlxdWVfbGlua2ApO1xuXG5jb25zdCBoYW5kbGVTYXZlID0gKHt0ZXh0LCBpZCwgYXVkaW9TZXR0aW5ncywgaGVhZENvbG9yc30pID0+IHtcblxuICBDYXJ0QVBJLmNyZWF0ZSh7XG4gICAgdGV4dCxcbiAgICBpZCxcbiAgICBmcm9tOiBmcm9tLnZhbHVlIHx8ICdIdW1hbicsXG4gICAgdG86IHRvLnZhbHVlIHx8ICdGZWxsb3cgSHVtYW4nLFxuICAgIGF1ZGlvU2V0dGluZ3MsXG4gICAgaGVhZENvbG9yc1xuICB9KTtcblxuICBsaW5rLmlubmVySFRNTCA9IGBodHRwczovL2xvY2FsaG9zdDo4MDgwL3NhbnRhLmh0bWw/aWQ9JHtpZH1gO1xuICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIGBodHRwczovL2xvY2FsaG9zdDo4MDgwL3NhbnRhLmh0bWw/aWQ9JHtpZH1gKTtcbiAgbGluay5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsIGBfYmxhbmtgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZVNhdmU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvb2JqZWN0cy9TYXZlLmpzIiwiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnO1xuXG5jb25zdCB1cmwgPSBgL2FwaS9jYXJ0YDtcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gIGNyZWF0ZTogKHt0ZXh0LCBpZCwgZnJvbSwgYmxvYiwgdG8sIGF1ZGlvU2V0dGluZ3MsIGhlYWRDb2xvcnN9KSA9PiB7XG4gICAgY29uc3QgbWV0aG9kID0gYFBPU1RgO1xuICAgIC8vIGNvbnN0IG5ld0ZpbGVOYW1lID0gYCR7aWQuc3BsaXQoYCBgKS5qb2luKGBfYCl9YDtcbiAgICBjb25zdCBib2R5ID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgYm9keS5hcHBlbmQoYHRleHRgLCB0ZXh0KTtcbiAgICBib2R5LmFwcGVuZChgaWRgLCBpZCk7XG4gICAgYm9keS5hcHBlbmQoYGZyb21gLCBmcm9tKTtcbiAgICBib2R5LmFwcGVuZChgdG9gLCB0byk7XG4gICAgYm9keS5hcHBlbmQoYGF1ZGlvU2V0dGluZ3NgLCBhdWRpb1NldHRpbmdzKTtcbiAgICBib2R5LmFwcGVuZChgaGVhZENvbG9yc2AsIGhlYWRDb2xvcnMpO1xuXG4gICAgcmV0dXJuIGZldGNoKHVybCwge21ldGhvZCwgYm9keX0pXG4gICAgICAudGhlbihyID0+IHIuanNvbigpKTtcbiAgfSxcblxuICByZWFkOiAoKSA9PiB7XG4gICAgcmV0dXJuIGZldGNoKGAke3VybH0/aXNBY3RpdmU9dHJ1ZWApXG4gICAgICAudGhlbihyID0+IHIuanNvbigpKTtcbiAgfSxcblxuICByZWFkT25lOiBpZCA9PiB7XG4gICAgY29uc3QgbWV0aG9kID0gYEdFVGA7XG4gICAgcmV0dXJuIGZldGNoKGAke3VybH0vJHtpZH1gLCB7bWV0aG9kfSkudGhlbihyID0+IHIuanNvbigpKTtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9saWIvQ2FydEFQSS5qcyJdLCJzb3VyY2VSb290IjoiIn0=