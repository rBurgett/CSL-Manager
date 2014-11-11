Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function() { return Meteor.subscribe('timeLogs'); }
});

Router.map(function() {
  this.route('login', {
    path: '/',
    onBeforeAction: function() {
      if (Meteor.user()) {
        Router.go('dashboard');
      } else {
        this.next();
      }
    },
    onAfterAction: function() {
      $('body').addClass('loginBody');
    }
  }),
  this.route('dashboard', {
    path: 'dashboard',
	onBeforeAction: function() {
		if (! Meteor.user()) {
			Router.go('login');
		} else {
			Meteor.subscribe('timeLogs');
			this.next();
		}
	},
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
