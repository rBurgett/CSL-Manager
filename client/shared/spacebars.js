UI.registerHelper('date', function(d) {
	formattedDate = new Date(d).toDateString();
	return formattedDate;
});
UI.registerHelper('time', function(t) {
	formattedTime = new Date(t).toLocaleTimeString();
	return formattedTime;
});