import React from 'react'
import './signup.css'
export function SignupComponent(){

    return (
    <div class="container">
    <label for="email"><b>Email</b></label>
    <input  type="text" placeholder="Enter Email" name="email" required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>
    <div class="clearfix">
      <button type="submit" class="signupbtn">Sign Up</button>
    </div>
    </div>
    );
}

export default SignupComponent;
