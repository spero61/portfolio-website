import './index.scss';
import { useState, useEffect } from 'react';
import {
  faRust, faNode, faGitAlt, faPython, faJsSquare, faReact,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetters';

const About = () => {
  // Using the State Hook: https://reactjs.org/docs/hooks-state.html
  const [letterClass, setLetterClass] = useState('text-animate');
  const aboutMeArray = 'About me'.split('');

  useEffect(() => {
    setTimeout(() => setLetterClass('text-animate-hover'), 2500);
  }, []);

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={aboutMeArray}
            idx={15}
          />
        </h1>
        <p className="japanese">
          HTML, CSS, JavaScript
        </p>
        <p className="japanese">
          Frontend: React, Next.js, Bootstrap, Bulma
        </p>
        <p className="japanese">
          Backend: Flask, Node.js, Firebase, MariaDB, PostgreSQL
        </p>
        <p className="japanese">
          その他: C, C++, Lua
        </p>
      </div>
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faRust} color="#1b1b1b" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faPython} color="#3877a9" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faNode} color="#669f5b" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#61dafb" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="#fa4f28" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
