import React from "react";
import { Card, Button } from "react-bootstrap";

const MyCardRepositories = (props) => {
    const data = props.data
    return (
        <Card className= "card inline-block">
            <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Text>{data.description}</Card.Text>
                <Button href={data.html_url} target="_blank" variant="primary" text-center>repositorie Page</Button>
            </Card.Body>
        </Card>
    );
};

export default MyCardRepositories;

