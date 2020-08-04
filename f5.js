var refresh = false;

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("startBtn").addEventListener("click", startFunc)
});

async function startFunc() {
    refresh = true;
    var timeInterval = document.getElementById("intervalField").value;
    document.getElementById("startBtn").textContent = "Start (active)";
    while(refresh) {
        chrome.tabs.reload()
        await new Promise(r => setTimeout(r, timeInterval*1000));
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("stopBtn").addEventListener("click", stopFunc)
});

function stopFunc() {
    refresh = false;
    document.getElementById("startBtn").textContent = "Start";
}
