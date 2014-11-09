Template.dashSideBar.helpers({
	checkInOutPage : function() {
		if (Session.get('activePage') === 'checkInOutPage') return true;
	},
	times : function() {
		if (Session.get('times') === 'checkInOutPage') return true;
	}
});
