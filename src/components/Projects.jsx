import React from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    name: 'Articraft',
    description: 'A e-Commerce furniture shopping platform that integrates local shops to promote online shopping. It implements AR Trial that enables users to view furnitures in real-world (augments the 3d models of furnitures).',
    githubUrl: '',
  },
  {
    name: 'Quiz Application (using React)',
    description: 'An interactive quiz application built using React for rich-looking interface to attend quiz.',
    githubUrl: 'https://github.com/Ashok-Kumar-BTech/QuizApp-React.git',
    deployUrl: 'https://quizapp-react-ys6a.onrender.com/'
  },
  {
    name: 'Bill Classification and Text Recognition',
    description: 'A ML model that extracts text from receipts and bills, and stores only necessary information for automating the process of billing in organizations. It uses Zero-shot classification models to classify the bills based on the items mentioned in the receipt.',
    githubUrl: 'https://github.com/Sanjay-Steephanraj/image-classification-and-text-recognition.git',
  }
];

const Projects = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

  return (
    <section id="projects" ref={ref} className={inView ? 'visible' : ''}>
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map(project => (
          <div className="project-card" key={project.name}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              {project.deployUrl && (
                <a href={project.deployUrl} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 