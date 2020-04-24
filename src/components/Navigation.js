import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Scroll from 'react-scroll';

const ScrollLink = Scroll.ScrollLink;

const Navigation = (props) => {
    return (
        <Nav fill className="navigation">
          <Nav.Item>
            <Nav.Link href="#about-me"><h3>About Me</h3></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#experience"><h3>Experience</h3></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#projects"><h3>Projects</h3></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#education"><h3>Education</h3></Nav.Link>
          </Nav.Item>
        </Nav>
    )
}

export default Navigation;
