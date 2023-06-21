import './css/styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {horseMeatControl, motherOfGodControl, sandyPlungerControl, starburst, fireCooter, hoodler, slanker, slipper, okay} from './business.js'

const horseMeat = () => {
  document.getElementById('hm-starburst').onclick = function() {
    const newState = horseMeatControl(starburst);
    document.querySelector('#hm-wind-value').innerText = `Wind: ${newState.wind}`;
  }
  document.getElementById('hm-fireCooter').onclick = function() {
    const newState = horseMeatControl(fireCooter);
    document.querySelector('#hm-flame-value').innerText = `Flame: ${newState.flame}`;
  }
  document.getElementById('hm-slanker').onclick = function() {
    const newState = horseMeatControl(slanker);
    document.querySelector('#hm-tail-value').innerText = `Tail: ${newState.tail}`; 
  }
  document.getElementById('hm-hoodler').onclick = function() {
    const newState = horseMeatControl(hoodler);
    document.querySelector('#hm-color-value').innerText = `Color: ${newState.color}`;
  }
  document.getElementById('hm-slipper').onclick = function() {
    const newState = horseMeatControl(slipper);
    document.querySelector('#hm-toes-value').innerText = `Toes: ${newState.toes}`;
  }
  document.getElementById('hm-okay').onclick = function() {
    const newState = horseMeatControl(okay);
    document.querySelector('#hm-slit-value').innerText = `Slit: ${newState.slit}`;
  }
}

const motherOfGod = () => {
  document.getElementById('mog-starburst').onclick = function() {
    const newState = motherOfGodControl(starburst);
    document.getElementById('mog-wind-value').innerText = `Wind: ${newState.wind}`;
  }
  document.getElementById('mog-fireCooter').onclick = function() {
    const newState = motherOfGodControl(fireCooter);
    document.getElementById('mog-flame-value').innerText = `Flame: ${newState.flame}`;
  }
  document.getElementById('mog-slanker').onclick = function() {
    const newState = motherOfGodControl(slanker);
    document.getElementById('mog-tail-value').innerText = `Tail: ${newState.tail}`;
  }
  document.getElementById('mog-hoodler').onclick = function() {
    const newState = motherOfGodControl(hoodler);
    document.getElementById('mog-color-value').innerText = `Color: ${newState.color}`;
  }
  document.getElementById('mog-slipper').onclick = function() {
    const newState = motherOfGodControl(slipper);
    document.getElementById('mog-toes-value').innerText = `Toes: ${newState.toes}`;
  }
  document.getElementById('mog-okay').onclick = function() {
    const newState = motherOfGodControl(okay);
    document.getElementById('mog-slit-value').innerText = `Slit: ${newState.slit}`;
  }
  document.getElementById("show-mog").onclick = () => {
    const currentState = motherOfGodControl();
    Object.keys(currentState)
  }
}

const sandyPlunger = () => {
  document.getElementById('sp-starburst').onclick = function() {
    const newState = sandyPlungerControl(starburst);
    document.getElementById('sp-wind-value').innerText = `Wind: ${newState.wind}`;
  }
  document.getElementById('sp-fireCooter').onclick = function() {
    const newState = sandyPlungerControl(fireCooter);
    document.getElementById('sp-flame-value').innerText = `Flame: ${newState.flame}`;
  }
  document.getElementById('sp-slanker').onclick = function() {
    const newState = sandyPlungerControl(slanker);
    document.getElementById('sp-tail-value').innerText = `Tail: ${newState.tail}`;
  }
  document.getElementById('sp-hoodler').onclick = function() {
    const newState = sandyPlungerControl(hoodler);
    document.getElementById('sp-color-value').innerText = `Color: ${newState.color}`;
  }
  document.getElementById('sp-slipper').onclick = function() {
    const newState = sandyPlungerControl(slipper);
    document.getElementById('sp-toes-value').innerText = `Toes: ${newState.toes}`;
  }
  document.getElementById('sp-okay').onclick = function() {
    const newState = sandyPlungerControl(okay);
    document.getElementById('sp-slit-value').innerText = `Slit: ${newState.slit}`;
  }
}


window.onload = function () {
  horseMeat();
  motherOfGod();
  sandyPlunger();
}
