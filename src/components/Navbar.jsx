import React, { useState, useEffect, useCallback } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [toggleText, setToggleText] = useState('Contact');
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(() => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
        setVisible(false);
      } else { // if scroll up show the navbar
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  }, [lastScrollY]);

  useEffect(() => {
    const interval = setInterval(() => {
      setToggleText(text => (text === 'Contact' ? 'Hire Me' : 'Contact'));
    }, 2000);

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
        clearInterval(interval);
      };
    }

    return () => clearInterval(interval);
  }, [controlNavbar]);

  return (
    <nav className={`navbar ${visible ? 'visible' : 'hidden'}`}>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">{toggleText}</a></li>
      </ul>
    </nav>
  );
};

export default Navbar; 