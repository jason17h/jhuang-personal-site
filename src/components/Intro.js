import React from 'react';
import profilePic from '../../images/profile-pic.jpeg'
// Components
import Contact from './Contact'
// Bootstrap
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

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
                            Between classes to hackathons to internships, I've grown a love for software
                            development; from working with close friends to build a web app to enhance hackathons
                            to building essential internal tools at major financial companies, I'm
                            looking to apply the skills I've learned to help others, and of course,
                            get more exposure and learn new technologies along the way!
                        </p>
                        <p>
                            Keep scrolling to learn more about me and my journey thus far.
                        </p>
                    </div>
                    <div>
                        <Contact />
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
)

export default Intro;