Template.login.helpers({

});
Template.login.events({
    'submit form': function(event) {
        event.preventDefault();
        var userData = {
            username: $(event.target).find('[name=username]').val(),
            password: $(event.target).find('[name=password]').val()
        };
	Meteor.call('login', userData, function(error) {
            if (error) {
                error.throw(error);
            } else {
                router.go(dashboard);
            }
        });
    }
});
