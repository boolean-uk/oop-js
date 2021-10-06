const Animal = require('../src/animal.js')

describe('Animal', function () {
  it('has a type', function () {
    const animal = new Animal()
    expect(animal.type).toEqual('animal')
  })

  it('can sleep', function () {
    const animal = new Animal()
    expect(animal.sleep()).toEqual('zzzz')
  })
})
