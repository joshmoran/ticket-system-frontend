import React from 'react';

const Template = () => { 


    <TicketContent.Consumer>
        { context => {
            return (
                <h1>Simple Title</h1>
            )
        }}
    </TicketContent.Consumer>
}

export default Template;