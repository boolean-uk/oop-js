const Skateboard = require('../src/skateboard.js')

describe("Skateboard", function() {
  it("moves", function() {
    const skateboard = new Skateboard()
    expect(skateboard.move()).toEqual("moved 100m");
  })
})
