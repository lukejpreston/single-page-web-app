# What is Webpack?

Webpack is a library which takes all your code, mainly JavaScript, HTML and CSS to pack it into a website.

Their website has much better documentation than I could ever create so instead of boring you with details go have a look for yourself <https://webpack.js.org/concepts> and I will be taking their examples

I have broken down webpack into 5 sections, build up your knowledge to create a simple working example

This section answers the question

> How do I bundle all my JavaScript files into a single HTML file and minify it?

## Installation

`npm i -D webpack webpack-cli`

## Usage

Webpack 4 no longer requires a config file, you can now bundle all your code without

unminified code:

```bash
npx webpack --mode development
```

minified code:

```bash
npx webpack --mode production
```

if you want it to keep running the bundle whilst you are coding

```bash
npx webpack --mode development --watch
```

### Config

If you need to split your code into several files then you will need a config file, create `webpack.conf.js` with the following

```js
module.exports = {
  entry: {
    app: 'src/index.js',
    api: 'src/api.js'
  },
  output: {
    path: '[name].bundle.js'
  }
}
```

then run

```bash
npx webpack --mode development --config webpack.conf.js
```

now it will create your bundled files

If you want to use modern es6 code and your react stuff head over to the Webpack Babel section which will fill you in on how to do that. This section is an introduction