import React from 'react';
import './style.css';
import fgslogo from '../../assets/img/fgs-logo.jpeg';

function Login() {
  return (
    <div className="helpdesk-login">
      <div className="lgn-left-side">
        <h2>Real Time Trading Spesialist</h2>
        <p>
          We Are a Market Leader In IDX Trading System Specialist in Realtime
          Trading System IDX Official Vendor
        </p>
      </div>
      <div className="lgn-right-side">
        <div className="lgn-right-side-head">
          <img src={fgslogo} alt="fgs" className="fgs" />
          <h1>Helpdesk Ticketing System</h1>
          <p>Signing to your account</p>
        </div>
        <form>
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="lgn-input"
          />
          <br />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="lgn-input"
          />
          <br />
          <br />
          <button className="btn-login">Login</button>
          <br />
          <br />
          <p>
            Having trouble logging in? contact us{' '}
            <a href="admin" className="anchor">
              admin@fgsinfotama.com
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
