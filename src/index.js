import WelcomeBox from "./js/components/Welcome";
import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import OTP from "./js/components/OTP";
import CreateAccount from "./js/components/CreateAccount";
import rootReducer from "./js/Reducers";
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
class App extends React.Component {
    render() {
        return (
            <Provider store = {store}>
                <Router>
      <Route exact path="/" component={WelcomeBox} />
      <Route path = "/OTP" component = {OTP}/>
      <Route path = "/CreateAccount" component = {CreateAccount}/>
    </Router>
            </Provider>
        )
    }
}

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;