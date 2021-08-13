import React, { useState, useEffect, useContext } from "react";
import { Button, Card, Form, Col, Row } from "react-bootstrap";

const MyCardRepositories = (props) => {
    const data = props.data
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Text>{data.description}</Card.Text>
                <Button href={data.html_url} target="_blank" variant="primary" text-center>Go</Button>
            </Card.Body>
        </Card>
    );
};

export default MyCardRepositories;

