Template.header.helpers({

});
Template.header.events({
	'click #logOut': function() {
		Meteor.logout(function() {
			Router.go('login');
		}
	)}
});
