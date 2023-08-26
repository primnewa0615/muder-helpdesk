import React from 'react';
import Navbar from '../components/Navbar';
import '../assets/css/style.css';
import Dashboard from '../components/Dashboard';
import Footer from '../components/Footer';

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
