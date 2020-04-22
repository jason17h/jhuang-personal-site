import React from 'react';
// Bootstrap
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import { TimelineItem }  from 'vertical-timeline-component-for-react';


const Internship = (props) => {
    return (
        <TimelineItem 
            key={props.term} 
            style={{color: "#014421"}}
            dateText={props.date}
            dateInnerStyle={{color: '#014421', fontFamily: 'Montserrat', backgroundColor: "white"}}
            className="timeline-item"
        >
            <h5 className="internship-company">{props.company}</h5>
            <h6><span className="internship-title">{props.title}</span> • {props.location}</h6>
            <br />
            {props.description.map((point) => (<p>{point}</p>))}
            {/* 
                <ListGroup variant="flush">
                    {props.description.map((point) => (
                        <ListGroupItem>{point}</ListGroupItem>
                    ))}
                </ListGroup>
            */}
                    </TimelineItem>
    )
}

// <Card>
//     {<Card.Img variant="top" src={require("../../images/cpp_logo.png")} />}
//     <Card.Body>
//         <Card.Title>{props.position}</Card.Title>
//         <Card.Subtitle>{props.company}</Card.Subtitle>
//         <Card.Text>
//             {
//                 props.description.map((point) => {point})
//             }
//         <ListGroup className="list-group-flush">
//             <ListGroupItem>Cras justo odio</ListGroupItem>
//             <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
//             <ListGroupItem>Vestibulum at eros</ListGroupItem>
//         </ListGroup>
//         </Card.Text>
//     </Card.Body>
//     <Card.Body>
//         <Card.Link href="#">Card Link</Card.Link>
//         <Card.Link href="#">Another Link</Card.Link>
//     </Card.Body>
// </Card>

export default Internship;