/*!
 * Duplication of Image
 * @version 1.0.0 | Fri Aug 12 2022
 * @author Token Kim
 * @license ISC
 */
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["DuplicateDraw"] = factory();
	else
		root["DuplicateDraw"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/baseCanvas.js":
/*!***************************!*\
  !*** ./lib/baseCanvas.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BaseCanvas)\n/* harmony export */ });\nclass BaseCanvas {\r\n  #canvas;\r\n  #ctx;\r\n  #pixelRatio;\r\n  #stageWidth;\r\n  #stageHeight;\r\n  #isFull;\r\n\r\n  constructor(isFull = false) {\r\n    this.#canvas = document.createElement('canvas');\r\n    this.#ctx = this.#canvas.getContext('2d');\r\n    document.body.append(this.#canvas);\r\n\r\n    this.#pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;\r\n    this.#isFull = isFull;\r\n    this.#isFull && this.#canvas.classList.add('canvas-full');\r\n  }\r\n\r\n  resize(width = 0, height = 0) {\r\n    this.#stageWidth = width === 0 ? document.body.clientWidth : width;\r\n    this.#stageHeight = height === 0 ? document.body.clientHeight : height;\r\n\r\n    this.#canvas.width = this.#stageWidth * this.#pixelRatio;\r\n    this.#canvas.height = this.#stageHeight * this.#pixelRatio;\r\n    this.#ctx.scale(this.#pixelRatio, this.#pixelRatio);\r\n  }\r\n\r\n  clearCanvas() {\r\n    this.#ctx.clearRect(0, 0, this.#stageWidth, this.#stageHeight);\r\n  }\r\n\r\n  animateTarget(handler, ...arg) {\r\n    return handler(this.#ctx, ...arg);\r\n  }\r\n\r\n  saveCanvas() {\r\n    this.#ctx.save();\r\n  }\r\n\r\n  restoreCanvas() {\r\n    this.#ctx.restore();\r\n  }\r\n\r\n  addEventToCanvas(type, listener) {\r\n    this.#canvas.addEventListener(type, listener);\r\n  }\r\n\r\n  removeEventFromCanvas(type, listener) {\r\n    this.#canvas.removeEventListener(type, listener);\r\n  }\r\n\r\n  bringToStage() {\r\n    document.body.append(this.#canvas);\r\n  }\r\n\r\n  removeFromStage() {\r\n    this.clearCanvas();\r\n    document.body.removeChild(this.#canvas);\r\n  }\r\n\r\n  fill() {\r\n    this.#ctx.fill();\r\n  }\r\n\r\n  fillRect(x, y, w, h) {\r\n    this.#ctx.fillRect(x, y, w, h);\r\n  }\r\n\r\n  fillText(text, x, y, maxWidth = undefined) {\r\n    this.#ctx.fillText(text, x, y, maxWidth);\r\n  }\r\n\r\n  measureText(text) {\r\n    return this.#ctx.measureText(text);\r\n  }\r\n\r\n  translate(x, y) {\r\n    this.#ctx.translate(x, y);\r\n  }\r\n\r\n  scale(x, y) {\r\n    this.#ctx.scale(x, y);\r\n  }\r\n\r\n  rotate(radian) {\r\n    this.#ctx.rotate(radian);\r\n  }\r\n\r\n  beginPath() {\r\n    this.#ctx.beginPath();\r\n  }\r\n\r\n  stroke() {\r\n    this.#ctx.stroke();\r\n  }\r\n\r\n  arc(x, y, radius, startAngle, endAngle, counterclockwise = false) {\r\n    this.#ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);\r\n  }\r\n\r\n  moveTo(x, y) {\r\n    this.#ctx.moveTo(x, y);\r\n  }\r\n\r\n  lineTo(x, y) {\r\n    this.#ctx.lineTo(x, y);\r\n  }\r\n\r\n  drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh) {\r\n    this.#ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);\r\n  }\r\n\r\n  getImageData(sx, sy, sw, sh, settings = undefined) {\r\n    return this.#ctx.getImageData(sx, sy, sw, sh, settings);\r\n  }\r\n\r\n  setPosition(x, y) {\r\n    if (this.#isFull) {\r\n      throw new Error('Positioning is not possible in full screen mode.');\r\n    }\r\n\r\n    this.#canvas.style.left = `${x}px`;\r\n    this.#canvas.style.top = `${y}px`;\r\n  }\r\n\r\n  getFont() {\r\n    return this.#ctx.font;\r\n  }\r\n\r\n  setFont(font) {\r\n    return (this.#ctx.font = font);\r\n  }\r\n\r\n  getFillStyle() {\r\n    return this.#ctx.fillStyle;\r\n  }\r\n\r\n  setFillStyle(fillStyle) {\r\n    this.#ctx.fillStyle = fillStyle;\r\n  }\r\n\r\n  getStrokeStyle() {\r\n    return this.#ctx.strokeStyle;\r\n  }\r\n\r\n  setStrokeStyle(strokeStyle) {\r\n    this.#ctx.strokeStyle = strokeStyle;\r\n  }\r\n\r\n  getLineWidth() {\r\n    return this.#ctx.lineWidth;\r\n  }\r\n\r\n  setLineWidth(lineWidth) {\r\n    this.#ctx.lineWidth = lineWidth;\r\n  }\r\n\r\n  getTextAlign() {\r\n    return this.#ctx.textAlign;\r\n  }\r\n\r\n  setTextAlign(textAlign) {\r\n    return (this.#ctx.textAlign = textAlign);\r\n  }\r\n\r\n  getTextBaseline() {\r\n    return this.#ctx.textBaseline;\r\n  }\r\n\r\n  setTextBaseline(textBaseline) {\r\n    this.#ctx.textBaseline = textBaseline;\r\n  }\r\n\r\n  get stageWidth() {\r\n    return this.#stageWidth;\r\n  }\r\n\r\n  get stageHeight() {\r\n    return this.#stageHeight;\r\n  }\r\n\r\n  get pixelRatio() {\r\n    return this.#pixelRatio;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://DuplicateDraw/./lib/baseCanvas.js?");

/***/ }),

