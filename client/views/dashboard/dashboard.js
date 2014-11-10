Template.dashboard.helpers({
	name: function() {
		return ', ' + Meteor.user().profile.firstName;
	},
	checkedIn: function() {
		if (Meteor.user().profile.checkedIn) {
			return true;
		} else {
			return false;
		}
	}
});
Template.dashboard.events({
	'click #checkIn': function() {
		Meteor.users.update({_id: Meteor.userId()}, {$set: {'profile.checkedIn': true}});
	}
});
