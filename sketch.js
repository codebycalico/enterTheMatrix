// Using The Coding Train tutorial with Emily Xie:
// https://www.youtube.com/watch?v=S1TQCi9axzg

let char_symbol;
let newStream;
let totalStreams = 300;
let streams = [];
let textSz = 19;

let capture;

function setup() {
  //createCanvas(window.innerWidth, window.innerHeight);
  createCanvas(1200, 1080);
  textSize(textSz);
  textFont('Courier New');
  capture = createCapture(VIDEO);
  capture.size(48, 48);
  capture.hide();

  for(var i = 0; i < totalStreams; i++) {
    streams[i] = new Stream(textSz, capture);
  }
}

function draw() {
  background(0, 115);
  capture.loadPixels();

  for(var i = 0; i < totalStreams; i++) {
    streams[i].generateSymbols();
    streams[i].render();
  }
}