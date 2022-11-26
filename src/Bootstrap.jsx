import React from "react";
// import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import Menu from './Menu';
import 'bootstrap/dist/css/bootstrap.min.css';

const Bootstrap = () => {
    const history = useHistory();
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">

                <a class="navbar-brand" href="/">React</a>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/contact">Contact Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/user/Anant">User</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/search">Search</a>
                        </li><li class="nav-item">
                            <a class="nav-link" href="/tug">Error</a>
                        </li>
                    </ul>
                    <button className="btn btn-outline-success" onClick={() => history.goBack()}>Back</button>
                </div>
            </nav>
            <Menu/>
        </>
    )
}
export default Bootstrap;