/***/ "./lib/fontFormat.js":
/*!***************************!*\
  !*** ./lib/fontFormat.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FontFormat)\n/* harmony export */ });\nclass FontFormat {\r\n  #width;\r\n  #size;\r\n  #name;\r\n\r\n  constructor(width, size, name) {\r\n    this.#width = width;\r\n    this.#size = size;\r\n    this.#name = name;\r\n  }\r\n\r\n  get width() {\r\n    return this.#width();\r\n  }\r\n\r\n  get size() {\r\n    return this.#width();\r\n  }\r\n\r\n  get size() {\r\n    return this.#width();\r\n  }\r\n\r\n  get font() {\r\n    return `${this.#width} ${this.#size}px ${this.#name}`; // prettier-ignore\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://DuplicateDraw/./lib/fontFormat.js?");

/***/ }),

/***/ "./lib/rect.js":
/*!*********************!*\
  !*** ./lib/rect.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Rect)\n/* harmony export */ });\nclass Rect {\r\n  #x;\r\n  #y;\r\n  #width;\r\n  #height;\r\n\r\n  constructor(x, y, width, height) {\r\n    this.#x = x;\r\n    this.#y = y;\r\n    this.#width = width;\r\n    this.#height = height;\r\n  }\r\n\r\n  get x() {\r\n    return this.#x;\r\n  }\r\n\r\n  set x(x) {\r\n    this.#x = x;\r\n  }\r\n\r\n  get y() {\r\n    return this.#y;\r\n  }\r\n\r\n  set y(y) {\r\n    this.#y = y;\r\n  }\r\n\r\n  get width() {\r\n    return this.#width;\r\n  }\r\n\r\n  set width(width) {\r\n    this.#x = x;\r\n  }\r\n\r\n  get height() {\r\n    return this.#height;\r\n  }\r\n\r\n  set height(height) {\r\n    this.#height = height;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://DuplicateDraw/./lib/rect.js?");

/***/ }),

