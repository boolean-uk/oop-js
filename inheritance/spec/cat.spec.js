const Cat = require('../src/cat.js')

describe("Cat", function() {
  it("has a type", function() {
    const cat = new Cat()
    expect(cat.type).toEqual('animal')
  })

  it("has a breed", function() {
    const cat = new Cat('Egyptian')
    expect(cat.breed).toEqual('Egyptian')
  })

  it("can sleep", function() {
    const cat = new Cat()
    expect(cat.sleep()).toEqual('zzzz')
  })

  it("can speak", function() {
    const cat = new Cat()
    expect(cat.speak()).toEqual('MIAOW')
  })
})
