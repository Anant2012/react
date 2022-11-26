import React from "react";
import { useState } from "react";
import SearchRes from "./SearchRes";

const Search = () => {
    const [img, setImg] = useState(" ");
    const inputevent = (event) => {
        const data = event.target.value;
        setImg(data);
    }
    return (
        <>
            <div className="searchbar">
                <input type="text" placeholder="Search.." value={img} onChange={inputevent}></input>
            </div>
            { img === "" ? null :<SearchRes name={img} />}
        </>
    )
}

export default Search;