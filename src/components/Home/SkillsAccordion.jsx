import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Stars = ({ value }) => {
  let stars = [];
  for (let k = 1; k <= value; k++) {
    stars.push(<FontAwesomeIcon key={k} icon={['fas', 'star']} />);
  }
  if (value % 1 !== 0) {
    stars.push(
      <FontAwesomeIcon
        key={Math.round(value)}
        icon={['fas', 'star-half-alt']}
      />,
    );
  }
  return stars;
};

const SkillsAccordion = ({ skills }) => (
  <Accordion>
    {skills.map(skill => (
      <Card key={skill.order}>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey={skill.order}>
            {skill.focus}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={skill.order}>
          <Card.Body>
            {skill.skills.map(innerSkill => (
              <Card.Text key={innerSkill.order}>
                {innerSkill.name} <Stars value={innerSkill.value} />
              </Card.Text>
            ))}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    ))}
  </Accordion>
);

export default SkillsAccordion;
