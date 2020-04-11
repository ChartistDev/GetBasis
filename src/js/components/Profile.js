import React, { Component } from "react";
import {connect} from "react-redux";
import Logo from "./Logo";
import  {TextField,FormControlLabel, Checkbox, Button, Avatar} from "@material-ui/core";
import {setAccFName, setAccLName} from "../Actions"
class ProfilePage extends Component {
  constructor() {
    super();
    this.helperText = {
        firstName: "",
        email: ""
    }
    this.onSaveProfile = this.onSaveProfile.bind(this);
    this.setAccFName = this.setAccFName.bind(this);
    this.setAccLName = this.setAccLName.bind(this);
  }
  async onSaveProfile(e) {
    e.preventDefault();
    let emailVerificationToken = undefined,
            verifyEmail = undefined,
            verifyEmailStatus = undefined;

    const editProfileOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json',
                    'Authorization': 'Bearer'+ ' '+ this.props.userId + ',' + this.props.authToken },
        body: JSON.stringify({
            "firstName": this.props.FName, 
            "lastName": this.props.LName, 
            "avatar": null
            })
    };
    const editProfileRequest = await fetch("https://hiring.getbasis.co/candidate/users/" + this.props.userId,editProfileOptions);
    const profileEditJson = await editProfileRequest.json();
  }
  setAccFName(e) {
    this.props.setAccFName(e.target.value);
  }
  setAccLName(e) {
    this.props.setAccLName(e.target.value);
    }
  render() {
      console.log(this.props.FName);
    return (
        <div className = "parentDiv">
        <Logo/>
        <div className = "createAccDiv">
           <h2>Edit Profile</h2>
    <Avatar>{this.props.FName}</Avatar>
           <div>
           <form onSubmit = {this.onSaveProfile}>
               <div className = "createAccForm">
               <TextField onChange = {this.setAccFName} id="outlined-helperText"
                label="First Name"
                helperText = {this.helperText.firstName}
                required
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
                label="Email"
                disabled
                helperText = {this.helperText.email}
                value = {this.props.Email}
                variant="outlined"
                color ="primary"/> <br/>
                 <Button color = "primary" variant = "outlined" type = "submit" >Save</Button>
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
            PhoneNumber: state.Login.phoneNumber,
            authToken: state.SignIn.authToken,
            userId: state.SignIn.userId
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);