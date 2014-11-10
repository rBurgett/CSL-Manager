Meteor.methods({
	checkInOut: function (userId) {
		var checkedIn = Meteor.user().profile.checkedIn;
		if (checkedIn) {
			Meteor.users.update({_id: userId}, {$set: {'profile.checkedIn': false}});
		} else {
			Meteor.users.update({_id: userId}, {$set: {'profile.checkedIn': true}});
		}
	}
});