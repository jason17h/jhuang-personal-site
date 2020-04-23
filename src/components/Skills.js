import React from 'react';
// Bootstrap
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { FaPython, FaJs } from 'react-icons/fa'

const Skills = (props) => {
    const languages = ["C/C++", "Python", "JavaScript", "HTML", "CSS", "JSX", "Scheme", "SQL"];
    const tools = ["pandas", "NumPy", "Django", "React", "Redux", "Git", "Dash", "Unix"];
    return (
        <Container>
            <Row className="skill-row">
                <Col className="skill-type" xs={4}><h3>Languages</h3></Col>
                <Col className="skills my-auto" xs={8}>
                    {languages.map((lang) => <span className="skill">{lang}</span>)}
                </Col>
            </Row>
            <Row className="skill-row">
                <Col className="skill-type" xs={4}><h3>Tools & Frameworks</h3></Col>
                <Col className="skills my-auto" xs={8}>
                    {tools.map((tool) => <span className="skill">{tool}</span>)}
                </Col>
            </Row>
        </Container>
    )
}

export default Skills;
