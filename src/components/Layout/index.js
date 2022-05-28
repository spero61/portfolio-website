import { Outlet } from 'react-router-dom';
import './index.scss';
import Sidebar from '../Sidebar';

const Layout = () => (
  <div className="App">
    <Sidebar />
    <div className="page">

      <span className="tags top-tags top-tag-html">
        &lt;html&gt;
        <br />
        <span className="top-body-tag">
          &lt;body&gt;
        </span>
      </span>

      <Outlet />

      <span className="tags bottom-tags">
        &lt;/body&gt;
        <br />
        <span className="bottom-tag-html">&lt;/html&gt;</span>
      </span>
    </div>
  </div>
);

export default Layout;
