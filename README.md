# About
this is just a simple javascript library to add/remove classes when the elements gets in the screen by scrolling

# Dependencies
You need jquery (https://www.jqueryscript.net/) in order to use this libarary.

# How to use
Download the `class-on-scroll-jquery.js` file and import it in your html file by:
* import it inside the html document:
```html
 <link rel="stylesheet" href="path/to/class-on-scroll-jquery.js">
```

You just need to assign a HTML element the data attributes, the names are self explanatory:
* There are a few settings that you can assign to elements as css variables:
  * `data-cos_add_on_scroll` add classes to element when its gets in viewport
  * `data-cos_remove_on_scroll` remove classes from element when its in viewport
  * `data-cos_add_on_scroll_out` add classes to element when its gets out of viewport
  * `data-cos_remove_on_scroll_out` remove classes from element when its gets out of viewport

# Example:
in this example we will add the `animate__animated animate__flipInX` classes to the element when user scrolls and the element gets visible
the classes are from the animate.style libarary, by this the element will have a transition animation and gets visible to the user
```html
<h1 data-cos_add_on_scroll="animate__animated animate__flipInX">Lorem ipsum dolor sit amet consectetur</h1>
```
