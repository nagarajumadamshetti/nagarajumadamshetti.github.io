import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Nagaraj Madamshetti</h2>
        <p><a href="mailto:nmadams@ncsu.edu">nmadams@ncsu.edu</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Nagaraj. I am a <a href="https://www.csc.ncsu.edu/">NC State</a> graduate student, <a href="https://www.griet.ac.in/">GRIET</a> Alumni. Previously,
        I worked as a Network Software Engineer Intern at <a href="https://arrcus.com/">Arrcus</a>
        , and as an Associate Software Engineer at <a href="https://www.veltris.com/">West Agile Labs now Veltris</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Nagaraj Madamshetti</p>
      {/* <p className="copyright">&copy; Nagaraj Madamshetti <Link to="/">
      nagaraj.madamshetti</Link>.</p> */}
    </section>
  </section>
);

export default SideBar;
