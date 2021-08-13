import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Form, Col, Row } from "react-bootstrap";
import MyNavBar from "/workspace/react-app/src/component/Navbar.jsx";
import MyCard from "/workspace/react-app/src/component/Card.jsx";

function App() {
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [bio, setBio] = useState("");
    const [repositories, setRepositories] = useState("");
    const [repositoriesUrl, setRepositoriesUrl] = useState("");
    const [organisations, setOrganisations] = useState("");
    const [userInput, setUserInput] = useState("");
    const [error, setError] = useState("");
    const [arrayRepos, setArrayRepos] = useState();
    const [data, setData] = useState();

    const handleSearch = e => {
        setUserInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("https://api.github.com/users/" + userInput)
            .then(res => res.json())
            .then(data => {
                if (data.message) {
                    setError(data.message);
                } else {
                    setData(data);
                }
            });
        fetch("https://api.github.com/users/" + userInput + "/repos")
            .then(res => res.json())
            .then(data => {
                if (data.message) {
                    setError(data.message);
                } else {
                    setArrayRepos(data);
                }
            });
    };

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
                                placeholder="username"
                                onChange={handleSearch}
                            />
                        </Col>
                        <Col className="my-1 col-1">
                            <Button type="submit">Search</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
            <div className="row justify-content-center mt-5 mb-5">
            </div>
            <div className="row">
                {arrayRepos ? arrayRepos.map((e, index) => {
                    return <MyCard key={index} data={e} />
                }) : ""}
            </div>
            <header className="App-header"></header>
        </div >

    );
}

export default App;
