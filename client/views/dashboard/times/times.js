Template.times.helpers({
	log: function() {
		return TimeLogs.find({userId: Meteor.userId()}, {sort: {time: -1}, limit: Session.get('logsDisplayed')});
	}
});
Template.times.events({
	'click #viewMoreLogs': function() {
		var l = Session.get('logsDisplayed') + 10;
		Session.set('logsDisplayed', l);
	}
});