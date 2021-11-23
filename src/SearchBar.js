import React,{ useState } from 'react'

function SearchBar(props) {
    
    const [searchPhrase,setSearchPhrase]=useState("");
    
    const handleSearch = (e)=>{
        const value= e.target.value.toLowerCase();
        setSearchPhrase(value);
        props.onSearch(value)
    }
    return (
        <div>
            <input className="border border-3 shadow rounded" classNtype="text" value={searchPhrase}
            onChange={handleSearch}></input>
        </div>
    )
}

export default SearchBar
