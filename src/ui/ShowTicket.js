import React, { useState, useContext, useEffect} from 'react';

import TicketContext from '../context/TicketContext';

import { fetchTicket } from '../service/ticketService';

const ShowTicket = (  ) => {
    const [ticket, setTicket] = useState([]);
    const { key, actions } = useContext(TicketContext);

    const getTicket = async () => {
        return setTicket(await fetchTicket( key ));
    }
    
    useEffect( ()=> {
        getTicket();
    }, []);
    
    return (
        <>
            {ticket.map( value => {
                return (
                    <div key={value.id}>
                        <p>{value.summary}</p>
                        <p>{value.priority}</p>
                        <p>{value.status}</p>
                        <p>{value.create_date}</p>
                        <p>{value.update_date}</p>
                    </div>
                )
            })}
        </>
    )
}

export default ShowTicket;