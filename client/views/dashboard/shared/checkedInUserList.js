Template.checkedInUserList.helpers({
	checkedInUsers: function() {
		if (Meteor.users.find({'profile.checkedIn': true}).count() > 0) {
			return Meteor.users.find({'profile.checkedIn': true});
		} else {
			return false;
		}
	}
});