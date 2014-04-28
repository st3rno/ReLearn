chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------

	}
	}, 10);
	$('#docs-title').click(function(){
		$('.modal-dialog-bg').css('opacity', 0.95);
		$('.modal-dialog-title-text').html('Name your resume.');
		$('.modal-dialog-content label').html("Example: John's Resume Spring 2014");
	});
});