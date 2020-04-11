import React from "react";
import Logo from "./Logo";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import NavBar from "@material-ui/core/AppBar"
import AppBar from "@material-ui/core/AppBar";
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
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
    handleLogOutClick (e) {

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
        menuToggleStatus: state.HomePageReducer.MenutoggleStatus
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setMenuToggleStatus: (status) => dispatch(setMenuToggleStatus(status))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);