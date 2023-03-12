import { useState } from "react";
import keyBoardData from "./keyboardData";
import Card from './Card';
function filterData(search,seatchResult){
    //random comment line
    const result = seatchResult.filter((item) => {
        return item.name.toLowerCase().includes(search.toLowerCase());
    });
    return result;
}
function Search(){
    let [searchResult, setSearchResult] = useState(keyBoardData);
    let [search, setSearch] = useState("");
    return (
        <>
            <input type="text" placeholder="Search..." className="search-container" value={search} onChange={(e) => setSearch(e.target.value)}/>
            <button className="serch-bar" onClick={()=> {
               const data = filterData(search,searchResult); 
               setSearchResult(data);
            }}
            >
            Search</button>
             { <div className="container">
                {searchResult.map((data) => {
                     return <Card name={data.name} img={data.img} />;
                })}
      </div> }
                </>
            );
}
export default Search;