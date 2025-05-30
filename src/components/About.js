// src/components/About.js
import React from "react";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2>About Me</h2>
        {/* The about-introduction paragraph is now removed from here and its content is integrated as the first card below */}

        <div className="about-highlights-grid">
          {/* Card 1: The previous introduction content */}
          <div className="highlight-card">
            <h3>Full Stack Developer Profile</h3>{" "}
            {/* New title for this card */}
            <p>
              A Java Full Stack Developer with over 4 years of experience, who
              is adept at the design, development, and deployment of secure,
              scalable, and responsive web applications. I am passionate about
              continuous learning and applying cutting-edge technologies to
              solve complex problems and deliver impactful solutions.
            </p>
          </div>

          {/* Card 2: Dynamic Frontend & SPAs */}
          <div className="highlight-card">
            <h3>Dynamic Frontend & SPAs</h3>
            <p>
              Expertise in crafting dynamic single-page applications (SPAs)
              using modern web frameworks like ReactJS and Redux, focusing on
              reusable component libraries and Virtual DOM manipulation for
              optimal user experiences.
            </p>
          </div>

          {/* Card 3: Robust Backend Systems */}
          <div className="highlight-card">
            <h3>Robust Backend Systems</h3>
            <p>
              Proficient in building scalable backend applications and
              microservices with Java, Kotlin, Spring Boot, and Node.js, as well
              as creating RESTful APIs and GraphQL for seamless integration.
            </p>
          </div>

          {/* Card 4: Cloud & DevOps Excellence */}
          <div className="highlight-card">
            <h3>Cloud & DevOps Excellence</h3>
            <p>
              Skilled in deploying, scaling, and managing applications using
              Docker, Kubernetes (AKS), Azure DevOps, and a range of AWS
              services (EC2, Lambda, S3, RDS), complemented by robust CI/CD
              pipeline implementation.
            </p>
          </div>

          {/* Card 5: Architectural Design & Patterns */}
          <div className="highlight-card">
            <h3>Architectural Design & Patterns</h3>
            <p>
              A strong comprehension of distributed architectures, multi-tier
              cloud architectures, MVC, Design Patterns, Object-Oriented Design
              (OOD), and Service Oriented Architecture (SOA) for robust web
              services.
            </p>
          </div>

          {/* Card 6: Data Solutions & Real-time Processing */}
          <div className="highlight-card">
            <h3>Data Solutions & Real-time Processing</h3>
            <p>
              Experienced in developing real-time data streaming solutions with
              Apache Flink and Azure Event Hubs, alongside proficiency in
              MongoDB (NoSQL) for designing scalable database architectures and
              optimizing queries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
