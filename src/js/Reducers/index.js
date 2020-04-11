import {combineReducers} from "redux";
import Login from "./Login";
import Heading from "./Heading";
import SignIn from "./SignIn";
import HomePageReducer from "./HomePage";

const rootReducer = combineReducers({
    Login,
    Heading,
    SignIn,
    HomePageReducer
})
export default rootReducer;