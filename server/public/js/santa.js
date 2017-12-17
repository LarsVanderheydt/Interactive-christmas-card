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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
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
__webpack_require__(6);
module.exports = self.fetch.bind(self);


/***/ }),
/* 2 */
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
  },

  update: function update(_ref2) {
    var text = _ref2.text,
        id = _ref2.id,
        from = _ref2.from,
        to = _ref2.to,
        audioSettings = _ref2.audioSettings,
        headColors = _ref2.headColors;

    var method = 'PUT';
    var body = new FormData();
    body.append('text', text);
    body.append('id', id);
    body.append('from', from);
    body.append('to', to);
    body.append('audioSettings', audioSettings);
    body.append('headColors', headColors);

    return __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()(url + '/' + id, { method: method, body: body }).then(function (r) {
      return r.json();
    });
  }
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__objects_colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects_Materials__ = __webpack_require__(5);
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
/* 4 */,
/* 5 */
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
/* 6 */
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
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__objects_handleSantaAudio__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects_santaPageScene__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_getUrlParameter__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_cartAPI__ = __webpack_require__(2);
var AudioContext = window.AudioContext || window.webkitAudioContext;





var targetId = void 0,
    audioCtx = void 0;

var init = function init() {

  particlesJS.load('particles-js', '../assets/particles.json', function () {
    console.log('callback - particles.js config loaded');
  });

  targetId = Object(__WEBPACK_IMPORTED_MODULE_2__objects_getUrlParameter__["a" /* default */])("id");
  if (!targetId) window.location = "https://localhost:8080";

  __WEBPACK_IMPORTED_MODULE_3__lib_cartAPI__["a" /* default */].readOne(targetId).then(function (d) {
    if (d.statusCode) window.location = "https://localhost:8080";
    document.getElementById('from').innerHTML = 'from: ' + d.from;
    document.getElementById('to').innerHTML = 'to: ' + d.to;

    Object(__WEBPACK_IMPORTED_MODULE_0__objects_handleSantaAudio__["a" /* default */])(d);
    Object(__WEBPACK_IMPORTED_MODULE_1__objects_santaPageScene__["a" /* default */])(d);
  });
};

init();

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_cartAPI__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_Head__ = __webpack_require__(3);
var AudioContext = window.AudioContext || window.webkitAudioContext;



var targetId = void 0,
    audioCtx = void 0;
var play = document.getElementById('play_santa');
var $audio = document.getElementById('audio');

var pitchShifterProcessor = void 0;

var grainSize = 512,
    pitchRatio = 1.0,
    overlapRatio = 0.50;

var handleSantaAudio = function handleSantaAudio(cart) {
  audioCtx = new AudioContext();

  var audioSettings = JSON.parse(cart.audioSettings);
  // document.getElementById(`santa_audio`).src = `./uploads/${d.id}.ogg`;

  setTimeout(function () {
    var bufferLoader = new BufferLoader(audioCtx, ['./uploads/' + cart.id + '.ogg'], function (bufferList) {

      var loop = false;
      var source = void 0;

      document.getElementById('repeat').addEventListener('click', function () {
        loop = !loop;
        source.stop();
      });

      pitchRatio = audioSettings.pitch;
      overlapRatio = audioSettings.overlap;

      $audio.addEventListener('click', function () {
        source = '';
        source = audioCtx.createBufferSource();
        source.buffer = bufferList[0];

        // source.connect(audioCtx.destination)
        source.loop = loop;
        source.connect(pitchShifterProcessor);
        source.start();
      });
    });

    bufferLoader.load();
    initProcessor();
  }, 1000);
};

var linearInterpolation = function linearInterpolation(a, b, t) {
  return a + (b - a) * t;
};

var initProcessor = function initProcessor() {

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
};

var hannWindow = function hannWindow(length) {
  var window = new Float32Array(length);
  for (var i = 0; i < length; i++) {
    window[i] = 0.5 * (1 - Math.cos(2 * Math.PI * i / (length - 1)));
  }
  return window;
};

/* harmony default export */ __webpack_exports__["a"] = (handleSantaAudio);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes_Head__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_cartAPI__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__colors__ = __webpack_require__(0);




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
    windowHalfX = void 0,
    windowHalfY = void 0;

var mousePos = { x: 0, y: 0 };

var santaScene = function santaScene(data) {
  createScene();
  createLights();

  var headColors = JSON.parse(data.headColors);
  setColors(headColors);

  head = new __WEBPACK_IMPORTED_MODULE_0__classes_Head__["a" /* default */](); // show and handle head
  scene.add(head.mesh);
  loop();
};

