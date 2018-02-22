# How to make your app feel like a multi page app?

You use React Router. It uses a virtual route and a library called `history` in order to mock out those functions in the browser. It will change the URL and render components when it changes. The good thing as well is that whole page does not reload, just the sections you want to reload.

We are only going to focus on web react router, but native is similar

# Routes

# Links and push

# Patterns

you can new wrap anything up using a Route but like state, you should put all this stuff at the top. You should avoid nesting routes in routes because it is hard to unpick or change if you need to, instead it is easier to padd the pathname or match down to it's children

# 404

some servers will error when hitting a page which does not exist. You can copy your index.html to a 404.html and most servers will handle a 404 this way. So you don't need to make a html file per page. However you might still want to if you want to add `meta` to each page