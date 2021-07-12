import React from "react";
import './NavBar.css';
import { Navbar } from 'react-bootstrap';
import logo from '../assets/Images/inspect/Front-End/Page 1/Logo/logo.png';
const NavBar = () => {
    return (
        <div>
            <Navbar bg="primary" id="Navbar" variant="dark">
                <Navbar.Brand href="https://www.bluestacks.com/"><img src={logo} alt="logo" className="App-logo"></img></Navbar.Brand>
            </Navbar>
        </div>
    )
};
export default NavBar;
