const betweenFillWaitTime = 500;

async function lookForButton(){
    var addToCartBtnXPath = "//div[contains(@class, 'item-cells-wrap border-cells items-grid-view four-cells expulsion-one-cell')]//button[contains(text(), 'Add to cart')]"; 
    var addToCartElm = document.evaluate(addToCartBtnXPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    
    if(addToCartElm != null){
        addToCartElm.click();
        chrome.runtime.sendMessage({'messageName': "buttonFoundOnNewEgg"});
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

