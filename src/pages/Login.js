import {  useContext } from 'react';

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
                    <div class="login">
                        <h2>Login Page</h2>
                        <p>To continue to view tickets, please login</p>
                        <p>Their is no authentication as of right now, so any username and password will work</p>
                        <form className="loginForm" onSubmit={loginFunction}>
                            <div className="formEl">
                                <div className="loginRow">  
                                    <label for="username">Username</label>
                                    <label for="password">Password</label>
                                </div>
                                <div className="loginRow">
                                    <input type="text" id="username" name="username" />
                                    <input type="password" id="password" name="password" />
                                </div>
                            </div>

                            <button type="submit">Login</button>
                        </form>
                    </div>
                )
            }}
        </TicketContext.Consumer>   
    )
}

export default Login;