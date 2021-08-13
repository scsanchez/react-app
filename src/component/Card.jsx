import React, { useState, useEffect, useContext } from "react";
import { Button, Card, Form, Col, Row } from "react-bootstrap";

const MyCard = (props) => {
    const data = props.data
    console.log(data)
    return (
        <div className="card col-6">

            <Col>
                <Row className="justify-content-center mt-5 mb-5">
                    <Card style={{ width: "18rem" }}>
                        <Card.Body>
                            <Card.Title>{data.name}</Card.Title>
                            <Card.Title>{data.html_url}</Card.Title>
                            <Card.Title>{data.bio}</Card.Title>
                            <Button href={data.html_url} variant="primary">Go</Button>
                        </Card.Body>
                    </Card>
                </Row>
            </Col>
        </div>
    );
};

export default MyCard;

