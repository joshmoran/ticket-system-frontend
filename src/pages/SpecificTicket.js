import '../css/specificTickets.css';

import { useContext, useEffect, useState } from "react";
import { Link, useNavigate  } from 'react-router-dom';

import { fetchTicket, fetchTicketComments } from '../service/ticketService';

import { formatDate } from '../service/formatDate';
import { formatTime } from '../service/formatTime';

import TicketContext from "../context/TicketContext";
import Tickets from './Tickets';

const SpecificTicket = ( prop ) => {
    const { key, ticketUser, actions } = useContext(TicketContext) ;
    const [ticket, setTicket] = useState([]);

    const [ messages, setMessages ] = useState([]);
    const [tMessage, setTMessage] = useState('');

    const navigate = useNavigate();

    let indexKey = 0;

    let url = window.location.href.split('/');
    url = url.slice(-1);
    console.log( url );

    if ( key == null || key == 'undefined' || key != url )  {
        navigate('/tickets');
    }

    const getTicket = async () => {
        return setTicket( await fetchTicket(key));
    }

    const getMessages = async () => {
        return setMessages(await fetchTicketComments(key));
    }

    useEffect( () => {
        // getTicket();
        // setTMessage();
        getMessages();
    }, [])


    useEffect( () => {
        getTicket();
        getMessages();
        // handleCommentSubmit();
    }, [] );

    return ( 
        <TicketContext.Consumer>
            { context => {
                return ( 
                    <>
                    <div className="container">
                    <div className="backBtnDiv">
                            <Link to="/tickets"><button className='backBtn'>Back to pending tickets</button></Link>
                    </div>
                    <h2>Ticket #{key}</h2>
                    {ticket.map( value => {
                        let createdTime = formatTime( value.create_date );
                        let createdDate = formatDate( value.create_date );

                        let createdTimeAndDate = value.create_date; 

                        let updatedTime = formatTime( value.update_date );
                        let updatedDate = formatDate( value.update_date );

                        let updatedTimeAndDate = value.update_date;
                        
                        return (
                            <div className="details" key={value.id}>
                                <h2>Ticket Details</h2>
                                <p><span>Name: </span>{value.summary}</p>
                                <p><span>Priority: </span>{value.priority}</p>
                                <p><span>Status: </span>{value.status}</p>
                                <br />
                                <h3>Created: </h3>
                                <p><span>Time Created: </span>{createdTime}</p>
                                <p><span>Date Created: </span>{createdDate}</p>
                                <br />
                                <h2>Updated: </h2>
                                <p><span>Time Updated: </span>{updatedTime}</p>
                                <p><span>Date Updated: </span>{updatedDate}</p>
                            </div>
                        )
                    })}
                    
                    <div className='addComment'> 
                        <input type="text" value={tMessage} className="messageInput" onChange={(e) => setTMessage(e.target.value)} /> 
                        <button onClick={(e) => {
                            if ( tMessage == '' || typeof tMessage == 'undefined') {
                                alert('Please enter a comment');
                                return;
                            } else { 
                                if ( key != null && tMessage != '' || tMessage != null ) {
                                    console.log( ticketUser ) ;
                                    let sending = {
                                        "ticket_id" : key,
                                        "username" : ticketUser,
                                        "messages": tMessage
                                    };
                                    
                                    actions.createMessage( sending );
                                    setMessages( [ ...messages, {
                                        ticket_id : key,
                                        username : ticketUser,
                                        date: new Date().toISOString(),
                                        messages: tMessage
                                    } ] );
                                }
                                setTMessage('');
                            }
                        }}>Add</button>
                    </div>
                    <h2>Comments</h2>
                    <div id="messages">
                    {messages.length === 0? <p>No comments yet</p> : null}
            
                    {console.log(messages)}
                    {messages.map( message => {
                        const messageTime = formatTime( message.date );
                        const messageDate = formatDate( message.date );

                        return ( 
                            <>
                            <div className="messageDiv" key={indexKey + 1}>
                                <div className="messageBox">
                                    <p>{message.messages}</p>
                                </div>
                                <div className="messageDetails">
                                    <p>{message.username}</p>
                                    <p>{messageTime} on the {messageDate}</p>
                                </div>
                            </div>
                            </>
                        )
                    })}
                    </div>
                </div>
                    </>
                )
            }}
        </TicketContext.Consumer>

    )
}

export default SpecificTicket;