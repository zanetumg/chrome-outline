// accept an article dom and
// convert to json
function article_to_json() {
    let res = [];
    for (let i = 0; i < dom.children.length; i++) {
        const child = dom.children[i];
        const type = child.tagName;

		if(type !== "h1" || type !== "h2")
			continue;

        const value = child.innerHTML.trim();

        res.push({ type, value });
    }
	
    return res;
}

function main() {
    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        if (request.hasOwnProperty('command') && request.command === 'get/articles') {
            let res = [];
            let doms = document.getElementsByTagName('article');
            for (let dom of doms) {
                res.push(...article_to_json(dom));
            }
            sendResponse({ res });
        }
    });
}

main();
