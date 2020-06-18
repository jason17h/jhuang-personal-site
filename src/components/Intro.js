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
import { AiFillProfile } from "react-icons/ai";

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
                            Hey there! My name is Jason and I'm a second year Computer Science student 
                            at the University of Waterloo.
                        </p>
                        <p>
                            Between classes, hackathons and internships, I've built a portfolio of experiences
                            that I am eager to share with the world. I'm currently seeking Summer 2021
                            internship positions in software development, so if you have any opportunities
                            you'd like to discuss, feel free to reach out via email or LinkedIn!
                        </p>
                        <p>
                            I created this site to help you get to know a little bit more about me, both  
                            personally and professionally. Learn more about what I love about
                            computer science and software development, my projects, my work experiences,
                            and my hobbies below!
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
                        <a 
                            className="sm-link" 
                            href={require('../static/Jason_Huang_Resume_2020.pdf')}
                            download="Jason_Huang_Resume_2020.pdf"
                        >
                            <AiFillProfile className="sm-icon" />
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
)

export default Intro;


// <p>
//     Hey there! My name is Jason and I'm a second year Computer Science student 
//     at the University of Waterloo.
// </p>
// <p>
//     Simply put, software development is an important part of my life because it gives 
//     me a globally accessible platform to transform innovation into impact. I'm fascinated by the way
//     I can better people's lives, whether we're five minutes apart or continents away, no matter how
//     vastly different our day-to-day experiences are. To me, the most fundamental root of software development
//     is improving people's lives which has inspired me to pursue an option in Human and Computer Interaction 
//     along with my degree.
// </p>
// <p>
//     Between classes, hackathons and internships, I've built a portfolio of experiences
//     that I am eager to share with the world. 
//     I created this site to help you get to know a little bit more about me, both  
//     personally and professionally. Feel free to visit my GitHub, LinkedIn, or reach out to me via email!
// </p>