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
			Meteor.subscribe('checkedInUsers');
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
	onBeforeAction: function() {
		Session.set('logsDisplayed', 20);
		this.next();
	},
    onAfterAction: function() {
      Session.set('activePage', 'times');
    }
  }),
  this.route('addNewUser', {
    path: '/dashboard/newuser',
	onBeforeAction: function() {
		if (! Meteor.user()) {
			Router.go('login');
		} else {
			if (Meteor.user().profile.role !== 'user') {
				this.next();
			} else {
				router.go('dashboard');
			}
		}
	},
    onAfterAction: function() {
      Session.set('activePage', 'addNewUserPage');
    }
  })
});

Router.onBeforeAction('loading');
