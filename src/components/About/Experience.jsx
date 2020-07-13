import React from 'react';
import { Spinner, Accordion, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = ({ experience }) => (
  <>
    <h3>Work Experience</h3>
    <p>
      We don't really know where this goes - and I'm not sure we really care.
      You have to make almighty decisions when you're the creator.
    </p>
    {/*error ? <Alert variant="danger">{`Error: ${error}`}</Alert> : null*/}
    {experience !== undefined && experience.length > 0 ? (
      <VerticalTimeline>
        {experience.map(workItem => (
          <VerticalTimelineElement
            key={`${workItem.company.replace(/\s/g, '').toLowerCase()}`}
            className="vertical-timeline-element--work"
            date={`${workItem.startDate} - ${workItem.endDate}`}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={['fas', 'briefcase']} />}
          >
            <h4 className="vertical-timeline-element-title">
              {workItem.title}{' '}
              {workItem.department ? ` - ${workItem.department}` : null}
            </h4>
            <h6 className="vertical-timeline-element-subtitle">
              {workItem.company}
            </h6>
            <Accordion>
              <Accordion.Toggle as={Button} variant="light" eventKey="0">
                ...
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <p>{workItem.description}</p>
              </Accordion.Collapse>
            </Accordion>
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

export default Experience;
