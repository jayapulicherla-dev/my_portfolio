import React from 'react';
import resumeData from '../resumeData.json';

const Skills = () => {
  const { skills } = resumeData;
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, details]) => (
            <div key={category} className="skill-category">
              <h3>{category.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</h3>
              <p>{details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
