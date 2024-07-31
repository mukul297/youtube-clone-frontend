import { SearchBar } from "./SearchBar"

export const AppBar = () => {
    return( <div className="flex justify-between p-2">
        <div className="text-md inline-flex items-center ">
            Youtube logo
        </div> 
        <div>
            <SearchBar></SearchBar>
        </div>
        <div>
            Sign in
        </div>
    </div>)
}