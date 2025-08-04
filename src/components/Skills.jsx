import React from 'react';
import './Skills.css';
import { useInView } from 'react-intersection-observer';

const skills = [
  { name: 'Java', level: 'Intermediate', percentage: 50 },
  { name: 'Python', level: 'Intermediate', percentage: 50 },
  { name: 'Data Structures and Algorithms', level: 'Intermediate', percentage: 50 },
  { name: 'Machine Learning', level: 'Intermediate', percentage: 50 },
  { name: 'Deep Learning', level: 'Intermediate', percentage: 50 },
  { name: 'React', level: 'Intermediate', percentage: 40 },
  { name: 'Web Development (HTML, CSS, JS)', level: 'Intermediate', percentage: 60 },
];

const otherSkills = [
    { name: 'Git and GitHub', description: 'Version control for tracking changes and collaborating on projects.' },
    { name: 'Weka', description: 'A collection of machine learning algorithms for data mining tasks.' },
];

const Skills = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

  return (
    <section id="skills" ref={ref} className={inView ? 'visible' : ''}>
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map(skill => (
          <div className="skill-card" key={skill.name}>
            <h3>{skill.name}</h3>
            {skill.percentage && (
              <div className="skill-bar">
                <div className="skill-level" style={{ width: `${skill.percentage}%` }}>
                  {skill.percentage}%
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <h3>Other Tools and Skills</h3>
      <div className="other-skills-container">
          {otherSkills.map(skill => (
              <div className="skill-name-card" key={skill.name}>
                  <h4>{skill.name}</h4>
                  <p>{skill.description}</p>
              </div>
          ))}
      </div>
    </section>
  );
};

export default Skills; 