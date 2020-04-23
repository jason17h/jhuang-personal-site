import React from 'react';
import Project from './Project';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Projects = (props) => {
    return (
        <Container>
            <Row>
                <Project />
                <Project />
                <Project />
                <Project />
            </Row>
        </Container>
    )
}

export default Projects;
