const storeState = (initialState) => {
  let currentState = initialState;
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  };
};




const changeState = (prop) => {
  return (value) => {
    return (state) => {
      return {
        ...state,
        [prop]: (state[prop] || "") + value
      };
    };
  };
};

const flopper = changeState("snake")(4);
const flipper = changeState("snip")(66);
const singer = changeState('sing')("la la la");
const canWind = changeState("wind")('flap flap flap');
const canHaveToes = changeState("toes")("tip tap tap");

function toeFlyingDragon(name) {
  const dragon = { name: name }

  return {
    ...dragon,
    ...canWind(dragon),
    ...canHaveToes(dragon),
    ...flopper(dragon)
  };
}

const mouseEatingDragon = (name) => {
  const dragon = { name: name }
  return {
    ...dragon,
    ...flipper(dragon),
    ...canWind(dragon),
    ...singer(dragon)
  };
};

const horseMeat = toeFlyingDragon("Horse Meat");
const stinkoMalfoy = mouseEatingDragon("Sinko Malfoy");

export const horseMeatControl = storeState(horseMeat);
export const stinkoMalfoyControl = storeState(stinkoMalfoy);