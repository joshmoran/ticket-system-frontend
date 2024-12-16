import React, { useContext } from "react";
import '../css/home.css';
import TicketContext from "../context/TicketContext";

const Home = () => { 
    const context = useContext(TicketContext);

    return ( 
        <TicketContext.Consumer>
            { context => {
                return(
                    <div id="home" className="container">
                        <h1>Home Page</h1>
                        <p>
                        Welcome to our intuitive ticketing system, designed to streamline your task management and enhance your productivity. With our user-friendly interface, you can effortlessly create, assign, and track tickets, ensuring that no task is left unattended. Whether you're managing a small team or a large organization, our system provides the flexibility and functionality you need to stay organized and efficient. Real-time updates and notifications keep you informed of the latest developments, while customizable priorities and statuses help you keep track of what's most important. Join us in transforming the way you manage tasks, and experience the simplicity and efficiency of our ticketing system today.
                        </p>
                    </div>
                )
            }}
        </TicketContext.Consumer>
    )
}

export default Home;