import React from 'react'
import ReactDom from 'react-dom'   // v-dom
import {AppComponent} from './app/app.component';
import LoginComponent from './login/login.component' 
import SignupComponent from './signup/signup.component'
import FooterComponent from './footer/footer.component'

// ReactDom.render(<LoginComponent/>,document.getElementById('root'));

// ReactDom.render(<SignupComponent/>,document.getElementById('root'));

ReactDom.render(<FooterComponent/>,document.getElementById('root'));

