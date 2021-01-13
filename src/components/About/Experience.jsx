import React from 'react';
import { Spinner, Accordion, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './CustomTimeLine.css';

const Experience = ({ experience }) => (
  <>
    <h3>Work Experience</h3>
    {/*error ? <Alert variant="danger">{`Error: ${error}`}</Alert> : null*/}
    {experience !== undefined && experience.length > 0 ? (
      <VerticalTimeline>
        {experience.map(workItem => (
          <VerticalTimelineElement
            key={`${workItem.company.replace(/\s/g, '').toLowerCase()}`}
            textClassName="timeline-elem-text"
            date={`${workItem.startDate} - ${workItem.endDate}`}
            dateClassName="timeline-elem-date"
            icon={
              <FontAwesomeIcon
                icon={['fas', 'briefcase']}
                transform="right-4"
              />
            }
            iconClassName="timeline-elem-icon"
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
                <React.Fragment>
                  {workItem.description.split('\n').map(p => <p className="mt-2 p-0">{p}</p>)}
                </React.Fragment>
              </Accordion.Collapse>
            </Accordion>
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

export default Experience;
