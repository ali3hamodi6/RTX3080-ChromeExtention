const betweenFillWaitTime = 500;

async function lookForButton(){
    var addToCartBtnXPath = '//button[contains(@class, "add-to-cart-button") and not(@disabled)]'; 
    var addToCartElm = document.evaluate(addToCartBtnXPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    
    if(addToCartElm != null){
        addToCartElm.click();
        chrome.runtime.sendMessage({'messageName': "buttonFoundOnBestBuy"});
    }else{
        chrome.runtime.sendMessage({'messageName': "buttonNotFound"});
        await wait(7000);
        window.location.reload() 
    }
}

async function wait(waitTime) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, waitTime);
    });
}

window.addEventListener("load", async () => {
    lookForButton();
});

