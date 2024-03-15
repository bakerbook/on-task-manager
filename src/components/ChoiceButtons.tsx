import { useState } from "react"
import OpenModeSiteList from "./OpenModeSiteList"
import RestrictedModeSiteList from "./RestrictedModeSiteList"

export default function ChoiceButtons(){
    const [selected, setSelected] = useState(null)

    return(
        <div className="my-8 inline-block justify-center" onClick={event => {
            if(event.target.className.includes("choiceButton")) setSelected(event.target.id)
        }}>
            <div className="flex justify-center">
                <button id="openMode" className="choiceButton bg-pastel-dark-blue hover:bg-pastel-darkest-blue py-4 px-8 text-xl focus:bg-pastel-darkest-blue rounded-l-full">Open Mode</button>
                <button id ="restrictedMode" className="choiceButton bg-pastel-dark-blue hover:bg-pastel-darkest-blue py-4 px-8 text-xl focus:bg-pastel-darkest-blue">Restricted Mode</button>
                <button id="unusedMode" className="choiceButton bg-pastel-dark-blue hover:bg-pastel-darkest-blue py-4 px-8 text-xl focus:bg-pastel-darkest-blue rounded-r-full">Button</button>
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