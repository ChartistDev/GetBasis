import React, { Component } from "react";
import {connect} from "react-redux";
import "../../getbasis.module.css";
import WelcomeBox from "./Welcome";

class Login extends Component {
  constructor() {
    super();
  }

  render() {
    return (
        <div className = "parentDiv">
        <div className = "homeScreenHeading" >
          <img style = {{height: "80px"}} src = {this.props.heading.imageUrl}></img>
        </div>
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
const mapStateToProps = (state) => {
    return (
        {
            heading: state.Heading.heading
        }
    )
}

export default connect(mapStateToProps)(Login);