import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SkillsAccordion.css';

const Stars = ({ value }) => {
  let stars = [];
  for (let k = 1; k <= 3; k++) {
    if (k <= value) {
      stars.push(
        <FontAwesomeIcon
          key={k}
          icon={['fas', 'star']}
          className="custom-star"
        />,
      );
    } else {
      if (k - value === 0.5) {
        stars.push(
          <FontAwesomeIcon
            key={value}
            icon={['fas', 'star-half-alt']}
            className="custom-star"
          />,
        );
      } else {
        stars.push(
          <FontAwesomeIcon
            key={k}
            icon={['far', 'star']}
            className="custom-star"
          />,
        );
      }
    }
  }
  return stars;
};

const SkillsAccordion = ({ skills }) => (
  <Accordion className="w-75 mx-auto">
    {skills.map(skill => (
      <Card key={skill.order} className="custom-card">
        <Card.Header className="custom-card-header py-0">
          <Accordion.Toggle
            as={Card.Header}
            eventKey={skill.order}
            className="custom-accordion-toggle py-0 text-left"
          >
            <span className="custom-star"> - </span>
            {skill.focus}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={skill.order}>
          <Card.Body className="custom-card-body py-1">
            {skill.skills.map(innerSkill => (
              <Card.Text key={innerSkill.order} className="my-0">
                {innerSkill.name} - <Stars value={innerSkill.value} />
              </Card.Text>
            ))}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    ))}
  </Accordion>
);

export default SkillsAccordion;
