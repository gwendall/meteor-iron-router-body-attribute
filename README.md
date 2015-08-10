Installation  
------------

``` sh
meteor add gwendall:iron-router-body-attribute
```

What is does
============

This package simply uses an ```onAfterAction``` hook to reactively set a ```[data-route]``` attribute to the body with the current route name.  
It is particularly handy to scope CSS rules based on routes.

Example
=======

``` javascript
Router.route('/', {
  name: 'landing'
});
```

``` css
body[data-route="landing"] {
  background-color: red;
}
```
