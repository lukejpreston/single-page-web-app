run `npm i`

1. run `npx eslint index.js` until everything is passing
2. run `npx eslint component.js` until everything is passing

when the console outputs nothing that means eslint is passing.

**OPTIONAL** these are some exercises to let you see more of what you can do with eslint

1. create a script in your `package.json` to run `eslint`
2. get VSCode or Atom to automatically lint so you don't have to
3. override some of the `.eslintrc` file with your own rules, start with like spacing
4. create a `.eslintrcignore` file and add `component.js` to it, add some errors to that file then see eslint ignore it
