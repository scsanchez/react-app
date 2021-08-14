import React from "react";
import Nav from 'react-bootstrap/Nav'

const Footer = () => {
    return (
        <Nav bg="light" className="fixed-bottom d-inline-block align-items-center ms-4" >
            <Nav.Item>
                <img
                    src="https://avatars.githubusercontent.com/u/81589625?v=4"
                    href="https://github.com/scsanchez"
                    width="35"
                    height="35"                    
                    className="d-inline-block align-items-center"
                    alt="GitHub logo"
                />                
            </Nav.Item>
            <Nav.Item >Made by Sergio Carrascal</Nav.Item>
        </Nav>
    );
};
export default Footer;

