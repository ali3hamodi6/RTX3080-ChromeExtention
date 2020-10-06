
chrome.browserAction.onClicked.addListener(()=>{
    if (chrome.runtime.lastError) {
        return;
    }
    var bestBuyURL = "https://www.bestbuy.com/site/computer-cards-components/video-graphics-cards/abcat0507002.c?id=abcat0507002&qp=gpusv_facet%3DGraphics%20Processing%20Unit%20(GPU)~NVIDIA%20GeForce%20RTX%203080"
    chrome.tabs.create({url: bestBuyURL}, (tab) => {
        if (chrome.runtime.lastError) {
            return;
        }
    });

    var neweggURL = "https://www.newegg.com/p/pl?N=100007709%20601326374%204841%20601357282&cm_sp=Cat_video-Cards_1-_-Visnav-_-Gaming-Video-Cards_1"
    chrome.tabs.create({url: neweggURL}, (tab) => {
        if (chrome.runtime.lastError) {
            return;
        }
    });
})

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message != null && message.messageName != null) {
        switch (message.messageName) {
            case "buttonFoundOnBestBuy": {
                let myAudio = new Audio(chrome.runtime.getURL("sound.mp3"));
                myAudio.play();
                        break;
            }
            case "buttonFoundOnNewEgg": {
                let myAudio = new Audio(chrome.runtime.getURL("swiftly.mp3"));
                myAudio.play();
                        break;
            }
            case "buttonNotFound": {
                console.log("Nothing to do");
                break;
            }
            default:
        }
    }
});

