import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';
// import EmailSMSSender from '../components/Contact/EmailSMSSender';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Nagaraj Madamshetti via email @ hi@mldangelo.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch. You can email me at: </p>
        <EmailLink />
      </div>
      <ContactIcons />
    </article>
    {/* <EmailSMSSender /> */}
  </Main>
);

export default Contact;
