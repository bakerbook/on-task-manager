chrome.storage.sync.get("blocked_sites").then(sites => {
    if(sites["blocked_sites"].includes(location.href.replace("https://", "").replace("http://", "").replace("www.", "").split("/")[0])){
        let link = document.createElement("link")
        link.rel = "stylesheet"
        link.href = "https://fonts.googleapis.com/css2?family=Lilita+One&display=swap"

        document.head.appendChild(link)

        let blocker = document.createElement("div")

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
        let blockerMessageBox = document.createElement("div")
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
        let blockerMessageOne = document.createElement("h1")
        blockerMessageOne.textContent = "Sorry, this website is blocked right now!"
        blockerMessageOne.setAttribute("style", `
            text-align: center;
            color: black;
            font-family: "Lilita One", sans-serif;
            font-size: 24px;
            padding: 24px;
        `)
        let blockerMessageTwo = document.createElement("h1")
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