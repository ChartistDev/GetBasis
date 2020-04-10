import React from "react";
import Logo from "./Logo";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
class Home extends React.Component {
    render() {
        return (
            <div>
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
            </div>
            </div>
        )
    }
}
export default Home;