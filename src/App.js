import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Form, Col, Row } from "react-bootstrap";
import MyNavBar from "/workspace/react-app/src/component/Navbar.js";
import myCard from "/workspace/react-app/src/component/Card.js";

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
        setOrganisations(organizations_url);
        setRepositoriesUrl(html_url);
    };

    const handleSearch = e => {
        setUserInput(e.target.value);
    };

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

    useEffect(() => {
        fetch("https://api.github.com/users/example")
            .then(res => res.json())
            .then(data => {
                setData(data);
            });
    }, []);

    return (

        <div className="App col-12">
            <MyNavBar />
            <div className="input">

                <Form onSubmit={handleSubmit}>
                    <Row className="justify-content-center mt-5 mb-5">
                        <Col className="my-1 col-sm-2 ">
                            <Form.Label
                                htmlFor="inlineFormInputName"
                                visuallyHidden>
                                Name
							</Form.Label>
                            <Form.Control
                                id="inlineFormInputName"
                                placeholder="Introduce username"
                                onChange={handleSearch}
                            />
                        </Col>
                        <Col className="my-1 col-1">
                            <Button type="submit">Search</Button>
                        </Col>
                    </Row>
                </Form>

            </div>
            <div className="row">
                <div className="card col-6">
                    <myCard />
                    <Col>
                        <Row className="justify-content-center mt-5 mb-5">
                            <Card style={{ width: "18rem" }}>
                                <Card.Body>
                                    <Card.Title>{userName}</Card.Title>
                                    <Card.Title>{name}</Card.Title>
                                    <Card.Link href={organisations}>
                                        <Card.Text>Organisations</Card.Text>
                                    </Card.Link>

                                </Card.Body>
                            </Card>
                        </Row>
                    </Col>
                </div>
                <div className="card col-6">
                    <Col>
                        <Row className="justify-content-center mt-5 mb-5">
                            <Card style={{ width: "18rem" }}>
                                <Card.Body>
                                    <Card.Title>{userName}</Card.Title>
                                    <Card.Title>{name}</Card.Title>
                                    <Card.Link href={repositories}>
                                        <Card.Text>Repositories</Card.Text>
                                    </Card.Link>
                                </Card.Body>
                            </Card>
                        </Row>
                    </Col>
                </div>
            </div>
            <header className="App-header"></header>
        </div >

    );
}

export default App;
