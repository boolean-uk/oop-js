const Dog = require('../src/dog.js')

describe('Dog', function () {
  it('has a type', function () {
    const dog = new Dog()
    expect(dog.type).toEqual('animal')
  })

  it('can sleep', function () {
    const dog = new Dog()
    expect(dog.sleep()).toEqual('zzzz')
  })

  it('can speak', function () {
    const dog = new Dog()
    expect(dog.speak()).toEqual('WOOF')
  })
})
