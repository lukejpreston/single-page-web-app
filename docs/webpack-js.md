# What is Webpack?

Webpack is a library which takes all your code, mainly JavaScript, HTML and CSS to pack it into a website. It will help you do things like convert your es6 syntax into something (almost all) browsers will support and minify the code as well. It will also generate html files using templating and if you use Sass or Less it will also compile them for you. It can be used for many many things outside of this. Webpack also comes with a dev server which will start a server and update your browser when you change a file so you don't have to.

I have broken webpack down into 5 categories because webpack is quite complicated. We are going to start with basic bundling of JavaScript in this module. You should be able to understand the Webpack life cycle after this convert all your JavaScript files into a single file which is minified.

# Installation

`npm i -D webpack`

then create a `webpack.conf.js` file

it should contain

```js
module.exports = {
    blah
}
```

# Running

you can now run this with `npx webpack`

and it will bundle your javascript for you

# Minification

We will use the uglifyjs plugin in order to minify the code

That's it for now