var Router = Backbone.Router.extend({

  routes: {
    "": "loading",
    "menu": "menu",
    "play": "play",
    "leaderboard": "leaderboard",
    "settings": "settings"
  },

  loading: function(){
    var router = this;
    setTimeout(function(){
      router.navigate('menu', {trigger: true});
    }, 4000);
  },
  menu: function() {
    var menuTemplate = _.template($('#menu').html());
    var html = menuTemplate();
    $('main').html(html);
  },
  play: function() {
    var playTemplate = _.template($('#play').html());
    var html = playTemplate();
    $('main').html(html);
  },
  leaderboard: function() {
    var leaderboardTemplate = _.template($('#leaderboard').html());
    var html = leaderboardTemplate();
    $('main').html(html);
  },
  settings: function() {
    var settingsTemplate = _.template($('#settings').html());
    var html = settingsTemplate();
    $('main').html(html);
  }

});

var appRouter = new Router();
// Listen for url changes, so that we can intercept them,
// and act upon the urls that the user navigates to.
Backbone.history.start();