var setColors = function setColors(headColors) {
  __WEBPACK_IMPORTED_MODULE_2__colors__["a" /* default */].skin = headColors.skin;
  __WEBPACK_IMPORTED_MODULE_2__colors__["a" /* default */].freckles = headColors.freckles;
  __WEBPACK_IMPORTED_MODULE_2__colors__["a" /* default */].eye = headColors.eye;
  __WEBPACK_IMPORTED_MODULE_2__colors__["a" /* default */].glasses = headColors.glasses;
  __WEBPACK_IMPORTED_MODULE_2__colors__["a" /* default */].hat = headColors.hat;
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

var loaderManager = new THREE.LoadingManager();

var handleWindowResize = function handleWindowResize(e) {
  HEIGHT = window.innerHeight;
  WIDTH = window.innerWidth;
  renderer.setSize(WIDTH, HEIGHT);
  camera.aspect = WIDTH / HEIGHT;
  camera.updateProjectionMatrix();
};

var isMobile = /iPhone|Android/i.test(navigator.userAgent);

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

var loop = function loop() {
  blinkLoop();
  //head.dizzy();
  var xTarget = mousePos.x - windowHalfX;
  var yTarget = mousePos.y - windowHalfY;

  head.idle(xTarget, yTarget);
  renderer.render(scene, camera);
  requestAnimationFrame(loop);
};

/* harmony default export */ __webpack_exports__["a"] = (santaScene);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var getUrlParameter = function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? false : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

/* harmony default export */ __webpack_exports__["a"] = (getUrlParameter);

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmE2MWVjZjI3NWM2NjlmY2YwOWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL29iamVjdHMvY29sb3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLWZldGNoL2ZldGNoLW5wbS1icm93c2VyaWZ5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9saWIvY2FydEFQSS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY2xhc3Nlcy9IZWFkLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9vYmplY3RzL01hdGVyaWFscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd2hhdHdnLWZldGNoL2ZldGNoLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zYW50YVNjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvb2JqZWN0cy9oYW5kbGVTYW50YUF1ZGlvLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9vYmplY3RzL3NhbnRhUGFnZVNjZW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9vYmplY3RzL2dldFVybFBhcmFtZXRlci5qcyJdLCJuYW1lcyI6WyJDb2xvcnMiLCJza2luIiwiZnJlY2tsZXMiLCJ3aGl0ZSIsImdsYXNzZXMiLCJ0ZWV0aCIsImJsYWNrIiwiZXllIiwiaGF0IiwidXJsIiwiY3JlYXRlIiwidGV4dCIsImlkIiwiZnJvbSIsImJsb2IiLCJ0byIsImF1ZGlvU2V0dGluZ3MiLCJoZWFkQ29sb3JzIiwibWV0aG9kIiwiYm9keSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiZmV0Y2giLCJ0aGVuIiwiciIsImpzb24iLCJyZWFkIiwicmVhZE9uZSIsInVwZGF0ZSIsImlzQmxpbmtpbmciLCJIZWFkIiwibWVzaCIsIlRIUkVFIiwiT2JqZWN0M0QiLCJoZWFkR2VvbSIsIkJveEJ1ZmZlckdlb21ldHJ5Iiwic2tpbk1hdCIsIk1lc2hMYW1iZXJ0TWF0ZXJpYWwiLCJjb2xvciIsImZsYXRTaGFkaW5nIiwiZXllTWF0IiwiTWVzaFBob25nTWF0ZXJpYWwiLCJoZWFkIiwiTWVzaCIsImNhc3RTaGFkb3ciLCJyZWNlaXZlU2hhZG93IiwiYWRkIiwiYmVhcmQiLCJwb3NpdGlvbiIsInkiLCJ6IiwiQmVhcmQiLCJHbGFzc2VzIiwiSGFpciIsIkV5ZXMiLCJFeWVCcm93cyIsIkhhdCIsIkZyZWNrbGVzIiwiRmVhdHVyZXMiLCJpZGxlIiwibm9ybWFsaXplIiwidiIsInZtaW4iLCJ2bWF4IiwidG1pbiIsInRtYXgiLCJudiIsIk1hdGgiLCJtYXgiLCJtaW4iLCJkdiIsInBjIiwiZHQiLCJ0diIsInNwZWVkIiwiZXllQmx1ZVJpZ2h0UG9zWCIsImV5ZUJsdWVMZWZ0UG9zWCIsImV5ZUJsdWVSaWdodFBvc1kiLCJleWVCbHVlTGVmdFBvc1kiLCJleWVCcm93UmlnaHRQb3NZIiwiZXllQnJvd0xlZnRQb3NZIiwiZXllQmx1ZVJpZ2h0IiwieCIsImV5ZUJsdWVMZWZ0IiwiZXllQnJvd1JpZ2h0IiwiZXllQnJvd0xlZnQiLCJ4VGFyZ2V0IiwieVRhcmdldCIsImRpc3RhbmNlIiwicm90YXRpb24iLCJzaW4iLCJEYXRlIiwibm93IiwiUEkiLCJtb3VzdGFjaGUiLCJjb3MiLCJ1cGRhdGVCb2R5IiwiYmVhcmRHZW9tTWVyZ2VkIiwiR2VvbWV0cnkiLCJiZWFyZDFHZW9tIiwiQm94R2VvbWV0cnkiLCJiZWFyZDEiLCJNYXQiLCJ3aGl0ZU1hdCIsImFwcGx5TWF0cml4IiwiTWF0cml4NCIsIm1ha2VUcmFuc2xhdGlvbiIsInVwZGF0ZU1hdHJpeCIsIm1lcmdlIiwiZ2VvbWV0cnkiLCJtYXRyaXgiLCJiZWFyZDIiLCJzY2FsZSIsImJlYXJkMyIsImNsb25lIiwiYmVhcmQ0IiwiYmVhcmQyR2VvbSIsInZlcnRpY2VzIiwiYmVhcmQ1IiwiYmVhcmQzR2VvbSIsImJlYXJkNiIsImJlYXJkNyIsImJlYXJkOCIsImJlYXJkNEdlb20iLCJiZWFyZDkiLCJiZWFyZDVHZW9tIiwiYmVhcmQxMCIsImJlYXJkMTEiLCJiZWFyZE1lcmdlZCIsIm1vdXRoR2VvbSIsIm1vdXRoIiwiYmxhY2tNYXQiLCJzZXQiLCJ0ZWV0aEdlb20iLCJ0ZWV0aE1hdCIsIm1vdXN0YWNoZUdlb20iLCJnbGFzc2VzTWF0IiwiZnJhbWVHZW9tTWVyZ2VkIiwiZnJhbWVPdXRlckdlb20iLCJDeWxpbmRlckdlb21ldHJ5IiwiZnJhbWVJbm5lckdlb20iLCJtYWtlUm90YXRpb25YIiwiZnJhbWVCU1AiLCJUaHJlZUJTUCIsImZyYW1lQ3V0QlNQIiwiZnJhbWVpbnRlcnNlY3Rpb25CU1AiLCJzdWJ0cmFjdCIsImZyYW1lTGVmdCIsInRvTWVzaCIsImZyYW1lUmlnaHQiLCJtYWtlUm90YXRpb25aIiwiZnJhbWVNaWRHZW9tIiwiZnJhbWVNaWQiLCJmcmFtZUVuZEdlb20iLCJmcmFtZUVuZFJpZ2h0IiwiZnJhbWVFbmRMZWZ0IiwiZnJhbWVTcG9rZUdlb20iLCJmcmFtZVNwb2tlUmlnaHQiLCJmcmFtZVNwb2tlTGVmdCIsImZyYW1lTWVyZ2VkIiwiaGFpciIsImhhaXJHZW9tTWVyZ2VkIiwiaGFpckZsYXRHZW9tIiwiaGFpcjEiLCJoYWlyMiIsImhhaXIzIiwiaGFpcjQiLCJoYWlyNiIsImhhaXJGbGF0QmFja0dlb20iLCJoYWlyNSIsImhhaXJNZXJnZWQiLCJleWVzIiwiZXllV2hpdGVHZW9tIiwiUGxhbmVHZW9tZXRyeSIsImV5ZVdoaXRlUmlnaHQiLCJleWVCbHVlR2VvbSIsImV5ZVB1cGlsR2VvbSIsImV5ZVB1cGlsUmlnaHQiLCJleWVXaGl0ZUxlZnQiLCJleWVQdXBpbExlZnQiLCJleWVCcm93cyIsImV5ZUJyb3dHZW9tIiwiaGF0TWF0IiwiYmFuZEdlb20iLCJUb3J1c0dlb21ldHJ5IiwiYmlnQ29uZUdlb20iLCJzbWFsbENvbmVHZW9tIiwiaGF0RGluZ2xlR2VvbSIsIlNwaGVyZUdlb21ldHJ5IiwiYmFuZCIsImJpZ0NvbmUiLCJzbWFsbENvbmUiLCJtYWtlUm90YXRpb25ZIiwiaGF0RGluZ2xlIiwiZnJlY2tsZXNNYXQiLCJmcmVja2xlc0dlb21NZXJnZWQiLCJmcmVja2xlc0dlb20iLCJmcmVja2xlMSIsImZyZWNrbGUyIiwiZnJlY2tsZTMiLCJmcmVja2xlNCIsImZyZWNrbGU1IiwiZnJlY2tsZTYiLCJmcmVja2xlZE1lcmdlZCIsImVhckdlb20iLCJlYXJSaWdodCIsImVhckxlZnQiLCJub3NlR2VvbSIsIm5vc2UiLCJNYXRlcmlhbHMiLCJNZXNoTm9ybWFsTWF0ZXJpYWwiLCJBdWRpb0NvbnRleHQiLCJ3aW5kb3ciLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJ0YXJnZXRJZCIsImF1ZGlvQ3R4IiwiaW5pdCIsInBhcnRpY2xlc0pTIiwibG9hZCIsImNvbnNvbGUiLCJsb2ciLCJnZXRVcmxQYXJhbWV0ZXIiLCJsb2NhdGlvbiIsIkNhcnRBUEkiLCJkIiwic3RhdHVzQ29kZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJoYW5kbGVTYW50YUF1ZGlvIiwic2FudGFTY2VuZSIsInBsYXkiLCIkYXVkaW8iLCJwaXRjaFNoaWZ0ZXJQcm9jZXNzb3IiLCJncmFpblNpemUiLCJwaXRjaFJhdGlvIiwib3ZlcmxhcFJhdGlvIiwiSlNPTiIsInBhcnNlIiwiY2FydCIsInNldFRpbWVvdXQiLCJidWZmZXJMb2FkZXIiLCJCdWZmZXJMb2FkZXIiLCJsb29wIiwic291cmNlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3AiLCJwaXRjaCIsIm92ZXJsYXAiLCJjcmVhdGVCdWZmZXJTb3VyY2UiLCJidWZmZXIiLCJidWZmZXJMaXN0IiwiY29ubmVjdCIsInN0YXJ0IiwiaW5pdFByb2Nlc3NvciIsImxpbmVhckludGVycG9sYXRpb24iLCJhIiwiYiIsInQiLCJkaXNjb25uZWN0IiwiY3JlYXRlU2NyaXB0UHJvY2Vzc29yIiwiY3JlYXRlSmF2YVNjcmlwdE5vZGUiLCJGbG9hdDMyQXJyYXkiLCJncmFpbldpbmRvdyIsImhhbm5XaW5kb3ciLCJvbmF1ZGlvcHJvY2VzcyIsImV2ZW50IiwiaW5wdXREYXRhIiwiaW5wdXRCdWZmZXIiLCJnZXRDaGFubmVsRGF0YSIsIm91dHB1dERhdGEiLCJvdXRwdXRCdWZmZXIiLCJpIiwibGVuZ3RoIiwiZ3JhaW5EYXRhIiwiaiIsImluZGV4IiwiZmxvb3IiLCJyb3VuZCIsImRlc3RpbmF0aW9uIiwic2NlbmUiLCJjYW1lcmEiLCJmaWVsZE9mVmlldyIsImFzcGVjdFJhdGlvIiwibmVhclBsYW5lIiwiZmFyUGxhbmUiLCJIRUlHSFQiLCJXSURUSCIsImdsb2JhbExpZ2h0Iiwic2hhZG93TGlnaHQiLCJiYWNrTGlnaHQiLCJsaWdodCIsInJlbmRlcmVyIiwiY29udGFpbmVyIiwibG9hZGVkIiwid2luZG93SGFsZlgiLCJ3aW5kb3dIYWxmWSIsIm1vdXNlUG9zIiwiY3JlYXRlU2NlbmUiLCJjcmVhdGVMaWdodHMiLCJkYXRhIiwic2V0Q29sb3JzIiwiaW5uZXJIZWlnaHQiLCJpbm5lcldpZHRoIiwiU2NlbmUiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsIldlYkdMUmVuZGVyZXIiLCJhbHBoYSIsImFudGlhbGlhcyIsInNldFBpeGVsUmF0aW8iLCJkZXZpY2VQaXhlbFJhdGlvIiwic2V0U2l6ZSIsInNoYWRvd01hcCIsImVuYWJsZWQiLCJ0eXBlIiwiUENGU29mdFNoYWRvd01hcCIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsIm9uV2luZG93UmVzaXplIiwiaGFuZGxlTW91c2VNb3ZlIiwiYXNwZWN0IiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsImNsaWVudFgiLCJjbGllbnRZIiwibG9hZGVyTWFuYWdlciIsIkxvYWRpbmdNYW5hZ2VyIiwiaGFuZGxlV2luZG93UmVzaXplIiwiaXNNb2JpbGUiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiSGVtaXNwaGVyZUxpZ2h0IiwiRGlyZWN0aW9uYWxMaWdodCIsInNoYWRvdyIsIm1hcFNpemUiLCJ3aWR0aCIsImhlaWdodCIsIkFtYmllbnRMaWdodCIsImJsaW5rTG9vcCIsInJhbmRvbSIsImJsaW5rIiwiVHdlZW5NYXgiLCJ5b3lvIiwicmVwZWF0Iiwib25Db21wbGV0ZSIsInJlbmRlciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm5hbWUiLCJyZXBsYWNlIiwicmVnZXgiLCJSZWdFeHAiLCJyZXN1bHRzIiwiZXhlYyIsInNlYXJjaCIsImRlY29kZVVSSUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdEQSxJQUFNQSxTQUFTO0FBQ2JDLFFBQU0sUUFETztBQUViQyxZQUFVLFFBRkc7QUFHYkMsU0FBTyxRQUhNO0FBSWJDLFdBQVMsUUFKSTtBQUtiQyxTQUFPLFFBTE07QUFNYkMsU0FBTyxRQU5NO0FBT2JDLE9BQUssUUFQUTtBQVFiQyxPQUFLO0FBUlEsQ0FBZjtBQVVBLHlEQUFlUixNQUFmLEU7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ0xBOztBQUVBLElBQU1TLGlCQUFOOztBQUVBLHlEQUFlOztBQUViQyxVQUFRLHNCQUEyRDtBQUFBLFFBQXpEQyxJQUF5RCxRQUF6REEsSUFBeUQ7QUFBQSxRQUFuREMsRUFBbUQsUUFBbkRBLEVBQW1EO0FBQUEsUUFBL0NDLElBQStDLFFBQS9DQSxJQUErQztBQUFBLFFBQXpDQyxJQUF5QyxRQUF6Q0EsSUFBeUM7QUFBQSxRQUFuQ0MsRUFBbUMsUUFBbkNBLEVBQW1DO0FBQUEsUUFBL0JDLGFB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WUFBWSxJQUFaLEdBQW1CLEtBQW5CLEdBQTJCRyxtQkFBbUJILFFBQVEsQ0FBUixFQUFXSCxPQUFYLENBQW1CLEtBQW5CLEVBQTBCLEdBQTFCLENBQW5CLENBQWxDO0FBQ0QsQ0FMRDs7QUFPQSx5REFBZS9ILGVBQWYsRSIsImZpbGUiOiJqcy9zYW50YS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2YTYxZWNmMjc1YzY2OWZjZjA5ZiIsImNvbnN0IENvbG9ycyA9IHtcbiAgc2tpbjogMHhmZmUwYmQsXG4gIGZyZWNrbGVzOiAweGNmYmE5NixcbiAgd2hpdGU6IDB4ZTllYmVlLFxuICBnbGFzc2VzOiAweGY5YzQyMSxcbiAgdGVldGg6IDB4ZmZmZmZmLFxuICBibGFjazogMHgyZTJlMmUsXG4gIGV5ZTogMHg2Mjk1YTgsXG4gIGhhdDogMHg3MjAzMTRcbn07XG5leHBvcnQgZGVmYXVsdCBDb2xvcnM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvb2JqZWN0cy9jb2xvcnMuanMiLCIvLyB0aGUgd2hhdHdnLWZldGNoIHBvbHlmaWxsIGluc3RhbGxzIHRoZSBmZXRjaCgpIGZ1bmN0aW9uXG4vLyBvbiB0aGUgZ2xvYmFsIG9iamVjdCAod2luZG93IG9yIHNlbGYpXG4vL1xuLy8gUmV0dXJuIHRoYXQgYXMgdGhlIGV4cG9ydCBmb3IgdXNlIGluIFdlYnBhY2ssIEJyb3dzZXJpZnkgZXRjLlxucmVxdWlyZSgnd2hhdHdnLWZldGNoJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHNlbGYuZmV0Y2guYmluZChzZWxmKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtZmV0Y2gvZmV0Y2gtbnBtLWJyb3dzZXJpZnkuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XG5cbmNvbnN0IHVybCA9IGAvYXBpL2NhcnRgO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgY3JlYXRlOiAoe3RleHQsIGlkLCBmcm9tLCBibG9iLCB0bywgYXVkaW9TZXR0aW5ncywgaGVhZENvbG9yc30pID0+IHtcbiAgICBjb25zdCBtZXRob2QgPSBgUE9TVGA7XG4gICAgLy8gY29uc3QgbmV3RmlsZU5hbWUgPSBgJHtpZC5zcGxpdChgIGApLmpvaW4oYF9gKX1gO1xuICAgIGNvbnN0IGJvZHkgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBib2R5LmFwcGVuZChgdGV4dGAsIHRleHQpO1xuICAgIGJvZHkuYXBwZW5kKGBpZGAsIGlkKTtcbiAgICBib2R5LmFwcGVuZChgZnJvbWAsIGZyb20pO1xuICAgIGJvZHkuYXBwZW5kKGB0b2AsIHRvKTtcbiAgICBib2R5LmFwcGVuZChgYXVkaW9TZXR0aW5nc2AsIGF1ZGlvU2V0dGluZ3MpO1xuICAgIGJvZHkuYXBwZW5kKGBoZWFkQ29sb3JzYCwgaGVhZENvbG9ycyk7XG5cbiAgICByZXR1cm4gZmV0Y2godXJsLCB7bWV0aG9kLCBib2R5fSlcbiAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpO1xuICB9LFxuXG4gIHJlYWQ6ICgpID0+IHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dXJsfT9pc0FjdGl2ZT10cnVlYClcbiAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpO1xuICB9LFxuXG4gIHJlYWRPbmU6IGlkID0+IHtcbiAgICBjb25zdCBtZXRob2QgPSBgR0VUYDtcbiAgICByZXR1cm4gZmV0Y2goYCR7dXJsfS8ke2lkfWAsIHttZXRob2R9KS50aGVuKHIgPT4gci5qc29uKCkpO1xuICB9LFxuXG4gIHVwZGF0ZTogKHt0ZXh0LCBpZCwgZnJvbSwgdG8sIGF1ZGlvU2V0dGluZ3MsIGhlYWRDb2xvcnN9KSA9PsKge1xuICAgIGNvbnN0IG1ldGhvZCA9IGBQVVRgO1xuICAgIGNvbnN0IGJvZHkgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBib2R5LmFwcGVuZChgdGV4dGAsIHRleHQpO1xuICAgIGJvZHkuYXBwZW5kKGBpZGAsIGlkKTtcbiAgICBib2R5LmFwcGVuZChgZnJvbWAsIGZyb20pO1xuICAgIGJvZHkuYXBwZW5kKGB0b2AsIHRvKTtcbiAgICBib2R5LmFwcGVuZChgYXVkaW9TZXR0aW5nc2AsIGF1ZGlvU2V0dGluZ3MpO1xuICAgIGJvZHkuYXBwZW5kKGBoZWFkQ29sb3JzYCwgaGVhZENvbG9ycyk7XG5cbiAgICByZXR1cm4gZmV0Y2goYCR7dXJsfS8ke2lkfWAsIHttZXRob2QsIGJvZHl9KS50aGVuKHIgPT4gci5qc29uKCkpO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2xpYi9jYXJ0QVBJLmpzIiwiaW1wb3J0IENvbG9ycyBmcm9tICcuLi9vYmplY3RzL2NvbG9ycyc7XG5pbXBvcnQgTWF0IGZyb20gJy4uL29iamVjdHMvTWF0ZXJpYWxzJztcblxubGV0IGlzQmxpbmtpbmcgPSBmYWxzZTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubWVzaCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuXG4gICAgbGV0IGhlYWRHZW9tID0gbmV3IFRIUkVFLkJveEJ1ZmZlckdlb21ldHJ5KDE2LCAxNiwgMTYpO1xuICAgIGxldCBza2luTWF0ID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoe2NvbG9yOiBDb2xvcnMuc2tpbiwgZmxhdFNoYWRpbmc6IHRydWV9KTtcbiAgICBsZXQgZXllTWF0ID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHtjb2xvcjogQ29sb3JzLmV5ZSwgZmxhdFNoYWRpbmc6IHRydWV9KTtcblxuICAgIHRoaXMuaGVhZCA9IG5ldyBUSFJFRS5NZXNoKGhlYWRHZW9tLHNraW5NYXQpO1xuICAgIHRoaXMuaGVhZC5jYXN0U2hhZG93ID0gdHJ1ZTtcbiAgICB0aGlzLmhlYWQucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuICAgIHRoaXMubWVzaC5hZGQodGhpcy5oZWFkKTtcblxuICAgIHRoaXMuYmVhcmQgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICB0aGlzLmJlYXJkLnBvc2l0aW9uLnkgPSAtNztcbiAgICB0aGlzLmJlYXJkLnBvc2l0aW9uLnogPSAwLjU7XG4gICAgdGhpcy5oZWFkLmFkZCh0aGlzLmJlYXJkKTtcblxuICAgIHRoaXMuQmVhcmQoKTtcbiAgICB0aGlzLkdsYXNzZXMoKTtcbiAgICB0aGlzLkhhaXIoKTtcbiAgICB0aGlzLkV5ZXMoKTtcbiAgICB0aGlzLkV5ZUJyb3dzKCk7XG4gICAgdGhpcy5IYXQoKTtcbiAgICB0aGlzLkZyZWNrbGVzKCk7XG4gICAgdGhpcy5GZWF0dXJlcygpO1xuICAgIHRoaXMuaWRsZSgpO1xuICAgIHRoaXMubm9ybWFsaXplKCk7XG4gIH1cblxuICBub3JtYWxpemUodiwgdm1pbiwgdm1heCwgdG1pbiwgdG1heCkge1xuICAgIGNvbnN0IG52ID0gTWF0aC5tYXgoTWF0aC5taW4odiwgdm1heCksIHZtaW4pO1xuICAgIGNvbnN0IGR2ID0gdm1heCAtIHZtaW47XG4gICAgY29uc3QgcGMgPSAobnYgLSB2bWluKSAvIGR2O1xuICAgIGNvbnN0IGR0ID0gdG1heCAtIHRtaW47XG4gICAgY29uc3QgdHYgPSB0bWluICsgKHBjICogZHQpO1xuICAgIHJldHVybiB0djtcbiAgfVxuXG4gIHVwZGF0ZUJvZHkoc3BlZWQsIGV5ZUJsdWVSaWdodFBvc1gsIGV5ZUJsdWVMZWZ0UG9zWCwgZXllQmx1ZVJpZ2h0UG9zWSwgZXllQmx1ZUxlZnRQb3NZLCBleWVCcm93UmlnaHRQb3NZLCBleWVCcm93TGVmdFBvc1kpIHtcbiAgICB0aGlzLmV5ZUJsdWVSaWdodC5wb3NpdGlvbi54ICs9IChleWVCbHVlUmlnaHRQb3NYIC0gdGhpcy5leWVCbHVlUmlnaHQucG9zaXRpb24ueCkgLyBzcGVlZDtcbiAgICB0aGlzLmV5ZUJsdWVMZWZ0LnBvc2l0aW9uLnggKz0gKGV5ZUJsdWVMZWZ0UG9zWCAtIHRoaXMuZXllQmx1ZUxlZnQucG9zaXRpb24ueCkgLyBzcGVlZDtcblxuICAgIHRoaXMuZXllQmx1ZVJpZ2h0LnBvc2l0aW9uLnkgKz0gKGV5ZUJsdWVSaWdodFBvc1kgLSB0aGlzLmV5ZUJsdWVSaWdodC5wb3NpdGlvbi55KSAvIHNwZWVkO1xuICAgIHRoaXMuZXllQmx1ZUxlZnQucG9zaXRpb24ueSArPSAoZXllQmx1ZUxlZnRQb3NZIC0gdGhpcy5leWVCbHVlTGVmdC5wb3NpdGlvbi55KSAvIHNwZWVkO1xuXG4gICAgdGhpcy5leWVCcm93UmlnaHQucG9zaXRpb24ueSArPSAoZXllQnJvd1JpZ2h0UG9zWSAtIHRoaXMuZXllQnJvd1JpZ2h0LnBvc2l0aW9uLnkpIC8gc3BlZWQ7XG4gICAgdGhpcy5leWVCcm93TGVmdC5wb3NpdGlvbi55ICs9IChleWVCcm93TGVmdFBvc1kgLSB0aGlzLmV5ZUJyb3dMZWZ0LnBvc2l0aW9uLnkpIC8gc3BlZWQ7XG4gIH1cblxuICBpZGxlKHhUYXJnZXQgPSAwLCB5VGFyZ2V0ID0gMCkge1xuICAgIGxldCBkaXN0YW5jZSA9IDE7XG5cbiAgICB0aGlzLmhlYWQucm90YXRpb24ueiA9IE1hdGguc2luKERhdGUubm93KCkgKiAwLjAwNSkgKiBNYXRoLlBJICogMC4wMDU7XG4gICAgdGhpcy5oZWFkLnJvdGF0aW9uLnggPSBNYXRoLnNpbihEYXRlLm5vdygpICogMC4wMDQpICogTWF0aC5QSSAqIDAuMDM7XG5cbiAgICBjb25zdCBleWVCbHVlUmlnaHRQb3NYID0gdGhpcy5ub3JtYWxpemUoeFRhcmdldCwgLTIwMCwgMjAwLCAtMC42LCAwLjYpO1xuICAgIGNvbnN0IGV5ZUJsdWVMZWZ0UG9zWCA9IHRoaXMubm9ybWFsaXplKHhUYXJnZXQsIC0yMDAsIDIwMCwgLTAuNiwgMC42KTtcblxuICAgIGNvbnN0IGV5ZUJsdWVSaWdodFBvc1kgPSB0aGlzLm5vcm1hbGl6ZSh5VGFyZ2V0LCAtMjAwLCAyMDAsIDAuNiwgLTAuNik7XG4gICAgY29uc3QgZXllQmx1ZUxlZnRQb3NZID0gdGhpcy5ub3JtYWxpemUoeVRhcmdldCwgLTIwMCwgMjAwLCAwLjYsIC0wLjYpO1xuXG4gICAgY29uc3QgZXllQnJvd1JpZ2h0UG9zWSA9IHRoaXMubm9ybWFsaXplKHhUYXJnZXQsIC0yMDAsIDIwMCwgLTEsIDAuOCk7XG4gICAgY29uc3QgZXllQnJvd0xlZnRQb3NZID0gdGhpcy5ub3JtYWxpemUoeFRhcmdldCwgLTIwMCwgMjAwLCAtMSwgMC44KTtcblxuICAgIHRoaXMubW91c3RhY2hlLnBvc2l0aW9uLnkgPSBNYXRoLmNvcyhEYXRlLm5vdygpICogMC4wMSkgKiBkaXN0YW5jZSAvIDQ7XG4gICAgdGhpcy5tb3VzdGFjaGUucm90YXRpb24ueiA9IE1hdGguc2luKERhdGUubm93KCkgKiAwLjAxKSAqIE1hdGguUEkgKiAwLjAxO1xuXG4gICAgdGhpcy5tZXNoLnJvdGF0aW9uLnkgPSBNYXRoLnNpbihEYXRlLm5vdygpICogMC4wMDIpICogTWF0aC5QSSAqIDAuMDU7XG4gICAgdGhpcy51cGRhdGVCb2R5KDEwLCBleWVCbHVlUmlnaHRQb3NYLCBleWVCbHVlTGVmdFBvc1gsIGV5ZUJsdWVSaWdodFBvc1ksIGV5ZUJsdWVMZWZ0UG9zWSwgZXllQnJvd1JpZ2h0UG9zWSwgZXllQnJvd0xlZnRQb3NZKTtcbiAgfVxuXG4gIEJlYXJkKCkge1xuICAgIGxldCBiZWFyZEdlb21NZXJnZWQgPSBuZXcgVEhSRUUuR2VvbWV0cnkoKTtcblxuICAgIGxldCBiZWFyZDFHZW9tID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDIsIDEwLCAxNik7XG5cbiAgICBsZXQgYmVhcmQxID0gbmV3IFRIUkVFLk1lc2goYmVhcmQxR2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBiZWFyZDEuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oOSwgMCwgMCkpO1xuICAgIGJlYXJkMS51cGRhdGVNYXRyaXgoKTtcbiAgICBiZWFyZEdlb21NZXJnZWQubWVyZ2UoYmVhcmQxLmdlb21ldHJ5LCBiZWFyZDEubWF0cml4KTtcblxuICAgIGxldCBiZWFyZDIgPSBuZXcgVEhSRUUuTWVzaChiZWFyZDFHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGJlYXJkMi5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbig3LCAtMiwgMikpO1xuICAgIGJlYXJkMi5zY2FsZS56ID0gMC44O1xuICAgIGJlYXJkMi51cGRhdGVNYXRyaXgoKTtcbiAgICBiZWFyZEdlb21NZXJnZWQubWVyZ2UoYmVhcmQyLmdlb21ldHJ5LCBiZWFyZDIubWF0cml4KTtcblxuICAgIGxldCBiZWFyZDMgPSBiZWFyZDEuY2xvbmUoKTtcbiAgICBiZWFyZDMucG9zaXRpb24ueCA9IC1iZWFyZDEucG9zaXRpb24ueDtcbiAgICBiZWFyZDMudXBkYXRlTWF0cml4KCk7XG4gICAgYmVhcmRHZW9tTWVyZ2VkLm1lcmdlKGJlYXJkMy5nZW9tZXRyeSwgYmVhcmQzLm1hdHJpeCk7XG5cbiAgICBsZXQgYmVhcmQ0ID0gYmVhcmQyLmNsb25lKCk7XG4gICAgYmVhcmQ0LnBvc2l0aW9uLnggPSAtYmVhcmQyLnBvc2l0aW9uLng7XG4gICAgYmVhcmQ0LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGJlYXJkR2VvbU1lcmdlZC5tZXJnZShiZWFyZDQuZ2VvbWV0cnksIGJlYXJkNC5tYXRyaXgpO1xuXG4gICAgbGV0IGJlYXJkMkdlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMywgMTQsIDEwKTtcbiAgICBiZWFyZDJHZW9tLnZlcnRpY2VzWzJdLnogLT0gMjtcbiAgICBiZWFyZDJHZW9tLnZlcnRpY2VzWzddLnogLT0gMjtcblxuICAgIGxldCBiZWFyZDUgPSBuZXcgVEhSRUUuTWVzaChiZWFyZDJHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGJlYXJkNS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbig1LCAtNSwgNCkpO1xuICAgIGJlYXJkNS51cGRhdGVNYXRyaXgoKTtcbiAgICBiZWFyZEdlb21NZXJnZWQubWVyZ2UoYmVhcmQ1Lmdlb21ldHJ5LCBiZWFyZDUubWF0cml4KTtcblxuICAgIGxldCBiZWFyZDNHZW9tID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDIuNSwgMTQsIDEwKTtcbiAgICBiZWFyZDNHZW9tLnZlcnRpY2VzWzJdLnogLT0gMjtcbiAgICBiZWFyZDNHZW9tLnZlcnRpY2VzWzddLnogLT0gMjtcblxuICAgIGxldCBiZWFyZDYgPSBuZXcgVEhSRUUuTWVzaChiZWFyZDNHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGJlYXJkNi5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigyLjUsIC02LCA2KSk7XG4gICAgYmVhcmQ2LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGJlYXJkR2VvbU1lcmdlZC5tZXJnZShiZWFyZDYuZ2VvbWV0cnksIGJlYXJkNi5tYXRyaXgpO1xuXG4gICAgbGV0IGJlYXJkNyA9IGJlYXJkNS5jbG9uZSgpO1xuICAgIGJlYXJkNy5wb3NpdGlvbi54ID0gLWJlYXJkNS5wb3NpdGlvbi54O1xuICAgIGJlYXJkNy51cGRhdGVNYXRyaXgoKTtcbiAgICBiZWFyZEdlb21NZXJnZWQubWVyZ2UoYmVhcmQ3Lmdlb21ldHJ5LCBiZWFyZDcubWF0cml4KTtcblxuICAgIGxldCBiZWFyZDggPSBiZWFyZDYuY2xvbmUoKTtcbiAgICBiZWFyZDgucG9zaXRpb24ueCA9IC1iZWFyZDYucG9zaXRpb24ueDtcbiAgICBiZWFyZDgudXBkYXRlTWF0cml4KCk7XG4gICAgYmVhcmRHZW9tTWVyZ2VkLm1lcmdlKGJlYXJkOC5nZW9tZXRyeSwgYmVhcmQ4Lm1hdHJpeCk7XG5cbiAgICBsZXQgYmVhcmQ0R2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgyLjUsIDE0LjUsIDEwKTtcbiAgICBiZWFyZDRHZW9tLnZlcnRpY2VzWzJdLnogLT0gMTtcbiAgICBiZWFyZDRHZW9tLnZlcnRpY2VzWzddLnogLT0gMTtcblxuICAgIGxldCBiZWFyZDkgPSBuZXcgVEhSRUUuTWVzaChiZWFyZDRHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGJlYXJkOS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigwLCAtNywgNS43NSkpO1xuICAgIGJlYXJkOS51cGRhdGVNYXRyaXgoKTtcbiAgICBiZWFyZEdlb21NZXJnZWQubWVyZ2UoYmVhcmQ5Lmdlb21ldHJ5LCBiZWFyZDkubWF0cml4KTtcblxuICAgIGxldCBiZWFyZDVHZW9tID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDQsIDgsIDgpO1xuICAgIGxldCBiZWFyZDEwID0gbmV3IFRIUkVFLk1lc2goYmVhcmQ1R2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBiZWFyZDEwLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKC02LCAtMSwgLTIpKTtcbiAgICBiZWFyZDEwLnVwZGF0ZU1hdHJpeCgpO1xuICAgIGJlYXJkR2VvbU1lcmdlZC5tZXJnZShiZWFyZDEwLmdlb21ldHJ5LCBiZWFyZDEwLm1hdHJpeCk7XG5cbiAgICBsZXQgYmVhcmQxMSA9IG5ldyBUSFJFRS5NZXNoKGJlYXJkNUdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgYmVhcmQxMS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigwLCAtNSwgLTIpKTtcbiAgICBiZWFyZDExLnVwZGF0ZU1hdHJpeCgpO1xuICAgIGJlYXJkR2VvbU1lcmdlZC5tZXJnZShiZWFyZDExLmdlb21ldHJ5LCBiZWFyZDExLm1hdHJpeCk7XG5cbiAgICBsZXQgYmVhcmRNZXJnZWQgPSBuZXcgVEhSRUUuTWVzaChiZWFyZEdlb21NZXJnZWQsIE1hdC53aGl0ZU1hdCk7XG4gICAgYmVhcmRNZXJnZWQuY2FzdFNoYWRvdyA9IHRydWU7XG4gICAgYmVhcmRNZXJnZWQucmVjZWl2ZVNoYWRvdyA9IHRydWU7XG5cbiAgICBsZXQgbW91dGhHZW9tID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDEwLCA0LCAxKTtcbiAgICBsZXQgbW91dGggPSBuZXcgVEhSRUUuTWVzaChtb3V0aEdlb20sIE1hdC5ibGFja01hdCk7XG4gICAgbW91dGgucG9zaXRpb24uc2V0KDAsIDIsIDgpO1xuICAgIG1vdXRoLmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICBtb3V0aC5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcblxuICAgIGxldCB0ZWV0aEdlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMTAsIDEsIDEpO1xuICAgIGxldCB0ZWV0aCA9IG5ldyBUSFJFRS5NZXNoKHRlZXRoR2VvbSwgTWF0LnRlZXRoTWF0KTtcbiAgICB0ZWV0aC5wb3NpdGlvbi5zZXQoMCwgMC41LCAwLjEpO1xuICAgIHRlZXRoLmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICB0ZWV0aC5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcbiAgICBtb3V0aC5hZGQodGVldGgpXG5cbiAgICB0aGlzLmJlYXJkLmFkZChiZWFyZE1lcmdlZCwgbW91dGgpO1xuXG4gICAgbGV0IG1vdXN0YWNoZUdlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMTQsIDMsIDMsIDMpO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbMF0ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbMV0ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbMl0ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbM10ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbNF0ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbNV0ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbNl0ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbN10ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbOF0ueCAtPSAxO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbOV0ueCArPSAxO1xuXG4gICAgbW91c3RhY2hlR2VvbS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigwLCA0LCAwKSk7XG4gICAgdGhpcy5tb3VzdGFjaGUgPSBuZXcgVEhSRUUuTWVzaChtb3VzdGFjaGVHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIHRoaXMubW91c3RhY2hlLmNhc3RTaGFkb3cgPSB0cnVlO1xuICAgIHRoaXMubW91c3RhY2hlLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xuXG4gICAgdGhpcy5tb3VzdGFjaGUucG9zaXRpb24uc2V0KDAsIDAsIDkpO1xuICAgIHRoaXMuYmVhcmQuYWRkKHRoaXMubW91c3RhY2hlKTtcbiAgfVxuXG4gIEdsYXNzZXMoKSB7XG5cbiAgICB0aGlzLmdsYXNzZXMgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICB0aGlzLmdsYXNzZXMucG9zaXRpb24uc2V0KDAsIDAsIDkpO1xuICAgIHRoaXMuaGVhZC5hZGQodGhpcy5nbGFzc2VzKTtcbiAgICBsZXQgZ2xhc3Nlc01hdCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy5nbGFzc2VzLCBmbGF0U2hhZGluZzogdHJ1ZX0pO1xuXG4gICAgbGV0IGZyYW1lR2VvbU1lcmdlZCA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xuXG4gICAgbGV0IGZyYW1lT3V0ZXJHZW9tID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoMywgMywgMC41LCAzMilcbiAgICBsZXQgZnJhbWVJbm5lckdlb20gPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeSgyLjcsIDIuNywgMC41LCAzMilcblxuICAgIGZyYW1lT3V0ZXJHZW9tLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWCgtTWF0aC5QSSAvIDIpKTtcbiAgICBmcmFtZUlubmVyR2VvbS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblgoLU1hdGguUEkgLyAyKSk7XG5cbiAgICBsZXQgZnJhbWVCU1AgPSBuZXcgVGhyZWVCU1AoZnJhbWVPdXRlckdlb20pO1xuICAgIGxldCBmcmFtZUN1dEJTUCA9IG5ldyBUaHJlZUJTUChmcmFtZUlubmVyR2VvbSk7XG5cbiAgICBsZXQgZnJhbWVpbnRlcnNlY3Rpb25CU1AgPSBmcmFtZUJTUC5zdWJ0cmFjdChmcmFtZUN1dEJTUCk7XG4gICAgbGV0IGZyYW1lTGVmdCA9IGZyYW1laW50ZXJzZWN0aW9uQlNQLnRvTWVzaChnbGFzc2VzTWF0KTtcblxuICAgIGZyYW1lTGVmdC5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbig0LCAzLCAwKSk7XG4gICAgZnJhbWVMZWZ0LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGZyYW1lR2VvbU1lcmdlZC5tZXJnZShmcmFtZUxlZnQuZ2VvbWV0cnksIGZyYW1lTGVmdC5tYXRyaXgpO1xuXG4gICAgbGV0IGZyYW1lUmlnaHQgPSBmcmFtZUxlZnQuY2xvbmUoKTtcbiAgICBmcmFtZVJpZ2h0LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWihNYXRoLlBJIC8gMzApKTtcbiAgICBmcmFtZVJpZ2h0LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKC03LjUsIC0wLjI1LCAwKSk7XG4gICAgZnJhbWVSaWdodC51cGRhdGVNYXRyaXgoKTtcbiAgICBmcmFtZUdlb21NZXJnZWQubWVyZ2UoZnJhbWVSaWdodC5nZW9tZXRyeSwgZnJhbWVSaWdodC5tYXRyaXgpO1xuXG4gICAgbGV0IGZyYW1lTWlkR2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgyLCAuMywgLjUpO1xuICAgIGxldCBmcmFtZU1pZCA9IG5ldyBUSFJFRS5NZXNoKGZyYW1lTWlkR2VvbSwgZ2xhc3Nlc01hdCk7XG4gICAgZnJhbWVNaWQuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oMCwgMy4zLCAtMC4zKSk7XG4gICAgZnJhbWVNaWQudXBkYXRlTWF0cml4KCk7XG4gICAgZnJhbWVHZW9tTWVyZ2VkLm1lcmdlKGZyYW1lTWlkLmdlb21ldHJ5LCBmcmFtZU1pZC5tYXRyaXgpO1xuXG4gICAgbGV0IGZyYW1lRW5kR2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgxLjUsIC41LCAxKTtcbiAgICBsZXQgZnJhbWVFbmRSaWdodCA9IG5ldyBUSFJFRS5NZXNoKGZyYW1lRW5kR2VvbSwgZ2xhc3Nlc01hdCk7XG4gICAgZnJhbWVFbmRSaWdodC5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbig3LjUsIDMsIDApKTtcbiAgICBmcmFtZUVuZFJpZ2h0LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGZyYW1lR2VvbU1lcmdlZC5tZXJnZShmcmFtZUVuZFJpZ2h0Lmdlb21ldHJ5LCBmcmFtZUVuZFJpZ2h0Lm1hdHJpeCk7XG5cbiAgICBsZXQgZnJhbWVFbmRMZWZ0ID0gZnJhbWVFbmRSaWdodC5jbG9uZSgpO1xuICAgIGZyYW1lRW5kTGVmdC5wb3NpdGlvbi54ID0gLWZyYW1lRW5kUmlnaHQucG9zaXRpb24ueDtcbiAgICBmcmFtZUVuZExlZnQudXBkYXRlTWF0cml4KCk7XG4gICAgZnJhbWVHZW9tTWVyZ2VkLm1lcmdlKGZyYW1lRW5kTGVmdC5nZW9tZXRyeSwgZnJhbWVFbmRMZWZ0Lm1hdHJpeCk7XG5cbiAgICBsZXQgZnJhbWVTcG9rZUdlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMSwgMC41LCAxMik7XG4gICAgbGV0IGZyYW1lU3Bva2VSaWdodCA9IG5ldyBUSFJFRS5NZXNoKGZyYW1lU3Bva2VHZW9tLCBnbGFzc2VzTWF0KTtcbiAgICBmcmFtZVNwb2tlUmlnaHQuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oOCwgMywgLTUuNSkpO1xuICAgIGZyYW1lU3Bva2VSaWdodC51cGRhdGVNYXRyaXgoKTtcbiAgICBmcmFtZUdlb21NZXJnZWQubWVyZ2UoZnJhbWVTcG9rZVJpZ2h0Lmdlb21ldHJ5LCBmcmFtZVNwb2tlUmlnaHQubWF0cml4KTtcblxuICAgIGxldCBmcmFtZVNwb2tlTGVmdCA9IGZyYW1lU3Bva2VSaWdodC5jbG9uZSgpO1xuICAgIGZyYW1lU3Bva2VMZWZ0LnBvc2l0aW9uLnggPSAtZnJhbWVTcG9rZVJpZ2h0LnBvc2l0aW9uLng7XG4gICAgZnJhbWVTcG9rZUxlZnQudXBkYXRlTWF0cml4KCk7XG4gICAgZnJhbWVHZW9tTWVyZ2VkLm1lcmdlKGZyYW1lU3Bva2VMZWZ0Lmdlb21ldHJ5LCBmcmFtZVNwb2tlTGVmdC5tYXRyaXgpO1xuXG4gICAgbGV0IGZyYW1lTWVyZ2VkID0gbmV3IFRIUkVFLk1lc2goZnJhbWVHZW9tTWVyZ2VkLCBnbGFzc2VzTWF0KTtcbiAgICBmcmFtZU1lcmdlZC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgZnJhbWVNZXJnZWQucmVjZWl2ZVNoYWRvdyA9IHRydWU7XG5cbiAgICB0aGlzLmdsYXNzZXMuYWRkKGZyYW1lTWVyZ2VkKTtcblxuICB9XG5cbiAgSGFpcigpIHtcblxuICAgIHRoaXMuaGFpciA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgIHRoaXMuaGFpci5wb3NpdGlvbi5zZXQoMCwgOSwgMCk7XG4gICAgdGhpcy5oZWFkLmFkZCh0aGlzLmhhaXIpO1xuXG4gICAgbGV0IGhhaXJHZW9tTWVyZ2VkID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XG5cbiAgICBsZXQgaGFpckZsYXRHZW9tID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDEwLCAyLCAxOCk7XG5cbiAgICBsZXQgaGFpcjEgPSBuZXcgVEhSRUUuTWVzaChoYWlyRmxhdEdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgaGFpcjEuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25aKC1NYXRoLlBJIC8gNDApKTtcbiAgICBoYWlyMS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigtNCwgLTAuNSwgMCkpO1xuICAgIGhhaXIxLnVwZGF0ZU1hdHJpeCgpO1xuICAgIGhhaXJHZW9tTWVyZ2VkLm1lcmdlKGhhaXIxLmdlb21ldHJ5LCBoYWlyMS5tYXRyaXgpO1xuXG4gICAgbGV0IGhhaXIyID0gbmV3IFRIUkVFLk1lc2goaGFpckZsYXRHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGhhaXIyLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWigtTWF0aC5QSSAvIDEwKSk7XG4gICAgaGFpcjIuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oLTIsIDEsIDApKTtcbiAgICBoYWlyMi51cGRhdGVNYXRyaXgoKTtcbiAgICBoYWlyR2VvbU1lcmdlZC5tZXJnZShoYWlyMi5nZW9tZXRyeSwgaGFpcjIubWF0cml4KTtcblxuICAgIGxldCBoYWlyMyA9IG5ldyBUSFJFRS5NZXNoKGhhaXJGbGF0R2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBoYWlyMy5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblooLU1hdGguUEkgLyA1KSk7XG4gICAgaGFpcjMuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oMiwgMSwgMCkpO1xuICAgIGhhaXIzLnVwZGF0ZU1hdHJpeCgpO1xuICAgIGhhaXJHZW9tTWVyZ2VkLm1lcmdlKGhhaXIzLmdlb21ldHJ5LCBoYWlyMy5tYXRyaXgpO1xuXG4gICAgbGV0IGhhaXI0ID0gbmV3IFRIUkVFLk1lc2goaGFpckZsYXRHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGhhaXI0LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWigtTWF0aC5QSSAvIDQpKTtcbiAgICBoYWlyNC5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbig2LCAwLCAwKSk7XG4gICAgaGFpcjQudXBkYXRlTWF0cml4KCk7XG4gICAgaGFpckdlb21NZXJnZWQubWVyZ2UoaGFpcjQuZ2VvbWV0cnksIGhhaXI0Lm1hdHJpeCk7XG5cbiAgICBsZXQgaGFpcjYgPSBuZXcgVEhSRUUuTWVzaChoYWlyRmxhdEdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgaGFpcjYuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25aKC1NYXRoLlBJIC8gLTMpKTtcbiAgICBoYWlyNi5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigtNy43NSwgLS41LCAwKSk7XG4gICAgaGFpcjYudXBkYXRlTWF0cml4KCk7XG4gICAgaGFpckdlb21NZXJnZWQubWVyZ2UoaGFpcjYuZ2VvbWV0cnksIGhhaXI2Lm1hdHJpeCk7XG5cbiAgICBsZXQgaGFpckZsYXRCYWNrR2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgxOCwgNywgNik7XG4gICAgaGFpckZsYXRCYWNrR2VvbS52ZXJ0aWNlc1swXS54IC09IDE7XG4gICAgaGFpckZsYXRCYWNrR2VvbS52ZXJ0aWNlc1sxXS54IC09IDE7XG4gICAgaGFpckZsYXRCYWNrR2VvbS52ZXJ0aWNlc1s0XS54ICs9IDE7XG4gICAgaGFpckZsYXRCYWNrR2VvbS52ZXJ0aWNlc1s1XS54ICs9IDE7XG5cbiAgICBsZXQgaGFpcjUgPSBuZXcgVEhSRUUuTWVzaChoYWlyRmxhdEJhY2tHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGhhaXI1LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDAsIC00LjUsIC02KSk7XG4gICAgaGFpcjUudXBkYXRlTWF0cml4KCk7XG4gICAgaGFpckdlb21NZXJnZWQubWVyZ2UoaGFpcjUuZ2VvbWV0cnksIGhhaXI1Lm1hdHJpeCk7XG5cbiAgICBsZXQgaGFpck1lcmdlZCA9IG5ldyBUSFJFRS5NZXNoKGhhaXJHZW9tTWVyZ2VkLCBNYXQud2hpdGVNYXQpO1xuICAgIGhhaXJNZXJnZWQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIGhhaXJNZXJnZWQucmVjZWl2ZVNoYWRvdyA9IHRydWU7XG5cbiAgICB0aGlzLmhhaXIuYWRkKGhhaXJNZXJnZWQpO1xuXG4gIH1cblxuICBFeWVzKCkge1xuXG4gICAgdGhpcy5leWVzID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgdGhpcy5leWVzLnBvc2l0aW9uLnNldCgwLCAzLCA5KTtcbiAgICB0aGlzLmhlYWQuYWRkKHRoaXMuZXllcyk7XG5cbiAgICBsZXQgZXllV2hpdGVHZW9tID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoMi41LCAyLjUpO1xuXG4gICAgbGV0IGV5ZVdoaXRlUmlnaHQgPSBuZXcgVEhSRUUuTWVzaChleWVXaGl0ZUdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgZXllV2hpdGVSaWdodC5wb3NpdGlvbi5zZXQoLTMuNzUsIDAsIDApO1xuICAgIGV5ZVdoaXRlUmlnaHQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIGV5ZVdoaXRlUmlnaHQucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgbGV0IGV5ZUJsdWVHZW9tID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoMS41LCAxLjUpO1xuXG4gICAgbGV0IGV5ZU1hdCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy5leWUsIGZsYXRTaGFkaW5nOiB0cnVlfSk7XG5cbiAgICB0aGlzLmV5ZUJsdWVSaWdodCA9IG5ldyBUSFJFRS5NZXNoKGV5ZUJsdWVHZW9tLCBleWVNYXQpO1xuICAgIHRoaXMuZXllQmx1ZVJpZ2h0LnBvc2l0aW9uLnNldCgwLCAwLCAuMDEpO1xuICAgIHRoaXMuZXllQmx1ZVJpZ2h0LmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICB0aGlzLmV5ZUJsdWVSaWdodC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICBleWVXaGl0ZVJpZ2h0LmFkZCh0aGlzLmV5ZUJsdWVSaWdodCk7XG5cbiAgICBsZXQgZXllUHVwaWxHZW9tID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoMSwgMSk7XG5cbiAgICB0aGlzLmV5ZVB1cGlsUmlnaHQgPSBuZXcgVEhSRUUuTWVzaChleWVQdXBpbEdlb20sIE1hdC5ibGFja01hdCk7XG4gICAgdGhpcy5leWVQdXBpbFJpZ2h0LnBvc2l0aW9uLnNldCgwLCAwLCAuMDIpO1xuICAgIHRoaXMuZXllUHVwaWxSaWdodC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgdGhpcy5leWVQdXBpbFJpZ2h0LnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIHRoaXMuZXllQmx1ZVJpZ2h0LmFkZCh0aGlzLmV5ZVB1cGlsUmlnaHQpO1xuXG4gICAgbGV0IGV5ZVdoaXRlTGVmdCA9IG5ldyBUSFJFRS5NZXNoKGV5ZVdoaXRlR2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBleWVXaGl0ZUxlZnQucG9zaXRpb24uc2V0KDMuNzUsIDAsIDApO1xuICAgIGV5ZVdoaXRlTGVmdC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgZXllV2hpdGVMZWZ0LnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIHRoaXMuZXllQmx1ZUxlZnQgPSBuZXcgVEhSRUUuTWVzaChleWVCbHVlR2VvbSwgZXllTWF0KTtcbiAgICB0aGlzLmV5ZUJsdWVMZWZ0LnBvc2l0aW9uLnNldCgwLCAwLCAuMDEpO1xuICAgIHRoaXMuZXllQmx1ZUxlZnQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIHRoaXMuZXllQmx1ZUxlZnQucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgZXllV2hpdGVMZWZ0LmFkZCh0aGlzLmV5ZUJsdWVMZWZ0KTtcblxuICAgIHRoaXMuZXllUHVwaWxMZWZ0ID0gbmV3IFRIUkVFLk1lc2goZXllUHVwaWxHZW9tLCBNYXQuYmxhY2tNYXQpO1xuICAgIHRoaXMuZXllUHVwaWxMZWZ0LnBvc2l0aW9uLnNldCgwLCAwLCAuMDIpO1xuICAgIHRoaXMuZXllUHVwaWxMZWZ0LmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICB0aGlzLmV5ZVB1cGlsTGVmdC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICB0aGlzLmV5ZUJsdWVMZWZ0LmFkZCh0aGlzLmV5ZVB1cGlsTGVmdCk7XG5cbiAgICB0aGlzLmV5ZXMuYWRkKGV5ZVdoaXRlUmlnaHQsIGV5ZVdoaXRlTGVmdCk7XG4gIH1cblxuICBFeWVCcm93cygpIHtcbiAgICB0aGlzLmV5ZUJyb3dzID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgdGhpcy5leWVCcm93cy5wb3NpdGlvbi5zZXQoMCwgNiwgOCk7XG4gICAgdGhpcy5oZWFkLmFkZCh0aGlzLmV5ZUJyb3dzKTtcblxuICAgIGxldCBleWVCcm93R2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSg0LCAxLCAxKTtcblxuICAgIHRoaXMuZXllQnJvd1JpZ2h0ID0gbmV3IFRIUkVFLk1lc2goZXllQnJvd0dlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgdGhpcy5leWVCcm93UmlnaHQuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25aKE1hdGguUEkgLyA0NSkpO1xuICAgIHRoaXMuZXllQnJvd1JpZ2h0LnBvc2l0aW9uLnNldCgtMy43NSwgMCwgMCk7XG4gICAgdGhpcy5leWVCcm93UmlnaHQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIHRoaXMuZXllQnJvd1JpZ2h0LnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIHRoaXMuZXllQnJvd0xlZnQgPSBuZXcgVEhSRUUuTWVzaChleWVCcm93R2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICB0aGlzLmV5ZUJyb3dMZWZ0LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWigtTWF0aC5QSSAvIDQ1KSk7XG4gICAgdGhpcy5leWVCcm93TGVmdC5wb3NpdGlvbi5zZXQoMy43NSwgMCwgMCk7XG4gICAgdGhpcy5leWVCcm93TGVmdC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgdGhpcy5leWVCcm93TGVmdC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICB0aGlzLmV5ZUJyb3dzLmFkZCh0aGlzLmV5ZUJyb3dSaWdodCwgdGhpcy5leWVCcm93TGVmdCk7XG4gIH1cblxuICBIYXQoKSB7XG4gICAgdGhpcy5oYXQgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICB0aGlzLmhhdC5wb3NpdGlvbi5zZXQoLTAuMiwgMTEsIDIuNCk7XG4gICAgdGhpcy5oZWFkLmFkZCh0aGlzLmhhdCk7XG5cbiAgICBsZXQgaGF0TWF0ID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHtjb2xvcjogQ29sb3JzLmhhdCwgZmxhdFNoYWRpbmc6IHRydWV9KTtcblxuICAgIGxldCBiYW5kR2VvbSA9IG5ldyBUSFJFRS5Ub3J1c0dlb21ldHJ5KDksIDIsIDE2LCAxMDApO1xuICAgIGxldCBiaWdDb25lR2VvbSA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KDEsIDExLCAxMiwgMTUpO1xuICAgIGxldCBzbWFsbENvbmVHZW9tID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoMC44LCAzLCA5LCAzMik7XG4gICAgbGV0IGhhdERpbmdsZUdlb20gPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoMS41LCA4LCA4KTtcblxuICAgIHRoaXMuYmFuZCA9IG5ldyBUSFJFRS5NZXNoKGJhbmRHZW9tLCBNYXQudGVldGhNYXQpO1xuICAgIHRoaXMuYmFuZC5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblgoTWF0aC5QSSAvIDIpKTtcbiAgICB0aGlzLmJhbmQucG9zaXRpb24uc2V0KDAsIDAsIDApO1xuICAgIHRoaXMuYmFuZC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgdGhpcy5iYW5kLnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIHRoaXMuYmlnQ29uZSA9IG5ldyBUSFJFRS5NZXNoKGJpZ0NvbmVHZW9tLCBoYXRNYXQpO1xuICAgIHRoaXMuYmlnQ29uZS5wb3NpdGlvbi5zZXQoMCwgNiwgMCk7XG4gICAgdGhpcy5iaWdDb25lLmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICB0aGlzLmJpZ0NvbmUucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgdGhpcy5zbWFsbENvbmUgPSBuZXcgVEhSRUUuTWVzaChzbWFsbENvbmVHZW9tLCBoYXRNYXQpO1xuICAgIHRoaXMuc21hbGxDb25lLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWChNYXRoLlBJIC8gMikpO1xuICAgIHRoaXMuc21hbGxDb25lLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWShNYXRoLlBJIC8gMikpO1xuICAgIHRoaXMuc21hbGxDb25lLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWihNYXRoLlBJIC8gLTgpKTtcbiAgICB0aGlzLnNtYWxsQ29uZS5wb3NpdGlvbi5zZXQoNCwgNy44LCAtMSk7XG4gICAgdGhpcy5zbWFsbENvbmUuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIHRoaXMuc21hbGxDb25lLnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIHRoaXMuaGF0RGluZ2xlID0gbmV3IFRIUkVFLk1lc2goaGF0RGluZ2xlR2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICB0aGlzLmhhdERpbmdsZS5wb3NpdGlvbi5zZXQoOSwgNS41LCAtMSk7XG4gICAgdGhpcy5oYXREaW5nbGUuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIHRoaXMuaGF0RGluZ2xlLnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIHRoaXMuaGF0LmFkZCh0aGlzLmJhbmQsIHRoaXMuYmlnQ29uZSwgdGhpcy5zbWFsbENvbmUsIHRoaXMuaGF0RGluZ2xlKTtcbiAgfVxuXG4gIEZyZWNrbGVzKCkge1xuICAgIHRoaXMuZnJlY2tsZXMgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICB0aGlzLmZyZWNrbGVzLnBvc2l0aW9uLnNldCgwLCAwLCA4KTtcbiAgICB0aGlzLmhlYWQuYWRkKHRoaXMuZnJlY2tsZXMpO1xuXG4gICAgbGV0IGZyZWNrbGVzTWF0ID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoe2NvbG9yOiBDb2xvcnMuZnJlY2tsZXMsIGZsYXRTaGFkaW5nOiB0cnVlfSk7XG4gICAgbGV0IGZyZWNrbGVzR2VvbU1lcmdlZCA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xuXG4gICAgbGV0IGZyZWNrbGVzR2VvbSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KDAuNSwgMC41KTtcblxuICAgIGxldCBmcmVja2xlMSA9IG5ldyBUSFJFRS5NZXNoKGZyZWNrbGVzR2VvbSwgZnJlY2tsZXNNYXQpO1xuICAgIGZyZWNrbGUxLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKC01LCAwLCAwLjAxKSk7XG4gICAgZnJlY2tsZTEudXBkYXRlTWF0cml4KCk7XG4gICAgZnJlY2tsZXNHZW9tTWVyZ2VkLm1lcmdlKGZyZWNrbGUxLmdlb21ldHJ5LCBmcmVja2xlMS5tYXRyaXgpO1xuXG4gICAgbGV0IGZyZWNrbGUyID0gZnJlY2tsZTEuY2xvbmUoKTtcbiAgICBmcmVja2xlMi5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigtMC41LCAtMSwgMCkpO1xuICAgIGZyZWNrbGUyLnVwZGF0ZU1hdHJpeCgpO1xuICAgIGZyZWNrbGVzR2VvbU1lcmdlZC5tZXJnZShmcmVja2xlMi5nZW9tZXRyeSwgZnJlY2tsZTIubWF0cml4KTtcblxuICAgIGxldCBmcmVja2xlMyA9IGZyZWNrbGUxLmNsb25lKCk7XG4gICAgZnJlY2tsZTMuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oMSwgLTAuNSwgMCkpO1xuICAgIGZyZWNrbGUzLnVwZGF0ZU1hdHJpeCgpO1xuICAgIGZyZWNrbGVzR2VvbU1lcmdlZC5tZXJnZShmcmVja2xlMy5nZW9tZXRyeSwgZnJlY2tsZTMubWF0cml4KTtcblxuICAgIGxldCBmcmVja2xlNCA9IGZyZWNrbGUxLmNsb25lKCk7XG4gICAgZnJlY2tsZTQucG9zaXRpb24ueCA9IC1mcmVja2xlMS5wb3NpdGlvbi54O1xuICAgIGZyZWNrbGU0LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGZyZWNrbGVzR2VvbU1lcmdlZC5tZXJnZShmcmVja2xlNC5nZW9tZXRyeSwgZnJlY2tsZTQubWF0cml4KTtcbiAgICBsZXQgZnJlY2tsZTUgPSBmcmVja2xlMi5jbG9uZSgpO1xuICAgIGZyZWNrbGU1LnBvc2l0aW9uLnggPSAtZnJlY2tsZTIucG9zaXRpb24ueDtcbiAgICBmcmVja2xlNS51cGRhdGVNYXRyaXgoKTtcbiAgICBmcmVja2xlc0dlb21NZXJnZWQubWVyZ2UoZnJlY2tsZTUuZ2VvbWV0cnksIGZyZWNrbGU1Lm1hdHJpeCk7XG4gICAgbGV0IGZyZWNrbGU2ID0gZnJlY2tsZTMuY2xvbmUoKTtcbiAgICBmcmVja2xlNi5wb3NpdGlvbi54ID0gLWZyZWNrbGUzLnBvc2l0aW9uLng7XG4gICAgZnJlY2tsZTYudXBkYXRlTWF0cml4KCk7XG4gICAgZnJlY2tsZXNHZW9tTWVyZ2VkLm1lcmdlKGZyZWNrbGU2Lmdlb21ldHJ5LCBmcmVja2xlNi5tYXRyaXgpO1xuXG4gICAgbGV0IGZyZWNrbGVkTWVyZ2VkID0gbmV3IFRIUkVFLk1lc2goZnJlY2tsZXNHZW9tTWVyZ2VkLCBmcmVja2xlc01hdCk7XG4gICAgZnJlY2tsZWRNZXJnZWQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIGZyZWNrbGVkTWVyZ2VkLnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIHRoaXMuZnJlY2tsZXMuYWRkKGZyZWNrbGVkTWVyZ2VkKTtcbiAgfVxuXG4gIEZlYXR1cmVzKCkge1xuICAgIGxldCBlYXJHZW9tID0gbmV3IFRIUkVFLkJveEJ1ZmZlckdlb21ldHJ5KDEuNSwgMywgMS41KTtcbiAgICBsZXQgc2tpbk1hdCA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHtjb2xvcjogQ29sb3JzLnNraW4sIGZsYXRTaGFkaW5nOiB0cnVlfSk7XG4gICAgbGV0IGVhclJpZ2h0ID0gbmV3IFRIUkVFLk1lc2goZWFyR2VvbSwgc2tpbk1hdCk7XG4gICAgZWFyUmlnaHQucG9zaXRpb24uc2V0KC04LjUsIDEsIDMpO1xuICAgIGVhclJpZ2h0LmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICBlYXJSaWdodC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICBsZXQgZWFyTGVmdCA9IG5ldyBUSFJFRS5NZXNoKGVhckdlb20sIHNraW5NYXQpO1xuICAgIGVhckxlZnQucG9zaXRpb24uc2V0KDguNSwgMSwgMyk7XG4gICAgZWFyTGVmdC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgZWFyTGVmdC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICBsZXQgbm9zZUdlb20gPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeSgxLCAyLCA0LCA0KTtcbiAgICBsZXQgbm9zZSA9IG5ldyBUSFJFRS5NZXNoKG5vc2VHZW9tLCBza2luTWF0KTtcbiAgICBub3NlLnNjYWxlLnNldCguNzUsIDEsIDEuMyk7XG4gICAgbm9zZS5wb3NpdGlvbi5zZXQoMCwgMSwgOCk7XG4gICAgbm9zZS5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgbm9zZS5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICB0aGlzLmhlYWQuYWRkKGVhclJpZ2h0LCBlYXJMZWZ0LCBub3NlKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NsYXNzZXMvSGVhZC5qcyIsImltcG9ydCBDb2xvcnMgZnJvbSAnLi9jb2xvcnMnO1xuY29uc3QgTWF0ZXJpYWxzID0ge1xuICBcIndoaXRlTWF0XCI6IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHtjb2xvcjogQ29sb3JzLndoaXRlLCBmbGF0U2hhZGluZzogdHJ1ZX0pLFxuICBcInRlZXRoTWF0XCI6IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy50ZWV0aCwgZmxhdFNoYWRpbmc6IHRydWV9KSxcbiAgXCJibGFja01hdFwiOiBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy5ibGFjaywgZmxhdFNoYWRpbmc6IHRydWV9KSxcbiAgXCJub3JtYWxNYXRcIjogbmV3IFRIUkVFLk1lc2hOb3JtYWxNYXRlcmlhbCh7fSlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1hdGVyaWFscztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9vYmplY3RzL01hdGVyaWFscy5qcyIsIihmdW5jdGlvbihzZWxmKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBpZiAoc2VsZi5mZXRjaCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIHN1cHBvcnQgPSB7XG4gICAgc2VhcmNoUGFyYW1zOiAnVVJMU2VhcmNoUGFyYW1zJyBpbiBzZWxmLFxuICAgIGl0ZXJhYmxlOiAnU3ltYm9sJyBpbiBzZWxmICYmICdpdGVyYXRvcicgaW4gU3ltYm9sLFxuICAgIGJsb2I6ICdGaWxlUmVhZGVyJyBpbiBzZWxmICYmICdCbG9iJyBpbiBzZWxmICYmIChmdW5jdGlvbigpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG5ldyBCbG9iKClcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9KSgpLFxuICAgIGZvcm1EYXRhOiAnRm9ybURhdGEnIGluIHNlbGYsXG4gICAgYXJyYXlCdWZmZXI6ICdBcnJheUJ1ZmZlcicgaW4gc2VsZlxuICB9XG5cbiAgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIpIHtcbiAgICB2YXIgdmlld0NsYXNzZXMgPSBbXG4gICAgICAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgICAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDMyQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgRmxvYXQ2NEFycmF5XSdcbiAgICBdXG5cbiAgICB2YXIgaXNEYXRhVmlldyA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiBEYXRhVmlldy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihvYmopXG4gICAgfVxuXG4gICAgdmFyIGlzQXJyYXlCdWZmZXJWaWV3ID0gQXJyYXlCdWZmZXIuaXNWaWV3IHx8IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB2aWV3Q2xhc3Nlcy5pbmRleE9mKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopKSA+IC0xXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplTmFtZShuYW1lKSB7XG4gICAgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgbmFtZSA9IFN0cmluZyhuYW1lKVxuICAgIH1cbiAgICBpZiAoL1teYS16MC05XFwtIyQlJicqKy5cXF5fYHx+XS9pLnRlc3QobmFtZSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgY2hhcmFjdGVyIGluIGhlYWRlciBmaWVsZCBuYW1lJylcbiAgICB9XG4gICAgcmV0dXJuIG5hbWUudG9Mb3dlckNhc2UoKVxuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplVmFsdWUodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgdmFsdWUgPSBTdHJpbmcodmFsdWUpXG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgLy8gQnVpbGQgYSBkZXN0cnVjdGl2ZSBpdGVyYXRvciBmb3IgdGhlIHZhbHVlIGxpc3RcbiAgZnVuY3Rpb24gaXRlcmF0b3JGb3IoaXRlbXMpIHtcbiAgICB2YXIgaXRlcmF0b3IgPSB7XG4gICAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gaXRlbXMuc2hpZnQoKVxuICAgICAgICByZXR1cm4ge2RvbmU6IHZhbHVlID09PSB1bmRlZmluZWQsIHZhbHVlOiB2YWx1ZX1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VwcG9ydC5pdGVyYWJsZSkge1xuICAgICAgaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaXRlcmF0b3JcbiAgfVxuXG4gIGZ1bmN0aW9uIEhlYWRlcnMoaGVhZGVycykge1xuICAgIHRoaXMubWFwID0ge31cblxuICAgIGlmIChoZWFkZXJzIGluc3RhbmNlb2YgSGVhZGVycykge1xuICAgICAgaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKG5hbWUsIHZhbHVlKVxuICAgICAgfSwgdGhpcylcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoaGVhZGVycykpIHtcbiAgICAgIGhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbihoZWFkZXIpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQoaGVhZGVyWzBdLCBoZWFkZXJbMV0pXG4gICAgICB9LCB0aGlzKVxuICAgIH0gZWxzZSBpZiAoaGVhZGVycykge1xuICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaGVhZGVycykuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKG5hbWUsIGhlYWRlcnNbbmFtZV0pXG4gICAgICB9LCB0aGlzKVxuICAgIH1cbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgbmFtZSA9IG5vcm1hbGl6ZU5hbWUobmFtZSlcbiAgICB2YWx1ZSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKVxuICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMubWFwW25hbWVdXG4gICAgdGhpcy5tYXBbbmFtZV0gPSBvbGRWYWx1ZSA/IG9sZFZhbHVlKycsJyt2YWx1ZSA6IHZhbHVlXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMubWFwW25vcm1hbGl6ZU5hbWUobmFtZSldXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgbmFtZSA9IG5vcm1hbGl6ZU5hbWUobmFtZSlcbiAgICByZXR1cm4gdGhpcy5oYXMobmFtZSkgPyB0aGlzLm1hcFtuYW1lXSA6IG51bGxcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAuaGFzT3duUHJvcGVydHkobm9ybWFsaXplTmFtZShuYW1lKSlcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgdGhpcy5tYXBbbm9ybWFsaXplTmFtZShuYW1lKV0gPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbihjYWxsYmFjaywgdGhpc0FyZykge1xuICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcy5tYXApIHtcbiAgICAgIGlmICh0aGlzLm1hcC5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHRoaXMubWFwW25hbWVdLCBuYW1lLCB0aGlzKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXVxuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkgeyBpdGVtcy5wdXNoKG5hbWUpIH0pXG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1zID0gW11cbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHsgaXRlbXMucHVzaCh2YWx1ZSkgfSlcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5lbnRyaWVzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1zID0gW11cbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHsgaXRlbXMucHVzaChbbmFtZSwgdmFsdWVdKSB9KVxuICAgIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbiAgfVxuXG4gIGlmIChzdXBwb3J0Lml0ZXJhYmxlKSB7XG4gICAgSGVhZGVycy5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXSA9IEhlYWRlcnMucHJvdG90eXBlLmVudHJpZXNcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnN1bWVkKGJvZHkpIHtcbiAgICBpZiAoYm9keS5ib2R5VXNlZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoJ0FscmVhZHkgcmVhZCcpKVxuICAgIH1cbiAgICBib2R5LmJvZHlVc2VkID0gdHJ1ZVxuICB9XG5cbiAgZnVuY3Rpb24gZmlsZVJlYWRlclJlYWR5KHJlYWRlcikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVzb2x2ZShyZWFkZXIucmVzdWx0KVxuICAgICAgfVxuICAgICAgcmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KHJlYWRlci5lcnJvcilcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEJsb2JBc0FycmF5QnVmZmVyKGJsb2IpIHtcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgIHZhciBwcm9taXNlID0gZmlsZVJlYWRlclJlYWR5KHJlYWRlcilcbiAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoYmxvYilcbiAgICByZXR1cm4gcHJvbWlzZVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEJsb2JBc1RleHQoYmxvYikge1xuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgdmFyIHByb21pc2UgPSBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKVxuICAgIHJlYWRlci5yZWFkQXNUZXh0KGJsb2IpXG4gICAgcmV0dXJuIHByb21pc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWRBcnJheUJ1ZmZlckFzVGV4dChidWYpIHtcbiAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1ZilcbiAgICB2YXIgY2hhcnMgPSBuZXcgQXJyYXkodmlldy5sZW5ndGgpXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZpZXcubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoYXJzW2ldID0gU3RyaW5nLmZyb21DaGFyQ29kZSh2aWV3W2ldKVxuICAgIH1cbiAgICByZXR1cm4gY2hhcnMuam9pbignJylcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1ZmZlckNsb25lKGJ1Zikge1xuICAgIGlmIChidWYuc2xpY2UpIHtcbiAgICAgIHJldHVybiBidWYuc2xpY2UoMClcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShidWYuYnl0ZUxlbmd0aClcbiAgICAgIHZpZXcuc2V0KG5ldyBVaW50OEFycmF5KGJ1ZikpXG4gICAgICByZXR1cm4gdmlldy5idWZmZXJcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBCb2R5KCkge1xuICAgIHRoaXMuYm9keVVzZWQgPSBmYWxzZVxuXG4gICAgdGhpcy5faW5pdEJvZHkgPSBmdW5jdGlvbihib2R5KSB7XG4gICAgICB0aGlzLl9ib2R5SW5pdCA9IGJvZHlcbiAgICAgIGlmICghYm9keSkge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9ICcnXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5ibG9iICYmIEJsb2IucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUJsb2IgPSBib2R5XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuZm9ybURhdGEgJiYgRm9ybURhdGEucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUZvcm1EYXRhID0gYm9keVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LnNlYXJjaFBhcmFtcyAmJiBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSBib2R5LnRvU3RyaW5nKClcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlciAmJiBzdXBwb3J0LmJsb2IgJiYgaXNEYXRhVmlldyhib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIgPSBidWZmZXJDbG9uZShib2R5LmJ1ZmZlcilcbiAgICAgICAgLy8gSUUgMTAtMTEgY2FuJ3QgaGFuZGxlIGEgRGF0YVZpZXcgYm9keS5cbiAgICAgICAgdGhpcy5fYm9keUluaXQgPSBuZXcgQmxvYihbdGhpcy5fYm9keUFycmF5QnVmZmVyXSlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlciAmJiAoQXJyYXlCdWZmZXIucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkgfHwgaXNBcnJheUJ1ZmZlclZpZXcoYm9keSkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlBcnJheUJ1ZmZlciA9IGJ1ZmZlckNsb25lKGJvZHkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vuc3VwcG9ydGVkIEJvZHlJbml0IHR5cGUnKVxuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYm9keSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCAndGV4dC9wbGFpbjtjaGFyc2V0PVVURi04JylcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QmxvYiAmJiB0aGlzLl9ib2R5QmxvYi50eXBlKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgdGhpcy5fYm9keUJsb2IudHlwZSlcbiAgICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LnNlYXJjaFBhcmFtcyAmJiBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9VVRGLTgnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cHBvcnQuYmxvYikge1xuICAgICAgdGhpcy5ibG9iID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpXG4gICAgICAgIGlmIChyZWplY3RlZCkge1xuICAgICAgICAgIHJldHVybiByZWplY3RlZFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2JvZHlCbG9iKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5QmxvYilcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBCbG9iKFt0aGlzLl9ib2R5QXJyYXlCdWZmZXJdKSlcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5Rm9ybURhdGEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkIG5vdCByZWFkIEZvcm1EYXRhIGJvZHkgYXMgYmxvYicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbdGhpcy5fYm9keVRleHRdKSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmFycmF5QnVmZmVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICByZXR1cm4gY29uc3VtZWQodGhpcykgfHwgUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ibG9iKCkudGhlbihyZWFkQmxvYkFzQXJyYXlCdWZmZXIpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnRleHQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpXG4gICAgICBpZiAocmVqZWN0ZWQpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdGVkXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9ib2R5QmxvYikge1xuICAgICAgICByZXR1cm4gcmVhZEJsb2JBc1RleHQodGhpcy5fYm9keUJsb2IpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlYWRBcnJheUJ1ZmZlckFzVGV4dCh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5Rm9ybURhdGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgcmVhZCBGb3JtRGF0YSBib2R5IGFzIHRleHQnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5VGV4dClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VwcG9ydC5mb3JtRGF0YSkge1xuICAgICAgdGhpcy5mb3JtRGF0YSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50ZXh0KCkudGhlbihkZWNvZGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5qc29uID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy50ZXh0KCkudGhlbihKU09OLnBhcnNlKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICAvLyBIVFRQIG1ldGhvZHMgd2hvc2UgY2FwaXRhbGl6YXRpb24gc2hvdWxkIGJlIG5vcm1hbGl6ZWRcbiAgdmFyIG1ldGhvZHMgPSBbJ0RFTEVURScsICdHRVQnLCAnSEVBRCcsICdPUFRJT05TJywgJ1BPU1QnLCAnUFVUJ11cblxuICBmdW5jdGlvbiBub3JtYWxpemVNZXRob2QobWV0aG9kKSB7XG4gICAgdmFyIHVwY2FzZWQgPSBtZXRob2QudG9VcHBlckNhc2UoKVxuICAgIHJldHVybiAobWV0aG9kcy5pbmRleE9mKHVwY2FzZWQpID4gLTEpID8gdXBjYXNlZCA6IG1ldGhvZFxuICB9XG5cbiAgZnVuY3Rpb24gUmVxdWVzdChpbnB1dCwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gICAgdmFyIGJvZHkgPSBvcHRpb25zLmJvZHlcblxuICAgIGlmIChpbnB1dCBpbnN0YW5jZW9mIFJlcXVlc3QpIHtcbiAgICAgIGlmIChpbnB1dC5ib2R5VXNlZCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBbHJlYWR5IHJlYWQnKVxuICAgICAgfVxuICAgICAgdGhpcy51cmwgPSBpbnB1dC51cmxcbiAgICAgIHRoaXMuY3JlZGVudGlhbHMgPSBpbnB1dC5jcmVkZW50aWFsc1xuICAgICAgaWYgKCFvcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMoaW5wdXQuaGVhZGVycylcbiAgICAgIH1cbiAgICAgIHRoaXMubWV0aG9kID0gaW5wdXQubWV0aG9kXG4gICAgICB0aGlzLm1vZGUgPSBpbnB1dC5tb2RlXG4gICAgICBpZiAoIWJvZHkgJiYgaW5wdXQuX2JvZHlJbml0ICE9IG51bGwpIHtcbiAgICAgICAgYm9keSA9IGlucHV0Ll9ib2R5SW5pdFxuICAgICAgICBpbnB1dC5ib2R5VXNlZCA9IHRydWVcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51cmwgPSBTdHJpbmcoaW5wdXQpXG4gICAgfVxuXG4gICAgdGhpcy5jcmVkZW50aWFscyA9IG9wdGlvbnMuY3JlZGVudGlhbHMgfHwgdGhpcy5jcmVkZW50aWFscyB8fCAnb21pdCdcbiAgICBpZiAob3B0aW9ucy5oZWFkZXJzIHx8ICF0aGlzLmhlYWRlcnMpIHtcbiAgICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdGlvbnMuaGVhZGVycylcbiAgICB9XG4gICAgdGhpcy5tZXRob2QgPSBub3JtYWxpemVNZXRob2Qob3B0aW9ucy5tZXRob2QgfHwgdGhpcy5tZXRob2QgfHwgJ0dFVCcpXG4gICAgdGhpcy5tb2RlID0gb3B0aW9ucy5tb2RlIHx8IHRoaXMubW9kZSB8fCBudWxsXG4gICAgdGhpcy5yZWZlcnJlciA9IG51bGxcblxuICAgIGlmICgodGhpcy5tZXRob2QgPT09ICdHRVQnIHx8IHRoaXMubWV0aG9kID09PSAnSEVBRCcpICYmIGJvZHkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0JvZHkgbm90IGFsbG93ZWQgZm9yIEdFVCBvciBIRUFEIHJlcXVlc3RzJylcbiAgICB9XG4gICAgdGhpcy5faW5pdEJvZHkoYm9keSlcbiAgfVxuXG4gIFJlcXVlc3QucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBSZXF1ZXN0KHRoaXMsIHsgYm9keTogdGhpcy5fYm9keUluaXQgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlY29kZShib2R5KSB7XG4gICAgdmFyIGZvcm0gPSBuZXcgRm9ybURhdGEoKVxuICAgIGJvZHkudHJpbSgpLnNwbGl0KCcmJykuZm9yRWFjaChmdW5jdGlvbihieXRlcykge1xuICAgICAgaWYgKGJ5dGVzKSB7XG4gICAgICAgIHZhciBzcGxpdCA9IGJ5dGVzLnNwbGl0KCc9JylcbiAgICAgICAgdmFyIG5hbWUgPSBzcGxpdC5zaGlmdCgpLnJlcGxhY2UoL1xcKy9nLCAnICcpXG4gICAgICAgIHZhciB2YWx1ZSA9IHNwbGl0LmpvaW4oJz0nKS5yZXBsYWNlKC9cXCsvZywgJyAnKVxuICAgICAgICBmb3JtLmFwcGVuZChkZWNvZGVVUklDb21wb25lbnQobmFtZSksIGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gZm9ybVxuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VIZWFkZXJzKHJhd0hlYWRlcnMpIHtcbiAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKClcbiAgICByYXdIZWFkZXJzLnNwbGl0KC9cXHI/XFxuLykuZm9yRWFjaChmdW5jdGlvbihsaW5lKSB7XG4gICAgICB2YXIgcGFydHMgPSBsaW5lLnNwbGl0KCc6JylcbiAgICAgIHZhciBrZXkgPSBwYXJ0cy5zaGlmdCgpLnRyaW0oKVxuICAgICAgaWYgKGtleSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBwYXJ0cy5qb2luKCc6JykudHJpbSgpXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKGtleSwgdmFsdWUpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gaGVhZGVyc1xuICB9XG5cbiAgQm9keS5jYWxsKFJlcXVlc3QucHJvdG90eXBlKVxuXG4gIGZ1bmN0aW9uIFJlc3BvbnNlKGJvZHlJbml0LCBvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0ge31cbiAgICB9XG5cbiAgICB0aGlzLnR5cGUgPSAnZGVmYXVsdCdcbiAgICB0aGlzLnN0YXR1cyA9ICdzdGF0dXMnIGluIG9wdGlvbnMgPyBvcHRpb25zLnN0YXR1cyA6IDIwMFxuICAgIHRoaXMub2sgPSB0aGlzLnN0YXR1cyA+PSAyMDAgJiYgdGhpcy5zdGF0dXMgPCAzMDBcbiAgICB0aGlzLnN0YXR1c1RleHQgPSAnc3RhdHVzVGV4dCcgaW4gb3B0aW9ucyA/IG9wdGlvbnMuc3RhdHVzVGV4dCA6ICdPSydcbiAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhvcHRpb25zLmhlYWRlcnMpXG4gICAgdGhpcy51cmwgPSBvcHRpb25zLnVybCB8fCAnJ1xuICAgIHRoaXMuX2luaXRCb2R5KGJvZHlJbml0KVxuICB9XG5cbiAgQm9keS5jYWxsKFJlc3BvbnNlLnByb3RvdHlwZSlcblxuICBSZXNwb25zZS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKHRoaXMuX2JvZHlJbml0LCB7XG4gICAgICBzdGF0dXM6IHRoaXMuc3RhdHVzLFxuICAgICAgc3RhdHVzVGV4dDogdGhpcy5zdGF0dXNUZXh0LFxuICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnModGhpcy5oZWFkZXJzKSxcbiAgICAgIHVybDogdGhpcy51cmxcbiAgICB9KVxuICB9XG5cbiAgUmVzcG9uc2UuZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVzcG9uc2UgPSBuZXcgUmVzcG9uc2UobnVsbCwge3N0YXR1czogMCwgc3RhdHVzVGV4dDogJyd9KVxuICAgIHJlc3BvbnNlLnR5cGUgPSAnZXJyb3InXG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH1cblxuICB2YXIgcmVkaXJlY3RTdGF0dXNlcyA9IFszMDEsIDMwMiwgMzAzLCAzMDcsIDMwOF1cblxuICBSZXNwb25zZS5yZWRpcmVjdCA9IGZ1bmN0aW9uKHVybCwgc3RhdHVzKSB7XG4gICAgaWYgKHJlZGlyZWN0U3RhdHVzZXMuaW5kZXhPZihzdGF0dXMpID09PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgc3RhdHVzIGNvZGUnKVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UobnVsbCwge3N0YXR1czogc3RhdHVzLCBoZWFkZXJzOiB7bG9jYXRpb246IHVybH19KVxuICB9XG5cbiAgc2VsZi5IZWFkZXJzID0gSGVhZGVyc1xuICBzZWxmLlJlcXVlc3QgPSBSZXF1ZXN0XG4gIHNlbGYuUmVzcG9uc2UgPSBSZXNwb25zZVxuXG4gIHNlbGYuZmV0Y2ggPSBmdW5jdGlvbihpbnB1dCwgaW5pdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoaW5wdXQsIGluaXQpXG4gICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcblxuICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICBzdGF0dXM6IHhoci5zdGF0dXMsXG4gICAgICAgICAgc3RhdHVzVGV4dDogeGhyLnN0YXR1c1RleHQsXG4gICAgICAgICAgaGVhZGVyczogcGFyc2VIZWFkZXJzKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSB8fCAnJylcbiAgICAgICAgfVxuICAgICAgICBvcHRpb25zLnVybCA9ICdyZXNwb25zZVVSTCcgaW4geGhyID8geGhyLnJlc3BvbnNlVVJMIDogb3B0aW9ucy5oZWFkZXJzLmdldCgnWC1SZXF1ZXN0LVVSTCcpXG4gICAgICAgIHZhciBib2R5ID0gJ3Jlc3BvbnNlJyBpbiB4aHIgPyB4aHIucmVzcG9uc2UgOiB4aHIucmVzcG9uc2VUZXh0XG4gICAgICAgIHJlc29sdmUobmV3IFJlc3BvbnNlKGJvZHksIG9wdGlvbnMpKVxuICAgICAgfVxuXG4gICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QobmV3IFR5cGVFcnJvcignTmV0d29yayByZXF1ZXN0IGZhaWxlZCcpKVxuICAgICAgfVxuXG4gICAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJykpXG4gICAgICB9XG5cbiAgICAgIHhoci5vcGVuKHJlcXVlc3QubWV0aG9kLCByZXF1ZXN0LnVybCwgdHJ1ZSlcblxuICAgICAgaWYgKHJlcXVlc3QuY3JlZGVudGlhbHMgPT09ICdpbmNsdWRlJykge1xuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoJ3Jlc3BvbnNlVHlwZScgaW4geGhyICYmIHN1cHBvcnQuYmxvYikge1xuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2Jsb2InXG4gICAgICB9XG5cbiAgICAgIHJlcXVlc3QuaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsIHZhbHVlKVxuICAgICAgfSlcblxuICAgICAgeGhyLnNlbmQodHlwZW9mIHJlcXVlc3QuX2JvZHlJbml0ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiByZXF1ZXN0Ll9ib2R5SW5pdClcbiAgICB9KVxuICB9XG4gIHNlbGYuZmV0Y2gucG9seWZpbGwgPSB0cnVlXG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy93aGF0d2ctZmV0Y2gvZmV0Y2guanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJjb25zdCBBdWRpb0NvbnRleHQgPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQ7XG5pbXBvcnQgaGFuZGxlU2FudGFBdWRpbyBmcm9tICcuL29iamVjdHMvaGFuZGxlU2FudGFBdWRpbyc7XG5pbXBvcnQgc2FudGFTY2VuZSBmcm9tICcuL29iamVjdHMvc2FudGFQYWdlU2NlbmUnO1xuaW1wb3J0IGdldFVybFBhcmFtZXRlciBmcm9tICcuL29iamVjdHMvZ2V0VXJsUGFyYW1ldGVyJztcbmltcG9ydCBDYXJ0QVBJIGZyb20gJy4vbGliL2NhcnRBUEknO1xuXG5sZXQgdGFyZ2V0SWQsIGF1ZGlvQ3R4O1xuXG5jb25zdCBpbml0ID0gKCkgPT4ge1xuXG4gIHBhcnRpY2xlc0pTLmxvYWQoJ3BhcnRpY2xlcy1qcycsICcuLi9hc3NldHMvcGFydGljbGVzLmpzb24nLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2NhbGxiYWNrIC0gcGFydGljbGVzLmpzIGNvbmZpZyBsb2FkZWQnKTtcbiAgfSk7XG5cbiAgdGFyZ2V0SWQgPSBnZXRVcmxQYXJhbWV0ZXIoXCJpZFwiKTtcbiAgaWYgKCF0YXJnZXRJZCkgd2luZG93LmxvY2F0aW9uID0gXCJodHRwczovL2xvY2FsaG9zdDo4MDgwXCI7XG5cbiAgQ2FydEFQSS5yZWFkT25lKHRhcmdldElkKS50aGVuKGQgPT4ge1xuICAgIGlmIChkLnN0YXR1c0NvZGUpIHdpbmRvdy5sb2NhdGlvbiA9IFwiaHR0cHM6Ly9sb2NhbGhvc3Q6ODA4MFwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBmcm9tYCkuaW5uZXJIVE1MID0gYGZyb206ICR7ZC5mcm9tfWA7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRvYCkuaW5uZXJIVE1MID0gYHRvOiAke2QudG99YDtcblxuICAgIGhhbmRsZVNhbnRhQXVkaW8oZCk7XG4gICAgc2FudGFTY2VuZShkKTtcbiAgfSk7XG5cbn1cblxuaW5pdCgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3NhbnRhU2NyaXB0LmpzIiwiY29uc3QgQXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0O1xuaW1wb3J0IENhcnRBUEkgZnJvbSAnLi4vbGliL2NhcnRBUEknO1xuaW1wb3J0IEhlYWQgZnJvbSAnLi4vY2xhc3Nlcy9IZWFkJztcblxubGV0IHRhcmdldElkLCBhdWRpb0N0eDtcbmNvbnN0IHBsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcGxheV9zYW50YWApO1xuY29uc3QgJGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGF1ZGlvYCk7XG5cbmxldCBwaXRjaFNoaWZ0ZXJQcm9jZXNzb3I7XG5cbmxldCBncmFpblNpemUgPSA1MTIsXG4gICAgcGl0Y2hSYXRpbyA9IDEuMCxcbiAgICBvdmVybGFwUmF0aW8gPSAwLjUwO1xuXG5jb25zdCBoYW5kbGVTYW50YUF1ZGlvID0gY2FydCA9PiB7XG4gIGF1ZGlvQ3R4ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuXG4gIGNvbnN0IGF1ZGlvU2V0dGluZ3MgPSBKU09OLnBhcnNlKGNhcnQuYXVkaW9TZXR0aW5ncyk7XG4gIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBzYW50YV9hdWRpb2ApLnNyYyA9IGAuL3VwbG9hZHMvJHtkLmlkfS5vZ2dgO1xuXG4gIHNldFRpbWVvdXQoKCkgPT7CoHtcbiAgICBjb25zdCBidWZmZXJMb2FkZXIgPSBuZXcgQnVmZmVyTG9hZGVyKFxuICAgICAgYXVkaW9DdHgsIFtgLi91cGxvYWRzLyR7Y2FydC5pZH0ub2dnYF0sIGJ1ZmZlckxpc3QgPT4ge1xuXG4gICAgICAgIGxldCBsb29wID0gZmFsc2U7XG4gICAgICAgIGxldCBzb3VyY2U7XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHJlcGVhdGApLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgICgpID0+IHtcbiAgICAgICAgICBsb29wID0gIWxvb3A7XG4gICAgICAgICAgc291cmNlLnN0b3AoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcGl0Y2hSYXRpbyA9IGF1ZGlvU2V0dGluZ3MucGl0Y2g7XG4gICAgICAgIG92ZXJsYXBSYXRpbyA9IGF1ZGlvU2V0dGluZ3Mub3ZlcmxhcDtcblxuICAgICAgICAkYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCAoKSA9PiB7XG4gICAgICAgICAgc291cmNlID0gJyc7XG4gICAgICAgICAgc291cmNlID0gYXVkaW9DdHguY3JlYXRlQnVmZmVyU291cmNlKCk7XG4gICAgICAgICAgc291cmNlLmJ1ZmZlciA9IGJ1ZmZlckxpc3RbMF07XG5cbiAgICAgICAgICAvLyBzb3VyY2UuY29ubmVjdChhdWRpb0N0eC5kZXN0aW5hdGlvbilcbiAgICAgICAgICBzb3VyY2UubG9vcCA9IGxvb3A7XG4gICAgICAgICAgc291cmNlLmNvbm5lY3QocGl0Y2hTaGlmdGVyUHJvY2Vzc29yKTtcbiAgICAgICAgICBzb3VyY2Uuc3RhcnQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIH1cbiAgICApO1xuXG4gICAgYnVmZmVyTG9hZGVyLmxvYWQoKTtcbiAgICBpbml0UHJvY2Vzc29yKCk7XG5cbiAgfSwgMTAwMCk7XG59XG5cbmNvbnN0IGxpbmVhckludGVycG9sYXRpb24gPSAoYSwgYiwgdCkgPT4ge1xuICByZXR1cm4gYSArIChiIC0gYSkgKiB0O1xufTtcblxuY29uc3QgaW5pdFByb2Nlc3NvciA9ICgpID0+IHtcblxuICBpZiAocGl0Y2hTaGlmdGVyUHJvY2Vzc29yKSB7XG4gICAgcGl0Y2hTaGlmdGVyUHJvY2Vzc29yLmRpc2Nvbm5lY3QoKTtcbiAgfVxuXG4gIGlmIChhdWRpb0N0eC5jcmVhdGVTY3JpcHRQcm9jZXNzb3IpIHtcbiAgICBwaXRjaFNoaWZ0ZXJQcm9jZXNzb3IgPSBhdWRpb0N0eC5jcmVhdGVTY3JpcHRQcm9jZXNzb3IoZ3JhaW5TaXplLCAxLCAxKTtcbiAgfSBlbHNlIGlmIChhdWRpb0N0eC5jcmVhdGVKYXZhU2NyaXB0Tm9kZSkge1xuICAgIHBpdGNoU2hpZnRlclByb2Nlc3NvciA9IGF1ZGlvQ3R4LmNyZWF0ZUphdmFTY3JpcHROb2RlKGdyYWluU2l6ZSwgMSwgMSk7XG4gIH1cblxuICBwaXRjaFNoaWZ0ZXJQcm9jZXNzb3IuYnVmZmVyID0gbmV3IEZsb2F0MzJBcnJheShncmFpblNpemUgKiAyKTtcbiAgcGl0Y2hTaGlmdGVyUHJvY2Vzc29yLmdyYWluV2luZG93ID0gaGFubldpbmRvdyhncmFpblNpemUpO1xuXG4gIHBpdGNoU2hpZnRlclByb2Nlc3Nvci5vbmF1ZGlvcHJvY2VzcyA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICB2YXIgaW5wdXREYXRhID0gZXZlbnQuaW5wdXRCdWZmZXIuZ2V0Q2hhbm5lbERhdGEoMCk7XG4gICAgdmFyIG91dHB1dERhdGEgPSBldmVudC5vdXRwdXRCdWZmZXIuZ2V0Q2hhbm5lbERhdGEoMCk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgaW5wdXREYXRhLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgIC8vIEFwcGx5IHRoZSB3aW5kb3cgdG8gdGhlIGlucHV0IGJ1ZmZlclxuICAgICAgaW5wdXREYXRhW2ldICo9IHRoaXMuZ3JhaW5XaW5kb3dbaV07XG5cbiAgICAgIC8vIFNoaWZ0IGhhbGYgb2YgdGhlIGJ1ZmZlclxuICAgICAgdGhpcy5idWZmZXJbaV0gPSB0aGlzLmJ1ZmZlcltpICsgZ3JhaW5TaXplXTtcblxuICAgICAgLy8gRW1wdHkgdGhlIGJ1ZmZlciB0YWlsXG4gICAgICB0aGlzLmJ1ZmZlcltpICsgZ3JhaW5TaXplXSA9IDAuMDtcbiAgICB9XG5cbiAgICAvLyBDYWxjdWxhdGUgdGhlIHBpdGNoIHNoaWZ0ZWQgZ3JhaW4gcmUtc2FtcGxpbmcgYW5kIGxvb3BpbmcgdGhlIGlucHV0XG4gICAgdmFyIGdyYWluRGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkoZ3JhaW5TaXplICogMik7XG4gICAgZm9yICh2YXIgaSA9IDAsIGogPSAwLjA7IGkgPCBncmFpblNpemU7IGkrKywgaiArPSBwaXRjaFJhdGlvKSB7XG5cbiAgICAgIHZhciBpbmRleCA9IE1hdGguZmxvb3IoaikgJSBncmFpblNpemU7XG4gICAgICB2YXIgYSA9IGlucHV0RGF0YVtpbmRleF07XG4gICAgICB2YXIgYiA9IGlucHV0RGF0YVsoaW5kZXggKyAxKSAlIGdyYWluU2l6ZV07XG4gICAgICBncmFpbkRhdGFbaV0gKz0gbGluZWFySW50ZXJwb2xhdGlvbihhLCBiLCBqICUgMS4wKSAqIHRoaXMuZ3JhaW5XaW5kb3dbaV07XG4gICAgfVxuXG4gICAgLy8gQ29weSB0aGUgZ3JhaW4gbXVsdGlwbGUgdGltZXMgb3ZlcmxhcHBpbmcgaXRcbiAgICBmb3IgKGkgPSAwOyBpIDwgZ3JhaW5TaXplOyBpICs9IE1hdGgucm91bmQoZ3JhaW5TaXplICogKDEgLSBvdmVybGFwUmF0aW8pKSkge1xuICAgICAgZm9yIChqID0gMDsgaiA8PSBncmFpblNpemU7IGorKykge1xuICAgICAgICB0aGlzLmJ1ZmZlcltpICsgal0gKz0gZ3JhaW5EYXRhW2pdO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE91dHB1dCB0aGUgZmlyc3QgaGFsZiBvZiB0aGUgYnVmZmVyXG4gICAgZm9yIChpID0gMDsgaSA8IGdyYWluU2l6ZTsgaSsrKSB7XG4gICAgICBvdXRwdXREYXRhW2ldID0gdGhpcy5idWZmZXJbaV07XG4gICAgfVxuICB9O1xuXG4gIHBpdGNoU2hpZnRlclByb2Nlc3Nvci5jb25uZWN0KGF1ZGlvQ3R4LmRlc3RpbmF0aW9uKTtcblxufTtcblxuY29uc3QgaGFubldpbmRvdyA9IGxlbmd0aCA9PiB7XG4gIGNvbnN0IHdpbmRvdyA9IG5ldyBGbG9hdDMyQXJyYXkobGVuZ3RoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgd2luZG93W2ldID0gMC41ICogKDEgLSBNYXRoLmNvcygyICogTWF0aC5QSSAqIGkgLyAobGVuZ3RoIC0gMSkpKTtcbiAgfVxuICByZXR1cm4gd2luZG93O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlU2FudGFBdWRpbztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9vYmplY3RzL2hhbmRsZVNhbnRhQXVkaW8uanMiLCJpbXBvcnQgSGVhZCBmcm9tICcuLi9jbGFzc2VzL0hlYWQnO1xuaW1wb3J0IENhcnRBUEkgZnJvbSAnLi4vbGliL2NhcnRBUEknO1xuaW1wb3J0IENvbG9ycyBmcm9tICcuL2NvbG9ycyc7XG5cbmxldCBzY2VuZSwgY2FtZXJhLCBmaWVsZE9mVmlldywgYXNwZWN0UmF0aW8sIG5lYXJQbGFuZSwgZmFyUGxhbmUsIEhFSUdIVCwgV0lEVEg7XG5sZXQgZ2xvYmFsTGlnaHQsIHNoYWRvd0xpZ2h0LCBiYWNrTGlnaHQsIGxpZ2h0LCByZW5kZXJlciwgY29udGFpbmVyLCBsb2FkZWQ7XG5sZXQgaGVhZCwgd2luZG93SGFsZlgsIHdpbmRvd0hhbGZZO1xuXG5sZXQgbW91c2VQb3MgPSB7IHg6IDAsIHk6IDB9O1xuXG5jb25zdCBzYW50YVNjZW5lID0gZGF0YSA9PiB7XG4gIGNyZWF0ZVNjZW5lKCk7XG4gIGNyZWF0ZUxpZ2h0cygpO1xuXG4gIGNvbnN0IGhlYWRDb2xvcnMgPSBKU09OLnBhcnNlKGRhdGEuaGVhZENvbG9ycyk7XG4gIHNldENvbG9ycyhoZWFkQ29sb3JzKTtcblxuICBoZWFkID0gbmV3IEhlYWQoKTsgLy8gc2hvdyBhbmQgaGFuZGxlIGhlYWRcbiAgc2NlbmUuYWRkKGhlYWQubWVzaCk7XG4gIGxvb3AoKTtcbn1cblxuY29uc3Qgc2V0Q29sb3JzID0gKGhlYWRDb2xvcnMpID0+IHtcbiAgQ29sb3JzLnNraW4gPSBoZWFkQ29sb3JzLnNraW47XG4gIENvbG9ycy5mcmVja2xlcyA9IGhlYWRDb2xvcnMuZnJlY2tsZXM7XG4gIENvbG9ycy5leWUgPSBoZWFkQ29sb3JzLmV5ZTtcbiAgQ29sb3JzLmdsYXNzZXMgPSBoZWFkQ29sb3JzLmdsYXNzZXM7XG4gIENvbG9ycy5oYXQgPSBoZWFkQ29sb3JzLmhhdDtcbn1cblxuY29uc3QgY3JlYXRlU2NlbmUgPSAoKSA9PiB7O1xuICBIRUlHSFQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIFdJRFRIID0gd2luZG93LmlubmVyV2lkdGggLzEuNjc7XG4gIHdpbmRvd0hhbGZYID0gV0lEVEggLyAyO1xuICB3aW5kb3dIYWxmWSA9IEhFSUdIVCAvIDI7XG5cbiAgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbiAgYXNwZWN0UmF0aW8gPSBXSURUSCAvIEhFSUdIVDtcbiAgZmllbGRPZlZpZXcgPSA1MDtcbiAgbmVhclBsYW5lID0gMTtcbiAgZmFyUGxhbmUgPSAyMDAwO1xuXG4gIGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYShmaWVsZE9mVmlldywgYXNwZWN0UmF0aW8sIG5lYXJQbGFuZSwgZmFyUGxhbmUpO1xuICBjYW1lcmEucG9zaXRpb24ueCA9IDA7XG4gIGNhbWVyYS5wb3NpdGlvbi56ID0gNzA7XG4gIGNhbWVyYS5wb3NpdGlvbi55ID0gLTU7XG5cbiAgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7YWxwaGE6IHRydWUsIGFudGlhbGlhczogdHJ1ZX0pO1xuICByZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvPyB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbzogMSlcbiAgcmVuZGVyZXIuc2V0U2l6ZShXSURUSCwgSEVJR0hUKTtcbiAgcmVuZGVyZXIuc2hhZG93TWFwLmVuYWJsZWQgPSB0cnVlO1xuICByZW5kZXJlci5zaGFkb3dNYXAudHlwZSA9IFRIUkVFLlBDRlNvZnRTaGFkb3dNYXA7XG5cbiAgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uV2luZG93UmVzaXplLCBmYWxzZSk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZU1vdXNlTW92ZSwgZmFsc2UpO1xufVxuXG5jb25zdCBvbldpbmRvd1Jlc2l6ZSA9ICgpID0+IHtcbiAgSEVJR0hUID0gd2luZG93LmlubmVySGVpZ2h0O1xuICBXSURUSCA9IHdpbmRvdy5pbm5lcldpZHRoICAvIDEuNjc7XG4gIHdpbmRvd0hhbGZYID0gV0lEVEggLyAyO1xuICB3aW5kb3dIYWxmWSA9IEhFSUdIVCAvIDI7XG4gIHJlbmRlcmVyLnNldFNpemUoV0lEVEgsIEhFSUdIVCk7XG4gIGNhbWVyYS5hc3BlY3QgPSBXSURUSCAvIEhFSUdIVDtcbiAgY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbn1cblxuY29uc3QgaGFuZGxlTW91c2VNb3ZlID0gZSA9PiB7XG4gIG1vdXNlUG9zID0ge1xuICAgIHg6IGV2ZW50LmNsaWVudFgsXG4gICAgeTogZXZlbnQuY2xpZW50WVxuICB9O1xufVxuXG5sZXQgbG9hZGVyTWFuYWdlciA9IG5ldyBUSFJFRS5Mb2FkaW5nTWFuYWdlcigpO1xuXG5jb25zdCBoYW5kbGVXaW5kb3dSZXNpemUgPSBlID0+IHtcbiAgSEVJR0hUID0gd2luZG93LmlubmVySGVpZ2h0O1xuICBXSURUSCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICByZW5kZXJlci5zZXRTaXplKFdJRFRILCBIRUlHSFQpO1xuICBjYW1lcmEuYXNwZWN0ID0gV0lEVEggLyBIRUlHSFQ7XG4gIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG59XG5cbmxldCBpc01vYmlsZSA9IC9pUGhvbmV8QW5kcm9pZC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cbmNvbnN0IGNyZWF0ZUxpZ2h0cyA9ICgpID0+IHtcblxuICBnbG9iYWxMaWdodCA9IG5ldyBUSFJFRS5IZW1pc3BoZXJlTGlnaHQoMHhmZmZmZmYsIDB4NTU1NTU1LCAuOSk7XG5cbiAgc2hhZG93TGlnaHQgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCgweGZmZmZmZiwgLjMpO1xuICBzaGFkb3dMaWdodC5wb3NpdGlvbi5zZXQoMTAwLCAyNTAsIDE3NSk7XG4gIHNoYWRvd0xpZ2h0LmNhc3RTaGFkb3cgPSB0cnVlO1xuXG4gIGJhY2tMaWdodCA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0KDB4ZmZmZmZmLCAuMik7XG4gIGJhY2tMaWdodC5wb3NpdGlvbi5zZXQoLTEwMCwgMjAwLCAxNTApO1xuICBiYWNrTGlnaHQuY2FzdFNoYWRvdyA9IHRydWU7XG5cbiAgaWYgKGlzTW9iaWxlKSBzaGFkb3dMaWdodC5zaGFkb3cubWFwU2l6ZS53aWR0aCA9IHNoYWRvd0xpZ2h0LnNoYWRvdy5tYXBTaXplLmhlaWdodCA9IDEwMjQ7XG4gIGlmICghaXNNb2JpbGUpIHNoYWRvd0xpZ2h0LnNoYWRvdy5tYXBTaXplLndpZHRoID0gc2hhZG93TGlnaHQuc2hhZG93Lm1hcFNpemUuaGVpZ2h0ID0gMjA0ODtcblxuICBzY2VuZS5hZGQoZ2xvYmFsTGlnaHQpO1xuICBzY2VuZS5hZGQoc2hhZG93TGlnaHQpO1xuICBzY2VuZS5hZGQoYmFja0xpZ2h0KTtcbiAgc2NlbmUuYWRkKCBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KCAweGVhZGVhZCwgMC4xICkpO1xufVxuXG5cbmxldCBpc0JsaW5raW5nID0gZmFsc2U7XG5jb25zdCBibGlua0xvb3AgPSAoKSA9PiB7XG4gIGlzQmxpbmtpbmcgPSBmYWxzZTtcblxuICBpZiAoKCFpc0JsaW5raW5nKSAmJiAoTWF0aC5yYW5kb20oKSA+IDAuOTkpKSB7XG4gICAgaXNCbGlua2luZyA9IHRydWU7XG4gICAgYmxpbmsoKTtcbiAgfVxufVxuXG5jb25zdCBibGluayA9ICgpID0+IHtcbiAgaGVhZC5leWVzLnNjYWxlLnkgPSAxO1xuICBUd2Vlbk1heC50byhoZWFkLmV5ZXMuc2NhbGUsIC4wNywge1xuICAgIHk6IDAsXG4gICAgeW95bzogdHJ1ZSxcbiAgICByZXBlYXQ6IDEsXG4gICAgb25Db21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICBpc0JsaW5raW5nID0gZmFsc2U7XG4gICAgfVxuICB9KTtcbn1cblxuY29uc3QgbG9vcCA9ICgpID0+IHtcbiAgYmxpbmtMb29wKCk7XG4gIC8vaGVhZC5kaXp6eSgpO1xuICBsZXQgeFRhcmdldCA9IChtb3VzZVBvcy54IC0gd2luZG93SGFsZlgpO1xuICBsZXQgeVRhcmdldCA9IChtb3VzZVBvcy55IC0gd2luZG93SGFsZlkpO1xuXG4gIGhlYWQuaWRsZSh4VGFyZ2V0LCB5VGFyZ2V0KTtcbiAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNhbnRhU2NlbmU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvb2JqZWN0cy9zYW50YVBhZ2VTY2VuZS5qcyIsImNvbnN0IGdldFVybFBhcmFtZXRlciA9IG5hbWUgPT4ge1xuICBuYW1lID0gbmFtZS5yZXBsYWNlKC9bXFxbXS8sICdcXFxcWycpLnJlcGxhY2UoL1tcXF1dLywgJ1xcXFxdJyk7XG4gIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cCgnW1xcXFw/Jl0nICsgbmFtZSArICc9KFteJiNdKiknKTtcbiAgY29uc3QgcmVzdWx0cyA9IHJlZ2V4LmV4ZWMobG9jYXRpb24uc2VhcmNoKTtcbiAgcmV0dXJuIHJlc3VsdHMgPT09IG51bGwgPyBmYWxzZSA6IGRlY29kZVVSSUNvbXBvbmVudChyZXN1bHRzWzFdLnJlcGxhY2UoL1xcKy9nLCAnICcpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldFVybFBhcmFtZXRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9vYmplY3RzL2dldFVybFBhcmFtZXRlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=