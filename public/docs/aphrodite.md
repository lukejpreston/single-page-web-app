# What is Aphrodite

it is JavaScript styling. So react comes with a fully working stylesheet module and a bunch of libraries exist which allow you to write 
your styles using JavaScript. This completly removes the need for sass and less and you don't even need cssnext.

aphrodite has some nice features which other similar libraries don't have

1. it compiles to css and is added a style.
2. everything gets appended with `!important` so you won't be fighting someone else's styles (works great with Bulma)
3. supports `@font-face`, `@media` and events such as `:hover` and `:active`

# Install

`npm i -S aphrodite`

# Usage

I find it is easiest to create a `styles.js` file which exports an object of functions like so

```js
stuff
```

then in your components

```js
className={styles.thing()}
```

then if you want something to be active you could do

```js
{
    thing: {},
    'thing-active': {}
}
```

```js
className={styles.thing('active')}
```

# Server Side Rendering

you can render the css styles which saves the client some rendering time, but onyl work on inital loads
