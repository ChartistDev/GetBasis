import React from "react";
import { connect } from "react-redux";
class Logo extends React.Component {
    render() {
        return(
        <div className = "homeScreenHeading" >
          <img style = {{height: "80px"}} src = {this.props.heading.imageUrl}></img>
        </div>
        )
    }
}
const mapStateToProps = (state) => {
    return (
        {
            heading: state.Heading.heading
        }
    )
}
export default connect(mapStateToProps)(Logo);