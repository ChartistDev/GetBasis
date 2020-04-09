import React, { Component } from "react";
import {connect} from "react-redux";
import "../../getbasis.module.css";

class WelcomeBox extends Component {
  constructor() {
    super();
    this.otpButtonClicked = this.otpButtonClicked.bind(this);
  }

  otpButtonClicked(event) {
  }

  render() {
      console.log(this.props);
    return (
       <div className = "welcomeDiv">
           <h2>Welcome To Basis!</h2>
           <p>Own Your Financial Destiny.</p>
           <p>Enter Your Mobile Number To get Started:</p>
           <div className = "mobileNumberDiv">
               <label>Mobile Number</label>
               <p>+ 91</p>
               <input type = "number"/>
           </div>
           <div>
               <button onClick = {this.otpButtonClicked}>Get OTP</button>
           </div>
       </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {

}
export default WelcomeBox;