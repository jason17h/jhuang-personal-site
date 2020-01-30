import React from 'react';
// import githubBlack from '../../images/github-32-black.png'
// import githubGree from '../../images/github-green.png'
// import linkedinBlack from '../../images/linkedin-32-black.png'
// import linkedinGreen from '../../images/linkedin-green.png'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
// Components

// Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Contact = () => (
    <div className="contact">
        <Row>
            <Col>
                <a 
                    className="sm-link" 
                    href="https://github.com/jason17h" 
                    target="_blank"
                >
                    <FaGithub className="sm-icon"/> jason17h
                </a>
            </Col>
            <Col>
                <a 
                    className="sm-link" 
                    href="https://www.linkedin.com/in/jason17huang/" 
                    target="_blank"
                >
                    <FaLinkedin className="sm-icon"/> jason17huang
                </a>
            </Col>
            <Col>
                <a 
                    className="sm-link" 
                    href="mailto:jason17huang@gmail.com" 
                >
                    <FaEnvelope className="sm-icon"/> jason17huang@gmail.com
                </a>
            </Col>
        </Row>
    </div>
)

export default Contact
