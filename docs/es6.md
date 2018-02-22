# What is es6?

A syntax standard of JavaScript. also, called by other names such as ecmascript2016 or es2016. This module is going to introduce the features which the other modules use.

# const and let

instead of `var` we now have `const` and `let`

`const` makes variables constant

`let` introduces scope to variables (so does `const` but `let` is mutable)

best explained by example

```js
const x = 100
x = 200 // throws an error

let y = 200
y = 300 // does not

let j = 100
for(let i = 0; i < 2; i++) {
    let j = i * 2
    console.log(j) // 0, 2
}
console.log(j) // 100
```

in the above you will notice that `j` is declared twice but that the `j` inside the `for` loop does not change the `j` outside the `for` loop. If we now replace `let` with `var` we get

```js
var j = 100
for(let i = 0; i < 2; i++) {
    var j = i * 2
    console.log(j) // 0, 2
}
console.log(j) // 2
```

because `var` hoists the variable declaration to the top of the scope so even though you are redfining the `var` inside the `for` loop you are pointing to the same variable. That is why it was common for people to put all their variables hoisted to the top of scope like so

```js
var j
j = 100
for(let i = 0; i < 2; i++) {
    j = i * 2
    console.log(j) // 0, 2
}
console.log(j) // 2
```

which makes it clear how JavaScript will interperate the code, but with `let` and `const` you will never have this issue again (unless you have some really narly code)

# Arrow operator

before you only had 1 ways of creating a function (2 but we won't include `new Function`) which was

```js
function fn () {}
```

but now we have a new kind of function

```js
const fn = () => {}
```

here are a bunch of shortcuts for the arrow operator

```js
const returnTwo = () => 2
const noArgs = _ => 2
const returnsObj = () => ({ no: 2 })
```

the arrow opperator does more than give you syntactical sugar. It also gives you a better way of binding the `function`

consider

```js
function Greeter () {
    this.message = 'hello'
    this.greet = function () {
        const logger = function () {
            console.log(this.message)
        }
        logger()
    }
}

const greeter = new Greeter()
greeter.greet() // undefined
```

if we swap the `function` for `=>`

```js
function Greeter () {
    this.message = 'hello'
    this.greet = () => {
        const logger = () => {
            console.log(this.message)
        }
        logger()
    }
}

const greeter = new Greeter()
greeter.greet() // hello
```

the `this.message` refers to it's parent, and in the case of the `=>` it refers to it's parent until it hits `Greeter` where are function get's stuck in `this.greet`

morale of the story use `=>` where possible.

# object syntax

some nice new shortcuts for objects

```js
const obj = {
    a () {} // equiv of a: function () {}
}

const x = 1

const obj2 = { x } // equiv of { x: x }
```

# named params

```js
const fn = ({a, b}) => {
    console.log(a)
    console.log(b)
}
fn({a: 1, b: 2})
```

which is equiv. to

```js
const fn = (obj) => {
    console.log(obj.a)
    console.log(obj.b)
}
fn({a: 1, b: 2})
```

be cautios because the following would through an error

```js
fn()
```

because the object being passed in is `undefined`

# class

this started in es5 and not much has changed but you need to know it for React so we will go over it now

```js
class Greeter {
    greet() {
        console.log(this.message)
    }
}

class Hello extends Greeter {
    constructor () {
        this.message = 'hello'
    }
}

class Goodbye extends Greeter {
    constructor () {
        this.message = 'goodbye'
    }
}

const hello = new Hello()
hello.greet() // hello

const goodbye = new Goodbye()
goodbye.greet() // goodbye
```

before it would be a mess of using `prototype` in order to achieve the same thing

personally I would urgh all developers away from using `class` and use objects and functions where possible because the performance is just crazy better and the above has much better performance if you do the following

```js
const Greeter = ({message}) => ({
    greet () {
        console.log(message)
    }
})
const hello = Greeter({message: 'hello'})
hello.greet()
const goodbye = Greeter({message: 'goodbye'})
goodbye.greet()
```

that's because the function greeter uses less memory than a class, and even less and an extended class which uses all the memory for it's entire hierarchy. Once you have created your instance e.g. `new Greeter` the performance of an object vs that instance is the same, but unless you inend to make that instance a singleton it costs more processing time to create an object than it does to execute a function. Also if your function returns an object this uses no memory as opposed to a class which creates a protptype (not an object)

not to mention the second example is shorter and looks cleaner

# map, filter, forEach, includes, some, Object.keys and Object.assign

some of these are not es6 but you do need to know them for React, plus they are really nice anyway

```js
const arr = [1, 2, 3]

console.log(arr.map x => x * 2) // [2, 4, 6]
arr.forEach(x => { console.log(x) }) // 1, 2, 3
arr.filter(x => x % 2 !== 0).forEach(x => { console.log(x) }) // 1, 3
console.log(arr.includes(2)) // true
console.log(arr.some(x => x > 10)) // false
```

it is important to note that `map` and `filter` can mutate the object in question. e.g.

```js
const arr = [{no: 1}, {no: 2}]
const mapped = arr.map(x => {
    x.no = 2 * x.no
    return {
        yes: x.no
    }
})

console.log(arr) // [{no: 2}, {no: 4}]
console.log(mapped) // [{yes: 2}, {yes: 4}]
```

so here is a shallow way of cloning but also a useful function

```js
const arr = [{no: 1}, {no: 2}]
const mapped = arr.map(x => {
    const clone = Object.assign({}, x)
    clone.no = 2 * clone.no
    return {
        yes: clone.no
    }
})

console.log(arr) // [{no: 1}, {no: 2}]
console.log(mapped) // [{yes: 2}, {yes: 4}]
```

`Object.assign` is useful for concatonating 2 or more object together. However this is only shallow and two libraries which I find to be great are <https://www.npmjs.com/package/clone> and <https://www.npmjs.com/package/merge> which are both fast and reliable

The last thing which is old but not used oftern enough. `Object.keys` gets the keys for an object which can then be used for loops

```js
const obj = {a: 1, b: 2}
Object.keys(obj).forEach(key => {
    const value = obj[key]
    console.log(value)
}) // 1, 2
```

So you don't need to bring in a library in order to functionally loop through or map an object which annoys me because libraries like `lodash` are great but come with a lot of baggage, especially if you only intend to use them for simple things like the above. That said if you want to use `lodash` you can. I oftern find things like `clone` and `merge` are better than `lodash` and do not come with all that baggage.

