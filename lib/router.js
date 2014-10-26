Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
//	waitOn: function() { return Meteor.subscribe('volunteer'); }
});

Router.map(function() {
	this.route('login', {path: '/'});
});

Router.onBeforeAction('loading');
