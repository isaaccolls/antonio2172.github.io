import React from 'react';
import { Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './CustomTimeLine.css';

const Education = ({ education }) => (
  <>
    <h3>Education</h3>
    {/*error ? <Alert variant="danger">{`Error: ${error}`}</Alert> : null*/}
    {education !== undefined && education.length > 0 ? (
      <VerticalTimeline>
        {education.map(educationItem => (
          <VerticalTimelineElement
            key={`${educationItem.degree.replace(/\s/g, '').toLowerCase()}`}
            textClassName="timeline-elem-text"
            date={`${educationItem.date}`}
            dateClassName="timeline-elem-date"
            icon={
              <FontAwesomeIcon
                icon={['fas', 'graduation-cap']}
                transform="right-2"
              />
            }
            iconClassName="timeline-elem-icon"
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
          icon={<FontAwesomeIcon icon={['fas', 'star']} transform="right-3" />}
          iconClassName="timeline-elem-icon-start"
        />
      </VerticalTimeline>
    ) : (
      <Spinner animation="grow" variant="dark" />
    )}
  </>
);

export default Education;
