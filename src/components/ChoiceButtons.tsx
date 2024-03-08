import { useState } from "react"
import OpenModeSiteList from "./OpenModeSiteList"
import RestrictedModeSiteList from "./RestrictedModeSiteList"

export default function ChoiceButtons(){
    const [selected, setSelected] = useState(null)

    return(
        <div className="my-8 flex justify-center" onClick={event => {
            alert(event.target.id)
            setSelected(event.target.id)
        }}>
            <button id="openMode" className="bg-pastel-dark-blue hover:bg-pastel-darkest-blue py-4 px-8 text-xl focus:bg-pastel-darkest-blue rounded-l-full">Open Mode</button>
            <button id ="restrictedMode" className="bg-pastel-dark-blue hover:bg-pastel-darkest-blue py-4 px-8 text-xl focus:bg-pastel-darkest-blue">Restricted Mode</button>
            <button id="unusedMode" className="bg-pastel-dark-blue hover:bg-pastel-darkest-blue py-4 px-8 text-xl focus:bg-pastel-darkest-blue rounded-r-full">Button</button>
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