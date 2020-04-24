import React from 'react';
import { connect } from 'react-redux';
// Components
import Intro from './Intro';
import Navigation from './Navigation';
import Skills from './Skills';
import Employment from './Employment';
import SectionHeader from './SectionHeader';
import Projects from './Projects';
import Interests from './Interests';
// Bootstrap Components
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Collapse from 'react-bootstrap/Collapse'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Modal from 'react-bootstrap/Modal';

// export const current = 'Current Portfolio';
// export const proposed = 'Proposed Portfolio';

export class Main extends React.Component {

    state = {

    }

    render() {
        return (
            <div>
                <div id="intro-div">
                    <Container>
                        <Row>
                            <Intro />
                        </Row>
                        <br />
                        <Navigation />
                    </Container>
                </div>
                
                <div id="about-me" >
                    <SectionHeader text="About Me" />
                    <Interests />
                </div>

                <div id="experience">
                    <SectionHeader text="Experience" />
                    <Skills />
                    <Employment file="experience.yml" />
                </div>

                <div id="projects">
                    <SectionHeader text="Projects" />
                    <Projects />
                </div>

                <div id="education">
                    <SectionHeader text="Education" />
                    <Employment file="education.yml" />
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

// export default connect(mapStateToProps)(Main);
export default Main;
