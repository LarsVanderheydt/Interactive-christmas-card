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
/* 4 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_cartAPI__ = __webpack_require__(2);
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
  var saved = false;

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
      var from = document.getElementById('name_input');
      var to = document.getElementById('recipient_input');
      var link = document.querySelector('.unique_link');

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

      if (!saved) {
        saved = true;
        __WEBPACK_IMPORTED_MODULE_3__lib_cartAPI__["a" /* default */].create({
          text: audio.text,
          id: audio.id,
          from: from.value || 'Human',
          to: to.value || 'Fellow Human',
          audioSettings: JSON.stringify(audioSettings),
          headColors: JSON.stringify(headColors)
        });
      } else {
        __WEBPACK_IMPORTED_MODULE_3__lib_cartAPI__["a" /* default */].update({
          text: audio.text,
          id: audio.id,
          from: from.value || 'Human',
          to: to.value || 'Fellow Human',
          audioSettings: JSON.stringify(audioSettings),
          headColors: JSON.stringify(headColors)
        });
      }

      link.innerHTML = 'https://localhost:8080/santa.html?id=' + audio.id;
      link.setAttribute('href', 'https://localhost:8080/santa.html?id=' + audio.id);
      link.setAttribute('target', '_blank');
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


var alphabet = __webpack_require__(4);
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

var alphabet = __webpack_require__(4);

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
var alphabet = __webpack_require__(4);

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

