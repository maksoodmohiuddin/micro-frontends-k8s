import React from 'react';
import './about.css';

const About = () => (
  <main id="about">
    <h2>About this site</h2>
    <p>
      This is a React Micro-Frontend App deployed in Kubernates as Docker Container 
      This app consist of 3 micro apps:
      <ul>
          <li> Container App, a React App, works as a orchetrator or main app </li>
          <li> Content App, a Node app, works as central style and assets   </li>
          <li> App1, a React app, works as Micro UI which can be replicated as needed  </li>
      </ul>
    </p>
  </main>
);

export default About;
