Template.dashboard.helpers({
	name: function() {
		return ', ' + Meteor.user().profile.firstName;
	}
});
Template.dashboard.events({
	'click #checkIn': function() {
		Meteor.users.update({_id: Meteor.userId()}, {$set: {'profile.checkedIn': true}});
	}
});
