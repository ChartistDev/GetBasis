import React, { Component } from "react";
import {connect} from "react-redux";
import {setPhoneNumber} from "../Actions";
import LoginForm from "./LoginForm";
import "../../getbasis.module.css";
import {Button} from "@material-ui/core"

class WelcomeBox extends Component {
  constructor() {
    super();
    this.otpButtonClicked = this.otpButtonClicked.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }
  onInputChange(e){
    this.props.setPhoneNumber(e.target.value);
  }
  otpButtonClicked(event) {
      event.preventDefault();
      this.props.history.push("./OTP");

  }

  render() {
    return (
        
       <div>
           <LoginForm/>
           <p>Enter Your Mobile Number To get Started:</p>
           <form onSubmit = {this.otpButtonClicked}>
           <div className = "mobileNumberDiv">
               <label>Mobile Number</label>
               <p>+ 91</p>
               <input type = "text" pattern="\d{10}" maxLength = "10" onChange = {this.onInputChange} value = {this.props.phoneNumber} />
           </div>
           <div>
               <Button disabled = {this.props.phoneNumber.length === 10 ? false : true} type = "submit" >Get OTP</Button>
           </div>
           </form>
       </div>
    );
  }
}
const mapStateToProps = (state) => {
return {
    phoneNumber : state.Login.phoneNumber
}
}
const mapDispatchToProps = (dispatch) => {
    return{
        setPhoneNumber: (number) => dispatch(setPhoneNumber(number))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(WelcomeBox);