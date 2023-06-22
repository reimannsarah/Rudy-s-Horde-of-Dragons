import { changeState, storeState } from './business.js';

const fire = changeState("fire-breath")(20);
const intelligence = changeState("intelligence")(66);
const strength = changeState('strength')(35);
const charm = changeState("charm")(12);
const speed = changeState("speed")(55);
const fly = changeState("fly")(78);
const magic = changeState("magic")(26);

function speedDragon(name) {
  const dragon = { name: name };

  return {
    ...dragon,
    ...fly(dragon),
    ...speed(dragon),
    ...fire(dragon)
  };
}

const smartDragon = (name) => {
  const dragon = { name: name };
  return {
    ...dragon,
    ...intelligence(dragon),
    ...charm(dragon),
    ...fire(dragon)
  };
};

const strongDragon = (name) => {
  const dragon = { name: name };

  return {
    ...dragon,
    ...strength(dragon),
    ...fire(dragon),
    ...charm(dragon)
  };
};

const purpleDragon = (name) => {
  const dragon = { name: name };

  return {
    ...dragon,
    ...charm(dragon),
    ...fly(dragon)
  };
};

const puffTheMagicDragon = (name) => {
  const dragon = { name: name };

  return {
    ...dragon,
    ...magic(dragon),
    ...speed(dragon)
  };
};

const horseMeat = speedDragon("Horse Meat");
const stinkoMalfoy = smartDragon("Sinko Malfoy");
const grangerRanger = purpleDragon("Granger Ranger");
const larryTheLobster = strongDragon("Larry The Lobster");
const puff = puffTheMagicDragon("Puff The Magic Dragon");
const crazyEyes = speedDragon("Crazy Eyes");

export const horseMeatControl = storeState(horseMeat);
export const stinkoMalfoyControl = storeState(stinkoMalfoy);
export const grangerRangerControl = storeState(grangerRanger);
export const larryTheLobsterControl = storeState(larryTheLobster);
export const puffTheMagicDragonControl = storeState(puff);
export const crazyEyesControl = storeState(crazyEyes);