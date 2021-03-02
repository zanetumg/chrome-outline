// Find the current active tab
const getTab = () =>
    new Promise(resolve => {
        chrome.tabs.query(
            {
                active: true,
                currentWindow: true
            },
            tabs => resolve(tabs[0])
        )
    })

getTab().then(tab => {
	chrome.tabs.sendMessage(tab.id, {command: "get/articles"}, function(response) {
		alert(response.payload)
	})
})
