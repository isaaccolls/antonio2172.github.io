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
        {experience.map(workItem => {
          const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
          let { startDate, endDate } = workItem;
          startDate = new Date(startDate);
          startDate = `${monthNames[startDate.getMonth()]} ${startDate.getFullYear()}`;
          endDate = endDate && new Date(endDate);
          endDate = endDate ? `${monthNames[endDate.getMonth()]} ${endDate.getFullYear()}` : 'Present';
          return (
            <VerticalTimelineElement
              key={`${workItem.company.replace(/\s/g, '').toLowerCase()}-${workItem.startDate}`}
              textClassName="timeline-elem-text"
              date={`${startDate} - ${endDate}`}
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
              </h4>
              {workItem.department &&
                <h6 className="text-muted font-weight-lighter">
                  {workItem.department}
                </h6>
              }
              <h5 className="vertical-timeline-element-subtitle">
                {workItem.company}
              </h5>
              <Accordion>
                <Accordion.Toggle as={Button} variant="light" eventKey="0">
                  ...
              </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <>
                    {workItem.description.split('\n').map((p, i) => <p className="mt-2 p-0" key={i}>{p}</p>)}
                  </>
                </Accordion.Collapse>
              </Accordion>
            </VerticalTimelineElement>
          )
        })}
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
