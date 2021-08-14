import React from "react";
import Navbar from "react-bootstrap/Navbar";

const Footer = () => {
    return (
        <Navbar bg="light" className="fixed-bottom"  >
            <Navbar.Brand href="https://github.com/scsanchez" target="_blank">
                <img
                    src="https://avatars.githubusercontent.com/u/81589625?v=4"
                    width="35"
                    height="35"         
                    className="d-inline-block align-items-center ms-4"
                    alt="GitHub logo"
                />
            </Navbar.Brand>
            <Navbar.Brand>Made by Sergio Carrascal</Navbar.Brand>
        </Navbar>
    );
};
export default Footer;