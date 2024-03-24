import { useState, useEffect } from "react"
import Site from "./Site"

export default function OpenModeSiteList(){
    const [blockedSites, setBlockedSites] = useState([])

    async function updateBlockedSites(toAdd: string){
        chrome.storage.sync.set({ "blocked_sites": blockedSites.concat([toAdd])})
        setBlockedSites(blockedSites.concat([toAdd]))
    }

    useEffect(() => {
        async function getBlockedSites(){
            let data = await chrome.storage.sync.get("blocked_sites")
            if(data["blocked_sites"].length != 0){
                setBlockedSites(data["blocked_sites"])
            }
        }
        getBlockedSites()
    })

    return(
        <div className="flex flex-col justify-center">

            <h1 className="underline">Blocked websites</h1>

            <input id="blockedInput"/>
            <button onClick={() => {
                updateBlockedSites(((document.getElementById("blockedInput") as HTMLInputElement).value).replace("https://", "").replace("http://", "").replace("www.", "").split("/")[0])
            }}>Add</button>

            {
                blockedSites.length === 0 ? (
                    <div className="my-1 bg-pastel-white rounded-lg ps-2 flex flex-row">
                        <p className="text-black">No sites</p>
                    </div>
                ) : (
                    <ul>{blockedSites.map(site => <Site site={site} functionOnClick={(siteToDelete) => {
                        let newList = blockedSites.filter(item => item !== siteToDelete)
                        chrome.storage.sync.set({ "blocked_sites": newList }).then(() => {
                            setBlockedSites(newList)
                        })
                    }}/>)}</ul>
                )
            }
        </div>
    )
}