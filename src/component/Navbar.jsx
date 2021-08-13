import React from "react";
import Navbar from "react-bootstrap/Navbar";

const MyNavBar = () => {
    return (
        <Navbar bg="light" variant="dark">
            <Navbar.Brand href="#home">
                <img
                    src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
                    width="40"
                    height="30"
                    className="d-inline-block align-items-center"
                    alt="Octopus GitHub"
                />
                <img
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png"
                    width="40"
                    height="11"
                    className="d-inline-block align-items-center"
                    alt="GitHub"
                />
            </Navbar.Brand>
        </Navbar>
    );
};
export default MyNavBar;