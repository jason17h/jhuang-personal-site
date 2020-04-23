import React from 'react';
import Container from 'react-bootstrap/Container';
import { GoTriangleRight } from 'react-icons/go';

const SectionHeader = (props) => (
    <Container className="section-header">
        <h1><span className="section-header-text">{props.text}</span></h1>
    </Container>
)

export default SectionHeader;
