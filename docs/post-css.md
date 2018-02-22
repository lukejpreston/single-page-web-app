# What is post css

it is a css compiler which works using modules to compile your css

# CSSNext

this syntax will be accepted in the near future by most if not all browsers. You can pre-empt these changes by using this module

# Sass and Less

Sass and Less are both good compilers and I encourage you to take a look. We are not using them because you don't need them with CSSNext and no doubt in the future these will have to change in order to accomadate CSSNext because it will be valid css

The idea of importing sass, scss or less files is pointless when you can use webpack to import those files into your js files

in my opinion loops and functions in css encourage poor css and selector patterns because you can get away with bloating your final css files with this kind of code and leave a lot of unused css code in the client