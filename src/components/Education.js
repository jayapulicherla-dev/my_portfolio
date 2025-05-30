import React from 'react';
import resumeData from '../resumeData.json';

const Education = () => {
  const { education } = resumeData;
  return (
    <section id="education" className="section">
      <div className="container">
        <h2>Education</h2>
        {education.map(edu => (
          <div key={edu.id} className="item">
            <h3>{edu.degree}</h3>
            <p className="sub-heading">{edu.institution}</p>
            <p className="dates">{edu.graduationDate} {edu.gpa && `| ${edu.gpa}`}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;