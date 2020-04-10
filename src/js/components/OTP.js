import React, { Component } from "react";
import {connect} from "react-redux";
import Login from "./LoginForm";
import "../../getbasis.module.css";
import  { setOTPArray, setToken } from "../Actions"

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
        }
        const otpArrayCopy = this.props.OTP.concat();
        otpArrayCopy[index] = el.target.value;
        this.props.setOTPArray(otpArrayCopy);
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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "phoneNumber": this.props.phoneNumber,
                                "verificationCode": this.props.OTP.join(""),
                                 "token":this.props.token })
    };
    const userlogin = await fetch("https://hiring.getbasis.co/candidate/users/phone/verify",requestOptions);
    const otpValidation = await userlogin.json();
    if(otpValidation.success === true) {
    if(otpValidation.results.isLogin === true) {
        this.props.history.push("/Home");
    }
    else {
        this.props.history.push("/createAccount");
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
        <div>
        <Login/>      
        <p>Enter OTP sent via SMS</p>
        <form onSubmit = {this.verifyOTP}>
        <div>{
            this.props.OTP.map((data,index)=>{
                return ( 
                <input key = {index} type = "text" maxLength = "1" onChange = {this.onInputChange(index)} value = {this.props.OTP[index]}/>
                )
            })           
        }
        </div>
        <button type= "submit" disabled = {this.submitButton.disabled}>Verify</button>
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
        setToken: (token) => dispatch(setToken(token))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(OTP);