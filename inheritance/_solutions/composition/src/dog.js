class Dog {
  constructor (lifeFunctions) {
    this.type = 'animal'
    this.lifeFunctions = lifeFunctions
  }

  speak () {
    return 'WOOF'
  }

  sleep () {
    this.lifeFunctions.sleep()
  }
}

module.exports = Dog
