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
//		Meteor.users.update({_id: Meteor.userId()}, {$set: {'profile.checkedIn': true}});
		Meteor.call('checkInOut', Meteor.userId(), function(error) {
			
		}
	},
	'click #checkOut': function() {
//		Meteor.users.update({_id: Meteor.userId()}, {$set: {'profile.checkedIn': false}});
		Meteor.call('checkInOut', Meteor.userId(), function(error) {
			
		}
	}
});
