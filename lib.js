Router.onBeforeAction(function() {
  var route = Router.current().route.getName();
  $('body').attr('data-route', route);
  this.next();
});
