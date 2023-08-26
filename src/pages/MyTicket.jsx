import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Ticket from '../components/Ticket';

function MyTicket() {
  return (
    <div className="my-ticket">
      <Navbar />
      <Ticket />
      <Footer />
    </div>
  );
}

export default MyTicket;
