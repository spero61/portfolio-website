import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Logo from './Logo';

const Home = () => {
  // Using the State Hook: https://reactjs.org/docs/hooks-state.html
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['u', 'n', 'g'];
  const jobArray = 'web developer'.split('');

  // cf. https://stackoverflow.com/questions/53090432/react-hooks-right-way-to-clear-timeouts-and-intervals
  useEffect(() => {
    setTimeout(() => setLetterClass('text-animate-hover'), 4000);
  }, []);

  return (

    <div className="container home-page">
      <div className="text-zone">
        <h1>
          {/* add letterClass manually 12 means 1.2 seconds of delay */}
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>&#39;m</span>
          <img src={LogoTitle} alt="developer" />
          <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
          <br />
          <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={18} />
        </h1>
        <h2>Frontend Developer</h2>
        <Link to="/contact" className="flat-button">CONTACT ME</Link>
      </div>
      <Logo />
    </div>
  );
};

export default Home;
