document.getElementById("bb").addEventListener("click", openBB);
document.getElementById("ng").addEventListener("click", openNG);
document.getElementById("am").addEventListener("click", openAm);



function openBB(){
    var bestBuyURL = "https://www.bestbuy.com/site/computer-cards-components/video-graphics-cards/abcat0507002.c?id=abcat0507002&qp=gpusv_facet%3DGraphics%20Processing%20Unit%20(GPU)~NVIDIA%20GeForce%20RTX%203080"
    chrome.tabs.create({url: bestBuyURL}, (tab) => {
        if (chrome.runtime.lastError) {
            return;
        }
    });
}


function openNG(){
    var newEggURL = "https://www.newegg.com/p/pl?N=100007709%20601326374%204841%20601357282&cm_sp=Cat_video-Cards_1-_-Visnav-_-Gaming-Video-Cards_1";
    chrome.tabs.create({url: newEggURL}, (tab) => {
        if (chrome.runtime.lastError) {
            return;
        }
    });
}

function openAm(){
    var amazonURL = "https://www.amazon.com/stores/page/6B204EA4-AAAC-4776-82B1-D7C3BD9DDC82?ingress=3&visitId=d047b8a0-453a-4cab-a436-97cd5af6078f&ref_=nav_custrec_signin"
    chrome.tabs.create({url: amazonURL}, (tab) => {
        if (chrome.runtime.lastError) {
            return;
        }
    });
}
