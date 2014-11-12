Template.userLogs.helpers({
	date: function() {
		var formattedDate = new Date(this.time).toDateString();
		return formattedDate;
	},
	time: function() {
		var formattedTime = new Date(this.time).toLocaleTimeString();
		return formattedTime;
	},
	colorClass: function() {
		if (this.status === 'in') {return 'success';}
		else {return 'danger';}
	}
});