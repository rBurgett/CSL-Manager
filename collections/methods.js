Meteor.methods({
	checkInOut: function (userId) {
		var status, log;
		var checkedIn = Meteor.user().profile.checkedIn;
		var time = new Date().getTime();
		if (checkedIn) {
			Meteor.users.update({_id: userId}, {$set: {'profile.checkedIn': false}});
			status = 'out';
			
		} else {
			Meteor.users.update({_id: userId}, {$set: {'profile.checkedIn': true}});
			status = 'in';
		}
		log = {
			status: status,
			userId: userId,
			time: time
		}
		TimeLogs.insert(log);
	}
});