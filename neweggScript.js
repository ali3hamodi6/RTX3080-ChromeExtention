const betweenFillWaitTime = 500;

async function lookForButton(){
    var addToCartBtnXPath = "//div[contains(@class, 'item-cells-wrap')]//div[@class='item-action']//button[contains(text(), 'Add to cart')]"; 
    var addToCartElm = document.evaluate(addToCartBtnXPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    
    var viewDetailsBtnXPath = "//div[contains(@class, 'item-cells-wrap')]//div[@class='item-action']//button[contains(text(), 'View Details')]"; 
    var viewDetailsElm = document.evaluate(viewDetailsBtnXPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    
    if(addToCartElm != null){
        await wait(1000);
        addToCartElm.click();
        chrome.runtime.sendMessage({'messageName': "buttonFoundOnNewEgg"});
    }else if(viewDetailsElm != null){
        await wait(1000);
        viewDetailsElm.click();
        chrome.runtime.sendMessage({'messageName': "buttonFoundOnNewEgg"});
    }else {
        chrome.runtime.sendMessage({'messageName': "buttonNotFound"});
        await wait(5000);
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

