import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Form, Col, Row } from "react-bootstrap";
import MyNavBar from "/workspace/react-app/src/component/Navbar.js";

function App() {
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [repositories, setRepositories] = useState("");
    const [repositoriesUrl, setRepositoriesUrl] = useState("");
    const [organisations, setOrganisations] = useState("");
    const [userInput, setUserInput] = useState("");
    const [error, setError] = useState("");

    const setData = ({
        name,
        login,
        repos_url,
        html_url,
        organizations_url
    }) => {
        setName(name);
       
        setUserName(login);
     
        setRepositories(repos_url);
        console.log(repos_url);
        setOrganisations(organizations_url);
        setRepositoriesUrl(html_url);
        console.log(html_url);
    };

    const handleSearch = e => {
        setUserInput(e.target.value);
    };
    console.log(userInput);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("https://api.github.com/users/".concat(userInput))
            .then(res => res.json())
            .then(data => {
                if (data.message) {
                    setError(data.message);
                } else {
                    setData(data);
                }
            });
    };

    // useEffect(() => {
    // 	fetch("https://api.github.com/users/scsanchez")
    // 		.then(res => res.json())
    // 		.then(data => {
    // 			console.log(data);
    // 			setData(data);
    // 		});
    // }, []);

    return (
              
        <div className="App">
            <MyNavBar />
            <div className="input">
                <Form onSubmit={handleSubmit}>
                    <Row className="justify-content-center mt-5 mb-5">
                        <Col className="my-1 col-2">
                            <Form.Label
                                htmlFor="inlineFormInputName"
                                visuallyHidden>
                                Name
							</Form.Label>
                            <Form.Control
                                sm={3}
                                id="inlineFormInputName"
                                placeholder="Introduce username"
                                onChange={handleSearch}
                            />
                        </Col>
                        <Col sm={3} className="my-1">
                            <Button type="submit">Submit</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
            <div className="card">
                <Card style={{ width: "18rem" }}>
                    <Card.Body>
                        <Card.Title>{userName}</Card.Title>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{repositories}</Card.Text>
                        <Card.Text>{organisations}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <header className="App-header"></header>
        </div>
        
    );
}

export default App;
