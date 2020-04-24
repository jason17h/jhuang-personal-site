import React from 'react';
import profilePic from '../../images/profile-pic.jpeg'
// Components
import Contact from './Contact'
// Bootstrap
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
// Icons
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Intro = () => (
    <div className="intro">
        <h1>
            <span id="first-name">Jason </span>
            <span id="last-name">Huang</span>
        </h1>
        <Container>
            <Row>
                <Col>
                    <img id="profile-pic" align="right" src={profilePic} />
                </Col>
                <Col className="introduction">
                    <div className="text">
                        <p>
                            Hey there! I'm Jason, a second year Computer Science student 
                            at the University of Waterloo.
                        </p>
                        <p>
                            Between classes, hackathons and internships, I've grown a love for software
                            development; from working with close friends to build a web app to enhance 
                            hackathons to building essential internal tools at major financial companies, I'm
                            looking to apply the skills I've learned to help others, and of course,
                            get more exposure and learn new technologies along the way!
                        </p>
                        <p>
                            I created this site to help you get to know a little bit more about me, both  
                            personally and professionally. Feel free to reach out to me via the contact links 
                            below!
                        </p>
                    </div>
                    <div className="sm-icons">
                        <a 
                            className="sm-link" 
                            href="https://github.com/jason17h" 
                            target="_blank"
                        >
                            <FaGithub className="sm-icon"/>
                        </a>
                        <a 
                            className="sm-link" 
                            href="https://www.linkedin.com/in/jason17huang/" 
                            target="_blank"
                        >
                            <FaLinkedin className="sm-icon"/>
                        </a>
                        <a 
                            className="sm-link" 
                            href="mailto:jason17huang@gmail.com" 
                        >
                            <FaEnvelope className="sm-icon"/>
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
)

export default Intro;