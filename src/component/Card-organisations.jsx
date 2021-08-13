import React, { useState, useEffect, useContext } from "react";
import { Button, Card, Row } from "react-bootstrap";

const MyCardOrganisations = (props) => {
    const data = props.data
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Body>
                <Card.Title>{data.login}</Card.Title>
                <Card.Text>{data.description}</Card.Text>
                <Button href={data.url} target="_blank" variant="primary" text-center>Go</Button>
            </Card.Body>
        </Card>
    );
};

export default MyCardOrganisations;
