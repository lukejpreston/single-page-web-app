# What are Web Sockets?

You can think of them like HTTP but they listen to the server for events instead of continually asking the server

# Why use Web Sockets and when to use them?

If you want to connect your users to your server and to each other. You could do this with HTTP requests but over time the browser will start to slow down, and nothing will be in real time, it will always have a noticalble delay.

You would use this in things like games, chat clients, and live features like Twitters retweet and likes system

# What is SocketIO?

Not all browsers support websockets. So socket.io is a library which gives browsers which don't support websockets, fake websockets. It also gives you a nice and consistent API

The other things socket.io gives you is server side sockets which integrate well with their library.

# Usage

# Security

# Integration with Koa

there is middleware which will inject socket.io into your clients webpages so you don't need to include it into your applications. You can also mix HTTP things with socket things using Koa and it's middleware