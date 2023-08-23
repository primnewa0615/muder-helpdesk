import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  function handleClick() {
    navigate('/register');
  }
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
        <h1>Helpdesk Ticketing System</h1>
        <p>Signing to your account</p>

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
            Don't have account? please{' '}
            <span className="regist-p" onClick={handleClick}>
              {' '}
              register
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
