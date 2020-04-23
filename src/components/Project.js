import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { FaGithub } from 'react-icons/fa';

const Project = (props) => {
    return (
        <Col sm={6} className="project-col">
            <Card className="project-card">
                <Card.Body>
                    <Card.Title>
                            <a target="_blank" href={props.github}>{props.name}</a>
                            {props.hackathon && 
                                <span> | <br /> <a target="_blank" href={props.devpost}>{props.hackathon}</a></span>
                            }
                    </Card.Title>
                    <p class="small"><em>{props.subtitle}</em></p>
                    <p class="small"><em>Stack: {props.stack.join(', ')}</em></p>
                    <Card.Text>
                        {props.description.map((point) => <p>{point}</p>)}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Project;
