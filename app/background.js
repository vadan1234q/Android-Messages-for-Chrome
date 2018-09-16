(function() {
    chrome.app.runtime.onLaunched.addListener(start);
    chrome.runtime.onInstalled.addListener(start);

    function start() {
        chrome.app.window.create('views/window.html',
            {
                'bounds': {
                    'width': 800,
                    'height': 680
                },
                id: 'Messages'
            },
            onWindowCreated
        );
    }

    function onWindowCreated(appWin) {
        //nothing for now 
    }

}());