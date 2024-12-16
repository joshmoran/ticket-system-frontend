import React, { useContext } from 'react';

import TicketContext from '../context/TicketContext';

import TicketForm from '../ui/TicketForm'
const NewTicket = () => {
    const { actions } = useContext(TicketContext);

    return (
        <TicketContext.Consumer>
            { context => {
                return(
                    <div id="container">
                        <h1>Create a new Ticket</h1>
                        <TicketForm />
                    </div>
                )
            }}
        </TicketContext.Consumer>
    )
}

export default NewTicket;