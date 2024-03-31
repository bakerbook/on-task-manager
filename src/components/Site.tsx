export default function Site({ site, functionOnClick }){
    return(
        <li className="my-1 bg-pastel-white rounded-lg flex flex-row max-w-94 min-w-94 rounded-l-md rounded-r-md">
            <p className="hover:cursor-pointer pr-1 select-none" onClick={() => {
                functionOnClick(site)
            }}>❌</p>
            <p className="text-black">{site}</p>
        </li>
    )
}