run `npm i`, keep running `npm test` until the test pass. Here are the steps needed to get the steps to pass

in `index.js`

1. turn all `var` into `const` and `let` where appropriate
2. change all functions using `=>` syntax
3. clean the object creation using new object syntax
4. change the string concatonation to use new string templating

**NB that you do not need to use es6 to make these tests pass but the exercise to get familiar with the syntax**

in `counter.js`

1. extend `Counter` with `Incrementor` and `Decrementor`
2. change `count` of `Incrementor` to increase by **1** everytime and `Decrementor` to decrease by **1** everytime e.g. `incrementor.count(); incrementor.count(); incrementor.count()` will yield `incrementor.currentValue === 3`
3. change `pow` in `Counter` to map all the values in the `countArr` to the power of **2** e.g. `counter.pow() === [1, 4, 9]` after calling `counter.count()` **3** times
4. change `hasTen` in `Incrementor` to return `true` if **10** is in `countArr` and in `Decrementor` to return `true` if **-10** is in `countArr`
5. change `hasTens` in `Incrementor` to return `true` if there is more than one number in `countArr` which is a multiple of 10 e.g. `[..., 10, ..., 20]` would pass and in `Decrementor` to return `true` if there is more than one number in `countArr` which is a multiple of 10 e.g. `[..., -10, ..., -20]` would pass
