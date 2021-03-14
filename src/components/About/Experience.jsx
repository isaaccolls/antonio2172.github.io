import React, { useState } from 'react';
import {
  Spinner, Accordion, Button, Collapse,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styles from './TimeLine.module.css';

const Experience = ({ experience }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="experience-collapse"
        aria-expanded={open}
        className={open && styles.open}
      >
        <span>Work</span>
        <FontAwesomeIcon icon={['fas', open ? 'chevron-up' : 'chevron-down']} className="ml-2" />
      </Button>
      <Collapse in={open}>
        <div id="experience-collapse">
          {/* error ? <Alert variant="danger">{`Error: ${error}`}</Alert> : null */}
          {experience !== undefined && experience.length > 0 ? (
            <VerticalTimeline>
              {experience.map((workItem) => {
                const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                let { startDate, endDate } = workItem;
                startDate = new Date(startDate);
                startDate = `${monthNames[startDate.getMonth()]} ${startDate.getFullYear()}`;
                endDate = endDate && new Date(endDate);
                endDate = endDate ? `${monthNames[endDate.getMonth()]} ${endDate.getFullYear()}` : 'Present';
                return (
                  <VerticalTimelineElement
                    key={`${workItem.company.replace(/\s/g, '').toLowerCase()}-${workItem.startDate}`}
                    textClassName={styles.text}
                    date={`${startDate} - ${endDate}`}
                    dateClassName={styles.date}
                    icon={(
                      <FontAwesomeIcon
                        icon={['fas', 'briefcase']}
                        transform="right-4"
                      />
                )}
                    iconClassName={styles.icon}
                  >
                    <h4 className="vertical-timeline-element-title">
                      {workItem.title}
                      {' '}
                    </h4>
                    {workItem.department
                  && (
                    <h6 className="text-muted font-weight-lighter">
                      {workItem.department}
                    </h6>
                  )}
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
                );
              })}
              <VerticalTimelineElement
                icon={<FontAwesomeIcon icon={['fas', 'star']} transform="right-3" />}
                iconClassName={styles.start}
              />
            </VerticalTimeline>
          ) : (
            <Spinner animation="grow" variant="dark" />
          )}
        </div>

      </Collapse>

    </>

  );
};

export default Experience;
