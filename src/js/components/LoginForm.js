import React, { Component } from "react";
import {connect} from "react-redux";
import "../../getbasis.module.css";
import WelcomeBox from "./Welcome";

class Login extends Component {
  constructor() {
    super();
  }

  render() {
      console.log(this.props);
    return (
        <div className = "parentDiv">
        <div className = "homeScreenHeading" >
          <img style = {{height: "80px"}} src = {this.props.heading.imageUrl}></img>
        </div>
          {
              <WelcomeBox/>
          }
          </div>
    );
  }
}
const mapStateToProps = (state) => {
    return (
        {
            heading: state.Login.heading
        }
    )
}

export default connect(mapStateToProps)(Login);