import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar-helpdesk">
      <h3>FGS Infotama</h3>
      <nav className="nav-help">
        <ul>
          <li>
            <Link to="/ticket">My Tickets</Link>
          </li>
          <li>
            <a href="#a">FAQ</a>
          </li>
          <li>
            <a href="#a">News</a>
          </li>
          <li>
            <a href="#a">Notification</a>
          </li>
        </ul>
      </nav>
      <h3>User</h3>
    </div>
  );
}

export default Navbar;
