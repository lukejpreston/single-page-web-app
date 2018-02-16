const chalk = require('chalk')
const index = require('.')
const Incrementor = require('./counter').Incrementor
const Decrementor = require('./counter').Decrementor

const test = (condition, fail, pass) => {
  if (condition) console.log(chalk.red('❌'), fail)
  else console.log(chalk.green('✔'), pass)
}

const testCounter = (counter, direction) => {
  for (let i = 0; i < 21; i++) counter.count()
  test(
    counter.currentValue !== direction * 21,
    `current value should be ${chalk.yellow(direction * 21)} but it is ${chalk.red(counter.currentValue)}`,
    `your value is ${chalk.yellow(direction * 21)}`
  )

  const power = counter.pow()
  test(
    power[0] !== 1 && power[1] !== 4 && power[2] !== 9,
    `${chalk.blue.bold('pow')} should return ${chalk.yellow('[')}${chalk.yellow([1, 4, 9])}${chalk.yellow(',...')}${chalk.yellow(']')} but it is ${chalk.red(JSON.stringify(power))}`,
    `your ${chalk.blue.bold('pow')} is ${chalk.yellow(JSON.stringify(power))}`
  )

  let hasTen = counter.hasTen()
  test(
    !hasTen,
    `you should have ${chalk.yellow(direction * 10)} in your ${chalk.blue.bold('countArr')} but you have ${chalk.red(JSON.stringify(counter.countArr.slice(0, 10)))}`,
    `you have a ${chalk.yellow(direction * 10)}`
  )

  let hasTens = counter.hasTens()
  test(
    !hasTens,
    `you should have ${chalk.yellow(direction * 10)} and a ${chalk.yellow(direction * 20)} in your ${chalk.blue.bold('countArr')} but you have ${chalk.red(JSON.stringify(counter.countArr.slice(0, 20)))}`,
    `you have a ${chalk.yellow(direction * 10)} and a ${chalk.yellow(direction * 20)}`
  )

  counter.reset()
  for (let i = 0; i < 9; i++) counter.count()

  hasTen = counter.hasTen()
  test(
    hasTen,
    `(inverse of ${chalk.blue.bold('hasTen')}) you should not have a ${chalk.yellow(direction * 10)} in your ${chalk.blue.bold('countArr')} but you have ${chalk.red(JSON.stringify(counter.countArr.slice(0, 10)))}`,
    `(inverse of ${chalk.blue.bold('hasTen')}) you do not have a ${chalk.yellow(direction * 10)}`
  )

  counter.reset()
  for (let i = 0; i < 19; i++) counter.count()

  hasTens = counter.hasTens()
  test(
    hasTens,
    `(inverse of ${chalk.blue.bold('hasTens')}) you should not have ${chalk.yellow(direction * 10)} and ${chalk.yellow(direction * 20)} in your ${chalk.blue.bold('countArr')} but you have ${chalk.red(JSON.stringify(counter.countArr.slice(0, 20)))}`,
    `(inverse of ${chalk.blue.bold('hasTens')}) you do not have a ${chalk.yellow(direction * 10)} or a ${chalk.yellow(direction * 20)}`
  )
}

console.log(`\n--- ${chalk.bold.cyan('Syntax Tests')} ---\n`)
const obj = index()
test(obj.oneHundred !== 100, `${chalk.blue.bold('oneHundred')} should still be equal to ${chalk.yellow(100)} but ${chalk.red(obj.oneHundredString())}`, chalk.yellow(obj.oneHundredString()))

const incrementor = new Incrementor()
const decrementor = new Decrementor()

console.log(`\n--- ${chalk.bold.cyan('Incrementor Tests')} ---\n`)
testCounter(incrementor, 1)
console.log(`\n--- ${chalk.bold.cyan('Decrementor Test')} ---\n`)
testCounter(decrementor, -1)
