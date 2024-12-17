const BASE_URL = process.env.REACT_APP_BASE_URL;

export const fetchAllTickets = async () => {
    const rawResponse = await fetch(`${BASE_URL}/all`);
    return await rawResponse.json();
};

export const fetchTicket = async (id) => {
    const rawResponse = await fetch(`${BASE_URL}/ticket/${id}`);
    return await rawResponse.json();
};

export const fetchTicketComments = async (id) => {
    const rawResponse = await fetch(`${BASE_URL}/message/${id}`);
    return await rawResponse.json();
}

export const createMessage = async (message) => {
    const rawResponse = await fetch(`${BASE_URL}/message`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json"
        },
        body: JSON.stringify(message),
    });

    if ( rawResponse.status !== 200 ) {
        console.log('Could not create a ticket');
        return null;
    }

    return await rawResponse.json();
};

export const changeStatus = async (id, status) => {
    const rawResponse = await fetch(`${BASE_URL}/change/${id}/${status}`);
    return await rawResponse
}

export const fetchAllPending = async () => {
    const rawResponse = await fetch(`${BASE_URL}/pending`);
    return await rawResponse.json();
}

export const fetchAllPendingBy = async ( column, order ) => {
    const rawResponse = await fetch(`${BASE_URL}/pending/${column}/${order}`);
    return await rawResponse.json();
}

export const fetchAllCompleted = async () => {
    const rawResponse = await fetch(`${BASE_URL}/completed`);
    return await rawResponse.json();
}

export const fetchAllCompletedBy = async ( column, order ) => {
    const rawResponse = await fetch(`${BASE_URL}/completed/${column}/${order}`);
    return await rawResponse.json();
}

export const createTicket = async (ticket) => {
    const rawResponse = await fetch(`${BASE_URL}/ticket`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json"
        },
        body: JSON.stringify(ticket),
    });

    if ( rawResponse.status !== 200 ) {
        console.log('Could not create a ticket');
        return null;
    }

    return await rawResponse.json();
};

export const updateTicket = async (id, ticket) => {
    if (ticket.id ) {
        delete ticket.id;
    }
    const rawResponse = await fetch(`${BASE_URL}/ticket/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json"
        },
        body: JSON.stringify(ticket),
    });

    return await rawResponse.json();
};

export const deleteTicket = async (id) => {
    const rawResponse = await fetch(`${BASE_URL}/ticket/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json"
        },
    });

    return await rawResponse.json();
}