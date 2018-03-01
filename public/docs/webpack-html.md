# Templating

We need to specify the index.html file, we also want to inject the javascript code and any styles but we will ifnore the styles for now as the webpack css module covers it in more details

we also want to develop our wesite

this section is likely to change in the near future as they are currentlt modifiying the html pulgin

```js
module.exports = {
    plugins: {
        html: {}
    }
}
```

## Webpack Dev Server

`npm i -D webpack-dev-server` then run it like you do webpack

`npx webpack-dev-server --config webpack.conf.js --mode development --open`

if you add `--open` it will open in a browser

You can integrate webpack dev server with your server which you will see if you do the Koa work
