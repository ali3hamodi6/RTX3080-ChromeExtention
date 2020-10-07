const betweenFillWaitTime = 500;

async function lookForButton(){
    var addToCartBtnXPath = '//div//span[contains(text(), "Add to Cart")]'; 
    var addToCartElm = document.evaluate(addToCartBtnXPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    
    if(addToCartElm != null){
        await wait(1000);
        addToCartElm.click();
        chrome.runtime.sendMessage({'messageName': "buttonFoundOnAmazon"});
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

