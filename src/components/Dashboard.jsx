import React from 'react';

function Dashboard() {
  return (
    <div className="dashboard-helpdesk">
      <h2>Dashboard</h2>
      <div className="dashboard-box">
        <div className="dashboard-count">
          <p>Total Ticket</p>
          <span>0</span>
        </div>
        <div className="dashboard-count">
          <p>Ticket Waiting</p>
          <span>0</span>
        </div>
        <div className="dashboard-count">
          <p>Ticket On Progress</p>
          <span>0</span>
        </div>
        <div className="dashboard-count">
          <p>Ticket Done</p>
          <span>0</span>
        </div>
      </div>

      <div className="dashboard-list-ticket">
        <div className="dashboard-list-head">
          <h2>List Tickets</h2>
          <p>Show All</p>
        </div>
        <div className="dashboard-list-table">
          <table>
            <tr>
              <th>ID Ticket</th>
              <th>Title</th>
              <th>Status</th>
              <th>Created At</th>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
