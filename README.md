# outsider.js

outsider.js is a tiny library for jQuery that lets you execute a 
function whenever a click comes from outside a given element. A common 
use case is to hide or remove a certain dialog element whenever the user 
clicks somewhere else, but it is flexible enough for anything you can 
think of.

## Usage

The outsider function accepts either a string or function as an 
argument. Use a string to call a jQuery function on an element, like 
_hide_:

``` javascript
$(".some-element").outsider("hide");
```

You can also pass some additional arguments to the function if you'd 
like:

``` javascript
$(".some-element").outsider("fadeOut", 1000);
```

Or you can pass a function and execute any code you want:

``` javascript
$(".some-element").outsider(function(event, element) {
  this.html("You clicked outside!");
});
```

The value of _this_ is bound to the element, but also accessible as the 
second argument in case you decide to bind _this_ to something else. The 
click event can be accessed through the first argument.

## License

The MIT License.
