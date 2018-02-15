node let's you read and write files. In this section we will go through some simple example of reading and writing files.

# path

`path` is a module which comes with `node` it allows you to generate and examine paths. This is usful if you are running code on multiple OS's. You can also create paths relative to folders so you don't have to specify an absolute path.

here are some examples of things you can do with `path`

```js
const path = require('path')

console.log(path.resolve('./', 'file.txt'))
console.log(path.join('./folder', 'file.txt'))
```

# __dirname and process.cwd()

`__dirname` is where the script is and `process.cwd()` is where the process is running from. You should use this with `resolve` in order to work out files relative to people e.g.

```js
console.log(path.resolve(__firname, 'file.txt'))
console.log(path.resolve(proceess.cwd()))
```

# fs

this is where most of the file operations live and they come in 2 flavours

### asynchronous

```js
const fs = require('fs)
fs.readFile('file.txt', (data, err) => {
    if (err !== null) console.log('there was an error')
    else console.log(data)
})
```

when you run this your script will not wait for `readFile` to finish and once the file has been read it will call the callback

### synchronous

```js
const fs = require('fs')
const data = fs.readFileSync('file.txt').toString()
console.log(data)
```

the script will wait for the file to be read then it will continue.

If you want performance you will most likely want to use asynchronous. Also you can handle errors a bit easier with the callback. If don't need that on the other hand you should go ahead and use the synchronous version.

# List of useful fs functions

`lstat` in order to see info about a file, e.g. if it exists, if it is a file or folder

`readFile` in order to read the contents

`writeFile` in order to write to or reate and write to a file

`unlink` in order to delete files

`readdir` in order to get a list of files in a directory

`mkdir` in order to create a directory

`rmdir` in order to remove a directory

there are loads of other things you can do with `fs` but these are the building block imo



