let panelCreated = false;
const loadCheckInterval = setInterval(() => {
    createPanelIfSpringTypeLoaded();
}, 1000);

const createPanelIfSpringTypeLoaded = () => {
    if (panelCreated) {
        return;
    }
    chrome.devtools.inspectedWindow.eval(`!!((window.$st))`, (pageHasSpringType, err) => {
        if (!pageHasSpringType || panelCreated) {
            return;
        }
        clearInterval(loadCheckInterval);
        panelCreated = true;
        chrome.devtools.panels.create('SpringType', '', 'plugin-page/index.html?page=panel', (panel) => {
            var stPanel = null;
            panel.onShown.addListener((window) => {
                //@ts-ignore
                stPanel = window.panel;
            });
            panel.onHidden.addListener(() => {
                if (stPanel) {
                }
            });
        });
        setIconAndPopup();
    });
};

const setIconAndPopup = () => {
    chrome.browserAction.setIcon({
        tabId: chrome.devtools.inspectedWindow.tabId,
        path: {
            '16': '/assets/activated/icon_16.png',
            '32': '/assets/activated/icon_32.png',
            '48': '/assets/activated/icon_48.png',
            '128': '/assets/activated/icon_128.png',
        },
    });
    chrome.browserAction.setPopup({
        tabId: chrome.devtools.inspectedWindow.tabId,
        popup: 'plugin-page/index.html?page=popup',
    });
};

chrome.devtools.network.onNavigated.addListener(() => {
    createPanelIfSpringTypeLoaded();
});

createPanelIfSpringTypeLoaded();

chrome.runtime.onMessage.addListener(
    function(message, callback) {
        if (message == 'runContentScript'){
            chrome.tabs.executeScript({
                code: 'createPanelIfSpringTypeLoaded()'
            });
        }
    });
