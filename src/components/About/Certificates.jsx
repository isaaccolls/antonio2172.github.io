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

const Certificates = ({ certificates }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="certificates-collapse"
        aria-expanded={open}
        className={open && styles.open}
      >
        <span>Certificates</span>
        <FontAwesomeIcon icon={['fas', open ? 'chevron-up' : 'chevron-down']} className="ml-2" />
      </Button>
      <Collapse in={open}>
        <div id="certificates-collapse">
          {/* {error ? <Alert variant="danger">{`Error: ${error}`}</Alert> : null} */}
          {certificates !== undefined && certificates.length > 0 ? (
            <VerticalTimeline>
              {certificates.map((coursesItem) => (
                <VerticalTimelineElement
                  key={`${coursesItem.title.replace(/\s/g, '').toLowerCase()}`}
                  textClassName={styles.text}
                  date={`${coursesItem.date}`}
                  dateClassName={styles.date}
                  icon={<FontAwesomeIcon icon={['fas', 'chalkboard-teacher']} />}
                  iconClassName={styles.icon}
                >
                  <h4 className="vertical-timeline-element-title">
                    {coursesItem.title}
                  </h4>
                  <h6 className="vertical-timeline-element-subtitle">
                    {coursesItem.institute}
                  </h6>
                  {coursesItem.urlToCertified || coursesItem.urlToRepo ? (
                    <Accordion>
                      <Accordion.Toggle as={Button} variant="light" eventKey="0">
                        ...
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="0">
                        <>
                          {coursesItem.urlToCertified ? (
                            <p>
                              <a
                                className="text-decoration-none"
                                target="_blank"
                                rel="noopener noreferrer"
                                href={coursesItem.urlToCertified}
                              >
                                Download Certified
                              </a>
                            </p>
                          ) : null}
                          {coursesItem.urlToRepo ? (
                            <p>
                              <a
                                className="text-decoration-none"
                                target="_blank"
                                rel="noopener noreferrer"
                                href={coursesItem.urlToRepo}
                              >
                                Go to repository!
                              </a>
                            </p>
                          ) : null}
                        </>
                      </Accordion.Collapse>
                    </Accordion>
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

export default Certificates;
