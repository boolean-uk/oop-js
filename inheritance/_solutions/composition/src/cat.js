class Cat {
  constructor (breed, lifeFunctions) {
    this.type = 'animal'
    this.breed = breed
    this.lifeFunctions = lifeFunctions
  }

  speak () {
    return 'MIAOW'
  }

  sleep () {
    this.lifeFunctions.sleep()
  }
}

module.exports = Cat
