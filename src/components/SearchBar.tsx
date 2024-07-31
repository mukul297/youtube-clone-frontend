export const SearchBar = () => {
    return <div>
        <div className="w-96 flex border border-gray-500 rounded-3xl p-1 pl-3 text-sm pr-2">
            <input  id="default-search" className="w-full bg-gray-300 text-inherit	 border-none outline-none  text-slate-50" placeholder="Search" required />
            <button className=" text-gray-400 font-bold py-2 px-4 rounded inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </button>
        </div>

    </div>
}