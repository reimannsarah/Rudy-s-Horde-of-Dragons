import './css/styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { grangerRangerControl, horseMeatControl, larryTheLobsterControl, puffTheMagicDragonControl, stinkoMalfoyControl, crazyEyesControl } from './js/dragon';

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
  };

  document.getElementById("show-sm").onclick = () => {
    const currentState = stinkoMalfoyControl();
    getValues(Object.keys(currentState), currentState, 'all-values-sm', showValues);
  };

  document.getElementById("show-gr").onclick = () => {
    const currentState = grangerRangerControl();
    getValues(Object.keys(currentState), currentState, 'all-values-gr', showValues);
  };

  document.getElementById("show-ltl").onclick = () => {
    const currentState = larryTheLobsterControl();
    getValues(Object.keys(currentState), currentState, 'all-values-ltl', showValues);
  };

  document.getElementById("show-ptmd").onclick = () => {
    const currentState = puffTheMagicDragonControl();
    getValues(Object.keys(currentState), currentState, 'all-values-ptmd', showValues);
  };

  document.getElementById("show-ce").onclick = () => {
    const currentState = crazyEyesControl();
    getValues(Object.keys(currentState), currentState, 'all-values-ce', showValues);
  };
};
