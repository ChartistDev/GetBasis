import React, { Component } from "react";
import {connect} from "react-redux";
import Login from "./LoginForm";
import "../../getbasis.module.css";
import  { setOTPArray, setToken,setAccFName, setAccLName, setAccEmail, setAccRefCode, setUserId, setAuthToken } from "../Actions";
import { TextField,Button } from "@material-ui/core";
//import {browserHistory}

class OTP extends Component {
  constructor() {
    super();
    this.verifyOTP = this.verifyOTP.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    //this.cleanOTPSlate = this.cleanOTPSlate.bind(this);
    this.submitButton = {
        disabled:true
    };
  }
  async componentDidMount() {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "phoneNumber": this.props.phoneNumber })
    };
    const userlogin = await fetch("https://hiring.getbasis.co/candidate/users/phone",requestOptions);
    const LoginSuccess = await userlogin.json();
    if(LoginSuccess.success === true) {
        this.props.setToken(LoginSuccess.results.token);
    }
  }
  onInputChange(index){
      return((el) => {
            if (isNaN(Number(el.target.value))) {
          // do nothing when a non digit is pressed
          return;
        } else if(el.target.value.length <= 1) {
        const otpArrayCopy = this.props.OTP.concat();
        otpArrayCopy[index] = el.target.value;
        this.props.setOTPArray(otpArrayCopy);
        }
      }
      )        
        // auto focus to next InputText if value is not blank
    //     if (value !== '') {
    //       if (index === 0) {
    //         secondTextInputRef.current.focus();
    //       } else if (index === 1) {
    //         thirdTextInputRef.current.focus();
    //       } else if (index === 2) {
    //         fourthTextInputRef.current.focus();
    //       }
    //     }
  }
  async verifyOTP(event) {
      event.preventDefault();
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', "Accept": "application/json" },
        body: JSON.stringify({ "phoneNumber": this.props.phoneNumber,
                                "verificationCode": this.props.OTP.join(""),
                                 "token":this.props.token })
    };
    const userlogin = await fetch("https://hiring.getbasis.co/candidate/users/phone/verify",requestOptions);
    const otpValidation = await userlogin.json();
    if(otpValidation.success === true) {
    if(otpValidation.results.isLogin === true) {
        this.props.setAccFName(otpValidation.results.user.firstName);
        this.props.setAccLName(otpValidation.results.user.lastName);
        this.props.setAccEmail(otpValidation.results.user.email);
        this.props.setAccRefCode(otpValidation.results.user.referralToken);
        this.props.setAuthToken(otpValidation.results.user.token);
        this.props.setUserId(otpValidation.results.user._id);
        this.props.history.replace("/Home");
    }
    else {
        this.props.history.replace("/createAccount");
    }
     } 
     //else {
    //     cleanOTPSlate();
    // }
  }

  render() {
    let i;
    for(i = 0; i<this.props.OTP.length;i++) {
        if(this.props.OTP[i] === "") {
            break;
        }
    }
    if(i === this.props.OTP.length) {
        this.submitButton.disabled= false
    }else {
        this.submitButton.disabled = true;
    }
    return (
        <div className = "parentDiv">
        <Login/>      
        <p>Enter OTP sent via SMS</p>
        <form onSubmit = {this.verifyOTP}>
        <div className = "otpDiv">{
            this.props.OTP.map((data,index)=>{
                return ( 
                <TextField style= {{width:"50px"}} variant = "outlined" key = {index} autoFocus={false} type = "text" onChange = {this.onInputChange(index)} value = {this.props.OTP[index]}/>
                )
            })           
        }
        </div>
        <div className = "buttonDiv">
            <Button variant= "outlined" type= "submit" disabled = {this.submitButton.disabled}>Verify</Button>
        </div>
        </form>
        </div>
    );
  }
}
const mapStateToProps = (state) => {
    return {
        phoneNumber : state.Login.phoneNumber,
        OTP: state.Login.OTP,
        token: state.Login.token
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setOTPArray: (otp) => dispatch(setOTPArray(otp)),
        setToken: (token) => dispatch(setToken(token)),
        setAccFName : (fname) => dispatch(setAccFName(fname)),
        setAccLName: (lname) => dispatch(setAccLName(lname)),
        setAuthToken: (authtoken) => dispatch(setAuthToken(authtoken)),
        setAccEmail: (email) => dispatch(setAccEmail(email)),
        setUserId: (id) => dispatch(setUserId(id)),
        setAccRefCode: (code) => dispatch(setAccRefCode(code))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(OTP);