import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SkillsAccordion.css';

const starAnimation = (index) => (index > 0 ? `custom-star-${index}` : null);

const Stars = ({ value }) => {
  const stars = [];
  for (let k = 1; k <= 3; k += 1) {
    if (k <= value) {
      stars.push(
        <FontAwesomeIcon
          key={k}
          icon={['fas', 'star']}
          className={`indian-red custom-star ${starAnimation(k)}`}
        />,
      );
    } else if (k - value === 0.5) {
      stars.push(
        <FontAwesomeIcon
          key={value}
          icon={['fas', 'star-half-alt']}
          className={`indian-red custom-star ${starAnimation(k)}`}
        />,
      );
    } else {
      stars.push(
        <FontAwesomeIcon
          key={k}
          icon={['far', 'star']}
          className={`indian-red custom-star ${starAnimation(k)}`}
        />,
      );
    }
  }
  return stars;
};

const SkillsAccordion = ({ skills }) => (
  <Accordion className="w-75 mx-auto">
    {skills.map((skill) => (
      <Card key={skill.order} className="custom-card">
        <Card.Header className="custom-card-header py-0">
          <Accordion.Toggle
            as={Card.Header}
            eventKey={skill.order}
            className="custom-accordion-toggle py-0 text-left"
          >
            <span className="indian-red"> - </span>
            {skill.focus}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={skill.order}>
          <Card.Body className="custom-card-body py-1">
            {skill.skills.map((innerSkill) => (
              <Card.Text key={innerSkill.order} className="my-0">
                {innerSkill.name}
                {' '}
                -
                {' '}
                <Stars value={innerSkill.value} />
              </Card.Text>
            ))}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    ))}
  </Accordion>
);

export default SkillsAccordion;
