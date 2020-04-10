import React, { Component } from "react";
import {connect} from "react-redux";
class CreateAccount extends Component {
  constructor() {
    super();
  }

  render() {
    return (
        <div className = "parentDiv">
        <div className = "homeScreenHeading" >
          <img style = {{height: "80px"}} src = {this.props.heading.imageUrl}></img>
        </div>
        <div className = "createAccDiv">
           <h2>Create an Account</h2>
           <p>Enter a few details to complete the registration process.</p>
           <div>
           <form>
               <div className = "createAccForm">
               <input type = "text" placeholder = "First Name"/>
               <input type = "text" placeholder = "Last Name"/>
               <input type = "text" placeholder = "email"/>
               <input type = "text" placeholder = "Referral Code"/>
                <div>
                <input type = "checkbox"/> <label>Agree to terms and conditions</label>
                </div>
                <button type = "submit">Create Accout</button>
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
            heading: state.Heading.heading
        }
    )
}

export default connect(mapStateToProps)(CreateAccount);