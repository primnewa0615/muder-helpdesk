import React from 'react';
import '../register/style.css';

function Register() {
  return (
    <div className="helpdesk-register">
      <div className="regist-left-side">
        <h2>Real Time Trading Spesialist</h2>
        <p>
          We Are a Market Leader In IDX Trading System Specialist in Realtime
          Trading System IDX Official Vendor
        </p>
      </div>
      <div className="regist-right-side">
        <h1>Helpdesk Ticketing System</h1>
        <p>Register to Ticketing System</p>

        <form>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="regist-input"
          />
          <br />
          <br />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="regist-input"
          />
          <br />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="regist-input"
          />
          <br />
          <br />
          <button className="btn-register">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
