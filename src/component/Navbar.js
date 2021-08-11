import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

const MyNavBar = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">
                <img
                    src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
                    width="80"
                    height="60"
                    className="d-inline-block align-items-center"
                    alt="Octopus GitHub"
                />
                <img
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png"
                    width="80"
                    height="21"
                    className="d-inline-block align-items-center"
                    alt="GitHub"
                />
            </Navbar.Brand>
        </Navbar>
    );
};
export default MyNavBar;