if (Meteor.users.find().count() === 0) {
    Accounts.createUser({
        'username' : 'admin',
        'password' : 'adminpass',
        'profile' : {
            'role' : 'administrator'
        }
    });
};
