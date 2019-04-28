//Just using the P5 import for typings, webpack can't load p5.js as a module
import 'p5';
import * as sketch from './sketch';
let background = document.getElementById('animation');
new p5(sketch.p5Wrapper, background);