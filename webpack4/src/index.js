import _ from 'lodash';
import './style.css';
import img from './rocket.jpg';
import Data from './data.xml';
import printMe from './print.js';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);

  var myjpg = new Image();
  myjpg.src = img;

  element.appendChild(myjpg);

  console.log(Data);

  return element;
}

document.body.appendChild(component());