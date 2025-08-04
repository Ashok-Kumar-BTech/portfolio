import React from 'react';
import './About.css';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" ref={ref} className={inView ? 'visible' : ''}>
      <h2>About Me</h2>
      <div className="about-container">
        <div className="about-section">
          <h3>Academic Information</h3>
          <ul>
            <li>
              <strong>B.Tech in Artificial Intelligence and Data Science</strong><br />
              Coimbatore Institute of Technology, Coimbatore (2023 - Present)
            </li>
            <li>
              <strong>Diploma in Electronics and Communication Engineering</strong><br />
              Thiagarajar Polytechnic College, Salem (2020 - 2023)
            </li>
          </ul>
        </div>
        <div className="about-section">
          <h3>Area of Interest</h3>
          <div className="interest-cards">
            <span>Data Structures and Algorithm</span>
            <span>Machine Learning</span>
            <span>Following Tech trends</span>
            <span>Linux</span>
          </div>
        </div>
        <div className="about-section">
          <h3>Soft Skills</h3>
          <div className="soft-skills">
            <span>Active Listener</span>
            <span>Collaborative</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;