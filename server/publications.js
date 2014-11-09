Meteor.publish('checkedInUsers', function() {
	return Meteor.users.find();
};