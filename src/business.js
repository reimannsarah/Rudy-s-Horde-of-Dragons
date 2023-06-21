const storeState = (initialState) => {
  let currentState = initialState;
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  }
}

export const horseMeatControl = storeState(horseMeat);
export const motherOfGodControl = storeState({ stomach: 10, gord: 3, color: "yellow", slit: 3, toes: 2 });
export const sandyPlungerControl = storeState({ toilet: 2, submersible: 10000, color: "red", rodent: "rat", putrid: "stank"});

const changeState = (prop) => {
  return (value) => {
    return (state) => {
      return {
        ...state,
        [prop]: (state[prop] || 0) + value
      }
    }
  }
}

export const starburst = changeState("wind")(5);
export const fireCooter = changeState("flame")(8);
export const slanker = changeState("tail")(2);
export const hoodler = changeState("color")("green")
export const slipper = changeState("toes")(-6);
export const okay = changeState("slit")(8);

const canTail = () => {
  const obj = {
    tail: function(girth) {
      return girth;
    }
  }
  return obj;
}

const canWind = () => {
  const obj = {
    wind: function(speed) {
      return speed;
    }
  }
  return obj;
}

const dragon = (name) => {
  let state = {
    name
  }
  return {...state, ...canTail, ...canWind}
}

const horseMeat = dragon("Horse Meat");

horseMeat.canWind(6)