> Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

<https://nodejs.org>

What does this mean? It means you can run JavaScript on your computer and you have access to all your IO things like files.

This module is to explain how to install and use node

# Installation

### Ubuntu

```bash
sudo apt-get install nodejs
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo export PATH=~/.npm-global/bin:$PATH > .bashrc
source ~/.bashrc
```

### Mac

```bash
brew install node
```

### Windows

Download an msi file from <https://nodejs.org/en/download/>

# Updating

If you want to keep things up to date there are multiple ways but the easiest by far is

```bash
npm i -g n
```

then run

```bash
n latest
```

this will get you the latest version of node (current v9)

`n` is a version manager and if you which to swap versions of node run e.g. to x.x.x

```
n x.x.x
```

or if you want a list of local options

```
n
```

# Node Versions

every even number is an LTS (long term support) version. So if you use an odd number then you may be liable to security bugs or other bugs in general. The other thing to note about node versions is their release cycle which you can see here <https://github.com/nodejs/Release> if you use an old version of node you may be liable for security issues. e.g. if you have a server currently on node 4 and on 1st May 2018 someone discovors a security issue in node 4, then you are on your own. Hence you should allways be up to date where possible and you should lawats be on current where possible.

# Running a file

run `node file.js` or `node folder` if the folder had an `index.js` file inside

create `index.js` and add the line `console.log('hello')` into it then run `node index.js`

# Requiring files

When you want to split your code across mutiple files you `require` that file into the one you are running

create `hello.js` with the line `console.log('hello')`
create `goodbye.js` with the line `console.log('goodbye')`
create `index.js` with the code

```js
require('./hello.js)
require('./goodbye.js)
```

then run `node index.js`

each file can export modules which can be objects or functions by using the term `module.exports = thing` and if you have babel `export default thing`

create `greeter.js` with the code

```js
module.exports = {
    hello: function () {console.log('hello)},
    goodbye: function () {console.log('goodbye)}
}
```

now create `index.js` with the code

```js
var greeter = require('./greeter.js')
greeter.hello()
greeter.goodbye()
```

and run `node index.js`

another thing to note is you don't need to specify the full file name when using `require` you can do `require('./hello')` without the `.js` you can also require a folder with an `index.js` inside and you can require a json file. I would reccomend you don't put the `.js` on a file when requiring because it then allows you to turn the file into a folder with an `index.js` file and you can split the code out across multiple files without having to change your code.

if you are using babel you can also use `import thing from './file'` or `import {exportedThing} from './file'`

we will cover `import` and `export` using babel in the `Webpack Babel` module but for now know that these are all requivalent

```js
// requiring

import thing from './thing'
import thing from './thing.js'
import thing from './thing/index.js'
var thing = require('./thing')

// exporting

export defalt thing
module.exports = thing
```

# NPM

There are a number of package managers but `npm` is by far the most popular and feature rich. We won't cover `yarn` but it is another popular choice. You use `npm` in order to install packages and modules. You can also install them like binaries which can be used in the command line.

When you create a project you can run `npm init` and it will create a `package.json` file with all the information about your project. Including your dependencies.

If you want to use someone elses package you use `npm` to install it. You do this by running `npm install package-name`. There are 4 scopes to note when installing packages

```bash
npm install package-name
npm install --save package-name
npm install --save-dev package-name
npm install --global package-name
```

and all have an alias

```bash
npm i package-name
npm i -S package-name
npm i -D package-name
npm i -g package-name
```

`default` will install the package to a folder locally called `node_modules`

`--save` or `-S` will save to a local file and update your `package.json` to the field `dependencies`

`--save-dev` or `-D` will save to a local file and update your `package.json` to the field `devDependencies`

`--global` or `-g` will save to a gloabl location so it can be executed from the command line

you never really want to do default. You may want to install things like `eslint` or `grunt` gloablly (but we will see you don't have to). You can require dev and non-dev dependencies from any file. So why would you choose dev over non dev? Well when someone installs your module and you have listed a dependency as a dev dependency they do not have to install those dependencies by specifying `--production` whilst installing. This can save quite a bit of time for some projects.

once you have installed a dependency you can use it from your files

run `npm init`
then install chalk with `npm i -S chalk`
then create `index.js` with the code

```js
var chalk = require('chalk')
console.log(chalk.red('hello'))
```

then run `node .`

that's how you reference someone else's package.

depending on what version of node you are using you might notice you now have a `package-lock.json` this is used in order to cache modules and help with versioning so you can install projects quicker if you have installed it once before. You should not touch thing file.

If you want to remove a module simply run `npm uninstall package-name` or `npm uninstall -g package-name` if global

You can version you project using `npm` but running `npm verson major|minor|patch` which you will need if you intend to publish your package to the npm registry

The npm registry is a place where large amounts of packages live. You can find it at <http://npmjs.com> there are a lot of great features which will benefit yours and your teams projects.

# NPM scripts

in your `package.json` there is a section called `scripts` which is a list of commands you can run. Here are some exaples

```json
{
    "scripts": {
        "start": "node ./index.js"
    }
}
```

you can run bash (or whatever command line language is available) e.g. `echo hello`

you can run scripts e.g. `node ./index.js`

if a package comes installed with a bin file you can run that package e.g. `eslint ./` or `jest ./src/*.js`

which means you do not need to install tools like `grunt` or `eslint` gloablly, you can install them locally to your project

then to run a script you run `npm run my-script`

some come with aliases so you don't need to say `run` these include `test` and `start`

# NPX

`npm` should now come with a tool called `npx` but if you don't have it simply install it with `npm i -g npx`

instead of creating a script to call your locally installed script e.g. eslint you can use `npx`

simply run `npx eslint ./src` this saves a lot of time when testing smaller things because you don't need to create scripts to do so

I think that's about it for node. If you want to know more about the IO things go to the IO section