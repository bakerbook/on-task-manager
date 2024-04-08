import { useState, useEffect } from "react"
import OpenModeSiteList from "./OpenModeSiteList"
import RestrictedModeSiteList from "./RestrictedModeSiteList"

export default function ChoiceButtons(){
    const [selected, setSelected] = useState<string>(null)

    useEffect(() => {
        if (selected === null) return;
        const el: HTMLElement = document.getElementById(selected)
        el.style.backgroundColor = "#304674"
    }, [selected])

    return(
        <div className="my-8 inline-block justify-center" onClick={event => {
            if(event.target.className.includes("choiceButton")){
                if(event.target.id === selected) return
                if(selected){
                    document.querySelector<HTMLButtonElement>("#" + selected).style.backgroundColor = "#98BAD5"
                }
                event.target.backgroundColor = "#304674"
                setSelected(event.target.id)
            }
        }}>
            <div className="flex justify-center">
                <button id="openMode" className="choiceButton text-center bg-pastel-dark-blue hover:text-pastel-white w-48 py-4 px-8 text-xl focus:bg-pastel-darkest-blue rounded-l-full">Open Mode</button>
                <button id ="restrictedMode" className="choiceButton text-center bg-pastel-dark-blue hover:text-pastel-white w-48 py-4 px-8 text-xl focus:bg-pastel-darkest-blue rounded-r-full">Restricted Mode</button>
            </div>
            {
                selected === "openMode" ? (
                    <OpenModeSiteList />
                ) : selected == "restrictedMode" ? (
                    <RestrictedModeSiteList />
                ) : selected == "unusedMode" ? (
                    <p>Unused for now</p>
                ) : (
                    null
                )
            }
        </div>
    )
}