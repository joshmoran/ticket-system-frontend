import '../css/altNav.css';
import { React } from "react";
import {  Link } from "react-router-dom";
import TicketContext from "../context/TicketContext";

const AltNavBar = () => {
    return ( 
        <TicketContext.Consumer>
            {context => {
                return (        
                        <div className="altNavDiv">
                            <h1>Ticket Manager</h1>
                            <ul>
                                <li>
                                    <Link className="altBtn" to="login">Login</Link>
                                </li>
                                <li>
                                    <Link className="altBtn" to="register">Register</Link>
                                </li>
                            </ul>
                        </div>
                )
            }}
        </TicketContext.Consumer>
    );
}

export default AltNavBar;