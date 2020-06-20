import React from 'react';

const Skill = ({ data }) => (
  <div>
    <p>{`${data.skill} - ${data.percent}%`}</p>
  </div>
);

export default Skill;
