console.log('contentscript.js running...');

// Chrome onRequest Listener (Chrome的Request監聽事件)
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.action == "CORS") {
		CORS();
	}
});

// Cross-origin resource sharing
function CORS(tabs) {
	console.log('enter CORS function');

	$.ajax({
		type: "GET",
		url: "https://developer.chrome.com/extensions/manifest.html",
		data: {
		}
	}).done(function( data ) {
		// console.log( data );
		console.log('done');
		document.documentElement.innerHTML = data;
		var $newDoc = $(document);
		$newDoc.find('link[href], a[href]').each(function(index) {
			if (this.href.indexOf('http') == -1)
				this.href = 'https://developer.chrome.com' + this.href;
			else
				this.href = this.href.replace(location.host, 'developer.chrome.com');
		});
		$newDoc.find('script[src], img[src]').each(function(index) {
			if (this.src.indexOf('http') == -1)
				this.src = 'https://developer.chrome.com' + this.src;
			else
				this.src = this.src.replace(location.host, 'developer.chrome.com');
		});
	});
}