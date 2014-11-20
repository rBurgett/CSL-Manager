Meteor.publish('checkedInUsers', function() {
	return Meteor.users.find({'profile.checkedIn' : true}, {fields: {
		'username': true,
		'profile.firstName': true,
		'profile.lastName': true,
		'profile.city': true,
		'profile.state': true,
		'profile.phone': true,
		'profile.emergencyName1': true,
		'profile.emergencyPhone1': true,
		'profile.emergencyRelation1': true,
		'profile.emergencyName2': true,
		'profile.emergencyPhone2': true,
		'profile.emergencyRelation2': true,
		'profile.checkedIn': true
		}});
});
Meteor.publish('timeLogs', function() {
	return TimeLogs.find();
});