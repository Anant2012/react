import React from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";

// const User = ({ match }) => {
//     return (
//         <>
//             <h1>Hello {match.params.name} aapka swagat h</h1>
//         </>
//     )
// };
const User = () => {
    const { fname } = useParams();
    const locat = useLocation();
    const history = useHistory();
    // console.log(locat);
    console.log(history);

    return (
        <>
            <h1>Hello {fname} aapka swagat h</h1>
            <p> My current location is {locat.pathname} </p>
            {locat.pathname === '/user/Anant' ?
                <button onClick={() => alert('Hey!! U find me')}>Click Me</button>
                : null
            }
            {/* <button onClick ={()=>history.goBack()}> Go Back</button> */}
        </>
    )
}
export default User;