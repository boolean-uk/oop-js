const move = require('../src/race.js')

// test double
class TestVehicle {
  move() {
    return "moved some distance"
  }
}

describe("Race", function() {
  it("moves a vehicle", function() {
    const race = new Race()
    expect(race.move(new TestVehicle())).toEqual("moved some distance");
  })
})
