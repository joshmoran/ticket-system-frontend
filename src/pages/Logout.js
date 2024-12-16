import React, { useContext } from 'react';
import TicketContext from '../context/TicketContext';

const Logout = () => {
    const { actions } = useContext(TicketContext);
    return ( 
        <h2>{actions.logout()}</h2>
    )
}

export default Logout;