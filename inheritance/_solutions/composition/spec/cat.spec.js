const Cat = require('../src/cat.js')
const LifeFunctions = require('../src/lifeFunctions.js')

describe('Cat', function () {
  let lifeFunctions, cat

  beforeEach(function () {
    lifeFunctions = new LifeFunctions()
    cat = new Cat('Egyptian', lifeFunctions)
  })

  it('has a type', function () {
    expect(cat.type).toEqual('animal')
  })

  it('has a breed', function () {
    expect(cat.breed).toEqual('Egyptian')
  })

  it('can sleep', function () {
    expect(cat.sleep()).toEqual('zzzz')
  })

  it('can speak', function () {
    expect(cat.speak()).toEqual('MIAOW')
  })
})
