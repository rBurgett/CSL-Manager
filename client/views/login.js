Template.login.helpers({

});
Template.login.events({
    'submit form': function(event) {
        event.preventDefault();
        var data = {
            username: $(event.target).find('[name=username]').val(),
            password: $(event.target).find('[name=password]').val()
        };
	Meteor.loginWithPassword(data.username, data.password, function(err) {
            if (err) {
                alert('That is not a valid username or password.');
            } else {
                Router.go('dashboard');
            }
        });
    }
});