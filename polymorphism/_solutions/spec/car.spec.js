const Car = require('../src/car.js')

describe("Car", function() {
  it("moves", function() {
    const car = new Car()
    expect(car.move()).toEqual("moved 1000m");
  })
})
