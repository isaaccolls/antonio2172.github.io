import React from 'react';
import { Spinner, Alert, Accordion, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Courses = ({ data }) => {
  let { courses, isLoading, error } = data;
  courses = courses.sort((a, b) => {
    if (a.date > b.date) {
      return 1;
    } else {
      return -1;
    }
  });

  return (
    <div>
      <h3>Courses</h3>
      <p>
        We don't really know where this goes - and I'm not sure we really care.
        You have to make almighty decisions when you're the creator.
      </p>
      {error ? <Alert variant="danger">{`Error: ${error}`}</Alert> : null}
      {isLoading ? (
        <Spinner animation="grow" variant="dark" />
      ) : (
        <VerticalTimeline>
          {courses.map(coursesItem => (
            <VerticalTimelineElement
              key={`${coursesItem.title.replace(/\s/g, '').toLowerCase()}`}
              className="vertical-timeline-element--work"
              date={`${coursesItem.date}`}
              iconStyle={{
                background: 'rgb(33, 150, 243)',
                color: '#fff',
              }}
              icon={<FontAwesomeIcon icon={['fas', 'chalkboard-teacher']} />}
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
                    <div>
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
                    </div>
                  </Accordion.Collapse>
                </Accordion>
              ) : null}
            </VerticalTimelineElement>
          ))}
          <VerticalTimelineElement
            iconStyle={{
              background: 'rgb(16, 204, 82)',
              color: '#fff',
            }}
            icon={<FontAwesomeIcon icon={['fas', 'star']} />}
          />
        </VerticalTimeline>
      )}
    </div>
  );
};

export default Courses;
