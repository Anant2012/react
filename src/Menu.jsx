import React from "react";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Menu = () => {
    return (
        <>
        
            {/* <Link to="/">About Us</Link>
            <Link to="/contact">Contact Us</Link> */}
            <br/>
            <NavLink exact activeClassName="active_class" to="/">
                About Us
            </NavLink>
            <NavLink exact activeClassName="active_class" to="/contact">
                Contact Us
            </NavLink>
            <NavLink exact activeClassName="active_class" to="/user/Anant">
                User
            </NavLink>
            <NavLink exact activeClassName="active_class" to="/search">
                Search
            </NavLink>
            <br/>
            {/* <a href="/">AboutUs </a>
            <a href="/contact">Contact Us </a>
            <a href="/carrer">Carrer</a> */}
        </>
    );
}

export default Menu;