import React, { useContext, useState } from 'react';

import TicketContext from '../context/TicketContext';

import ShowTicket from '../ui/ShowTicket';


const CreateListItem = ( data ) => { 
    const { actions } = useContext(TicketContext);
    
    const setIdentifer = () => { 
        actions.setKey( data.data.id );
    }

    return (
        <div className='content'>
            <aside>
                {
                    prop.tickets.map((key) => {
                        return (
                            <ListItem
                                isComplete={data.isComplete}
                                data={key}
                                key={key.id}
                            />
                            
                        )
                    })
                }                   
            </aside>
            <main>
                <ShowTicket id={key}></ShowTicket>
            </main>
        </div>
    )
}

export default CreateListItem;