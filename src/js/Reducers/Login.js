const initialState = {
    "phoneNumber": "",
    "OTP" : ["","","",""],
    "OTPAttempts":3,
    "token": undefined,
    "textBoxError":false,
    "Personal": {
        "FirstName" : "",
        "LastName" : "",
        "Email" : "",
        "ReferalCode" : "",
        "TNCChecked" : false
    }
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
        case "SET_TEXT_ERROR": return {
            ...state,
            "textBoxError": action.payload
        }
        case "SET_ACC_FNAME" : return {
            ...state,
            "Personal" : {
                ...state.Personal,
                "FirstName": action.payload
            }
        }
        case "SET_ACC_LNAME" : return {
            ...state,
            "Personal" : {
                ...state.Personal,
                "LastName": action.payload
            }
        }
        case "SET_ACC_EMAIL" : return {
            ...state,
            "Personal" : {
                ...state.Personal,
                "Email": action.payload
            }
        }
        case "SET_ACC_REFCODE" : return {
            ...state,
            "Personal" : {
                ...state.Personal,
                "ReferalCode": action.payload
            }
        }
        case "SET_TNC_CHECKED" : return {
            ...state,
            "Personal" : {
                ...state.Personal,
                "TNCChecked": action.payload
            }
        }
        case "CLEAN_SLATE" : return {
            ...state,
            "phoneNumber": "",
            "OTP" : ["","","",""],
            "token": undefined,
            "textBoxError":false,
            "Personal" : {
                ...state.Personal,
                "FirstName" : "",
                "LastName" : "",
                "Email" : "",
                "ReferalCode" : ""
            }

        }
        case "SET_OTP_ATTEMPTS": return {
            ...state,
            "OTP": ["","","",""],
            "OTPAttempts":action.payload
        }
        default: return state
    }
}
export default Login;