# What is react?

It is a library created by Facebook which do client side rendering using a state. When the state changes the browser is told to re-render. Unlike other libraries it will only change small sections of the DOM

# Shadow DOM

React uses the Shadow DOM before updating the actual DOM. This is just a DOM in RAM and will update what the client see when it has finished. Because it is RAM it is super quick

# JSX

React is not JSX and you do not have to use JSX. However you would be crazy not to because the alternative is verbose. it is a syntax which combines xml and js and it looks like this

```js
```

we use a transpiler, such as babel in order to turn this code into JavaScript which the browser can consume. We will cover this in more detail in the Webpack Babel section

# Installation

`npm i -S react react-dom`

then we can render components like so

```js
render(...)
```


You can create components. We can do this in two ways and I will compare which is better and why afterwards.

# Functional

```js
const Comp = ({prop1, prop2}) => <div>
    <span>{prop1}</span>
    <span>{prop2}</span>
</div>
```

# Class

```js
class Comp extends Component {
    render () {
        return <div>
            <span>{this.props.prop1}</span>
            <span>{this.props.prop2}</span>
        </div>
    }
}
```

the two examples will produce the same result. However the Class way will be slower. This is because it is creating a brand new object, executing the render function and assign `this.props` all over the place. You should avoid using the Class pattern where possible. That being said you will need to do it because the functional way does not allow you to get access to the components state

# state

```js
class Comp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            prop1: 'a',
            prop2: 'b'
        }
    }
    render () {
        return <div>
            <span>{this.state.prop1}</span>
            <span>{this.state.prop2}</span>
        </div>
    }
}
```

# events

### Functional

```js
const Comp = ({click, prop1, prop2}) => <div onClick={click}>
    <span>{prop1}</span>
    <span>{prop2}</span>
</div>
```

### Class

in order to avoid binding issues you will need to wrap your events using the arrow oporator (other ways are messy as sin)

```js
class Comp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            prop1: 'a',
            prop2: 'b'
        }
    }
    click () {
        console.log('clicked')
    }
    render () {
        return <div onClick={() => this.click}>
            <span>{this.state.prop1}</span>
            <span>{this.state.prop2}</span>
        </div>
    }
}
```

# setting state

```js
class Comp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            prop1: 'a',
            prop2: 'b'
        }
    }
    click () {
        this.setState({
            prop1: 'A'
        })
    }
    render () {
        return <div onClick={() => this.click}>
            <span>{this.state.prop1}</span>
            <span>{this.state.prop2}</span>
        </div>
    }
}
```

# life cycle

react has a life cycle which you can tap into, the most common ones are

```js
componentDidMount
componentWillMount
componentReceivedProps
```

you can control these using

```js
componentShouldMount
componentShouldRender
```

there are a bunch of other life cycle events which you should read about but typically if you are doing complex things then you should re-evaluate your code

# maps

if you want to dynamically create a list of items you can do so with the following pattern

```js
const Comp = ({arr}) => <ul>
    {arr.map((a, index) => {
        <li key={`item-${index}`}>{a.label}</li>
    })}
</ul>
```

you should use the key, but it isn't manditory. It makes react work quicker because it will only update the values which key's have changed, otherwise it will update all regardless. you keys should be unique.

# className

you use the keyword `className` for classes and not `class`

e.g. this is bad

```js
const Comp = ({click, prop1, prop2}) => <div class='' onClick={click}>
    <span>{prop1}</span>
    <span>{prop2}</span>
</div>
```

this is good

```js
const Comp = ({click, prop1, prop2}) => <div className='' onClick={click}>
    <span>{prop1}</span>
    <span>{prop2}</span>
</div>
```

`class` is a protected JavaScript value and cannot be assigned. Eslint can pick this up for you and auto correct so it is not the end of the world if you forget to use `className`

# Prop Types

You can say what components take what prop types

# Anti Patterns and Patterns

you should have only 1 component which extends `class` and changes state where possible. The rest of your components should be dumb components which accept `props`. This makes you code run quicker, easier to test and easier to read. Then you can put your state changing logic in a seperate file, turning it into an input output testable file (the mest kind of file)

You need to remember React is immutable, if you change your state you need to call setState not just change the state value as react does not care if you do that. If you want react to update even without changing anything there are 2 ways. `forceRender` which can be dangorous or `const state = clone(state); this.setState(state)` where react will think something has changed, even if it hasn't. I prefer the latter because it means you can mess around with your state safely without mutating it by accident.

Since your props are likely to change I suggest you do the following, as it will save time

```js
import React form 'react'
import PropTypes from 'prop-types`

const Parent = ({child}) => <div>
    <Child {...child} />
</div>

Parent.propTypes = {
    child: PropTypes.object
}

const Child = ({a, b} => <div>
    <span>{a}</span>
    <span>{b}</span>
</div>

Child.propTypes = {
    a: PropTypes.string,
    b: PropTypes.string
}
```

you could do

```js
Parent.propTypes = {
    child: PropTypes.objectShape({
        a: PropTypes.string,
        b: PropTypes.string
    })
}
```

but this logic is duplicated in the `Child.propTypes` and if you are rigorous will pick up those errors anyway

# Server Side Rendering

you can render to a string, then put this in your templates. This saves the client an initial load as well as some search don't run JavaScript when loading your page. Many do now, but it is still a nice thing to have