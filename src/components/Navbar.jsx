import React from 'react';

function Navbar() {
  return (
    <div className="navbar-helpdesk">
      <nav className="nav-help">
        <h3>FGS|Helpdesk</h3>
        <ul>
          <li>
            <a href="#a">My Tickets</a>
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
        <h3>User</h3>
      </nav>
    </div>
  );
}

export default Navbar;
