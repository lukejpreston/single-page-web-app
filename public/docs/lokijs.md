# What is lokijs?

An in-memory database written purley in JavaScript

# Why use lokijs instead of something like MongoDB?

You can use lokijs in the browser or from node. This means you could load a database into a users browser and they can then work offline

Being in-memory lokijs is quick, it is persistable so you don't need to worry about loosing data

You do not need to spin up lokijs everytime you start your application

lokijs can live inside your application and you hand power to the client instead

If you use mongodb you need to have a seperate server and seperate storage and spend more money to use it

Unlike mongodb you would not be able to cluster lokijs, you probably could but mongodb does this out of the box

However lokijs is overlooked, you can load a fully working database into your client. For example you could load all the pokemon into a pokedex, then you do not need to do multiple http requests for pokemon. Or you could load a catalogue and all known data into a client's browser then if they go offline they have the latest documents.

# Usage

