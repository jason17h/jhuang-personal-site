import React from 'react';
import Project from './Project';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Projects = (props) => {
    const projectConfig = require("json-loader!yaml-loader!../static/projects.yml");
    return (
        <Container>
            <Row>
                {projectConfig.map((project) => <Project {...project} />)}
            </Row>
        </Container>
    )
}

export default Projects;