/***/ "./src/duplicateDraw.js":
/*!******************************!*\
  !*** ./src/duplicateDraw.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DuplicateDraw)\n/* harmony export */ });\n/* harmony import */ var _imageGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imageGenerator.js */ \"./src/imageGenerator.js\");\n/* harmony import */ var _lib_baseCanvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/baseCanvas.js */ \"./lib/baseCanvas.js\");\n/* harmony import */ var _lib_rect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/rect.js */ \"./lib/rect.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\r\n\r\n\r\n\r\n\r\nclass DuplicateDraw extends _lib_baseCanvas_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  static MAX_CIRCLES_PER_FRAME = 10;\r\n\r\n  static IMG_POS_LEFT = 150;\r\n  static IMAGE_WIDTH = 300;\r\n  static IMAGE_MOVING_SPEED = 2;\r\n\r\n  static FPS_SETTING = 10;\r\n  static FPS_TIME_SETTING = 1000 / DuplicateDraw.FPS_SETTING;\r\n  static SETTING_VELOCITY = 1.03;\r\n\r\n  static MAX_RADIUS = 200;\r\n  static MIN_RADIUS = 10;\r\n\r\n  #imageGenerator;\r\n  #maxParticlesIndex;\r\n  #particles;\r\n  #prevTimeForSpeed;\r\n  #circlesPerFrame;\r\n  #speedForMaxRadius;\r\n  #speedForCirclesPerFrame;\r\n  #maxRadius;\r\n\r\n  constructor(imgList) {\r\n    super();\r\n\r\n    const imgRect = new _lib_rect_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](DuplicateDraw.IMG_POS_LEFT, 0, DuplicateDraw.IMAGE_WIDTH, 0); // prettier-ignore\r\n    this.#imageGenerator = new _imageGenerator_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](imgList, imgRect, DuplicateDraw.IMAGE_MOVING_SPEED); // prettier-ignore\r\n\r\n    this.resize();\r\n    this.#setParticles();\r\n  }\r\n\r\n  init() {\r\n    this.#prevTimeForSpeed = 0;\r\n    this.#circlesPerFrame = 1;\r\n    this.#speedForMaxRadius = 2;\r\n    this.#speedForCirclesPerFrame = 0.2;\r\n    this.#maxRadius = DuplicateDraw.MAX_RADIUS;\r\n  }\r\n\r\n  bringToStage() {\r\n    this.init();\r\n    this.resize();\r\n\r\n    super.bringToStage();\r\n    this.#imageGenerator.bringToStage();\r\n  }\r\n\r\n  removeFromStage() {\r\n    this.#imageGenerator.removeFromStage();\r\n    super.removeFromStage();\r\n  }\r\n\r\n  resize() {\r\n    super.resize();\r\n    this.#imageGenerator.resize();\r\n\r\n    this.init();\r\n  }\r\n\r\n  animate(curTime) {\r\n    this.#checkFPSTimeForSetting(curTime);\r\n    this.#drawBackground();\r\n    this.#imageGenerator.isDisappeared && this.#changeNextImage();\r\n  }\r\n\r\n  #checkFPSTimeForSetting(curTime) {\r\n    if (!this.#prevTimeForSpeed) {\r\n      this.#prevTimeForSpeed = curTime;\r\n    }\r\n\r\n    if (curTime - this.#prevTimeForSpeed > DuplicateDraw.FPS_TIME_SETTING) {\r\n      this.#prevTimeForSpeed = curTime;\r\n\r\n      this.#onFPSTimeForSetting();\r\n    }\r\n  }\r\n\r\n  #onFPSTimeForSetting() {\r\n    this.#speedForMaxRadius *= DuplicateDraw.SETTING_VELOCITY;\r\n    this.#speedForCirclesPerFrame *= DuplicateDraw.SETTING_VELOCITY;\r\n\r\n    if (this.#maxRadius > DuplicateDraw.MIN_RADIUS) {\r\n      this.#maxRadius -= this.#speedForMaxRadius;\r\n    }\r\n\r\n    if (this.#circlesPerFrame < DuplicateDraw.MAX_CIRCLES_PER_FRAME) {\r\n      this.#circlesPerFrame += this.#speedForCirclesPerFrame;\r\n    }\r\n  }\r\n\r\n  #drawBackground() {\r\n    if (this.#imageGenerator) {\r\n      this.#imageGenerator.clearCanvas();\r\n      this.#imageGenerator.drawMovingImage();\r\n\r\n      let randomIndex = 0;\r\n      let particle;\r\n      let isOnceInTow;\r\n\r\n      for (let i = 0; i < this.#circlesPerFrame; i++) {\r\n        randomIndex = Math.round(Math.random() * this.#maxParticlesIndex);\r\n        particle = this.#particles[randomIndex];\r\n        isOnceInTow = i % 2;\r\n\r\n        this.#drawParticle(particle);\r\n        isOnceInTow && this.#imageGenerator.drawLineToParticle(particle);\r\n      }\r\n    }\r\n  }\r\n\r\n  #drawParticle(particle) {\r\n    let randomRadius;\r\n\r\n    randomRadius = Math.random() * this.#maxRadius + DuplicateDraw.MIN_RADIUS;\r\n\r\n    this.beginPath();\r\n    this.setFillStyle(particle.color);\r\n    this.arc(particle.x, particle.y, randomRadius, 0, _utils_js__WEBPACK_IMPORTED_MODULE_3__.PI2);\r\n    this.fill();\r\n  }\r\n\r\n  #changeNextImage() {\r\n    this.clearCanvas();\r\n    this.#imageGenerator.nextImage();\r\n    this.init();\r\n    this.#setParticles();\r\n  }\r\n\r\n  #setParticles() {\r\n    this.#particles = [];\r\n    this.#particles = this.#imageGenerator.getImgParticleInfo();\r\n    this.#maxParticlesIndex =\r\n      this.#particles.length > 1 ? this.#particles.length - 1 : 0;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://DuplicateDraw/./src/duplicateDraw.js?");

