import React from 'react';
import { Timeline }  from 'vertical-timeline-component-for-react';

const Education = (props) => (
    <Timeline>
        <TimelineItem
            key={props.term} 
            style={{color: "#014421"}}
            dateText="Sept 2018 - present"
            dateInnerStyle={{color: '#014421', fontFamily: 'Montserrat', backgroundColor: "white"}}
            className="timeline-item"
        >
            
        </TimelineItem>
    </Timeline>
)

export default Education;
