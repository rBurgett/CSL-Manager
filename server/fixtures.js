if (Meteor.users.find().count() === 0) {
    Accounts.createUser({
        'username' : 'admin',
        'password' : 'adminpass',
        'profile' : {
            'role' : 'admin',
            'checkedIn' : false,
            'firstName' : null,
            'lastName' : null
        }
    });
	Accounts.createUser({
        'username' : 'manager',
        'password' : 'managerpass',
        'profile' : {
            'role' : 'manager',
            'checkedIn' : false,
            'firstName' : null,
            'lastName' : null
        }
    });
	Accounts.createUser({
        'username' : 'user',
        'password' : 'userpass',
        'profile' : {
            'role' : 'user',
            'checkedIn' : false,
            'firstName' : null,
            'lastName' : null
        }
    });
};