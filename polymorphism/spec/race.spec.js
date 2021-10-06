const Race = require('../src/race.js')
const Skateboard = require('../src/skateboard.js');
const Car = require('../src/car.js');
const Plane = require('../src/plane.js');

describe("Race", function() {
  let race

  beforeEach(function() {
    race = new Race()
  })

  it("Skateboard", function() {
    expect(race.move(new Skateboard())).toEqual("moved 100m");
  })

  it("Car", function() {
    expect(race.move(new Car())).toEqual("moved 1000m");
  })

  it("Plane", function() {
    expect(race.move(new Plane())).toEqual("moved 10000m");
  })

  it("SpaceShip", function() {
    expect(race.move(new SpaceShip())).toEqual("moved 100000m");
  })
})
