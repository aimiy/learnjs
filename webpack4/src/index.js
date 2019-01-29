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

  // element.appendChild(myjpg);

  console.log(Data);

  return element;
}


let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./print.js',function(){
    console.log('Accepting the updated printMe module!');
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  })
}