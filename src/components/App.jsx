import React from 'react';
import Navbar from './Navbar';
import '../assets/css/style.css';
import Dashboard from './Dashboard';
import Footer from './Footer';

function App() {
  return (
    <div className="helpdesk-app">
      <Navbar />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
