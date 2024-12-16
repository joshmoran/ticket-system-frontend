import { act, react, useContext } from 'react';
import { Link } from'react-router-dom';

import TicketContext from '../context/TicketContext';

const Register = () => {
    const { actions } = useContext(TicketContext);

    const registerFunction = (e) => {
        actions.login (
            e.target.elements.username.value,
            e.target.elements.password.value
        )
    }

    return ( 
        <TicketContext.Consumer>
            { context => {
                return (
                    <div>
                        <h2>Registration Page</h2>
                        <p>To coninue to view tickets, please login</p>
                        <p>Their is no authentication as of right now, so any username and password will work</p>
                        <form onSubmit={actions.register}>
                            <h2>Personal Information</h2>
                            <label for="firstName">First Name</label>
                            <input type="text" id="firstName" name="firstName" />
                            <br />
                            <label for="lastName">Last Name</label>
                            <input type="text" id="lastName" name="lastName" />
                            <br />

                            <h2>Account</h2>
                            <label for="username">Username</label>
                            <input type="text" id="username" name="username" />
                            <br />
                            <label for="password">Password</label>
                            <input type="password" id="password" name="password" />
                            <br />
                            <button type="submit">Login</button>
                        </form>
                    </div>
                )
            }}
        </TicketContext.Consumer>   
    )
}

export default Register;