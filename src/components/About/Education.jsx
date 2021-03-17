import React, { useState } from 'react';
import { Spinner, Button, Collapse } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styles from './TimeLine.module.css';

const Education = ({ education }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="education-collapse"
        aria-expanded={open}
        className={open && styles.open}
      >
        <span>Education</span>
        <FontAwesomeIcon icon={['fas', open ? 'chevron-up' : 'chevron-down']} className="ml-2" />
      </Button>
      <Collapse in={open} className="text-left">
        <div id="education-collapse">
          {/* error ? <Alert variant="danger">{`Error: ${error}`}</Alert> : null */}
          {education !== undefined && education.length > 0 ? (
            <VerticalTimeline>
              {education.map((educationItem) => (
                <VerticalTimelineElement
                  key={`${educationItem.degree.replace(/\s/g, '').toLowerCase()}`}
                  textClassName={styles.text}
                  date={`${educationItem.date}`}
                  dateClassName={styles.date}
                  icon={(
                    <FontAwesomeIcon
                      icon={['fas', 'graduation-cap']}
                      transform="right-2"
                    />
            )}
                  iconClassName={styles.icon}
                >
                  <h4 className="vertical-timeline-element-title">
                    {educationItem.degree}
                  </h4>
                  <h6 className="vertical-timeline-element-subtitle">
                    {educationItem.urlToInstitute
                      ? (
                        <a
                          className={`text-decoration-none ${styles.link}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          href={educationItem.urlToInstitute}
                        >
                          {educationItem.institute}
                        </a>
                      )
                      : <span className={styles.link}>{educationItem.institute}</span>}
                  </h6>
                  {educationItem.urlToDiploma ? (
                    <p className="m-0">
                      <a
                        className={`text-decoration-none ${styles.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={educationItem.urlToDiploma}
                      >
                        Diploma
                        <FontAwesomeIcon icon={['fas', 'file-pdf']} className="ml-2" />
                      </a>
                    </p>
                  ) : null}
                </VerticalTimelineElement>
              ))}
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

export default Education;
