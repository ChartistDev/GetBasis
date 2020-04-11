export const setPhoneNumber = (number) => {
    return {
        type: "SET_PHONE_NUMBER",
        payload: number
    }
}
export const setOTPArray = (otp) => {
    return {
        type: "SET_OTP",
        payload: otp
    }
}
export const setToken = (token) => {
    return {
        type: "SET_TOKEN",
        payload:token
    }
}
export const setTextError = (bool) => {
    return {
        type: "SET_TEXT_ERROR",
        payload: bool
    }
}
export const setAccFName = (fname) => {
    return {
        type: "SET_ACC_FNAME",
        payload: fname
    }
}
export const setAccLName = (lname) => {
    return {
        type: "SET_ACC_LNAME",
        payload: lname
    }
}
export const setAccEmail = (email) => {
    return {
        type: "SET_ACC_EMAIL",
        payload: email
    }
}
export const setAccRefCode = (refcode) => {
    return {
        type: "SET_ACC_REFCODE",
        payload: refcode
    }
}
export const cleanSlate = () => {
    return {
        type: "CLEAN_SLATE"
    }
}
export const setTNCChecked = (bool) => {
    return {
        type: "SET_TNC_CHECKED",
        payload:bool
    }
}