import {combineReducers} from "redux";
import Login from "./Login";
import Heading from "./Heading";

const rootReducer = combineReducers({
    Login,
    Heading
})
export default rootReducer;