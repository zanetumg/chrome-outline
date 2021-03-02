
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
    	if (request.hasOwnProperty("command") && request.command === "get/articles") {
    		let res_payload = []
    		let dom_articles = document.getElementsByTagName("article")
			for (let dom_article of dom_articles) {
				res_payload.push({})
				let dom_head1 = dom_article.getElementsByTagName("h1")
			}
			sendResponse({status: payload: })
    	}
    }
)
