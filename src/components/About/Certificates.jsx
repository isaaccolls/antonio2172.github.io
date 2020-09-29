import React from 'react';
import { Spinner, Accordion, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './CustomTimeLine.css';

const Certificates = ({ certificates }) => (
  <>
    <h3>Certificates</h3>
    {/*{error ? <Alert variant="danger">{`Error: ${error}`}</Alert> : null}*/}
    {certificates !== undefined && certificates.length > 0 ? (
      <VerticalTimeline>
        {certificates.map(coursesItem => (
          <VerticalTimelineElement
            key={`${coursesItem.title.replace(/\s/g, '').toLowerCase()}`}
            textClassName="timeline-elem-text"
            date={`${coursesItem.date}`}
            dateClassName="timeline-elem-date"
            icon={<FontAwesomeIcon icon={['fas', 'chalkboard-teacher']} />}
            iconClassName="timeline-elem-icon"
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
          iconClassName="timeline-elem-icon-start"
        />
      </VerticalTimeline>
    ) : (
      <Spinner animation="grow" variant="dark" />
    )}
  </>
);

export default Certificates;
