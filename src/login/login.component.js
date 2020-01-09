import React from 'react'
import './login.css'
export default class LoginComponent extends React.Component{

        constructor(){
            super();
        }
        render(){
            return(    <div class="container">
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required/>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required/>

            <button type="submit">Login</button>
        </div>); //vDOM/JSX and not html
            //this will be pared by reactjs Xparser
        }

}

