import '../css/tickets.css';

// Import Libraries 
import {useState, useEffect} from 'react';

// Functions 
import { fetchAllCompleted, fetchAllCompletedBy } from '../service/ticketService';

import { writeName, writeStatus, writePriority, writeDate } from '../service/ticketActions';


// Consumer 
import TicketContext from '../context/TicketContext';

// UI ELements
import AllTickets from '../ui/AllTickets';

const Tickets = (  ) => {
    const [tickets, setTickets ] = useState([]);
    const [sortPriority, setSortPriority] = useState('asc');
    const [sortStatus, setSortStatus] = useState('asc');
    const [sortName, setSortName] = useState('asc');
    const [sortCreateDate, setSortCreateDate] = useState('asc');
    const [sortUploadDate, setSortUploadDate] = useState('asc');

    const getTicketInfo = async () => { 
        return setTickets(await fetchAllCompleted());
    }
    const getTicketsByColumn = async ( column, method ) => {
    return setTickets(await fetchAllCompletedBy(column, method ));

    }

    const sortByColumn = async ( column, method ) => {
        return await getTicketsByColumn( column, method );
    }

    useEffect( () => {
        getTicketInfo();
        // init_load();
    }, []);

    return (
        <TicketContext.Consumer>
            { context => {
                return (
                    <div className="container">
                        <h1 className="title">Complete Tickets</h1>
                        <div className="actions">
                            {/*  */}
                            {/* SORT BY NAME */}
                            {/*  */}
                            <button className="btnAction" onClick={() => {
                            if ( sortName == 'asc' || sortName == '') {
                                setSortName('desc');
                            } else { 
                                setSortName('asc');
                            }
                            sortByColumn( 'summary', sortName );
                            }}><span>Sort By Name</span><br /> <span>{writeName( sortName )}</span></button>
                            {/*  */}
                            {/* SORT BY PRIORITY */}
                            {/*  */}
                            <button className="btnAction" onClick={() => {
                            if ( sortPriority == 'asc' || sortPriority == '') {
                                setSortPriority('desc');
                            } else { 
                                setSortPriority('asc');
                            }
                            sortByColumn( 'priority', sortPriority );
                            }}><span>Sort By Priority</span><br /> <span>{writePriority( sortPriority )}</span></button>
                            {/*  */}
                            {/* SORT BY STATUS */}
                            {/*  */}
                            <button className="btnAction" onClick={() => {
                            if ( sortStatus == 'asc' || sortStatus == '') {
                                setSortStatus('desc');
                            } else { 
                                setSortStatus('asc');
                            }
                            sortByColumn( 'status',sortStatus );
                            }}><span>Sort By Status</span><br /> <span>{writeStatus( sortStatus )}</span></button>
                            {/*  */}
                            {/* SORT BY CREATED DATE  */}
                            {/*  */}
                            <button className="btnAction" onClick={() => {
                            sortByColumn( 'create_date' ,sortCreateDate );
                            if ( sortCreateDate == 'asc' || sortCreateDate == '') {
                                setSortCreateDate('desc');
                            } else { 
                                setSortCreateDate('asc');
                            }
                            }}><span>Sort By Date Created</span><br /> <span>{writeDate( sortCreateDate )}</span></button>
                            {/*  */}
                            {/* SORT BY UPLOAD DATE */}
                            {/*  */}
                            <button className="btnAction" onClick={() => {
                            sortByColumn( 'update_date', sortUploadDate );
                            if (  sortUploadDate == 'asc' ||  sortUploadDate == '') {
                                setSortUploadDate('desc');
                            } else { 
                                setSortUploadDate('asc');
                            }
                            }}><span>Sort By Date Updated</span><br /> <span>{writeDate( sortUploadDate )}</span></button>
                            
                        </div>
                        <AllTickets isCompleted={false} tickets={tickets}></AllTickets>
                    </div> 
                )
            }}
        </TicketContext.Consumer>
    )
}

export default Tickets;