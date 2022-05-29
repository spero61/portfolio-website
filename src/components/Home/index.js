import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import './index.scss';

const Home = () => (
  <div className="container home-page">
    <div className="text-zone">
      <h1>
        Hi,
        <br />
        I&#39;m
        <img src={LogoTitle} alt="developer" />
        ung
        <br />
        web developer
      </h1>
      <h2>Frontend Developer</h2>
      <Link to="/contact" className="flat-button">CONTACT ME</Link>
    </div>

  </div>
);

export default Home;
