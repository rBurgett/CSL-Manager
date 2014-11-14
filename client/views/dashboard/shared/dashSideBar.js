Template.dashSideBar.helpers({
	checkInOutPage : function() {
		if (Session.get('activePage') === 'checkInOutPage') return true;
	},
	times : function() {
		if (Session.get('activePage') === 'times') return true;
	},
	addNewUserPage : function() {
		if (Session.get('activePage') === 'addNewUserPage') return true;
	}
});