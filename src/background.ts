chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ "blocked_sites": [] })
    chrome.storage.sync.set({ "allowed_sites": [] })
})