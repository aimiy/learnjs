import './style.css';
import img from './rocket.jpg';
import Data from './data.xml';
import printMe from './print.js';

import { cube } from './math.js';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!')
}

function component() {
  var element = document.createElement('pre');

  element.innerHTML = [
  'Hello webpack',
  '5 cubed is equa to ' + cube(5)].join('\n\n');

  return element;
}


document.body.appendChild(component());
