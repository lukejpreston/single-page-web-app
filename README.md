# Single Page Web App Training

[Single Page Web App Training](https://nerc-ceh.github.io/single-page-web-app)

## What is a single page web app?

It is a website which can opperate from a single page but feels like multiple pages.

## Warnings and Caveats

This is an introduction to give you the building blocks for creating a single page web app, you will not have an in-depth knowledge and you are encouraged to learn more

The training material may change, apparently the web community can't stop changing things every 5 minutes. This is the 5th itteration of this material

Each module is independant of the previous model, e.g. you do not need to run module 1 in order to run module 2. However there is an assumption you have run all the previous modules e.g. you have installed node in the node module and you have installed the sample project and got it running in order to start learning React basics. But if you know how to do all that you can probably skip straight to Redux for example

Do you understand the following?:

```html
<style>
.box {
  padding: 10px;
  border: solid 1px black;
}
</style>
<div class="box">
  <p id="message">A nice little message for you all</p>
  <button click="clickMe">Click Me</button>
</div>
<script>
function clickMe () {
  document.getElementById('message').innerHTML = 'You just changed the message at: ' + new Date().getTime(0)
}
</script>
```

If so then you will be able to complese the training. If not then go learn basic HTML, CSS and JavaScript then come back.

## What is so good about single page web apps?

They are responsive, quick and modern and they look great on your CV

Also, users, clients, your boss or product manager and mum likes them too

## What will I be able to create when I am finished?

As mentioned this training material is an example

* You will be able to create a modern website
* You will be able to turn this into a desktop application
* You will be able to turn this into an Andriod and iOS application
* You will be able to create automated tests, both unit and integration
* You will be able to spin up a server to host your website and for clients to get information
* You will be able to make it secure with login
* You will be able to add websockets for clients to talk to each other in real time

## What is the training layout like?

1. Create a static site, understand and learn about modern css, React, React Router, Redux, Webpack and how they all come together as well as unit testing using Jest
2. Create some integration tests using nightmarejs
3. Create a server with security built in, have clients log in and create websockets for them to communicate in real time
4. Convert your application into a desktop app and add features which you can do with a desktop e.g. file managment
5. Convert your application into both Android and iOS apps

## What will the training not cover?

* Hosting solutions, more specifically hosting anything to do with login, http api's and websockets
* How to get your application into the `<insert app store name>`
* Continuous deployment
* Version control
* In Depth node or JavaScript

### Reasons

* You don't need these to learn how to make a single page web app
* They cost money
* You should already be usnig version control, otherwise how are you doing this course?
* node and JavaScript are huge topics
