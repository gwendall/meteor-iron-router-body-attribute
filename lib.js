Router.onAfterAction(function() {
  var route = Router.current().route.getName();
  var $body = $('body');
  if ($body.attr('data-route') !== route) $body.attr('data-route', route);
  // this.next();
});
