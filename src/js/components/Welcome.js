import React, { Component } from "react";
import {connect} from "react-redux";
import {setPhoneNumber, setTextError, cleanSlate} from "../Actions";
import LoginForm from "./LoginForm";
import "../../getbasis.module.css";
import {Button} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

class WelcomeBox extends Component {
  constructor() {
    super();
    this.helperText = ""
    this.otpButtonClicked = this.otpButtonClicked.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }
  componentDidMount () {
    this.props.cleanSlate();
  }
  onInputChange(e){
    // if(e.target.value.length <= 10 && !isNaN(Number(e.target.value)) && (e.target.value[0] === "6" || e.target.value[0] === "7" || e.target.value[0] === "8" || e.target.value[0] === "9")) {
    //     this.props.setPhoneNumber(e.target.value);
    //         this.props.setTextError(false);
    //         this.helperText = "";
    // } else if(e.target.value.length <= 10 && (isNaN(Number(e.target.value)) || (e.target.value[0] !== "6" || e.target.value[0] !== "7" || e.target.value[0] !== "8" || e.target.value[0] !== "9"))) {
    //         this.props.setTextError(true)
    //         this.helperText = "Mobile Number can contain only digits and can only start with 6,7,8 or 9"    
    // }
    const onlyNums = e.target.value.replace(/[^0-9]/g, '');
    if (onlyNums.length <= 10) {
        this.props.setPhoneNumber(onlyNums);
    }
  }
  otpButtonClicked(event) {
      event.preventDefault();
      this.props.history.push("./OTP");

  }

  render() {
    return (
        
       <div>
           <LoginForm/>
           <div className = "welcomeDiv">
           <p>Enter Your Mobile Number To get Started:</p>
           </div>
           <form onSubmit = {this.otpButtonClicked}>
           <div className = "mobileNumberDiv">
               <TextField
                id="outlined-helperText"
                label="Phone Number"
                error = {this.props.textBoxError}
                helperText = {this.helperText}
                variant="outlined"
                color ="primary"
                maxLength = "10" onChange = {this.onInputChange} value = {this.props.phoneNumber}
                />
           </div>
           <div className = "welcomeDiv">
               <Button color = "primary" variant = "outlined" disabled = {this.props.phoneNumber.length === 10 ? false : true} type = "submit" >Get OTP</Button>
           </div>
           </form>
       </div>
    );
  }
}
const mapStateToProps = (state) => {
return {
    phoneNumber : state.Login.phoneNumber,
    textBoxError: state.Login.textBoxError
}
}
const mapDispatchToProps = (dispatch) => {
    return{
        setPhoneNumber: (number) => dispatch(setPhoneNumber(number)),
        setTextError: (bool) => dispatch(setTextError(bool)),
        cleanSlate: () => dispatch(cleanSlate())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(WelcomeBox);