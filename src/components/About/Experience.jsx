import React, { useState } from 'react';
import { Spinner, Accordion, Button, Collapse } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import PropTypes from 'prop-types';
import styles from './About.module.css';

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
        <FontAwesomeIcon
          icon={['fas', open ? 'chevron-up' : 'chevron-down']}
          className="ml-2"
        />
      </Button>
      <Collapse in={open} className="text-left">
        <div id="experience-collapse">
          {/* error ? <Alert variant="danger">{`Error: ${error}`}</Alert> : null */}
          {experience !== undefined && experience.length > 0 ? (
            <VerticalTimeline>
              {experience.map((workItem) => {
                const monthNames = [
                  'Jan',
                  'Feb',
                  'Mar',
                  'Apr',
                  'May',
                  'Jun',
                  'Jul',
                  'Aug',
                  'Sep',
                  'Oct',
                  'Nov',
                  'Dec',
                ];
                let { startDate, endDate } = workItem;
                const [year, month, day] = startDate.split('-');
                startDate = new Date(+year, +month - 1, +day);
                startDate = `${
                  monthNames[startDate.getMonth()]
                } ${startDate.getFullYear()}`;
                const [endYear, endMonth, endDay] = endDate.split('-');
                endDate = endDate && new Date(+endYear, +endMonth - 1, +endDay);
                endDate = endDate
                  ? `${monthNames[endDate.getMonth()]} ${endDate.getFullYear()}`
                  : 'Present';
                return (
                  <VerticalTimelineElement
                    key={`${workItem.company
                      .replace(/\s/g, '')
                      .toLowerCase()}-${workItem.startDate}`}
                    textClassName={styles.text}
                    date={`${startDate} - ${endDate}`}
                    dateClassName={styles.date}
                    icon={
                      <FontAwesomeIcon
                        icon={['fas', 'briefcase']}
                        transform="right-4"
                      />
                    }
                    iconClassName={styles.icon}
                  >
                    <h4 className="vertical-timeline-element-title">
                      {workItem.title}{' '}
                    </h4>
                    {workItem.department && (
                      <h6 className="text-muted font-weight-lighter">
                        {workItem.department}
                      </h6>
                    )}
                    <h5 className="vertical-timeline-element-subtitle">
                      {workItem.url ? (
                        <a
                          href={workItem.url}
                          className={styles.linkDecoNone}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {workItem.company}
                        </a>
                      ) : (
                        workItem.company
                      )}
                    </h5>
                    <Accordion>
                      <Accordion.Toggle
                        as={Button}
                        variant="light"
                        eventKey="0"
                        className={styles.toggle}
                      >
                        ...
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="0">
                        <>
                          <>
                            {workItem.description.split('\n').map((p, i) => (
                              // eslint-disable-next-line
                              <p className="mt-2 p-0" key={i}>
                                {p}
                              </p>
                            ))}
                          </>
                          <p className={styles.stack}>
                            <small>
                              {workItem.techStack.map(
                                (t, i, { length }) =>
                                  `#${t}${i === length - 1 ? '' : ' '}`,
                              )}
                            </small>
                          </p>
                        </>
                      </Accordion.Collapse>
                    </Accordion>
                  </VerticalTimelineElement>
                );
              })}
              <VerticalTimelineElement
                icon={
                  <FontAwesomeIcon icon={['fas', 'star']} transform="right-3" />
                }
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

Experience.propTypes = {
  // eslint-disable-next-line
  experience: PropTypes.object.isRequired,
};

export default Experience;
