// Browser_Action_Click_Event
function Browser_Action_Click_Event(tabs) {		
	chrome.tabs.getSelected(function(tab){
		chrome.tabs.sendMessage(tab.id, {action: "CORS", tab: tab});
	})
}
chrome.browserAction.onClicked.addListener(Browser_Action_Click_Event);