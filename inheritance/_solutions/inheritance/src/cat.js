const Animal = require('../src/animal.js')

class Cat extends Animal {
  constructor (breed) {
    super()
    this.breed = breed
  }

  speak () {
    return 'MIAOW'
  }
}

module.exports = Cat
