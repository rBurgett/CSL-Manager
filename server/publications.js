Meteor.publish('checkedInUsers', function() {
	return Meteor.users.find();
});
Meteor.publish('timeLogs', function() {
	return TimeLogs.find();
});