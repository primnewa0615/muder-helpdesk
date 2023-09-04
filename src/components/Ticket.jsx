import React, {useState, useEffect} from 'react';
import Modal from 'react-modal';
import { TicketData } from '../utils/data';
import eye from '../assets/img/eye.png';
import moment from 'moment/moment';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function Ticket() {
  // modal
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [formData, setFormData] = useState({})

  useEffect(() => {
    setTickets(TicketData);
  }, [])
  
  const handleInput = (e) =>{
    setFormData({...formData, 
       [e.target.id]: e.target.value
    })

    console.log(formData);
   
  }

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const addData = (form) =>{
    let id= "00000"+ (tickets.length +1);
    let date = new Date();
    let today= moment().format("YYYY-MM-DD HH:mm:ss");
    setFormData({
      ...formData,
      createdat: today,
      status: "waiting",
      id: id
    });

    setTickets([
      ...tickets,
      formData
    ])

    console.log(formData);
  }


  return (
    <div className="ticket-helpdesk">
      <div className="ticket-helpdesk-header">
        <h2>Tickets</h2>
        <button onClick={openModal} className="btn-ticket-helpdesk">
          + New Ticket
        </button>
        <Modal
          isOpen={modalIsOpen}
        
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="header-modal">
            <h3 ref={(_subtitle) => (subtitle = _subtitle)}>Add Ticket</h3>
            <button>x</button>
          </div>
          <hr />
          <br />
          <div>
          
              <label htmlFor="Upload Image">Upload Image</label>

              <div className="modal-input">
                <input type="file" id='ticket-file' onChange={(e) => handleInput(e)} name="ticket-file" />
                <br />
              </div>
              <br />
              <label htmlFor="Division">Division</label>
              <br />
              <select name="division" id='divisions' onChange={(e) => handleInput(e)} className="modal-option">
                <option value="">-- Choose Division</option>
                <option value="IT Support">IT Support</option>
                <option value="Programmer">Programmer</option>
                <option value="Infra">Infra</option>
              </select>
              <br />
              <br />
              <label htmlFor="Question">Question</label>
              <br />
              <input type="text" id='questions' onKeyUp={(e) => handleInput(e)} className="modal-option" />
              <br />
              <br />
              <label htmlFor="Detail Question">Detail Question</label>
              <br />
              <textarea
                name="detailquestion"
                id="detailquestion"
                onKeyUp={(e) => handleInput(e)}
                cols="30"
                rows="5"
                className="modal-textarea"
              ></textarea>
               <hr />
              <br />
              
          
            <div className="modal-footer">
                <button className="modal-ccl" onClick={()=>closeModal()}>
                  Cancel
                </button>
                <button type="submit" onClick={(e) => addData(e)} form='formtes'  className="modal-submit">Submit</button>
              </div>
           
          </div>
        </Modal>
      </div>
      <div className="ticket-helpdesk-box">
        <div className="ticket-helpdesk-main">
          <select>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
            <option value="all">all</option>
          </select>
          <h4>Items</h4>
          <input
            type="text"
            placeholder="Search"
            className="ticket-helpdesk-main-search"
          />
        </div>
        <div className="ticket-helpdesk-main-tablebox">
          <table className="ticket-helpdesk-main-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Question</th>
                <th>Division</th>
                <th>Status</th>
                <th>Created At</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="ticket-table-body">
              {tickets.length > 0 && tickets.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.questions}</td>
                  <td>{item.divisions}</td>
                  <td>{item.status}</td>
                  <td>{item.createdat}</td>
                  <td>
                    <button>
                      <img
                        src={eye}
                        alt="eye"
                        className="submit-detailticket"
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <br />
          <hr className="ticket-helpdesk-main-table-hr" />
          <div className="ticket-helpdesk-footer">
            <div className="left">
              <p>Showing 1 to 1 entries</p>
            </div>
            <div className="right">
              <button className="first">Previous</button>
              <button className="middle">1</button>
              <button className="first">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ticket;

// reference : https://www.youtube.com/watch?v=SurVt_rqOQM
