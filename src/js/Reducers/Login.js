const initialState = {
    "phoneNumber": "",
    "OTP" : ["","","",""],
    "token": undefined
}
const Login = (state=initialState, action) => {
    switch(action.type) {
        case "SET_PHONE_NUMBER" : return {
            ...state,
            "phoneNumber":action.payload
        }
        case "SET_OTP" : return {
            ...state,
            "OTP" : action.payload
        }
        case "SET_TOKEN": return {
            ...state,
            "token": action.payload
        }
        default: return state
    }
}
export default Login;