/***/ }),

/***/ "./src/imageGenerator.js":
/*!*******************************!*\
  !*** ./src/imageGenerator.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ImageGenerator)\n/* harmony export */ });\n/* harmony import */ var _lib_baseCanvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/baseCanvas.js */ \"./lib/baseCanvas.js\");\n/* harmony import */ var _lib_fontFormat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/fontFormat.js */ \"./lib/fontFormat.js\");\n/* harmony import */ var _lib_rect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/rect.js */ \"./lib/rect.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\r\n\r\n\r\n\r\n\r\nclass ImageGenerator extends _lib_baseCanvas_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  static LINE_COLOR = 'rgb(0, 0, 0)';\r\n  static BG_THICKNESS = 6;\r\n  static BG_HALF_THICKNESS = ImageGenerator.BG_THICKNESS / 2;\r\n  static BG_COLOR = 'rgba(255, 255, 255, 0.9)';\r\n  static TITLE = 'GOGH';\r\n  static SUB_TITLE = \"Inspired by 'Interactive Developer'\";\r\n\r\n  #imageList = [];\r\n  #currentImage;\r\n  #posInfo;\r\n  #imgRect;\r\n  #imgToStageRatio;\r\n  #movingSpeed;\r\n  #titleFont;\r\n  #subTitleFont;\r\n  #currentImageIndex;\r\n\r\n  constructor(imageList, posInfo, movingSpeed) {\r\n    super();\r\n\r\n    this.#imageList = imageList;\r\n    this.#posInfo = posInfo;\r\n    this.#movingSpeed = movingSpeed;\r\n    this.#titleFont = new _lib_fontFormat_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](800, 300, 'Arial');\r\n    this.#subTitleFont = new _lib_fontFormat_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](600, 40, 'Arial');\r\n    this.#currentImageIndex = 0;\r\n\r\n    this.nextImage();\r\n  }\r\n\r\n  nextImage() {\r\n    this.#currentImage = this.#imageList[this.#currentImageIndex];\r\n\r\n    this.#imgRect = new _lib_rect_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\r\n      this.#posInfo.x,\r\n      0,\r\n      this.#posInfo.width,\r\n      this.#posInfo.width * (this.#currentImage.height / this.#currentImage.width)\r\n      \r\n    ); // prettier-ignore\r\n    this.#currentImageIndex = (this.#currentImageIndex + 1) % this.#imageList.length; // prettier-ignore\r\n    this.resize();\r\n  }\r\n\r\n  resize() {\r\n    super.resize();\r\n\r\n    this.#imgRect.y = this.stageHeight;\r\n\r\n    if (this.#currentImage.width > this.#currentImage.height) {\r\n      const ratio = this.stageWidth / this.#imgRect.width;\r\n      this.#imgToStageRatio = {\r\n        x: 0,\r\n        y: Math.round((this.stageHeight - this.#imgRect.height * ratio) / 2),\r\n        ratio: ratio,\r\n      };\r\n    } else {\r\n      const ratio = this.stageHeight / this.#imgRect.height;\r\n      this.#imgToStageRatio = {\r\n        x: Math.round((this.stageWidth - this.#imgRect.width * ratio) / 2),\r\n        y: 0,\r\n        ratio: ratio,\r\n      };\r\n    }\r\n  }\r\n\r\n  getImgParticleInfo() {\r\n    this.drawImage(\r\n      this.#currentImage,\r\n      0, 0, this.#currentImage.width, this.#currentImage.height,\r\n      0, 0, this.#imgRect.width, this.#imgRect.height\r\n    ); // prettier-ignore\r\n\r\n    const imageData = this.getImageData(0, 0, this.#imgRect.width, this.#imgRect.height).data; // prettier-ignore\r\n    let particles = [];\r\n    let pixelIndex;\r\n\r\n    for (let y = 0; y < this.#imgRect.height; y++) {\r\n      for (let x = 0; x < this.#imgRect.width; x++) {\r\n        pixelIndex = (x + y * this.#imgRect.width) * 4;\r\n\r\n        particles.push({\r\n          x: x * this.#imgToStageRatio.ratio + this.#imgToStageRatio.x,\r\n          y: y * this.#imgToStageRatio.ratio + this.#imgToStageRatio.y,\r\n          color: `rgb(${imageData[pixelIndex]}, ${imageData[pixelIndex + 1]}, ${imageData[pixelIndex + 2]})`,\r\n        }); // prettier-ignore\r\n      }\r\n    }\r\n\r\n    return particles;\r\n  }\r\n\r\n  drawLineToParticle(particle) {\r\n    this.saveCanvas();\r\n\r\n    this.setStrokeStyle(ImageGenerator.LINE_COLOR);\r\n    this.beginPath();\r\n\r\n    const posOnImage = {\r\n      x : this.#imgRect.x + (particle.x - this.#imgToStageRatio.x) / this.#imgToStageRatio.ratio,\r\n      y: this.#imgRect.y + (particle.y - this.#imgToStageRatio.y) / this.#imgToStageRatio.ratio,\r\n    }; // prettier-ignore\r\n\r\n    this.moveTo(particle.x, particle.y);\r\n    this.lineTo(posOnImage.x, posOnImage.y);\r\n    this.stroke();\r\n\r\n    this.setFillStyle(particle.color);\r\n    this.beginPath();\r\n    this.arc(posOnImage.x, posOnImage.y, 4, 0, _utils_js__WEBPACK_IMPORTED_MODULE_3__.PI2);\r\n\r\n    this.fill();\r\n\r\n    this.restoreCanvas();\r\n  }\r\n\r\n  drawMovingImage() {\r\n    this.#drawTitle();\r\n    this.#drawSubTitle();\r\n    this.#drawBackground();\r\n\r\n    this.drawImage(\r\n      this.#currentImage,\r\n      0, 0, this.#currentImage.width, this.#currentImage.height,\r\n      this.#imgRect.x, this.#imgRect.y, this.#imgRect.width, this.#imgRect.height\r\n    ); // prettier-ignore\r\n\r\n    this.#imgRect.y -= this.#movingSpeed;\r\n  }\r\n\r\n  #drawTitle() {\r\n    this.saveCanvas();\r\n\r\n    this.setFont(this.#titleFont.font);\r\n    this.setFillStyle(ImageGenerator.BG_COLOR);\r\n\r\n    const fontPos = this.measureText(ImageGenerator.TITLE);\r\n    this.fillText(\r\n      ImageGenerator.TITLE,\r\n      (this.stageWidth - fontPos.width) / 2,\r\n      (this.stageHeight + fontPos.actualBoundingBoxAscent - fontPos.actualBoundingBoxDescent) / 2\r\n    ); // prettier-ignore\r\n\r\n    this.restoreCanvas();\r\n  }\r\n\r\n  #drawSubTitle() {\r\n    this.saveCanvas();\r\n\r\n    this.setFont(this.#subTitleFont.font);\r\n    this.setFillStyle(ImageGenerator.BG_COLOR);\r\n    this.setTextBaseline('middle');\r\n\r\n    const fontPos = this.measureText(ImageGenerator.SUB_TITLE);\r\n    this.fillText(ImageGenerator.SUB_TITLE, (this.stageWidth - fontPos.width) / 2, 50); // prettier-ignore\r\n\r\n    this.restoreCanvas();\r\n  }\r\n\r\n  #drawBackground() {\r\n    this.saveCanvas();\r\n\r\n    this.setFillStyle(ImageGenerator.BG_COLOR);\r\n    this.fillRect(\r\n      this.#imgRect.x - ImageGenerator.BG_HALF_THICKNESS,\r\n      this.#imgRect.y - ImageGenerator.BG_HALF_THICKNESS,\r\n      this.#imgRect.width + ImageGenerator.BG_THICKNESS,\r\n      this.#imgRect.height + ImageGenerator.BG_THICKNESS\r\n    );\r\n\r\n    this.restoreCanvas();\r\n  }\r\n\r\n  get isDisappeared() {\r\n    return this.#imgRect.y + this.#imgRect.height * 2 < 0;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://DuplicateDraw/./src/imageGenerator.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PI2\": () => (/* binding */ PI2),\n/* harmony export */   \"colorToRGB\": () => (/* binding */ colorToRGB)\n/* harmony export */ });\nconst PI2 = Math.PI * 2;\r\n\r\nfunction colorToRGB(color) {\r\n  const colorName = color.toLowerCase();\r\n\r\n  if (colorName.includes('rgb')) {\r\n    const openBracketIndex = colorName.indexOf('(');\r\n    const closeBracketIndex = colorName.indexOf(')');\r\n\r\n    const colorList = colorName\r\n      .substring(openBracketIndex + 1, closeBracketIndex)\r\n      .split(', ');\r\n\r\n    return {\r\n      r: colorList[0],\r\n      g: colorList[1],\r\n      b: colorList[2],\r\n    };\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://DuplicateDraw/./src/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/duplicateDraw.js");
/******/ 	__webpack_exports__ = __webpack_exports__["default"];
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});