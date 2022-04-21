import React from 'react';
import { Link } from 'react-router-dom';


const About = () => {
  return (
    <div>
      <h1>About Our</h1>
      <Link to="quotes">
        Quotes
      </Link>
      <section>
        <h2>
          History
        </h2>
        <p>
          about history of company
        </p>
      </section>
    </div>
  );
}


export default About;