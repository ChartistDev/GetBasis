import React, { Component } from "react";
import {connect} from "react-redux";
import "../../getbasis.module.css";
import Logo from "./Logo"


class Login extends Component {
  constructor() {
    super();
  }

  render() {
    return (
        <div className = "parentDiv">
        <Logo/>
        <div className = "welcomeDiv">
           <h2>Welcome To Basis!</h2>
           <p>Own Your Financial Destiny.</p>
         </div>  
          {/* {
              <WelcomeBox/>
          } */}
          </div>
    );
  }
}

export default Login;