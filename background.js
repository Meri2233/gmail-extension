

var contextMenuItem = {
    "id": "gmail-extensions",
    "title": "Send Request",
    "contexts": ["all"],  // type of context
};

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener((info, tab) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var data = JSON.stringify({
        "text": info.selectionText
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: data,
        redirect: 'follow'
    };

    fetch("http://localhost:8000/adddata", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
})


