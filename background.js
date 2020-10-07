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

            case "buttonFoundOnAmazon": {
                let myAudio = new Audio(chrome.runtime.getURL("piece-of-cake.mp3"));
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


