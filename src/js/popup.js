// Find the current active tab
function getTab() {
    new Promise(resolve => {
        chrome.tabs.query({ active: true, currentWindow: true }, tabs => 
            resolve(tabs[0])
        )
    })
}

function main() {
    getTab().then(tab => {
        chrome.tabs.sendMessage(tab.id, {command: "get/articles"}, response => {
            chrome.extension.getBackgroundPage().console.log(response);
        })
    })
}

main()