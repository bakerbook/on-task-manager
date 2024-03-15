export default function Site({ site, functionOnClick }){
    return(
        <div className="my-1 bg-pastel-white rounded-lg ps-2 flex flex-row">
            <p className="hover:cursor-pointer pr-1 select-none" onClick={() => {
                functionOnClick(site)
            }}>❌</p>
            <p className="text-black">{site}</p>
        </div>
    )
}