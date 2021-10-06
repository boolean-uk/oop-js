const Dog = require('../src/dog.js')
// can and should be mocked
const LifeFunctions = require('../src/lifeFunctions.js')

describe('Dog', function () {
  let lifeFunctions, dog

  beforeEach(function () {
    lifeFunctions = new LifeFunctions()
    dog = new Dog(lifeFunctions)
  })

  it('has a type', function () {
    expect(dog.type).toEqual('animal')
  })

  it('can sleep', function () {
    expect(dog.sleep()).toEqual('zzzz')
  })

  it('can speak', function () {
    expect(dog.speak()).toEqual('WOOF')
  })
})
