Package.describe({
  name: 'gwendall:iron-router-body-attribute',
  summary: 'Adds a [data-route] attribute with the route name to the body',
  version: '0.1.1',
  git: "https://github.com/gwendall/meteor-iron-router-body-attribute.git",
});

Package.onUse(function (api, where) {

  api.use('iron:router@1.0.9', 'client');
  api.addFiles('lib.js', 'client');

});
