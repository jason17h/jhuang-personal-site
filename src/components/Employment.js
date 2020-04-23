import React from 'react';
// import experience from '../static/experience.yml';
// Bootstrap
import Container from 'react-bootstrap/Container'
// Components
import { Timeline }  from 'vertical-timeline-component-for-react';
import Internship from './Internship';

const Employment = (props) => {
    const employmentConfig = require("json-loader!yaml-loader!../static/" + props.file);
    return (
        <Container>
            <Timeline lineColor={"#b2b7ba"} className="employment-timeline">
                {
                    employmentConfig.reverse().map((internship) => (
                        <Internship {...internship} />
                    ))
                }
            </Timeline>
        </Container>
    )
}

export default Employment;