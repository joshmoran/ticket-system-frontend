import '../css/navbar.css';

import { React, useContext } from "react";
import {  Link } from "react-router-dom";
import TicketContext from "../context/TicketContext";

const NavBar = () => {
    const context = useContext(TicketContext);
    return ( 
        <TicketContext.Consumer>
            {context => {
                return (        
                        <header>
                            <h1>Ticket Manager</h1>
                            <ul className="nav">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/tickets">Pending</Link>
                                </li>
                                <li>
                                    <Link to="/completed">Complete</Link>
                                </li>
                                <li>
                                    <Link to="/new_ticket">Create</Link>
                                </li>
                                <li>
                                    <Link to="/logout">Logout</Link>
                                </li>
                            </ul>
                        </header>
                )
            }}
        </TicketContext.Consumer>
    );
}

export default NavBar;