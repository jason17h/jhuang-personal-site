import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Hobby = (props) => {
    return (
        <Col>
            <Card className="hobby-card">
                <Card.Body className="hobby-card-body">
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        {props.description.map((line) => <p>{line}</p>)}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Hobby;
