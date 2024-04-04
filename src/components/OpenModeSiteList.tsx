import { useState, useEffect } from "react"
import Site from "./Site"

export default function OpenModeSiteList(){
    const [blockedSites, setBlockedSites] = useState<Array<string>>([])

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
        <div className="flex flex-col justify-center overflow-x-hidden">

            <h1 className="underline">Blocked websites</h1>

            <input id="blockedInput"/>
            <button className="h-8 w-16 mx-auto my-1 bg-dark-brown text-pastel-white rounded-md" onClick={() => {
                if((document.getElementById("blockedInput") as HTMLInputElement).value === "") return;
                updateBlockedSites(((document.getElementById("blockedInput") as HTMLInputElement).value).replace("https://", "").replace("http://", "").replace("www.", "").split("/")[0]);
                (document.getElementById("blockedInput") as HTMLInputElement).value = ""
            }}>Add</button>

            {
                blockedSites.length === 0 ? (
                    <ul className="max-h-40 border-2 border-light-brown p-top-2 p-bottom-2 p-left-2 rounded-md overflow-x-hidden overflow-y-scroll w-96">
                        <li className="my-1 bg-pastel-white rounded-lg flex flex-row max-w-94 min-w-94 rounded-l-md rounded-r-md">
                            <p className="pl-1 text-black">No sites</p>
                        </li>
                    </ul>
                ) : (
                    <ul className="max-h-40 border-2 border-light-brown p-top-2 p-bottom-2 p-left-2 rounded-md overflow-x-hidden overflow-y-scroll w-96">{blockedSites.map(site => <Site site={site} functionOnClick={(siteToDelete) => {
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