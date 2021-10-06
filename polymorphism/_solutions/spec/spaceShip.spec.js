const SpaceShip = require('../src/spaceShip.js')

describe("SpaceShip", function() {
  it("moves", function() {
    const spaceShip = new SpaceShip()
    expect(spaceShip.move()).("moved 100000m");
  })
})
