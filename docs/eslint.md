# What is and why do linting?

JavaScript is a runtime language, which means you do not know a syntax error may occur until the code is actually run. Not only could this lead to bugs in your code but could be cause for major security issues which you may not have considered.

Linting is checking the syntax of your code for common errors. It can also give you the ability to normalize code accross a team e.g. tabs vs spaces.

# How to use it

first install it

```bash
npm i -D eslint
```

then you can run `npx eslint ./src` for example

then you can create a configuration file if you don't want the defaults, create a file named `.eslintrc` with the following

```json
{
    "env": {
        "browser": true,
        "node": true
    }
}
```

this tells your eslint that you are writing both browser code, so things like `window` and `document` are valid and that you are writing for `node` so things like `require` are valid.

You can have a look at the eslint website for lots of configuration <https://eslint.org/docs/user-guide/configuring> and argue with your team to your hearts content about spacing, braces, camel case

I would suggest that you don't. Because there will always be one person who says `tabs are great` (that person is wrong) or `double quotes look better` (that person is also wrong). Instead let's all be dissapointed and use a `standard` which someone else agrees on but has thought about a lot of security issues.

```json
{
    "extends": [
        "standard",
        "standard-react"
    ],
    "env": {
        "browser": true,
        "jest": true,
        "jasmine": true
    }
}
```

`standard` is a nice standard because it allows you to be less verbose where possible. The `standard-react` has some nice features as well which make you React code better. The most important thing about this is that you are aligning with not just your team but other people in other open projects. And as mentioned you can't please all the people all the time, but you can dissapoint everyone just that little bit and blame it on the JS community.


to use standard you will also need to run

```bash
npm i -D eslint-config-standard eslint-config-standard-react eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-react eslint-plugin-standard
```

eslint does not come shipped with all the plugins in the world, as it is a bit slow. There are alternatives such as jshint and jscs. These are a bit old now and have not kept up to date. But eslint comes with another feature which is probably the real reason you should use eslint. `npx eslint --fix` will fix your code as best it can. But why run that in the command line? If you are using vscode or atom you can have this done for you automatically on save. Install the plugin for vscode <https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint> then in your settings add `"eslint.autoFixOnSave": true`. this will put a load of red squiggles in your code (unless you have clean code) and when you hit save will fix almost all the eslint issues. There may be some you can't fix, but it will change things like `"` to `'` and tabs to spaces and just format your JavaScript code so nicely. If you haven't been using vscode or atom I suggest you go get them now. VSCode is my IDE of choice because of it's support for other languages but Atom is still a good choice. There is an eslint tool for Sublime but no one seems to be working on Sublime and it is written in python so you know... there's that to consider.

