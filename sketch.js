// Using The Coding Train tutorial with Emily Xie:
// https://www.youtube.com/watch?v=S1TQCi9axzg

let char_symbol;
let newStream;
let totalStreams = 100;
let streams = [];
let textSz = 19;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  textSize(textSz);
  textFont('Courier New');

  for(var i = 0; i < totalStreams; i++) {
    streams[i] = new Stream(textSz);
  }
}

function draw() {
  background(0);
  for(var i = 0; i < totalStreams; i++) {
    streams[i].generateSymbols();
    streams[i].render();
  }
}