import { react, useContext } from 'react';
import { Link } from'react-router-dom';

import TicketContext from '../context/TicketContext';

const Login = () => {
    const { actions } = useContext(TicketContext);

    const loginFunction = (e) => {
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
                        <h2>Login Page</h2>
                        <p>To continue to view tickets, please login</p>
                        <p>Their is no authentication as of right now, so any username and password will work</p>
                        <form onSubmit={loginFunction}>
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

export default Login;