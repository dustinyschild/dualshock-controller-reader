const onoff = require('onoff');
const Gpio = onoff.Gpio;

const actions = {};

const pin23 = new Gpio(23,'out');
const pin24 = new Gpio(24,'out');

actions.circlePress = () => {
  console.log('circle button pressed');
  pin23.writeSync(1);
  pin24.writeSync(0);
};

actions.circleRelease = () => {
  console.log('circle button released');
  pin23.writeSync(0);
  pin24.writeSync(0);
};

actions.squarePress = () => {
  console.log('square button pressed');
  pin23.writeSync(0);
  pin24.writeSync(1);
};

actions.squareRelease = () => {
  console.log('square button released');
  pin23.writeSync(0);
  pin24.writeSync(0);
};

module.exports = actions;
