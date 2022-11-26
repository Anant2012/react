import React from "react";
import { useHistory } from "react-router-dom";

const Error = () => {
    const history = useHistory();
    return (
        <>
            <h1>Oops, Page not found</h1>
            <h2>Chla ja bsdk...</h2>
            <h3>Sorry!! this page not exists</h3>
            <button onClick ={()=>history.push("/")}> Go Back</button>
        </>
    )
};

export default Error;