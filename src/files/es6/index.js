function createOneHundred () {
  var oneHundred = 100
  for (var i = 0; i < 10; i++) {
    var oneHundred = i * i
  }
  var toReturn = {
    oneHundred: oneHundred,
    oneHundredString: function () {
      return 'your value is: ' + oneHundred + '!'
    }
  }
  return toReturn
}

module.exports = createOneHundred
