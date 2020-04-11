import React from "react";
import Logo from "./Logo";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AppBar from "@material-ui/core/AppBar";
import { Drawer, MenuItem } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import {setMenuToggleStatus} from "../Actions";
import {connect} from "react-redux";


const styles = {
    navBar: {'top': AppBar.height}
  }

class Home extends React.Component {
    constructor() {
        super();
        this.handleToggle = this.handleToggle.bind(this);
        this.handleProfileClick = this.handleProfileClick.bind(this);
        this.handleLogOutClick = this.handleLogOutClick.bind(this);
        this.toggleStatus = false;
    }
    handleToggle(e) {
        this.toggleStatus = !this.toggleStatus;
        this.props.setMenuToggleStatus(this.toggleStatus);
    }
    handleProfileClick(e) {
        this.props.history.push("/Profile");
    }
    async handleLogOutClick (e) {
        e.preventDefault();

        //Call APi for logging out User.
    const logOutOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json',
                    'Authorization': 'Bearer'+ ' '+ this.props.userId + ',' + this.props.authToken }
    };
    const logoutRequest = await fetch("https://hiring.getbasis.co/candidate/users/logout/" + this.props.userId,logOutOptions);
    const logOutResponse = await logoutRequest.json();
        if(logOutResponse.success === true) {
            this.props.history.replace("/", null,null);
        }
    }
    render() {
        return (
            <div>
            <AppBar
            title="Some title"
            children={<MenuIcon onClick={this.handleToggle} className="material-icons">menu</MenuIcon>}
          />
          <Drawer
            open={this.props.menuToggleStatus}
            width={200}>
            <MenuItem onClick = {this.handleProfileClick}>Profile</MenuItem>
            <MenuItem onClick = {this.handleLogOutClick}>Log out</MenuItem>
          </Drawer>
            <div className = "homeScreen">
            <Logo/>
            <div className = "dashboardContainer">
            <Card >
                <CardContent>
                    <Typography variant = "h3">Loren Epsum...</Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
             </Card>
             <Card >
                <CardContent>
                    <Typography variant = "h3">Loren Epsum...</Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
             </Card>
             <Card >
                <CardContent>
                    <Typography variant = "h3">Loren Epsum...</Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
             </Card>
            </div>
            </div>
            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        menuToggleStatus: state.HomePageReducer.MenutoggleStatus,
        userId: state.SignIn.userId,
        authToken: state.SignIn.authToken
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setMenuToggleStatus: (status) => dispatch(setMenuToggleStatus(status))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);