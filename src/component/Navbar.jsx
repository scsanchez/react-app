import React from "react";
import Navbar from "react-bootstrap/Navbar";

const MyNavBar = () => {
    return (
        <Navbar bg="light">
            <Navbar.Brand href="#home">
                <img
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                    width="50"
                    height="50"         
                    className="d-inline-block align-items-center ms-4"
                    alt="GitHub logo"
                />
                <img
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png"
                    width="70"
                    height="21"
                    className="d-inline-block align-items-center"                   
                    alt="GitHub"
                />
            </Navbar.Brand>
        </Navbar>
    );
};
export default MyNavBar;