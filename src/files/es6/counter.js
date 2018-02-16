class Counter {
  constructor () {
    this.reset()
  }
  reset () {
    this.countArr = []
    this.currentValue = 0
  }
  changeValue () {
    return 0
  }
  count () {
    this.currentValue += this.changeValue()
    this.countArr.push(this.currentValue)
    return this.currentValue
  }
  pow () {
    return []
  }
  hasTen () {
    return false
  }
  hasTens () {
    return false
  }
}

module.exports = Counter
module.exports.Incrementor = Counter
module.exports.Decrementor = Counter
