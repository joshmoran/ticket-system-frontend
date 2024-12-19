import { useState } from "react";
// import { createTicket, fetchAllTickets } from './service/ticketService';
import {BrowserRouter as Router, Routes,  Route, Navigate, BrowserRouter } from 'react-router-dom';
// import TicketForm from './components/TicketForm/TicketForm';

import {createTicket, createMessage} from './service/ticketService';

// Content Provider 
import TicketContext from './context/TicketContext';

import Home from './pages/Home';
import Login from './pages/Login';
import Tickets from './pages/Tickets';
import SpecificTicket from './pages/SpecificTicket'

import AltNavBar from './pages/AltNavBar';
import Register from './pages/Register';


import NavBar from './pages/NavBar.js';
import NewTicket from './pages/NewTicket.js';
import Logout from './pages/Logout';
import Completed from './pages/Completed.js';

import Error from './pages/Error';


// Pages for when user is logged

function App() {
  const [ticketUser, setTicketUser ] = useState();
  const [key, setKey] = useState(0);
  const [sortPriority, setSortPriority] = useState('asc');
  const [sortStatus, setSortStatus] = useState('asc');
  const [sortName, setSortName] = useState('asc');

  const logoutUser = () => {
    setTicketUser(null);
  }

  const loginUser = ( username, password ) => {
    const createUser = {
      username, 
      password
    }
    setTicketUser( createUser );
  }

  const createUser = ( username, password ) => {
    setTicketUser(true);
  }

  const putTicket= ( data ) => {
    createTicket( data );
  }

  const getSetKey = ( id ) => {
    setKey(id);
  }

  const setNameSort = ( method ) => { 
    setSortName( method );
  }

  const setPrioritySort = ( method ) => { 
    setSortPriority( method );
  }
  
  const setStatusSort = ( method ) => { 
    setSortStatus( method );
  }

  const putMessage = ( message ) => {
    createMessage(message);
  }
  return (
    <TicketContext.Provider value={{
      ticketUser,
      key,
      sortName,
      sortPriority,
      sortStatus,
      actions: {
        logout: logoutUser,
        login: loginUser,
        register: createUser,
        createTicket: putTicket,
        setKey: getSetKey,
        createMessage: putMessage
      }
    }}>
    <div>
          { ticketUser ? ( 
            <>
              <Router>
                <NavBar />
                <Routes>
                  <Route path ="" element={<Home />} />
                  <Route path ="tickets" element={<Tickets />} />
                  <Route path ="tickets/:id" element={<SpecificTicket />} />
                  
                  <Route path ="new_ticket" element={<NewTicket />} />
                  <Route path ="logout" element={<Logout /> } />
                  <Route path ="completed" element={<Completed />} />
                </Routes>
              </Router>
            </>
          ) : ( 
            <>
              <Router>
                <AltNavBar />
                <Routes>
                  <Route path="" index element={<Login />} />
                  <Route path="login" index element={<Login />} />
                  <Route path="register" element={<Register />} />
                </Routes>
              </Router>
            </>
          )
          }
      </div>
      </TicketContext.Provider>
    );
  
}


export default App;
