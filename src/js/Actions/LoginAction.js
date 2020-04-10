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