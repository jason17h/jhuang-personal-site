import React from 'react';
import { connect } from 'react-redux';
// Components
import Intro from './Intro';
import Skills from './Skills';
import Employment from './Employment';
import SectionHeader from './SectionHeader';
import Projects from './Projects';
// Bootstrap Components
import Container from 'react-bootstrap/Container'
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
                <Container>
                    <Row>
                        <Intro />
                    </Row>
                    <br />
                </Container>
                <SectionHeader text="Experience" />
                <Skills />
                <Employment file="experience.yml" />
                <SectionHeader text="Projects" />
                <Projects />
                <SectionHeader text="Education" />
                <Employment file="education.yml" />
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
