import '../App.css';
import {
  faRust, faNode, faGitAlt, faPython, faJsSquare, faReact,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SpinCube() {
  return (
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
  );
}

export default SpinCube;
