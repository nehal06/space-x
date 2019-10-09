import React from 'react';
import { Link } from 'react-router-dom';
const nav = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link to="/">SpaceX</Link>
        </li>
      </ul>
      <ul className="right">
        <li>
          <Link to="/launchpads"> Launchpads</Link>
        </li>
        <li>
          <Link to="/missions"> Missions</Link>
        </li>
        {/* <li>
          <Link to="/payload/1">Payload</Link>
        </li> */}
      </ul>
    </div>
  );
};

export default nav;
