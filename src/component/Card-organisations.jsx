import React from "react";
import { Card, Button } from "react-bootstrap";

const MyCardOrganisations = (props) => {
    const data = props.data
    const login =props.data.login
    return (
        <Card className= "card inline-block">
            <Card.Body>
                <Card.Title>{data.login}</Card.Title>
                <Card.Text>{data.description}</Card.Text>
                <Button href={"https://github.com/orgs/"+ login} target="_blank" variant="primary" text-center>Organisation Page</Button>
            </Card.Body>
        </Card>
    );
};

export default MyCardOrganisations;

