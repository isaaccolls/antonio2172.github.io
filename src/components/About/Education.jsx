import React from 'react';
import { Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Education = ({ education }) => (
  <>
    <h3>Education</h3>
    <p>
      That's a crooked tree. We'll send him to Washington. Almost everything is
      going to happen for you automatically - you don't have to spend any time
      working or worrying. In life you need colors.
    </p>
    {/*error ? <Alert variant="danger">{`Error: ${error}`}</Alert> : null*/}
    {education !== undefined && education.length > 0 ? (
      <VerticalTimeline>
        {education.map(educationItem => (
          <VerticalTimelineElement
            key={`${educationItem.degree.replace(/\s/g, '').toLowerCase()}`}
            className="vertical-timeline-element--work"
            date={`${educationItem.date}`}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={['fas', 'graduation-cap']} />}
          >
            <h4 className="vertical-timeline-element-title">
              {educationItem.degree}
            </h4>
            <h6 className="vertical-timeline-element-subtitle">
              {educationItem.institute}
            </h6>
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<FontAwesomeIcon icon={['fas', 'star']} />}
        />
      </VerticalTimeline>
    ) : (
      <Spinner animation="grow" variant="dark" />
    )}
  </>
);

export default Education;
