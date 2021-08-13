import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Col, Row } from "react-bootstrap";
import MyNavBar from "/workspace/react-app/src/component/Navbar.jsx";
import MyCardRepositories from "/workspace/react-app/src/component/Card-repositories.jsx";
import MyCardOrganisations from "/workspace/react-app/src/component/Card-organisations.jsx";
import Spinner from 'react-bootstrap/Spinner'
import "/workspace/react-app/src/App.css"

function App() {
    const [arrayRepos, setArrayRepos] = useState();
    const [arrayOrganisations, setArrayOrganisations] = useState();
    const userInput = "";

    const handleSubmit = (e) => {
        const userInput = document.getElementById("input").value;
        e.preventDefault();
        fetch("https://api.github.com/users/" + userInput + "/orgs")
            .then(function (response) {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then(function (responseAsJson) {
                setArrayOrganisations(responseAsJson);
            })
            .catch(function (error) {
                console.log('Looks like there was a problem: \n', error);
            });
        fetch("https://api.github.com/users/" + userInput + "/repos")
            .then(function (response) {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then(function (responseAsJson) {
                setArrayRepos(responseAsJson);
            })
            .catch(function (error) {
                console.log('Looks like there was a problem: \n', error);
            });
    };

    return (
        <div className="App">
            <MyNavBar />
            <div className="input">
                <Form onSubmit={handleSubmit}>
                    <Row className="justify-content-center mt-5 mb-5">
                        <Col sm={2}>
                            <Form.Label
                                htmlFor="inlineFormInputName"
                                visuallyHidden>
                                Username
							</Form.Label>
                            <Form.Control
                                id="input"
                                placeholder="username"
                            />
                        </Col>
                        <Col sm={1}>
                            <Button type="submit">Search</Button>
                        </Col>
                    </Row>
                </Form>
            </div>

            <div className="row">
                <div className="col scroll">
                    <div className="title">
                        <h2>Organisations</h2>
                    </div>
                    <div className="repositories">
                        {arrayOrganisations ? arrayOrganisations.map((e, index) => {
                            return <MyCardOrganisations key={index} data={e} />
                        }) : userInput ? <Spinner animation="border" /> : ""}
                    </div>
                </div>
                <div className="col">
                    <div className="title">
                        <h2>Repositories</h2>
                    </div>
                    <div className="repositories">
                        {arrayRepos ? arrayRepos.map((e, index) => {
                            return <MyCardRepositories key={index} data={e} />
                        }) : userInput ? <Spinner animation="border" /> : ""}
                    </div>
                </div>
            </div>
        </div >

    );
}

export default App;
