import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Col, Row } from "react-bootstrap";
import MyNavBar from "./component/Navbar.jsx";
import RepositoryCard from "./component/RepositoryCard.jsx";
import OrganizationCard from "./component/OrganizationCard.jsx";
import Spinner from 'react-bootstrap/Spinner'
import "./App.css"
import { getOrganizationsByUserName, getRepositoriesByUserName } from "./ApiMangement.js";

function App() {
    const [repositories, setRepositories] = useState([]);
    const [organizations, setOrganizations] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [isFetchingOrganizations, setIsFetchingOrganizations] = useState(false);
    const [isFetchingRepositories, setIsFetchingRepositories] = useState(false);


    const handleChange = (event) => {
        setSearchValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setIsFetchingOrganizations(true);
        getOrganizationsByUserName(searchValue).then((organizations) => {
                setIsFetchingOrganizations(false);
                setOrganizations(organizations);
        });

        setIsFetchingRepositories(true);
        getRepositoriesByUserName(searchValue).then((repositories) => {
            setIsFetchingRepositories(false);
            setRepositories(repositories);
        });
    };

    const printOrganizations = () => {
        return organizations.map((organization, index) => {
            return <OrganizationCard key={index} organization={organization} />
        })
    }

    const printRepositories = () => {
        return repositories.map((e, index) => {
            return <RepositoryCard key={index} data={e} />
        })
    }

    return (
        <div className="App container">
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
                                onChange={handleChange}
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

                    {isFetchingOrganizations ?
                        <Spinner animation="border" /> :
                        <div className="repositories">
                            {printOrganizations()}
                        </div>
                    }

                </div>
                <div className="col">
                    <div className="title">
                        <h2>Repositories</h2>
                    </div>

                    {isFetchingRepositories ? <Spinner animation="border" /> :
                        <div className="repositories">
                            {printRepositories()}
                        </div>
                    }

                </div>
            </div>
        </div >

    );
}

export default App;
