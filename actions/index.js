const onoff = require('onoff');
const Gpio = onoff.Gpio;

const actions = {};

const pin23 = new Gpio(23,'out');

actions.circlePress = () => {
  console.log('circle button pressed');
  pin23.writeSync(1);
};

actions.circleRelease = () => {
  console.log('circle button released');
  pin23.writeSync(0);
};

module.exports = actions;
