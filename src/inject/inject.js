chrome.extension.sendMessage({}, function(response) {

	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
		
		var s = "docs.google.com"
		if (window.location.href.indexOf('docs.google.com/document') > -1){
			var ourStyle = $('<style></style>');
			var styleStuff = ".onboard-btn,#onboard-h1,#onboard-p{font-family:Helvetica;opacity:.9;color:#fff}#onboard-h1{font-size:72px;font-weight:300}#onboard-p{font-size:36px;font-weight:200;margin-bottom:60px}#onboard-inner{width:600px;margin:0 auto}#onboard-bg{z-index:100000000;position:absolute;top:0px;width:100%;background-color:#000;opacity:.6;margin:0 auto;text-align:center;height:100%;padding-top:20px}.onboard-btn{background-color:green;border-radius:15px;border:1px solid green;height:60px;width:160px;font-size:24px;color:#fff}";
			ourStyle.append(styleStuff);
			console.log(ourStyle);
			$('head style').append(ourStyle);

			var onboard = $('<div><div>');
			var onboardStuff = '<div id="onboard-bg"> <div id="onboard-inner"> <h1 id="onboard-h1"> Welcome!</h1> <p id="onboard-p"> ReLearn will help you to learn how to create a professional cover letter and resume to help you stand out among job candidates. </p> <button class="onboard-btn" id="onboard-btn1">Continue</button> </div> </div>';
			onboard.append(onboardStuff);

			$('body').append(onboard);

			// ----------------------------------------------------------
			// This part of the script triggers when page is done loading
			console.log("Hello. This message was sent from scripts/inject.js");
			// ----------------------------------------------------------
		}


		$('.onboard-btn').click(function(){
			console.log("HEKLHFJHKLF");
			if($(this).attr('id') == 'onboard-btn1')
			{
				$('#onboard-bg').remove();
				var onboard2 = $('<div><div>');
				var onboardStuff2 = '<div id="onboard-bg"> <div id="onboard-inner"> <h1 id="onboard-h1"> Getting Started </h1> <p id="onboard-p"> We will be using the free online word processor Google Docs. Once we set up your resume document,you will be able to access it and all of your documents from any computer. </p> <button class="onboard-btn" id = "onboard-btn2" onclick=document.getElementById("onboard-bg").remove();>Continue</button> </div> </div>'
				onboard2.append(onboardStuff2);
				$('body').append(onboard2);
				
			}
			

		});


	}
	}, 10);

	$('#docs-title').click(function(){
		$('.modal-dialog-bg').css('opacity', 0.95);
		$('.modal-dialog-title-text').html('Name your resume.');
		$('.modal-dialog-content label').html("Example: John's Resume Spring 2014");
	});
});