const Plane = require('../src/plane.js')

describe("Plane", function() {
  it("moves", function() {
    const plane = new Plane()
    expect(plane.move()).toEqual("moved 10000m");
  })
})
