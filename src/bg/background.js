// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	chrome.pageAction.show(sender.tab.id);
  	chrome.tabs.executeScript(null, { file: "jquery.js" }, function(){
  		chrome.tabs.executeScript(null, { file: "inject.js" }, function(){
  			console.log("injecting");
  		})
  	})
    sendResponse();
  });