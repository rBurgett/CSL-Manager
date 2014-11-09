Template.dashSideBar.helpers({
	checkInOutPage : function() {
		if (Session.get('activePage') === 'checkInOutPage') return true;
		
	}
});
