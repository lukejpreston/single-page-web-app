# What is Babel?

Babel is a js transformer which will take your JavaScript code and turn it into... just about anything. We are going to turn out React jsx syntax and modern es6 syntax into cross browser code

You can run babel from a script or from the command line, but we will be using webpack

## Installation

```bash
npm i -D babel babel-loader babel-present babel-react
```

## Webpack Config

then create a `.babelrc` with the following

```json
{
    "presets": ["env", "react"]
}
```

and in your `webpack.conf.js`

```js
module.exports = {
    entry: 'src/index.js',
    output: {
        path: 'dist/index.js'
    },
    modules: {

    }
}
```

now run `npx webpack --mode development --config webpack.conf.js`