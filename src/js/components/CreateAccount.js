import React, { Component } from "react";
import {connect} from "react-redux";
import Logo from "./Logo";
import  {TextField,FormControlLabel, Checkbox, Button} from "@material-ui/core";
import {setAccFName, setAccLName, setAccEmail, setAccRefCode, setUserId, setAuthToken, setTNCChecked} from "../Actions"
class CreateAccount extends Component {
  constructor() {
    super();
    this.helperText = {
        firstName: "",
        email: ""
    }
    this.onCreateAccClicked = this.onCreateAccClicked.bind(this);
    this.setAccFName = this.setAccFName.bind(this);
    this.setAccLName = this.setAccLName.bind(this);
    this.setAccEmail = this.setAccEmail.bind(this);
    this.setAccRefCode = this.setAccRefCode.bind(this);
    this.checkboxClicked = this.checkboxClicked.bind(this);
  }
  async onCreateAccClicked(e) {
    e.preventDefault();
    let emailVerificationToken = undefined,
            verifyEmail = undefined,
            verifyEmailStatus = undefined;

    const reqEmailVerificationOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
        "email": this.props.Email,
        "token": this.props.token.toString(),
        "phoneNumber": this.props.PhoneNumber
    })
    }
    const createAccOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "firstName": this.props.FName, 
            "lastName": this.props.LName, 
            "email": this.props.Email, 
            "phoneNumber": this.props.PhoneNumber,
            "referredCodeKey": "U3DEAQ",
            "agreeToPrivacyPolicy": true,
            "token": this.props.token,
            "source": "WEB_APP"
            })
    };
    const requestEmailVerification = await fetch("https://hiring.getbasis.co/candidate/users/email",reqEmailVerificationOptions);
    const emailverificationstatus = await requestEmailVerification.json();

    if(emailverificationstatus.success === true) {
        const verifyEmailOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "email":this.props.Email,
                "token":emailverificationstatus.results.token.toString() ,
                "verificationToken": "112233"
            })
            
        }
        verifyEmail = await fetch("https://hiring.getbasis.co/candidate/users/email/verify",verifyEmailOptions)
        verifyEmailStatus =  await verifyEmail.json();
        if(verifyEmailStatus.success === true) {
            const usersignup = await fetch("https://hiring.getbasis.co/candidate/users",createAccOptions);
            const SignUpSuccess = await usersignup.json();
            if(SignUpSuccess.success === true) {
            console.log(SignUpSuccess);
            this.props.setUserID(SignUpSuccess.results.user._id);
            this.props.setAuthToken(SignUpSuccess.results.user.token);
            this.props.history.replace("/Home");
    }                       
        }
    }


    
  }
  checkboxClicked(e) {
      this.props.setTNCChecked(e.target.checked)
  }
  setAccFName(e) {
    this.props.setAccFName(e.target.value);
  }
  setAccLName(e) {
    this.props.setAccLName(e.target.value);
    }
    setAccEmail(e) {
        this.props.setAccEmail(e.target.value);
    }
    setAccRefCode(e) {
        this.props.setAccRefCode(e.target.value);
    }
  render() {
    return (
        <div className = "parentDiv">
        <Logo/>
        <div className = "createAccDiv">
           <h2>Create an Account</h2>
           <p>Enter a few details to complete the registration process.</p>
           <div>
           <form onSubmit = {this.onCreateAccClicked}>
               <div className = "createAccForm">
               <TextField onChange = {this.setAccFName} id="outlined-helperText"
                label="First Name"
                helperText = {this.helperText.firstName}
                value = {this.props.FName}
                variant="outlined"
                required
                color ="primary"/> <br/>
               <TextField id="outlined-helperText"
               onChange = {this.setAccLName}
                label="Last Name"
                variant="outlined"
                value = {this.props.LName}
                color ="primary"/> <br/>
               <TextField id="outlined-helperText"
               onChange = {this.setAccEmail}
                label="Email"
                helperText = {this.helperText.email}
                value = {this.props.Email}
                variant="outlined"
                color ="primary"/> <br/>
               <TextField id="outlined-helperText"
               onChange = {this.setAccRefCode}
               value = {this.props.RefCode}
                label="Referral Code"
                variant="outlined"
                color ="primary"/> <br/>
                <FormControlLabel
                    control={<Checkbox name="jason" onChange = {this.checkboxClicked}/>}
                    label="I agree to the terms and conditions"
                /> <br/>
                 <Button color = "primary" variant = "outlined" disabled = {!this.props.tncChecked} type = "submit" >Create Account</Button>
                </div>
           </form>
           </div>
         </div>  
          </div>
    );
  }
}
const mapStateToProps = (state) => {
    return (
        {
            heading: state.Heading.heading,
            token: state.Login.token,
            FName: state.Login.Personal.FirstName,
            LName : state.Login.Personal.LastName,
            Email: state.Login.Personal.Email,
            RefCode : state.Login.Personal.ReferalCode,
            PhoneNumber: state.Login.phoneNumber,
            tncChecked: state.Login.Personal.TNCChecked
        }
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
            setAccFName: (fname) => dispatch(setAccFName(fname)),
            setAccLName: (lname) => dispatch(setAccLName(lname)),
            setAccEmail: (email) => dispatch(setAccEmail(email)),
            setAccRefCode: (refcode) => dispatch(setAccRefCode(refcode)),
            setUserID: (id) => dispatch(setUserId(id)),
            setAuthToken: (token) => dispatch(setAuthToken(token)),
            setTNCChecked: (bool) => dispatch(setTNCChecked(bool))
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);