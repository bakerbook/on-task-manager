chrome.storage.sync.get("blocked_sites").then(sites => {
    if(sites["blocked_sites"].includes(location.href.replace("https://", "").replace("http://", "").replace("www.", "").split("/")[0])){
        let blocker = document.createElement("div")
        blocker.style = `
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: transparent;
            backdrop-filter: blur(5px);
            z-index: 9999
        `
        document.body.style.overflow = "hidden"
        let blockerMessage = document.createElement("div")
        blockerMessage.style = `
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 400px;
            height: 400px;
            background-color: rgba(255, 184, 148, 0.8);
            border-radius: 20%;
        `
        document.body.appendChild(blocker)
        blocker.appendChild(blockerMessage)
    }
})