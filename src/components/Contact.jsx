import React from 'react';
import './Contact.css';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

  return (
    <section id="contact" ref={ref} className={inView ? 'visible' : ''}>
      <h2>Contact Me</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Email: ak724ashok@gmail.com</p>
          <p>Mobile: +91 75400 41364</p>
          <p>Native City: Salem, Tamil Nadu, India</p>
        </div>
        {/*
          INSTRUCTIONS:
          1. Go to https://formspree.io/ and sign up/log in.
          2. Create a new form and copy your unique endpoint URL (e.g., https://formspree.io/f/yourFormID).
          3. Replace the action URL below with your Formspree endpoint.
          4. You can now receive emails from this form!
        */}
        <form className="contact-form" action="https://formspree.io/f/mqabglwj" method="POST">
          <h3>Send me a message</h3>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact; 