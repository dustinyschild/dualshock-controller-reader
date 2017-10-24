var ds4 = require('ds4');
var through = require('through');
const hid = require('node-hid');
/*
// controller is a node-hid HID object representing the controller
hid.pipe(through(ds4.parseDS4HIDData)).pipe(process.stdout);
*/
ds4.log(hid, {
  rumbleRight: 0, // 0 ... 255
  rumbleLeft:  0, // 0 ... 255
  r:           0, // 0 ... 255
  g:           0, // 0 ... 255
  b:           0, // 0 ... 255
  flashOn:     0, // 0 ... 255  (flash on duration)
  flashOff:    0  // 0 ... 255  (flash off duration)
});

const devices = hid.devices();

console.log(devices);
