const Skateboard = require('../src/skateboard.js');
const Car = require('../src/car.js');
const Plane = require('../src/plane.js');

class Race {
  move(vehicle) {
    if (vehicle instanceof Skateboard) {
      return "moved 100m";
    }

    if (vehicle instanceof Car) {
      return "moved 1000m";
    }

    if (vehicle instanceof Plane) {
      return "moved 10000m";
    }
  }
}


module.exports = Race;
