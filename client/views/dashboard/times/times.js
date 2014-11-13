Template.times.helpers({
	log: function() {
		return TimeLogs.find({userId: Meteor.userId()}, {sort: {time: -1}, limit: Session.get('logsDisplayed')});
	},
	more: function() {
		if (TimeLogs.find({userId: Meteor.userId()}).count() > 20) {
			return true;
		} else {
			return false;
		}
	}
});
Template.times.events({
	'click #loadMoreLogs': function() {
		var l = Session.get('logsDisplayed') + 20;
		Session.set('logsDisplayed', l);
	}
});