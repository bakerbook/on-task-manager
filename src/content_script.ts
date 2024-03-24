chrome.storage.sync.get("blocked_sites").then(sites => {
    if(sites["blocked_sites"].includes(location.href.replace("https://", "").replace("http://", "").replace("www.", "").split("/")[0])){
        let style: HTMLStyleElement = document.createElement("style")
        style.textContent = `
            @font-face {
                font-family: "Lilita One";
                src: url("${chrome.runtime.getURL("LilitaOne.ttf")}");
            }
        ` 
        document.head.appendChild(style)
        let blocker: HTMLDivElement = document.createElement("div")
        blocker.setAttribute("style", `
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: transparent;
            backdrop-filter: blur(5px);
            z-index: 9999
        `)
        document.body.style.overflow = "hidden"
        let blockerMessageBox: HTMLDivElement = document.createElement("div")
        blockerMessageBox.setAttribute("style", `
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 400px;
            height: 400px;
            background-color: rgba(255, 184, 148, 0.8);
            border-radius: 20%;
            justify-content: center;
        `)
        document.body.appendChild(blocker)
        let blockerMessageOne: HTMLHeadingElement = document.createElement("h1")
        blockerMessageOne.textContent = "Sorry, this website is blocked right now!"
        blockerMessageOne.setAttribute("style", `
            text-align: center;
            color: black;
            font-family: "Lilita One", sans-serif;
            font-size: 24px;
            padding: 24px;
        `)
        let blockerMessageTwo: HTMLHeadingElement = document.createElement("h1")
        blockerMessageTwo.textContent = "If you would like to access this website, you can change the allowed websites and/or time limit in the extension settings."
        blockerMessageTwo.setAttribute("style", `
            text-align: center;
            color: black;
            font-family: "Lilita One", sans-serif;
            font-size: 24px;
            padding: 24px;
        `)
        blockerMessageBox.appendChild(blockerMessageOne)
        blockerMessageBox.appendChild(blockerMessageTwo)
        blocker.appendChild(blockerMessageBox)
    }
})