var alphabet = __webpack_require__(4);

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


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmE2MWVjZjI3NWM2NjlmY2YwOWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL29iamVjdHMvY29sb3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLWZldGNoL2ZldGNoLW5wbS1icm93c2VyaWZ5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9saWIvY2FydEFQSS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY2xhc3Nlcy9IZWFkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaG9ydGlkL2xpYi9hbHBoYWJldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvb2JqZWN0cy9NYXRlcmlhbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3doYXR3Zy1mZXRjaC9mZXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvZW5jb2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzZXMvQXVkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2xpYi9zb3VuZEFQSS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Nob3J0aWQvbGliL3JhbmRvbS9yYW5kb20tZnJvbS1zZWVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaG9ydGlkL2xpYi9yYW5kb20vcmFuZG9tLWJ5dGUtYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvZGVjb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaG9ydGlkL2xpYi9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvaXMtdmFsaWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Nob3J0aWQvbGliL3V0aWwvY2x1c3Rlci13b3JrZXItaWQtYnJvd3Nlci5qcyJdLCJuYW1lcyI6WyJDb2xvcnMiLCJza2luIiwiZnJlY2tsZXMiLCJ3aGl0ZSIsImdsYXNzZXMiLCJ0ZWV0aCIsImJsYWNrIiwiZXllIiwiaGF0IiwidXJsIiwiY3JlYXRlIiwidGV4dCIsImlkIiwiZnJvbSIsImJsb2IiLCJ0byIsImF1ZGlvU2V0dGluZ3MiLCJoZWFkQ29sb3JzIiwibWV0aG9kIiwiYm9keSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiZmV0Y2giLCJ0aGVuIiwiciIsImpzb24iLCJyZWFkIiwicmVhZE9uZSIsInVwZGF0ZSIsImlzQmxpbmtpbmciLCJIZWFkIiwibWVzaCIsIlRIUkVFIiwiT2JqZWN0M0QiLCJoZWFkR2VvbSIsIkJveEJ1ZmZlckdlb21ldHJ5Iiwic2tpbk1hdCIsIk1lc2hMYW1iZXJ0TWF0ZXJpYWwiLCJjb2xvciIsImZsYXRTaGFkaW5nIiwiZXllTWF0IiwiTWVzaFBob25nTWF0ZXJpYWwiLCJoZWFkIiwiTWVzaCIsImNhc3RTaGFkb3ciLCJyZWNlaXZlU2hhZG93IiwiYWRkIiwiYmVhcmQiLCJwb3NpdGlvbiIsInkiLCJ6IiwiQmVhcmQiLCJHbGFzc2VzIiwiSGFpciIsIkV5ZXMiLCJFeWVCcm93cyIsIkhhdCIsIkZyZWNrbGVzIiwiRmVhdHVyZXMiLCJpZGxlIiwibm9ybWFsaXplIiwidiIsInZtaW4iLCJ2bWF4IiwidG1pbiIsInRtYXgiLCJudiIsIk1hdGgiLCJtYXgiLCJtaW4iLCJkdiIsInBjIiwiZHQiLCJ0diIsInNwZWVkIiwiZXllQmx1ZVJpZ2h0UG9zWCIsImV5ZUJsdWVMZWZ0UG9zWCIsImV5ZUJsdWVSaWdodFBvc1kiLCJleWVCbHVlTGVmdFBvc1kiLCJleWVCcm93UmlnaHRQb3NZIiwiZXllQnJvd0xlZnRQb3NZIiwiZXllQmx1ZVJpZ2h0IiwieCIsImV5ZUJsdWVMZWZ0IiwiZXllQnJvd1JpZ2h0IiwiZXllQnJvd0xlZnQiLCJ4VGFyZ2V0IiwieVRhcmdldCIsImRpc3RhbmNlIiwicm90YXRpb24iLCJzaW4iLCJEYXRlIiwibm93IiwiUEkiLCJtb3VzdGFjaGUiLCJjb3MiLCJ1cGRhdGVCb2R5IiwiYmVhcmRHZW9tTWVyZ2VkIiwiR2VvbWV0cnkiLCJiZWFyZDFHZW9tIiwiQm94R2VvbWV0cnkiLCJiZWFyZDEiLCJNYXQiLCJ3aGl0ZU1hdCIsImFwcGx5TWF0cml4IiwiTWF0cml4NCIsIm1ha2VUcmFuc2xhdGlvbiIsInVwZGF0ZU1hdHJpeCIsIm1lcmdlIiwiZ2VvbWV0cnkiLCJtYXRyaXgiLCJiZWFyZDIiLCJzY2FsZSIsImJlYXJkMyIsImNsb25lIiwiYmVhcmQ0IiwiYmVhcmQyR2VvbSIsInZlcnRpY2VzIiwiYmVhcmQ1IiwiYmVhcmQzR2VvbSIsImJlYXJkNiIsImJlYXJkNyIsImJlYXJkOCIsImJlYXJkNEdlb20iLCJiZWFyZDkiLCJiZWFyZDVHZW9tIiwiYmVhcmQxMCIsImJlYXJkMTEiLCJiZWFyZE1lcmdlZCIsIm1vdXRoR2VvbSIsIm1vdXRoIiwiYmxhY2tNYXQiLCJzZXQiLCJ0ZWV0aEdlb20iLCJ0ZWV0aE1hdCIsIm1vdXN0YWNoZUdlb20iLCJnbGFzc2VzTWF0IiwiZnJhbWVHZW9tTWVyZ2VkIiwiZnJhbWVPdXRlckdlb20iLCJDeWxpbmRlckdlb21ldHJ5IiwiZnJhbWVJbm5lckdlb20iLCJtYWtlUm90YXRpb25YIiwiZnJhbWVCU1AiLCJUaHJlZUJTUCIsImZyYW1lQ3V0QlNQIiwiZnJhbWVpbnRlcnNlY3Rpb25CU1AiLCJzdWJ0cmFjdCIsImZyYW1lTGVmdCIsInRvTWVzaCIsImZyYW1lUmlnaHQiLCJtYWtlUm90YXRpb25aIiwiZnJhbWVNaWRHZW9tIiwiZnJhbWVNaWQiLCJmcmFtZUVuZEdlb20iLCJmcmFtZUVuZFJpZ2h0IiwiZnJhbWVFbmRMZWZ0IiwiZnJhbWVTcG9rZUdlb20iLCJmcmFtZVNwb2tlUmlnaHQiLCJmcmFtZVNwb2tlTGVmdCIsImZyYW1lTWVyZ2VkIiwiaGFpciIsImhhaXJHZW9tTWVyZ2VkIiwiaGFpckZsYXRHZW9tIiwiaGFpcjEiLCJoYWlyMiIsImhhaXIzIiwiaGFpcjQiLCJoYWlyNiIsImhhaXJGbGF0QmFja0dlb20iLCJoYWlyNSIsImhhaXJNZXJnZWQiLCJleWVzIiwiZXllV2hpdGVHZW9tIiwiUGxhbmVHZW9tZXRyeSIsImV5ZVdoaXRlUmlnaHQiLCJleWVCbHVlR2VvbSIsImV5ZVB1cGlsR2VvbSIsImV5ZVB1cGlsUmlnaHQiLCJleWVXaGl0ZUxlZnQiLCJleWVQdXBpbExlZnQiLCJleWVCcm93cyIsImV5ZUJyb3dHZW9tIiwiaGF0TWF0IiwiYmFuZEdlb20iLCJUb3J1c0dlb21ldHJ5IiwiYmlnQ29uZUdlb20iLCJzbWFsbENvbmVHZW9tIiwiaGF0RGluZ2xlR2VvbSIsIlNwaGVyZUdlb21ldHJ5IiwiYmFuZCIsImJpZ0NvbmUiLCJzbWFsbENvbmUiLCJtYWtlUm90YXRpb25ZIiwiaGF0RGluZ2xlIiwiZnJlY2tsZXNNYXQiLCJmcmVja2xlc0dlb21NZXJnZWQiLCJmcmVja2xlc0dlb20iLCJmcmVja2xlMSIsImZyZWNrbGUyIiwiZnJlY2tsZTMiLCJmcmVja2xlNCIsImZyZWNrbGU1IiwiZnJlY2tsZTYiLCJmcmVja2xlZE1lcmdlZCIsImVhckdlb20iLCJlYXJSaWdodCIsImVhckxlZnQiLCJub3NlR2VvbSIsIm5vc2UiLCJNYXRlcmlhbHMiLCJNZXNoTm9ybWFsTWF0ZXJpYWwiLCJzY2VuZSIsImNhbWVyYSIsImZpZWxkT2ZWaWV3IiwiYXNwZWN0UmF0aW8iLCJuZWFyUGxhbmUiLCJmYXJQbGFuZSIsIkhFSUdIVCIsIldJRFRIIiwiZ2xvYmFsTGlnaHQiLCJzaGFkb3dMaWdodCIsImJhY2tMaWdodCIsImxpZ2h0IiwicmVuZGVyZXIiLCJjb250YWluZXIiLCJsb2FkZWQiLCJzdGFycyIsIndpbmRvd0hhbGZYIiwid2luZG93SGFsZlkiLCJhdWRpbyIsIlNwZWVjaFRleHQiLCJjb250cm9sbGVyIiwiZ3VpIiwic2F2ZUJ0biIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJtb3VzZVBvcyIsInN0YXJBcnJheSIsImlzTW9iaWxlIiwidGVzdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImxvYWRlck1hbmFnZXIiLCJMb2FkaW5nTWFuYWdlciIsInNhdmVkIiwiaW5pdCIsInBhcnRpY2xlc0pTIiwibG9hZCIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVTY2VuZSIsImNyZWF0ZUxpZ2h0cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJsaW5rIiwicXVlcnlTZWxlY3RvciIsInBpdGNoIiwicGl0Y2hSYXRpbyIsIm92ZXJsYXAiLCJDYXJ0QVBJIiwidmFsdWUiLCJKU09OIiwic3RyaW5naWZ5IiwiaW5uZXJIVE1MIiwic2V0QXR0cmlidXRlIiwiZGF0IiwiR1VJIiwiZG9tRWxlbWVudCIsImNsb3NlZCIsImNvbnRyb2xsZXJUZXh0IiwiZ3VpQ29udHJvbGxlciIsIndpbmRvdyIsImxvb3AiLCJrZXlzIiwiZm9yRWFjaCIsImFkZENvbG9yIiwia2V5Iiwib25DaGFuZ2UiLCJyZW1vdmUiLCJjcmVhdGVIZWFkIiwiZGVjMmhleCIsImkiLCJyZXN1bHQiLCJ0b1N0cmluZyIsImxlbmd0aCIsImlubmVySGVpZ2h0IiwiaW5uZXJXaWR0aCIsIlNjZW5lIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJXZWJHTFJlbmRlcmVyIiwiYWxwaGEiLCJhbnRpYWxpYXMiLCJzZXRQaXhlbFJhdGlvIiwiZGV2aWNlUGl4ZWxSYXRpbyIsInNldFNpemUiLCJzaGFkb3dNYXAiLCJlbmFibGVkIiwidHlwZSIsIlBDRlNvZnRTaGFkb3dNYXAiLCJhcHBlbmRDaGlsZCIsIm9uV2luZG93UmVzaXplIiwiaGFuZGxlTW91c2VNb3ZlIiwiYXNwZWN0IiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsImV2ZW50IiwiY2xpZW50WCIsImNsaWVudFkiLCJoYW5kbGVXaW5kb3dSZXNpemUiLCJIZW1pc3BoZXJlTGlnaHQiLCJEaXJlY3Rpb25hbExpZ2h0Iiwic2hhZG93IiwibWFwU2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiQW1iaWVudExpZ2h0IiwibmFtZSIsImNyZWF0ZUNoYXJhY3RlciIsImJsaW5rTG9vcCIsInJhbmRvbSIsImJsaW5rIiwiVHdlZW5NYXgiLCJ5b3lvIiwicmVwZWF0Iiwib25Db21wbGV0ZSIsInJlbmRlciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIlNwZWVjaFJlY29nbml0aW9uIiwid2Via2l0U3BlZWNoUmVjb2duaXRpb24iLCJTcGVlY2hHcmFtbWFyTGlzdCIsIndlYmtpdFNwZWVjaEdyYW1tYXJMaXN0IiwiU3BlZWNoUmVjb2duaXRpb25FdmVudCIsIndlYmtpdFNwZWVjaFJlY29nbml0aW9uRXZlbnQiLCJBdWRpb0NvbnRleHQiLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJhdWRpb0N0eCIsInJlY29nbml0aW9uIiwidHJhbnNjcmlwdCIsImF1ZGlvQ2h1bmtzIiwic291cmNlIiwiJHRleHQiLCIkcmVjb3JkIiwiJGF1ZGlvIiwiJHN0b3AiLCJhdWRpb1NvdXJjZXMiLCJwaXRjaFNoaWZ0ZXJQcm9jZXNzb3IiLCJncmFpblNpemUiLCJvdmVybGFwUmF0aW8iLCJBdWRpbyIsInNob3J0SWQiLCJnZW5lcmF0ZSIsInNwZWVjaFNldHRpbmdzIiwib25yZXN1bHQiLCJnb3RSZXN1bHQiLCJvbnNwZWVjaGVuZCIsIm9uU3BlZWNoRW5kIiwiZSIsInR4dCIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsIm1lZGlhUmVjb3JkZXIiLCJNZWRpYVJlY29yZGVyIiwic3RyZWFtIiwic3RhcnQiLCJkaXNhYmxlZCIsInB1c2giLCJkYXRhIiwiQmxvYiIsIlNvdW5kQVBJIiwic2V0VGltZW91dCIsImJ1ZmZlckxvYWRlciIsIkJ1ZmZlckxvYWRlciIsImJ1ZmZlckxpc3QiLCJzdG9wIiwiJHBpdGNoIiwicGFyc2VGbG9hdCIsImNyZWF0ZUJ1ZmZlclNvdXJjZSIsImJ1ZmZlciIsImNvbm5lY3QiLCJpbml0UHJvY2Vzc29yIiwidGV4dENvbnRlbnQiLCJsYXN0IiwicmVzdWx0cyIsImNvbnRpbnVvdXMiLCJsYW5nIiwiaW50ZXJpbVJlc3VsdHMiLCJtYXhBbHRlcm5hdGl2ZXMiLCJsaW5lYXJJbnRlcnBvbGF0aW9uIiwiYSIsImIiLCJ0IiwiZGlzY29ubmVjdCIsImNyZWF0ZVNjcmlwdFByb2Nlc3NvciIsImNyZWF0ZUphdmFTY3JpcHROb2RlIiwiRmxvYXQzMkFycmF5IiwiZ3JhaW5XaW5kb3ciLCJoYW5uV2luZG93Iiwib25hdWRpb3Byb2Nlc3MiLCJpbnB1dERhdGEiLCJpbnB1dEJ1ZmZlciIsImdldENoYW5uZWxEYXRhIiwib3V0cHV0RGF0YSIsIm91dHB1dEJ1ZmZlciIsImdyYWluRGF0YSIsImoiLCJpbmRleCIsImZsb29yIiwicm91bmQiLCJkZXN0aW5hdGlvbiIsIm5ld0ZpbGVOYW1lIiwic3BsaXQiLCJqb2luIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDN0RBLElBQU1BLFNBQVM7QUFDYkMsUUFBTSxRQURPO0FBRWJDLFlBQVUsUUFGRztBQUdiQyxTQUFPLFFBSE07QUFJYkMsV0FBUyxRQUpJO0FBS2JDLFNBQU8sUUFMTTtBQU1iQyxTQUFPLFFBTk07QUFPYkMsT0FBSyxRQVBRO0FBUWJDLE9BQUs7QUFSUSxDQUFmO0FBVUEseURBQWVSLE1BQWYsRTs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDTEE7O0FBRUEsSUFBTVMsaUJBQU47O0FBRUEseURBQWU7O0FBRWJDLFVBQVEsc0JBQTJEO0FBQUEsUUFBekRDLElBQXlELFFBQXpEQSxJQUF5RDtBQUFBLFFBQW5EQyxFQUFtRCxRQUFuREEsRUFBbUQ7QUFBQSxRQUEvQ0MsSUFBK0MsUUFBL0NBLElBQStDO0FBQUEsUUFBekNDLElBQXlDLFFBQXpDQSxJQUF5QztBQUFBLFFBQW5DQyxFQUFtQyxRQUFuQ0EsRUFBbUM7QUFBQSxRQUEvQkMsYUFBK0IsUUFBL0JBLGFBQStCO0FBQUEsUUFBaEJDLFVBQWdCLFFBQWhCQSxVQUFnQjs7QUFDakUsUUFBTUMsZUFBTjtBQUNBO0FBQ0EsUUFBTUMsT0FBTyxJQUFJQyxRQUFKLEVBQWI7QUFDQUQsU0FBS0UsTUFBTCxTQUFvQlYsSUFBcEI7QUFDQVEsU0FBS0UsTUFBTCxPQUFrQlQsRUFBbEI7QUFDQU8sU0FBS0UsTUFBTCxTQUFvQlIsSUFBcEI7QUFDQU0sU0FBS0UsTUFBTCxPQUFrQk4sRUFBbEI7QUFDQUksU0FBS0UsTUFBTCxrQkFBNkJMLGFBQTdCO0FBQ0FHLFNBQUtFLE1BQUwsZUFBMEJKLFVBQTFCOztBQUVBLFdBQU8sd0RBQUFLLENBQU1iLEdBQU4sRUFBVyxFQUFDUyxjQUFELEVBQVNDLFVBQVQsRUFBWCxFQUNKSSxJQURJLENBQ0M7QUFBQSxhQUFLQyxFQUFFQyxJQUFGLEVBQUw7QUFBQSxLQURELENBQVA7QUFFRCxHQWZZOztBQWlCYkMsUUFBTSxnQkFBTTtBQUNWLFdBQU8sd0RBQUFKLENBQVNiLEdBQVQscUJBQ0pjLElBREksQ0FDQztBQUFBLGFBQUtDLEVBQUVDLElBQUYsRUFBTDtBQUFBLEtBREQsQ0FBUDtBQUVELEdBcEJZOztBQXNCYkUsV0FBUyxxQkFBTTtBQUNiLFFBQU1ULGNBQU47QUFDQSxXQUFPLHdEQUFBSSxDQUFTYixHQUFULFNBQWdCRyxFQUFoQixFQUFzQixFQUFDTSxjQUFELEVBQXRCLEVBQWdDSyxJQUFoQyxDQUFxQztBQUFBLGFBQUtDLEVBQUVDLElBQUYsRUFBTDtBQUFBLEtBQXJDLENBQVA7QUFDRCxHQXpCWTs7QUEyQmJHLFVBQVEsdUJBQXFEO0FBQUEsUUFBbkRqQixJQUFtRCxTQUFuREEsSUFBbUQ7QUFBQSxRQUE3Q0MsRUFBNkMsU0FBN0NBLEVBQTZDO0FBQUEsUUFBekNDLElBQXlDLFNBQXpDQSxJQUF5QztBQUFBLFFBQW5DRSxFQUFtQyxTQUFuQ0EsRUFBbUM7QUFBQSxRQUEvQkMsYUFBK0IsU0FBL0JBLGFBQStCO0FBQUEsUUFBaEJDLFVBQWdCLFNBQWhCQSxVQUFnQjs7QUFDM0QsUUFBTUMsY0FBTjtBQUNBLFFBQU1DLE9BQU8sSUFBSUMsUUFBSixFQUFiO0FBQ0FELFNBQUtFLE1BQUwsU0FBb0JWLElBQXBCO0FBQ0FRLFNBQUtFLE1BQUwsT0FBa0JULEVBQWxCO0FBQ0FPLFNBQUtFLE1BQUwsU0FBb0JSLElBQXBCO0FBQ0FNLFNBQUtFLE1BQUwsT0FBa0JOLEVBQWxCO0FBQ0FJLFNBQUtFLE1BQUwsa0JBQTZCTCxhQUE3QjtBQUNBRyxTQUFLRSxNQUFMLGVBQTBCSixVQUExQjs7QUFFQSxXQUFPLHdEQUFBSyxDQUFTYixHQUFULFNBQWdCRyxFQUFoQixFQUFzQixFQUFDTSxjQUFELEVBQVNDLFVBQVQsRUFBdEIsRUFBc0NJLElBQXRDLENBQTJDO0FBQUEsYUFBS0MsRUFBRUMsSUFBRixFQUFMO0FBQUEsS0FBM0MsQ0FBUDtBQUNEO0FBdENZLENBQWYsRTs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7O0FBRUEsSUFBSUksYUFBYSxLQUFqQjs7SUFFcUJDLEk7QUFDbkIsa0JBQWM7QUFBQTs7QUFDWixTQUFLQyxJQUFMLEdBQVksSUFBSUMsTUFBTUMsUUFBVixFQUFaOztBQUVBLFFBQUlDLFdBQVcsSUFBSUYsTUFBTUcsaUJBQVYsQ0FBNEIsRUFBNUIsRUFBZ0MsRUFBaEMsRUFBb0MsRUFBcEMsQ0FBZjtBQUNBLFFBQUlDLFVBQVUsSUFBSUosTUFBTUssbUJBQVYsQ0FBOEIsRUFBQ0MsT0FBTyxnRUFBQXRDLENBQU9DLElBQWYsRUFBcUJzQyxhQUFhLElBQWxDLEVBQTlCLENBQWQ7QUFDQSxRQUFJQyxTQUFTLElBQUlSLE1BQU1TLGlCQUFWLENBQTRCLEVBQUNILE9BQU8sZ0VBQUF0QyxDQUFPTyxHQUFmLEVBQW9CZ0MsYUFBYSxJQUFqQyxFQUE1QixDQUFiOztBQUVBLFNBQUtHLElBQUwsR0FBWSxJQUFJVixNQUFNVyxJQUFWLENBQWVULFFBQWYsRUFBd0JFLE9BQXhCLENBQVo7QUFDQSxTQUFLTSxJQUFMLENBQVVFLFVBQVYsR0FBdUIsSUFBdkI7QUFDQSxTQUFLRixJQUFMLENBQVVHLGFBQVYsR0FBMEIsS0FBMUI7QUFDQSxTQUFLZCxJQUFMLENBQVVlLEdBQVYsQ0FBYyxLQUFLSixJQUFuQjs7QUFFQSxTQUFLSyxLQUFMLEdBQWEsSUFBSWYsTUFBTUMsUUFBVixFQUFiO0FBQ0EsU0FBS2MsS0FBTCxDQUFXQyxRQUFYLENBQW9CQyxDQUFwQixHQUF3QixDQUFDLENBQXpCO0FBQ0EsU0FBS0YsS0FBTCxDQUFXQyxRQUFYLENBQW9CRSxDQUFwQixHQUF3QixHQUF4QjtBQUNBLFNBQUtSLElBQUwsQ0FBVUksR0FBVixDQUFjLEtBQUtDLEtBQW5COztBQUVBLFNBQUtJLEtBQUw7QUFDQSxTQUFLQyxPQUFMO0FBQ0EsU0FBS0MsSUFBTDtBQUNBLFNBQUtDLElBQUw7QUFDQSxTQUFLQyxRQUFMO0FBQ0EsU0FBS0MsR0FBTDtBQUNBLFNBQUtDLFFBQUw7QUFDQSxTQUFLQyxRQUFMO0FBQ0EsU0FBS0MsSUFBTDtBQUNBLFNBQUtDLFNBQUw7QUFDRDs7Ozs4QkFFU0MsQyxFQUFHQyxJLEVBQU1DLEksRUFBTUMsSSxFQUFNQyxJLEVBQU07QUFDbkMsVUFBTUMsS0FBS0MsS0FBS0MsR0FBTCxDQUFTRCxLQUFLRSxHQUFMLENBQVNSLENBQVQsRUFBWUUsSUFBWixDQUFULEVBQTRCRCxJQUE1QixDQUFYO0FBQ0EsVUFBTVEsS0FBS1AsT0FBT0QsSUFBbEI7QUFDQSxVQUFNUyxLQUFLLENBQUNMLEtBQUtKLElBQU4sSUFBY1EsRUFBekI7QUFDQSxVQUFNRSxLQUFLUCxPQUFPRCxJQUFsQjtBQUNBLFVBQU1TLEtBQUtULE9BQVFPLEtBQUtDLEVBQXhCO0FBQ0EsYUFBT0MsRUFBUDtBQUNEOzs7K0JBRVVDLEssRUFBT0MsZ0IsRUFBa0JDLGUsRUFBaUJDLGdCLEVBQWtCQyxlLEVBQWlCQyxnQixFQUFrQkMsZSxFQUFpQjtBQUN6SCxXQUFLQyxZQUFMLENBQWtCakMsUUFBbEIsQ0FBMkJrQyxDQUEzQixJQUFnQyxDQUFDUCxtQkFBbUIsS0FBS00sWUFBTCxDQUFrQmpDLFFBQWxCLENBQTJCa0MsQ0FBL0MsSUFBb0RSLEtBQXBGO0FBQ0EsV0FBS1MsV0FBTCxDQUFpQm5DLFFBQWpCLENBQTBCa0MsQ0FBMUIsSUFBK0IsQ0FBQ04sa0JBQWtCLEtBQUtPLFdBQUwsQ0FBaUJuQyxRQUFqQixDQUEwQmtDLENBQTdDLElBQWtEUixLQUFqRjs7QUFFQSxXQUFLTyxZQUFMLENBQWtCakMsUUFBbEIsQ0FBMkJDLENBQTNCLElBQWdDLENBQUM0QixtQkFBbUIsS0FBS0ksWUFBTCxDQUFrQmpDLFFBQWxCLENBQTJCQyxDQUEvQyxJQUFvRHlCLEtBQXBGO0FBQ0EsV0FBS1MsV0FBTCxDQUFpQm5DLFFBQWpCLENBQTBCQyxDQUExQixJQUErQixDQUFDNkIsa0JBQWtCLEtBQUtLLFdBQUwsQ0FBaUJuQyxRQUFqQixDQUEwQkMsQ0FBN0MsSUFBa0R5QixLQUFqRjs7QUFFQSxXQUFLVSxZQUFMLENBQWtCcEMsUUFBbEIsQ0FBMkJDLENBQTNCLElBQWdDLENBQUM4QixtQkFBbUIsS0FBS0ssWUFBTCxDQUFrQnBDLFFBQWxCLENBQTJCQyxDQUEvQyxJQUFvRHlCLEtBQXBGO0FBQ0EsV0FBS1csV0FBTCxDQUFpQnJDLFFBQWpCLENBQTBCQyxDQUExQixJQUErQixDQUFDK0Isa0JBQWtCLEtBQUtLLFdBQUwsQ0FBaUJyQyxRQUFqQixDQUEwQkMsQ0FBN0MsSUFBa0R5QixLQUFqRjtBQUNEOzs7MkJBRThCO0FBQUEsVUFBMUJZLE9BQTBCLHVFQUFoQixDQUFnQjtBQUFBLFVBQWJDLE9BQWEsdUVBQUgsQ0FBRzs7QUFDN0IsVUFBSUMsV0FBVyxDQUFmOztBQUVBLFdBQUs5QyxJQUFMLENBQVUrQyxRQUFWLENBQW1CdkMsQ0FBbkIsR0FBdUJpQixLQUFLdUIsR0FBTCxDQUFTQyxLQUFLQyxHQUFMLEtBQWEsS0FBdEIsSUFBK0J6QixLQUFLMEIsRUFBcEMsR0FBeUMsS0FBaEU7QUFDQSxXQUFLbkQsSUFBTCxDQUFVK0MsUUFBVixDQUFtQlAsQ0FBbkIsR0FBdUJmLEtBQUt1QixHQUFMLENBQVNDLEtBQUtDLEdBQUwsS0FBYSxLQUF0QixJQUErQnpCLEtBQUswQixFQUFwQyxHQUF5QyxJQUFoRTs7QUFFQSxVQUFNbEIsbUJBQW1CLEtBQUtmLFNBQUwsQ0FBZTBCLE9BQWYsRUFBd0IsQ0FBQyxHQUF6QixFQUE4QixHQUE5QixFQUFtQyxDQUFDLEdBQXBDLEVBQXlDLEdBQXpDLENBQXpCO0FBQ0EsVUFBTVYsa0JBQWtCLEtBQUtoQixTQUFMLENBQWUwQixPQUFmLEVBQXdCLENBQUMsR0FBekIsRUFBOEIsR0FBOUIsRUFBbUMsQ0FBQyxHQUFwQyxFQUF5QyxHQUF6QyxDQUF4Qjs7QUFFQSxVQUFNVCxtQkFBbUIsS0FBS2pCLFNBQUwsQ0FBZTJCLE9BQWYsRUFBd0IsQ0FBQyxHQUF6QixFQUE4QixHQUE5QixFQUFtQyxHQUFuQyxFQUF3QyxDQUFDLEdBQXpDLENBQXpCO0FBQ0EsVUFBTVQsa0JBQWtCLEtBQUtsQixTQUFMLENBQWUyQixPQUFmLEVBQXdCLENBQUMsR0FBekIsRUFBOEIsR0FBOUIsRUFBbUMsR0FBbkMsRUFBd0MsQ0FBQyxHQUF6QyxDQUF4Qjs7QUFFQSxVQUFNUixtQkFBbUIsS0FBS25CLFNBQUwsQ0FBZTBCLE9BQWYsRUFBd0IsQ0FBQyxHQUF6QixFQUE4QixHQUE5QixFQUFtQyxDQUFDLENBQXBDLEVBQXVDLEdBQXZDLENBQXpCO0FBQ0EsVUFBTU4sa0JBQWtCLEtBQUtwQixTQUFMLENBQWUwQixPQUFmLEVBQXdCLENBQUMsR0FBekIsRUFBOEIsR0FBOUIsRUFBbUMsQ0FBQyxDQUFwQyxFQUF1QyxHQUF2QyxDQUF4Qjs7QUFFQSxXQUFLUSxTQUFMLENBQWU5QyxRQUFmLENBQXdCQyxDQUF4QixHQUE0QmtCLEtBQUs0QixHQUFMLENBQVNKLEtBQUtDLEdBQUwsS0FBYSxJQUF0QixJQUE4QkosUUFBOUIsR0FBeUMsQ0FBckU7QUFDQSxXQUFLTSxTQUFMLENBQWVMLFFBQWYsQ0FBd0J2QyxDQUF4QixHQUE0QmlCLEtBQUt1QixHQUFMLENBQVNDLEtBQUtDLEdBQUwsS0FBYSxJQUF0QixJQUE4QnpCLEtBQUswQixFQUFuQyxHQUF3QyxJQUFwRTs7QUFFQSxXQUFLOUQsSUFBTCxDQUFVMEQsUUFBVixDQUFtQnhDLENBQW5CLEdBQXVCa0IsS0FBS3VCLEdBQUwsQ0FBU0MsS0FBS0MsR0FBTCxLQUFhLEtBQXRCLElBQStCekIsS0FBSzBCLEVBQXBDLEdBQXlDLElBQWhFO0FBQ0EsV0FBS0csVUFBTCxDQUFnQixFQUFoQixFQUFvQnJCLGdCQUFwQixFQUFzQ0MsZUFBdEMsRUFBdURDLGdCQUF2RCxFQUF5RUMsZUFBekUsRUFBMEZDLGdCQUExRixFQUE0R0MsZUFBNUc7QUFDRDs7OzRCQUVPO0FBQ04sVUFBSWlCLGtCQUFrQixJQUFJakUsTUFBTWtFLFFBQVYsRUFBdEI7O0FBRUEsVUFBSUMsYUFBYSxJQUFJbkUsTUFBTW9FLFdBQVYsQ0FBc0IsQ0FBdEIsRUFBeUIsRUFBekIsRUFBNkIsRUFBN0IsQ0FBakI7O0FBRUEsVUFBSUMsU0FBUyxJQUFJckUsTUFBTVcsSUFBVixDQUFld0QsVUFBZixFQUEyQixtRUFBQUcsQ0FBSUMsUUFBL0IsQ0FBYjtBQUNBRixhQUFPRyxXQUFQLENBQW1CLElBQUl4RSxNQUFNeUUsT0FBVixHQUFvQkMsZUFBcEIsQ0FBb0MsQ0FBcEMsRUFBdUMsQ0FBdkMsRUFBMEMsQ0FBMUMsQ0FBbkI7QUFDQUwsYUFBT00sWUFBUDtBQUNBVixzQkFBZ0JXLEtBQWhCLENBQXNCUCxPQUFPUSxRQUE3QixFQUF1Q1IsT0FBT1MsTUFBOUM7O0FBRUEsVUFBSUMsU0FBUyxJQUFJL0UsTUFBTVcsSUFBVixDQUFld0QsVUFBZixFQUEyQixtRUFBQUcsQ0FBSUMsUUFBL0IsQ0FBYjtBQUNBUSxhQUFPUCxXQUFQLENBQW1CLElBQUl4RSxNQUFNeUUsT0FBVixHQUFvQkMsZUFBcEIsQ0FBb0MsQ0FBcEMsRUFBdUMsQ0FBQyxDQUF4QyxFQUEyQyxDQUEzQyxDQUFuQjtBQUNBSyxhQUFPQyxLQUFQLENBQWE5RCxDQUFiLEdBQWlCLEdBQWpCO0FBQ0E2RCxhQUFPSixZQUFQO0FBQ0FWLHNCQUFnQlcsS0FBaEIsQ0FBc0JHLE9BQU9GLFFBQTdCLEVBQXVDRSxPQUFPRCxNQUE5Qzs7QUFFQSxVQUFJRyxTQUFTWixPQUFPYSxLQUFQLEVBQWI7QUFDQUQsYUFBT2pFLFFBQVAsQ0FBZ0JrQyxDQUFoQixHQUFvQixDQUFDbUIsT0FBT3JELFFBQVAsQ0FBZ0JrQyxDQUFyQztBQUNBK0IsYUFBT04sWUFBUDtBQUNBVixzQkFBZ0JXLEtBQWhCLENBQXNCSyxPQUFPSixRQUE3QixFQUF1Q0ksT0FBT0gsTUFBOUM7O0FBRUEsVUFBSUssU0FBU0osT0FBT0csS0FBUCxFQUFiO0FBQ0FDLGFBQU9uRSxRQUFQLENBQWdCa0MsQ0FBaEIsR0FBb0IsQ0FBQzZCLE9BQU8vRCxRQUFQLENBQWdCa0MsQ0FBckM7QUFDQWlDLGFBQU9SLFlBQVA7QUFDQVYsc0JBQWdCVyxLQUFoQixDQUFzQk8sT0FBT04sUUFBN0IsRUFBdUNNLE9BQU9MLE1BQTlDOztBQUVBLFVBQUlNLGFBQWEsSUFBSXBGLE1BQU1vRSxXQUFWLENBQXNCLENBQXRCLEVBQXlCLEVBQXpCLEVBQTZCLEVBQTdCLENBQWpCO0FBQ0FnQixpQkFBV0MsUUFBWCxDQUFvQixDQUFwQixFQUF1Qm5FLENBQXZCLElBQTRCLENBQTVCO0FBQ0FrRSxpQkFBV0MsUUFBWCxDQUFvQixDQUFwQixFQUF1Qm5FLENBQXZCLElBQTRCLENBQTVCOztBQUVBLFVBQUlvRSxTQUFTLElBQUl0RixNQUFNVyxJQUFWLENBQWV5RSxVQUFmLEVBQTJCLG1FQUFBZCxDQUFJQyxRQUEvQixDQUFiO0FBQ0FlLGFBQU9kLFdBQVAsQ0FBbUIsSUFBSXhFLE1BQU15RSxPQUFWLEdBQW9CQyxlQUFwQixDQUFvQyxDQUFwQyxFQUF1QyxDQUFDLENBQXhDLEVBQTJDLENBQTNDLENBQW5CO0FBQ0FZLGFBQU9YLFlBQVA7QUFDQVYsc0JBQWdCVyxLQUFoQixDQUFzQlUsT0FBT1QsUUFBN0IsRUFBdUNTLE9BQU9SLE1BQTlDOztBQUVBLFVBQUlTLGFBQWEsSUFBSXZGLE1BQU1vRSxXQUFWLENBQXNCLEdBQXRCLEVBQTJCLEVBQTNCLEVBQStCLEVBQS9CLENBQWpCO0FBQ0FtQixpQkFBV0YsUUFBWCxDQUFvQixDQUFwQixFQUF1Qm5FLENBQXZCLElBQTRCLENBQTVCO0FBQ0FxRSxpQkFBV0YsUUFBWCxDQUFvQixDQUFwQixFQUF1Qm5FLENBQXZCLElBQTRCLENBQTVCOztBQUVBLFVBQUlzRSxTQUFTLElBQUl4RixNQUFNVyxJQUFWLENBQWU0RSxVQUFmLEVBQTJCLG1FQUFBakIsQ0FBSUMsUUFBL0IsQ0FBYjtBQUNBaUIsYUFBT2hCLFdBQVAsQ0FBbUIsSUFBSXhFLE1BQU15RSxPQUFWLEdBQW9CQyxlQUFwQixDQUFvQyxHQUFwQyxFQUF5QyxDQUFDLENBQTFDLEVBQTZDLENBQTdDLENBQW5CO0FBQ0FjLGFBQU9iLFlBQVA7QUFDQVYsc0JBQWdCVyxLQUFoQixDQUFzQlksT0FBT1gsUUFBN0IsRUFBdUNXLE9BQU9WLE1BQTlDOztBQUVBLFVBQUlXLFNBQVNILE9BQU9KLEtBQVAsRUFBYjtBQUNBTyxhQUFPekUsUUFBUCxDQUFnQmtDLENBQWhCLEdBQW9CLENBQUNvQyxPQUFPdEUsUUFBUCxDQUFnQmtDLENBQXJDO0FBQ0F1QyxhQUFPZCxZQUFQO0FBQ0FWLHNCQUFnQlcsS0FBaEIsQ0FBc0JhLE9BQU9aLFFBQTdCLEVBQXVDWSxPQUFPWCxNQUE5Qzs7QUFFQSxVQUFJWSxTQUFTRixPQUFPTixLQUFQLEVBQWI7QUFDQVEsYUFBTzFFLFFBQVAsQ0FBZ0JrQyxDQUFoQixHQUFvQixDQUFDc0MsT0FBT3hFLFFBQVAsQ0FBZ0JrQyxDQUFyQztBQUNBd0MsYUFBT2YsWUFBUDtBQUNBVixzQkFBZ0JXLEtBQWhCLENBQXNCYyxPQUFPYixRQUE3QixFQUF1Q2EsT0FBT1osTUFBOUM7O0FBRUEsVUFBSWEsYUFBYSxJQUFJM0YsTUFBTW9FLFdBQVYsQ0FBc0IsR0FBdEIsRUFBMkIsSUFBM0IsRUFBaUMsRUFBakMsQ0FBakI7QUFDQXVCLGlCQUFXTixRQUFYLENBQW9CLENBQXBCLEVBQXVCbkUsQ0FBdkIsSUFBNEIsQ0FBNUI7QUFDQXlFLGlCQUFXTixRQUFYLENBQW9CLENBQXBCLEVBQXVCbkUsQ0FBdkIsSUFBNEIsQ0FBNUI7O0FBRUEsVUFBSTBFLFNBQVMsSUFBSTVGLE1BQU1XLElBQVYsQ0FBZWdGLFVBQWYsRUFBMkIsbUVBQUFyQixDQUFJQyxRQUEvQixDQUFiO0FBQ0FxQixhQUFPcEIsV0FBUCxDQUFtQixJQUFJeEUsTUFBTXlFLE9BQVYsR0FBb0JDLGVBQXBCLENBQW9DLENBQXBDLEVBQXVDLENBQUMsQ0FBeEMsRUFBMkMsSUFBM0MsQ0FBbkI7QUFDQWtCLGFBQU9qQixZQUFQO0FBQ0FWLHNCQUFnQlcsS0FBaEIsQ0FBc0JnQixPQUFPZixRQUE3QixFQUF1Q2UsT0FBT2QsTUFBOUM7O0FBRUEsVUFBSWUsYUFBYSxJQUFJN0YsTUFBTW9FLFdBQVYsQ0FBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsQ0FBakI7QUFDQSxVQUFJMEIsVUFBVSxJQUFJOUYsTUFBTVcsSUFBVixDQUFla0YsVUFBZixFQUEyQixtRUFBQXZCLENBQUlDLFFBQS9CLENBQWQ7QUFDQXVCLGNBQVF0QixXQUFSLENBQW9CLElBQUl4RSxNQUFNeUUsT0FBVixHQUFvQkMsZUFBcEIsQ0FBb0MsQ0FBQyxDQUFyQyxFQUF3QyxDQUFDLENBQXpDLEVBQTRDLENBQUMsQ0FBN0MsQ0FBcEI7QUFDQW9CLGNBQVFuQixZQUFSO0FBQ0FWLHNCQUFnQlcsS0FBaEIsQ0FBc0JrQixRQUFRakIsUUFBOUIsRUFBd0NpQixRQUFRaEIsTUFBaEQ7O0FBRUEsVUFBSWlCLFVBQVUsSUFBSS9GLE1BQU1XLElBQVYsQ0FBZWtGLFVBQWYsRUFBMkIsbUVBQUF2QixDQUFJQyxRQUEvQixDQUFkO0FBQ0F3QixjQUFRdkIsV0FBUixDQUFvQixJQUFJeEUsTUFBTXlFLE9BQVYsR0FBb0JDLGVBQXBCLENBQW9DLENBQXBDLEVBQXVDLENBQUMsQ0FBeEMsRUFBMkMsQ0FBQyxDQUE1QyxDQUFwQjtBQUNBcUIsY0FBUXBCLFlBQVI7QUFDQVYsc0JBQWdCVyxLQUFoQixDQUFzQm1CLFFBQVFsQixRQUE5QixFQUF3Q2tCLFFBQVFqQixNQUFoRDs7QUFFQSxVQUFJa0IsY0FBYyxJQUFJaEcsTUFBTVcsSUFBVixDQUFlc0QsZUFBZixFQUFnQyxtRUFBQUssQ0FBSUMsUUFBcEMsQ0FBbEI7QUFDQXlCLGtCQUFZcEYsVUFBWixHQUF5QixJQUF6QjtBQUNBb0Ysa0JBQVluRixhQUFaLEdBQTRCLElBQTVCOztBQUVBLFVBQUlvRixZQUFZLElBQUlqRyxNQUFNb0UsV0FBVixDQUFzQixFQUF0QixFQUEwQixDQUExQixFQUE2QixDQUE3QixDQUFoQjtBQUNBLFVBQUk4QixRQUFRLElBQUlsRyxNQUFNVyxJQUFWLENBQWVzRixTQUFmLEVBQTBCLG1FQUFBM0IsQ0FBSTZCLFFBQTlCLENBQVo7QUFDQUQsWUFBTWxGLFFBQU4sQ0FBZW9GLEdBQWYsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekI7QUFDQUYsWUFBTXRGLFVBQU4sR0FBbUIsS0FBbkI7QUFDQXNGLFlBQU1yRixhQUFOLEdBQXNCLElBQXRCOztBQUVBLFVBQUl3RixZQUFZLElBQUlyRyxNQUFNb0UsV0FBVixDQUFzQixFQUF0QixFQUEwQixDQUExQixFQUE2QixDQUE3QixDQUFoQjtBQUNBLFVBQUkvRixRQUFRLElBQUkyQixNQUFNVyxJQUFWLENBQWUwRixTQUFmLEVBQTBCLG1FQUFBL0IsQ0FBSWdDLFFBQTlCLENBQVo7QUFDQWpJLFlBQU0yQyxRQUFOLENBQWVvRixHQUFmLENBQW1CLENBQW5CLEVBQXNCLEdBQXRCLEVBQTJCLEdBQTNCO0FBQ0EvSCxZQUFNdUMsVUFBTixHQUFtQixLQUFuQjtBQUNBdkMsWUFBTXdDLGFBQU4sR0FBc0IsSUFBdEI7QUFDQXFGLFlBQU1wRixHQUFOLENBQVV6QyxLQUFWOztBQUVBLFdBQUswQyxLQUFMLENBQVdELEdBQVgsQ0FBZWtGLFdBQWYsRUFBNEJFLEtBQTVCOztBQUVBLFVBQUlLLGdCQUFnQixJQUFJdkcsTUFBTW9FLFdBQVYsQ0FBc0IsRUFBdEIsRUFBMEIsQ0FBMUIsRUFBNkIsQ0FBN0IsRUFBZ0MsQ0FBaEMsQ0FBcEI7QUFDQW1DLG9CQUFjbEIsUUFBZCxDQUF1QixDQUF2QixFQUEwQnBFLENBQTFCLElBQStCLENBQS9CO0FBQ0FzRixvQkFBY2xCLFFBQWQsQ0FBdUIsQ0FBdkIsRUFBMEJwRSxDQUExQixJQUErQixDQUEvQjtBQUNBc0Ysb0JBQWNsQixRQUFkLENBQXVCLENBQXZCLEVBQTBCcEUsQ0FBMUIsSUFBK0IsQ0FBL0I7QUFDQXNGLG9CQUFjbEIsUUFBZCxDQUF1QixDQUF2QixFQUEwQnBFLENBQTFCLElBQStCLENBQS9CO0FBQ0FzRixvQkFBY2xCLFFBQWQsQ0FBdUIsQ0FBdkIsRUFBMEJwRSxDQUExQixJQUErQixDQUEvQjtBQUNBc0Ysb0JBQWNsQixRQUFkLENBQXVCLENBQXZCLEVBQTBCcEUsQ0FBMUIsSUFBK0IsQ0FBL0I7QUFDQXNGLG9CQUFjbEIsUUFBZCxDQUF1QixDQUF2QixFQUEwQnBFLENBQTFCLElBQStCLENBQS9CO0FBQ0FzRixvQkFBY2xCLFFBQWQsQ0FBdUIsQ0FBdkIsRUFBMEJwRSxDQUExQixJQUErQixDQUEvQjtBQUNBc0Ysb0JBQWNsQixRQUFkLENBQXVCLENBQXZCLEVBQTBCbkMsQ0FBMUIsSUFBK0IsQ0FBL0I7QUFDQXFELG9CQUFjbEIsUUFBZCxDQUF1QixDQUF2QixFQUEwQm5DLENBQTFCLElBQStCLENBQS9COztBQUVBcUQsb0JBQWMvQixXQUFkLENBQTBCLElBQUl4RSxNQUFNeUUsT0FBVixHQUFvQkMsZUFBcEIsQ0FBb0MsQ0FBcEMsRUFBdUMsQ0FBdkMsRUFBMEMsQ0FBMUMsQ0FBMUI7QUFDQSxXQUFLWixTQUFMLEdBQWlCLElBQUk5RCxNQUFNVyxJQUFWLENBQWU0RixhQUFmLEVBQThCLG1FQUFBakMsQ0FBSUMsUUFBbEMsQ0FBakI7QUFDQSxXQUFLVCxTQUFMLENBQWVsRCxVQUFmLEdBQTRCLElBQTVCO0FBQ0EsV0FBS2tELFNBQUwsQ0FBZWpELGFBQWYsR0FBK0IsSUFBL0I7O0FBRUEsV0FBS2lELFNBQUwsQ0FBZTlDLFFBQWYsQ0FBd0JvRixHQUF4QixDQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQztBQUNBLFdBQUtyRixLQUFMLENBQVdELEdBQVgsQ0FBZSxLQUFLZ0QsU0FBcEI7QUFDRDs7OzhCQUVTOztBQUVSLFdBQUsxRixPQUFMLEdBQWUsSUFBSTRCLE1BQU1DLFFBQVYsRUFBZjtBQUNBLFdBQUs3QixPQUFMLENBQWE0QyxRQUFiLENBQXNCb0YsR0FBdEIsQ0FBMEIsQ0FBMUIsRUFBNkIsQ0FBN0IsRUFBZ0MsQ0FBaEM7QUFDQSxXQUFLMUYsSUFBTCxDQUFVSSxHQUFWLENBQWMsS0FBSzFDLE9BQW5CO0FBQ0EsVUFBSW9JLGFBQWEsSUFBSXhHLE1BQU1TLGlCQUFWLENBQTRCLEVBQUNILE9BQU8sZ0VBQUF0QyxDQUFPSSxPQUFmLEVBQXdCbUMsYUFBYSxJQUFyQyxFQUE1QixDQUFqQjs7QUFFQSxVQUFJa0csa0JBQWtCLElBQUl6RyxNQUFNa0UsUUFBVixFQUF0Qjs7QUFFQSxVQUFJd0MsaUJBQWlCLElBQUkxRyxNQUFNMkcsZ0JBQVYsQ0FBMkIsQ0FBM0IsRUFBOEIsQ0FBOUIsRUFBaUMsR0FBakMsRUFBc0MsRUFBdEMsQ0FBckI7QUFDQSxVQUFJQyxpQkFBaUIsSUFBSTVHLE1BQU0yRyxnQkFBVixDQUEyQixHQUEzQixFQUFnQyxHQUFoQyxFQUFxQyxHQUFyQyxFQUEwQyxFQUExQyxDQUFyQjs7QUFFQUQscUJBQWVsQyxXQUFmLENBQTJCLElBQUl4RSxNQUFNeUUsT0FBVixHQUFvQm9DLGFBQXBCLENBQWtDLENBQUMxRSxLQUFLMEIsRUFBTixHQUFXLENBQTdDLENBQTNCO0FBQ0ErQyxxQkFBZXBDLFdBQWYsQ0FBMkIsSUFBSXhFLE1BQU15RSxPQUFWLEdBQW9Cb0MsYUFBcEIsQ0FBa0MsQ0FBQzFFLEtBQUswQixFQUFOLEdBQVcsQ0FBN0MsQ0FBM0I7O0FBRUEsVUFBSWlELFdBQVcsSUFBSUMsUUFBSixDQUFhTCxjQUFiLENBQWY7QUFDQSxVQUFJTSxjQUFjLElBQUlELFFBQUosQ0FBYUgsY0FBYixDQUFsQjs7QUFFQSxVQUFJSyx1QkFBdUJILFNBQVNJLFFBQVQsQ0FBa0JGLFdBQWxCLENBQTNCO0FBQ0EsVUFBSUcsWUFBWUYscUJBQXFCRyxNQUFyQixDQUE0QlosVUFBNUIsQ0FBaEI7O0FBRUFXLGdCQUFVM0MsV0FBVixDQUFzQixJQUFJeEUsTUFBTXlFLE9BQVYsR0FBb0JDLGVBQXBCLENBQW9DLENBQXBDLEVBQXVDLENBQXZDLEVBQTBDLENBQTFDLENBQXRCO0FBQ0F5QyxnQkFBVXhDLFlBQVY7QUFDQThCLHNCQUFnQjdCLEtBQWhCLENBQXNCdUMsVUFBVXRDLFFBQWhDLEVBQTBDc0MsVUFBVXJDLE1BQXBEOztBQUVBLFVBQUl1QyxhQUFhRixVQUFVakMsS0FBVixFQUFqQjtBQUNBbUMsaUJBQVc3QyxXQUFYLENBQXVCLElBQUl4RSxNQUFNeUUsT0FBVixHQUFvQjZDLGFBQXBCLENBQWtDbkYsS0FBSzBCLEVBQUwsR0FBVSxFQUE1QyxDQUF2QjtBQUNBd0QsaUJBQVc3QyxXQUFYLENBQXVCLElBQUl4RSxNQUFNeUUsT0FBVixHQUFvQkMsZUFBcEIsQ0FBb0MsQ0FBQyxHQUFyQyxFQUEwQyxDQUFDLElBQTNDLEVBQWlELENBQWpELENBQXZCO0FBQ0EyQyxpQkFBVzFDLFlBQVg7QUFDQThCLHNCQUFnQjdCLEtBQWhCLENBQXNCeUMsV0FBV3hDLFFBQWpDLEVBQTJDd0MsV0FBV3ZDLE1BQXREOztBQUVBLFVBQUl5QyxlQUFlLElBQUl2SCxNQUFNb0UsV0FBVixDQUFzQixDQUF0QixFQUF5QixFQUF6QixFQUE2QixFQUE3QixDQUFuQjtBQUNBLFVBQUlvRCxXQUFXLElBQUl4SCxNQUFNVyxJQUFWLENBQWU0RyxZQUFmLEVBQTZCZixVQUE3QixDQUFmO0FBQ0FnQixlQUFTaEQsV0FBVCxDQUFxQixJQUFJeEUsTUFBTXlFLE9BQVYsR0FBb0JDLGVBQXBCLENBQW9DLENBQXBDLEVBQXVDLEdBQXZDLEVBQTRDLENBQUMsR0FBN0MsQ0FBckI7QUFDQThDLGVBQVM3QyxZQUFUO0FBQ0E4QixzQkFBZ0I3QixLQUFoQixDQUFzQjRDLFNBQVMzQyxRQUEvQixFQUF5QzJDLFNBQVMxQyxNQUFsRDs7QUFFQSxVQUFJMkMsZUFBZSxJQUFJekgsTUFBTW9FLFdBQVYsQ0FBc0IsR0FBdEIsRUFBMkIsRUFBM0IsRUFBK0IsQ0FBL0IsQ0FBbkI7QUFDQSxVQUFJc0QsZ0JBQWdCLElBQUkxSCxNQUFNVyxJQUFWLENBQWU4RyxZQUFmLEVBQTZCakIsVUFBN0IsQ0FBcEI7QUFDQWtCLG9CQUFjbEQsV0FBZCxDQUEwQixJQUFJeEUsTUFBTXlFLE9BQVYsR0FBb0JDLGVBQXBCLENBQW9DLEdBQXBDLEVBQXlDLENBQXpDLEVBQTRDLENBQTVDLENBQTFCO0FBQ0FnRCxvQkFBYy9DLFlBQWQ7QUFDQThCLHNCQUFnQjdCLEtBQWhCLENBQXNCOEMsY0FBYzdDLFFBQXBDLEVBQThDNkMsY0FBYzVDLE1BQTVEOztBQUVBLFVBQUk2QyxlQUFlRCxjQUFjeEMsS0FBZCxFQUFuQjtBQUNBeUMsbUJBQWEzRyxRQUFiLENBQXNCa0MsQ0FBdEIsR0FBMEIsQ0FBQ3dFLGNBQWMxRyxRQUFkLENBQXVCa0MsQ0FBbEQ7QUFDQXlFLG1CQUFhaEQsWUFBYjtBQUNBOEIsc0JBQWdCN0IsS0FBaEIsQ0FBc0IrQyxhQUFhOUMsUUFBbkMsRUFBNkM4QyxhQUFhN0MsTUFBMUQ7O0FBRUEsVUFBSThDLGlCQUFpQixJQUFJNUgsTUFBTW9FLFdBQVYsQ0FBc0IsQ0FBdEIsRUFBeUIsR0FBekIsRUFBOEIsRUFBOUIsQ0FBckI7QUFDQSxVQUFJeUQsa0JBQWtCLElBQUk3SCxNQUFNVyxJQUFWLENBQWVpSCxjQUFmLEVBQStCcEIsVUFBL0IsQ0FBdEI7QUFDQXFCLHNCQUFnQnJELFdBQWhCLENBQTRCLElBQUl4RSxNQUFNeUUsT0FBVixHQUFvQkMsZUFBcEIsQ0FBb0MsQ0FBcEMsRUFBdUMsQ0FBdkMsRUFBMEMsQ0FBQyxHQUEzQyxDQUE1QjtBQUNBbUQsc0JBQWdCbEQsWUFBaEI7QUFDQThCLHNCQUFnQjdCLEtBQWhCLENBQXNCaUQsZ0JBQWdCaEQsUUFBdEMsRUFBZ0RnRCxnQkFBZ0IvQyxNQUFoRTs7QUFFQSxVQUFJZ0QsaUJBQWlCRCxnQkFBZ0IzQyxLQUFoQixFQUFyQjtBQUNBNEMscUJBQWU5RyxRQUFmLENBQXdCa0MsQ0FBeEIsR0FBNEIsQ0FBQzJFLGdCQUFnQjdHLFFBQWhCLENBQXlCa0MsQ0FBdEQ7QUFDQTRFLHFCQUFlbkQsWUFBZjtBQUNBOEIsc0JBQWdCN0IsS0FBaEIsQ0FBc0JrRCxlQUFlakQsUUFBckMsRUFBK0NpRCxlQUFlaEQsTUFBOUQ7O0FBRUEsVUFBSWlELGNBQWMsSUFBSS9ILE1BQU1XLElBQVYsQ0FBZThGLGVBQWYsRUFBZ0NELFVBQWhDLENBQWxCO0FBQ0F1QixrQkFBWW5ILFVBQVosR0FBeUIsS0FBekI7QUFDQW1ILGtCQUFZbEgsYUFBWixHQUE0QixJQUE1Qjs7QUFFQSxXQUFLekMsT0FBTCxDQUFhMEMsR0FBYixDQUFpQmlILFdBQWpCO0FBRUQ7OzsyQkFFTTs7QUFFTCxXQUFLQyxJQUFMLEdBQVksSUFBSWhJLE1BQU1DLFFBQVYsRUFBWjtBQUNBLFdBQUsrSCxJQUFMLENBQVVoSCxRQUFWLENBQW1Cb0YsR0FBbkIsQ0FBdUIsQ0FBdkIsRUFBMEIsQ0FBMUIsRUFBNkIsQ0FBN0I7QUFDQSxXQUFLMUYsSUFBTCxDQUFVSSxHQUFWLENBQWMsS0FBS2tILElBQW5COztBQUVBLFVBQUlDLGlCQUFpQixJQUFJakksTUFBTWtFLFFBQVYsRUFBckI7O0FBRUEsVUFBSWdFLGVBQWUsSUFBSWxJLE1BQU1vRSxXQUFWLENBQXNCLEVBQXRCLEVBQTBCLENBQTFCLEVBQTZCLEVBQTdCLENBQW5COztBQUVBLFVBQUkrRCxRQUFRLElBQUluSSxNQUFNVyxJQUFWLENBQWV1SCxZQUFmLEVBQTZCLG1FQUFBNUQsQ0FBSUMsUUFBakMsQ0FBWjtBQUNBNEQsWUFBTTNELFdBQU4sQ0FBa0IsSUFBSXhFLE1BQU15RSxPQUFWLEdBQW9CNkMsYUFBcEIsQ0FBa0MsQ0FBQ25GLEtBQUswQixFQUFOLEdBQVcsRUFBN0MsQ0FBbEI7QUFDQXNFLFlBQU0zRCxXQUFOLENBQWtCLElBQUl4RSxNQUFNeUUsT0FBVixHQUFvQkMsZUFBcEIsQ0FBb0MsQ0FBQyxDQUFyQyxFQUF3QyxDQUFDLEdBQXpDLEVBQThDLENBQTlDLENBQWxCO0FBQ0F5RCxZQUFNeEQsWUFBTjtBQUNBc0QscUJBQWVyRCxLQUFmLENBQXFCdUQsTUFBTXRELFFBQTNCLEVBQXFDc0QsTUFBTXJELE1BQTNDOztBQUVBLFVBQUlzRCxRQUFRLElBQUlwSSxNQUFNVyxJQUFWLENBQWV1SCxZQUFmLEVBQTZCLG1FQUFBNUQsQ0FBSUMsUUFBakMsQ0FBWjtBQUNBNkQsWUFBTTVELFdBQU4sQ0FBa0IsSUFBSXhFLE1BQU15RSxPQUFWLEdBQW9CNkMsYUFBcEIsQ0FBa0MsQ0FBQ25GLEtBQUswQixFQUFOLEdBQVcsRUFBN0MsQ0FBbEI7QUFDQXVFLFlBQU01RCxXQUFOLENBQWtCLElBQUl4RSxNQUFNeUUsT0FBVixHQUFvQkMsZUFBcEIsQ0FBb0MsQ0FBQyxDQUFyQyxFQUF3QyxDQUF4QyxFQUEyQyxDQUEzQyxDQUFsQjtBQUNBMEQsWUFBTXpELFlBQU47QUFDQXNELHFCQUFlckQsS0FBZixDQUFxQndELE1BQU12RCxRQUEzQixFQUFxQ3VELE1BQU10RCxNQUEzQzs7QUFFQSxVQUFJdUQsUUFBUSxJQUFJckksTUFBTVcsSUFBVixDQUFldUgsWUFBZixFQUE2QixtRUFBQTVELENBQUlDLFFBQWpDLENBQVo7QUFDQThELFlBQU03RCxXQUFOLENBQWtCLElBQUl4RSxNQUFNeUUsT0FBVixHQUFvQjZDLGFBQXBCLENBQWtDLENBQUNuRixLQUFLMEIsRUFBTixHQUFXLENBQTdDLENBQWxCO0FBQ0F3RSxZQUFNN0QsV0FBTixDQUFrQixJQUFJeEUsTUFBTXlFLE9BQVYsR0FBb0JDLGVBQXBCLENBQW9DLENBQXBDLEVBQXVDLENBQXZDLEVBQTBDLENBQTFDLENBQWxCO0FBQ0EyRCxZQUFNMUQsWUFBTjtBQUNBc0QscUJBQWVyRCxLQUFmLENBQXFCeUQsTUFBTXhELFFBQTNCLEVBQXFDd0QsTUFBTXZELE1BQTNDOztBQUVBLFVBQUl3RCxRQUFRLElBQUl0SSxNQUFNVyxJQUFWLENBQWV1SCxZQUFmLEVBQTZCLG1FQUFBNUQsQ0FBSUMsUUFBakMsQ0FBWjtBQUNBK0QsWUFBTTlELFdBQU4sQ0FBa0IsSUFBSXhFLE1BQU15RSxPQUFWLEdBQW9CNkMsYUFBcEIsQ0FBa0MsQ0FBQ25GLEtBQUswQixFQUFOLEdBQVcsQ0FBN0MsQ0FBbEI7QUFDQXlFLFlBQU05RCxXQUFOLENBQWtCLElBQUl4RSxNQUFNeUUsT0FBVixHQUFvQkMsZUFBcEIsQ0FBb0MsQ0FBcEMsRUFBdUMsQ0FBdkMsRUFBMEMsQ0FBMUMsQ0FBbEI7QUFDQTRELFlBQU0zRCxZQUFOO0FBQ0FzRCxxQkFBZXJELEtBQWYsQ0FBcUIwRCxNQUFNekQsUUFBM0IsRUFBcUN5RCxNQUFNeEQsTUFBM0M7O0FBRUEsVUFBSXlELFFBQVEsSUFBSXZJLE1BQU1XLElBQVYsQ0FBZXVILFlBQWYsRUFBNkIsbUVBQUE1RCxDQUFJQyxRQUFqQyxDQUFaO0FBQ0FnRSxZQUFNL0QsV0FBTixDQUFrQixJQUFJeEUsTUFBTXlFLE9BQVYsR0FBb0I2QyxhQUFwQixDQUFrQyxDQUFDbkYsS0FBSzBCLEVBQU4sR0FBVyxDQUFDLENBQTlDLENBQWxCO0FBQ0EwRSxZQUFNL0QsV0FBTixDQUFrQixJQUFJeEUsTUFBTXlFLE9BQVYsR0FBb0JDLGVBQXBCLENBQW9DLENBQUMsSUFBckMsRUFBMkMsQ0FBQyxFQUE1QyxFQUFnRCxDQUFoRCxDQUFsQjtBQUNBNkQsWUFBTTVELFlBQU47QUFDQXNELHFCQUFlckQsS0FBZixDQUFxQjJELE1BQU0xRCxRQUEzQixFQUFxQzBELE1BQU16RCxNQUEzQzs7QUFFQSxVQUFJMEQsbUJBQW1CLElBQUl4SSxNQUFNb0UsV0FBVixDQUFzQixFQUF0QixFQUEwQixDQUExQixFQUE2QixDQUE3QixDQUF2QjtBQUNBb0UsdUJBQWlCbkQsUUFBakIsQ0FBMEIsQ0FBMUIsRUFBNkJuQyxDQUE3QixJQUFrQyxDQUFsQztBQUNBc0YsdUJBQWlCbkQsUUFBakIsQ0FBMEIsQ0FBMUIsRUFBNkJuQyxDQUE3QixJQUFrQyxDQUFsQztBQUNBc0YsdUJBQWlCbkQsUUFBakIsQ0FBMEIsQ0FBMUIsRUFBNkJuQyxDQUE3QixJQUFrQyxDQUFsQztBQUNBc0YsdUJBQWlCbkQsUUFBakIsQ0FBMEIsQ0FBMUIsRUFBNkJuQyxDQUE3QixJQUFrQyxDQUFsQzs7QUFFQSxVQUFJdUYsUUFBUSxJQUFJekksTUFBTVcsSUFBVixDQUFlNkgsZ0JBQWYsRUFBaUMsbUVBQUFsRSxDQUFJQyxRQUFyQyxDQUFaO0FBQ0FrRSxZQUFNakUsV0FBTixDQUFrQixJQUFJeEUsTUFBTXlFLE9BQVYsR0FBb0JDLGVBQXBCLENBQW9DLENBQXBDLEVBQXVDLENBQUMsR0FBeEMsRUFBNkMsQ0FBQyxDQUE5QyxDQUFsQjtBQUNBK0QsWUFBTTlELFlBQU47QUFDQXNELHFCQUFlckQsS0FBZixDQUFxQjZELE1BQU01RCxRQUEzQixFQUFxQzRELE1BQU0zRCxNQUEzQzs7QUFFQSxVQUFJNEQsYUFBYSxJQUFJMUksTUFBTVcsSUFBVixDQUFlc0gsY0FBZixFQUErQixtRUFBQTNELENBQUlDLFFBQW5DLENBQWpCO0FBQ0FtRSxpQkFBVzlILFVBQVgsR0FBd0IsS0FBeEI7QUFDQThILGlCQUFXN0gsYUFBWCxHQUEyQixJQUEzQjs7QUFFQSxXQUFLbUgsSUFBTCxDQUFVbEgsR0FBVixDQUFjNEgsVUFBZDtBQUVEOzs7MkJBRU07O0FBRUwsV0FBS0MsSUFBTCxHQUFZLElBQUkzSSxNQUFNQyxRQUFWLEVBQVo7QUFDQSxXQUFLMEksSUFBTCxDQUFVM0gsUUFBVixDQUFtQm9GLEdBQW5CLENBQXVCLENBQXZCLEVBQTBCLENBQTFCLEVBQTZCLENBQTdCO0FBQ0EsV0FBSzFGLElBQUwsQ0FBVUksR0FBVixDQUFjLEtBQUs2SCxJQUFuQjs7QUFFQSxVQUFJQyxlQUFlLElBQUk1SSxNQUFNNkksYUFBVixDQUF3QixHQUF4QixFQUE2QixHQUE3QixDQUFuQjs7QUFFQSxVQUFJQyxnQkFBZ0IsSUFBSTlJLE1BQU1XLElBQVYsQ0FBZWlJLFlBQWYsRUFBNkIsbUVBQUF0RSxDQUFJQyxRQUFqQyxDQUFwQjtBQUNBdUUsb0JBQWM5SCxRQUFkLENBQXVCb0YsR0FBdkIsQ0FBMkIsQ0FBQyxJQUE1QixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQztBQUNBMEMsb0JBQWNsSSxVQUFkLEdBQTJCLEtBQTNCO0FBQ0FrSSxvQkFBY2pJLGFBQWQsR0FBOEIsS0FBOUI7O0FBRUEsVUFBSWtJLGNBQWMsSUFBSS9JLE1BQU02SSxhQUFWLENBQXdCLEdBQXhCLEVBQTZCLEdBQTdCLENBQWxCOztBQUVBLFVBQUlySSxTQUFTLElBQUlSLE1BQU1TLGlCQUFWLENBQTRCLEVBQUNILE9BQU8sZ0VBQUF0QyxDQUFPTyxHQUFmLEVBQW9CZ0MsYUFBYSxJQUFqQyxFQUE1QixDQUFiOztBQUVBLFdBQUswQyxZQUFMLEdBQW9CLElBQUlqRCxNQUFNVyxJQUFWLENBQWVvSSxXQUFmLEVBQTRCdkksTUFBNUIsQ0FBcEI7QUFDQSxXQUFLeUMsWUFBTCxDQUFrQmpDLFFBQWxCLENBQTJCb0YsR0FBM0IsQ0FBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsR0FBckM7QUFDQSxXQUFLbkQsWUFBTCxDQUFrQnJDLFVBQWxCLEdBQStCLEtBQS9CO0FBQ0EsV0FBS3FDLFlBQUwsQ0FBa0JwQyxhQUFsQixHQUFrQyxLQUFsQzs7QUFFQWlJLG9CQUFjaEksR0FBZCxDQUFrQixLQUFLbUMsWUFBdkI7O0FBRUEsVUFBSStGLGVBQWUsSUFBSWhKLE1BQU02SSxhQUFWLENBQXdCLENBQXhCLEVBQTJCLENBQTNCLENBQW5COztBQUVBLFdBQUtJLGFBQUwsR0FBcUIsSUFBSWpKLE1BQU1XLElBQVYsQ0FBZXFJLFlBQWYsRUFBNkIsbUVBQUExRSxDQUFJNkIsUUFBakMsQ0FBckI7QUFDQSxXQUFLOEMsYUFBTCxDQUFtQmpJLFFBQW5CLENBQTRCb0YsR0FBNUIsQ0FBZ0MsQ0FBaEMsRUFBbUMsQ0FBbkMsRUFBc0MsR0FBdEM7QUFDQSxXQUFLNkMsYUFBTCxDQUFtQnJJLFVBQW5CLEdBQWdDLEtBQWhDO0FBQ0EsV0FBS3FJLGFBQUwsQ0FBbUJwSSxhQUFuQixHQUFtQyxLQUFuQzs7QUFFQSxXQUFLb0MsWUFBTCxDQUFrQm5DLEdBQWxCLENBQXNCLEtBQUttSSxhQUEzQjs7QUFFQSxVQUFJQyxlQUFlLElBQUlsSixNQUFNVyxJQUFWLENBQWVpSSxZQUFmLEVBQTZCLG1FQUFBdEUsQ0FBSUMsUUFBakMsQ0FBbkI7QUFDQTJFLG1CQUFhbEksUUFBYixDQUFzQm9GLEdBQXRCLENBQTBCLElBQTFCLEVBQWdDLENBQWhDLEVBQW1DLENBQW5DO0FBQ0E4QyxtQkFBYXRJLFVBQWIsR0FBMEIsS0FBMUI7QUFDQXNJLG1CQUFhckksYUFBYixHQUE2QixLQUE3Qjs7QUFFQSxXQUFLc0MsV0FBTCxHQUFtQixJQUFJbkQsTUFBTVcsSUFBVixDQUFlb0ksV0FBZixFQUE0QnZJLE1BQTVCLENBQW5CO0FBQ0EsV0FBSzJDLFdBQUwsQ0FBaUJuQyxRQUFqQixDQUEwQm9GLEdBQTFCLENBQThCLENBQTlCLEVBQWlDLENBQWpDLEVBQW9DLEdBQXBDO0FBQ0EsV0FBS2pELFdBQUwsQ0FBaUJ2QyxVQUFqQixHQUE4QixLQUE5QjtBQUNBLFdBQUt1QyxXQUFMLENBQWlCdEMsYUFBakIsR0FBaUMsS0FBakM7O0FBRUFxSSxtQkFBYXBJLEdBQWIsQ0FBaUIsS0FBS3FDLFdBQXRCOztBQUVBLFdBQUtnRyxZQUFMLEdBQW9CLElBQUluSixNQUFNVyxJQUFWLENBQWVxSSxZQUFmLEVBQTZCLG1FQUFBMUUsQ0FBSTZCLFFBQWpDLENBQXBCO0FBQ0EsV0FBS2dELFlBQUwsQ0FBa0JuSSxRQUFsQixDQUEyQm9GLEdBQTNCLENBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLEdBQXJDO0FBQ0EsV0FBSytDLFlBQUwsQ0FBa0J2SSxVQUFsQixHQUErQixLQUEvQjtBQUNBLFdBQUt1SSxZQUFMLENBQWtCdEksYUFBbEIsR0FBa0MsS0FBbEM7O0FBRUEsV0FBS3NDLFdBQUwsQ0FBaUJyQyxHQUFqQixDQUFxQixLQUFLcUksWUFBMUI7O0FBRUEsV0FBS1IsSUFBTCxDQUFVN0gsR0FBVixDQUFjZ0ksYUFBZCxFQUE2QkksWUFBN0I7QUFDRDs7OytCQUVVO0FBQ1QsV0FBS0UsUUFBTCxHQUFnQixJQUFJcEosTUFBTUMsUUFBVixFQUFoQjtBQUNBLFdBQUttSixRQUFMLENBQWNwSSxRQUFkLENBQXVCb0YsR0FBdkIsQ0FBMkIsQ0FBM0IsRUFBOEIsQ0FBOUIsRUFBaUMsQ0FBakM7QUFDQSxXQUFLMUYsSUFBTCxDQUFVSSxHQUFWLENBQWMsS0FBS3NJLFFBQW5COztBQUVBLFVBQUlDLGNBQWMsSUFBSXJKLE1BQU1vRSxXQUFWLENBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLENBQWxCOztBQUVBLFdBQUtoQixZQUFMLEdBQW9CLElBQUlwRCxNQUFNVyxJQUFWLENBQWUwSSxXQUFmLEVBQTRCLG1FQUFBL0UsQ0FBSUMsUUFBaEMsQ0FBcEI7QUFDQSxXQUFLbkIsWUFBTCxDQUFrQm9CLFdBQWxCLENBQThCLElBQUl4RSxNQUFNeUUsT0FBVixHQUFvQjZDLGFBQXBCLENBQWtDbkYsS0FBSzBCLEVBQUwsR0FBVSxFQUE1QyxDQUE5QjtBQUNBLFdBQUtULFlBQUwsQ0FBa0JwQyxRQUFsQixDQUEyQm9GLEdBQTNCLENBQStCLENBQUMsSUFBaEMsRUFBc0MsQ0FBdEMsRUFBeUMsQ0FBekM7QUFDQSxXQUFLaEQsWUFBTCxDQUFrQnhDLFVBQWxCLEdBQStCLEtBQS9CO0FBQ0EsV0FBS3dDLFlBQUwsQ0FBa0J2QyxhQUFsQixHQUFrQyxLQUFsQzs7QUFFQSxXQUFLd0MsV0FBTCxHQUFtQixJQUFJckQsTUFBTVcsSUFBVixDQUFlMEksV0FBZixFQUE0QixtRUFBQS9FLENBQUlDLFFBQWhDLENBQW5CO0FBQ0EsV0FBS2xCLFdBQUwsQ0FBaUJtQixXQUFqQixDQUE2QixJQUFJeEUsTUFBTXlFLE9BQVYsR0FBb0I2QyxhQUFwQixDQUFrQyxDQUFDbkYsS0FBSzBCLEVBQU4sR0FBVyxFQUE3QyxDQUE3QjtBQUNBLFdBQUtSLFdBQUwsQ0FBaUJyQyxRQUFqQixDQUEwQm9GLEdBQTFCLENBQThCLElBQTlCLEVBQW9DLENBQXBDLEVBQXVDLENBQXZDO0FBQ0EsV0FBSy9DLFdBQUwsQ0FBaUJ6QyxVQUFqQixHQUE4QixLQUE5QjtBQUNBLFdBQUt5QyxXQUFMLENBQWlCeEMsYUFBakIsR0FBaUMsS0FBakM7O0FBRUEsV0FBS3VJLFFBQUwsQ0FBY3RJLEdBQWQsQ0FBa0IsS0FBS3NDLFlBQXZCLEVBQXFDLEtBQUtDLFdBQTFDO0FBQ0Q7OzswQkFFSztBQUNKLFdBQUs3RSxHQUFMLEdBQVcsSUFBSXdCLE1BQU1DLFFBQVYsRUFBWDtBQUNBLFdBQUt6QixHQUFMLENBQVN3QyxRQUFULENBQWtCb0YsR0FBbEIsQ0FBc0IsQ0FBQyxHQUF2QixFQUE0QixFQUE1QixFQUFnQyxHQUFoQztBQUNBLFdBQUsxRixJQUFMLENBQVVJLEdBQVYsQ0FBYyxLQUFLdEMsR0FBbkI7O0FBRUEsVUFBSThLLFNBQVMsSUFBSXRKLE1BQU1TLGlCQUFWLENBQTRCLEVBQUNILE9BQU8sZ0VBQUF0QyxDQUFPUSxHQUFmLEVBQW9CK0IsYUFBYSxJQUFqQyxFQUE1QixDQUFiOztBQUVBLFVBQUlnSixXQUFXLElBQUl2SixNQUFNd0osYUFBVixDQUF3QixDQUF4QixFQUEyQixDQUEzQixFQUE4QixFQUE5QixFQUFrQyxHQUFsQyxDQUFmO0FBQ0EsVUFBSUMsY0FBYyxJQUFJekosTUFBTTJHLGdCQUFWLENBQTJCLENBQTNCLEVBQThCLEVBQTlCLEVBQWtDLEVBQWxDLEVBQXNDLEVBQXRDLENBQWxCO0FBQ0EsVUFBSStDLGdCQUFnQixJQUFJMUosTUFBTTJHLGdCQUFWLENBQTJCLEdBQTNCLEVBQWdDLENBQWhDLEVBQW1DLENBQW5DLEVBQXNDLEVBQXRDLENBQXBCO0FBQ0EsVUFBSWdELGdCQUFnQixJQUFJM0osTUFBTTRKLGNBQVYsQ0FBeUIsR0FBekIsRUFBOEIsQ0FBOUIsRUFBaUMsQ0FBakMsQ0FBcEI7O0FBRUEsV0FBS0MsSUFBTCxHQUFZLElBQUk3SixNQUFNVyxJQUFWLENBQWU0SSxRQUFmLEVBQXlCLG1FQUFBakYsQ0FBSWdDLFFBQTdCLENBQVo7QUFDQSxXQUFLdUQsSUFBTCxDQUFVckYsV0FBVixDQUFzQixJQUFJeEUsTUFBTXlFLE9BQVYsR0FBb0JvQyxhQUFwQixDQUFrQzFFLEtBQUswQixFQUFMLEdBQVUsQ0FBNUMsQ0FBdEI7QUFDQSxXQUFLZ0csSUFBTCxDQUFVN0ksUUFBVixDQUFtQm9GLEdBQW5CLENBQXVCLENBQXZCLEVBQTBCLENBQTFCLEVBQTZCLENBQTdCO0FBQ0EsV0FBS3lELElBQUwsQ0FBVWpKLFVBQVYsR0FBdUIsS0FBdkI7QUFDQSxXQUFLaUosSUFBTCxDQUFVaEosYUFBVixHQUEwQixLQUExQjs7QUFFQSxXQUFLaUosT0FBTCxHQUFlLElBQUk5SixNQUFNVyxJQUFWLENBQWU4SSxXQUFmLEVBQTRCSCxNQUE1QixDQUFmO0FBQ0EsV0FBS1EsT0FBTCxDQUFhOUksUUFBYixDQUFzQm9GLEdBQXRCLENBQTBCLENBQTFCLEVBQTZCLENBQTdCLEVBQWdDLENBQWhDO0FBQ0EsV0FBSzBELE9BQUwsQ0FBYWxKLFVBQWIsR0FBMEIsS0FBMUI7QUFDQSxXQUFLa0osT0FBTCxDQUFhakosYUFBYixHQUE2QixLQUE3Qjs7QUFFQSxXQUFLa0osU0FBTCxHQUFpQixJQUFJL0osTUFBTVcsSUFBVixDQUFlK0ksYUFBZixFQUE4QkosTUFBOUIsQ0FBakI7QUFDQSxXQUFLUyxTQUFMLENBQWV2RixXQUFmLENBQTJCLElBQUl4RSxNQUFNeUUsT0FBVixHQUFvQm9DLGFBQXBCLENBQWtDMUUsS0FBSzBCLEVBQUwsR0FBVSxDQUE1QyxDQUEzQjtBQUNBLFdBQUtrRyxTQUFMLENBQWV2RixXQUFmLENBQTJCLElBQUl4RSxNQUFNeUUsT0FBVixHQUFvQnVGLGFBQXBCLENBQWtDN0gsS0FBSzBCLEVBQUwsR0FBVSxDQUE1QyxDQUEzQjtBQUNBLFdBQUtrRyxTQUFMLENBQWV2RixXQUFmLENBQTJCLElBQUl4RSxNQUFNeUUsT0FBVixHQUFvQjZDLGFBQXBCLENBQWtDbkYsS0FBSzBCLEVBQUwsR0FBVSxDQUFDLENBQTdDLENBQTNCO0FBQ0EsV0FBS2tHLFNBQUwsQ0FBZS9JLFFBQWYsQ0FBd0JvRixHQUF4QixDQUE0QixDQUE1QixFQUErQixHQUEvQixFQUFvQyxDQUFDLENBQXJDO0FBQ0EsV0FBSzJELFNBQUwsQ0FBZW5KLFVBQWYsR0FBNEIsS0FBNUI7QUFDQSxXQUFLbUosU0FBTCxDQUFlbEosYUFBZixHQUErQixLQUEvQjs7QUFFQSxXQUFLb0osU0FBTCxHQUFpQixJQUFJakssTUFBTVcsSUFBVixDQUFlZ0osYUFBZixFQUE4QixtRUFBQXJGLENBQUlDLFFBQWxDLENBQWpCO0FBQ0EsV0FBSzBGLFNBQUwsQ0FBZWpKLFFBQWYsQ0FBd0JvRixHQUF4QixDQUE0QixDQUE1QixFQUErQixHQUEvQixFQUFvQyxDQUFDLENBQXJDO0FBQ0EsV0FBSzZELFNBQUwsQ0FBZXJKLFVBQWYsR0FBNEIsS0FBNUI7QUFDQSxXQUFLcUosU0FBTCxDQUFlcEosYUFBZixHQUErQixLQUEvQjs7QUFFQSxXQUFLckMsR0FBTCxDQUFTc0MsR0FBVCxDQUFhLEtBQUsrSSxJQUFsQixFQUF3QixLQUFLQyxPQUE3QixFQUFzQyxLQUFLQyxTQUEzQyxFQUFzRCxLQUFLRSxTQUEzRDtBQUNEOzs7K0JBRVU7QUFDVCxXQUFLL0wsUUFBTCxHQUFnQixJQUFJOEIsTUFBTUMsUUFBVixFQUFoQjtBQUNBLFdBQUsvQixRQUFMLENBQWM4QyxRQUFkLENBQXVCb0YsR0FBdkIsQ0FBMkIsQ0FBM0IsRUFBOEIsQ0FBOUIsRUFBaUMsQ0FBakM7QUFDQSxXQUFLMUYsSUFBTCxDQUFVSSxHQUFWLENBQWMsS0FBSzVDLFFBQW5COztBQUVBLFVBQUlnTSxjQUFjLElBQUlsSyxNQUFNSyxtQkFBVixDQUE4QixFQUFDQyxPQUFPLGdFQUFBdEMsQ0FBT0UsUUFBZixFQUF5QnFDLGFBQWEsSUFBdEMsRUFBOUIsQ0FBbEI7QUFDQSxVQUFJNEoscUJBQXFCLElBQUluSyxNQUFNa0UsUUFBVixFQUF6Qjs7QUFFQSxVQUFJa0csZUFBZSxJQUFJcEssTUFBTTZJLGFBQVYsQ0FBd0IsR0FBeEIsRUFBNkIsR0FBN0IsQ0FBbkI7O0FBRUEsVUFBSXdCLFdBQVcsSUFBSXJLLE1BQU1XLElBQVYsQ0FBZXlKLFlBQWYsRUFBNkJGLFdBQTdCLENBQWY7QUFDQUcsZUFBUzdGLFdBQVQsQ0FBcUIsSUFBSXhFLE1BQU15RSxPQUFWLEdBQW9CQyxlQUFwQixDQUFvQyxDQUFDLENBQXJDLEVBQXdDLENBQXhDLEVBQTJDLElBQTNDLENBQXJCO0FBQ0EyRixlQUFTMUYsWUFBVDtBQUNBd0YseUJBQW1CdkYsS0FBbkIsQ0FBeUJ5RixTQUFTeEYsUUFBbEMsRUFBNEN3RixTQUFTdkYsTUFBckQ7O0FBRUEsVUFBSXdGLFdBQVdELFNBQVNuRixLQUFULEVBQWY7QUFDQW9GLGVBQVM5RixXQUFULENBQXFCLElBQUl4RSxNQUFNeUUsT0FBVixHQUFvQkMsZUFBcEIsQ0FBb0MsQ0FBQyxHQUFyQyxFQUEwQyxDQUFDLENBQTNDLEVBQThDLENBQTlDLENBQXJCO0FBQ0E0RixlQUFTM0YsWUFBVDtBQUNBd0YseUJBQW1CdkYsS0FBbkIsQ0FBeUIwRixTQUFTekYsUUFBbEMsRUFBNEN5RixTQUFTeEYsTUFBckQ7O0FBRUEsVUFBSXlGLFdBQVdGLFNBQVNuRixLQUFULEVBQWY7QUFDQXFGLGVBQVMvRixXQUFULENBQXFCLElBQUl4RSxNQUFNeUUsT0FBVixHQUFvQkMsZUFBcEIsQ0FBb0MsQ0FBcEMsRUFBdUMsQ0FBQyxHQUF4QyxFQUE2QyxDQUE3QyxDQUFyQjtBQUNBNkYsZUFBUzVGLFlBQVQ7QUFDQXdGLHlCQUFtQnZGLEtBQW5CLENBQXlCMkYsU0FBUzFGLFFBQWxDLEVBQTRDMEYsU0FBU3pGLE1BQXJEOztBQUVBLFVBQUkwRixXQUFXSCxTQUFTbkYsS0FBVCxFQUFmO0FBQ0FzRixlQUFTeEosUUFBVCxDQUFrQmtDLENBQWxCLEdBQXNCLENBQUNtSCxTQUFTckosUUFBVCxDQUFrQmtDLENBQXpDO0FBQ0FzSCxlQUFTN0YsWUFBVDtBQUNBd0YseUJBQW1CdkYsS0FBbkIsQ0FBeUI0RixTQUFTM0YsUUFBbEMsRUFBNEMyRixTQUFTMUYsTUFBckQ7QUFDQSxVQUFJMkYsV0FBV0gsU0FBU3BGLEtBQVQsRUFBZjtBQUNBdUYsZUFBU3pKLFFBQVQsQ0FBa0JrQyxDQUFsQixHQUFzQixDQUFDb0gsU0FBU3RKLFFBQVQsQ0FBa0JrQyxDQUF6QztBQUNBdUgsZUFBUzlGLFlBQVQ7QUFDQXdGLHlCQUFtQnZGLEtBQW5CLENBQXlCNkYsU0FBUzVGLFFBQWxDLEVBQTRDNEYsU0FBUzNGLE1BQXJEO0FBQ0EsVUFBSTRGLFdBQVdILFNBQVNyRixLQUFULEVBQWY7QUFDQXdGLGVBQVMxSixRQUFULENBQWtCa0MsQ0FBbEIsR0FBc0IsQ0FBQ3FILFNBQVN2SixRQUFULENBQWtCa0MsQ0FBekM7QUFDQXdILGVBQVMvRixZQUFUO0FBQ0F3Rix5QkFBbUJ2RixLQUFuQixDQUF5QjhGLFNBQVM3RixRQUFsQyxFQUE0QzZGLFNBQVM1RixNQUFyRDs7QUFFQSxVQUFJNkYsaUJBQWlCLElBQUkzSyxNQUFNVyxJQUFWLENBQWV3SixrQkFBZixFQUFtQ0QsV0FBbkMsQ0FBckI7QUFDQVMscUJBQWUvSixVQUFmLEdBQTRCLEtBQTVCO0FBQ0ErSixxQkFBZTlKLGFBQWYsR0FBK0IsS0FBL0I7O0FBRUEsV0FBSzNDLFFBQUwsQ0FBYzRDLEdBQWQsQ0FBa0I2SixjQUFsQjtBQUNEOzs7K0JBRVU7QUFDVCxVQUFJQyxVQUFVLElBQUk1SyxNQUFNRyxpQkFBVixDQUE0QixHQUE1QixFQUFpQyxDQUFqQyxFQUFvQyxHQUFwQyxDQUFkO0FBQ0EsVUFBSUMsVUFBVSxJQUFJSixNQUFNSyxtQkFBVixDQUE4QixFQUFDQyxPQUFPLGdFQUFBdEMsQ0FBT0MsSUFBZixFQUFxQnNDLGFBQWEsSUFBbEMsRUFBOUIsQ0FBZDtBQUNBLFVBQUlzSyxXQUFXLElBQUk3SyxNQUFNVyxJQUFWLENBQWVpSyxPQUFmLEVBQXdCeEssT0FBeEIsQ0FBZjtBQUNBeUssZUFBUzdKLFFBQVQsQ0FBa0JvRixHQUFsQixDQUFzQixDQUFDLEdBQXZCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CO0FBQ0F5RSxlQUFTakssVUFBVCxHQUFzQixLQUF0QjtBQUNBaUssZUFBU2hLLGFBQVQsR0FBeUIsS0FBekI7O0FBRUEsVUFBSWlLLFVBQVUsSUFBSTlLLE1BQU1XLElBQVYsQ0FBZWlLLE9BQWYsRUFBd0J4SyxPQUF4QixDQUFkO0FBQ0EwSyxjQUFROUosUUFBUixDQUFpQm9GLEdBQWpCLENBQXFCLEdBQXJCLEVBQTBCLENBQTFCLEVBQTZCLENBQTdCO0FBQ0EwRSxjQUFRbEssVUFBUixHQUFxQixLQUFyQjtBQUNBa0ssY0FBUWpLLGFBQVIsR0FBd0IsS0FBeEI7O0FBRUEsVUFBSWtLLFdBQVcsSUFBSS9LLE1BQU0yRyxnQkFBVixDQUEyQixDQUEzQixFQUE4QixDQUE5QixFQUFpQyxDQUFqQyxFQUFvQyxDQUFwQyxDQUFmO0FBQ0EsVUFBSXFFLE9BQU8sSUFBSWhMLE1BQU1XLElBQVYsQ0FBZW9LLFFBQWYsRUFBeUIzSyxPQUF6QixDQUFYO0FBQ0E0SyxXQUFLaEcsS0FBTCxDQUFXb0IsR0FBWCxDQUFlLEdBQWYsRUFBb0IsQ0FBcEIsRUFBdUIsR0FBdkI7QUFDQTRFLFdBQUtoSyxRQUFMLENBQWNvRixHQUFkLENBQWtCLENBQWxCLEVBQXFCLENBQXJCLEVBQXdCLENBQXhCO0FBQ0E0RSxXQUFLcEssVUFBTCxHQUFrQixLQUFsQjtBQUNBb0ssV0FBS25LLGFBQUwsR0FBcUIsS0FBckI7O0FBRUEsV0FBS0gsSUFBTCxDQUFVSSxHQUFWLENBQWMrSixRQUFkLEVBQXdCQyxPQUF4QixFQUFpQ0UsSUFBakM7QUFDRDs7Ozs7O3lEQTlla0JsTCxJOzs7Ozs7O0FDTHJCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNqR0E7QUFDQSxJQUFNbUwsWUFBWTtBQUNoQixjQUFZLElBQUlqTCxNQUFNSyxtQkFBVixDQUE4QixFQUFDQyxPQUFPLHdEQUFBdEMsQ0FBT0csS0FBZixFQUFzQm9DLGFBQWEsSUFBbkMsRUFBOUIsQ0FESTtBQUVoQixjQUFZLElBQUlQLE1BQU1TLGlCQUFWLENBQTRCLEVBQUNILE9BQU8sd0RBQUF0QyxDQUFPSyxLQUFmLEVBQXNCa0MsYUFBYSxJQUFuQyxFQUE1QixDQUZJO0FBR2hCLGNBQVksSUFBSVAsTUFBTUssbUJBQVYsQ0FBOEIsRUFBQ0MsT0FBTyx3REFBQXRDLENBQU9NLEtBQWYsRUFBc0JpQyxhQUFhLElBQW5DLEVBQTlCLENBSEk7QUFJaEIsZUFBYSxJQUFJUCxNQUFNa0wsa0JBQVYsQ0FBNkIsRUFBN0I7QUFKRyxDQUFsQjs7QUFPQSx5REFBZUQsU0FBZixFOzs7Ozs7QUNSQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLG1CQUFtQjtBQUMzRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0Msb0JBQW9CO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdDQUF3Qyw0QkFBNEI7QUFDcEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNULDhFQUE4RTtBQUM5RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4Qix1QkFBdUI7QUFDckQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSx1Q0FBdUMsMEJBQTBCO0FBQ2pFO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQkFBK0IsMEJBQTBCLGVBQWU7QUFDeEU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7QUM1Y0Q7QUFDQTs7Ozs7Ozs7QUNEQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNFLE1BQUlFLGNBQUo7QUFBQSxNQUFXQyxlQUFYO0FBQUEsTUFBbUJDLG9CQUFuQjtBQUFBLE1BQWdDQyxvQkFBaEM7QUFBQSxNQUE2Q0Msa0JBQTdDO0FBQUEsTUFBd0RDLGlCQUF4RDtBQUFBLE1BQWtFQyxlQUFsRTtBQUFBLE1BQTBFQyxjQUExRTtBQUNBLE1BQUlDLG9CQUFKO0FBQUEsTUFBaUJDLG9CQUFqQjtBQUFBLE1BQThCQyxrQkFBOUI7QUFBQSxNQUF5Q0MsY0FBekM7QUFBQSxNQUFnREMsaUJBQWhEO0FBQUEsTUFBMERDLGtCQUExRDtBQUFBLE1BQXFFQyxlQUFyRTtBQUNBLE1BQUl2TCxhQUFKO0FBQUEsTUFBVXdMLGNBQVY7QUFBQSxNQUFpQkMsb0JBQWpCO0FBQUEsTUFBOEJDLG9CQUE5QjtBQUFBLE1BQTJDOUwsY0FBM0M7QUFBQSxNQUFrRCtMLGNBQWxEO0FBQUEsTUFBeURDLG1CQUF6RDs7QUFFQTtBQUNBLE1BQUlDLG1CQUFKO0FBQUEsTUFBZ0JDLFlBQWhCO0FBQ0EsTUFBTUMsVUFBVUMsU0FBU0MsY0FBVCxRQUFoQjs7QUFFQSxNQUFJQyxXQUFXLEVBQUUxSixHQUFHLENBQUwsRUFBUWpDLEdBQUcsQ0FBWCxFQUFmOztBQUVBLE1BQUk0TCxZQUFZLEVBQWhCO0FBQ0EsTUFBSUMsV0FBVyxrQkFBa0JDLElBQWxCLENBQXVCQyxVQUFVQyxTQUFqQyxDQUFmO0FBQ0EsTUFBSUMsZ0JBQWdCLElBQUlsTixNQUFNbU4sY0FBVixFQUFwQjtBQUNBLE1BQUlDLFFBQVEsS0FBWjs7QUFFQSxNQUFNQyxPQUFPLFNBQVBBLElBQU8sR0FBTTtBQUNqQjtBQUNBQyxnQkFBWUMsSUFBWixDQUFpQixjQUFqQixFQUFpQywwQkFBakMsRUFBNkQsWUFBTTtBQUNqRUMsY0FBUUMsR0FBUixDQUFZLHVDQUFaO0FBQ0QsS0FGRDs7QUFJQUM7QUFDQUM7O0FBRUF0QixZQUFRLElBQUksa0VBQUosRUFBUixDQVRpQixDQVNJO0FBQ3JCM0wsV0FBTyxJQUFJLDhEQUFKLEVBQVAsQ0FWaUIsQ0FVRTtBQUNuQnlLLFVBQU1ySyxHQUFOLENBQVVKLEtBQUtYLElBQWY7O0FBRUE7QUFDQTBNLFlBQVFtQixnQkFBUixVQUFrQyxZQUFNO0FBQ3RDLFVBQU0vTyxPQUFPNk4sU0FBU0MsY0FBVCxjQUFiO0FBQ0EsVUFBTTVOLEtBQUsyTixTQUFTQyxjQUFULG1CQUFYO0FBQ0EsVUFBTWtCLE9BQU9uQixTQUFTb0IsYUFBVCxnQkFBYjs7QUFFQSxVQUFNOU8sZ0JBQWdCO0FBQ3BCK08sZUFBTzFCLE1BQU0yQixVQURPO0FBRXBCQyxpQkFBUzVCLE1BQU00QjtBQUZLLE9BQXRCOztBQUtBLFVBQU1oUCxhQUFhO0FBQ2pCaEIsY0FBTSxnRUFBQUQsQ0FBT0MsSUFESTtBQUVqQkMsa0JBQVUsZ0VBQUFGLENBQU9FLFFBRkE7QUFHakJLLGFBQUssZ0VBQUFQLENBQU9PLEdBSEs7QUFJakJILGlCQUFTLGdFQUFBSixDQUFPSSxPQUpDO0FBS2pCSSxhQUFLLGdFQUFBUixDQUFPUTtBQUxLLE9BQW5COztBQVFBLFVBQUksQ0FBQzRPLEtBQUwsRUFBWTtBQUNWQSxnQkFBUSxJQUFSO0FBQ0FjLFFBQUEsNkRBQUFBLENBQVF4UCxNQUFSLENBQWU7QUFDYkMsZ0JBQU0wTixNQUFNMU4sSUFEQztBQUViQyxjQUFJeU4sTUFBTXpOLEVBRkc7QUFHYkMsZ0JBQU1BLEtBQUtzUCxLQUFMLElBQWMsT0FIUDtBQUlicFAsY0FBSUEsR0FBR29QLEtBQUgsSUFBWSxjQUpIO0FBS2JuUCx5QkFBZW9QLEtBQUtDLFNBQUwsQ0FBZXJQLGFBQWYsQ0FMRjtBQU1iQyxzQkFBWW1QLEtBQUtDLFNBQUwsQ0FBZXBQLFVBQWY7QUFOQyxTQUFmO0FBVUQsT0FaRCxNQVlPO0FBQ0xpUCxRQUFBLDZEQUFBQSxDQUFRdE8sTUFBUixDQUFlO0FBQ2JqQixnQkFBTTBOLE1BQU0xTixJQURDO0FBRWJDLGNBQUl5TixNQUFNek4sRUFGRztBQUdiQyxnQkFBTUEsS0FBS3NQLEtBQUwsSUFBYyxPQUhQO0FBSWJwUCxjQUFJQSxHQUFHb1AsS0FBSCxJQUFZLGNBSkg7QUFLYm5QLHlCQUFlb1AsS0FBS0MsU0FBTCxDQUFlclAsYUFBZixDQUxGO0FBTWJDLHNCQUFZbVAsS0FBS0MsU0FBTCxDQUFlcFAsVUFBZjtBQU5DLFNBQWY7QUFRRDs7QUFFRDRPLFdBQUtTLFNBQUwsNkNBQXlEakMsTUFBTXpOLEVBQS9EO0FBQ0FpUCxXQUFLVSxZQUFMLENBQWtCLE1BQWxCLDRDQUFrRWxDLE1BQU16TixFQUF4RTtBQUNBaVAsV0FBS1UsWUFBTCxDQUFrQixRQUFsQjtBQUNELEtBNUNEOztBQThDQS9CLFVBQU0sSUFBSWdDLElBQUlDLEdBQVIsRUFBTjtBQUNBakMsUUFBSWtDLFVBQUosQ0FBZTlQLEVBQWYsR0FBb0IsS0FBcEI7QUFDQTROLFFBQUltQyxNQUFKLEdBQWEsSUFBYjtBQUNBcEMsaUJBQWEsSUFBSXFDLGNBQUosRUFBYjtBQUNBQyxrQkFBYyxDQUFDLE1BQUQsRUFBUyxVQUFULEVBQXFCLEtBQXJCLEVBQTRCLFNBQTVCLEVBQXVDLEtBQXZDLENBQWQsRUFoRWlCLENBZ0U2Qzs7QUFFOURDLFdBQU8zRCxLQUFQLEdBQWVBLEtBQWYsQ0FsRWlCLENBa0VLOztBQUV0QjREO0FBQ0QsR0FyRUQ7O0FBdUVBLE1BQU1GLGdCQUFnQixTQUFoQkEsYUFBZ0IsT0FBUTtBQUM1QkcsU0FBS0MsT0FBTCxDQUFhLGVBQU87QUFDbEJ6QyxVQUFJMEMsUUFBSixDQUFhM0MsVUFBYixFQUF5QjRDLEdBQXpCLEVBQThCQyxRQUE5QixDQUF1QyxZQUFNOztBQUUzQztBQUNBLGdCQUFRRCxHQUFSO0FBQ0UsZUFBSyxNQUFMO0FBQWFuUixZQUFBLGdFQUFBQSxDQUFPQyxJQUFQLEdBQWNzTyxXQUFXdE8sSUFBekI7QUFDYixlQUFLLFVBQUw7QUFBaUJELFlBQUEsZ0VBQUFBLENBQU9FLFFBQVAsR0FBa0JxTyxXQUFXck8sUUFBN0I7QUFDakIsZUFBSyxLQUFMO0FBQVlGLFlBQUEsZ0VBQUFBLENBQU9PLEdBQVAsR0FBYWdPLFdBQVdoTyxHQUF4QjtBQUNaLGVBQUssU0FBTDtBQUFnQlAsWUFBQSxnRUFBQUEsQ0FBT0ksT0FBUCxHQUFpQm1PLFdBQVduTyxPQUE1QjtBQUNoQixlQUFLLEtBQUw7QUFBWUosWUFBQSxnRUFBQUEsQ0FBT1EsR0FBUCxHQUFhK04sV0FBVy9OLEdBQXhCO0FBTGQ7O0FBUUE7QUFDQTJNLGNBQU1rRSxNQUFOLENBQWEzTyxLQUFLWCxJQUFsQjtBQUNBdVA7QUFDRCxPQWREO0FBZUQsS0FoQkQ7QUFpQkQsR0FsQkQ7O0FBb0JBLE1BQU1DLFVBQVUsU0FBVkEsT0FBVSxDQUFDQyxDQUFELEVBQU87QUFDckIsUUFBSUMsU0FBUyxVQUFiO0FBQ0EsUUFBSUQsS0FBSyxDQUFMLElBQVVBLEtBQUssRUFBbkIsRUFBdUI7QUFDckJDLGVBQVMsWUFBWUQsRUFBRUUsUUFBRixDQUFXLEVBQVgsQ0FBckI7QUFDRCxLQUZELE1BRU8sSUFBSUYsS0FBSyxFQUFMLElBQVdBLEtBQUssR0FBcEIsRUFBeUI7QUFDOUJDLGVBQVMsV0FBV0QsRUFBRUUsUUFBRixDQUFXLEVBQVgsQ0FBcEI7QUFDRCxLQUZNLE1BRUEsSUFBSUYsS0FBSyxHQUFMLElBQVlBLEtBQUssSUFBckIsRUFBMkI7QUFDaENDLGVBQVMsVUFBVUQsRUFBRUUsUUFBRixDQUFXLEVBQVgsQ0FBbkI7QUFDRCxLQUZNLE1BRUEsSUFBSUYsS0FBSyxJQUFMLElBQWFBLEtBQUssS0FBdEIsRUFBNkI7QUFDbENDLGVBQVMsU0FBU0QsRUFBRUUsUUFBRixDQUFXLEVBQVgsQ0FBbEI7QUFDRCxLQUZNLE1BRUEsSUFBSUYsS0FBSyxLQUFMLElBQWNBLEtBQUssT0FBdkIsRUFBZ0M7QUFDckNDLGVBQVMsUUFBUUQsRUFBRUUsUUFBRixDQUFXLEVBQVgsQ0FBakI7QUFDRCxLQUZNLE1BRUEsSUFBSUYsS0FBSyxPQUFULEVBQWtCO0FBQ3ZCQyxlQUFTLE9BQU9ELEVBQUVFLFFBQUYsQ0FBVyxFQUFYLENBQWhCO0FBQ0Q7QUFDRCxRQUFJRCxPQUFPRSxNQUFQLElBQWlCLENBQXJCLEVBQXdCO0FBQ3RCLGFBQU9GLE1BQVA7QUFDRDtBQUNGLEdBbEJEOztBQW9CQSxNQUFNL0IsY0FBYyxTQUFkQSxXQUFjLEdBQU07QUFBQztBQUN6QmpDLGFBQVNxRCxPQUFPYyxXQUFoQjtBQUNBbEUsWUFBUW9ELE9BQU9lLFVBQVAsR0FBbUIsSUFBM0I7QUFDQTFELGtCQUFjVCxRQUFRLENBQXRCO0FBQ0FVLGtCQUFjWCxTQUFTLENBQXZCOztBQUVBTixZQUFRLElBQUluTCxNQUFNOFAsS0FBVixFQUFSO0FBQ0F4RSxrQkFBY0ksUUFBUUQsTUFBdEI7QUFDQUosa0JBQWMsRUFBZDtBQUNBRSxnQkFBWSxDQUFaO0FBQ0FDLGVBQVcsSUFBWDs7QUFFQUosYUFBUyxJQUFJcEwsTUFBTStQLGlCQUFWLENBQTRCMUUsV0FBNUIsRUFBeUNDLFdBQXpDLEVBQXNEQyxTQUF0RCxFQUFpRUMsUUFBakUsQ0FBVDtBQUNBSixXQUFPcEssUUFBUCxDQUFnQmtDLENBQWhCLEdBQW9CLENBQXBCO0FBQ0FrSSxXQUFPcEssUUFBUCxDQUFnQkUsQ0FBaEIsR0FBb0IsRUFBcEI7QUFDQWtLLFdBQU9wSyxRQUFQLENBQWdCQyxDQUFoQixHQUFvQixDQUFDLENBQXJCOztBQUVBOEssZUFBVyxJQUFJL0wsTUFBTWdRLGFBQVYsQ0FBd0IsRUFBQ0MsT0FBTyxJQUFSLEVBQWNDLFdBQVcsSUFBekIsRUFBeEIsQ0FBWDtBQUNBbkUsYUFBU29FLGFBQVQsQ0FBdUJyQixPQUFPc0IsZ0JBQVAsR0FBeUJ0QixPQUFPc0IsZ0JBQWhDLEdBQWtELENBQXpFO0FBQ0FyRSxhQUFTc0UsT0FBVCxDQUFpQjNFLEtBQWpCLEVBQXdCRCxNQUF4QjtBQUNBTSxhQUFTdUUsU0FBVCxDQUFtQkMsT0FBbkIsR0FBNkIsSUFBN0I7QUFDQXhFLGFBQVN1RSxTQUFULENBQW1CRSxJQUFuQixHQUEwQnhRLE1BQU15USxnQkFBaEM7O0FBRUF6RSxnQkFBWVUsU0FBU0MsY0FBVCxDQUF3QixXQUF4QixDQUFaO0FBQ0FYLGNBQVUwRSxXQUFWLENBQXNCM0UsU0FBUzJDLFVBQS9CO0FBQ0FJLFdBQU9sQixnQkFBUCxDQUF3QixRQUF4QixFQUFrQytDLGNBQWxDLEVBQWtELEtBQWxEO0FBQ0FqRSxhQUFTa0IsZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUNnRCxlQUF2QyxFQUF3RCxLQUF4RDtBQUNELEdBM0JEOztBQTZCQSxNQUFNRCxpQkFBaUIsU0FBakJBLGNBQWlCLEdBQU07QUFDM0JsRixhQUFTcUQsT0FBT2MsV0FBaEI7QUFDQWxFLFlBQVFvRCxPQUFPZSxVQUFQLEdBQXFCLElBQTdCO0FBQ0ExRCxrQkFBY1QsUUFBUSxDQUF0QjtBQUNBVSxrQkFBY1gsU0FBUyxDQUF2QjtBQUNBTSxhQUFTc0UsT0FBVCxDQUFpQjNFLEtBQWpCLEVBQXdCRCxNQUF4QjtBQUNBTCxXQUFPeUYsTUFBUCxHQUFnQm5GLFFBQVFELE1BQXhCO0FBQ0FMLFdBQU8wRixzQkFBUDtBQUNELEdBUkQ7O0FBVUEsTUFBTUYsa0JBQWtCLFNBQWxCQSxlQUFrQixJQUFLO0FBQzNCaEUsZUFBVztBQUNUMUosU0FBRzZOLE1BQU1DLE9BREE7QUFFVC9QLFNBQUc4UCxNQUFNRTtBQUZBLEtBQVg7QUFJRCxHQUxEOztBQU9BLE1BQU1DLHFCQUFxQixTQUFyQkEsa0JBQXFCLElBQUs7QUFDOUJ6RixhQUFTcUQsT0FBT2MsV0FBaEI7QUFDQWxFLFlBQVFvRCxPQUFPZSxVQUFmO0FBQ0E5RCxhQUFTc0UsT0FBVCxDQUFpQjNFLEtBQWpCLEVBQXdCRCxNQUF4QjtBQUNBTCxXQUFPeUYsTUFBUCxHQUFnQm5GLFFBQVFELE1BQXhCO0FBQ0FMLFdBQU8wRixzQkFBUDtBQUNELEdBTkQ7O0FBU0EsTUFBTW5ELGVBQWUsU0FBZkEsWUFBZSxHQUFNOztBQUV6QmhDLGtCQUFjLElBQUkzTCxNQUFNbVIsZUFBVixDQUEwQixRQUExQixFQUFvQyxRQUFwQyxFQUE4QyxFQUE5QyxDQUFkOztBQUVBdkYsa0JBQWMsSUFBSTVMLE1BQU1vUixnQkFBVixDQUEyQixRQUEzQixFQUFxQyxFQUFyQyxDQUFkO0FBQ0F4RixnQkFBWTVLLFFBQVosQ0FBcUJvRixHQUFyQixDQUF5QixHQUF6QixFQUE4QixHQUE5QixFQUFtQyxHQUFuQztBQUNBd0YsZ0JBQVloTCxVQUFaLEdBQXlCLElBQXpCOztBQUVBaUwsZ0JBQVksSUFBSTdMLE1BQU1vUixnQkFBVixDQUEyQixRQUEzQixFQUFxQyxFQUFyQyxDQUFaO0FBQ0F2RixjQUFVN0ssUUFBVixDQUFtQm9GLEdBQW5CLENBQXVCLENBQUMsR0FBeEIsRUFBNkIsR0FBN0IsRUFBa0MsR0FBbEM7QUFDQXlGLGNBQVVqTCxVQUFWLEdBQXVCLElBQXZCOztBQUVBLFFBQUlrTSxRQUFKLEVBQWNsQixZQUFZeUYsTUFBWixDQUFtQkMsT0FBbkIsQ0FBMkJDLEtBQTNCLEdBQW1DM0YsWUFBWXlGLE1BQVosQ0FBbUJDLE9BQW5CLENBQTJCRSxNQUEzQixHQUFvQyxJQUF2RTtBQUNkLFFBQUksQ0FBQzFFLFFBQUwsRUFBZWxCLFlBQVl5RixNQUFaLENBQW1CQyxPQUFuQixDQUEyQkMsS0FBM0IsR0FBbUMzRixZQUFZeUYsTUFBWixDQUFtQkMsT0FBbkIsQ0FBMkJFLE1BQTNCLEdBQW9DLElBQXZFOztBQUVmckcsVUFBTXJLLEdBQU4sQ0FBVTZLLFdBQVY7QUFDQVIsVUFBTXJLLEdBQU4sQ0FBVThLLFdBQVY7QUFDQVQsVUFBTXJLLEdBQU4sQ0FBVStLLFNBQVY7QUFDQVYsVUFBTXJLLEdBQU4sQ0FBVyxJQUFJZCxNQUFNeVIsWUFBVixDQUF3QixRQUF4QixFQUFrQyxHQUFsQyxDQUFYO0FBQ0QsR0FuQkQ7O0FBcUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1uQyxhQUFhLFNBQWJBLFVBQWEsR0FBTTtBQUN2QjVPLFNBQUtnUixJQUFMLEdBQVksTUFBWjtBQUNBaFIsV0FBTyxJQUFJLDhEQUFKLEVBQVA7QUFDQUEsU0FBS2lCLElBQUw7QUFDQXdKLFVBQU1ySyxHQUFOLENBQVVKLEtBQUtYLElBQWY7QUFDQTtBQUNBO0FBQ0QsR0FQRDs7QUFTQSxNQUFNNFIsa0JBQWtCLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCckM7QUFDQTVPLFNBQUtYLElBQUwsQ0FBVWlCLFFBQVYsQ0FBbUJvRixHQUFuQixDQUF1QixDQUF2QixFQUEwQixDQUExQixFQUE2QixDQUE3QjtBQUNBO0FBQ0QsR0FKRDs7QUFPQSxNQUFJdkcsYUFBYSxLQUFqQjtBQUNBLE1BQU0rUixZQUFZLFNBQVpBLFNBQVksR0FBTTtBQUN0Qi9SLGlCQUFhLEtBQWI7O0FBRUEsUUFBSyxDQUFDQSxVQUFGLElBQWtCc0MsS0FBSzBQLE1BQUwsS0FBZ0IsSUFBdEMsRUFBNkM7QUFDM0NoUyxtQkFBYSxJQUFiO0FBQ0FpUztBQUNEO0FBQ0YsR0FQRDs7QUFTQSxNQUFNQSxRQUFRLFNBQVJBLEtBQVEsR0FBTTtBQUNsQnBSLFNBQUtpSSxJQUFMLENBQVUzRCxLQUFWLENBQWdCL0QsQ0FBaEIsR0FBb0IsQ0FBcEI7QUFDQThRLGFBQVNoVCxFQUFULENBQVkyQixLQUFLaUksSUFBTCxDQUFVM0QsS0FBdEIsRUFBNkIsR0FBN0IsRUFBa0M7QUFDaEMvRCxTQUFHLENBRDZCO0FBRWhDK1EsWUFBTSxJQUYwQjtBQUdoQ0MsY0FBUSxDQUh3QjtBQUloQ0Msa0JBQVksc0JBQVc7QUFDckJyUyxxQkFBYSxLQUFiO0FBQ0Q7QUFOK0IsS0FBbEM7QUFRRCxHQVZEOztBQVlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFuVkYsTUFxVlErTyxjQXJWUixHQXNWSSwwQkFBYztBQUFBOztBQUNaLFNBQUszUSxJQUFMLEdBQVksZ0VBQUFELENBQU9DLElBQW5CO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixnRUFBQUYsQ0FBT0UsUUFBdkI7QUFDQSxTQUFLSyxHQUFMLEdBQVcsZ0VBQUFQLENBQU9PLEdBQWxCO0FBQ0EsU0FBS0gsT0FBTCxHQUFlLGdFQUFBSixDQUFPSSxPQUF0QjtBQUNBLFNBQUtJLEdBQUwsR0FBVyxnRUFBQVIsQ0FBT1EsR0FBbEI7QUFDRCxHQTVWTDs7QUErVkUsTUFBTXVRLE9BQU8sU0FBUEEsSUFBTyxHQUFNO0FBQ2pCNkM7QUFDQTtBQUNBLFFBQUl0TyxVQUFXc0osU0FBUzFKLENBQVQsR0FBYWlKLFdBQTVCO0FBQ0EsUUFBSTVJLFVBQVdxSixTQUFTM0wsQ0FBVCxHQUFhbUwsV0FBNUI7O0FBRUExTCxTQUFLaUIsSUFBTCxDQUFVMkIsT0FBVixFQUFtQkMsT0FBbkI7QUFDQXdJLGFBQVNvRyxNQUFULENBQWdCaEgsS0FBaEIsRUFBdUJDLE1BQXZCO0FBQ0FnSCwwQkFBc0JyRCxJQUF0QjtBQUNELEdBVEQ7O0FBV0E7O0FBRUExQjtBQUVELEM7Ozs7Ozs7Ozs7Ozs7O0FDblhEO0FBQ0E7O0FBRUEsSUFBSWdGLG9CQUFvQkEscUJBQXFCQyx1QkFBN0M7QUFDQSxJQUFJQyxvQkFBb0JBLHFCQUFxQkMsdUJBQTdDO0FBQ0EsSUFBSUMseUJBQXlCQSwwQkFBMEJDLDRCQUF2RDtBQUNBLElBQU1DLGVBQWU3RCxPQUFPNkQsWUFBUCxJQUF1QjdELE9BQU84RCxrQkFBbkQ7O0FBRUEsSUFBSUMsaUJBQUo7QUFBQSxJQUFjQyxvQkFBZDtBQUNBLElBQUlDLGFBQWEsRUFBakI7QUFDQSxJQUFJQyxjQUFjLEVBQWxCO0FBQ0EsSUFBSUMsZUFBSjs7QUFFQSxJQUFNQyxRQUFReEcsU0FBU0MsY0FBVCxTQUFkO0FBQ0EsSUFBTXdHLFVBQVV6RyxTQUFTQyxjQUFULFVBQWhCO0FBQ0EsSUFBTXlHLFNBQVMxRyxTQUFTQyxjQUFULGtCQUFmO0FBQ0EsSUFBTTBHLFFBQVEzRyxTQUFTQyxjQUFULFFBQWQ7O0FBRUEsSUFBSTJHLGVBQWUsRUFBbkI7QUFBQSxJQUNJQyw4QkFESjs7QUFHQSxJQUFJQyxZQUFZLEdBQWhCO0FBQUEsSUFDSXhGLGFBQWEsR0FEakI7QUFBQSxJQUVJeUYsZUFBZSxJQUZuQjs7SUFJcUJDLEs7QUFDbkIsbUJBQWM7QUFBQTs7QUFBQTs7QUFDWixTQUFLOVUsRUFBTCxHQUFVLCtDQUFBK1UsQ0FBUUMsUUFBUixFQUFWO0FBQ0EsU0FBSzVGLFVBQUwsR0FBa0IsR0FBbEI7QUFDQSxTQUFLQyxPQUFMLEdBQWUsSUFBZjtBQUNBNEUsZUFBVyxJQUFJRixZQUFKLEVBQVg7O0FBRUE7QUFDQUcsa0JBQWMsSUFBSVQsaUJBQUosRUFBZDtBQUNBLFNBQUt3QixjQUFMOztBQUVBZixnQkFBWWdCLFFBQVosR0FBdUI7QUFBQSxhQUFTLE1BQUtDLFNBQUwsQ0FBZWhELEtBQWYsQ0FBVDtBQUFBLEtBQXZCO0FBQ0ErQixnQkFBWWtCLFdBQVosR0FBMEI7QUFBQSxhQUFLLE1BQUtDLFdBQUwsQ0FBaUJDLENBQWpCLENBQUw7QUFBQSxLQUExQjtBQUNBaEIsVUFBTXRGLGdCQUFOLFNBQStCO0FBQUEsYUFBTSxNQUFLdUcsR0FBTCxHQUFXakIsTUFBTS9FLEtBQXZCO0FBQUEsS0FBL0I7O0FBRUFuQixjQUFVb0gsWUFBVixDQUF1QkMsWUFBdkIsQ0FBb0MsRUFBRWhJLE9BQU8sSUFBVCxFQUFwQyxFQUNDOU0sSUFERCxDQUNNLGtCQUFVO0FBQ2QsWUFBSytVLGFBQUwsR0FBcUIsSUFBSUMsYUFBSixDQUFrQkMsTUFBbEIsQ0FBckI7O0FBRUE7QUFDQXJCLGNBQVF2RixnQkFBUixVQUFrQyxZQUFNO0FBQ3RDLGNBQUswRyxhQUFMLENBQW1CRyxLQUFuQjtBQUNBM0Isb0JBQVkyQixLQUFaO0FBQ0F0QixnQkFBUXVCLFFBQVIsR0FBbUIsSUFBbkI7QUFDRCxPQUpEO0FBS0E7O0FBRUEsWUFBS0osYUFBTCxDQUFtQjFHLGdCQUFuQixrQkFBc0QsYUFBSztBQUN6RG9GLG9CQUFZMkIsSUFBWixDQUFpQlQsRUFBRVUsSUFBbkI7QUFDRCxPQUZELEVBWGMsQ0FhVjs7QUFFSjtBQUNBLFlBQUtOLGFBQUwsQ0FBbUIxRyxnQkFBbkIsU0FBNEMsWUFBTTtBQUNoRDtBQUNBLGNBQUs5TyxJQUFMLEdBQVksSUFBSStWLElBQUosQ0FBUzdCLFdBQVQsRUFBc0IsRUFBQ3hDLE1BQU8sV0FBUixFQUF0QixDQUFaLENBRmdELENBRVM7O0FBRXpEc0UsUUFBQSw4REFBQUEsQ0FBU3BXLE1BQVQsQ0FBZ0I7QUFDZEUsY0FBSSxNQUFLQSxFQURLO0FBRWRFLGdCQUFNLE1BQUtBO0FBRkcsU0FBaEI7O0FBS0FpVyxtQkFBVyxZQUFNO0FBQ2YsY0FBTUMsZUFBZSxJQUFJQyxZQUFKLENBQ25CcEMsUUFEbUIsRUFDVCxnQkFBYyxNQUFLalUsRUFBbkIsVUFEUyxFQUNxQixzQkFBYztBQUNwRDtBQUNBdVUsb0JBQVF2RixnQkFBUixVQUFrQztBQUFBLHFCQUFNc0gsYUFBYSxFQUFuQjtBQUFBLGFBQWxDOztBQUVBLGdCQUFJbkcsT0FBTyxLQUFYOztBQUVBO0FBQ0FyQyxxQkFBU0MsY0FBVCxXQUFrQ2lCLGdCQUFsQyxVQUE2RCxZQUFNO0FBQ2pFbUIscUJBQU8sQ0FBQ0EsSUFBUjtBQUNBa0UscUJBQU9rQyxJQUFQO0FBQ0QsYUFIRDs7QUFLQTtBQUNBLGdCQUFNQyxTQUFTMUksU0FBU0MsY0FBVCxTQUFmO0FBQ0F5SSxtQkFBT3hILGdCQUFQLFdBQWtDLFlBQU07QUFDdENJLDJCQUFhcUgsV0FBV0QsT0FBT2pILEtBQWxCLENBQWI7QUFDQSxvQkFBS0gsVUFBTCxHQUFrQkEsVUFBbEI7QUFDRCxhQUhEOztBQUtBO0FBQ0FvRixtQkFBT3hGLGdCQUFQLFVBQWlDLFlBQU07QUFDckNxRix1QkFBUyxFQUFUO0FBQ0FBLHVCQUFTSixTQUFTeUMsa0JBQVQsRUFBVDtBQUNBckMscUJBQU9zQyxNQUFQLEdBQWdCTCxXQUFXLENBQVgsQ0FBaEI7QUFDQWpDLHFCQUFPdUMsT0FBUCxDQUFlakMscUJBQWY7QUFDQU4scUJBQU9sRSxJQUFQLEdBQWNBLElBQWQ7QUFDQWtFLHFCQUFPd0IsS0FBUDtBQUNELGFBUEQ7QUFRRCxXQTdCa0IsQ0FBckI7O0FBZ0NBTyx1QkFBYXpILElBQWI7QUFDQSxnQkFBS2tJLGFBQUw7QUFFRCxTQXBDRCxFQW9DRyxJQXBDSDs7QUFzQ0E7QUFDQSxZQUFNeEgsVUFBVXZCLFNBQVNDLGNBQVQsV0FBaEI7QUFDQXNCLGdCQUFRTCxnQkFBUixXQUFtQyxZQUFNO0FBQ3ZDNkYseUJBQWV4RixRQUFRRSxLQUF2QjtBQUNBLGdCQUFLRixPQUFMLEdBQWV3RixZQUFmO0FBQ0QsU0FIRDs7QUFLQVQsc0JBQWMsRUFBZDtBQUNELE9BdkREO0FBd0RELEtBekVEO0FBMEVEOzs7O2dDQUVXa0IsQyxFQUFHO0FBQ2IsV0FBS0ksYUFBTCxDQUFtQmEsSUFBbkI7QUFDQXJDLGtCQUFZcUMsSUFBWjtBQUNBaEMsY0FBUXVCLFFBQVIsR0FBbUIsS0FBbkI7QUFDQXZCLGNBQVF1QyxXQUFSLEdBQXNCLG9CQUF0QjtBQUNBLFdBQUt2QixHQUFMLEdBQVdqQixNQUFNL0UsS0FBakI7QUFDRDs7OzhCQUVTNEMsSyxFQUFPO0FBQ2YsVUFBTTRFLE9BQU81RSxNQUFNNkUsT0FBTixDQUFjakcsTUFBZCxHQUF1QixDQUFwQztBQUNBb0QsbUJBQWFoQyxNQUFNNkUsT0FBTixDQUFjRCxJQUFkLEVBQW9CLENBQXBCLEVBQXVCNUMsVUFBcEM7QUFDQUcsWUFBTS9FLEtBQU4sR0FBYzRFLFVBQWQ7QUFDRDs7O3FDQUVnQjtBQUNmRCxrQkFBWStDLFVBQVosR0FBeUIsS0FBekI7QUFDQS9DLGtCQUFZZ0QsSUFBWixHQUFtQixPQUFuQjtBQUNBaEQsa0JBQVlpRCxjQUFaLEdBQTZCLEtBQTdCO0FBQ0FqRCxrQkFBWWtELGVBQVosR0FBOEIsQ0FBOUI7QUFDRDs7O29DQUVlOztBQUVkLFVBQU1DLHNCQUFzQixTQUF0QkEsbUJBQXNCLENBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFPQyxDQUFQLEVBQWE7QUFDdkMsZUFBT0YsSUFBSSxDQUFDQyxJQUFJRCxDQUFMLElBQVVFLENBQXJCO0FBQ0QsT0FGRDs7QUFJQSxVQUFJN0MscUJBQUosRUFBMkI7QUFDekJBLDhCQUFzQjhDLFVBQXRCO0FBQ0Q7O0FBRUQsVUFBSXhELFNBQVN5RCxxQkFBYixFQUFvQztBQUNsQy9DLGdDQUF3QlYsU0FBU3lELHFCQUFULENBQStCOUMsU0FBL0IsRUFBMEMsQ0FBMUMsRUFBNkMsQ0FBN0MsQ0FBeEI7QUFDRCxPQUZELE1BRU8sSUFBSVgsU0FBUzBELG9CQUFiLEVBQW1DO0FBQ3hDaEQsZ0NBQXdCVixTQUFTMEQsb0JBQVQsQ0FBOEIvQyxTQUE5QixFQUF5QyxDQUF6QyxFQUE0QyxDQUE1QyxDQUF4QjtBQUNEOztBQUVERCw0QkFBc0JnQyxNQUF0QixHQUErQixJQUFJaUIsWUFBSixDQUFpQmhELFlBQVksQ0FBN0IsQ0FBL0I7QUFDQUQsNEJBQXNCa0QsV0FBdEIsR0FBb0MsS0FBS0MsVUFBTCxDQUFnQmxELFNBQWhCLENBQXBDOztBQUVBRCw0QkFBc0JvRCxjQUF0QixHQUF1QyxVQUFTNUYsS0FBVCxFQUFnQjs7QUFFckQsWUFBSTZGLFlBQVk3RixNQUFNOEYsV0FBTixDQUFrQkMsY0FBbEIsQ0FBaUMsQ0FBakMsQ0FBaEI7QUFDQSxZQUFJQyxhQUFhaEcsTUFBTWlHLFlBQU4sQ0FBbUJGLGNBQW5CLENBQWtDLENBQWxDLENBQWpCOztBQUVBLGFBQUt0SCxJQUFJLENBQVQsRUFBWUEsSUFBSW9ILFVBQVVqSCxNQUExQixFQUFrQ0gsR0FBbEMsRUFBdUM7O0FBRXJDO0FBQ0FvSCxvQkFBVXBILENBQVYsS0FBZ0IsS0FBS2lILFdBQUwsQ0FBaUJqSCxDQUFqQixDQUFoQjs7QUFFQTtBQUNBLGVBQUsrRixNQUFMLENBQVkvRixDQUFaLElBQWlCLEtBQUsrRixNQUFMLENBQVkvRixJQUFJZ0UsU0FBaEIsQ0FBakI7O0FBRUE7QUFDQSxlQUFLK0IsTUFBTCxDQUFZL0YsSUFBSWdFLFNBQWhCLElBQTZCLEdBQTdCO0FBQ0Q7O0FBRUQ7QUFDQSxZQUFJeUQsWUFBWSxJQUFJVCxZQUFKLENBQWlCaEQsWUFBWSxDQUE3QixDQUFoQjtBQUNBLGFBQUssSUFBSWhFLElBQUksQ0FBUixFQUFXMEgsSUFBSSxHQUFwQixFQUF5QjFILElBQUlnRSxTQUE3QixFQUF3Q2hFLEtBQUswSCxLQUFLbEosVUFBbEQsRUFBOEQ7O0FBRTVELGNBQUltSixRQUFRaFYsS0FBS2lWLEtBQUwsQ0FBV0YsQ0FBWCxJQUFnQjFELFNBQTVCO0FBQ0EsY0FBSTBDLElBQUlVLFVBQVVPLEtBQVYsQ0FBUjtBQUNBLGNBQUloQixJQUFJUyxVQUFVLENBQUNPLFFBQVEsQ0FBVCxJQUFjM0QsU0FBeEIsQ0FBUjtBQUNBeUQsb0JBQVV6SCxDQUFWLEtBQWdCeUcsb0JBQW9CQyxDQUFwQixFQUF1QkMsQ0FBdkIsRUFBMEJlLElBQUksR0FBOUIsSUFBcUMsS0FBS1QsV0FBTCxDQUFpQmpILENBQWpCLENBQXJEO0FBQ0Q7O0FBRUQ7QUFDQSxhQUFLQSxJQUFJLENBQVQsRUFBWUEsSUFBSWdFLFNBQWhCLEVBQTJCaEUsS0FBS3JOLEtBQUtrVixLQUFMLENBQVc3RCxhQUFhLElBQUlDLFlBQWpCLENBQVgsQ0FBaEMsRUFBNEU7QUFDMUUsZUFBS3lELElBQUksQ0FBVCxFQUFZQSxLQUFLMUQsU0FBakIsRUFBNEIwRCxHQUE1QixFQUFpQztBQUMvQixpQkFBSzNCLE1BQUwsQ0FBWS9GLElBQUkwSCxDQUFoQixLQUFzQkQsVUFBVUMsQ0FBVixDQUF0QjtBQUNEO0FBQ0Y7O0FBRUQ7QUFDQSxhQUFLMUgsSUFBSSxDQUFULEVBQVlBLElBQUlnRSxTQUFoQixFQUEyQmhFLEdBQTNCLEVBQWdDO0FBQzlCdUgscUJBQVd2SCxDQUFYLElBQWdCLEtBQUsrRixNQUFMLENBQVkvRixDQUFaLENBQWhCO0FBQ0Q7QUFDRixPQXRDRDs7QUF3Q0ErRCw0QkFBc0JpQyxPQUF0QixDQUE4QjNDLFNBQVN5RSxXQUF2QztBQUVEOzs7K0JBRVUzSCxNLEVBQVE7QUFDakIsVUFBTWIsU0FBUyxJQUFJMEgsWUFBSixDQUFpQjdHLE1BQWpCLENBQWY7QUFDQSxXQUFLLElBQUlILEtBQUksQ0FBYixFQUFnQkEsS0FBSUcsTUFBcEIsRUFBNEJILElBQTVCLEVBQWlDO0FBQzdCVixlQUFPVSxFQUFQLElBQVksT0FBTyxJQUFJck4sS0FBSzRCLEdBQUwsQ0FBUyxJQUFJNUIsS0FBSzBCLEVBQVQsR0FBYzJMLEVBQWQsSUFBbUJHLFNBQVMsQ0FBNUIsQ0FBVCxDQUFYLENBQVo7QUFDSDtBQUNELGFBQU9iLE1BQVA7QUFDRDs7Ozs7O3lEQXJMa0I0RSxLO0FBc0xwQixDOzs7Ozs7Ozs7QUMvTUQ7O0FBRUEsSUFBTWpWLGtCQUFOOztBQUVBLHlEQUFlOztBQUViQyxVQUFRLHNCQUFnQjtBQUFBLFFBQWRFLEVBQWMsUUFBZEEsRUFBYztBQUFBLFFBQVZFLElBQVUsUUFBVkEsSUFBVTs7QUFDdEIsUUFBTUksZUFBTjtBQUNBLFFBQU1xWSxtQkFBaUIzWSxHQUFHNFksS0FBSCxNQUFjQyxJQUFkLEtBQXZCO0FBQ0EsUUFBTXRZLE9BQU8sSUFBSUMsUUFBSixFQUFiO0FBQ0FELFNBQUtFLE1BQUwsT0FBa0JULEVBQWxCO0FBQ0FPLFNBQUtFLE1BQUwsVUFBcUJQLElBQXJCLEVBQTJCeVksV0FBM0I7O0FBRUEsV0FBTyx3REFBQWpZLENBQU1iLEdBQU4sRUFBVyxFQUFDUyxjQUFELEVBQVNDLFVBQVQsRUFBWCxFQUNKSSxJQURJLENBQ0M7QUFBQSxhQUFLQyxFQUFFQyxJQUFGLEVBQUw7QUFBQSxLQURELENBQVA7QUFFRCxHQVhZOztBQWFiQyxRQUFNLGdCQUFNO0FBQ1YsV0FBTyx3REFBQUosQ0FBU2IsR0FBVCxxQkFDSmMsSUFESSxDQUNDO0FBQUEsYUFBS0MsRUFBRUMsSUFBRixFQUFMO0FBQUEsS0FERCxDQUFQO0FBRUQsR0FoQlk7O0FBa0JiRSxXQUFTLHFCQUFNO0FBQ2IsUUFBTVQsY0FBTjtBQUNBLFdBQU8sd0RBQUFJLENBQVNiLEdBQVQsU0FBZ0JHLEVBQWhCLEVBQXNCLEVBQUNNLGNBQUQsRUFBdEIsRUFBZ0NLLElBQWhDLENBQXFDO0FBQUEsYUFBS0MsRUFBRUMsSUFBRixFQUFMO0FBQUEsS0FBckMsQ0FBUDtBQUNEO0FBckJZLENBQWYsRTs7Ozs7OztBQ0pBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2hFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN4QkE7O0FBRUEsOEVBQThFOztBQUU5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQ2JBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQ2hCQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7QUMvQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQ2xCQTs7QUFFQSIsImZpbGUiOiJqcy9zY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA5KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2YTYxZWNmMjc1YzY2OWZjZjA5ZiIsImNvbnN0IENvbG9ycyA9IHtcbiAgc2tpbjogMHhmZmUwYmQsXG4gIGZyZWNrbGVzOiAweGNmYmE5NixcbiAgd2hpdGU6IDB4ZTllYmVlLFxuICBnbGFzc2VzOiAweGY5YzQyMSxcbiAgdGVldGg6IDB4ZmZmZmZmLFxuICBibGFjazogMHgyZTJlMmUsXG4gIGV5ZTogMHg2Mjk1YTgsXG4gIGhhdDogMHg3MjAzMTRcbn07XG5leHBvcnQgZGVmYXVsdCBDb2xvcnM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvb2JqZWN0cy9jb2xvcnMuanMiLCIvLyB0aGUgd2hhdHdnLWZldGNoIHBvbHlmaWxsIGluc3RhbGxzIHRoZSBmZXRjaCgpIGZ1bmN0aW9uXG4vLyBvbiB0aGUgZ2xvYmFsIG9iamVjdCAod2luZG93IG9yIHNlbGYpXG4vL1xuLy8gUmV0dXJuIHRoYXQgYXMgdGhlIGV4cG9ydCBmb3IgdXNlIGluIFdlYnBhY2ssIEJyb3dzZXJpZnkgZXRjLlxucmVxdWlyZSgnd2hhdHdnLWZldGNoJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHNlbGYuZmV0Y2guYmluZChzZWxmKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtZmV0Y2gvZmV0Y2gtbnBtLWJyb3dzZXJpZnkuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XG5cbmNvbnN0IHVybCA9IGAvYXBpL2NhcnRgO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgY3JlYXRlOiAoe3RleHQsIGlkLCBmcm9tLCBibG9iLCB0bywgYXVkaW9TZXR0aW5ncywgaGVhZENvbG9yc30pID0+IHtcbiAgICBjb25zdCBtZXRob2QgPSBgUE9TVGA7XG4gICAgLy8gY29uc3QgbmV3RmlsZU5hbWUgPSBgJHtpZC5zcGxpdChgIGApLmpvaW4oYF9gKX1gO1xuICAgIGNvbnN0IGJvZHkgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBib2R5LmFwcGVuZChgdGV4dGAsIHRleHQpO1xuICAgIGJvZHkuYXBwZW5kKGBpZGAsIGlkKTtcbiAgICBib2R5LmFwcGVuZChgZnJvbWAsIGZyb20pO1xuICAgIGJvZHkuYXBwZW5kKGB0b2AsIHRvKTtcbiAgICBib2R5LmFwcGVuZChgYXVkaW9TZXR0aW5nc2AsIGF1ZGlvU2V0dGluZ3MpO1xuICAgIGJvZHkuYXBwZW5kKGBoZWFkQ29sb3JzYCwgaGVhZENvbG9ycyk7XG5cbiAgICByZXR1cm4gZmV0Y2godXJsLCB7bWV0aG9kLCBib2R5fSlcbiAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpO1xuICB9LFxuXG4gIHJlYWQ6ICgpID0+IHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dXJsfT9pc0FjdGl2ZT10cnVlYClcbiAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpO1xuICB9LFxuXG4gIHJlYWRPbmU6IGlkID0+IHtcbiAgICBjb25zdCBtZXRob2QgPSBgR0VUYDtcbiAgICByZXR1cm4gZmV0Y2goYCR7dXJsfS8ke2lkfWAsIHttZXRob2R9KS50aGVuKHIgPT4gci5qc29uKCkpO1xuICB9LFxuXG4gIHVwZGF0ZTogKHt0ZXh0LCBpZCwgZnJvbSwgdG8sIGF1ZGlvU2V0dGluZ3MsIGhlYWRDb2xvcnN9KSA9PsKge1xuICAgIGNvbnN0IG1ldGhvZCA9IGBQVVRgO1xuICAgIGNvbnN0IGJvZHkgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBib2R5LmFwcGVuZChgdGV4dGAsIHRleHQpO1xuICAgIGJvZHkuYXBwZW5kKGBpZGAsIGlkKTtcbiAgICBib2R5LmFwcGVuZChgZnJvbWAsIGZyb20pO1xuICAgIGJvZHkuYXBwZW5kKGB0b2AsIHRvKTtcbiAgICBib2R5LmFwcGVuZChgYXVkaW9TZXR0aW5nc2AsIGF1ZGlvU2V0dGluZ3MpO1xuICAgIGJvZHkuYXBwZW5kKGBoZWFkQ29sb3JzYCwgaGVhZENvbG9ycyk7XG5cbiAgICByZXR1cm4gZmV0Y2goYCR7dXJsfS8ke2lkfWAsIHttZXRob2QsIGJvZHl9KS50aGVuKHIgPT4gci5qc29uKCkpO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2xpYi9jYXJ0QVBJLmpzIiwiaW1wb3J0IENvbG9ycyBmcm9tICcuLi9vYmplY3RzL2NvbG9ycyc7XG5pbXBvcnQgTWF0IGZyb20gJy4uL29iamVjdHMvTWF0ZXJpYWxzJztcblxubGV0IGlzQmxpbmtpbmcgPSBmYWxzZTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubWVzaCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuXG4gICAgbGV0IGhlYWRHZW9tID0gbmV3IFRIUkVFLkJveEJ1ZmZlckdlb21ldHJ5KDE2LCAxNiwgMTYpO1xuICAgIGxldCBza2luTWF0ID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoe2NvbG9yOiBDb2xvcnMuc2tpbiwgZmxhdFNoYWRpbmc6IHRydWV9KTtcbiAgICBsZXQgZXllTWF0ID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHtjb2xvcjogQ29sb3JzLmV5ZSwgZmxhdFNoYWRpbmc6IHRydWV9KTtcblxuICAgIHRoaXMuaGVhZCA9IG5ldyBUSFJFRS5NZXNoKGhlYWRHZW9tLHNraW5NYXQpO1xuICAgIHRoaXMuaGVhZC5jYXN0U2hhZG93ID0gdHJ1ZTtcbiAgICB0aGlzLmhlYWQucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuICAgIHRoaXMubWVzaC5hZGQodGhpcy5oZWFkKTtcblxuICAgIHRoaXMuYmVhcmQgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICB0aGlzLmJlYXJkLnBvc2l0aW9uLnkgPSAtNztcbiAgICB0aGlzLmJlYXJkLnBvc2l0aW9uLnogPSAwLjU7XG4gICAgdGhpcy5oZWFkLmFkZCh0aGlzLmJlYXJkKTtcblxuICAgIHRoaXMuQmVhcmQoKTtcbiAgICB0aGlzLkdsYXNzZXMoKTtcbiAgICB0aGlzLkhhaXIoKTtcbiAgICB0aGlzLkV5ZXMoKTtcbiAgICB0aGlzLkV5ZUJyb3dzKCk7XG4gICAgdGhpcy5IYXQoKTtcbiAgICB0aGlzLkZyZWNrbGVzKCk7XG4gICAgdGhpcy5GZWF0dXJlcygpO1xuICAgIHRoaXMuaWRsZSgpO1xuICAgIHRoaXMubm9ybWFsaXplKCk7XG4gIH1cblxuICBub3JtYWxpemUodiwgdm1pbiwgdm1heCwgdG1pbiwgdG1heCkge1xuICAgIGNvbnN0IG52ID0gTWF0aC5tYXgoTWF0aC5taW4odiwgdm1heCksIHZtaW4pO1xuICAgIGNvbnN0IGR2ID0gdm1heCAtIHZtaW47XG4gICAgY29uc3QgcGMgPSAobnYgLSB2bWluKSAvIGR2O1xuICAgIGNvbnN0IGR0ID0gdG1heCAtIHRtaW47XG4gICAgY29uc3QgdHYgPSB0bWluICsgKHBjICogZHQpO1xuICAgIHJldHVybiB0djtcbiAgfVxuXG4gIHVwZGF0ZUJvZHkoc3BlZWQsIGV5ZUJsdWVSaWdodFBvc1gsIGV5ZUJsdWVMZWZ0UG9zWCwgZXllQmx1ZVJpZ2h0UG9zWSwgZXllQmx1ZUxlZnRQb3NZLCBleWVCcm93UmlnaHRQb3NZLCBleWVCcm93TGVmdFBvc1kpIHtcbiAgICB0aGlzLmV5ZUJsdWVSaWdodC5wb3NpdGlvbi54ICs9IChleWVCbHVlUmlnaHRQb3NYIC0gdGhpcy5leWVCbHVlUmlnaHQucG9zaXRpb24ueCkgLyBzcGVlZDtcbiAgICB0aGlzLmV5ZUJsdWVMZWZ0LnBvc2l0aW9uLnggKz0gKGV5ZUJsdWVMZWZ0UG9zWCAtIHRoaXMuZXllQmx1ZUxlZnQucG9zaXRpb24ueCkgLyBzcGVlZDtcblxuICAgIHRoaXMuZXllQmx1ZVJpZ2h0LnBvc2l0aW9uLnkgKz0gKGV5ZUJsdWVSaWdodFBvc1kgLSB0aGlzLmV5ZUJsdWVSaWdodC5wb3NpdGlvbi55KSAvIHNwZWVkO1xuICAgIHRoaXMuZXllQmx1ZUxlZnQucG9zaXRpb24ueSArPSAoZXllQmx1ZUxlZnRQb3NZIC0gdGhpcy5leWVCbHVlTGVmdC5wb3NpdGlvbi55KSAvIHNwZWVkO1xuXG4gICAgdGhpcy5leWVCcm93UmlnaHQucG9zaXRpb24ueSArPSAoZXllQnJvd1JpZ2h0UG9zWSAtIHRoaXMuZXllQnJvd1JpZ2h0LnBvc2l0aW9uLnkpIC8gc3BlZWQ7XG4gICAgdGhpcy5leWVCcm93TGVmdC5wb3NpdGlvbi55ICs9IChleWVCcm93TGVmdFBvc1kgLSB0aGlzLmV5ZUJyb3dMZWZ0LnBvc2l0aW9uLnkpIC8gc3BlZWQ7XG4gIH1cblxuICBpZGxlKHhUYXJnZXQgPSAwLCB5VGFyZ2V0ID0gMCkge1xuICAgIGxldCBkaXN0YW5jZSA9IDE7XG5cbiAgICB0aGlzLmhlYWQucm90YXRpb24ueiA9IE1hdGguc2luKERhdGUubm93KCkgKiAwLjAwNSkgKiBNYXRoLlBJICogMC4wMDU7XG4gICAgdGhpcy5oZWFkLnJvdGF0aW9uLnggPSBNYXRoLnNpbihEYXRlLm5vdygpICogMC4wMDQpICogTWF0aC5QSSAqIDAuMDM7XG5cbiAgICBjb25zdCBleWVCbHVlUmlnaHRQb3NYID0gdGhpcy5ub3JtYWxpemUoeFRhcmdldCwgLTIwMCwgMjAwLCAtMC42LCAwLjYpO1xuICAgIGNvbnN0IGV5ZUJsdWVMZWZ0UG9zWCA9IHRoaXMubm9ybWFsaXplKHhUYXJnZXQsIC0yMDAsIDIwMCwgLTAuNiwgMC42KTtcblxuICAgIGNvbnN0IGV5ZUJsdWVSaWdodFBvc1kgPSB0aGlzLm5vcm1hbGl6ZSh5VGFyZ2V0LCAtMjAwLCAyMDAsIDAuNiwgLTAuNik7XG4gICAgY29uc3QgZXllQmx1ZUxlZnRQb3NZID0gdGhpcy5ub3JtYWxpemUoeVRhcmdldCwgLTIwMCwgMjAwLCAwLjYsIC0wLjYpO1xuXG4gICAgY29uc3QgZXllQnJvd1JpZ2h0UG9zWSA9IHRoaXMubm9ybWFsaXplKHhUYXJnZXQsIC0yMDAsIDIwMCwgLTEsIDAuOCk7XG4gICAgY29uc3QgZXllQnJvd0xlZnRQb3NZID0gdGhpcy5ub3JtYWxpemUoeFRhcmdldCwgLTIwMCwgMjAwLCAtMSwgMC44KTtcblxuICAgIHRoaXMubW91c3RhY2hlLnBvc2l0aW9uLnkgPSBNYXRoLmNvcyhEYXRlLm5vdygpICogMC4wMSkgKiBkaXN0YW5jZSAvIDQ7XG4gICAgdGhpcy5tb3VzdGFjaGUucm90YXRpb24ueiA9IE1hdGguc2luKERhdGUubm93KCkgKiAwLjAxKSAqIE1hdGguUEkgKiAwLjAxO1xuXG4gICAgdGhpcy5tZXNoLnJvdGF0aW9uLnkgPSBNYXRoLnNpbihEYXRlLm5vdygpICogMC4wMDIpICogTWF0aC5QSSAqIDAuMDU7XG4gICAgdGhpcy51cGRhdGVCb2R5KDEwLCBleWVCbHVlUmlnaHRQb3NYLCBleWVCbHVlTGVmdFBvc1gsIGV5ZUJsdWVSaWdodFBvc1ksIGV5ZUJsdWVMZWZ0UG9zWSwgZXllQnJvd1JpZ2h0UG9zWSwgZXllQnJvd0xlZnRQb3NZKTtcbiAgfVxuXG4gIEJlYXJkKCkge1xuICAgIGxldCBiZWFyZEdlb21NZXJnZWQgPSBuZXcgVEhSRUUuR2VvbWV0cnkoKTtcblxuICAgIGxldCBiZWFyZDFHZW9tID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDIsIDEwLCAxNik7XG5cbiAgICBsZXQgYmVhcmQxID0gbmV3IFRIUkVFLk1lc2goYmVhcmQxR2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBiZWFyZDEuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oOSwgMCwgMCkpO1xuICAgIGJlYXJkMS51cGRhdGVNYXRyaXgoKTtcbiAgICBiZWFyZEdlb21NZXJnZWQubWVyZ2UoYmVhcmQxLmdlb21ldHJ5LCBiZWFyZDEubWF0cml4KTtcblxuICAgIGxldCBiZWFyZDIgPSBuZXcgVEhSRUUuTWVzaChiZWFyZDFHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGJlYXJkMi5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbig3LCAtMiwgMikpO1xuICAgIGJlYXJkMi5zY2FsZS56ID0gMC44O1xuICAgIGJlYXJkMi51cGRhdGVNYXRyaXgoKTtcbiAgICBiZWFyZEdlb21NZXJnZWQubWVyZ2UoYmVhcmQyLmdlb21ldHJ5LCBiZWFyZDIubWF0cml4KTtcblxuICAgIGxldCBiZWFyZDMgPSBiZWFyZDEuY2xvbmUoKTtcbiAgICBiZWFyZDMucG9zaXRpb24ueCA9IC1iZWFyZDEucG9zaXRpb24ueDtcbiAgICBiZWFyZDMudXBkYXRlTWF0cml4KCk7XG4gICAgYmVhcmRHZW9tTWVyZ2VkLm1lcmdlKGJlYXJkMy5nZW9tZXRyeSwgYmVhcmQzLm1hdHJpeCk7XG5cbiAgICBsZXQgYmVhcmQ0ID0gYmVhcmQyLmNsb25lKCk7XG4gICAgYmVhcmQ0LnBvc2l0aW9uLnggPSAtYmVhcmQyLnBvc2l0aW9uLng7XG4gICAgYmVhcmQ0LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGJlYXJkR2VvbU1lcmdlZC5tZXJnZShiZWFyZDQuZ2VvbWV0cnksIGJlYXJkNC5tYXRyaXgpO1xuXG4gICAgbGV0IGJlYXJkMkdlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMywgMTQsIDEwKTtcbiAgICBiZWFyZDJHZW9tLnZlcnRpY2VzWzJdLnogLT0gMjtcbiAgICBiZWFyZDJHZW9tLnZlcnRpY2VzWzddLnogLT0gMjtcblxuICAgIGxldCBiZWFyZDUgPSBuZXcgVEhSRUUuTWVzaChiZWFyZDJHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGJlYXJkNS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbig1LCAtNSwgNCkpO1xuICAgIGJlYXJkNS51cGRhdGVNYXRyaXgoKTtcbiAgICBiZWFyZEdlb21NZXJnZWQubWVyZ2UoYmVhcmQ1Lmdlb21ldHJ5LCBiZWFyZDUubWF0cml4KTtcblxuICAgIGxldCBiZWFyZDNHZW9tID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDIuNSwgMTQsIDEwKTtcbiAgICBiZWFyZDNHZW9tLnZlcnRpY2VzWzJdLnogLT0gMjtcbiAgICBiZWFyZDNHZW9tLnZlcnRpY2VzWzddLnogLT0gMjtcblxuICAgIGxldCBiZWFyZDYgPSBuZXcgVEhSRUUuTWVzaChiZWFyZDNHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGJlYXJkNi5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigyLjUsIC02LCA2KSk7XG4gICAgYmVhcmQ2LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGJlYXJkR2VvbU1lcmdlZC5tZXJnZShiZWFyZDYuZ2VvbWV0cnksIGJlYXJkNi5tYXRyaXgpO1xuXG4gICAgbGV0IGJlYXJkNyA9IGJlYXJkNS5jbG9uZSgpO1xuICAgIGJlYXJkNy5wb3NpdGlvbi54ID0gLWJlYXJkNS5wb3NpdGlvbi54O1xuICAgIGJlYXJkNy51cGRhdGVNYXRyaXgoKTtcbiAgICBiZWFyZEdlb21NZXJnZWQubWVyZ2UoYmVhcmQ3Lmdlb21ldHJ5LCBiZWFyZDcubWF0cml4KTtcblxuICAgIGxldCBiZWFyZDggPSBiZWFyZDYuY2xvbmUoKTtcbiAgICBiZWFyZDgucG9zaXRpb24ueCA9IC1iZWFyZDYucG9zaXRpb24ueDtcbiAgICBiZWFyZDgudXBkYXRlTWF0cml4KCk7XG4gICAgYmVhcmRHZW9tTWVyZ2VkLm1lcmdlKGJlYXJkOC5nZW9tZXRyeSwgYmVhcmQ4Lm1hdHJpeCk7XG5cbiAgICBsZXQgYmVhcmQ0R2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgyLjUsIDE0LjUsIDEwKTtcbiAgICBiZWFyZDRHZW9tLnZlcnRpY2VzWzJdLnogLT0gMTtcbiAgICBiZWFyZDRHZW9tLnZlcnRpY2VzWzddLnogLT0gMTtcblxuICAgIGxldCBiZWFyZDkgPSBuZXcgVEhSRUUuTWVzaChiZWFyZDRHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGJlYXJkOS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigwLCAtNywgNS43NSkpO1xuICAgIGJlYXJkOS51cGRhdGVNYXRyaXgoKTtcbiAgICBiZWFyZEdlb21NZXJnZWQubWVyZ2UoYmVhcmQ5Lmdlb21ldHJ5LCBiZWFyZDkubWF0cml4KTtcblxuICAgIGxldCBiZWFyZDVHZW9tID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDQsIDgsIDgpO1xuICAgIGxldCBiZWFyZDEwID0gbmV3IFRIUkVFLk1lc2goYmVhcmQ1R2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBiZWFyZDEwLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKC02LCAtMSwgLTIpKTtcbiAgICBiZWFyZDEwLnVwZGF0ZU1hdHJpeCgpO1xuICAgIGJlYXJkR2VvbU1lcmdlZC5tZXJnZShiZWFyZDEwLmdlb21ldHJ5LCBiZWFyZDEwLm1hdHJpeCk7XG5cbiAgICBsZXQgYmVhcmQxMSA9IG5ldyBUSFJFRS5NZXNoKGJlYXJkNUdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgYmVhcmQxMS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigwLCAtNSwgLTIpKTtcbiAgICBiZWFyZDExLnVwZGF0ZU1hdHJpeCgpO1xuICAgIGJlYXJkR2VvbU1lcmdlZC5tZXJnZShiZWFyZDExLmdlb21ldHJ5LCBiZWFyZDExLm1hdHJpeCk7XG5cbiAgICBsZXQgYmVhcmRNZXJnZWQgPSBuZXcgVEhSRUUuTWVzaChiZWFyZEdlb21NZXJnZWQsIE1hdC53aGl0ZU1hdCk7XG4gICAgYmVhcmRNZXJnZWQuY2FzdFNoYWRvdyA9IHRydWU7XG4gICAgYmVhcmRNZXJnZWQucmVjZWl2ZVNoYWRvdyA9IHRydWU7XG5cbiAgICBsZXQgbW91dGhHZW9tID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDEwLCA0LCAxKTtcbiAgICBsZXQgbW91dGggPSBuZXcgVEhSRUUuTWVzaChtb3V0aEdlb20sIE1hdC5ibGFja01hdCk7XG4gICAgbW91dGgucG9zaXRpb24uc2V0KDAsIDIsIDgpO1xuICAgIG1vdXRoLmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICBtb3V0aC5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcblxuICAgIGxldCB0ZWV0aEdlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMTAsIDEsIDEpO1xuICAgIGxldCB0ZWV0aCA9IG5ldyBUSFJFRS5NZXNoKHRlZXRoR2VvbSwgTWF0LnRlZXRoTWF0KTtcbiAgICB0ZWV0aC5wb3NpdGlvbi5zZXQoMCwgMC41LCAwLjEpO1xuICAgIHRlZXRoLmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICB0ZWV0aC5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcbiAgICBtb3V0aC5hZGQodGVldGgpXG5cbiAgICB0aGlzLmJlYXJkLmFkZChiZWFyZE1lcmdlZCwgbW91dGgpO1xuXG4gICAgbGV0IG1vdXN0YWNoZUdlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMTQsIDMsIDMsIDMpO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbMF0ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbMV0ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbMl0ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbM10ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbNF0ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbNV0ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbNl0ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbN10ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbOF0ueCAtPSAxO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbOV0ueCArPSAxO1xuXG4gICAgbW91c3RhY2hlR2VvbS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigwLCA0LCAwKSk7XG4gICAgdGhpcy5tb3VzdGFjaGUgPSBuZXcgVEhSRUUuTWVzaChtb3VzdGFjaGVHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIHRoaXMubW91c3RhY2hlLmNhc3RTaGFkb3cgPSB0cnVlO1xuICAgIHRoaXMubW91c3RhY2hlLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xuXG4gICAgdGhpcy5tb3VzdGFjaGUucG9zaXRpb24uc2V0KDAsIDAsIDkpO1xuICAgIHRoaXMuYmVhcmQuYWRkKHRoaXMubW91c3RhY2hlKTtcbiAgfVxuXG4gIEdsYXNzZXMoKSB7XG5cbiAgICB0aGlzLmdsYXNzZXMgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICB0aGlzLmdsYXNzZXMucG9zaXRpb24uc2V0KDAsIDAsIDkpO1xuICAgIHRoaXMuaGVhZC5hZGQodGhpcy5nbGFzc2VzKTtcbiAgICBsZXQgZ2xhc3Nlc01hdCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy5nbGFzc2VzLCBmbGF0U2hhZGluZzogdHJ1ZX0pO1xuXG4gICAgbGV0IGZyYW1lR2VvbU1lcmdlZCA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xuXG4gICAgbGV0IGZyYW1lT3V0ZXJHZW9tID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoMywgMywgMC41LCAzMilcbiAgICBsZXQgZnJhbWVJbm5lckdlb20gPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeSgyLjcsIDIuNywgMC41LCAzMilcblxuICAgIGZyYW1lT3V0ZXJHZW9tLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWCgtTWF0aC5QSSAvIDIpKTtcbiAgICBmcmFtZUlubmVyR2VvbS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblgoLU1hdGguUEkgLyAyKSk7XG5cbiAgICBsZXQgZnJhbWVCU1AgPSBuZXcgVGhyZWVCU1AoZnJhbWVPdXRlckdlb20pO1xuICAgIGxldCBmcmFtZUN1dEJTUCA9IG5ldyBUaHJlZUJTUChmcmFtZUlubmVyR2VvbSk7XG5cbiAgICBsZXQgZnJhbWVpbnRlcnNlY3Rpb25CU1AgPSBmcmFtZUJTUC5zdWJ0cmFjdChmcmFtZUN1dEJTUCk7XG4gICAgbGV0IGZyYW1lTGVmdCA9IGZyYW1laW50ZXJzZWN0aW9uQlNQLnRvTWVzaChnbGFzc2VzTWF0KTtcblxuICAgIGZyYW1lTGVmdC5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbig0LCAzLCAwKSk7XG4gICAgZnJhbWVMZWZ0LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGZyYW1lR2VvbU1lcmdlZC5tZXJnZShmcmFtZUxlZnQuZ2VvbWV0cnksIGZyYW1lTGVmdC5tYXRyaXgpO1xuXG4gICAgbGV0IGZyYW1lUmlnaHQgPSBmcmFtZUxlZnQuY2xvbmUoKTtcbiAgICBmcmFtZVJpZ2h0LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWihNYXRoLlBJIC8gMzApKTtcbiAgICBmcmFtZVJpZ2h0LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKC03LjUsIC0wLjI1LCAwKSk7XG4gICAgZnJhbWVSaWdodC51cGRhdGVNYXRyaXgoKTtcbiAgICBmcmFtZUdlb21NZXJnZWQubWVyZ2UoZnJhbWVSaWdodC5nZW9tZXRyeSwgZnJhbWVSaWdodC5tYXRyaXgpO1xuXG4gICAgbGV0IGZyYW1lTWlkR2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgyLCAuMywgLjUpO1xuICAgIGxldCBmcmFtZU1pZCA9IG5ldyBUSFJFRS5NZXNoKGZyYW1lTWlkR2VvbSwgZ2xhc3Nlc01hdCk7XG4gICAgZnJhbWVNaWQuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oMCwgMy4zLCAtMC4zKSk7XG4gICAgZnJhbWVNaWQudXBkYXRlTWF0cml4KCk7XG4gICAgZnJhbWVHZW9tTWVyZ2VkLm1lcmdlKGZyYW1lTWlkLmdlb21ldHJ5LCBmcmFtZU1pZC5tYXRyaXgpO1xuXG4gICAgbGV0IGZyYW1lRW5kR2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgxLjUsIC41LCAxKTtcbiAgICBsZXQgZnJhbWVFbmRSaWdodCA9IG5ldyBUSFJFRS5NZXNoKGZyYW1lRW5kR2VvbSwgZ2xhc3Nlc01hdCk7XG4gICAgZnJhbWVFbmRSaWdodC5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbig3LjUsIDMsIDApKTtcbiAgICBmcmFtZUVuZFJpZ2h0LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGZyYW1lR2VvbU1lcmdlZC5tZXJnZShmcmFtZUVuZFJpZ2h0Lmdlb21ldHJ5LCBmcmFtZUVuZFJpZ2h0Lm1hdHJpeCk7XG5cbiAgICBsZXQgZnJhbWVFbmRMZWZ0ID0gZnJhbWVFbmRSaWdodC5jbG9uZSgpO1xuICAgIGZyYW1lRW5kTGVmdC5wb3NpdGlvbi54ID0gLWZyYW1lRW5kUmlnaHQucG9zaXRpb24ueDtcbiAgICBmcmFtZUVuZExlZnQudXBkYXRlTWF0cml4KCk7XG4gICAgZnJhbWVHZW9tTWVyZ2VkLm1lcmdlKGZyYW1lRW5kTGVmdC5nZW9tZXRyeSwgZnJhbWVFbmRMZWZ0Lm1hdHJpeCk7XG5cbiAgICBsZXQgZnJhbWVTcG9rZUdlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMSwgMC41LCAxMik7XG4gICAgbGV0IGZyYW1lU3Bva2VSaWdodCA9IG5ldyBUSFJFRS5NZXNoKGZyYW1lU3Bva2VHZW9tLCBnbGFzc2VzTWF0KTtcbiAgICBmcmFtZVNwb2tlUmlnaHQuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oOCwgMywgLTUuNSkpO1xuICAgIGZyYW1lU3Bva2VSaWdodC51cGRhdGVNYXRyaXgoKTtcbiAgICBmcmFtZUdlb21NZXJnZWQubWVyZ2UoZnJhbWVTcG9rZVJpZ2h0Lmdlb21ldHJ5LCBmcmFtZVNwb2tlUmlnaHQubWF0cml4KTtcblxuICAgIGxldCBmcmFtZVNwb2tlTGVmdCA9IGZyYW1lU3Bva2VSaWdodC5jbG9uZSgpO1xuICAgIGZyYW1lU3Bva2VMZWZ0LnBvc2l0aW9uLnggPSAtZnJhbWVTcG9rZVJpZ2h0LnBvc2l0aW9uLng7XG4gICAgZnJhbWVTcG9rZUxlZnQudXBkYXRlTWF0cml4KCk7XG4gICAgZnJhbWVHZW9tTWVyZ2VkLm1lcmdlKGZyYW1lU3Bva2VMZWZ0Lmdlb21ldHJ5LCBmcmFtZVNwb2tlTGVmdC5tYXRyaXgpO1xuXG4gICAgbGV0IGZyYW1lTWVyZ2VkID0gbmV3IFRIUkVFLk1lc2goZnJhbWVHZW9tTWVyZ2VkLCBnbGFzc2VzTWF0KTtcbiAgICBmcmFtZU1lcmdlZC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgZnJhbWVNZXJnZWQucmVjZWl2ZVNoYWRvdyA9IHRydWU7XG5cbiAgICB0aGlzLmdsYXNzZXMuYWRkKGZyYW1lTWVyZ2VkKTtcblxuICB9XG5cbiAgSGFpcigpIHtcblxuICAgIHRoaXMuaGFpciA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgIHRoaXMuaGFpci5wb3NpdGlvbi5zZXQoMCwgOSwgMCk7XG4gICAgdGhpcy5oZWFkLmFkZCh0aGlzLmhhaXIpO1xuXG4gICAgbGV0IGhhaXJHZW9tTWVyZ2VkID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XG5cbiAgICBsZXQgaGFpckZsYXRHZW9tID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDEwLCAyLCAxOCk7XG5cbiAgICBsZXQgaGFpcjEgPSBuZXcgVEhSRUUuTWVzaChoYWlyRmxhdEdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgaGFpcjEuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25aKC1NYXRoLlBJIC8gNDApKTtcbiAgICBoYWlyMS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigtNCwgLTAuNSwgMCkpO1xuICAgIGhhaXIxLnVwZGF0ZU1hdHJpeCgpO1xuICAgIGhhaXJHZW9tTWVyZ2VkLm1lcmdlKGhhaXIxLmdlb21ldHJ5LCBoYWlyMS5tYXRyaXgpO1xuXG4gICAgbGV0IGhhaXIyID0gbmV3IFRIUkVFLk1lc2goaGFpckZsYXRHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGhhaXIyLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWigtTWF0aC5QSSAvIDEwKSk7XG4gICAgaGFpcjIuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oLTIsIDEsIDApKTtcbiAgICBoYWlyMi51cGRhdGVNYXRyaXgoKTtcbiAgICBoYWlyR2VvbU1lcmdlZC5tZXJnZShoYWlyMi5nZW9tZXRyeSwgaGFpcjIubWF0cml4KTtcblxuICAgIGxldCBoYWlyMyA9IG5ldyBUSFJFRS5NZXNoKGhhaXJGbGF0R2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBoYWlyMy5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblooLU1hdGguUEkgLyA1KSk7XG4gICAgaGFpcjMuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oMiwgMSwgMCkpO1xuICAgIGhhaXIzLnVwZGF0ZU1hdHJpeCgpO1xuICAgIGhhaXJHZW9tTWVyZ2VkLm1lcmdlKGhhaXIzLmdlb21ldHJ5LCBoYWlyMy5tYXRyaXgpO1xuXG4gICAgbGV0IGhhaXI0ID0gbmV3IFRIUkVFLk1lc2goaGFpckZsYXRHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGhhaXI0LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWigtTWF0aC5QSSAvIDQpKTtcbiAgICBoYWlyNC5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbig2LCAwLCAwKSk7XG4gICAgaGFpcjQudXBkYXRlTWF0cml4KCk7XG4gICAgaGFpckdlb21NZXJnZWQubWVyZ2UoaGFpcjQuZ2VvbWV0cnksIGhhaXI0Lm1hdHJpeCk7XG5cbiAgICBsZXQgaGFpcjYgPSBuZXcgVEhSRUUuTWVzaChoYWlyRmxhdEdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgaGFpcjYuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25aKC1NYXRoLlBJIC8gLTMpKTtcbiAgICBoYWlyNi5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigtNy43NSwgLS41LCAwKSk7XG4gICAgaGFpcjYudXBkYXRlTWF0cml4KCk7XG4gICAgaGFpckdlb21NZXJnZWQubWVyZ2UoaGFpcjYuZ2VvbWV0cnksIGhhaXI2Lm1hdHJpeCk7XG5cbiAgICBsZXQgaGFpckZsYXRCYWNrR2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgxOCwgNywgNik7XG4gICAgaGFpckZsYXRCYWNrR2VvbS52ZXJ0aWNlc1swXS54IC09IDE7XG4gICAgaGFpckZsYXRCYWNrR2VvbS52ZXJ0aWNlc1sxXS54IC09IDE7XG4gICAgaGFpckZsYXRCYWNrR2VvbS52ZXJ0aWNlc1s0XS54ICs9IDE7XG4gICAgaGFpckZsYXRCYWNrR2VvbS52ZXJ0aWNlc1s1XS54ICs9IDE7XG5cbiAgICBsZXQgaGFpcjUgPSBuZXcgVEhSRUUuTWVzaChoYWlyRmxhdEJhY2tHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGhhaXI1LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDAsIC00LjUsIC02KSk7XG4gICAgaGFpcjUudXBkYXRlTWF0cml4KCk7XG4gICAgaGFpckdlb21NZXJnZWQubWVyZ2UoaGFpcjUuZ2VvbWV0cnksIGhhaXI1Lm1hdHJpeCk7XG5cbiAgICBsZXQgaGFpck1lcmdlZCA9IG5ldyBUSFJFRS5NZXNoKGhhaXJHZW9tTWVyZ2VkLCBNYXQud2hpdGVNYXQpO1xuICAgIGhhaXJNZXJnZWQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIGhhaXJNZXJnZWQucmVjZWl2ZVNoYWRvdyA9IHRydWU7XG5cbiAgICB0aGlzLmhhaXIuYWRkKGhhaXJNZXJnZWQpO1xuXG4gIH1cblxuICBFeWVzKCkge1xuXG4gICAgdGhpcy5leWVzID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgdGhpcy5leWVzLnBvc2l0aW9uLnNldCgwLCAzLCA5KTtcbiAgICB0aGlzLmhlYWQuYWRkKHRoaXMuZXllcyk7XG5cbiAgICBsZXQgZXllV2hpdGVHZW9tID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoMi41LCAyLjUpO1xuXG4gICAgbGV0IGV5ZVdoaXRlUmlnaHQgPSBuZXcgVEhSRUUuTWVzaChleWVXaGl0ZUdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgZXllV2hpdGVSaWdodC5wb3NpdGlvbi5zZXQoLTMuNzUsIDAsIDApO1xuICAgIGV5ZVdoaXRlUmlnaHQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIGV5ZVdoaXRlUmlnaHQucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgbGV0IGV5ZUJsdWVHZW9tID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoMS41LCAxLjUpO1xuXG4gICAgbGV0IGV5ZU1hdCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy5leWUsIGZsYXRTaGFkaW5nOiB0cnVlfSk7XG5cbiAgICB0aGlzLmV5ZUJsdWVSaWdodCA9IG5ldyBUSFJFRS5NZXNoKGV5ZUJsdWVHZW9tLCBleWVNYXQpO1xuICAgIHRoaXMuZXllQmx1ZVJpZ2h0LnBvc2l0aW9uLnNldCgwLCAwLCAuMDEpO1xuICAgIHRoaXMuZXllQmx1ZVJpZ2h0LmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICB0aGlzLmV5ZUJsdWVSaWdodC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICBleWVXaGl0ZVJpZ2h0LmFkZCh0aGlzLmV5ZUJsdWVSaWdodCk7XG5cbiAgICBsZXQgZXllUHVwaWxHZW9tID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoMSwgMSk7XG5cbiAgICB0aGlzLmV5ZVB1cGlsUmlnaHQgPSBuZXcgVEhSRUUuTWVzaChleWVQdXBpbEdlb20sIE1hdC5ibGFja01hdCk7XG4gICAgdGhpcy5leWVQdXBpbFJpZ2h0LnBvc2l0aW9uLnNldCgwLCAwLCAuMDIpO1xuICAgIHRoaXMuZXllUHVwaWxSaWdodC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgdGhpcy5leWVQdXBpbFJpZ2h0LnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIHRoaXMuZXllQmx1ZVJpZ2h0LmFkZCh0aGlzLmV5ZVB1cGlsUmlnaHQpO1xuXG4gICAgbGV0IGV5ZVdoaXRlTGVmdCA9IG5ldyBUSFJFRS5NZXNoKGV5ZVdoaXRlR2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBleWVXaGl0ZUxlZnQucG9zaXRpb24uc2V0KDMuNzUsIDAsIDApO1xuICAgIGV5ZVdoaXRlTGVmdC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgZXllV2hpdGVMZWZ0LnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIHRoaXMuZXllQmx1ZUxlZnQgPSBuZXcgVEhSRUUuTWVzaChleWVCbHVlR2VvbSwgZXllTWF0KTtcbiAgICB0aGlzLmV5ZUJsdWVMZWZ0LnBvc2l0aW9uLnNldCgwLCAwLCAuMDEpO1xuICAgIHRoaXMuZXllQmx1ZUxlZnQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIHRoaXMuZXllQmx1ZUxlZnQucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgZXllV2hpdGVMZWZ0LmFkZCh0aGlzLmV5ZUJsdWVMZWZ0KTtcblxuICAgIHRoaXMuZXllUHVwaWxMZWZ0ID0gbmV3IFRIUkVFLk1lc2goZXllUHVwaWxHZW9tLCBNYXQuYmxhY2tNYXQpO1xuICAgIHRoaXMuZXllUHVwaWxMZWZ0LnBvc2l0aW9uLnNldCgwLCAwLCAuMDIpO1xuICAgIHRoaXMuZXllUHVwaWxMZWZ0LmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICB0aGlzLmV5ZVB1cGlsTGVmdC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICB0aGlzLmV5ZUJsdWVMZWZ0LmFkZCh0aGlzLmV5ZVB1cGlsTGVmdCk7XG5cbiAgICB0aGlzLmV5ZXMuYWRkKGV5ZVdoaXRlUmlnaHQsIGV5ZVdoaXRlTGVmdCk7XG4gIH1cblxuICBFeWVCcm93cygpIHtcbiAgICB0aGlzLmV5ZUJyb3dzID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgdGhpcy5leWVCcm93cy5wb3NpdGlvbi5zZXQoMCwgNiwgOCk7XG4gICAgdGhpcy5oZWFkLmFkZCh0aGlzLmV5ZUJyb3dzKTtcblxuICAgIGxldCBleWVCcm93R2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSg0LCAxLCAxKTtcblxuICAgIHRoaXMuZXllQnJvd1JpZ2h0ID0gbmV3IFRIUkVFLk1lc2goZXllQnJvd0dlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgdGhpcy5leWVCcm93UmlnaHQuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25aKE1hdGguUEkgLyA0NSkpO1xuICAgIHRoaXMuZXllQnJvd1JpZ2h0LnBvc2l0aW9uLnNldCgtMy43NSwgMCwgMCk7XG4gICAgdGhpcy5leWVCcm93UmlnaHQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIHRoaXMuZXllQnJvd1JpZ2h0LnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIHRoaXMuZXllQnJvd0xlZnQgPSBuZXcgVEhSRUUuTWVzaChleWVCcm93R2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICB0aGlzLmV5ZUJyb3dMZWZ0LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWigtTWF0aC5QSSAvIDQ1KSk7XG4gICAgdGhpcy5leWVCcm93TGVmdC5wb3NpdGlvbi5zZXQoMy43NSwgMCwgMCk7XG4gICAgdGhpcy5leWVCcm93TGVmdC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgdGhpcy5leWVCcm93TGVmdC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICB0aGlzLmV5ZUJyb3dzLmFkZCh0aGlzLmV5ZUJyb3dSaWdodCwgdGhpcy5leWVCcm93TGVmdCk7XG4gIH1cblxuICBIYXQoKSB7XG4gICAgdGhpcy5oYXQgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICB0aGlzLmhhdC5wb3NpdGlvbi5zZXQoLTAuMiwgMTEsIDIuNCk7XG4gICAgdGhpcy5oZWFkLmFkZCh0aGlzLmhhdCk7XG5cbiAgICBsZXQgaGF0TWF0ID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHtjb2xvcjogQ29sb3JzLmhhdCwgZmxhdFNoYWRpbmc6IHRydWV9KTtcblxuICAgIGxldCBiYW5kR2VvbSA9IG5ldyBUSFJFRS5Ub3J1c0dlb21ldHJ5KDksIDIsIDE2LCAxMDApO1xuICAgIGxldCBiaWdDb25lR2VvbSA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KDEsIDExLCAxMiwgMTUpO1xuICAgIGxldCBzbWFsbENvbmVHZW9tID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoMC44LCAzLCA5LCAzMik7XG4gICAgbGV0IGhhdERpbmdsZUdlb20gPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoMS41LCA4LCA4KTtcblxuICAgIHRoaXMuYmFuZCA9IG5ldyBUSFJFRS5NZXNoKGJhbmRHZW9tLCBNYXQudGVldGhNYXQpO1xuICAgIHRoaXMuYmFuZC5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblgoTWF0aC5QSSAvIDIpKTtcbiAgICB0aGlzLmJhbmQucG9zaXRpb24uc2V0KDAsIDAsIDApO1xuICAgIHRoaXMuYmFuZC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgdGhpcy5iYW5kLnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIHRoaXMuYmlnQ29uZSA9IG5ldyBUSFJFRS5NZXNoKGJpZ0NvbmVHZW9tLCBoYXRNYXQpO1xuICAgIHRoaXMuYmlnQ29uZS5wb3NpdGlvbi5zZXQoMCwgNiwgMCk7XG4gICAgdGhpcy5iaWdDb25lLmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICB0aGlzLmJpZ0NvbmUucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgdGhpcy5zbWFsbENvbmUgPSBuZXcgVEhSRUUuTWVzaChzbWFsbENvbmVHZW9tLCBoYXRNYXQpO1xuICAgIHRoaXMuc21hbGxDb25lLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWChNYXRoLlBJIC8gMikpO1xuICAgIHRoaXMuc21hbGxDb25lLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWShNYXRoLlBJIC8gMikpO1xuICAgIHRoaXMuc21hbGxDb25lLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWihNYXRoLlBJIC8gLTgpKTtcbiAgICB0aGlzLnNtYWxsQ29uZS5wb3NpdGlvbi5zZXQoNCwgNy44LCAtMSk7XG4gICAgdGhpcy5zbWFsbENvbmUuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIHRoaXMuc21hbGxDb25lLnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIHRoaXMuaGF0RGluZ2xlID0gbmV3IFRIUkVFLk1lc2goaGF0RGluZ2xlR2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICB0aGlzLmhhdERpbmdsZS5wb3NpdGlvbi5zZXQoOSwgNS41LCAtMSk7XG4gICAgdGhpcy5oYXREaW5nbGUuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIHRoaXMuaGF0RGluZ2xlLnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIHRoaXMuaGF0LmFkZCh0aGlzLmJhbmQsIHRoaXMuYmlnQ29uZSwgdGhpcy5zbWFsbENvbmUsIHRoaXMuaGF0RGluZ2xlKTtcbiAgfVxuXG4gIEZyZWNrbGVzKCkge1xuICAgIHRoaXMuZnJlY2tsZXMgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICB0aGlzLmZyZWNrbGVzLnBvc2l0aW9uLnNldCgwLCAwLCA4KTtcbiAgICB0aGlzLmhlYWQuYWRkKHRoaXMuZnJlY2tsZXMpO1xuXG4gICAgbGV0IGZyZWNrbGVzTWF0ID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoe2NvbG9yOiBDb2xvcnMuZnJlY2tsZXMsIGZsYXRTaGFkaW5nOiB0cnVlfSk7XG4gICAgbGV0IGZyZWNrbGVzR2VvbU1lcmdlZCA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xuXG4gICAgbGV0IGZyZWNrbGVzR2VvbSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KDAuNSwgMC41KTtcblxuICAgIGxldCBmcmVja2xlMSA9IG5ldyBUSFJFRS5NZXNoKGZyZWNrbGVzR2VvbSwgZnJlY2tsZXNNYXQpO1xuICAgIGZyZWNrbGUxLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKC01LCAwLCAwLjAxKSk7XG4gICAgZnJlY2tsZTEudXBkYXRlTWF0cml4KCk7XG4gICAgZnJlY2tsZXNHZW9tTWVyZ2VkLm1lcmdlKGZyZWNrbGUxLmdlb21ldHJ5LCBmcmVja2xlMS5tYXRyaXgpO1xuXG4gICAgbGV0IGZyZWNrbGUyID0gZnJlY2tsZTEuY2xvbmUoKTtcbiAgICBmcmVja2xlMi5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigtMC41LCAtMSwgMCkpO1xuICAgIGZyZWNrbGUyLnVwZGF0ZU1hdHJpeCgpO1xuICAgIGZyZWNrbGVzR2VvbU1lcmdlZC5tZXJnZShmcmVja2xlMi5nZW9tZXRyeSwgZnJlY2tsZTIubWF0cml4KTtcblxuICAgIGxldCBmcmVja2xlMyA9IGZyZWNrbGUxLmNsb25lKCk7XG4gICAgZnJlY2tsZTMuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oMSwgLTAuNSwgMCkpO1xuICAgIGZyZWNrbGUzLnVwZGF0ZU1hdHJpeCgpO1xuICAgIGZyZWNrbGVzR2VvbU1lcmdlZC5tZXJnZShmcmVja2xlMy5nZW9tZXRyeSwgZnJlY2tsZTMubWF0cml4KTtcblxuICAgIGxldCBmcmVja2xlNCA9IGZyZWNrbGUxLmNsb25lKCk7XG4gICAgZnJlY2tsZTQucG9zaXRpb24ueCA9IC1mcmVja2xlMS5wb3NpdGlvbi54O1xuICAgIGZyZWNrbGU0LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGZyZWNrbGVzR2VvbU1lcmdlZC5tZXJnZShmcmVja2xlNC5nZW9tZXRyeSwgZnJlY2tsZTQubWF0cml4KTtcbiAgICBsZXQgZnJlY2tsZTUgPSBmcmVja2xlMi5jbG9uZSgpO1xuICAgIGZyZWNrbGU1LnBvc2l0aW9uLnggPSAtZnJlY2tsZTIucG9zaXRpb24ueDtcbiAgICBmcmVja2xlNS51cGRhdGVNYXRyaXgoKTtcbiAgICBmcmVja2xlc0dlb21NZXJnZWQubWVyZ2UoZnJlY2tsZTUuZ2VvbWV0cnksIGZyZWNrbGU1Lm1hdHJpeCk7XG4gICAgbGV0IGZyZWNrbGU2ID0gZnJlY2tsZTMuY2xvbmUoKTtcbiAgICBmcmVja2xlNi5wb3NpdGlvbi54ID0gLWZyZWNrbGUzLnBvc2l0aW9uLng7XG4gICAgZnJlY2tsZTYudXBkYXRlTWF0cml4KCk7XG4gICAgZnJlY2tsZXNHZW9tTWVyZ2VkLm1lcmdlKGZyZWNrbGU2Lmdlb21ldHJ5LCBmcmVja2xlNi5tYXRyaXgpO1xuXG4gICAgbGV0IGZyZWNrbGVkTWVyZ2VkID0gbmV3IFRIUkVFLk1lc2goZnJlY2tsZXNHZW9tTWVyZ2VkLCBmcmVja2xlc01hdCk7XG4gICAgZnJlY2tsZWRNZXJnZWQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIGZyZWNrbGVkTWVyZ2VkLnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIHRoaXMuZnJlY2tsZXMuYWRkKGZyZWNrbGVkTWVyZ2VkKTtcbiAgfVxuXG4gIEZlYXR1cmVzKCkge1xuICAgIGxldCBlYXJHZW9tID0gbmV3IFRIUkVFLkJveEJ1ZmZlckdlb21ldHJ5KDEuNSwgMywgMS41KTtcbiAgICBsZXQgc2tpbk1hdCA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHtjb2xvcjogQ29sb3JzLnNraW4sIGZsYXRTaGFkaW5nOiB0cnVlfSk7XG4gICAgbGV0IGVhclJpZ2h0ID0gbmV3IFRIUkVFLk1lc2goZWFyR2VvbSwgc2tpbk1hdCk7XG4gICAgZWFyUmlnaHQucG9zaXRpb24uc2V0KC04LjUsIDEsIDMpO1xuICAgIGVhclJpZ2h0LmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICBlYXJSaWdodC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICBsZXQgZWFyTGVmdCA9IG5ldyBUSFJFRS5NZXNoKGVhckdlb20sIHNraW5NYXQpO1xuICAgIGVhckxlZnQucG9zaXRpb24uc2V0KDguNSwgMSwgMyk7XG4gICAgZWFyTGVmdC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgZWFyTGVmdC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICBsZXQgbm9zZUdlb20gPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeSgxLCAyLCA0LCA0KTtcbiAgICBsZXQgbm9zZSA9IG5ldyBUSFJFRS5NZXNoKG5vc2VHZW9tLCBza2luTWF0KTtcbiAgICBub3NlLnNjYWxlLnNldCguNzUsIDEsIDEuMyk7XG4gICAgbm9zZS5wb3NpdGlvbi5zZXQoMCwgMSwgOCk7XG4gICAgbm9zZS5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgbm9zZS5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICB0aGlzLmhlYWQuYWRkKGVhclJpZ2h0LCBlYXJMZWZ0LCBub3NlKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NsYXNzZXMvSGVhZC5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJhbmRvbUZyb21TZWVkID0gcmVxdWlyZSgnLi9yYW5kb20vcmFuZG9tLWZyb20tc2VlZCcpO1xuXG52YXIgT1JJR0lOQUwgPSAnMDEyMzQ1Njc4OWFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpfLSc7XG52YXIgYWxwaGFiZXQ7XG52YXIgcHJldmlvdXNTZWVkO1xuXG52YXIgc2h1ZmZsZWQ7XG5cbmZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIHNodWZmbGVkID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHNldENoYXJhY3RlcnMoX2FscGhhYmV0Xykge1xuICAgIGlmICghX2FscGhhYmV0Xykge1xuICAgICAgICBpZiAoYWxwaGFiZXQgIT09IE9SSUdJTkFMKSB7XG4gICAgICAgICAgICBhbHBoYWJldCA9IE9SSUdJTkFMO1xuICAgICAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKF9hbHBoYWJldF8gPT09IGFscGhhYmV0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoX2FscGhhYmV0Xy5sZW5ndGggIT09IE9SSUdJTkFMLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0N1c3RvbSBhbHBoYWJldCBmb3Igc2hvcnRpZCBtdXN0IGJlICcgKyBPUklHSU5BTC5sZW5ndGggKyAnIHVuaXF1ZSBjaGFyYWN0ZXJzLiBZb3Ugc3VibWl0dGVkICcgKyBfYWxwaGFiZXRfLmxlbmd0aCArICcgY2hhcmFjdGVyczogJyArIF9hbHBoYWJldF8pO1xuICAgIH1cblxuICAgIHZhciB1bmlxdWUgPSBfYWxwaGFiZXRfLnNwbGl0KCcnKS5maWx0ZXIoZnVuY3Rpb24oaXRlbSwgaW5kLCBhcnIpe1xuICAgICAgIHJldHVybiBpbmQgIT09IGFyci5sYXN0SW5kZXhPZihpdGVtKTtcbiAgICB9KTtcblxuICAgIGlmICh1bmlxdWUubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ3VzdG9tIGFscGhhYmV0IGZvciBzaG9ydGlkIG11c3QgYmUgJyArIE9SSUdJTkFMLmxlbmd0aCArICcgdW5pcXVlIGNoYXJhY3RlcnMuIFRoZXNlIGNoYXJhY3RlcnMgd2VyZSBub3QgdW5pcXVlOiAnICsgdW5pcXVlLmpvaW4oJywgJykpO1xuICAgIH1cblxuICAgIGFscGhhYmV0ID0gX2FscGhhYmV0XztcbiAgICByZXNldCgpO1xufVxuXG5mdW5jdGlvbiBjaGFyYWN0ZXJzKF9hbHBoYWJldF8pIHtcbiAgICBzZXRDaGFyYWN0ZXJzKF9hbHBoYWJldF8pO1xuICAgIHJldHVybiBhbHBoYWJldDtcbn1cblxuZnVuY3Rpb24gc2V0U2VlZChzZWVkKSB7XG4gICAgcmFuZG9tRnJvbVNlZWQuc2VlZChzZWVkKTtcbiAgICBpZiAocHJldmlvdXNTZWVkICE9PSBzZWVkKSB7XG4gICAgICAgIHJlc2V0KCk7XG4gICAgICAgIHByZXZpb3VzU2VlZCA9IHNlZWQ7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzaHVmZmxlKCkge1xuICAgIGlmICghYWxwaGFiZXQpIHtcbiAgICAgICAgc2V0Q2hhcmFjdGVycyhPUklHSU5BTCk7XG4gICAgfVxuXG4gICAgdmFyIHNvdXJjZUFycmF5ID0gYWxwaGFiZXQuc3BsaXQoJycpO1xuICAgIHZhciB0YXJnZXRBcnJheSA9IFtdO1xuICAgIHZhciByID0gcmFuZG9tRnJvbVNlZWQubmV4dFZhbHVlKCk7XG4gICAgdmFyIGNoYXJhY3RlckluZGV4O1xuXG4gICAgd2hpbGUgKHNvdXJjZUFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgciA9IHJhbmRvbUZyb21TZWVkLm5leHRWYWx1ZSgpO1xuICAgICAgICBjaGFyYWN0ZXJJbmRleCA9IE1hdGguZmxvb3IociAqIHNvdXJjZUFycmF5Lmxlbmd0aCk7XG4gICAgICAgIHRhcmdldEFycmF5LnB1c2goc291cmNlQXJyYXkuc3BsaWNlKGNoYXJhY3RlckluZGV4LCAxKVswXSk7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXRBcnJheS5qb2luKCcnKTtcbn1cblxuZnVuY3Rpb24gZ2V0U2h1ZmZsZWQoKSB7XG4gICAgaWYgKHNodWZmbGVkKSB7XG4gICAgICAgIHJldHVybiBzaHVmZmxlZDtcbiAgICB9XG4gICAgc2h1ZmZsZWQgPSBzaHVmZmxlKCk7XG4gICAgcmV0dXJuIHNodWZmbGVkO1xufVxuXG4vKipcbiAqIGxvb2t1cCBzaHVmZmxlZCBsZXR0ZXJcbiAqIEBwYXJhbSBpbmRleFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gbG9va3VwKGluZGV4KSB7XG4gICAgdmFyIGFscGhhYmV0U2h1ZmZsZWQgPSBnZXRTaHVmZmxlZCgpO1xuICAgIHJldHVybiBhbHBoYWJldFNodWZmbGVkW2luZGV4XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgY2hhcmFjdGVyczogY2hhcmFjdGVycyxcbiAgICBzZWVkOiBzZXRTZWVkLFxuICAgIGxvb2t1cDogbG9va3VwLFxuICAgIHNodWZmbGVkOiBnZXRTaHVmZmxlZFxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Nob3J0aWQvbGliL2FscGhhYmV0LmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBDb2xvcnMgZnJvbSAnLi9jb2xvcnMnO1xuY29uc3QgTWF0ZXJpYWxzID0ge1xuICBcIndoaXRlTWF0XCI6IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHtjb2xvcjogQ29sb3JzLndoaXRlLCBmbGF0U2hhZGluZzogdHJ1ZX0pLFxuICBcInRlZXRoTWF0XCI6IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy50ZWV0aCwgZmxhdFNoYWRpbmc6IHRydWV9KSxcbiAgXCJibGFja01hdFwiOiBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy5ibGFjaywgZmxhdFNoYWRpbmc6IHRydWV9KSxcbiAgXCJub3JtYWxNYXRcIjogbmV3IFRIUkVFLk1lc2hOb3JtYWxNYXRlcmlhbCh7fSlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1hdGVyaWFscztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9vYmplY3RzL01hdGVyaWFscy5qcyIsIihmdW5jdGlvbihzZWxmKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBpZiAoc2VsZi5mZXRjaCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIHN1cHBvcnQgPSB7XG4gICAgc2VhcmNoUGFyYW1zOiAnVVJMU2VhcmNoUGFyYW1zJyBpbiBzZWxmLFxuICAgIGl0ZXJhYmxlOiAnU3ltYm9sJyBpbiBzZWxmICYmICdpdGVyYXRvcicgaW4gU3ltYm9sLFxuICAgIGJsb2I6ICdGaWxlUmVhZGVyJyBpbiBzZWxmICYmICdCbG9iJyBpbiBzZWxmICYmIChmdW5jdGlvbigpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG5ldyBCbG9iKClcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9KSgpLFxuICAgIGZvcm1EYXRhOiAnRm9ybURhdGEnIGluIHNlbGYsXG4gICAgYXJyYXlCdWZmZXI6ICdBcnJheUJ1ZmZlcicgaW4gc2VsZlxuICB9XG5cbiAgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIpIHtcbiAgICB2YXIgdmlld0NsYXNzZXMgPSBbXG4gICAgICAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgICAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDMyQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgRmxvYXQ2NEFycmF5XSdcbiAgICBdXG5cbiAgICB2YXIgaXNEYXRhVmlldyA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiBEYXRhVmlldy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihvYmopXG4gICAgfVxuXG4gICAgdmFyIGlzQXJyYXlCdWZmZXJWaWV3ID0gQXJyYXlCdWZmZXIuaXNWaWV3IHx8IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB2aWV3Q2xhc3Nlcy5pbmRleE9mKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopKSA+IC0xXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplTmFtZShuYW1lKSB7XG4gICAgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgbmFtZSA9IFN0cmluZyhuYW1lKVxuICAgIH1cbiAgICBpZiAoL1teYS16MC05XFwtIyQlJicqKy5cXF5fYHx+XS9pLnRlc3QobmFtZSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgY2hhcmFjdGVyIGluIGhlYWRlciBmaWVsZCBuYW1lJylcbiAgICB9XG4gICAgcmV0dXJuIG5hbWUudG9Mb3dlckNhc2UoKVxuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplVmFsdWUodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgdmFsdWUgPSBTdHJpbmcodmFsdWUpXG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgLy8gQnVpbGQgYSBkZXN0cnVjdGl2ZSBpdGVyYXRvciBmb3IgdGhlIHZhbHVlIGxpc3RcbiAgZnVuY3Rpb24gaXRlcmF0b3JGb3IoaXRlbXMpIHtcbiAgICB2YXIgaXRlcmF0b3IgPSB7XG4gICAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gaXRlbXMuc2hpZnQoKVxuICAgICAgICByZXR1cm4ge2RvbmU6IHZhbHVlID09PSB1bmRlZmluZWQsIHZhbHVlOiB2YWx1ZX1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VwcG9ydC5pdGVyYWJsZSkge1xuICAgICAgaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaXRlcmF0b3JcbiAgfVxuXG4gIGZ1bmN0aW9uIEhlYWRlcnMoaGVhZGVycykge1xuICAgIHRoaXMubWFwID0ge31cblxuICAgIGlmIChoZWFkZXJzIGluc3RhbmNlb2YgSGVhZGVycykge1xuICAgICAgaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKG5hbWUsIHZhbHVlKVxuICAgICAgfSwgdGhpcylcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoaGVhZGVycykpIHtcbiAgICAgIGhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbihoZWFkZXIpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQoaGVhZGVyWzBdLCBoZWFkZXJbMV0pXG4gICAgICB9LCB0aGlzKVxuICAgIH0gZWxzZSBpZiAoaGVhZGVycykge1xuICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaGVhZGVycykuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKG5hbWUsIGhlYWRlcnNbbmFtZV0pXG4gICAgICB9LCB0aGlzKVxuICAgIH1cbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgbmFtZSA9IG5vcm1hbGl6ZU5hbWUobmFtZSlcbiAgICB2YWx1ZSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKVxuICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMubWFwW25hbWVdXG4gICAgdGhpcy5tYXBbbmFtZV0gPSBvbGRWYWx1ZSA/IG9sZFZhbHVlKycsJyt2YWx1ZSA6IHZhbHVlXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMubWFwW25vcm1hbGl6ZU5hbWUobmFtZSldXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgbmFtZSA9IG5vcm1hbGl6ZU5hbWUobmFtZSlcbiAgICByZXR1cm4gdGhpcy5oYXMobmFtZSkgPyB0aGlzLm1hcFtuYW1lXSA6IG51bGxcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAuaGFzT3duUHJvcGVydHkobm9ybWFsaXplTmFtZShuYW1lKSlcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgdGhpcy5tYXBbbm9ybWFsaXplTmFtZShuYW1lKV0gPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbihjYWxsYmFjaywgdGhpc0FyZykge1xuICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcy5tYXApIHtcbiAgICAgIGlmICh0aGlzLm1hcC5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHRoaXMubWFwW25hbWVdLCBuYW1lLCB0aGlzKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXVxuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkgeyBpdGVtcy5wdXNoKG5hbWUpIH0pXG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1zID0gW11cbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHsgaXRlbXMucHVzaCh2YWx1ZSkgfSlcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5lbnRyaWVzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1zID0gW11cbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHsgaXRlbXMucHVzaChbbmFtZSwgdmFsdWVdKSB9KVxuICAgIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbiAgfVxuXG4gIGlmIChzdXBwb3J0Lml0ZXJhYmxlKSB7XG4gICAgSGVhZGVycy5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXSA9IEhlYWRlcnMucHJvdG90eXBlLmVudHJpZXNcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnN1bWVkKGJvZHkpIHtcbiAgICBpZiAoYm9keS5ib2R5VXNlZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoJ0FscmVhZHkgcmVhZCcpKVxuICAgIH1cbiAgICBib2R5LmJvZHlVc2VkID0gdHJ1ZVxuICB9XG5cbiAgZnVuY3Rpb24gZmlsZVJlYWRlclJlYWR5KHJlYWRlcikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVzb2x2ZShyZWFkZXIucmVzdWx0KVxuICAgICAgfVxuICAgICAgcmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KHJlYWRlci5lcnJvcilcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEJsb2JBc0FycmF5QnVmZmVyKGJsb2IpIHtcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgIHZhciBwcm9taXNlID0gZmlsZVJlYWRlclJlYWR5KHJlYWRlcilcbiAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoYmxvYilcbiAgICByZXR1cm4gcHJvbWlzZVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEJsb2JBc1RleHQoYmxvYikge1xuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgdmFyIHByb21pc2UgPSBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKVxuICAgIHJlYWRlci5yZWFkQXNUZXh0KGJsb2IpXG4gICAgcmV0dXJuIHByb21pc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWRBcnJheUJ1ZmZlckFzVGV4dChidWYpIHtcbiAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1ZilcbiAgICB2YXIgY2hhcnMgPSBuZXcgQXJyYXkodmlldy5sZW5ndGgpXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZpZXcubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoYXJzW2ldID0gU3RyaW5nLmZyb21DaGFyQ29kZSh2aWV3W2ldKVxuICAgIH1cbiAgICByZXR1cm4gY2hhcnMuam9pbignJylcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1ZmZlckNsb25lKGJ1Zikge1xuICAgIGlmIChidWYuc2xpY2UpIHtcbiAgICAgIHJldHVybiBidWYuc2xpY2UoMClcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShidWYuYnl0ZUxlbmd0aClcbiAgICAgIHZpZXcuc2V0KG5ldyBVaW50OEFycmF5KGJ1ZikpXG4gICAgICByZXR1cm4gdmlldy5idWZmZXJcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBCb2R5KCkge1xuICAgIHRoaXMuYm9keVVzZWQgPSBmYWxzZVxuXG4gICAgdGhpcy5faW5pdEJvZHkgPSBmdW5jdGlvbihib2R5KSB7XG4gICAgICB0aGlzLl9ib2R5SW5pdCA9IGJvZHlcbiAgICAgIGlmICghYm9keSkge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9ICcnXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5ibG9iICYmIEJsb2IucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUJsb2IgPSBib2R5XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuZm9ybURhdGEgJiYgRm9ybURhdGEucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUZvcm1EYXRhID0gYm9keVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LnNlYXJjaFBhcmFtcyAmJiBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSBib2R5LnRvU3RyaW5nKClcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlciAmJiBzdXBwb3J0LmJsb2IgJiYgaXNEYXRhVmlldyhib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIgPSBidWZmZXJDbG9uZShib2R5LmJ1ZmZlcilcbiAgICAgICAgLy8gSUUgMTAtMTEgY2FuJ3QgaGFuZGxlIGEgRGF0YVZpZXcgYm9keS5cbiAgICAgICAgdGhpcy5fYm9keUluaXQgPSBuZXcgQmxvYihbdGhpcy5fYm9keUFycmF5QnVmZmVyXSlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlciAmJiAoQXJyYXlCdWZmZXIucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkgfHwgaXNBcnJheUJ1ZmZlclZpZXcoYm9keSkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlBcnJheUJ1ZmZlciA9IGJ1ZmZlckNsb25lKGJvZHkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vuc3VwcG9ydGVkIEJvZHlJbml0IHR5cGUnKVxuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYm9keSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCAndGV4dC9wbGFpbjtjaGFyc2V0PVVURi04JylcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QmxvYiAmJiB0aGlzLl9ib2R5QmxvYi50eXBlKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgdGhpcy5fYm9keUJsb2IudHlwZSlcbiAgICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LnNlYXJjaFBhcmFtcyAmJiBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9VVRGLTgnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cHBvcnQuYmxvYikge1xuICAgICAgdGhpcy5ibG9iID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpXG4gICAgICAgIGlmIChyZWplY3RlZCkge1xuICAgICAgICAgIHJldHVybiByZWplY3RlZFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2JvZHlCbG9iKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5QmxvYilcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBCbG9iKFt0aGlzLl9ib2R5QXJyYXlCdWZmZXJdKSlcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5Rm9ybURhdGEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkIG5vdCByZWFkIEZvcm1EYXRhIGJvZHkgYXMgYmxvYicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbdGhpcy5fYm9keVRleHRdKSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmFycmF5QnVmZmVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICByZXR1cm4gY29uc3VtZWQodGhpcykgfHwgUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ibG9iKCkudGhlbihyZWFkQmxvYkFzQXJyYXlCdWZmZXIpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnRleHQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpXG4gICAgICBpZiAocmVqZWN0ZWQpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdGVkXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9ib2R5QmxvYikge1xuICAgICAgICByZXR1cm4gcmVhZEJsb2JBc1RleHQodGhpcy5fYm9keUJsb2IpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlYWRBcnJheUJ1ZmZlckFzVGV4dCh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5Rm9ybURhdGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgcmVhZCBGb3JtRGF0YSBib2R5IGFzIHRleHQnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5VGV4dClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VwcG9ydC5mb3JtRGF0YSkge1xuICAgICAgdGhpcy5mb3JtRGF0YSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50ZXh0KCkudGhlbihkZWNvZGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5qc29uID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy50ZXh0KCkudGhlbihKU09OLnBhcnNlKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICAvLyBIVFRQIG1ldGhvZHMgd2hvc2UgY2FwaXRhbGl6YXRpb24gc2hvdWxkIGJlIG5vcm1hbGl6ZWRcbiAgdmFyIG1ldGhvZHMgPSBbJ0RFTEVURScsICdHRVQnLCAnSEVBRCcsICdPUFRJT05TJywgJ1BPU1QnLCAnUFVUJ11cblxuICBmdW5jdGlvbiBub3JtYWxpemVNZXRob2QobWV0aG9kKSB7XG4gICAgdmFyIHVwY2FzZWQgPSBtZXRob2QudG9VcHBlckNhc2UoKVxuICAgIHJldHVybiAobWV0aG9kcy5pbmRleE9mKHVwY2FzZWQpID4gLTEpID8gdXBjYXNlZCA6IG1ldGhvZFxuICB9XG5cbiAgZnVuY3Rpb24gUmVxdWVzdChpbnB1dCwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gICAgdmFyIGJvZHkgPSBvcHRpb25zLmJvZHlcblxuICAgIGlmIChpbnB1dCBpbnN0YW5jZW9mIFJlcXVlc3QpIHtcbiAgICAgIGlmIChpbnB1dC5ib2R5VXNlZCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBbHJlYWR5IHJlYWQnKVxuICAgICAgfVxuICAgICAgdGhpcy51cmwgPSBpbnB1dC51cmxcbiAgICAgIHRoaXMuY3JlZGVudGlhbHMgPSBpbnB1dC5jcmVkZW50aWFsc1xuICAgICAgaWYgKCFvcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMoaW5wdXQuaGVhZGVycylcbiAgICAgIH1cbiAgICAgIHRoaXMubWV0aG9kID0gaW5wdXQubWV0aG9kXG4gICAgICB0aGlzLm1vZGUgPSBpbnB1dC5tb2RlXG4gICAgICBpZiAoIWJvZHkgJiYgaW5wdXQuX2JvZHlJbml0ICE9IG51bGwpIHtcbiAgICAgICAgYm9keSA9IGlucHV0Ll9ib2R5SW5pdFxuICAgICAgICBpbnB1dC5ib2R5VXNlZCA9IHRydWVcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51cmwgPSBTdHJpbmcoaW5wdXQpXG4gICAgfVxuXG4gICAgdGhpcy5jcmVkZW50aWFscyA9IG9wdGlvbnMuY3JlZGVudGlhbHMgfHwgdGhpcy5jcmVkZW50aWFscyB8fCAnb21pdCdcbiAgICBpZiAob3B0aW9ucy5oZWFkZXJzIHx8ICF0aGlzLmhlYWRlcnMpIHtcbiAgICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdGlvbnMuaGVhZGVycylcbiAgICB9XG4gICAgdGhpcy5tZXRob2QgPSBub3JtYWxpemVNZXRob2Qob3B0aW9ucy5tZXRob2QgfHwgdGhpcy5tZXRob2QgfHwgJ0dFVCcpXG4gICAgdGhpcy5tb2RlID0gb3B0aW9ucy5tb2RlIHx8IHRoaXMubW9kZSB8fCBudWxsXG4gICAgdGhpcy5yZWZlcnJlciA9IG51bGxcblxuICAgIGlmICgodGhpcy5tZXRob2QgPT09ICdHRVQnIHx8IHRoaXMubWV0aG9kID09PSAnSEVBRCcpICYmIGJvZHkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0JvZHkgbm90IGFsbG93ZWQgZm9yIEdFVCBvciBIRUFEIHJlcXVlc3RzJylcbiAgICB9XG4gICAgdGhpcy5faW5pdEJvZHkoYm9keSlcbiAgfVxuXG4gIFJlcXVlc3QucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBSZXF1ZXN0KHRoaXMsIHsgYm9keTogdGhpcy5fYm9keUluaXQgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlY29kZShib2R5KSB7XG4gICAgdmFyIGZvcm0gPSBuZXcgRm9ybURhdGEoKVxuICAgIGJvZHkudHJpbSgpLnNwbGl0KCcmJykuZm9yRWFjaChmdW5jdGlvbihieXRlcykge1xuICAgICAgaWYgKGJ5dGVzKSB7XG4gICAgICAgIHZhciBzcGxpdCA9IGJ5dGVzLnNwbGl0KCc9JylcbiAgICAgICAgdmFyIG5hbWUgPSBzcGxpdC5zaGlmdCgpLnJlcGxhY2UoL1xcKy9nLCAnICcpXG4gICAgICAgIHZhciB2YWx1ZSA9IHNwbGl0LmpvaW4oJz0nKS5yZXBsYWNlKC9cXCsvZywgJyAnKVxuICAgICAgICBmb3JtLmFwcGVuZChkZWNvZGVVUklDb21wb25lbnQobmFtZSksIGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gZm9ybVxuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VIZWFkZXJzKHJhd0hlYWRlcnMpIHtcbiAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKClcbiAgICByYXdIZWFkZXJzLnNwbGl0KC9cXHI/XFxuLykuZm9yRWFjaChmdW5jdGlvbihsaW5lKSB7XG4gICAgICB2YXIgcGFydHMgPSBsaW5lLnNwbGl0KCc6JylcbiAgICAgIHZhciBrZXkgPSBwYXJ0cy5zaGlmdCgpLnRyaW0oKVxuICAgICAgaWYgKGtleSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBwYXJ0cy5qb2luKCc6JykudHJpbSgpXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKGtleSwgdmFsdWUpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gaGVhZGVyc1xuICB9XG5cbiAgQm9keS5jYWxsKFJlcXVlc3QucHJvdG90eXBlKVxuXG4gIGZ1bmN0aW9uIFJlc3BvbnNlKGJvZHlJbml0LCBvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0ge31cbiAgICB9XG5cbiAgICB0aGlzLnR5cGUgPSAnZGVmYXVsdCdcbiAgICB0aGlzLnN0YXR1cyA9ICdzdGF0dXMnIGluIG9wdGlvbnMgPyBvcHRpb25zLnN0YXR1cyA6IDIwMFxuICAgIHRoaXMub2sgPSB0aGlzLnN0YXR1cyA+PSAyMDAgJiYgdGhpcy5zdGF0dXMgPCAzMDBcbiAgICB0aGlzLnN0YXR1c1RleHQgPSAnc3RhdHVzVGV4dCcgaW4gb3B0aW9ucyA/IG9wdGlvbnMuc3RhdHVzVGV4dCA6ICdPSydcbiAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhvcHRpb25zLmhlYWRlcnMpXG4gICAgdGhpcy51cmwgPSBvcHRpb25zLnVybCB8fCAnJ1xuICAgIHRoaXMuX2luaXRCb2R5KGJvZHlJbml0KVxuICB9XG5cbiAgQm9keS5jYWxsKFJlc3BvbnNlLnByb3RvdHlwZSlcblxuICBSZXNwb25zZS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKHRoaXMuX2JvZHlJbml0LCB7XG4gICAgICBzdGF0dXM6IHRoaXMuc3RhdHVzLFxuICAgICAgc3RhdHVzVGV4dDogdGhpcy5zdGF0dXNUZXh0LFxuICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnModGhpcy5oZWFkZXJzKSxcbiAgICAgIHVybDogdGhpcy51cmxcbiAgICB9KVxuICB9XG5cbiAgUmVzcG9uc2UuZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVzcG9uc2UgPSBuZXcgUmVzcG9uc2UobnVsbCwge3N0YXR1czogMCwgc3RhdHVzVGV4dDogJyd9KVxuICAgIHJlc3BvbnNlLnR5cGUgPSAnZXJyb3InXG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH1cblxuICB2YXIgcmVkaXJlY3RTdGF0dXNlcyA9IFszMDEsIDMwMiwgMzAzLCAzMDcsIDMwOF1cblxuICBSZXNwb25zZS5yZWRpcmVjdCA9IGZ1bmN0aW9uKHVybCwgc3RhdHVzKSB7XG4gICAgaWYgKHJlZGlyZWN0U3RhdHVzZXMuaW5kZXhPZihzdGF0dXMpID09PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgc3RhdHVzIGNvZGUnKVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UobnVsbCwge3N0YXR1czogc3RhdHVzLCBoZWFkZXJzOiB7bG9jYXRpb246IHVybH19KVxuICB9XG5cbiAgc2VsZi5IZWFkZXJzID0gSGVhZGVyc1xuICBzZWxmLlJlcXVlc3QgPSBSZXF1ZXN0XG4gIHNlbGYuUmVzcG9uc2UgPSBSZXNwb25zZVxuXG4gIHNlbGYuZmV0Y2ggPSBmdW5jdGlvbihpbnB1dCwgaW5pdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoaW5wdXQsIGluaXQpXG4gICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcblxuICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICBzdGF0dXM6IHhoci5zdGF0dXMsXG4gICAgICAgICAgc3RhdHVzVGV4dDogeGhyLnN0YXR1c1RleHQsXG4gICAgICAgICAgaGVhZGVyczogcGFyc2VIZWFkZXJzKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSB8fCAnJylcbiAgICAgICAgfVxuICAgICAgICBvcHRpb25zLnVybCA9ICdyZXNwb25zZVVSTCcgaW4geGhyID8geGhyLnJlc3BvbnNlVVJMIDogb3B0aW9ucy5oZWFkZXJzLmdldCgnWC1SZXF1ZXN0LVVSTCcpXG4gICAgICAgIHZhciBib2R5ID0gJ3Jlc3BvbnNlJyBpbiB4aHIgPyB4aHIucmVzcG9uc2UgOiB4aHIucmVzcG9uc2VUZXh0XG4gICAgICAgIHJlc29sdmUobmV3IFJlc3BvbnNlKGJvZHksIG9wdGlvbnMpKVxuICAgICAgfVxuXG4gICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QobmV3IFR5cGVFcnJvcignTmV0d29yayByZXF1ZXN0IGZhaWxlZCcpKVxuICAgICAgfVxuXG4gICAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJykpXG4gICAgICB9XG5cbiAgICAgIHhoci5vcGVuKHJlcXVlc3QubWV0aG9kLCByZXF1ZXN0LnVybCwgdHJ1ZSlcblxuICAgICAgaWYgKHJlcXVlc3QuY3JlZGVudGlhbHMgPT09ICdpbmNsdWRlJykge1xuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoJ3Jlc3BvbnNlVHlwZScgaW4geGhyICYmIHN1cHBvcnQuYmxvYikge1xuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2Jsb2InXG4gICAgICB9XG5cbiAgICAgIHJlcXVlc3QuaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsIHZhbHVlKVxuICAgICAgfSlcblxuICAgICAgeGhyLnNlbmQodHlwZW9mIHJlcXVlc3QuX2JvZHlJbml0ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiByZXF1ZXN0Ll9ib2R5SW5pdClcbiAgICB9KVxuICB9XG4gIHNlbGYuZmV0Y2gucG9seWZpbGwgPSB0cnVlXG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy93aGF0d2ctZmV0Y2gvZmV0Y2guanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2luZGV4Jyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaG9ydGlkL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJhbmRvbUJ5dGUgPSByZXF1aXJlKCcuL3JhbmRvbS9yYW5kb20tYnl0ZScpO1xuXG5mdW5jdGlvbiBlbmNvZGUobG9va3VwLCBudW1iZXIpIHtcbiAgICB2YXIgbG9vcENvdW50ZXIgPSAwO1xuICAgIHZhciBkb25lO1xuXG4gICAgdmFyIHN0ciA9ICcnO1xuXG4gICAgd2hpbGUgKCFkb25lKSB7XG4gICAgICAgIHN0ciA9IHN0ciArIGxvb2t1cCggKCAobnVtYmVyID4+ICg0ICogbG9vcENvdW50ZXIpKSAmIDB4MGYgKSB8IHJhbmRvbUJ5dGUoKSApO1xuICAgICAgICBkb25lID0gbnVtYmVyIDwgKE1hdGgucG93KDE2LCBsb29wQ291bnRlciArIDEgKSApO1xuICAgICAgICBsb29wQ291bnRlcisrO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVuY29kZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Nob3J0aWQvbGliL2VuY29kZS5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgSGVhZCBmcm9tICcuL2NsYXNzZXMvSGVhZCc7XG5pbXBvcnQgQ29sb3JzIGZyb20gJy4vb2JqZWN0cy9jb2xvcnMnO1xuaW1wb3J0IEF1ZGlvIGZyb20gJy4vY2xhc3Nlcy9BdWRpby5qcyc7XG5pbXBvcnQgQ2FydEFQSSBmcm9tICcuL2xpYi9jYXJ0QVBJJztcblxue1xuICBsZXQgc2NlbmUsIGNhbWVyYSwgZmllbGRPZlZpZXcsIGFzcGVjdFJhdGlvLCBuZWFyUGxhbmUsIGZhclBsYW5lLCBIRUlHSFQsIFdJRFRIO1xuICBsZXQgZ2xvYmFsTGlnaHQsIHNoYWRvd0xpZ2h0LCBiYWNrTGlnaHQsIGxpZ2h0LCByZW5kZXJlciwgY29udGFpbmVyLCBsb2FkZWQ7XG4gIGxldCBoZWFkLCBzdGFycywgd2luZG93SGFsZlgsIHdpbmRvd0hhbGZZLCBjb2xvciwgYXVkaW8sIFNwZWVjaFRleHQ7XG5cbiAgLy8gdmFycyBmb3IgZGF0Lmd1aVxuICBsZXQgY29udHJvbGxlciwgZ3VpO1xuICBjb25zdCBzYXZlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHNhdmVgKTtcblxuICBsZXQgbW91c2VQb3MgPSB7IHg6IDAsIHk6IDB9O1xuXG4gIGxldCBzdGFyQXJyYXkgPSBbXTtcbiAgbGV0IGlzTW9iaWxlID0gL2lQaG9uZXxBbmRyb2lkL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgbGV0IGxvYWRlck1hbmFnZXIgPSBuZXcgVEhSRUUuTG9hZGluZ01hbmFnZXIoKTtcbiAgbGV0IHNhdmVkID0gZmFsc2U7XG5cbiAgY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICAvLyBjcmVhdGUgc25vd1xuICAgIHBhcnRpY2xlc0pTLmxvYWQoJ3BhcnRpY2xlcy1qcycsICcuLi9hc3NldHMvcGFydGljbGVzLmpzb24nLCAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnY2FsbGJhY2sgLSBwYXJ0aWNsZXMuanMgY29uZmlnIGxvYWRlZCcpO1xuICAgIH0pO1xuXG4gICAgY3JlYXRlU2NlbmUoKTtcbiAgICBjcmVhdGVMaWdodHMoKTtcblxuICAgIGF1ZGlvID0gbmV3IEF1ZGlvKCk7IC8vIGhhbmRsZSBhdWRpbyBhbmQgc3BlZWNocmVjb2duaXRpb25cbiAgICBoZWFkID0gbmV3IEhlYWQoKTsgLy8gc2hvdyBhbmQgaGFuZGxlIGhlYWRcbiAgICBzY2VuZS5hZGQoaGVhZC5tZXNoKTtcblxuICAgIC8vIHNlbmQgb2JqZWN0cyB0byBzYXZlIG9uIGNsaWNrXG4gICAgc2F2ZUJ0bi5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsICgpID0+IHtcbiAgICAgIGNvbnN0IGZyb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbmFtZV9pbnB1dGApO1xuICAgICAgY29uc3QgdG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcmVjaXBpZW50X2lucHV0YCk7XG4gICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnVuaXF1ZV9saW5rYCk7XG5cbiAgICAgIGNvbnN0IGF1ZGlvU2V0dGluZ3MgPSB7XG4gICAgICAgIHBpdGNoOiBhdWRpby5waXRjaFJhdGlvLFxuICAgICAgICBvdmVybGFwOiBhdWRpby5vdmVybGFwXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGhlYWRDb2xvcnMgPSB7XG4gICAgICAgIHNraW46IENvbG9ycy5za2luLFxuICAgICAgICBmcmVja2xlczogQ29sb3JzLmZyZWNrbGVzLFxuICAgICAgICBleWU6IENvbG9ycy5leWUsXG4gICAgICAgIGdsYXNzZXM6IENvbG9ycy5nbGFzc2VzLFxuICAgICAgICBoYXQ6IENvbG9ycy5oYXRcbiAgICAgIH1cblxuICAgICAgaWYgKCFzYXZlZCkge1xuICAgICAgICBzYXZlZCA9IHRydWU7XG4gICAgICAgIENhcnRBUEkuY3JlYXRlKHtcbiAgICAgICAgICB0ZXh0OiBhdWRpby50ZXh0LFxuICAgICAgICAgIGlkOiBhdWRpby5pZCxcbiAgICAgICAgICBmcm9tOiBmcm9tLnZhbHVlIHx8ICdIdW1hbicsXG4gICAgICAgICAgdG86IHRvLnZhbHVlIHx8ICdGZWxsb3cgSHVtYW4nLFxuICAgICAgICAgIGF1ZGlvU2V0dGluZ3M6IEpTT04uc3RyaW5naWZ5KGF1ZGlvU2V0dGluZ3MpLFxuICAgICAgICAgIGhlYWRDb2xvcnM6IEpTT04uc3RyaW5naWZ5KGhlYWRDb2xvcnMpLFxuICAgICAgICB9KTtcblxuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBDYXJ0QVBJLnVwZGF0ZSh7XG4gICAgICAgICAgdGV4dDogYXVkaW8udGV4dCxcbiAgICAgICAgICBpZDogYXVkaW8uaWQsXG4gICAgICAgICAgZnJvbTogZnJvbS52YWx1ZSB8fCAnSHVtYW4nLFxuICAgICAgICAgIHRvOiB0by52YWx1ZSB8fCAnRmVsbG93IEh1bWFuJyxcbiAgICAgICAgICBhdWRpb1NldHRpbmdzOiBKU09OLnN0cmluZ2lmeShhdWRpb1NldHRpbmdzKSxcbiAgICAgICAgICBoZWFkQ29sb3JzOiBKU09OLnN0cmluZ2lmeShoZWFkQ29sb3JzKSxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGxpbmsuaW5uZXJIVE1MID0gYGh0dHBzOi8vbG9jYWxob3N0OjgwODAvc2FudGEuaHRtbD9pZD0ke2F1ZGlvLmlkfWA7XG4gICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIGBodHRwczovL2xvY2FsaG9zdDo4MDgwL3NhbnRhLmh0bWw/aWQ9JHthdWRpby5pZH1gKTtcbiAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCd0YXJnZXQnLCBgX2JsYW5rYCk7XG4gICAgfSk7XG5cbiAgICBndWkgPSBuZXcgZGF0LkdVSSgpO1xuICAgIGd1aS5kb21FbGVtZW50LmlkID0gJ2d1aSc7XG4gICAgZ3VpLmNsb3NlZCA9IHRydWU7XG4gICAgY29udHJvbGxlciA9IG5ldyBjb250cm9sbGVyVGV4dCgpO1xuICAgIGd1aUNvbnRyb2xsZXIoWydza2luJywgJ2ZyZWNrbGVzJywgJ2V5ZScsICdnbGFzc2VzJywgJ2hhdCddKTsgLy8gYWRkIGd1aSBmb3IgYXJyYXkgb2JqZWN0IGFuZCBzZXQgY29sb3JzIG9uIGNvbG9yIGNoYW5nZVxuXG4gICAgd2luZG93LnNjZW5lID0gc2NlbmU7IC8vIHNldCBzY2VuZSBmb3IgZXh0ZW5zaW9uXG5cbiAgICBsb29wKCk7XG4gIH07XG5cbiAgY29uc3QgZ3VpQ29udHJvbGxlciA9IGtleXMgPT4ge1xuICAgIGtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgZ3VpLmFkZENvbG9yKGNvbnRyb2xsZXIsIGtleSkub25DaGFuZ2UoKCkgPT4ge1xuXG4gICAgICAgIC8vIHNldCByaWdodCBjb2xvciBmb3IgbWF0ZXJpYWxcbiAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICBjYXNlICdza2luJzogQ29sb3JzLnNraW4gPSBjb250cm9sbGVyLnNraW47XG4gICAgICAgICAgY2FzZSAnZnJlY2tsZXMnOiBDb2xvcnMuZnJlY2tsZXMgPSBjb250cm9sbGVyLmZyZWNrbGVzO1xuICAgICAgICAgIGNhc2UgJ2V5ZSc6IENvbG9ycy5leWUgPSBjb250cm9sbGVyLmV5ZTtcbiAgICAgICAgICBjYXNlICdnbGFzc2VzJzogQ29sb3JzLmdsYXNzZXMgPSBjb250cm9sbGVyLmdsYXNzZXM7XG4gICAgICAgICAgY2FzZSAnaGF0JzogQ29sb3JzLmhhdCA9IGNvbnRyb2xsZXIuaGF0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy9yZW1vdmUgY3VycmVudCBoZWFkIGFuZCBtYWtlIGEgbmV3IG9uZSB0byBzZXQgY3VycmVudCBjb2xvclxuICAgICAgICBzY2VuZS5yZW1vdmUoaGVhZC5tZXNoKTtcbiAgICAgICAgY3JlYXRlSGVhZCgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBkZWMyaGV4ID0gKGkpID0+IHtcbiAgICB2YXIgcmVzdWx0ID0gXCIweDAwMDAwMFwiO1xuICAgIGlmIChpID49IDAgJiYgaSA8PSAxNSkge1xuICAgICAgcmVzdWx0ID0gXCIweDAwMDAwXCIgKyBpLnRvU3RyaW5nKDE2KTtcbiAgICB9IGVsc2UgaWYgKGkgPj0gMTYgJiYgaSA8PSAyNTUpIHtcbiAgICAgIHJlc3VsdCA9IFwiMHgwMDAwXCIgKyBpLnRvU3RyaW5nKDE2KTtcbiAgICB9IGVsc2UgaWYgKGkgPj0gMjU2ICYmIGkgPD0gNDA5NSkge1xuICAgICAgcmVzdWx0ID0gXCIweDAwMFwiICsgaS50b1N0cmluZygxNik7XG4gICAgfSBlbHNlIGlmIChpID49IDQwOTYgJiYgaSA8PSA2NTUzNSkge1xuICAgICAgcmVzdWx0ID0gXCIweDAwXCIgKyBpLnRvU3RyaW5nKDE2KTtcbiAgICB9IGVsc2UgaWYgKGkgPj0gNjU1MzUgJiYgaSA8PSAxMDQ4NTc1KSB7XG4gICAgICByZXN1bHQgPSBcIjB4MFwiICsgaS50b1N0cmluZygxNik7XG4gICAgfSBlbHNlIGlmIChpID49IDEwNDg1NzUpIHtcbiAgICAgIHJlc3VsdCA9ICcweCcgKyBpLnRvU3RyaW5nKDE2KTtcbiAgICB9XG4gICAgaWYgKHJlc3VsdC5sZW5ndGggPT0gOCkge1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIH1cblxuICBjb25zdCBjcmVhdGVTY2VuZSA9ICgpID0+IHs7XG4gICAgSEVJR0hUID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIFdJRFRIID0gd2luZG93LmlubmVyV2lkdGggLzEuNjc7XG4gICAgd2luZG93SGFsZlggPSBXSURUSCAvIDI7XG4gICAgd2luZG93SGFsZlkgPSBIRUlHSFQgLyAyO1xuXG4gICAgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbiAgICBhc3BlY3RSYXRpbyA9IFdJRFRIIC8gSEVJR0hUO1xuICAgIGZpZWxkT2ZWaWV3ID0gNTA7XG4gICAgbmVhclBsYW5lID0gMTtcbiAgICBmYXJQbGFuZSA9IDIwMDA7XG5cbiAgICBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoZmllbGRPZlZpZXcsIGFzcGVjdFJhdGlvLCBuZWFyUGxhbmUsIGZhclBsYW5lKTtcbiAgICBjYW1lcmEucG9zaXRpb24ueCA9IDA7XG4gICAgY2FtZXJhLnBvc2l0aW9uLnogPSA3MDtcbiAgICBjYW1lcmEucG9zaXRpb24ueSA9IC01O1xuXG4gICAgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7YWxwaGE6IHRydWUsIGFudGlhbGlhczogdHJ1ZX0pO1xuICAgIHJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8/IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvOiAxKVxuICAgIHJlbmRlcmVyLnNldFNpemUoV0lEVEgsIEhFSUdIVCk7XG4gICAgcmVuZGVyZXIuc2hhZG93TWFwLmVuYWJsZWQgPSB0cnVlO1xuICAgIHJlbmRlcmVyLnNoYWRvd01hcC50eXBlID0gVEhSRUUuUENGU29mdFNoYWRvd01hcDtcblxuICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25XaW5kb3dSZXNpemUsIGZhbHNlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVNb3VzZU1vdmUsIGZhbHNlKTtcbiAgfVxuXG4gIGNvbnN0IG9uV2luZG93UmVzaXplID0gKCkgPT4ge1xuICAgIEhFSUdIVCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICBXSURUSCA9IHdpbmRvdy5pbm5lcldpZHRoICAvIDEuNjc7XG4gICAgd2luZG93SGFsZlggPSBXSURUSCAvIDI7XG4gICAgd2luZG93SGFsZlkgPSBIRUlHSFQgLyAyO1xuICAgIHJlbmRlcmVyLnNldFNpemUoV0lEVEgsIEhFSUdIVCk7XG4gICAgY2FtZXJhLmFzcGVjdCA9IFdJRFRIIC8gSEVJR0hUO1xuICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVNb3VzZU1vdmUgPSBlID0+IHtcbiAgICBtb3VzZVBvcyA9IHtcbiAgICAgIHg6IGV2ZW50LmNsaWVudFgsXG4gICAgICB5OiBldmVudC5jbGllbnRZXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVdpbmRvd1Jlc2l6ZSA9IGUgPT4ge1xuICAgIEhFSUdIVCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICBXSURUSCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHJlbmRlcmVyLnNldFNpemUoV0lEVEgsIEhFSUdIVCk7XG4gICAgY2FtZXJhLmFzcGVjdCA9IFdJRFRIIC8gSEVJR0hUO1xuICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gIH1cblxuXG4gIGNvbnN0IGNyZWF0ZUxpZ2h0cyA9ICgpID0+IHtcblxuICAgIGdsb2JhbExpZ2h0ID0gbmV3IFRIUkVFLkhlbWlzcGhlcmVMaWdodCgweGZmZmZmZiwgMHg1NTU1NTUsIC45KTtcblxuICAgIHNoYWRvd0xpZ2h0ID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoMHhmZmZmZmYsIC4zKTtcbiAgICBzaGFkb3dMaWdodC5wb3NpdGlvbi5zZXQoMTAwLCAyNTAsIDE3NSk7XG4gICAgc2hhZG93TGlnaHQuY2FzdFNoYWRvdyA9IHRydWU7XG5cbiAgICBiYWNrTGlnaHQgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCgweGZmZmZmZiwgLjIpO1xuICAgIGJhY2tMaWdodC5wb3NpdGlvbi5zZXQoLTEwMCwgMjAwLCAxNTApO1xuICAgIGJhY2tMaWdodC5jYXN0U2hhZG93ID0gdHJ1ZTtcblxuICAgIGlmIChpc01vYmlsZSkgc2hhZG93TGlnaHQuc2hhZG93Lm1hcFNpemUud2lkdGggPSBzaGFkb3dMaWdodC5zaGFkb3cubWFwU2l6ZS5oZWlnaHQgPSAxMDI0O1xuICAgIGlmICghaXNNb2JpbGUpIHNoYWRvd0xpZ2h0LnNoYWRvdy5tYXBTaXplLndpZHRoID0gc2hhZG93TGlnaHQuc2hhZG93Lm1hcFNpemUuaGVpZ2h0ID0gMjA0ODtcblxuICAgIHNjZW5lLmFkZChnbG9iYWxMaWdodCk7XG4gICAgc2NlbmUuYWRkKHNoYWRvd0xpZ2h0KTtcbiAgICBzY2VuZS5hZGQoYmFja0xpZ2h0KTtcbiAgICBzY2VuZS5hZGQoIG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoIDB4ZWFkZWFkLCAwLjEgKSk7XG4gIH1cblxuICAvLyBjbGFzcyBTdGFyIHtcbiAgLy8gICBjb25zdHJ1Y3Rvcigpe1xuICAvL1xuICAvLyAgIFNUQVJcbiAgLy8gICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vXG4gIC8vICAgdGhpcy5tZXNoID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gIC8vXG4gIC8vICAgbGV0IHB0cyA9IFtdLFxuICAvLyAgICAgbnVtUHRzID0gNTtcbiAgLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVB0cyAqIDI7IGkrKykge1xuICAvLyAgICAgbGV0IGwgPSBpICUgMiA9PSAxXG4gIC8vICAgICAgID8gMVxuICAvLyAgICAgICA6IDI7XG4gIC8vICAgICBsZXQgYSA9IGkgLyBudW1QdHMgKiBNYXRoLlBJO1xuICAvLyAgICAgcHRzLnB1c2gobmV3IFRIUkVFLlZlY3RvcjIoTWF0aC5jb3MoYSkgKiBsLCBNYXRoLnNpbihhKSAqIGwpKTtcbiAgLy8gICB9XG4gIC8vICAgbGV0IHN0YXJTaGFwZSA9IG5ldyBUSFJFRS5TaGFwZShwdHMpO1xuICAvL1xuICAvLyAgIGxldCBleHRydWRlU2V0dGluZ3MgPSB7XG4gIC8vICAgICBhbW91bnQ6IDAuNSxcbiAgLy8gICAgIHN0ZXBzOiAxLFxuICAvLyAgICAgYmV2ZWxFbmFibGVkOiBmYWxzZVxuICAvLyAgIH07XG4gIC8vICAgbGV0IHN0YXJHZW9tID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShzdGFyU2hhcGUsIGV4dHJ1ZGVTZXR0aW5ncyk7XG4gIC8vICAgbGV0IHN0YXIgPSBuZXcgVEhSRUUuTWVzaChzdGFyR2VvbSwgeWVsbG93TWF0KTtcbiAgLy8gICBzdGFyLnJvdGF0aW9uLnggPSBNYXRoLlBJIC8gMjtcbiAgLy8gICB0aGlzLm1lc2guYWRkKHN0YXIpO1xuICAvLyB9XG4gIC8vIH1cbiAgLy9cbiAgLy8gbGV0IFN0YXJzR3JvdXAgPSBmdW5jdGlvbigpIHtcbiAgLy9cbiAgLy8gICAgIHRoaXMubWVzaCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAvL1xuICAvLyAgICAgdGhpcy5uU3RhcnMgPSAxNTtcbiAgLy9cbiAgLy8gICAgIGxldCBzdGVwQW5nbGUgPSBNYXRoLlBJICogMiAvIHRoaXMublN0YXJzO1xuICAvL1xuICAvLyAgICAgIENyZWF0ZSB0aGUgU3RhcnNcbiAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5uU3RhcnM7IGkrKykge1xuICAvL1xuICAvLyAgICAgICB0aGlzLnMgPSBuZXcgU3RhcigpO1xuICAvLyAgICAgICBsZXQgYSA9IHN0ZXBBbmdsZSAqIGk7XG4gIC8vICAgICAgIGxldCByID0gMTU7XG4gIC8vXG4gIC8vICAgICAgIHRoaXMucy5tZXNoLnBvc2l0aW9uLnkgPSBNYXRoLnNpbihhKSAqIHI7XG4gIC8vICAgICAgIHRoaXMucy5tZXNoLnBvc2l0aW9uLnggPSBNYXRoLmNvcyhhKSAqIHI7XG4gIC8vXG4gIC8vICAgICAgIHRoaXMucy5tZXNoLnJvdGF0aW9uLnogPSBhICsgTWF0aC5QSSAvIDI7XG4gIC8vICAgICAgIHRoaXMucy5tZXNoLnBvc2l0aW9uLnogPSAwIC0gTWF0aC5yYW5kb20oKSAqIDM7XG4gIC8vXG4gIC8vICAgICAgICAgcmFuZG9tIHNjYWxlIGZvciBlYWNoIGNsb3VkXG4gIC8vICAgICAgIGxldCBzYyA9IDAuNSArIE1hdGgucmFuZG9tKCkgKiAuNjtcbiAgLy8gICAgICAgdGhpcy5zLm1lc2guc2NhbGUuc2V0KHNjLCBzYywgc2MpO1xuICAvL1xuICAvLyAgICAgICB0aGlzLm1lc2guYWRkKHRoaXMucy5tZXNoKTtcbiAgLy8gICAgICAgc3RhckFycmF5LnB1c2godGhpcy5zKTtcbiAgLy8gICAgIH1cbiAgLy8gICAgIHRoaXMubWVzaC5yb3RhdGlvbi54ID0gTWF0aC5QSSAvIDI7XG4gIC8vIH1cblxuICBjb25zdCBjcmVhdGVIZWFkID0gKCkgPT4ge1xuICAgIGhlYWQubmFtZSA9IFwiSGVhZFwiO1xuICAgIGhlYWQgPSBuZXcgSGVhZCgpO1xuICAgIGhlYWQuaWRsZSgpO1xuICAgIHNjZW5lLmFkZChoZWFkLm1lc2gpO1xuICAgIC8vc3RhcnMgPSBuZXcgU3RhcnNHcm91cCgpO1xuICAgIC8vc2NlbmUuYWRkKHN0YXJzLm1lc2gpO1xuICB9XG5cbiAgY29uc3QgY3JlYXRlQ2hhcmFjdGVyID0gKCkgPT4ge1xuICAgIGNyZWF0ZUhlYWQoKTtcbiAgICBoZWFkLm1lc2gucG9zaXRpb24uc2V0KDAsIDIsIDApO1xuICAgIC8vc3RhcnMubWVzaC5wb3NpdGlvbi5zZXQoMCwgMTAsIDApO1xuICB9XG5cblxuICBsZXQgaXNCbGlua2luZyA9IGZhbHNlO1xuICBjb25zdCBibGlua0xvb3AgPSAoKSA9PiB7XG4gICAgaXNCbGlua2luZyA9IGZhbHNlO1xuXG4gICAgaWYgKCghaXNCbGlua2luZykgJiYgKE1hdGgucmFuZG9tKCkgPiAwLjk5KSkge1xuICAgICAgaXNCbGlua2luZyA9IHRydWU7XG4gICAgICBibGluaygpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGJsaW5rID0gKCkgPT4ge1xuICAgIGhlYWQuZXllcy5zY2FsZS55ID0gMTtcbiAgICBUd2Vlbk1heC50byhoZWFkLmV5ZXMuc2NhbGUsIC4wNywge1xuICAgICAgeTogMCxcbiAgICAgIHlveW86IHRydWUsXG4gICAgICByZXBlYXQ6IDEsXG4gICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaXNCbGlua2luZyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy9IRUFEIEFOSU1BVElPTlNcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAvLyBIZWFkLnByb3RvdHlwZS5kaXp6eSA9IGZ1bmN0aW9uKCkge1xuICAvL1xuICAvLyAgICAgbGV0IGRpc3RhbmNlID0gMTtcbiAgLy9cbiAgLy8gICAgIHRoaXMuaGVhZC5yb3RhdGlvbi56ID0gTWF0aC5zaW4oRGF0ZS5ub3coKSAqIDAuMDA1KSAqIE1hdGguUEkgKiAwLjAxO1xuICAvLyAgICAgdGhpcy5oZWFkLnJvdGF0aW9uLnggPSBNYXRoLnNpbihEYXRlLm5vdygpICogMC4wMSkgKiBNYXRoLlBJICogMC4wMTtcbiAgLy8gICAgIHRoaXMuaGVhZC5yb3RhdGlvbi55ID0gTWF0aC5zaW4oRGF0ZS5ub3coKSAqIDAuMDA1KSAqIE1hdGguUEkgKiAwLjAxO1xuICAvL1xuICAvLyAgICAgdGhpcy5leWVCbHVlUmlnaHQucG9zaXRpb24ueCA9IE1hdGguc2luKERhdGUubm93KCkgKiAwLjAwNSkgKiAtZGlzdGFuY2U7XG4gIC8vICAgICB0aGlzLmV5ZUJsdWVMZWZ0LnBvc2l0aW9uLnggPSBNYXRoLnNpbihEYXRlLm5vdygpICogMC4wMDUpICogZGlzdGFuY2U7XG4gIC8vICAgICB0aGlzLmV5ZUJsdWVSaWdodC5wb3NpdGlvbi55ID0gTWF0aC5jb3MoRGF0ZS5ub3coKSAqIDAuMDA1KSAqIC1kaXN0YW5jZTtcbiAgLy8gICAgIHRoaXMuZXllQmx1ZUxlZnQucG9zaXRpb24ueSA9IE1hdGguY29zKERhdGUubm93KCkgKiAwLjAwNSkgKiBkaXN0YW5jZTtcbiAgLy8gICAgIHRoaXMuZXllQnJvd1JpZ2h0LnBvc2l0aW9uLnkgPSBNYXRoLmNvcyhEYXRlLm5vdygpICogMC4wMDUpICogLWRpc3RhbmNlO1xuICAvLyAgICAgdGhpcy5leWVCcm93TGVmdC5wb3NpdGlvbi55ID0gTWF0aC5jb3MoRGF0ZS5ub3coKSAqIDAuMDA1KSAqIGRpc3RhbmNlO1xuICAvL1xuICAvLyAgICAgdGhpcy5tb3VzdGFjaGUucm90YXRpb24ueiA9IE1hdGguc2luKERhdGUubm93KCkgKiAwLjAwNSkgKiBNYXRoLlBJICogMC4wNTtcbiAgLy9cbiAgLy8gICAgIGJsaW5rTG9vcCgpO1xuICAvLyAgICAgc3RhcnMuc3BpblNjYWxlKCk7XG4gIC8vXG4gIC8vICAgfVxuXG4gIC8vU1RBUkdST1VQXG4gIC8vIFN0YXJzR3JvdXAucHJvdG90eXBlLnNwaW5TY2FsZSA9IGZ1bmN0aW9uKCkge1xuICAvL1xuICAvLyAgICAgdGhpcy5tZXNoLnJvdGF0aW9uLnogKz0gMC4wMjtcbiAgLy9cbiAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhckFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gIC8vICAgICAgICBzdGFyQXJyYXlbaV0ubWVzaC5yb3RhdGlvbi54ID0gTWF0aC5zaW4oRGF0ZS5ub3coKSAqIDAuMDEpICogTWF0aC5QSSAqIDAuMSA7XG4gIC8vICAgICAgIHN0YXJBcnJheVtpXS5tZXNoLnJvdGF0aW9uLnogKz0gMCAtIE1hdGgucmFuZG9tKCkgKiAwLjE1O1xuICAvLyAgICAgICBzdGFyQXJyYXlbaV0ubWVzaC5yb3RhdGlvbi54ICs9IDAgLSBNYXRoLnJhbmRvbSgpICogMC4wNTtcbiAgLy9cbiAgLy8gICAgIH1cbiAgLy8gICB9XG5cbiAgY2xhc3MgY29udHJvbGxlclRleHQge1xuICAgIGNvbnN0cnVjdG9yICgpe1xuICAgICAgdGhpcy5za2luID0gQ29sb3JzLnNraW47XG4gICAgICB0aGlzLmZyZWNrbGVzID0gQ29sb3JzLmZyZWNrbGVzO1xuICAgICAgdGhpcy5leWUgPSBDb2xvcnMuZXllO1xuICAgICAgdGhpcy5nbGFzc2VzID0gQ29sb3JzLmdsYXNzZXM7XG4gICAgICB0aGlzLmhhdCA9IENvbG9ycy5oYXQ7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbG9vcCA9ICgpID0+IHtcbiAgICBibGlua0xvb3AoKTtcbiAgICAvL2hlYWQuZGl6enkoKTtcbiAgICBsZXQgeFRhcmdldCA9IChtb3VzZVBvcy54IC0gd2luZG93SGFsZlgpO1xuICAgIGxldCB5VGFyZ2V0ID0gKG1vdXNlUG9zLnkgLSB3aW5kb3dIYWxmWSk7XG5cbiAgICBoZWFkLmlkbGUoeFRhcmdldCwgeVRhcmdldCk7XG4gICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcbiAgfVxuXG4gIC8vd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBpbml0LCBmYWxzZSk7XG5cbiAgaW5pdCgpO1xuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvc2NyaXB0LmpzIiwiaW1wb3J0IFNvdW5kQVBJIGZyb20gJy4uL2xpYi9zb3VuZEFQSSc7XG5pbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJztcblxudmFyIFNwZWVjaFJlY29nbml0aW9uID0gU3BlZWNoUmVjb2duaXRpb24gfHwgd2Via2l0U3BlZWNoUmVjb2duaXRpb25cbnZhciBTcGVlY2hHcmFtbWFyTGlzdCA9IFNwZWVjaEdyYW1tYXJMaXN0IHx8IHdlYmtpdFNwZWVjaEdyYW1tYXJMaXN0XG52YXIgU3BlZWNoUmVjb2duaXRpb25FdmVudCA9IFNwZWVjaFJlY29nbml0aW9uRXZlbnQgfHwgd2Via2l0U3BlZWNoUmVjb2duaXRpb25FdmVudFxuY29uc3QgQXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0O1xuXG5sZXQgYXVkaW9DdHgsIHJlY29nbml0aW9uO1xubGV0IHRyYW5zY3JpcHQgPSBcIlwiO1xubGV0IGF1ZGlvQ2h1bmtzID0gW107XG5sZXQgc291cmNlO1xuXG5jb25zdCAkdGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBmaWVsZGApO1xuY29uc3QgJHJlY29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGByZWNvcmRgKTtcbmNvbnN0ICRhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBhdWRpb19jb250cm9sc2ApO1xuY29uc3QgJHN0b3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgc3RvcGApO1xuXG5sZXQgYXVkaW9Tb3VyY2VzID0gW10sXG4gICAgcGl0Y2hTaGlmdGVyUHJvY2Vzc29yO1xuXG5sZXQgZ3JhaW5TaXplID0gNTEyLFxuICAgIHBpdGNoUmF0aW8gPSAxLjAsXG4gICAgb3ZlcmxhcFJhdGlvID0gMC41MDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXVkaW8ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmlkID0gc2hvcnRJZC5nZW5lcmF0ZSgpO1xuICAgIHRoaXMucGl0Y2hSYXRpbyA9IDEuMDtcbiAgICB0aGlzLm92ZXJsYXAgPSAwLjUwO1xuICAgIGF1ZGlvQ3R4ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuXG4gICAgLy8gaGFuZGxlIFNwZWVjaFJlY29nbml0aW9uXG4gICAgcmVjb2duaXRpb24gPSBuZXcgU3BlZWNoUmVjb2duaXRpb24oKTtcbiAgICB0aGlzLnNwZWVjaFNldHRpbmdzKCk7XG5cbiAgICByZWNvZ25pdGlvbi5vbnJlc3VsdCA9IGV2ZW50ID0+IHRoaXMuZ290UmVzdWx0KGV2ZW50KTtcbiAgICByZWNvZ25pdGlvbi5vbnNwZWVjaGVuZCA9IGUgPT4gdGhpcy5vblNwZWVjaEVuZChlKTtcbiAgICAkdGV4dC5hZGRFdmVudExpc3RlbmVyKGBibHVyYCwgKCkgPT4gdGhpcy50eHQgPSAkdGV4dC52YWx1ZSk7XG5cbiAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7IGF1ZGlvOiB0cnVlIH0pXG4gICAgLnRoZW4oc3RyZWFtID0+IHtcbiAgICAgIHRoaXMubWVkaWFSZWNvcmRlciA9IG5ldyBNZWRpYVJlY29yZGVyKHN0cmVhbSk7XG5cbiAgICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS1TdGFydCBSZWNvcmRpbmctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgICAkcmVjb3JkLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgKCkgPT4ge1xuICAgICAgICB0aGlzLm1lZGlhUmVjb3JkZXIuc3RhcnQoKTtcbiAgICAgICAgcmVjb2duaXRpb24uc3RhcnQoKTtcbiAgICAgICAgJHJlY29yZC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB9KTtcbiAgICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgICAgIHRoaXMubWVkaWFSZWNvcmRlci5hZGRFdmVudExpc3RlbmVyKGBkYXRhYXZhaWxhYmxlYCwgIGUgPT4ge1xuICAgICAgICBhdWRpb0NodW5rcy5wdXNoKGUuZGF0YSk7XG4gICAgICB9KTsgLy8gYWRkIGF1ZGlvY2h1bmsgdG8gYXJyYXlcblxuICAgICAgLy8gd2hlbiBtZWRpYVJlY29yZGVyIHN0b3BzLCBtYWtlIGFuZCBoYW5kbGUgYXVkaW8gYmxvYlxuICAgICAgdGhpcy5tZWRpYVJlY29yZGVyLmFkZEV2ZW50TGlzdGVuZXIoYHN0b3BgLCAoKSA9PiB7XG4gICAgICAgIC8vIGdpdmUgbGluayB0byBhdWRpbyBjb250cm9scyB0byBwbGF5IGFuZCBjb250cm9sIHRoZSBzb3VuZFxuICAgICAgICB0aGlzLmJsb2IgPSBuZXcgQmxvYihhdWRpb0NodW5rcywge3R5cGUgOiAnYXVkaW8vb2dnJ30pOyAvLyBjcmVhdGUgYmxvYiBmcm9tIGF1ZGlvY2h1bmtzXG5cbiAgICAgICAgU291bmRBUEkuY3JlYXRlKHtcbiAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICBibG9iOiB0aGlzLmJsb2JcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PsKge1xuICAgICAgICAgIGNvbnN0IGJ1ZmZlckxvYWRlciA9IG5ldyBCdWZmZXJMb2FkZXIoXG4gICAgICAgICAgICBhdWRpb0N0eCwgW2AuL3VwbG9hZHMvJHt0aGlzLmlkfS5vZ2dgXSwgYnVmZmVyTGlzdCA9PiB7XG4gICAgICAgICAgICAgIC8vIHRvIGF2b2lkIG92ZXJsYXBwaW5nIHByZXZpb3VzIHNvdW5kLCBlbXB0eSBidWZmZXJMaXN0IHdoZW4gdHJ5aW5nIGFnYWluXG4gICAgICAgICAgICAgICRyZWNvcmQuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCAoKSA9PiBidWZmZXJMaXN0ID0gW10pO1xuXG4gICAgICAgICAgICAgIGxldCBsb29wID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgLy8gdHJpZ2dlciBsb29wXG4gICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGByZXBlYXRgKS5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbG9vcCA9ICFsb29wO1xuICAgICAgICAgICAgICAgIHNvdXJjZS5zdG9wKCk7XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIC8vIHBpdGNoIHZhbHVlXG4gICAgICAgICAgICAgIGNvbnN0ICRwaXRjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwaXRjaGApO1xuICAgICAgICAgICAgICAkcGl0Y2guYWRkRXZlbnRMaXN0ZW5lcihgY2hhbmdlYCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHBpdGNoUmF0aW8gPSBwYXJzZUZsb2F0KCRwaXRjaC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5waXRjaFJhdGlvID0gcGl0Y2hSYXRpbztcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgLy8gcGxheSBtb2RpZmllZCBzb3VuZFxuICAgICAgICAgICAgICAkYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc291cmNlID0gJyc7XG4gICAgICAgICAgICAgICAgc291cmNlID0gYXVkaW9DdHguY3JlYXRlQnVmZmVyU291cmNlKCk7XG4gICAgICAgICAgICAgICAgc291cmNlLmJ1ZmZlciA9IGJ1ZmZlckxpc3RbMF07XG4gICAgICAgICAgICAgICAgc291cmNlLmNvbm5lY3QocGl0Y2hTaGlmdGVyUHJvY2Vzc29yKTtcbiAgICAgICAgICAgICAgICBzb3VyY2UubG9vcCA9IGxvb3A7XG4gICAgICAgICAgICAgICAgc291cmNlLnN0YXJ0KCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBidWZmZXJMb2FkZXIubG9hZCgpO1xuICAgICAgICAgIHRoaXMuaW5pdFByb2Nlc3NvcigpO1xuXG4gICAgICAgIH0sIDEwMDApO1xuXG4gICAgICAgIC8vIHNldCBzb3VuZCBmaWx0ZXIgb3ZlcmxhcFxuICAgICAgICBjb25zdCBvdmVybGFwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG92ZXJsYXBgKTtcbiAgICAgICAgb3ZlcmxhcC5hZGRFdmVudExpc3RlbmVyKGBjaGFuZ2VgLCAoKSA9PiB7XG4gICAgICAgICAgb3ZlcmxhcFJhdGlvID0gb3ZlcmxhcC52YWx1ZTtcbiAgICAgICAgICB0aGlzLm92ZXJsYXAgPSBvdmVybGFwUmF0aW87XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF1ZGlvQ2h1bmtzID0gW107XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uU3BlZWNoRW5kKGUpwqB7XG4gICAgdGhpcy5tZWRpYVJlY29yZGVyLnN0b3AoKTtcbiAgICByZWNvZ25pdGlvbi5zdG9wKCk7XG4gICAgJHJlY29yZC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICRyZWNvcmQudGV4dENvbnRlbnQgPSAnV2FudCB0byB0cnkgYWdhaW4/JztcbiAgICB0aGlzLnR4dCA9ICR0ZXh0LnZhbHVlO1xuICB9XG5cbiAgZ290UmVzdWx0KGV2ZW50KSB7XG4gICAgY29uc3QgbGFzdCA9IGV2ZW50LnJlc3VsdHMubGVuZ3RoIC0gMTtcbiAgICB0cmFuc2NyaXB0ID0gZXZlbnQucmVzdWx0c1tsYXN0XVswXS50cmFuc2NyaXB0O1xuICAgICR0ZXh0LnZhbHVlID0gdHJhbnNjcmlwdDtcbiAgfVxuXG4gIHNwZWVjaFNldHRpbmdzKCkge1xuICAgIHJlY29nbml0aW9uLmNvbnRpbnVvdXMgPSBmYWxzZTtcbiAgICByZWNvZ25pdGlvbi5sYW5nID0gJ2VuLVVTJztcbiAgICByZWNvZ25pdGlvbi5pbnRlcmltUmVzdWx0cyA9IGZhbHNlO1xuICAgIHJlY29nbml0aW9uLm1heEFsdGVybmF0aXZlcyA9IDE7XG4gIH1cblxuICBpbml0UHJvY2Vzc29yKCkge1xuXG4gICAgY29uc3QgbGluZWFySW50ZXJwb2xhdGlvbiA9IChhLCBiLCB0KSA9PiB7XG4gICAgICByZXR1cm4gYSArIChiIC0gYSkgKiB0O1xuICAgIH07XG5cbiAgICBpZiAocGl0Y2hTaGlmdGVyUHJvY2Vzc29yKSB7XG4gICAgICBwaXRjaFNoaWZ0ZXJQcm9jZXNzb3IuZGlzY29ubmVjdCgpO1xuICAgIH1cblxuICAgIGlmIChhdWRpb0N0eC5jcmVhdGVTY3JpcHRQcm9jZXNzb3IpIHtcbiAgICAgIHBpdGNoU2hpZnRlclByb2Nlc3NvciA9IGF1ZGlvQ3R4LmNyZWF0ZVNjcmlwdFByb2Nlc3NvcihncmFpblNpemUsIDEsIDEpO1xuICAgIH0gZWxzZSBpZiAoYXVkaW9DdHguY3JlYXRlSmF2YVNjcmlwdE5vZGUpIHtcbiAgICAgIHBpdGNoU2hpZnRlclByb2Nlc3NvciA9IGF1ZGlvQ3R4LmNyZWF0ZUphdmFTY3JpcHROb2RlKGdyYWluU2l6ZSwgMSwgMSk7XG4gICAgfVxuXG4gICAgcGl0Y2hTaGlmdGVyUHJvY2Vzc29yLmJ1ZmZlciA9IG5ldyBGbG9hdDMyQXJyYXkoZ3JhaW5TaXplICogMik7XG4gICAgcGl0Y2hTaGlmdGVyUHJvY2Vzc29yLmdyYWluV2luZG93ID0gdGhpcy5oYW5uV2luZG93KGdyYWluU2l6ZSk7XG5cbiAgICBwaXRjaFNoaWZ0ZXJQcm9jZXNzb3Iub25hdWRpb3Byb2Nlc3MgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICB2YXIgaW5wdXREYXRhID0gZXZlbnQuaW5wdXRCdWZmZXIuZ2V0Q2hhbm5lbERhdGEoMCk7XG4gICAgICB2YXIgb3V0cHV0RGF0YSA9IGV2ZW50Lm91dHB1dEJ1ZmZlci5nZXRDaGFubmVsRGF0YSgwKTtcblxuICAgICAgZm9yIChpID0gMDsgaSA8IGlucHV0RGF0YS5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgIC8vIEFwcGx5IHRoZSB3aW5kb3cgdG8gdGhlIGlucHV0IGJ1ZmZlclxuICAgICAgICBpbnB1dERhdGFbaV0gKj0gdGhpcy5ncmFpbldpbmRvd1tpXTtcblxuICAgICAgICAvLyBTaGlmdCBoYWxmIG9mIHRoZSBidWZmZXJcbiAgICAgICAgdGhpcy5idWZmZXJbaV0gPSB0aGlzLmJ1ZmZlcltpICsgZ3JhaW5TaXplXTtcblxuICAgICAgICAvLyBFbXB0eSB0aGUgYnVmZmVyIHRhaWxcbiAgICAgICAgdGhpcy5idWZmZXJbaSArIGdyYWluU2l6ZV0gPSAwLjA7XG4gICAgICB9XG5cbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgcGl0Y2ggc2hpZnRlZCBncmFpbiByZS1zYW1wbGluZyBhbmQgbG9vcGluZyB0aGUgaW5wdXRcbiAgICAgIHZhciBncmFpbkRhdGEgPSBuZXcgRmxvYXQzMkFycmF5KGdyYWluU2l6ZSAqIDIpO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGogPSAwLjA7IGkgPCBncmFpblNpemU7IGkrKywgaiArPSBwaXRjaFJhdGlvKSB7XG5cbiAgICAgICAgdmFyIGluZGV4ID0gTWF0aC5mbG9vcihqKSAlIGdyYWluU2l6ZTtcbiAgICAgICAgdmFyIGEgPSBpbnB1dERhdGFbaW5kZXhdO1xuICAgICAgICB2YXIgYiA9IGlucHV0RGF0YVsoaW5kZXggKyAxKSAlIGdyYWluU2l6ZV07XG4gICAgICAgIGdyYWluRGF0YVtpXSArPSBsaW5lYXJJbnRlcnBvbGF0aW9uKGEsIGIsIGogJSAxLjApICogdGhpcy5ncmFpbldpbmRvd1tpXTtcbiAgICAgIH1cblxuICAgICAgLy8gQ29weSB0aGUgZ3JhaW4gbXVsdGlwbGUgdGltZXMgb3ZlcmxhcHBpbmcgaXRcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBncmFpblNpemU7IGkgKz0gTWF0aC5yb3VuZChncmFpblNpemUgKiAoMSAtIG92ZXJsYXBSYXRpbykpKSB7XG4gICAgICAgIGZvciAoaiA9IDA7IGogPD0gZ3JhaW5TaXplOyBqKyspIHtcbiAgICAgICAgICB0aGlzLmJ1ZmZlcltpICsgal0gKz0gZ3JhaW5EYXRhW2pdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIE91dHB1dCB0aGUgZmlyc3QgaGFsZiBvZiB0aGUgYnVmZmVyXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgZ3JhaW5TaXplOyBpKyspIHtcbiAgICAgICAgb3V0cHV0RGF0YVtpXSA9IHRoaXMuYnVmZmVyW2ldO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBwaXRjaFNoaWZ0ZXJQcm9jZXNzb3IuY29ubmVjdChhdWRpb0N0eC5kZXN0aW5hdGlvbik7XG5cbiAgfTtcblxuICBoYW5uV2luZG93KGxlbmd0aCkge1xuICAgIGNvbnN0IHdpbmRvdyA9IG5ldyBGbG9hdDMyQXJyYXkobGVuZ3RoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHdpbmRvd1tpXSA9IDAuNSAqICgxIC0gTWF0aC5jb3MoMiAqIE1hdGguUEkgKiBpIC8gKGxlbmd0aCAtIDEpKSk7XG4gICAgfVxuICAgIHJldHVybiB3aW5kb3c7XG4gIH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NsYXNzZXMvQXVkaW8uanMiLCJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XG5cbmNvbnN0IHVybCA9IGAvYXBpL3NvdW5kYDtcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gIGNyZWF0ZTogKHtpZCwgYmxvYn0pID0+IHtcbiAgICBjb25zdCBtZXRob2QgPSBgUE9TVGA7XG4gICAgY29uc3QgbmV3RmlsZU5hbWUgPSBgJHtpZC5zcGxpdChgIGApLmpvaW4oYF9gKX1gO1xuICAgIGNvbnN0IGJvZHkgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBib2R5LmFwcGVuZChgaWRgLCBpZCk7XG4gICAgYm9keS5hcHBlbmQoYHNvdW5kYCwgYmxvYiwgbmV3RmlsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGZldGNoKHVybCwge21ldGhvZCwgYm9keX0pXG4gICAgICAudGhlbihyID0+IHIuanNvbigpKTtcbiAgfSxcblxuICByZWFkOiAoKSA9PiB7XG4gICAgcmV0dXJuIGZldGNoKGAke3VybH0/aXNBY3RpdmU9dHJ1ZWApXG4gICAgICAudGhlbihyID0+IHIuanNvbigpKTtcbiAgfSxcblxuICByZWFkT25lOiBpZCA9PiB7XG4gICAgY29uc3QgbWV0aG9kID0gYEdFVGA7XG4gICAgcmV0dXJuIGZldGNoKGAke3VybH0vJHtpZH1gLCB7bWV0aG9kfSkudGhlbihyID0+IHIuanNvbigpKTtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9saWIvc291bmRBUEkuanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBhbHBoYWJldCA9IHJlcXVpcmUoJy4vYWxwaGFiZXQnKTtcbnZhciBlbmNvZGUgPSByZXF1aXJlKCcuL2VuY29kZScpO1xudmFyIGRlY29kZSA9IHJlcXVpcmUoJy4vZGVjb2RlJyk7XG52YXIgYnVpbGQgPSByZXF1aXJlKCcuL2J1aWxkJyk7XG52YXIgaXNWYWxpZCA9IHJlcXVpcmUoJy4vaXMtdmFsaWQnKTtcblxuLy8gaWYgeW91IGFyZSB1c2luZyBjbHVzdGVyIG9yIG11bHRpcGxlIHNlcnZlcnMgdXNlIHRoaXMgdG8gbWFrZSBlYWNoIGluc3RhbmNlXG4vLyBoYXMgYSB1bmlxdWUgdmFsdWUgZm9yIHdvcmtlclxuLy8gTm90ZTogSSBkb24ndCBrbm93IGlmIHRoaXMgaXMgYXV0b21hdGljYWxseSBzZXQgd2hlbiB1c2luZyB0aGlyZFxuLy8gcGFydHkgY2x1c3RlciBzb2x1dGlvbnMgc3VjaCBhcyBwbTIuXG52YXIgY2x1c3RlcldvcmtlcklkID0gcmVxdWlyZSgnLi91dGlsL2NsdXN0ZXItd29ya2VyLWlkJykgfHwgMDtcblxuLyoqXG4gKiBTZXQgdGhlIHNlZWQuXG4gKiBIaWdobHkgcmVjb21tZW5kZWQgaWYgeW91IGRvbid0IHdhbnQgcGVvcGxlIHRvIHRyeSB0byBmaWd1cmUgb3V0IHlvdXIgaWQgc2NoZW1hLlxuICogZXhwb3NlZCBhcyBzaG9ydGlkLnNlZWQoaW50KVxuICogQHBhcmFtIHNlZWQgSW50ZWdlciB2YWx1ZSB0byBzZWVkIHRoZSByYW5kb20gYWxwaGFiZXQuICBBTFdBWVMgVVNFIFRIRSBTQU1FIFNFRUQgb3IgeW91IG1pZ2h0IGdldCBvdmVybGFwcy5cbiAqL1xuZnVuY3Rpb24gc2VlZChzZWVkVmFsdWUpIHtcbiAgICBhbHBoYWJldC5zZWVkKHNlZWRWYWx1ZSk7XG4gICAgcmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vKipcbiAqIFNldCB0aGUgY2x1c3RlciB3b3JrZXIgb3IgbWFjaGluZSBpZFxuICogZXhwb3NlZCBhcyBzaG9ydGlkLndvcmtlcihpbnQpXG4gKiBAcGFyYW0gd29ya2VySWQgd29ya2VyIG11c3QgYmUgcG9zaXRpdmUgaW50ZWdlci4gIE51bWJlciBsZXNzIHRoYW4gMTYgaXMgcmVjb21tZW5kZWQuXG4gKiByZXR1cm5zIHNob3J0aWQgbW9kdWxlIHNvIGl0IGNhbiBiZSBjaGFpbmVkLlxuICovXG5mdW5jdGlvbiB3b3JrZXIod29ya2VySWQpIHtcbiAgICBjbHVzdGVyV29ya2VySWQgPSB3b3JrZXJJZDtcbiAgICByZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8qKlxuICpcbiAqIHNldHMgbmV3IGNoYXJhY3RlcnMgdG8gdXNlIGluIHRoZSBhbHBoYWJldFxuICogcmV0dXJucyB0aGUgc2h1ZmZsZWQgYWxwaGFiZXRcbiAqL1xuZnVuY3Rpb24gY2hhcmFjdGVycyhuZXdDaGFyYWN0ZXJzKSB7XG4gICAgaWYgKG5ld0NoYXJhY3RlcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBhbHBoYWJldC5jaGFyYWN0ZXJzKG5ld0NoYXJhY3RlcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBhbHBoYWJldC5zaHVmZmxlZCgpO1xufVxuXG4vKipcbiAqIEdlbmVyYXRlIHVuaXF1ZSBpZFxuICogUmV0dXJucyBzdHJpbmcgaWRcbiAqL1xuZnVuY3Rpb24gZ2VuZXJhdGUoKSB7XG4gIHJldHVybiBidWlsZChjbHVzdGVyV29ya2VySWQpO1xufVxuXG4vLyBFeHBvcnQgYWxsIG90aGVyIGZ1bmN0aW9ucyBhcyBwcm9wZXJ0aWVzIG9mIHRoZSBnZW5lcmF0ZSBmdW5jdGlvblxubW9kdWxlLmV4cG9ydHMgPSBnZW5lcmF0ZTtcbm1vZHVsZS5leHBvcnRzLmdlbmVyYXRlID0gZ2VuZXJhdGU7XG5tb2R1bGUuZXhwb3J0cy5zZWVkID0gc2VlZDtcbm1vZHVsZS5leHBvcnRzLndvcmtlciA9IHdvcmtlcjtcbm1vZHVsZS5leHBvcnRzLmNoYXJhY3RlcnMgPSBjaGFyYWN0ZXJzO1xubW9kdWxlLmV4cG9ydHMuZGVjb2RlID0gZGVjb2RlO1xubW9kdWxlLmV4cG9ydHMuaXNWYWxpZCA9IGlzVmFsaWQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaG9ydGlkL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBGb3VuZCB0aGlzIHNlZWQtYmFzZWQgcmFuZG9tIGdlbmVyYXRvciBzb21ld2hlcmVcbi8vIEJhc2VkIG9uIFRoZSBDZW50cmFsIFJhbmRvbWl6ZXIgMS4zIChDKSAxOTk3IGJ5IFBhdWwgSG91bGUgKGhvdWxlQG1zYy5jb3JuZWxsLmVkdSlcblxudmFyIHNlZWQgPSAxO1xuXG4vKipcbiAqIHJldHVybiBhIHJhbmRvbSBudW1iZXIgYmFzZWQgb24gYSBzZWVkXG4gKiBAcGFyYW0gc2VlZFxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gZ2V0TmV4dFZhbHVlKCkge1xuICAgIHNlZWQgPSAoc2VlZCAqIDkzMDEgKyA0OTI5NykgJSAyMzMyODA7XG4gICAgcmV0dXJuIHNlZWQvKDIzMzI4MC4wKTtcbn1cblxuZnVuY3Rpb24gc2V0U2VlZChfc2VlZF8pIHtcbiAgICBzZWVkID0gX3NlZWRfO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBuZXh0VmFsdWU6IGdldE5leHRWYWx1ZSxcbiAgICBzZWVkOiBzZXRTZWVkXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvcmFuZG9tL3JhbmRvbS1mcm9tLXNlZWQuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNyeXB0byA9IHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmICh3aW5kb3cuY3J5cHRvIHx8IHdpbmRvdy5tc0NyeXB0byk7IC8vIElFIDExIHVzZXMgd2luZG93Lm1zQ3J5cHRvXG5cbmZ1bmN0aW9uIHJhbmRvbUJ5dGUoKSB7XG4gICAgaWYgKCFjcnlwdG8gfHwgIWNyeXB0by5nZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NikgJiAweDMwO1xuICAgIH1cbiAgICB2YXIgZGVzdCA9IG5ldyBVaW50OEFycmF5KDEpO1xuICAgIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMoZGVzdCk7XG4gICAgcmV0dXJuIGRlc3RbMF0gJiAweDMwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJhbmRvbUJ5dGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaG9ydGlkL2xpYi9yYW5kb20vcmFuZG9tLWJ5dGUtYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFscGhhYmV0ID0gcmVxdWlyZSgnLi9hbHBoYWJldCcpO1xuXG4vKipcbiAqIERlY29kZSB0aGUgaWQgdG8gZ2V0IHRoZSB2ZXJzaW9uIGFuZCB3b3JrZXJcbiAqIE1haW5seSBmb3IgZGVidWdnaW5nIGFuZCB0ZXN0aW5nLlxuICogQHBhcmFtIGlkIC0gdGhlIHNob3J0aWQtZ2VuZXJhdGVkIGlkLlxuICovXG5mdW5jdGlvbiBkZWNvZGUoaWQpIHtcbiAgICB2YXIgY2hhcmFjdGVycyA9IGFscGhhYmV0LnNodWZmbGVkKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdmVyc2lvbjogY2hhcmFjdGVycy5pbmRleE9mKGlkLnN1YnN0cigwLCAxKSkgJiAweDBmLFxuICAgICAgICB3b3JrZXI6IGNoYXJhY3RlcnMuaW5kZXhPZihpZC5zdWJzdHIoMSwgMSkpICYgMHgwZlxuICAgIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVjb2RlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvZGVjb2RlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBlbmNvZGUgPSByZXF1aXJlKCcuL2VuY29kZScpO1xudmFyIGFscGhhYmV0ID0gcmVxdWlyZSgnLi9hbHBoYWJldCcpO1xuXG4vLyBJZ25vcmUgYWxsIG1pbGxpc2Vjb25kcyBiZWZvcmUgYSBjZXJ0YWluIHRpbWUgdG8gcmVkdWNlIHRoZSBzaXplIG9mIHRoZSBkYXRlIGVudHJvcHkgd2l0aG91dCBzYWNyaWZpY2luZyB1bmlxdWVuZXNzLlxuLy8gVGhpcyBudW1iZXIgc2hvdWxkIGJlIHVwZGF0ZWQgZXZlcnkgeWVhciBvciBzbyB0byBrZWVwIHRoZSBnZW5lcmF0ZWQgaWQgc2hvcnQuXG4vLyBUbyByZWdlbmVyYXRlIGBuZXcgRGF0ZSgpIC0gMGAgYW5kIGJ1bXAgdGhlIHZlcnNpb24uIEFsd2F5cyBidW1wIHRoZSB2ZXJzaW9uIVxudmFyIFJFRFVDRV9USU1FID0gMTQ1OTcwNzYwNjUxODtcblxuLy8gZG9uJ3QgY2hhbmdlIHVubGVzcyB3ZSBjaGFuZ2UgdGhlIGFsZ29zIG9yIFJFRFVDRV9USU1FXG4vLyBtdXN0IGJlIGFuIGludGVnZXIgYW5kIGxlc3MgdGhhbiAxNlxudmFyIHZlcnNpb24gPSA2O1xuXG4vLyBDb3VudGVyIGlzIHVzZWQgd2hlbiBzaG9ydGlkIGlzIGNhbGxlZCBtdWx0aXBsZSB0aW1lcyBpbiBvbmUgc2Vjb25kLlxudmFyIGNvdW50ZXI7XG5cbi8vIFJlbWVtYmVyIHRoZSBsYXN0IHRpbWUgc2hvcnRpZCB3YXMgY2FsbGVkIGluIGNhc2UgY291bnRlciBpcyBuZWVkZWQuXG52YXIgcHJldmlvdXNTZWNvbmRzO1xuXG4vKipcbiAqIEdlbmVyYXRlIHVuaXF1ZSBpZFxuICogUmV0dXJucyBzdHJpbmcgaWRcbiAqL1xuZnVuY3Rpb24gYnVpbGQoY2x1c3RlcldvcmtlcklkKSB7XG5cbiAgICB2YXIgc3RyID0gJyc7XG5cbiAgICB2YXIgc2Vjb25kcyA9IE1hdGguZmxvb3IoKERhdGUubm93KCkgLSBSRURVQ0VfVElNRSkgKiAwLjAwMSk7XG5cbiAgICBpZiAoc2Vjb25kcyA9PT0gcHJldmlvdXNTZWNvbmRzKSB7XG4gICAgICAgIGNvdW50ZXIrKztcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb3VudGVyID0gMDtcbiAgICAgICAgcHJldmlvdXNTZWNvbmRzID0gc2Vjb25kcztcbiAgICB9XG5cbiAgICBzdHIgPSBzdHIgKyBlbmNvZGUoYWxwaGFiZXQubG9va3VwLCB2ZXJzaW9uKTtcbiAgICBzdHIgPSBzdHIgKyBlbmNvZGUoYWxwaGFiZXQubG9va3VwLCBjbHVzdGVyV29ya2VySWQpO1xuICAgIGlmIChjb3VudGVyID4gMCkge1xuICAgICAgICBzdHIgPSBzdHIgKyBlbmNvZGUoYWxwaGFiZXQubG9va3VwLCBjb3VudGVyKTtcbiAgICB9XG4gICAgc3RyID0gc3RyICsgZW5jb2RlKGFscGhhYmV0Lmxvb2t1cCwgc2Vjb25kcyk7XG5cbiAgICByZXR1cm4gc3RyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ1aWxkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvYnVpbGQuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBhbHBoYWJldCA9IHJlcXVpcmUoJy4vYWxwaGFiZXQnKTtcblxuZnVuY3Rpb24gaXNTaG9ydElkKGlkKSB7XG4gICAgaWYgKCFpZCB8fCB0eXBlb2YgaWQgIT09ICdzdHJpbmcnIHx8IGlkLmxlbmd0aCA8IDYgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgY2hhcmFjdGVycyA9IGFscGhhYmV0LmNoYXJhY3RlcnMoKTtcbiAgICB2YXIgbGVuID0gaWQubGVuZ3RoO1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47aSsrKSB7XG4gICAgICAgIGlmIChjaGFyYWN0ZXJzLmluZGV4T2YoaWRbaV0pID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU2hvcnRJZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Nob3J0aWQvbGliL2lzLXZhbGlkLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gMDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Nob3J0aWQvbGliL3V0aWwvY2x1c3Rlci13b3JrZXItaWQtYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==