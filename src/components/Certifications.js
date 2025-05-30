import React from 'react';
import resumeData from '../resumeData.json';

const Certifications = () => {
  const { certifications } = resumeData;
  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2>Certifications</h2>
        {certifications.map(cert => (
          <div key={cert.id} className="item">
            <h3>{cert.name}</h3>
            <p className="issuer">Issued by: {cert.issuer}</p>
            <p className="dates">Date: {cert.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;