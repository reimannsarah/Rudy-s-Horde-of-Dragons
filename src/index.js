import './css/styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { horseMeatControl, stinkoMalfoyControl } from './js/dragon';

const getValues = (collection, object, id, callback) => {
  if (collection.length === 0) {
    return;
  }
  const [currentElement, ...remainingElements] = collection;
  callback(currentElement, object, id);

  getValues(remainingElements, object, id, callback);
}

const showValues = (key, object, id) => {
  const p = document.createElement("p");
  p.innerText = `${key}: ${object[key]}`;
  document.getElementById(`${id}`).append(p);
}

window.onload = () => {
  document.getElementById("show-hm").onclick = () => {
    const currentState = horseMeatControl();
    getValues(Object.keys(currentState), currentState, 'all-values-hm', showValues);
  }

  document.getElementById("show-sm").onclick = () => {
    const currentState = stinkoMalfoyControl();
    getValues(Object.keys(currentState), currentState, 'all-values-sm', showValues);
  }
}
