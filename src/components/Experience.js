import React from 'react';
import resumeData from '../resumeData.json';

const Experience = () => {
  const { experience } = resumeData;
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2>Experience</h2>
        {experience.map(job => (
          <div key={job.id} className="item">
            <h3>{job.title}</h3>
            <p className="sub-heading">{job.company}</p>
            <p className="dates">{job.dates}</p>
            <ul>
              {job.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;