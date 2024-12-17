import { React, useContext } from "react";
import {  Link } from "react-router-dom";
import TicketContext from "../context/TicketContext";

const AltNavBar = () => {
    const context = useContext(TicketContext);
    return ( 
        <TicketContext.Consumer>
            {context => {
                return (        
                        <div>
                            <h1>Ticket Manager</h1>
                            <ul>
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                                <li>
                                    <Link to="/register">Register</Link>
                                </li>
                            </ul>
                        </div>
                )
            }}
        </TicketContext.Consumer>
    );
}

export default AltNavBar;