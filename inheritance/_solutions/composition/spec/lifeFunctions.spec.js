const LifeFunctions = require('../src/lifeFunctions.js')

describe('LifeFunctions', function () {
  let lifeFunctions

  beforeEach(function () {
    lifeFunctions = new LifeFunctions()
  })

  it('can slep', function () {
    expect(lifeFunctions.sleep()).toEqual('zzzz')
  })
})
