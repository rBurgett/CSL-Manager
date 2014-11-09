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
      Session.set('activePage','checkInOutPage');
    }
  }),
  this.route('profile', {
    path: '/dashboard/profile',
    onAfterAction: function() {
      Session.set('activePage', 'profile');
    }
  }),
  this.route('times', {
    path: '/dashboard/times',
    onAfterAction: function() {
      Session.set('activePage', 'times');
    }
  })
});

Router.onBeforeAction('loading');
