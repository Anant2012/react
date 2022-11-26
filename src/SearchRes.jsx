import React from "react";

const SearchRes = (props) => {
    const img = 'https://images.unsplash.com/600/300/?${props.name}';
    return (
        <>
            <div>
                <img src={img} alt="Chla ja"/>
            </div>
        </>
    )
}

export default SearchRes;