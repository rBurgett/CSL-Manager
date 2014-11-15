Template.addNewUser.events({
	'submit form': function(e) {
		e.preventDefault();
/*		var firstName, lastName, street, city, state, zip, phone, email, birthdate, gender, education, degrees, skills, languages, emergencyName1, emergencyPhone1, emergencyRelation1, emergencyName2, emergencyPhone2, emergencyRelation2;
		firstName = $(e.target).find('[name=first-name]').val()
		lastName = $(e.target).find('[name=last-name]').val()
		street = $(e.target).find('[name=street]').val()
		city =  $(e.target).find('[name=city]').val()
		state = $(e.target).find('[name=state]').val()
		zip = $(e.target).find('[name=zip]').val()
		phone = $(e.target).find('[name=phone]').val()
		email = $(e.target).find('[name=email]').val()
		birthdate = $(e.target).find('[name=birthdate]').val()
		gender = $(e.target).find('[name=gender]:checked').val()
		education = $(e.target).find('[name=education]:checked').val()
		degrees = $(e.target).find('[name=degrees]').val() || null
		skills = $(e.target).find('[name=skills]').val()
		languages = $(e.target).find('[name=languages]').val()
		emergencyName1 = $(e.target).find('[name=emergencyName1]').val()
		emergencyPhone1 = $(e.target).find('[name=emergencyPhone1]').val()
		emergencyRelation1 = $(e.target).find('[name=emergencyRelation1]').val()
		emergencyName2 = $(e.target).find('[name=emergencyName2]').val()
		emergencyPhone2 = $(e.target).find('[name=emergencyPhone2]').val()
		emergencyRelation2 = $(e.target).find('[name=emergencyRelation2]').val()*/
		var password = $(e.target).find('[name=password]').val();
		var passwordRepeat = $(e.target).find('[name=passwordRepeat]').val();
		if (password !== passwordRepeat) {
			alert('Your password does not match!');
		} else {
			var user = {
				firstName: $(e.target).find('[name=firstName]').val(),
				lastName: $(e.target).find('[name=lastName]').val(),
				street: $(e.target).find('[name=street]').val(),
				city: $(e.target).find('[name=city]').val(),
				state: $(e.target).find('[name=state]').val(),
				zip: $(e.target).find('[name=zip]').val(),
				phone: $(e.target).find('[name=phone]').val(),
				email: $(e.target).find('[name=email]').val(),
				birthdate: $(e.target).find('[name=birthdate]').val(),
				gender: $(e.target).find('[name=gender]:checked').val(),
				education: $(e.target).find('[name=education]:checked').val(),
				degrees: $(e.target).find('[name=degrees]').val() || null,
				skills: $(e.target).find('[name=skills]').val() || null,
				languages: $(e.target).find('[name=languages]').val(),
				emergencyName1: $(e.target).find('[name=emergencyName1]').val(),
				emergencyPhone1: $(e.target).find('[name=emergencyPhone1]').val(),
				emergencyRelation1: $(e.target).find('[name=emergencyRelation1]').val(),
				emergencyName2: $(e.target).find('[name=emergencyName2]').val() || null,
				emergencyPhone2: $(e.target).find('[name=emergencyPhone2]').val() || null,
				emergencyRelation2: $(e.target).find('[name=emergencyRelation2]').val() || null,
				username: $(e.target).find('[name=username]').val(),
				password: password,
			}
			Meteor.call('addUser', user, function(error) {
				Router.go('dashboard');
			});
		}
			
			
//		var test = $(e.target).find('[name=education]:checked').val();
//		console.log(user);
//		console.log($(e.target).find('[name=education]').val());
	}
});