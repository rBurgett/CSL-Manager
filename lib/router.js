Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
//	waitOn: function() { return Meteor.subscribe('volunteer'); }
});

Router.map(function() {
  this.route('login', {
    path: '/',
    onAfterAction: function() {
      $('body').addClass('loginBody');
    }
  }),
  this.route('dashboard', {
    path: 'dashboard',
    onAfterAction: function() {
      $('body').removeClass('loginBody');
    }
  })
});

Router.onBeforeAction('loading');
