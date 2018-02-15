# Semantics

in theory you could get away with turning everything into a `div` but then your website will be really difficult to maintain as well as inaccessible.

I just want to take a moment to talk about semantics and how it can benefit your life.

`a` are meant for triggering a new link, either to a new location or a new window. If you are using the `a` instead of a `button` then you are missing out on the ability to use things like `onfocus` and `onbulr`

`form` gives users who can't use a mouse or can't see all too well the abilty to navigate a page with ease. So you should consider actually putting your things which look like a form in a form

`nav` to let the browser know it is for navigating and not just an element on the page, so it and `tab` through it quickly

don't use `img` without an `alt` because even though you have the image not everyone can see it, especially not bots or search engines.

avoid using an icon or image in place of text unless there is not enough space for text. Not all images are clear and not everyone can see them.

use a `span` for text and `p` for more than a little bit of text and `pre` if you need to keep your formatting in a `p`. Otherwise you have to add a lot of css to make a `span` like a `p` and a `p` like a `pre`

did you know you have the following, `header` `main` `footer` `section`? they help tell the browser what things are and where they should be, and they are not limited to one element e.g. you could do

```html
<div class='card'>
    <header class='card-header'></header>
    <footer class='card-footer'></footer>
</div>
```

which is readble by humans and computers and intellegant dogs.

you can also use an `aside` if you want something to be aside something else, like a menu (look to your left on desktop devices and above on mobile)

if you are going to make a table do it correctly

```html
<table>
    <thead>
        <tr>
            <th></th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </tfoot>
</table>
```

you should use `h1` `h2` `h3` `h4` `h5` `h6` `h7` `h8` for headers instead of styling a span, accessibility issues

you should use a `select` and not some insane divs thing.

leave the `outline` on buttons, selects and inputs. This is for people to be able to see, not just something Chrome thinks looks pretty.

There are probably lots more. If you use the correct elements then browsers start rendering as expected and you suddenly have to write less code. Things like bootstrap unfortunatly encourage bad behaviour because you can put a class on anything and it pretty much works. So I suggest even if you are using bootstrap you should follow the rules of the web as you will save a lot of time and pain

# Selectors

I would also like to mention these a little because they can save you a lot of pain and here they are by example

```
.class-name
#id
tag
.class-name .child
.class-name.same-element
```

You don't have to use ids but they need to be unique

You should avoid using tags because you might change your code but can keep a class name

There are a couple of conventions when it comes to naming css selectors

### BEM

```
.element--black
.element--red
.element__child
.element__child--black
.element__child--red
```

which reduces the amount of css you write and speeds up css rendering because there is less nestnig.

### Object Based

```
.element
.element.is-black
.element.is-red
.element-child
.element-child.is-black
.element-child.is-red
```

which has a little bit of nesting but the advantage is that you might be able to get away with 

```
.element
.element-child
.is-black
.is-red
```

assuming `is-black` is the same for both `element` and `element-child`

I personally prefer the second option and will be using that but I think BEM is a great convention to follow

but consider the following

```html
<div class='element is-red'>
    <div class='element-child is-black'>CHILD</div>
</div>
```

vs BEM

```html
<div class='element element--red'>
    <div class='element__child element__child--black'>CHILD</div>
</div>
```

you should avoid

```html
<div class='element red'>
    <div class='child black'>CHILD</div>
</div>
```

and then you might have worst case scenario

```
.element
.element.red
.element.black
.element .child
.element .child.red
.element .child.black
```

which is not easy to read and is the least performant in terms of css rendering

So it depends what you like. I will be following object based because you can't do this in BEM

```
.element--red--black
```

but object based you can and it is less code in your HTML and React components