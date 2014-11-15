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
	},
	addUser: function(user) {
		Accounts.createUser({
			'username' : user.username,
			'password' : user.password,
			'email': user.email,
			'profile' : {
				role : 'user',
				checkedIn : false,
				firstName : user.firstName,
				lastName : user.lastName,
				street : user.street,
				city : user.city,
				state : user.state,
				zip : user.zip,
				phone : user.phone,
				birthdate : user.birthdate,
				gender : user.gender,
				education : user.education,
				degrees : user.degrees,
				skills : user.skills,
				languages : user.languages,
				emergencyName1 : user.emergencyName1,
				emergencyPhone1 : user.emergencyPhone1,
				emergencyRelation1 : user.emergencyRelation1,
				emergencyName2 : user.emergencyName2,
				emergencyPhone2 : user.emergencyPhone2,
				emergencyRelation2 : user.emergencyRelation2,
			}
		});
	}
});