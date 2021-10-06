const Animal = require('../src/animal.js')

class Dog extends Animal {
  speak () {
    return 'WOOF'
  }
}

module.exports = Dog
