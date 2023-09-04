import React from 'react';

function DetailTicket(id, onDetail) {
  return (
    <div className="helpdesk-detailTicket">
      <button onClick={() => onDetail(id)}>show</button>
    </div>
  );
}

export default DetailTicket;
